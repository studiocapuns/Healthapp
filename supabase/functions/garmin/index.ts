// Garmin Health API (Push-Modell). Voraussetzung: Zulassung im Garmin Connect Developer Program.
//  POST /garmin   Push von activities / dailies / sleeps / bodyComps
// Garmin sendet pro Nutzer-Token (userAccessToken) Arrays von Summaries.
import { serviceClient, json, mapSport, intensityFromHr } from '../_shared/db.ts';
const sb = serviceClient();

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'not found' }, 404);
  const body = await req.json();
  for (const a of body.activities ?? []) {
    const { data: integ } = await sb.from('integrations').select('user_id').eq('provider', 'garmin').eq('external_user_id', a.userId).maybeSingle();
    if (!integ) continue;
    const start = new Date((a.startTimeInSeconds + (a.startTimeOffsetInSeconds ?? 0)) * 1000).toISOString();
    await sb.from('trainings').upsert({
      user_id: integ.user_id, date: start.slice(0, 10), start_time: start.slice(11, 16), type: mapSport(a.activityType ?? ''),
      intensity: intensityFromHr(a.averageHeartRateInBeatsPerMinute ?? null, 35), duration_min: Math.round(a.durationInSeconds / 60),
      name: a.activityName ?? a.activityType, measured_kcal: a.activeKilocalories ?? null, avg_hr: a.averageHeartRateInBeatsPerMinute ?? null,
      distance_m: a.distanceInMeters ?? null, source: /runna/i.test(a.activityName ?? '') ? 'runna' : 'garmin', external_id: String(a.summaryId),
    }, { onConflict: 'user_id,source,external_id' });
  }
  for (const b of body.bodyComps ?? []) {
    const { data: integ } = await sb.from('integrations').select('user_id').eq('provider', 'garmin').eq('external_user_id', b.userId).maybeSingle();
    if (!integ || !b.weightInGrams) continue;
    await sb.from('body_metrics').upsert({ user_id: integ.user_id, measured_on: new Date(b.measurementTimeInSeconds * 1000).toISOString().slice(0, 10),
      weight_kg: b.weightInGrams / 1000, body_fat_pct: b.bodyFatInPercent ?? null, bf_source: b.bodyFatInPercent ? 'measured' : null, source: 'garmin' }, { onConflict: 'user_id,measured_on,source' });
  }
  return json({ ok: true });
});
