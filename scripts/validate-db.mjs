import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';
const repo = new URL('..', import.meta.url).pathname;
const db = new PGlite();
// Supabase-Umgebung nachbilden: auth-Schema, Rollen, auth.uid()
await db.exec(`
  create schema auth;
  create table auth.users (id uuid primary key);
  create role anon; create role authenticated; create role service_role bypassrls;
  create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
  grant usage on schema public, auth to anon, authenticated;
`);
await db.exec(fs.readFileSync(repo + '/supabase/migrations/20261117000001_init.sql', 'utf8'));
await db.exec(`grant select, insert, update, delete on all tables in schema public to anon, authenticated; grant execute on function auth.uid() to anon, authenticated;`);
await db.exec(fs.readFileSync(repo + '/supabase/seed.sql', 'utf8'));
const c = async s => (await db.query(s)).rows;
console.log('Zählungen', await c(`select (select count(*) from foods) foods, (select count(*) from recipes) recipes, (select count(*) from recipe_ingredients) ri, (select count(*) from articles) articles`));
console.log('SQL-Nährwerte teriyaki', await c(`select nutrient, round(per_serving,1) v, round(coverage,2) cov from recipe_nutrition where recipe_id='teriyaki' and nutrient in ('kcal','protein','carb','fat','fiber','salt') order by 1`));
console.log('Fakten', await c(`select * from recipe_facts where recipe_id in ('teriyaki','oats','dal')`));
// RLS-Test: zwei Nutzer
const u1 = '11111111-1111-1111-1111-111111111111', u2 = '22222222-2222-2222-2222-222222222222';
await db.exec(`insert into auth.users values ('${u1}'),('${u2}')`);
await db.exec(`set role authenticated; set request.jwt.claim.sub = '${u1}';`);
await db.exec(`insert into profiles (user_id,name,sex,height_cm,goal,diet,allergies) values ('${u1}','Lena','w',172,'abnehmen','vegetarisch','{nuesse}')`);
await db.exec(`insert into food_logs (user_id,date,name,kcal) values ('${u1}','2026-11-17','Test',100)`);
let blocked = false; try { await db.exec(`insert into food_logs (user_id,date,name,kcal) values ('${u2}','2026-11-17','fremd',100)`); } catch { blocked = true; }
console.log('Fremdes Schreiben blockiert:', blocked);
let tokenBlocked = (await c(`select count(*) n from integration_tokens`))[0].n == 0;
await db.exec(`set request.jwt.claim.sub = '${u2}';`);
console.log('u2 sieht Logs von u1:', (await c(`select count(*) n from food_logs`))[0].n, '| Rezepte sichtbar:', (await c(`select count(*) n from recipes`))[0].n, '| Tokens lesbar:', !tokenBlocked);
let pubBlocked = false; try { await db.exec(`insert into recipes (name,meals,minutes,created_by,is_public,status) values ('x','{snack}',5,'${u2}',true,'published')`); } catch { pubBlocked = true; }
console.log('Nutzer kann Rezept nicht ungeprüft veröffentlichen:', pubBlocked);
await db.exec(`insert into recipes (id,name,meals,minutes,created_by) values ('u_test','Mein Müesli','{fruehstueck}',5,'${u2}')`);
await db.exec(`set role anon; set request.jwt.claim.sub = '';`);
console.log('anon sieht eigenes Rezept von u2 nicht:', (await c(`select count(*) n from recipes where id='u_test'`))[0].n == 0, '| anon sieht Artikel in_review:', (await c(`select count(*) n from articles`))[0].n);
