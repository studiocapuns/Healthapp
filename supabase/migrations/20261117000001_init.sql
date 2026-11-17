-- =====================================================================
-- Fiber – Datenbankschema (Supabase / Postgres 15+)
-- Katalogdaten (Lebensmittel, Zutaten, Rezepte, Wissen) sind öffentlich lesbar
-- und nur über den Service-Role-Key (Redaktion/Import) schreibbar.
-- Nutzerdaten sind per Row Level Security strikt auf auth.uid() beschränkt.
-- =====================================================================


-- ---------------------------------------------------------------- Enums
create type diet_class as enum ('vegan', 'veg', 'fisch', 'fleisch');
create type diet_pref as enum ('alles', 'flexi', 'vegetarisch', 'vegan', 'pesc', 'lowcarb');
create type goal_kind as enum ('abnehmen', 'aufbau', 'zunehmen', 'halten', 'ausdauer');
create type meal_slot as enum ('fruehstueck', 'mittag', 'snack', 'abend');
create type sport_kind as enum ('laufen', 'rad', 'kraft', 'schwimmen', 'hiit', 'yoga');
create type intensity as enum ('locker', 'mittel', 'intensiv');
create type provider as enum ('manual', 'garmin', 'strava', 'apple_health', 'runna');
create type review_status as enum ('draft', 'in_review', 'published', 'retired');

-- 14 Hauptallergene (LIV Anhang 6 / LMIV Anhang II) + Laktose als Unverträglichkeit
create domain allergen as text check (value in ('gluten','schalentiere','ei','fisch','erdnuss','soja','laktose','nuesse','sellerie','senf','sesam','sulfite','lupine','weichtiere'));

-- ---------------------------------------------------------------- Katalog
create table sources (
  id text primary key,                 -- 'blv', 'usda'
  name text not null,
  url text not null,
  version text not null,
  license text
);

create table foods (
  id text primary key,                 -- 'ch198', 'us170189'
  source_id text not null references sources(id),
  name text not null,
  synonyms text,
  category text,
  density numeric,
  nutrients jsonb not null,            -- pro 100 g essbarer Anteil, Schlüssel wie core/engine.js NUTRIENTS
  estimated text[] not null default '{}',
  updated_at timestamptz not null default now(),
  constraint nutrients_has_energy check (nutrients ? 'kcal')
);
create index foods_name_trgm on foods using gin (to_tsvector('german', name));

create table ingredients (
  key text primary key,
  food_id text not null references foods(id),
  name text not null,
  allergens allergen[] not null default '{}',
  diet diet_class not null,
  units jsonb not null default '{}',    -- {"Stk": 52}
  note text
);

create table recipes (
  id text primary key default ('u_' || replace(gen_random_uuid()::text, '-', '')),
  name text not null,
  meals meal_slot[] not null,
  minutes int not null check (minutes between 1 and 600),
  serves int not null default 1 check (serves between 1 and 20),
  steps text[] not null default '{}',
  photo text,
  status review_status not null default 'draft',
  reviewed_by text,                    -- Name der Ernährungsfachperson (Vier-Augen-Prinzip)
  reviewed_at timestamptz,
  created_by uuid references auth.users(id) on delete cascade, -- null = redaktioneller Inhalt
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  constraint published_needs_review check (status <> 'published' or created_by is not null or (reviewed_by is not null and reviewed_at is not null))
);

create table recipe_ingredients (
  recipe_id text not null references recipes(id) on delete cascade,
  position int not null,
  ingredient_key text not null references ingredients(key),
  grams numeric not null check (grams > 0 and grams <= 5000),
  display text,
  primary key (recipe_id, position)
);

create table swaps (
  from_key text not null references ingredients(key),
  to_key text not null references ingredients(key),
  reason text not null,
  factor numeric not null default 1,
  primary key (from_key, to_key)
);

-- Nährwerte pro Portion, immer aus den Zutaten berechnet (nie von Hand gepflegt)
create view recipe_nutrition with (security_invoker = true) as
select r.id as recipe_id,
       k.key as nutrient,
       sum(coalesce((f.nutrients ->> k.key)::numeric, 0) * ri.grams / 100) / r.serves as per_serving,
       sum(case when f.nutrients ? k.key then ri.grams else 0 end) / nullif(sum(ri.grams), 0) as coverage
from recipes r
join recipe_ingredients ri on ri.recipe_id = r.id
join ingredients i on i.key = ri.ingredient_key
join foods f on f.id = i.food_id
cross join (values ('kcal'),('protein'),('carb'),('sugar'),('fiber'),('fat'),('sfa'),('salt'),('ca'),('fe'),('mg'),('k'),('zn'),('iodine'),('vitA'),('b12'),('folate'),('vitC'),('vitD'),('epa'),('dha')) as k(key)
group by r.id, r.serves, k.key;

create view recipe_facts with (security_invoker = true) as
select r.id as recipe_id,
       array(select distinct a from recipe_ingredients ri2 join ingredients i2 on i2.key = ri2.ingredient_key, unnest(i2.allergens) a where ri2.recipe_id = r.id order by 1) as allergens,
       (array['vegan','veg','fisch','fleisch']::diet_class[])[max(array_position(array['vegan','veg','fisch','fleisch']::diet_class[], i.diet))] as diet
from recipes r
join recipe_ingredients ri on ri.recipe_id = r.id
join ingredients i on i.key = ri.ingredient_key
group by r.id;

-- Wissensbereich
create table articles (
  slug text primary key,
  title text not null,
  summary text not null,
  body_md text not null,
  category text not null,
  read_min int not null default 3,
  sources jsonb not null default '[]',  -- [{ "label": "...", "url": "..." }]
  status review_status not null default 'draft',
  reviewed_by text,
  reviewed_at timestamptz
);

-- ---------------------------------------------------------------- Nutzerdaten
create table profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  name text,
  sex text check (sex in ('w','m','d')),
  birth_date date,
  height_cm numeric check (height_cm between 120 and 230),
  goal goal_kind not null default 'halten',
  pace text not null default 'moderat' check (pace in ('sanft','moderat','ambitioniert')),
  target_weight_kg numeric check (target_weight_kg between 35 and 250),
  activity text not null default 'leicht' check (activity in ('sitzend','leicht','aktiv','sehr')),
  diet diet_pref not null default 'alles',
  allergies allergen[] not null default '{}',
  dislikes text[] not null default '{}',
  train_goal text,
  pregnant boolean not null default false,
  lactating boolean not null default false,
  ed_history boolean not null default false,    -- schaltet Kalorien-/Defizitanzeigen ab
  conditions text[] not null default '{}',
  consent_health_data_at timestamptz,            -- Einwilligung nach revDSG/DSGVO Art. 9
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table body_metrics (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  measured_on date not null,
  weight_kg numeric check (weight_kg between 30 and 300),
  body_fat_pct numeric check (body_fat_pct between 3 and 60),
  bf_source text check (bf_source in ('measured','estimated')),
  source provider not null default 'manual',
  unique (user_id, measured_on, source)
);

create table trainings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  start_time time not null,
  type sport_kind not null,
  intensity intensity not null default 'mittel',
  duration_min int not null check (duration_min between 1 and 1440),
  name text,
  measured_kcal numeric,          -- aktiver Verbrauch laut Gerät; hat Vorrang vor MET-Schätzung
  avg_hr int,
  distance_m numeric,
  planned boolean not null default false,   -- geplante Einheit (z. B. aus Runna-Plan)
  source provider not null default 'manual',
  external_id text,
  created_at timestamptz not null default now(),
  unique (user_id, source, external_id)
);
create index trainings_user_date on trainings (user_id, date);

create table meal_plan_entries (
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  slot meal_slot not null,
  recipe_id text references recipes(id),
  factor numeric not null default 1 check (factor between 0.25 and 3),
  locked boolean not null default false,   -- vom Nutzer gewählt, Planer überschreibt nicht
  primary key (user_id, date, slot)
);

create table food_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  slot meal_slot,
  recipe_id text references recipes(id),
  food_id text references foods(id),
  grams numeric,
  factor numeric,
  name text not null,
  kcal numeric not null check (kcal >= 0 and kcal < 10000),
  protein numeric not null default 0,
  carb numeric not null default 0,
  fat numeric not null default 0,
  fiber numeric not null default 0,
  created_at timestamptz not null default now()
);
create index food_logs_user_date on food_logs (user_id, date);

create table water_logs (
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  ml int not null default 0 check (ml between 0 and 15000),
  primary key (user_id, date)
);

create table favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null references recipes(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, recipe_id)
);

create table integrations (
  user_id uuid not null references auth.users(id) on delete cascade,
  provider provider not null,
  status text not null default 'connected' check (status in ('connected','error','revoked')),
  external_user_id text,
  scopes text[],
  connected_at timestamptz not null default now(),
  last_sync_at timestamptz,
  primary key (user_id, provider)
);

-- OAuth-Tokens: kein Zugriff für Clients, nur Edge Functions mit Service Role
create table integration_tokens (
  user_id uuid not null references auth.users(id) on delete cascade,
  provider provider not null,
  access_token text not null,
  refresh_token text,
  expires_at timestamptz,
  primary key (user_id, provider)
);

-- ---------------------------------------------------------------- RLS
alter table sources enable row level security;
alter table foods enable row level security;
alter table ingredients enable row level security;
alter table recipes enable row level security;
alter table recipe_ingredients enable row level security;
alter table swaps enable row level security;
alter table articles enable row level security;
alter table profiles enable row level security;
alter table body_metrics enable row level security;
alter table trainings enable row level security;
alter table meal_plan_entries enable row level security;
alter table food_logs enable row level security;
alter table water_logs enable row level security;
alter table favorites enable row level security;
alter table integrations enable row level security;
alter table integration_tokens enable row level security;  -- keine Policy = kein Client-Zugriff

create policy catalog_read on sources for select using (true);
create policy catalog_read on foods for select using (true);
create policy catalog_read on ingredients for select using (true);
create policy catalog_read on swaps for select using (true);
create policy articles_read on articles for select using (status = 'published');

create policy recipes_read on recipes for select using ((created_by is null and status = 'published') or is_public or created_by = auth.uid());
create policy recipes_own_insert on recipes for insert with check (created_by = auth.uid() and status = 'draft' and is_public = false);
create policy recipes_own_update on recipes for update using (created_by = auth.uid()) with check (created_by = auth.uid() and is_public = false);
create policy recipes_own_delete on recipes for delete using (created_by = auth.uid());

create policy ri_read on recipe_ingredients for select using (exists (select 1 from recipes r where r.id = recipe_id));
create policy ri_own_write on recipe_ingredients for all using (exists (select 1 from recipes r where r.id = recipe_id and r.created_by = auth.uid()))
  with check (exists (select 1 from recipes r where r.id = recipe_id and r.created_by = auth.uid()));

do $$
declare t text;
begin
  foreach t in array array['body_metrics','trainings','meal_plan_entries','food_logs','water_logs','favorites','integrations'] loop
    execute format('create policy own_rows on %I for all using (user_id = auth.uid()) with check (user_id = auth.uid())', t);
  end loop;
end $$;
create policy own_profile on profiles for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Konto löschen = alle Gesundheitsdaten löschen (Recht auf Löschung)
create or replace function delete_my_account() returns void language sql security definer set search_path = public as $$
  delete from auth.users where id = auth.uid();
$$;
revoke all on function delete_my_account() from public;
grant execute on function delete_my_account() to authenticated;
