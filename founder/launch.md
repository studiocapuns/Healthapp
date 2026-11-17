# Launch: Fiber

**Öffentlicher Launch: Montag, 1. März 2027** (iOS, Deutschschweiz). Heute: 17. November 2026.

## 1. Erst testen, dann ausgeben
**Der Test: Vorverkauf „Gründungsmitglied“, im Voraus bezahlt.**
- Einfache Landingpage (Pitch, Screenshots des Prototyps, Team mit Namen, „So rechnet Fiber“) mit **echtem Bezahllink**: Gründungsmitglied CHF 49 für das erste Jahr ab Launch, voll rückerstattbar bis zum Launch.
- Verteilung nur über die Segmente mit den höchsten Panel-Kaufraten: 2 Laufclubs, 1 HYROX-Box, 1 Triathlon-Club, Instagram-Posts mit vegetarischen/allergiefreundlichen Rezepten.
- **Zeitraum:** Mo 30.11. bis So 20.12.2026. Entscheid: Mo 21.12.2026.
- **Erfolgslinie (vorher festgelegt):** **≥ 40 bezahlte Gründungsmitglieder** bei ≥ 600 erreichten Athlet:innen (≈ 7 %).
- **Abbruchlinie:** < 15 Käufe (< 2.5 %) → nicht bauen wie geplant; zurück zu Angebot und Pricing (Rennpaket als Hauptprodukt testen, Kantinen-Modus zuerst).
- **Vergleich mit dem Panel:** Das Panel sagt 9 % (Obergrenze, simulierte Käufer). Liegt der echte Wert deutlich darunter, gilt der echte Wert.
- **Kosten:** Landingpage selbst gebaut, Bezahllink (Transaktionsgebühr), Club-Abende ≈ CHF 800 → aus dem Launch-Marketing-Budget.

Zusätzlich während des Tests: 10 Gespräche à 20 Minuten mit Nicht-Käufern aus den Clubs – vor allem zur Kantine und zum Kalorienzählen.

## 2. Countdown
Owner: **A** = Produkt/Design, **B** = Entwicklung, **C** = Community/Marketing, **S** = SVDE-Fachperson (extern). ⛔ = kritischer Pfad (verschiebt den Launch, wenn er rutscht).

| Woche | Aufgabe | Owner | Bis |
|---|---|---|---|
| 23.11. | ⛔ SVDE-Fachperson suchen, Offerte, Mandat | A | 27.11. |
| 23.11. | Landingpage + Bezahllink + Rückerstattungsbedingungen | A/B | 29.11. |
| 23.11. | Termine mit 4 Clubs vereinbaren | C | 27.11. |
| 23.11. | ⛔ Garmin Connect Developer Program beantragen; Strava-API-App registrieren; Runna anfragen | B | 27.11. |
| 30.11.–20.12. | **Vorverkaufstest** + 10 Interviews | C | 20.12. |
| 30.11. | GmbH-Gründung vorbereiten (Treuhand, Notar), Geschäftskonto | A | 18.12. |
| 07.12. | ⛔ Expo-App aufsetzen: Engine + Daten übernehmen, Supabase-Projekt EU, Auth | B | 18.12. |
| 14.12. | Datenschutz/AGB beim Anwalt in Auftrag | A | 18.12. |
| **21.12.** | **Go/No-Go anhand der Erfolgslinie** | alle | 21.12. |
| 21.12.–03.01. | Feiertage – nur Puffer | – | – |
| 04.01. | ⛔ SVDE-Erstprüfung der 58 Rezepte + 15 Artikel startet | S | 29.01. |
| 04.01. | ⛔ Kantinen-/Unterwegs-Modus und Modus ohne Zahlen bauen (Produktbedingungen aus Panel/Board) | A/B | 29.01. |
| 11.01. | Strava-Integration live in Staging; Apple Health (HealthKit) in iOS-App | B | 22.01. |
| 11.01. | Eigene Food-Fotos produzieren (ersetzen Unsplash) | A | 05.02. |
| 18.01. | RevenueCat + Abos (Monat, Jahr, Gründungsmitglied, Rennpaket) | B | 29.01. |
| 25.01. | Datenschutzerklärung, AGB, Einwilligungs-Flow in App | A/B | 05.02. |
| 01.02. | ⛔ TestFlight-Beta mit Gründungsmitgliedern (Soft Open) | B/C | 01.02. |
| 01.02. | Fehler aus Beta beheben; SVDE-Freigaben einpflegen (`reviewed_by`) | B/S | 12.02. |
| 08.02. | Instagram-Profil, App-Store-Texte und Screenshots | A/C | 12.02. |
| 12.02. | ⛔ Einreichung App Store Review (Puffer 1–2 Wochen) | B | 13.02. |
| 15.02. | Marketing-Kalender startet (Pilot-Club-Abende, siehe `marketing.md`) | C | 28.02. |
| 22.02. | Freigabe durch Apple, Launch-Version eingefroren | B | 26.02. |
| **01.03.** | **Launch** | alle | 01.03. |

**Kritischer Pfad:** SVDE-Mandat → Erstprüfung → Freigaben eingepflegt · Expo-App → Beta → App-Store-Review. Garmin ist **nicht** auf dem kritischen Pfad (Launch geht mit Strava + Apple Health).

## 3. Launch-Tag (Mo 1. März 2027)
| Zeit | Was | Wer |
|---|---|---|
| 06:30 | App im App Store sichtbar prüfen, Abos testkaufen und erstatten | B |
| 07:00 | Monitoring-Dashboard offen (Sync, Fehler, Käufe) | B |
| 07:30 | Mail an alle Gründungsmitglieder: „Fiber ist da“ + Anleitung Strava/Apple Health | C |
| 08:00 | Instagram: Launch-Post (Hook 4 „Gemacht in Zürich, geprüft von SVDE“) | C |
| 09:00 | Codes an Pilotclubs, Trainer:innen persönlich informieren | C |
| 10:00–17:00 | Support-Schicht im Wechsel, Antwort < 2 Std. | A/C |
| 12:00 | Zwischenbilanz: Downloads, Trials, Sync-Fehler | alle |
| 18:30 | Präsenz beim Lauftreff eines Pilotclubs (Rezept-Degustation) | C |
| 21:00 | Tagesbilanz, Fehlerliste für Hotfix | alle |

**Wenn etwas bricht** (aus `ops.md`): Sync-Ausfall → SOP B, In-App-Hinweis, manuelle Eingabe · Kauf funktioniert nicht → RevenueCat-Status, Code-Freischaltung manuell · Fehler in Nährwerten gemeldet → Rezept sofort auf `in_review`, SVDE informieren · Abstürze → Over-the-air-Hotfix via Expo.

## 4. Die ersten 30 Tage
**Wöchentlich messen:**
| Zahl | Quelle | Ziel | Ändern, wenn |
|---|---|---|---|
| Aktive zahlende Abos | RevenueCat | Woche 4: ≥ 60 (Gründungsmitglieder + neue) | < 30 → Angebot/Onboarding überarbeiten |
| Abstand zum Break-even | `cfo.md`: 561 Abos | Trend +15/Woche | Wachstum < 5/Woche zwei Wochen in Folge |
| Trial → Abo | RevenueCat | ≥ 15 % | < 8 % |
| CAC | Marketing-Ausgaben ÷ neue Abos | ≤ CHF 17 | > CHF 25 |
| Sync-Erfolgsquote | Monitoring | ≥ 98 % | < 95 % |
| Tagespläne mit ≥ 1 gegessener Mahlzeit | App-Daten | ≥ 50 % der aktiven Nutzer | < 30 % → Plan passt nicht zum Alltag |

**Reviews:**
- **Tag 7:** Kommen die Syncs zuverlässig an? Welche drei Support-Fragen kommen am häufigsten? Nutzen Kantinen-Esser den Unterwegs-Modus?
- **Tag 14:** Welcher Club bringt die meisten Abos und warum? Welche Rezepte werden nie gegessen? Liegt die Trial-Quote über 8 %?
- **Tag 30:** Stimmen Kaufrate und Segmente mit Vorverkauf und Panel überein? Zahlen Rennpaket-Käufer für ein Abo nach? Weiter wie geplant, Fokus verengen, oder Preis/Angebot ändern?
