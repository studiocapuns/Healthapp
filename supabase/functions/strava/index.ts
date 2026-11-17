// Strava-Integration
//  GET  /strava?code=…&state=<user-jwt>   OAuth-Callback (Scope: activity:read_all)
//  GET  /strava?hub.challenge=…           Webhook-Verifizierung
//  POST /strava                           Webhook-Event (Aktivität erstellt/geändert/gelöscht, Deauthorisierung)
// Secrets: STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_VERIFY_TOKEN
import { serviceClient, json, mapSport, intensityFromHr } from '../_shared/db.ts';

const sb = serviceClient();
const API = 'https://www.strava.com/api/v3';

async function tokenFor(userId: string) {
  const { data: t } = await sb.from('integration_tokens').select('*').eq('user_id', userId).eq('provider', 'strava').single();
  if (!t) throw new Error('Kein Token');
  if (new Date(t.expires_at).getTime() > Date.now() + 60_000) return t.access_token;
  const r = await fetch('https://www.strava.com/oauth/token', { method: 'POST', body: new URLSearchParams({
    client_id: Deno.env.get('STRAVA_CLIENT_ID')!, client_secret: Deno.env.get('STRAVA_CLIENT_SECRET')!, grant_type: 'refresh_token', refresh_token: t.refresh_token }) });
  const n = await r.json();
  await sb.from('integration_tokens').update({ access_token: n.access_token, refresh_token: n.refresh_token, expires_at: new Date(n.expires_at * 1000).toISOString() }).eq('user_id', userId).eq('provider', 'strava');
  return n.access_token;
}

async function importActivity(userId: string, activityId: number) {
  const token = await tokenFor(userId);
  const a = await (await fetch(`${API}/activities/${activityId}`, { headers: { Authorization: `Bearer ${token}` } })).json();
  const { data: p } = await sb.from('profiles').select('birth_date').eq('user_id', userId).single();
  const age = p?.birth_date ? Math.floor((Date.now() - Date.parse(p.birth_date)) / 31_557_600_000) : 35;
  const start = new Date(a.start_date_local);
  // Strava liefert "calories" (geschätzt) bzw. bei Rad mit Leistungsmesser "kilojoules" (mechanische Arbeit ≈ kcal Verbrauch bei ~24 % Wirkungsgrad)
  const kcal = a.calories ?? (a.kilojoules ? a.kilojoules : null);
  const isRunna = /runna/i.test(`${a.name} ${a.description ?? ''} ${a.device_name ?? ''}`);
  await sb.from('trainings').upsert({
    user_id: userId, date: a.start_date_local.slice(0, 10), start_time: a.start_date_local.slice(11, 16),
    type: mapSport(a.sport_type ?? a.type), intensity: intensityFromHr(a.average_heartrate ?? null, age),
    duration_min: Math.round(a.moving_time / 60), name: a.name, measured_kcal: kcal, avg_hr: a.average_heartrate ? Math.round(a.average_heartrate) : null,
    distance_m: a.distance, source: isRunna ? 'runna' : 'strava', external_id: String(a.id),
  }, { onConflict: 'user_id,source,external_id' });
  await sb.from('integrations').update({ last_sync_at: new Date().toISOString() }).eq('user_id', userId).eq('provider', 'strava');
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (req.method === 'GET' && url.searchParams.get('hub.mode') === 'subscribe') {
    if (url.searchParams.get('hub.verify_token') !== Deno.env.get('STRAVA_VERIFY_TOKEN')) return json({ error: 'forbidden' }, 403);
    return json({ 'hub.challenge': url.searchParams.get('hub.challenge') });
  }
  if (req.method === 'GET' && url.searchParams.get('code')) {
    const { data: { user } } = await sb.auth.getUser(url.searchParams.get('state') ?? '');
    if (!user) return json({ error: 'Ungültiger Status' }, 401);
    const r = await fetch('https://www.strava.com/oauth/token', { method: 'POST', body: new URLSearchParams({
      client_id: Deno.env.get('STRAVA_CLIENT_ID')!, client_secret: Deno.env.get('STRAVA_CLIENT_SECRET')!, code: url.searchParams.get('code')!, grant_type: 'authorization_code' }) });
    const t = await r.json();
    if (!t.access_token) return json({ error: 'Strava-Autorisierung fehlgeschlagen' }, 400);
    await sb.from('integration_tokens').upsert({ user_id: user.id, provider: 'strava', access_token: t.access_token, refresh_token: t.refresh_token, expires_at: new Date(t.expires_at * 1000).toISOString() });
    await sb.from('integrations').upsert({ user_id: user.id, provider: 'strava', external_user_id: String(t.athlete.id), scopes: (url.searchParams.get('scope') ?? '').split(','), status: 'connected' });
    return Response.redirect('fiber://integrations/strava?ok=1', 302);
  }
  if (req.method === 'POST') {
    const ev = await req.json();
    const { data: integ } = await sb.from('integrations').select('user_id').eq('provider', 'strava').eq('external_user_id', String(ev.owner_id)).maybeSingle();
    if (!integ) return json({ ok: true });
    if (ev.object_type === 'athlete' && ev.updates?.authorized === 'false') {
      await sb.from('integration_tokens').delete().eq('user_id', integ.user_id).eq('provider', 'strava');
      await sb.from('integrations').update({ status: 'revoked' }).eq('user_id', integ.user_id).eq('provider', 'strava');
    } else if (ev.object_type === 'activity' && ev.aspect_type === 'delete') {
      await sb.from('trainings').delete().eq('user_id', integ.user_id).in('source', ['strava', 'runna']).eq('external_id', String(ev.object_id));
    } else if (ev.object_type === 'activity') {
      await importActivity(integ.user_id, ev.object_id);
    }
    return json({ ok: true }); // Strava erwartet Antwort innerhalb 2 Sek.
  }
  return json({ error: 'not found' }, 404);
});
