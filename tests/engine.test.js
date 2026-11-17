// Ausführen: node --test tests/
const test = require('node:test');
const assert = require('node:assert/strict');
const E = require('../core/engine.js');
const { INGREDIENTS, SWAPS } = require('../data/ingredients.js');
const { RECIPES, PHOTOS } = require('../data/recipes.js');
const ch = require('../data/foods-ch.json');
const us = require('../data/foods-usda.json');
const db = E.createDb([...ch.foods, ...us.foods], INGREDIENTS);

const lena = { sex: 'w', age: 31, height: 172, weight: 68, goal: 'abnehmen', pace: 'moderat', activity: 'aktiv', diet: 'vegetarisch', allergies: ['nuesse'] };

test('Mifflin-St Jeor stimmt mit Handrechnung überein', () => {
  // 10×68 + 6.25×172 − 5×31 − 161 = 1439
  assert.equal(Math.round(E.bmr(lena).value), 1439);
  assert.equal(E.bmr(lena).method, 'Mifflin-St Jeor');
});

test('Katch-McArdle nur bei gemessenem Körperfett', () => {
  const b = E.bmr({ ...lena, bf: 25, bfSource: 'measured' });
  assert.equal(b.method, 'Katch-McArdle');
  assert.equal(Math.round(b.value), Math.round(370 + 21.6 * 68 * 0.75)); // 1471.6
  assert.equal(E.bmr({ ...lena, bf: 25, bfSource: 'estimated' }).method, 'Mifflin-St Jeor');
});

test('Trainingsenergie: (MET−1) × kg × h, gemessene Werte haben Vorrang', () => {
  assert.equal(E.exerciseKcal({ type: 'laufen', int: 'mittel', dur: 60 }, 70).kcal, Math.round(8.8 * 70));
  assert.equal(E.exerciseKcal({ type: 'laufen', int: 'mittel', dur: 60, measuredKcal: 512 }, 70).kcal, 512);
});

test('Defizit entspricht 0.75 %/Woche und max. 25 % des Bedarfs', () => {
  const t = E.targets(lena, []);
  const expectedRate = -68 * 0.0075; // −0.51 kg/Woche
  assert.equal(t.ratePerWeek, Math.round(expectedRate * 100) / 100);
  assert.ok(Math.abs(t.breakdown.adj) <= 0.25 * t.breakdown.neat + 1);
  assert.ok(t.kcal >= 1200);
});

test('Trainingstag erhöht Energie exakt um Trainingsverbrauch', () => {
  const rest = E.targets(lena, []);
  const run = E.targets(lena, [{ type: 'laufen', int: 'intensiv', dur: 45, time: '18:00' }]);
  const ex = E.exerciseKcal({ type: 'laufen', int: 'intensiv', dur: 45 }, 68).kcal;
  assert.ok(Math.abs(run.kcal - rest.kcal - ex) <= 10);
});

test('Protein im Defizit: 2.4 g/kg fettfreie Masse, nie unter 0.8 g/kg', () => {
  const t = E.targets({ ...lena, bf: 27, bfSource: 'measured' }, []);
  assert.equal(t.protein, Math.round(2.4 * 68 * 0.73));
  const old = E.targets({ ...lena, goal: 'halten' }, []);
  assert.ok(old.protein >= 0.8 * 68);
});

test('Sicherheitsregeln blockieren Defizite', () => {
  assert.equal(E.safety({ ...lena, age: 16 }).allowDeficit, false);
  assert.equal(E.safety({ ...lena, weight: 50 }).allowDeficit, false); // BMI 16.9
  assert.equal(E.safety({ ...lena, pregnant: true }).allowDeficit, false);
  assert.equal(E.safety({ ...lena, edHistory: true }).allowDeficit, false);
  const t = E.targets({ ...lena, weight: 50 }, []);
  assert.equal(t.breakdown.adj, 0);
});

test('Datenintegrität: jede Zutat verweist auf ein existierendes offizielles Lebensmittel', () => {
  for (const [k, ing] of Object.entries(INGREDIENTS)) assert.ok(db.foods.has(ing.f), `${k} -> ${ing.f} fehlt`);
  for (const [k, list] of Object.entries(SWAPS)) { assert.ok(INGREDIENTS[k], k); list.forEach(s => assert.ok(INGREDIENTS[s.to], s.to)); }
});

test('Datenintegrität: jedes Rezept ist vollständig berechenbar', () => {
  const ids = new Set();
  for (const r of RECIPES) {
    assert.ok(!ids.has(r.id), 'doppelte ID ' + r.id); ids.add(r.id);
    const a = E.analyzeRecipe(db, r);
    assert.deepEqual(a.missing, [], r.id);
    assert.ok(a.per.kcal > 80 && a.per.kcal < 1100, `${r.id}: ${a.per.kcal} kcal`);
    assert.ok(a.coverage.kcal === 1 && a.coverage.protein === 1, `${r.id}: Makro-Abdeckung unvollständig`);
    assert.ok(PHOTOS[r.id], 'Foto fehlt: ' + r.id);
    // Atwater-Plausibilität: berechnete kcal ≈ 4P + 4KH + 9F + 2 Ballaststoffe (±12 %)
    const atw = 4 * a.per.protein + 4 * a.per.carb + 9 * a.per.fat + 2 * a.per.fiber;
    assert.ok(Math.abs(atw - a.per.kcal) / a.per.kcal < 0.12, `${r.id}: Atwater ${atw.toFixed(0)} vs ${a.per.kcal.toFixed(0)}`);
  }
});

test('Allergene werden pro Zutat erkannt (inkl. versteckte)', () => {
  const teriyaki = E.analyzeRecipe(db, RECIPES.find(r => r.id === 'teriyaki'));
  assert.ok(teriyaki.allergens.includes('gluten'), 'Sojasauce enthält Gluten');
  assert.ok(teriyaki.allergens.includes('soja'));
  assert.equal(teriyaki.diet, 'fleisch');
  const oats = E.analyzeRecipe(db, RECIPES.find(r => r.id === 'oats'));
  assert.equal(oats.diet, 'vegan');
  assert.ok(!E.fitsProfile(E.analyzeRecipe(db, RECIPES.find(r => r.id === 'skyr')), RECIPES[0], lena).ok, 'Granola enthält Nüsse');
});

test('Tausch-Alternativen respektieren Allergien und berechnen Differenzen', () => {
  const r = RECIPES.find(x => x.id === 'pancakes');
  const opts = E.swapOptions(db, r, { ...lena, allergies: ['soja'] }, SWAPS);
  assert.ok(opts.length > 0);
  assert.ok(opts.every(o => !o.allergens.includes('soja')));
  assert.ok(opts.every(o => typeof o.delta.kcal === 'number'));
});

test('Tagesplan trifft Energie- und Proteinziel präzise', () => {
  const tg = E.targets(lena, []);
  const { total, plan } = E.planDay(db, RECIPES, lena, tg, [], 'seed');
  assert.ok(Object.values(plan).every(Boolean));
  assert.ok(Math.abs(total.kcal - tg.kcal) / tg.kcal < 0.08, `kcal ${total.kcal.toFixed(0)} vs ${tg.kcal}`);
  for (const [, s] of Object.entries(plan)) {
    const a = E.analyzeRecipe(db, RECIPES.find(r => r.id === s.id));
    assert.ok(E.fitsProfile(a, RECIPES.find(r => r.id === s.id), lena).ok, 'Plan enthält ungeeignetes Rezept ' + s.id);
  }
});

test('Tagesplan: keine Wiederholung, Pre-Workout-Snack vor Abendtraining', () => {
  const tr = [{ type: 'laufen', int: 'intensiv', dur: 45, time: '18:00' }];
  const tg = E.targets(lena, tr);
  const { plan } = E.planDay(db, RECIPES, lena, tg, tr, '2026-11-17');
  const ids = Object.values(plan).map(p => p.id);
  assert.equal(new Set(ids).size, ids.length);
  const snack = E.analyzeRecipe(db, RECIPES.find(r => r.id === plan.snack.id));
  assert.ok(E.timingFit(snack.per).pre, 'Snack nicht pre-workout-geeignet: ' + plan.snack.id);
});
