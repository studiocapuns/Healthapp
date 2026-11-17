# Operations: Fiber

Fiber ist eine App: Es gibt keinen Laden, aber einen täglichen Betrieb. Der kritische Ablauf ist die **Inhalts-Pipeline** (jedes Rezept muss berechnet und fachlich geprüft sein) und der **Daten-Sync** (wenn Training nicht ankommt, stimmt der Plan nicht).

## 1. Der tägliche Ablauf
| # | Schritt | Sieht der Kunde? |
|---|---|---|
| 1 | Morgens: Monitoring prüfen – Fehlerrate der Edge Functions, Strava-/Garmin-Webhooks der Nacht, fehlgeschlagene Syncs | Nein (aber spürt es) |
| 2 | Fehlgeschlagene Syncs nachziehen; betroffene Nutzer in der App informieren („Training von gestern fehlt – manuell ergänzen?“) | Ja |
| 3 | Support-Postfach und App-Store-Bewertungen beantworten (Ziel: < 24 Std.) | Ja |
| 4 | Inhalts-Pipeline: neue Rezepte in Gramm erfassen → `npm test` (Atwater, Allergene, Abdeckung) → zur SVDE-Prüfung | Nein |
| 5 | SVDE-freigegebene Rezepte/Artikel veröffentlichen (Status `published` mit Name + Datum) | Ja |
| 6 | Community: Club-Fragen beantworten, Rezept des Tages posten | Ja |
| 7 | Wöchentlich: Kennzahlen (siehe `marketing.md`), App-Release (alle 2 Wochen), Backup-Test | Teilweise |
| 8 | Halbjährlich: Neue Version der BLV-Nährwertdatenbank einspielen, Differenzen prüfen, Rezepte neu berechnen | Ja (genauere Werte) |

## 2. Lieferanten und Dienste
| Bedarf | Optionen | Preis / wie erfahren | Hinweise |
|---|---|---|---|
| Datenbank, Auth, Edge Functions | **Supabase** (Region EU Frankfurt) · Alternativen: Neon + eigene API, Appwrite | Supabase Pro USD 25/Mt. laut [Preisseite](https://supabase.com/pricing) | Bereits gebaut (`supabase/`); Datenschutz: AVV abschliessen |
| App-Build & Updates | **Expo EAS** · Alternative: lokale Builds mit Xcode | Gratis-Stufe vorhanden, bezahlte Stufen laut [expo.dev/pricing](https://expo.dev/pricing) | Over-the-air-Updates für schnelle Korrekturen |
| Abos/Zahlungen | **RevenueCat** über App Store/Google Play · Alternative: StoreKit direkt | Gratis bis zu einer Umsatzschwelle laut [revenuecat.com/pricing](https://www.revenuecat.com/pricing) | Store-Provision 15 % (Small Business Program) bereits im CFO |
| App Stores | Apple Developer Program, Google Play Console | CHF 99/Jahr bzw. USD 25 einmalig | Apple: Health-Daten-Richtlinien beachten |
| Nährwertdaten | **BLV Schweizer Nährwertdatenbank** (gratis, Quellenangabe) · USDA FDC (Public Domain) | gratis | Lizenzbedingungen BLV vor kommerzieller Nutzung schriftlich bestätigen lassen (offene Frage) |
| Fachliche Prüfung | Freiberufliche **Ernährungsberatende SVDE** mit Sporternährung (z. B. CAS Sporternährung BFH) | CHF 120–180/Std. ([Comparis](https://www.comparis.ch/krankenkassen/leistungen/ernaehrungsberatung)); Offerte einholen | Suche über [svde-asdd.ch](https://svde-asdd.ch) |
| Food-Fotos | Freie Food-Fotograf:innen in Zürich · eigene Produktion | Offerte | Ersetzt Unsplash-Bilder vor dem Launch |
| Monitoring | Sentry, Supabase Logs | Gratis-Stufen | Alarme bei Sync-Fehlern |
| Integrationen | Strava API (Antrag, Rate Limits), Garmin Connect Developer Program (Bewerbung), Runna (Partnerschaftsanfrage) | gratis, aber Zulassung nötig | Garmin-Zulassung kann Wochen dauern → früh beantragen |

`numbers.json` bleibt unverändert: Alle Preise oben entsprechen den dort angenommenen Werten oder sind Gratis-Stufen. Sobald Offerten (SVDE, Fotos, Datenschutz) vorliegen, Werte ersetzen und `/founder-cfo` erneut laufen lassen.

## 3. Personen
Annahme: drei Gründer:innen, unbezahlt im ersten Jahr (siehe Warnung in `cfo.md`). Lohnnebenkosten (AHV/IV/EO, BVG, UVG) betreffen erst bezahlte Stellen → mit Treuhand klären.

| Rolle | Wer | Std./Woche Aufbau (Monat 1–2) | Std./Woche Betrieb |
|---|---|---|---|
| Produkt & Design | Gründer:in A | 30 | 15 |
| Entwicklung (Expo, Supabase, Integrationen) | Gründer:in B | 35 | 15 |
| Community & Marketing (Clubs, Coaches, Instagram) | Gründer:in C | 15 | 20 |
| Ernährungsfachperson SVDE | extern, Mandat | 10 (Erstprüfung) | 2 (laufend, ≈ 8 Std./Monat) |

**Wochenplan Betrieb:** Mo – Kennzahlen + Planung · Di/Do – Support-Schicht A, Content C · Mi – Release-Vorbereitung B · Fr – Club-Termine C, Support B · Wochenende – rotierender Bereitschaftsdienst für Sync-Ausfälle (1 Person, 30 Min./Tag).

## 4. Routinen (SOPs)
**A. Neues Rezept veröffentlichen**
1. Rezept in `data/recipes.js` mit Zutaten in Gramm und Zubereitung erfassen.
2. `npm test` laufen lassen – muss grün sein (Atwater-Abweichung < 12 %, 100 % Makro-Abdeckung, Foto vorhanden).
3. Berechnete Nährwerte, Allergene und Kennzeichnungen als PDF/Screenshot an SVDE senden.
4. SVDE prüft Portionsgrössen, Allergene, Zubereitung; Rückmeldung innert 5 Arbeitstagen.
5. Nach Freigabe: `reviewed_by` + Datum setzen, `npm run build:data`, Seed einspielen.
6. Rezept in der App prüfen (Detailseite, Alternativen, Einkaufsliste).

**B. Sync-Ausfall (Strava/Garmin/Apple Health)**
1. Alarm aus Monitoring → Ursache prüfen (Token abgelaufen, Rate Limit, Anbieter-Störung).
2. Statusseite des Anbieters prüfen; bei Anbieterstörung In-App-Hinweis setzen.
3. Bei abgelaufenen Tokens: betroffene Nutzer per Push zum Neu-Verbinden auffordern.
4. Fehlende Trainings nachträglich abrufen; Tagesziele werden automatisch neu berechnet.
5. Ursache im Logbuch festhalten.

**C. Beschwerde / Ernährungsfrage**
1. Innert 24 Std. antworten, freundlich und konkret.
2. Medizinische Fragen (Krankheit, Medikamente, Essstörung) nie beantworten → an Ärztin/Arzt bzw. Beratungsstelle verweisen (Textbaustein).
3. Fehler in Nährwerten: Rezept prüfen, ggf. sofort auf `in_review` setzen, SVDE informieren.
4. Antwort und Massnahme im Support-Log.

**D. Release (alle 2 Wochen)**
1. Tests grün, Datenbank-Migration in Staging geprüft (`npm run validate:db`).
2. Testflug mit 10 Pilotnutzern (TestFlight) 48 Std.
3. Release, Monitoring 24 Std. eng beobachten.

**E. Wöchentlicher Check (Montag)**
1. Drei Kennzahlen aus `marketing.md` notieren.
2. Kündigungsgründe auswerten.
3. Eine Massnahme für die Woche festlegen.

## 5. Werkzeuge
| Zweck | Werkzeug | Warum |
|---|---|---|
| Backend | Supabase | bereits gebaut, RLS, EU-Region |
| App | Expo / React Native | iOS + Android aus einer Codebasis, HealthKit über `react-native-health` |
| Abos | RevenueCat | Abos über beide Stores, Gratis-Stufe |
| Buchhaltung | Schweizer KMU-Software (z. B. bexio, Banana) | Offerte/Preisseite prüfen; Treuhand bestimmt |
| Support | geteiltes Postfach + Vorlagen | genügt bis ~1'000 Nutzer |
| Kennzahlen | Supabase-Abfragen + einfache Tabelle | keine zusätzlichen Kosten |

## 6. Bewilligungen, Recht, Versicherung (Schweiz)
*Regeln unterscheiden sich je nach Kanton und ändern sich – jeden Punkt bei der Behörde oder Fachperson bestätigen. Keine Rechtsberatung.*
- [ ] **Handelsregister** (GmbH): [EasyGov](https://www.easygov.swiss) / kantonales Handelsregisteramt
- [ ] **MWST-Pflicht** ab CHF 100'000 Jahresumsatz weltweit: [ESTV](https://www.estv.admin.ch) (App-Store-Umsätze: Steuerabwicklung durch Apple/Google mit Treuhand klären)
- [ ] **Datenschutz (revDSG)**: Gesundheitsdaten sind besonders schützenswert; Datenschutzerklärung, ausdrückliche Einwilligung, Auftragsverarbeitung mit Supabase, Datenbearbeitung im Ausland (EU) dokumentieren – [EDÖB](https://www.edoeb.admin.ch)
- [ ] **Kein Medizinprodukt**: Fiber gibt allgemeine Ernährungsempfehlungen für Gesunde; keine Diagnose/Therapie. Abgrenzung mit [Swissmedic](https://www.swissmedic.ch) (Medizinprodukteverordnung MepV) bestätigen
- [ ] **Lebensmittelrecht**: Nährwert- und Gesundheitsangaben in Werbung nach Lebensmittelinformationsverordnung (LIV) – [BLV](https://www.blv.admin.ch)
- [ ] **BLV-Datenbank**: Nutzungsbedingungen für kommerzielle Nutzung schriftlich bestätigen
- [ ] **App-Store-Richtlinien**: Apple HealthKit-Regeln, Google Health-Apps-Richtlinie
- [ ] **API-Verträge**: Strava API Agreement, Garmin Developer Program, Runna-Partnerschaft
- [ ] **Versicherungen**: Betriebs-/Berufshaftpflicht, Cyber-Versicherung (Offerten)
- [ ] **AGB und Abo-Bedingungen** (Kündigung, Probezeit)

## 7. Risikoregister
| # | Risiko | Wahrscheinlichkeit | Schaden | Plan |
|---|---|---|---|---|
| 1 | Garmin lehnt Zulassung ab oder verzögert | mittel | hoch | Strava + Apple Health zuerst; Garmin-Läufe kommen oft via Strava; früh bewerben |
| 2 | Fehler in Nährwerten/Allergenen | tief | sehr hoch (Gesundheit, Vertrauen) | Zutatenbasierte Allergene, Tests, SVDE-Vier-Augen, Sofort-Rückzug eines Rezepts möglich |
| 3 | Zu wenige zahlende Abos (Panel: 9 % Obergrenze) | hoch | hoch | Vorverkauf vor Bau, Fokus auf Segmente mit 25–42 % Kaufrate, Rennpaket als Einstieg |
| 4 | Garmin/Hexis/YAZIO kopieren die Idee | mittel | mittel | Schutzwall aus geprüften Schweizer Rezepten, Club-/Coach-Netzwerk, SVDE-Marke |
| 5 | Sync-Ausfall vor einem Rennwochenende | mittel | mittel | SOP B, manuelle Eingabe immer möglich, Bereitschaftsdienst |
| 6 | Datenschutzvorfall | tief | sehr hoch | RLS getestet, Tokens serverseitig, Minimierung, Cyber-Versicherung, Meldeprozess EDÖB |
| 7 | SVDE-Fachperson fällt aus | mittel | mittel | Zweite Fachperson als Vertretung, Rezept-Backlog von 4 Wochen |
| 8 | Gründer:in fällt aus / steigt aus | mittel | hoch | Gesellschaftervertrag, Code und Wissen dokumentiert (`docs/`) |
| 9 | Nutzer mit Essstörung nutzt Fiber schädlich | tief | sehr hoch | Sicherheitsfrage im Onboarding, Modus ohne Zahlen, keine Defizite, Hinweis auf Hilfsangebote |
| 10 | Schlechte App-Store-Bewertungen zum Start | mittel | hoch | Pilot mit Clubs vor öffentlichem Launch, Feedback-Kanal in der App, schnelle Releases |

## Offene Fragen
- BLV-Nutzungsbedingungen für kommerzielle App (schriftlich)
- Offerten: SVDE (Erstprüfung + Mandat), Datenschutz-Anwalt, Food-Fotografie, Versicherungen
- Garmin-Antrag und Runna-Kontakt: Dauer und Bedingungen
- Treuhand: GmbH vs. Einzelfirma, Gründerlöhne, App-Store-MWST
