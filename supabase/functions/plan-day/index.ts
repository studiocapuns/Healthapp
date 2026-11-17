// POST /plan-day { date: "2026-11-17" }
// Berechnet Tagesziele (mit Trainings des Tages) und füllt nicht gesperrte Mahlzeiten mit passenden Rezepten.
import './../_shared/engine.js';
import { userClient, json } from '../_shared/db.ts';
const E = (globalThis as any).FiberEngine;

let cache: { db: any; recipes: any[]; at: number } | null = null;

async function catalog(sb: any) {
  if (cache && Date.now() - cache.at < 10 * 60_000) return cache;
  const [{ data: foods }, { data: ings }, { data: recipes }, { data: ri }] = await Promise.all([
    sb.from('foods').select('id,nutrients'),
    sb.from('ingredients').select('*'),
    sb.from('recipes').select('id,name,meals,serves').eq('status', 'published').is('created_by', null),
    sb.from('recipe_ingredients').select('recipe_id,position,ingredient_key,grams').order('position'),
  ]);
  const ingredients = Object.fromEntries(ings.map((i: any) => [i.key, { f: i.food_id, n: i.name, al: i.allergens, diet: i.diet }]));
  const db = E.createDb(foods.map((f: any) => ({ id: f.id, n: f.nutrients })), ingredients);
  const byRecipe: Record<string, [string, number][]> = {};
  for (const x of ri) (byRecipe[x.recipe_id] ??= []).push([x.ingredient_key, Number(x.grams)]);
  const list = recipes.map((r: any) => ({ id: r.id, n: r.name, meals: r.meals, serves: r.serves, ing: byRecipe[r.id] ?? [] }));
  cache = { db, recipes: list, at: Date.now() };
  return cache;
}

Deno.serve(async (req) => {
  const sb = userClient(req);
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return json({ error: 'Nicht angemeldet' }, 401);
  const { date } = await req.json();
  const [{ data: p }, { data: m }, { data: tr }, { data: locked }] = await Promise.all([
    sb.from('profiles').select('*').single(),
    sb.from('body_metrics').select('*').order('measured_on', { ascending: false }).limit(1).maybeSingle(),
    sb.from('trainings').select('*').eq('date', date),
    sb.from('meal_plan_entries').select('slot,recipe_id').eq('date', date).eq('locked', true),
  ]);
  if (!p || !m) return json({ error: 'Profil oder Körperdaten fehlen' }, 400);
  const age = Math.floor((Date.parse(date) - Date.parse(p.birth_date)) / 31_557_600_000);
  const profile = { sex: p.sex, age, height: Number(p.height_cm), weight: Number(m.weight_kg), bf: m.body_fat_pct, bfSource: m.bf_source,
    goal: p.goal, pace: p.pace, activity: p.activity, diet: p.diet, allergies: p.allergies, dislikes: (p.dislikes || []).join(','),
    pregnant: p.pregnant, lactating: p.lactating, edHistory: p.ed_history, conditions: p.conditions, target: p.target_weight_kg };
  const errors = E.validateProfile(profile);
  if (errors.length) return json({ error: errors }, 400);
  const trainings = (tr || []).map((t: any) => ({ type: t.type, int: t.intensity, dur: t.duration_min, time: t.start_time.slice(0, 5), measuredKcal: t.measured_kcal, src: t.source }));
  const targets = E.targets(profile, trainings);
  const { db, recipes } = await catalog(sb);
  const fixed = Object.fromEntries((locked || []).map((l: any) => [l.slot, l.recipe_id]));
  const result = E.planDay(db, recipes, profile, targets, trainings, user.id + date, fixed);
  const rows = Object.entries(result.plan).filter(([s, v]) => v && !fixed[s]).map(([slot, v]: any) => ({ user_id: user.id, date, slot, recipe_id: v.id, factor: v.factor, locked: false }));
  if (rows.length) await sb.from('meal_plan_entries').upsert(rows);
  return json({ targets: p.ed_history ? { ...targets, kcal: null } : targets, plan: result.plan, deviation: result.deviation, tips: trainings.map((t: any) => E.trainingTips(t, profile)) });
});
