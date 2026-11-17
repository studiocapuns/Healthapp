// Apple Health hat keine Server-API: Die iOS-App liest HealthKit (Expo + react-native-health)
// und sendet Workouts und Körperwerte hierher. Validierung serverseitig, Speicherung mit RLS im Namen des Nutzers.
// POST /health-sync { workouts: [...], bodyMass: [...], bodyFat: [...] }
import { userClient, json, mapSport, intensityFromHr } from '../_shared/db.ts';

Deno.serve(async (req) => {
  const sb = userClient(req);
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return json({ error: 'Nicht angemeldet' }, 401);
  const { workouts = [], bodyMass = [], bodyFat = [], age = 35 } = await req.json();
  const rows = workouts.filter((w: any) => w.duration > 0 && w.duration < 86400).map((w: any) => ({
    user_id: user.id, date: w.start.slice(0, 10), start_time: w.start.slice(11, 16), type: mapSport(w.activityName ?? ''),
    intensity: intensityFromHr(w.avgHeartRate ?? null, age), duration_min: Math.round(w.duration / 60), name: w.activityName,
    measured_kcal: w.activeEnergyBurned ?? null, distance_m: w.distance ?? null,
    source: /runna/i.test(w.sourceName ?? '') ? 'runna' : 'apple_health', external_id: w.id,
  }));
  if (rows.length) await sb.from('trainings').upsert(rows, { onConflict: 'user_id,source,external_id' });
  const fatByDay = Object.fromEntries(bodyFat.map((b: any) => [b.date.slice(0, 10), b.value * 100]));
  const metrics = bodyMass.filter((b: any) => b.value > 30 && b.value < 300).map((b: any) => ({ user_id: user.id, measured_on: b.date.slice(0, 10), weight_kg: b.value,
    body_fat_pct: fatByDay[b.date.slice(0, 10)] ?? null, bf_source: fatByDay[b.date.slice(0, 10)] ? 'measured' : null, source: 'apple_health' }));
  if (metrics.length) await sb.from('body_metrics').upsert(metrics, { onConflict: 'user_id,measured_on,source' });
  await sb.from('integrations').upsert({ user_id: user.id, provider: 'apple_health', last_sync_at: new Date().toISOString(), status: 'connected' });
  return json({ imported: { workouts: rows.length, metrics: metrics.length } });
});
