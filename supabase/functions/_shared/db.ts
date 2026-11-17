import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';

/** Client im Namen des aufrufenden Nutzers (RLS greift) */
export function userClient(req: Request): SupabaseClient {
  return createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
    global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } },
  });
}
/** Service-Client für Webhooks und Token-Verwaltung (umgeht RLS – nur serverseitig!) */
export function serviceClient(): SupabaseClient {
  return createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
}
export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

/** Sportart-Mapping der Anbieter → Fiber */
export function mapSport(raw: string): string {
  const s = raw.toLowerCase();
  if (/run|lauf|trail|treadmill/.test(s)) return 'laufen';
  if (/ride|cycl|bike|rad/.test(s)) return 'rad';
  if (/swim/.test(s)) return 'schwimmen';
  if (/yoga|pilates|mobility/.test(s)) return 'yoga';
  if (/hiit|crossfit|interval|workout/.test(s)) return 'hiit';
  return 'kraft';
}
/** Intensität aus Durchschnittspuls relativ zur geschätzten HFmax (Tanaka: 208 − 0.7 × Alter) */
export function intensityFromHr(avgHr: number | null, age: number): string {
  if (!avgHr) return 'mittel';
  const pct = avgHr / (208 - 0.7 * age);
  return pct < 0.7 ? 'locker' : pct < 0.82 ? 'mittel' : 'intensiv';
}
