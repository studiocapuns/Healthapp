# Fiber – Übergabe für das claude.ai-Projekt

## Projekt-Anweisungen (in „Anweisungen“ des Projekts einfügen)
Du hilfst beim Aufbau von **Fiber**, einer Schweizer Ernährungs-App für Menschen, die trainieren. Antworte auf Deutsch (Schweizer Schreibweise, „ss“ statt „ß“). Arbeite präzise: Ernährungsaussagen nur mit Quelle (BLV Schweizer Nährwertdatenbank, D-A-CH, EFSA, WHO, ISSN, ACSM). Keine erfundenen Zahlen, Preise, Konkurrenzdaten oder Kundenstimmen. Gesundheitsschutz zuerst: kein Kaloriendefizit unter 18, bei Untergewicht, Schwangerschaft/Stillzeit oder Essstörung; keine medizinischen Ratschläge. Simulierte Panel-Zitate sind Forschung, nie Werbung.

## Stand (17.11.2026)
- **Repo:** GitHub `studiocapuns/healthapp`, Branch `claude/great-babbage-ygbrhm`
- **Prototyp:** https://claude.ai/artifact/6NqMCYYodMEY3rDWYsm7Xh (Design: grauer Glas-Look, dunkle Bühne mit Lime-Akzent, Vollbild-Food-Fotos, schwebende Pill-Navigation)
- **Produkt:**
  - `core/engine.js` – Nährwert-Engine (Mifflin-St Jeor/Katch-McArdle, PAL ohne Sport + MET-Trainingsverbrauch, Sicherheitsregeln, Makro-/Mikroziele, EU-Claims, Zutatentausch, Tagesplaner), 13 Tests grün
  - `data/` – BLV-Datenbank (1'216 Lebensmittel) + 15 USDA-Ergänzungen, 134 Zutaten mit 14 Allergenen, 58 Rezepte in Gramm, 15 Wissensartikel mit Quellen
  - `supabase/` – Schema mit Row Level Security, berechnete Nährwert-Views, Seed, Edge Functions (plan-day, strava, garmin, health-sync; noch nicht deployed/typgeprüft)
  - Integrationen: Strava (Code fertig), Garmin (Zulassung nötig), Apple Health (nur native iOS-App), Runna (keine API → via Strava/Garmin/Apple Health)
  - Offen: SVDE-Prüfung aller Inhalte, eigene Food-Fotos statt Unsplash, native Expo-App
- **Business (`founder/`):**
  - Board: 3× FUND IF, Ø 4.7/10
  - Panel (100 simulierte Käufer): **9 % kaufen**; Ernährungsform/Allergie 42 %, Hybrid/HYROX 25 %, Tracker-Profis/Gratis-Nutzer/mit Coach 0 %
  - Hauptgründe dagegen: Kantine/kein Kochen nach Rezept (44), wirkt wie Kalorienzählen, kein Vertrauen ohne Bewertungen (13)
  - Preis: Premium CHF 7.90/Mt. oder 59/Jahr, Rennpaket CHF 29 einmalig, Gründungsmitglied CHF 49 bis 31.03.2027
  - CFO: Deckungsbeitrag CHF 4.36/Abo-Monat (81 %), Break-even 561 Abos, Jahr 1 CHF −19'835, Kapitalbedarf CHF 38'335 (ohne Gründerlöhne!)
  - **Urteil: Not yet**
  - Launch geplant 01.03.2027

## Nächste Schritte
1. **Diese Woche:** SVDE-Fachperson mit Sporternährung finden; Landingpage mit Bezahllink für den Vorverkauf bauen.
2. **Vorverkauf 30.11.–20.12.2026:** Erfolg = ≥ 40 bezahlte Gründungsmitglieder bei ≥ 600 erreichten Athlet:innen; Abbruch < 15.
3. **Produkt:** Kantinen-/Unterwegs-Modus und Modus ohne Zahlen bauen (grösste Kauf-Hürde laut Panel).
4. Garmin-Developer-Antrag, Strava-API-App, Anfrage an Runna.
5. Noch nicht gemacht: `/founder-offer` (Angebot schärfen), `/founder-brand` (Name/Marke prüfen).

## Wichtigste Dateien zum Hochladen ins Projekt
`founder/summary.md`, `founder/one-pager.md`, `founder/business-plan.md`, `founder/panel/results.md`, `founder/competitors.md`, `founder/pricing.md`, `founder/launch.md`, `docs/ARCHITEKTUR.md`, `README.md`
