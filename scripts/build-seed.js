// Erzeugt supabase/seed.sql aus den Daten in data/. Ausführen: node scripts/build-seed.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const ch = require('../data/foods-ch.json');
const us = require('../data/foods-usda.json');
const { INGREDIENTS, SWAPS } = require('../data/ingredients.js');
const { RECIPES, PHOTOS } = require('../data/recipes.js');
const { ARTICLES } = require('../data/knowledge.js');

const q = v => v == null ? 'null' : `'${String(v).replace(/'/g, "''")}'`;
const arr = (a, type) => `array[${a.map(q).join(',')}]::${type}[]`;
const out = ['-- Automatisch erzeugt von scripts/build-seed.js – nicht von Hand bearbeiten', 'begin;'];

out.push(`insert into sources (id,name,url,version,license) values
 ('blv','Schweizer Nährwertdatenbank, BLV','https://naehrwertdaten.ch','2026-07','frei nutzbar mit Quellenangabe'),
 ('usda','USDA FoodData Central – SR Legacy','https://fdc.nal.usda.gov','2018-04','Public Domain (CC0)');`);

const foods = [...ch.foods.map(f => ['blv', f]), ...us.foods.map(f => ['usda', f])];
for (let i = 0; i < foods.length; i += 200) {
  out.push('insert into foods (id,source_id,name,synonyms,category,density,nutrients,estimated) values\n' +
    foods.slice(i, i + 200).map(([s, f]) => `(${q(f.id)},${q(s)},${q(f.name)},${q(f.syn)},${q(f.cat)},${f.density ?? 'null'},${q(JSON.stringify(f.n))}::jsonb,${arr(f.est, 'text')})`).join(',\n') + ';');
}
out.push('insert into ingredients (key,food_id,name,allergens,diet,units,note) values\n' +
  Object.entries(INGREDIENTS).map(([k, i]) => `(${q(k)},${q(i.f)},${q(i.n)},${arr(i.al, 'allergen')},${q(i.diet)},${q(JSON.stringify(i.unit || {}))}::jsonb,${q(i.note)})`).join(',\n') + ';');
out.push('insert into swaps (from_key,to_key,reason,factor) values\n' +
  Object.entries(SWAPS).flatMap(([f, l]) => l.map(s => `(${q(f)},${q(s.to)},${q(s.why)},${s.factor || 1})`)).join(',\n') + ';');
out.push("-- Entwicklungsdaten: vor Launch fachlich prüfen und reviewed_by durch die prüfende Fachperson ersetzen");
out.push('insert into recipes (id,name,meals,minutes,serves,steps,photo,status,reviewed_by,reviewed_at) values\n' +
  RECIPES.map(r => `(${q(r.id)},${q(r.n)},${arr(r.meals, 'meal_slot')},${r.min},${r.serves},${arr(r.st, 'text')},${q('img/' + PHOTOS[r.id] + '.jpg')},'published','Seed (Review ausstehend)',now())`).join(',\n') + ';');
out.push('insert into recipe_ingredients (recipe_id,position,ingredient_key,grams,display) values\n' +
  RECIPES.flatMap(r => r.ing.map(([k, g, d], i) => `(${q(r.id)},${i},${q(k)},${g},${q(d)})`)).join(',\n') + ';');
out.push('insert into articles (slug,title,summary,body_md,category,read_min,sources,status) values\n' +
  ARTICLES.map(a => `(${q(a.slug)},${q(a.title)},${q(a.summary)},${q(a.body.join('\n\n'))},${q(a.cat)},${a.min},${q(JSON.stringify(a.sources.map(([label, url]) => ({ label, url }))))}::jsonb,'in_review')`).join(',\n') + ';');
out.push('commit;');
fs.writeFileSync(path.join(root, 'supabase/seed.sql'), out.join('\n\n') + '\n');
console.log('seed.sql:', foods.length, 'Lebensmittel,', Object.keys(INGREDIENTS).length, 'Zutaten,', RECIPES.length, 'Rezepte,', ARTICLES.length, 'Artikel');

// Kompakte Lebensmitteldatei für den Web-Prototyp (nur in Zutaten verwendete Einträge)
const used = new Set(Object.values(INGREDIENTS).map(i => i.f));
const appFoods = [...ch.foods, ...us.foods].filter(f => used.has(f.id)).map(f => ({ id: f.id, name: f.name, n: f.n, est: f.est }));
fs.writeFileSync(path.join(root, 'data/foods-app.js'),
  '/* Automatisch erzeugt von scripts/build-seed.js. Quelle: Schweizer Nährwertdatenbank (BLV) und USDA FoodData Central */\n' +
  'window.FIBER_FOODS = ' + JSON.stringify(appFoods) + ';\n');
console.log('foods-app.js:', appFoods.length, 'Lebensmittel');
