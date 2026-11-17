# Fiber

Personalisierte Ernährung für Menschen, die trainieren: präzise Ziele, Rezepte aus offiziellen Nährwertdaten, Essens-Timing rund ums Training und Wissen mit Quellen.

**Prototyp:** `index.html` im Browser öffnen (Handy-Ansicht). Dev-Stresstest: `index.html?data=worst`, `?data=empty`, `?data=one`.

## Was drin ist
- **Nährwert-Engine** (`core/engine.js`): Mifflin-St Jeor / Katch-McArdle, PAL + MET-basierter Trainingsverbrauch, Sicherheitsregeln, Makro- und Mikroziele (D-A-CH, EFSA, WHO, ISSN, ACSM), Rezeptanalyse, EU-Kennzeichnungen, Alternativen, Tagesplaner mit Portionsfaktoren.
- **Offizielle Daten** (`data/`): Schweizer Nährwertdatenbank (BLV, 1216 Lebensmittel) + USDA-Ergänzungen; 134 Zutaten mit 14 Hauptallergenen; 58 Rezepte in Gramm; 15 Wissensartikel mit Quellen.
- **Backend** (`supabase/`): Postgres-Schema mit Row Level Security, berechnete Nährwert-Views, Seed, Edge Functions für Tagesplan, Strava, Garmin und Apple Health.
- **Prototyp** (`index.html`): Onboarding mit Sicherheitsfragen, Dashboard, Rezepte mit Nährwerttabelle, Mikronährstoffen und Alternativen, Kalender mit Garmin/Strava/Apple Health/Runna (simuliert), Wissensbereich, Fortschritt.

Details: [docs/ARCHITEKTUR.md](docs/ARCHITEKTUR.md)

## Entwicklung
```bash
npm install
npm test              # 13 Tests: Formeln, Datenintegrität, Allergene, Planer
npm run build:data    # seed.sql, foods-app.js, Engine-Kopie für Edge Functions
npm run validate:db   # Schema + Seed + RLS in Postgres (PGlite) prüfen
```

## Bilder
Food-Fotos in `img/` von [Unsplash](https://unsplash.com) (Unsplash-Lizenz), Zuordnung in `img/CREDITS.txt`. Vor dem Launch durch eigene oder lizenzierte Fotos ersetzen.

## Wichtig vor dem Launch
Rezepte und Wissensartikel müssen von einer Ernährungsfachperson (SVDE) geprüft werden. Fiber richtet sich an gesunde Erwachsene und ist kein Medizinprodukt.
