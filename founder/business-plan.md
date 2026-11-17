# Fiber · Business plan

**Verdict: Not yet**

- ✓ Each zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) earns $4.36 before fixed costs (81% contribution).
- ✗ Year 1 operating LOSS: $19,835.
- ✓ Break-even is 561 zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)s a day against a capacity of 100000.
- ✗ 9 of 100 simulated buyers buy (9%, the bar is 25%).

| key number | |
| --- | ---: |
| Price | $5.37 a zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) |
| Profit margin at plan | 24% per zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) |
| Break-even | 561 zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)s a day |
| Year 1 operating profit | $-19,835 |
| Startup spend | $18,500 |
| Cash needed before it pays for itself | $38,335 |
| Startup money earned back | not in year 1 |
| Buyer panel | 9 buy · 91 pass |

## The idea

- What it is: Eine Ernährungs-App, die Menschen, die trainieren, präzise Kalorien- und Makroziele, passende Rezepte und Essens-Timing rund um ihre Trainings gibt – berechnet aus offiziellen Nährwertdaten statt geschätzt.
- Who it is for: Erwachsene (ca. 25–45) in der Schweiz und im DACH-Raum, die 3–6× pro Woche trainieren (Laufen, Rad, Kraft, Hybrid/HYROX), eine Sportuhr oder Lauf-App nutzen (Garmin, Strava, Apple Watch, Runna) und ein Ziel haben: abnehmen ohne Muskelverlust, Muskelaufbau oder Leistung im Ausdauersport. Viele mit Ernährungsform (vegetarisch, vegan) oder Allergien.
- What it sells, at what price: Freemium-App. Gratis: Onboarding, Tagesziele, Rezepte-Basis, Wissensbereich. Premium-Abo: persönlicher Tagesplan mit Portionsgrössen, Training-Sync und Essens-Timing, Alternativen/Zutatentausch, Mikronährstoff-Check, Einkaufsliste. Preis noch offen (wird mit Käufer-Panel und Pricing bestimmt).
- Where and how: Online, iOS zuerst (Apple Health), dann Android. Markt zuerst Schweiz, dann DACH. Kundengewinnung über Laufclubs, Community, Instagram/Content, Partnerschaften mit Lauf-/Trainings-Apps. Lieferung als App-Store-Abo.
- Budget and constraints: Bis CHF 50'000 für die ersten 12 Monate. Team: Design/Produkt, Entwicklung und Marketing/Community vorhanden; Ernährungsfachperson (SVDE) fehlt noch und muss Rezepte/Inhalte freigeben. Prototyp, Nährwert-Engine (Schweizer Nährwertdatenbank BLV + USDA), 58 Rezepte, Supabase-Backend und Strava/Garmin/Apple-Health-Anbindung (Code) existieren. Garmin Health API braucht Zulassung; Runna hat keine öffentliche API. Ziel: Nr. 1 Ernährungs-App im Bereich Sport-Ernährung.

## Summary

**Urteil: Not yet.** Zwei Prüfungen scheitern: Jahr 1 schreibt einen Betriebsverlust von **CHF 19'835**, und nur **9 von 100** simulierten Käufern kaufen (Schwelle 25 %). Vor dem Bau muss sich das Angebot ändern und ein echter Vorverkauf zeigen, dass Menschen zahlen.

**Was zuerst ändern (und wo):**
1. **Das Produkt an den Alltag anpassen**: Kantinen-/Unterwegs-Modus und ein Modus ohne Zahlen. 44 von 91 Nicht-Käufern scheitern an „ich koche nicht nach Rezept“ oder „das ist wieder Kalorienzählen“. → Produkt, dann `/founder-offer`
2. **Die Zielgruppe verengen** auf Athlet:innen mit Ernährungsform/Allergie (42 % Kaufrate im Panel) und Hybrid/HYROX/Triathlon (25 %). → `/founder-marketing` (bereits so angelegt)
3. **Echter Vorverkauf** vor allen grösseren Ausgaben: ≥ 40 bezahlte Gründungsmitglieder in drei Wochen. → `/founder-launch` (Test vom 30.11. bis 20.12.2026)

### Was Fiber ist
Eine Schweizer Ernährungs-App für Menschen, die 3–6× pro Woche trainieren: Sie verbindet Strava, Garmin oder Apple Health, berechnet Tagesziele aus offiziellen Formeln und der Schweizer Nährwertdatenbank des Bundes und gibt einen Essensplan mit Portionen und Timing rund ums Training. Zielgruppe zuerst: Läufer:innen, HYROX- und Triathlon-Athlet:innen in der Deutschschweiz, besonders mit vegetarischer, veganer oder allergiebewusster Ernährung.

### Die drei Zahlen
| | |
|---|---|
| Deckungsbeitrag pro Abo-Monat | CHF 4.36 (81 %) |
| Break-even | 561 zahlende Abos (ohne Gründerlöhne) |
| Jahr 1 | Betriebsverlust CHF 19'835; Kapitalbedarf CHF 38'335 inkl. Startkosten |

### Wo Board und Panel übereinstimmen – und wo nicht
- **Einig:** Ohne Beweis kein Vertrauen (Board: SVDE + Pilot; Panel: 13 Käufer verlangen Bewertungen oder Club-Empfehlungen). Das Angebot ist zu breit und passt nicht zu jedem Alltag (Board: „kein Kern“; Panel: Kantine, Meal-Prep, eigene Rezepte).
- **Uneinig:** Das Board sah Läufer:innen mit Rennziel als stärkste Nische. Das Panel zeigt, dass **Ernährungsform/Allergie** (42 %) und **Hybrid/HYROX** (25 %) deutlich stärker kaufen als Läufer:innen allgemein (9 %). Wir folgen dem Panel – bis der echte Vorverkauf etwas anderes zeigt.

### Das grösste Risiko
**Zu wenige zahlende Abos** – im Modell ist die Ramp eine Annahme, und die Gründer:innen arbeiten unbezahlt. Gegenmassnahme: Vorverkauf mit Erfolgs- und Abbruchlinie *vor* den grossen Ausgaben, Rennpaket (CHF 29 einmalig) als Einstieg für Abo-Verweigerer, Coaches als Vertriebsweg.

### Was es zum Start braucht
- **Kapital:** CHF 38'335 bis Ende Jahr 1 (im Budget von CHF 50'000; Reserve ≈ CHF 11'700).
- **Erster Test:** Gründungsmitglied-Vorverkauf CHF 49, 30.11.–20.12.2026, Erfolgslinie ≥ 40 Käufe bei ≥ 600 erreichten Athlet:innen.

### Diese Woche
**Eine Ernährungsberaterin oder einen Ernährungsberater SVDE mit Sporternährung finden und die Landingpage mit Bezahllink für den Vorverkauf bauen** – beides liegt auf dem kritischen Pfad.

*Das Panel besteht aus simulierten Käufern, die Zahlen sind Projektionen. Echte Kund:innen und echte Offerten bestätigen sie. Keine Finanz-, Rechts- oder Steuerberatung.*

## What the board said

**Abstimmung: 3× FUND IF, 0× PASS · Durchschnitt 4.7 / 10** (Offers 5, Monopoly 4, Product 5)
Memos: `board/offers.md`, `board/monopoly.md`, `board/product.md`

### Risiken, die mehrere Mitglieder nennen (zuerst)
1. **Zu breit, kein klarer Kern** (Product, Offers, Monopoly): Ziele, Rezepte, Timing, Tausch, Mikros, Einkaufsliste, Wissen, vier Integrationen – mit CHF 50'000. Alle drei verlangen eine Nische und ein Ergebnis.
2. **Kein Beweis** (Offers, Monopoly, Product): keine Nutzer, keine dokumentierten Ergebnisse, keine SVDE-Fachperson. „Verlässlich“ ist noch eine Behauptung.
3. **Leicht kopierbar / kein 10×-Vorteil** (Monopoly, Offers): BLV-Daten sind öffentlich, Formeln Standard. Ob „präziser“ für Käufer viel besser ist als bestehende Apps, ist offen.
4. **Abhängigkeit von fremden Plattformen** (Monopoly, Product): Apple Health braucht die native App, Garmin eine Zulassung, Runna hat keine API. Das Kernversprechen „Essen rund ums Training“ hängt daran.
5. **Aufwand im Alltag** (Offers, Product): Präzision endet beim Kantinen- und Restaurantessen; wenn dort mühsam erfasst werden muss, kippt das Versprechen in Arbeit.

### Bedingungen (Checkliste für den Rest des Packs)
- [ ] **Eine Nische, ein Ergebnis** schriftlich festlegen (z. B. Läuferinnen/Läufer in der Deutschschweiz, die auf ein Rennen hin trainieren) → `/founder-consumer`, `/founder-marketing`
- [ ] **Kern reduzieren:** „Was esse ich heute rund um mein Training?“ – iOS, eine Sportart, Strava als erste Integration → `/founder-ops`, `/founder-launch`
- [ ] **SVDE-Fachperson** an Bord, Freigabe aller Rezepte, Ziele und Artikel vor dem Launch → `/founder-ops`, `/founder-cfo` (Kosten)
- [ ] **Zahlungsbereitschaft belegen** (Panel + Vorverkauf mit echtem Preis) → `/founder-consumer`, `/founder-pricing`, `/founder-launch`
- [ ] **Pilotgruppe** (z. B. ein Laufclub) mit dokumentierten Ergebnissen → `/founder-launch`
- [ ] **Den 10×-Punkt beweisen** gegenüber der heutigen Lösung der Nische → `/founder-competitors`, `/founder-consumer`
- [ ] **Einen Schutzwall benennen**, der mit jedem Nutzer wächst (geprüfte Schweizer Rezept-/Produktdaten, Club-Netzwerk, Vertrauensmarke) → `/founder-plan`
- [ ] **Einen Vertriebskanal validieren:** mindestens eine Partnerschaft (Club, Verband oder App) und erste gemessene Kosten pro Nutzer → `/founder-marketing`, `/founder-launch`
- [ ] **Paket, das Aufwand abnimmt** (Wochenplan, Einkaufsliste, Tausch, Wettkampftag-Plan) und eine leistbare Garantie → `/founder-offer`, `/founder-cfo`
- [ ] **Ehrlicher Weg für Essen ausserhalb der Rezepte** (Kantine, Restaurant, Riegel) oder Versprechen klar begrenzen → Produkt
- [ ] **Fehlerzustände der Integrationen** gestalten (kein Sync, verspätete Daten) → Produkt
- [ ] **Reicht das Budget?** Native iOS-App + SVDE + Vertrieb mit CHF 50'000 in 12 Monaten → `/founder-cfo`

### Wo das Board uneins ist
- **Monopoly** ist am skeptischsten (4): Ohne Schutzwall ist jeder Vorsprung temporär. **Product** und **Offers** sehen in Vertrauen/Transparenz einen echten Hebel, wenn er bewiesen wird.
- **Offers** würde den Preis eher erhöhen und das Paket anreichern (Garantie, Bonus); **Product** will eher streichen. Beides ist vereinbar, wenn das Paket aus wenigen, gut gemachten Teilen besteht.

### Die stärkste Version, die das Board sieht
Nicht „die Nr. 1 Ernährungs-App für alle“, sondern **der verlässliche Ernährungsbegleiter für Läuferinnen und Läufer in der Schweiz, die auf ein Rennen hin trainieren**: Strava (und später Garmin/Apple Health) verbinden, und Fiber sagt jeden Tag, was und wie viel rund um die Einheit gegessen wird – mit Schweizer Lebensmitteln, von einer SVDE-Fachperson geprüft, mit Wettkampftag-Plan. Gewinnung über Laufclubs und Volksläufe, Beweis über eine dokumentierte Pilotgruppe. Abnehmen und Muskelaufbau kommen später als zweite Nische. Das weicht vom Pitch („alle Ziele, alle Integrationen“) ab – bewusst.

## The competition

Stand 17.11.2026 · nur öffentliche Quellen, jeder Fakt verlinkt. Einige Seiten (cronometer.com, dcrainmaker.com, roadmancycling.com) waren aus dieser Umgebung nicht erreichbar; Werte daraus stammen nur aus Suchergebnis-Zusammenfassungen und sind entsprechend markiert. Rohdaten: `competitors.csv`.

### 1. Wer ist da (nach Nähe zu Fiber)

| Anbieter | Typ | Was | Preis (vergleichbares Abo) |
|---|---|---|---|
| **Hexis** | Direkt | Trainingsgesteuerte Sporternährung, Garmin-Sync seit Jan. 2026 ([Pressemitteilung](https://insider.fitt.co/press-release/hexis-releases-garmin-connect-integration/)) | Kein offizieller Preis gefunden; Testbericht: Jahresabo „roughly a tenner a month“ ([220 Triathlon](https://www.220triathlon.com/?p=183703)) |
| **Fuelin** | Direkt | Fueling-Pläne aus TrainingPeaks ([TrainingPeaks Hilfe](https://help.trainingpeaks.com/hc/en-us/articles/9201819207181-How-to-connect-Fuelin-to-TrainingPeaks)) | USD 29.99/Mt. oder 119/Jahr (Drittquelle, unbestätigt) |
| **Garmin Connect+ Ernährung** | Direkt/Indirekt | Food-Logging mit KI-Foto in Garmin Connect | USD 6.99/Mt., 69.99/Jahr ([Android Central](https://www.androidcentral.com/wearables/garmin-nutrition-tracking-relies-on-ai-to-log-food-and-recommend-dietary-changes)); EUR 9/Mt. ([heise](https://heise.de/-11131541)) |
| **eBalance** | Direkt (CH) | Ernährungstagebuch, >11'000 Schweizer Lebensmittel ([App Store](https://apps.apple.com/lu/app/ebalance/id6444804624)) | CHF 35/Mt. |
| **MacroFactor** | Indirekt | Adaptiver Makro-Tracker, kein Gratis-Tier | USD 11.99/Mt., 71.99/Jahr ([AppPricingLab](https://apppricinglab.com/app/apple/1553503471)); Bundle 89.99/Jahr ([Hilfe](https://help.macrofactorapp.com/en/articles/393-how-macrofactor-subscriptions-and-bundles-work)) |
| **YAZIO** | Indirekt | Kalorienzähler, DACH-stark | EUR 35.90/Jahr ([App Store DE](https://apps.apple.com/DE/app/id946099227)); CHF 99/Jahr unbestätigt ([apptail](https://apptail.io/app/yazio-kalorien-zahler-diat-cZf/switzerland)) |
| **MyFitnessPal** | Indirekt | Kalorienzähler, Community-Datenbank | Premium USD 79.99/Jahr, Premium+ 99.99 ([recurdash](https://recurdash.com/subscription-pricing/myfitnesspal)) |
| **Lifesum** | Indirekt | Tracker mit Diätplänen | EUR 9.99–54.99 je Laufzeit ([App Store LU](https://apps.apple.com/lu/app/id286906691?l=en-gb)) |
| **MySwissFoodPyramid (BLV)** | Ersatz | Gratis-Tagebuch nach Schweizer Pyramide, keine Kalorien ([App Store](https://apps.apple.com/de/app/myswissfoodpyramid/id1386182432)) | gratis |
| **Ernährungsberatung SVDE** | Ersatz | Persönliche Beratung | CHF 120–180/Std. ([Comparis](https://www.comparis.ch/krankenkassen/leistungen/ernaehrungsberatung)) |

Weitere Ersatzlösungen: Gratis-Version von MyFitnessPal (enthält laut Nutzern [viele Migros-Produkte](https://migipedia.migros.ch/en/forum/migros/kalorien-app)), Instagram-/YouTube-Rezepte, gar nicht tracken.

### 2. Preisspanne (Jahresabo, Originalwährung, keine Umrechnung)
- **Tiefster:** YAZIO EUR 35.90/Jahr (DE)
- **Mittelfeld:** Garmin Connect+ USD 69.99, MacroFactor USD 71.99, MyFitnessPal USD 79.99
- **Höchster App-Preis:** Fuelin USD 119/Jahr (unbestätigt); eBalance CHF 35/Monat
- **Ersatz Mensch:** SVDE-Beratung CHF 120–180 pro Stunde
→ Ein Sporternährungs-Abo um ca. CHF 70–120/Jahr liegt im Bereich der direkten Konkurrenz. Zahlungsbereitschaft klärt `/founder-pricing`.

### 3. Positionierungskarte
Achsen: **x = Trainingsbezug** (allgemeines Kalorienzählen → Plan aus dem Training) · **y = Datenvertrauen für Schweizer Lebensmittel** (Community-/Regionaldaten mit Lücken → geprüfte lokale Daten)

```
 hohes Datenvertrauen CH
        |  eBalance            [Lücke: Fiber-Ziel]
        |  MySwissFoodPyramid
        |
        |                                  
 -------+------------------------------------------ Trainingsbezug →
        |  YAZIO   MyFitnessPal      Garmin Connect+      Hexis
        |  Lifesum  MacroFactor                           Fuelin
 Community-/Regionaldaten mit Lücken
```

### 4. Was Kundinnen und Kunden kritisieren (gerankt)
1. **Ungenaue Lebensmitteldaten** – bei fast allen Trackern.
   - YAZIO: Bewertungsanalyse nennt „ungenaue Lebensmitteldatenbank“ ([Kimola](https://kimola.com/reports/unlock-insights-yazio-app-customer-feedback-report-google-play-151936)); Datenbank stark aus Community-Einträgen ([t3n](https://t3n.de/news/abnehm-apps-vergleich-diaet-1442623/)).
   - Hexis: „many entries are inaccurate or unverified“ ([Nutzerbewertungen](https://appshunter.io/ios/app/1610334327/reviews)).
   - MacroFactor: „occasional database gaps outside the U.S.“ ([Macaron](https://macaron.im/playbook/macrofactor-reviews)).
2. **Regionale Lücken in Europa** (Garmin): Österreich – Region mehrfach umstellen; Norwegen – Datenbank „nearly empty“ ([Garmin-Forum AT](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-mobile-andriod/430037/connect-nutrition-absolute-garbage-austria), [NO](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-mobile-ios/428930/nutrition-feature---norway)); Test: „Still Not Worth It After a Year“ ([the5krunner](https://the5krunner.com/2026/04/20/garmin-connect-plus-review/)).
3. **Mühsames Erfassen** – Hexis: Food-Tracking „pretty painful“ ([Bewertungen](https://appshunter.io/ios/app/1610334327/reviews)); Garmin: KI-Erfassung ohne Portionsanpassung ([Garmin-Forum](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-mobile-ios/444062/garmin-connect-nutrition-bugs)).
4. **Preis/Abo ohne Test** – Hexis: Jahresabo ohne Demo, danach gekündigt ([TrainerRoad-Forum](https://trainerroad.com/forum/t/anyone-with-experience-using-nutrition-app-hexis/85624)); MacroFactor ohne Gratis-Version ([Macaron](https://macaron.im/playbook/macrofactor-reviews)); YAZIO führt laufend zur Abo-Seite ([nextpit](https://www.nextpit.de/kaufberatungen/die-besten-kalorienzaehler-apps)).
5. **Unfertige Funktionen** – Hexis: Funktionen „coming soon“ trotz hohem Preis ([Bewertungen](https://appshunter.io/ios/app/1610334327/reviews)). *Dünn: unter drei Belege.*

Hinweis: Mehrere Kritik-Zusammenfassungen stammen von Konkurrenz-Blogs (z. B. Nutrola) und sind nicht neutral; nur als Hinweis verwendet, nicht als Beleg.

### 5. Die Lücke
**Niemand verbindet Trainingsplan, deutschsprachige Bedienung und geprüfte Schweizer Lebensmitteldaten.**
- Die Trainings-Apps (Hexis, Fuelin) sind englischsprachig, auf Radprofis ausgerichtet und werden für ungenaue Datenbanken kritisiert.
- Die Tracker (YAZIO, MyFitnessPal, MacroFactor) haben keinen Trainingsplan-Bezug und Datenlücken ausserhalb der USA bzw. Community-Daten.
- Garmin hat die Trainingsdaten, aber laut Nutzern schwache europäische Lebensmitteldaten.
- Die Schweizer Lösungen (eBalance, MySwissFoodPyramid) haben lokale Daten, aber keinen Sportbezug.

Fibers Ansatz – **Plan statt Erfassen** (Rezepte mit Portionsfaktor aus BLV-Daten) plus Trainingssync – adressiert die beiden meistgenannten Beschwerden (ungenaue Daten, mühsames Erfassen) gleichzeitig. Das bestätigt die Board-Nische (Läufer/innen in der Schweiz mit Rennziel), ist aber noch nicht vom Käufer belegt.

### 6. Die Bedrohung
1. **Garmin** – besitzt Gerät, Trainingsdaten und Abo-Kunden; könnte Schweizer Daten und Planung nachrüsten. Schnellster Kopierer.
2. **Hexis** – hat bereits Konzept und Garmin-Sync; Lokalisierung (Deutsch, Schweizer Lebensmittel) wäre ein überschaubarer Schritt.
3. **YAZIO** – DACH-Reichweite und Rezepte; ein Trainingssync wäre für sie ein Feature, für Fiber der Kern.
→ Schutzwall muss aus dem kommen, was diese nicht schnell haben: geprüfte Schweizer Rezept- und Produktdaten, SVDE-Vertrauen, Club-Netzwerk.

## The buyer panel

**9 buy · 91 pass** (9% buy) out of 100 simulated buyers. Seed 190362, so the same cards can be dealt again.

These are simulated buyers, not customers. Use this to find objections and weak spots, then confirm the big ones with real people before you spend.

### By segment

| group | buyers | buy rate |
| --- | ---: | ---: |
| Hybrid/Triathlon/HYROX-Athlet/in | 20 | 25% |
| Läufer/in mit Rennziel (10 km bis Marathon) | 35 | 9% |
| Fitness/Kraft mit Ziel Fettabbau oder Muskelaufbau | 30 | 3% |
| Wiedereinsteiger/in, trainiert für Gesundheit und Gewicht | 15 | 0% |

### By buying behaviour

| group | buyers | buy rate |
| --- | ---: | ---: |
| Allergie oder Ernährungsform | 12 | 42% |
| Rezept-Sammler/in | 14 | 14% |
| Daten-Nerd mit Uhr | 18 | 11% |
| Skeptisch, liest Bewertungen | 12 | 0% |
| Tracker-Profi | 18 | 0% |
| Bequem und gratis | 16 | 0% |
| Hat schon Coach oder Ernährungsberatung | 10 | 0% |

### By income

| group | buyers | buy rate |
| --- | ---: | ---: |
| $104,000 and up | 34 | 18% |
| $82,000 to $104,000 | 33 | 9% |
| under $82,000 | 33 | 0% |

### Why they pass

| reason | buyers | in their words |
| --- | ---: | --- |
| habit | 44 | "Ich esse mittags in der Kantine und abends oft unterwegs, ich koche nicht nach Rezept – ein Tagesplan mit Rezepten und Portionen passt einfach nicht zu meinem Alltag. Die Garmin-Anbindung finde ich spannend, aber dafür allein zahle ich nichts." (P004) · "Ich zahle schon für MacroFactor, kenne meine Makros und Runna plant mein Training. Ein fixer Essensplan mit Rezepten passt nicht zu meinem Alltag, ich esse, was ich esse, und will nicht noch ein Abo für etwas, das ich im Griff habe." (P006) |
| need | 20 | "Ich esse unter der Woche mittags in der Kantine, also nützt mir ein Tagesplan mit Rezepten und Portionen nur für Frühstück und Abendessen. Kalorien und Makros zähle ich schon gratis mit YAZIO und Garmin. Vielleicht teste ich die 14 Tage, aber zahlen würde ich danach eher nicht." (P002) · "Ich tracke schon alles mit Garmin und MyFitnessPal, und mein Garmin sagt mir sowieso, wie viel ich verbrannt habe. Einen fixen Essensplan mit Rezepten koche ich morgens vor dem Gym eh nicht nach, ich esse jeden Tag ungefähr dasselbe." (P005) |
| trust | 13 | "Das Geld ist nicht das Problem, aber die App ist neu, hat noch keine Bewertungen und niemand in meinem Laufclub nutzt sie. Ich lade sie vielleicht gratis runter, aber für Premium zahle ich erst, wenn andere Athleten bestätigen, dass die Pläne für HYROX und Ausdauerblöcke wirklich taugen." (P010) · "Ich würde mir vielleicht die Gratis-Version mit Garmin-Anbindung anschauen, aber für ein Abo bei einer neuen App ohne Bewertungen und ohne Namen dahinter zahle ich nicht. Ausserdem koche ich lieber meine eigenen gespeicherten Rezepte, statt einen fixen Tagesplan abzuarbeiten." (P012) |
| price | 8 | "Ich würde vielleicht die 14 Tage gratis testen und dann vor dem ersten Abbuchen kündigen, wie bei jedem Abo. Für zwei Clubläufe pro Woche reichen mir die Gratis-Tagesziele und die Rezepte, einen Essensplan zahle ich dafür nicht." (P014) · "Ich laufe zweimal pro Woche und will vor allem etwas Gewicht verlieren, dafür reichen mir die Gratis-Tagesziele und die Rezepte zum Stöbern. Den 14-Tage-Test würde ich vielleicht machen, aber ich kündige vor Ablauf, wie bei jedem Abo." (P020) |
| convenience | 3 | "Der Garmin-Sync klingt gut, aber unter der Woche esse ich mittags in der Kantine, da nützt mir ein Tagesplan mit Rezepten und Portionsgrössen wenig. Am Ende wäre es doch wieder Kalorienzählen, und darauf habe ich keine Lust." (P019) · "Die Garmin-Verknüpfung finde ich cool und die 14 Tage würde ich vielleicht testen, aber unter der Woche esse ich mittags in der Kantine, also passt ein Tagesplan mit Rezepten und Portionen sowieso nicht. Am Ende fühlt sich das wieder nach Kalorienzählen an, und darauf habe ich keine Lust." (P028) |
| quality | 2 | "Ich würde die 14 Tage gratis testen, aber ich zahle nur, wenn der Garmin-Sync wirklich tief geht und nicht nur verbrannte Kalorien draufrechnet. Und ich sehe nirgends, dass ich mein Essen tracken kann, ein fixer Essensplan passt schlecht zu meinem Alltag." (P089) · "Ich würde die 14 Tage gratis testen, aber zahlen erst, wenn ich sehe, dass es genug vegetarische, laktosefreie Rezepte mit genug Protein gibt. Zu oft bekomme ich bei solchen Apps immer dieselben drei Tofu-Gerichte, und darum zahle ich im ersten Monat wahrscheinlich noch nichts." (P099) |
| values | 1 | "Das Erste, was ich lese, ist 'Kalorien- und Makroziel' – genau das Zählen und Kontrollieren, das ich nicht in meinem Leben will. Ein Plan, der zu vegetarisch und laktosefrei passt, wäre zwar wirklich nützlich, aber nicht, wenn ich dafür wieder Portionen abwiegen und Zahlen jagen muss." (P003) |

### Why they buy

| reason | buyers | in their words |
| --- | ---: | --- |
| need | 7 | "Ich hasse Kalorienzählen, aber für den Marathonblock will ich an harten Tagen genug essen. Wenn Fiber aus Garmin meinen Bedarf rechnet und mir einfach Rezepte mit Portionen gibt, teste ich die 14 Tage und nehme danach das Jahresabo für 79 Franken, das tut mir nicht weh." (P001) · "Ich koche gern und hasse Kalorienzählen, also ist ein Plan, der sich automatisch an meine Garmin-Trainingstage anpasst, genau das, was mir für HYROX fehlt. Ich starte die 14 Tage gratis und nehme danach das Jahresabo für 79 Franken, aber nur, wenn die Rezepte taugen." (P009) |
| convenience | 2 | "Wenn Fiber wirklich meine Garmin-Daten zieht und das Makroziel an Trainingstagen automatisch hochschraubt, spart mir das das tägliche Rechnen. Ich teste die 14 Tage, und wenn der Sync sauber läuft, nehme ich das Jahresabo für CHF 79, das tut mir nicht weh." (P063) · "Garmin- und Strava-Sync, der mein Kalorienziel an Lauf- und Krafttage anpasst, ist genau das, was ich sonst in Tabellen selber rechne. Ich mache die 14 Tage Test und wenn es sauber synchronisiert, nehme ich erst mal das Monatsabo, nicht gleich das Jahr." (P083) |

### What would flip a no

- Wenn ich mein Kantinenmenü eintragen könnte und Fiber den Rest des Tages darum herum plant, und wenn Leute aus meinem Laufclub sagen, dass es ihnen bei Fettabbau ohne Muskelverlust wirklich geholfen hat.
- Ein Modus ganz ohne Zahlen: einfach 'heute ist langer Lauf, iss das' mit vegetarischen, laktosefreien Rezepten und einer Einkaufsliste nach Migros/Coop-Sortiment, ohne dass ich je eine Kalorie sehe.
- Wenn Fiber mir zeigen würde, was ich in der Kantine oder unterwegs (Coop, Migros to go) konkret wählen soll, statt Rezepte – und wenn ein paar Leute im Laufclub gute Erfahrungen damit hätten.
- Wenn Fiber nachweislich mein MyFitnessPal ersetzt, also Logging per Barcode mit Schweizer Produkten plus automatischer Garmin-Sync der tatsächlichen Trainingslast, und das Ziel spürbar besser anpasst als eine fixe Rechnung, würde ich nach dem Gratis-Test das Jahresabo nehmen.
- Wenn es mir in der Marathonvorbereitung konkret sagt, wie viel Kohlenhydrate ich vor und nach langen Läufen brauche, automatisch aus Runna/Garmin, ohne dass ich etwas loggen muss, und ich dafür MacroFactor kündigen könnte.
- Ein Wochenplan für Meal-Prep: am Sonntag eine Einkaufsliste und 3–4 Gerichte für die ganze Woche, die automatisch auf meinen Trainingsplan bis zum Marathon abgestimmt sind, ohne dass ich etwas tracken muss.
- Wenn es ohne Plan und ohne Abwägen ginge: nur konkrete Fueling-Hinweise vor und nach harten Einheiten und eine Carb-Loading-Anleitung für die Rennwoche, die automatisch aus meinem Garmin-Trainingsplan kommt.
- Gute App-Store-Bewertungen von echten Hybrid- oder HYROX-Athleten und ein, zwei Leute aus dem Laufclub, die nach dem Gratis-Test sagen, dass die Pläne und Einkaufslisten im Alltag funktionieren.
- Gute Bewertungen oder eine Empfehlung von jemandem aus meinem Trainingsumfeld, und dass ich meine eigenen Instagram-Rezepte importieren kann und Fiber mir dazu die Portionen nach Body Battery und Trainingstag berechnet.
- Wenn es mir das tägliche Loggen wirklich abnimmt und mir konkret sagt, wie ich vor dem langen Lauf und am Renntag carbo-loade, und ich meine MacroFactor-Daten mitnehmen kann.
- Wenn der Training-Sync mit Garmin/Strava und die Plan-Anpassung an Lauftage gratis wären, oder ein einmaliger Kauf für meinen Marathonblock (z. B. 12 Wochen) statt eines Abos.
- Echte Bewertungen von anderen Läufern plus ein Wochenplan, der sich als Meal-Prep für Sonntag kochen lässt und meine Long-Run-Tage automatisch aus dem Garmin-Trainingsplan zieht – dann würde ich das Jahresabo nehmen.

Buyers say they would buy **1.0 times** in the first month on average.

100 buyers gave all four price answers. Run founder-pricing's van_westendorp.py on the answers folder.

## Pricing

### 1. Der Preis
**Fiber Premium: CHF 7.90 pro Monat oder CHF 59 pro Jahr** (= CHF 4.92/Monat). 14 Tage gratis bleiben.

- **Im akzeptablen Bereich des Panels** (CHF 2 bis 12, `pricing-curve.md`): Das Jahresabo liegt genau am Indifferenzpunkt (CHF 5 – gleich viele finden es günstig wie teuer), das Monatsabo unter dem Median für „wird teuer“ (CHF 9). Der ursprünglich getestete Preis von CHF 9.90/Monat lag für die Hälfte der Käufer über „wird teuer“.
- **Gegen die Konkurrenz** (`competitors.md`): unter MacroFactor (USD 71.99/Jahr), Garmin Connect+ (USD 69.99/Jahr) und Fuelin (USD 119/Jahr, unbestätigt), über YAZIO (EUR 35.90/Jahr in DE). Fiber ist damit die günstigste Option mit Trainingsbezug, ohne Billigsignal.
- **Marge** (aus `unit_economics.py`, Mix 70 % Jahres-/30 % Monatsabos = CHF 5.37 ohne MWST): Deckungsbeitrag **CHF 4.36 (81 %)**, Break-even **561 zahlende Abos**. Bei einem Mix von CHF 6.50 sinkt der Break-even auf 446, bei CHF 4.20 steigt er auf 767.

### 2. Die Preisleiter
| Stufe | Preis | Was drin ist | Warum aufsteigen |
|---|---|---|---|
| **Gratis** | CHF 0 | Tagesziele inkl. Trainingsbonus, Rezepte stöbern mit Allergen- und Diätfilter, Wissensbereich, Strava-Verbindung | Vertrauen aufbauen; Panel: 0 % der „Bequem-und-gratis“-Käufer zahlen ohnehin |
| **Rennpaket** (einmalig) | **CHF 29** für 12 Wochen | Premium für einen Rennblock + Carb-Loading-Plan, Renntag-Verpflegung, Long-Run-Fueling | Für Abo-Verweigerer: 8 Panel-Käufer verlangten ausdrücklich einen Einmalkauf für den Rennblock (z. B. P014, P023, P025, P065, P093). Ersetzt kein Abo, ist ein Einstieg |
| **Premium** | CHF 7.90/Mt. oder 59/Jahr | Tagesplan mit Portionen, Wochen-Meal-Prep mit Einkaufsliste, Essens-Timing aus *geplanten* Einheiten, Zutatentausch, Nährstoff-Check, alle Integrationen | Wer nach dem Rennen weitertrainiert; Jahresabo = 38 % günstiger als monatlich |
| **Coach** (später) | CHF 19/Mt. pro Coach, Athleten erhalten Premium 30 % günstiger | Coach sieht und setzt Ziele seiner Athleten | 6 Panel-Käufer mit Coach würden nur kaufen, wenn ihr Coach Fiber nutzt (z. B. P017, P022, P034, P081) |

### 3. Das Eröffnungsangebot
**Gründungsmitglied: CHF 49 im ersten Jahr** für die ersten 500 Mitglieder aus den Pilot-Laufclubs, **gültig bis 31. März 2027**. Verlängert sich zu CHF 59. Kein „statt“-Preis, keine Dauerrabatte – der Preis ist klein, das Signal ist „du bist früh dabei“.

### 4. Was mit echten Käufern zu testen ist
1. **Jahresabo CHF 59 vs. CHF 69** – zwei Landingpages mit Vorverkauf (Anzahlung oder Warteliste mit Kreditkarte), je 50 % des Traffics aus denselben Clubs.
2. **Rennpaket CHF 24 vs. CHF 34** – am Stand eines Volkslaufs (z. B. Greifenseelauf-Expo) mit QR-Code zu zwei Varianten.
Erfolgskriterium: Vorverkaufsquote der Besucher ≥ 3 %; sonst Preis und Angebot vor dem Bau nochmals anpassen.

### 5. Die Preiseinwände des Panels (wörtlich)
- „Ein weiteres Abo – CHF 9.90 im Monat summiert sich.“ (P014)
- „Ich würde vielleicht die 14 Tage gratis testen und dann vor dem ersten Abbuchen kündigen, wie bei jedem Abo.“ (P014)
- „Wenn der Training-Sync mit Garmin/Strava und die Plan-Anpassung an Lauftage gratis wären, oder ein einmaliger Kauf für meinen Marathonblock (z. B. 12 Wochen) statt eines Abos.“ (P014, „was mich umstimmen würde“)

*Hinweis: Die Preisantworten stammen von simulierten Käufern. Sie bestimmen, was getestet wird – nicht den endgültigen Preis.*

## The numbers

> Alle Beträge in **CHF** (das Werkzeug schreibt „$“). Eine Einheit = ein zahlender Abo-Monat; „a day“ bedeutet hier „aktive zahlende Abos im Monat“ (`days_per_month: 1`). Preise ohne MWST (8.1 %), Apple/Google wickeln die MWST im App Store ab. Kein Finanz-, Steuer- oder Rechtsrat: Struktur (GmbH), Löhne und Steuern vor dem ersten Franken mit einer Treuhand prüfen.

- **Die Marge:** Jeder zahlende Abo-Monat bringt CHF 5.37 ein und lässt nach App-Store-Provision, Hosting und Support **CHF 4.36 Deckungsbeitrag (81 %)**. Software-typisch hoch – das Problem ist nicht die Marge pro Abo, sondern die Anzahl Abos.
- **Break-even: 561 zahlende Abos** bei CHF 2'445 Fixkosten pro Monat. Bei 800 Abos (Plan) bleiben 24 % Gewinnmarge.
- **⚠️ Ohne Gründerlöhne gerechnet.** Das Team (Produkt, Entwicklung, Community) arbeitet in diesem Modell unbezahlt. Mit nur einem Teilzeitlohn von CHF 4'000/Monat stiege der Break-even auf rund 1'480 Abos (CHF 6'445 / 4.36). Das ist die ehrlichste Zahl in diesem Bericht.
- **Die Linie, die alles bewegt: das Wachstum (Ramp).** Volumen −50 % → Jahr-1-Verlust CHF −24'588, Kapitalbedarf CHF 43'088. Volumen +50 % → CHF −15'083, Kapitalbedarf CHF 34'317. Der Preis wirkt schwächer (−10 % Preis → −CHF 1'171 im Jahr 1).
- **Kapitalbedarf:** **CHF 38'335** bis zum Ende von Jahr 1, Startkosten CHF 18'500 eingerechnet. Passt ins Budget von CHF 50'000, aber mit nur CHF ~11'700 Reserve. Break-even wird erst in Jahr 2 erreicht (bei +50–60 Abos pro Monat etwa Monat 14–15).
- **Drei Hebel (gerechnet, nicht geschätzt):**
  1. **Höherer Mix aus Monatsabos/Rennpaketen** → Preis 6.50 statt 5.37: Break-even 446 statt 561, Jahr 1 CHF −17'372 statt −19'835.
  2. **SVDE-Kosten variabel statt fix** (z. B. Prüfung nur pro neuem Rezeptpaket) → Fixkosten sinken; pro CHF 600 weniger pro Monat sinkt der Break-even um 138 Abos.
  3. **Marketing über Partnerschaften statt bezahlt** (Laufclubs, Verbände, Coaches erhalten Rabattcodes) → Fixkosten −CHF 1'000 → Break-even 332 Abos.
- **Board-Bedingungen zu Geld:** „Reicht das Budget?“ → **knapp ja**, aber nur ohne Löhne und nur, wenn die native iOS-App vom Team selbst gebaut wird. „Zahlungsbereitschaft belegen“ → **offen**: Das Panel ergab 9 % Kaufbereitschaft als Obergrenze; echter Vorverkauf nötig.

### Ramp-Herleitung
Monate 1–2: Bau der iOS-App, kein Umsatz. Ab Monat 3 Launch im Pilot mit Laufclubs. Das Panel: 9 von 100 Zielkunden würden nach dem Gratis-Test zahlen (Obergrenze, simulierte Käufer neigen zu Zustimmung). Bei einer angenommenen Reichweite von ~600–900 neuen Downloads pro Monat aus Clubs, Events und Content und einer Umwandlung von 4–6 % in zahlende Abos ergeben sich +25 bis +60 Abos pro Monat (abzüglich Kündigungen). **Die Reichweite ist eine Annahme, keine Messung** – genau das muss der Vorverkauf prüfen.

---

## Unit economics: Fiber – Ernährungs-App für Menschen, die trainieren (Schweiz)

Every number below comes from the input file. Nothing is looked up or guessed.

### One zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)

| line | per zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) |
| --- | ---: |
| Price | $5.37 |
| App-Store-Provision 15 % (Small Business Program) | -$0.81 |
| Hosting/Datenbank/Bilder pro aktivem Nutzer (Schätzung) | -$0.10 |
| Support pro Abo (Schätzung) | -$0.10 |
| **Contribution** (what each zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) leaves to pay the fixed costs) | **$4.36** (81%) |

### The margin that matters

Fixed costs: $2,445 a month (Ernährungsberatung SVDE: laufende Prüfung neuer Rezepte/Artikel, 8 Std. à CHF 150 (Schätzung) $1,200, Marketing laufend (Laufclub-Partnerschaften, Content, Events) – Annahme $1,000, Supabase Pro + Monitoring (USD 25 + Reserve) $45, Apple Developer (CHF 99/Jahr) + Google Play anteilig $10, Domain, E-Mail, Tools $40, Versicherung/Buchhaltung (Schätzung) $150).

- **Break-even: 561 zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)s a day.** Below that you lose money every month.
- **Profit margin at your plan** (800 a day): **24%** of every sale, after every cost.
- Capacity: 100000 a day.

### Year 1, month by month

| month | zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)s a day | revenue | profit | cumulative (after $18,500 startup) |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 0 | $0 | -$2,445 | -$20,945 |
| 2 | 0 | $0 | -$2,445 | -$23,390 |
| 3 | 25 | $134 | -$2,336 | -$25,726 |
| 4 | 55 | $295 | -$2,205 | -$27,931 |
| 5 | 90 | $483 | -$2,053 | -$29,984 |
| 6 | 130 | $698 | -$1,878 | -$31,862 |
| 7 | 175 | $940 | -$1,682 | -$33,544 |
| 8 | 225 | $1,208 | -$1,464 | -$35,008 |
| 9 | 280 | $1,504 | -$1,224 | -$36,232 |
| 10 | 340 | $1,826 | -$963 | -$37,195 |
| 11 | 400 | $2,148 | -$701 | -$37,896 |
| 12 | 460 | $2,470 | -$439 | -$38,335 |

- **Year 1 operating profit: -$19,835** on $11,707 of revenue.
- After the $18,500 startup spend: -$38,335.
- Startup money earned back: not within year 1.
- Cash you need before it pays for itself: **$38,335**.

### What if

| scenario | margin at plan | break-even a day | year 1 profit |
| --- | ---: | ---: | ---: |
| Base plan | 24% | 561 | -$19,835 |
| Price -10% | 16% | 640 | -$21,006 |
| Volume -20% | 10% | 561 | -$21,736 |
| Unit costs +15% | 21% | 581 | -$20,165 |

### Red flags

- Year 1 loses money on operations (-$19,835).
- The startup spend is not earned back within year 1.

## Marketing

Grundlage: `panel/results.md` (100 simulierte Käufer), `competitors.md`, `pricing.md`, `numbers.json`. Alle Panel-Zitate sind Forschung, keine Kundenstimmen – sie erscheinen in keiner Werbung.

### 1. Was die Evidenz sagt
- **Wer kauft:** Menschen mit **Ernährungsform oder Allergie** (42 % Kaufrate) und **Hybrid/HYROX/Triathlon** (25 %). Läufer mit Rennziel 9 %, Kraft/Fettabbau 3 %, Wiedereinsteiger 0 %.
- **Wer nicht kauft:** Tracker-Profis, Gratis-Nutzer, Menschen mit Coach, Skeptiker (je 0 %). → Nicht diese ansprechen, sondern über Coaches und Clubs erreichen.
- **Die Einwände, die Marketing beantworten muss:** (1) „Ich esse in der Kantine, ein Rezeptplan passt nicht“ (44 × Gewohnheit), (2) „Am Ende ist es wieder Kalorienzählen“, (3) „Neue App, keine Bewertungen, wer steckt dahinter?“ (13 × Vertrauen), (4) „Noch ein Abo“.
- **Wichtig fürs Produkt vor dem Marketing:** Die Einwände 1 und 2 sind Produktlücken, keine Kommunikationsprobleme. Ein **Kantinen-/Unterwegs-Modus** und ein **Modus ohne Zahlen** (Fiber rechnet im Hintergrund, zeigt nur Teller und Portionen) gehören vor den Launch. Marketing kann sie nicht wegreden.

### 2. Positionierung
**A (empfohlen):**
> Für Läuferinnen, HYROX- und Triathlon-Athleten mit vegetarischer, veganer oder allergiebewusster Ernährung, die „selten Pläne finden, die zu Training und Ernährung passen“, ist Fiber der Ernährungsplan, der sich an jede Trainingseinheit anpasst – mit Schweizer Lebensmitteldaten und ohne Kalorienzählen, anders als MacroFactor oder YAZIO, die dich alles selbst erfassen lassen.

*Evidenz:* höchste Kaufraten genau in diesen Segmenten; Käufer-Gründe P011, P054, P064, P075, P076 nennen wörtlich das Fehlen passender Pläne für Diät + Training.

**B:** „Für Athleten, die Kalorienzählen hassen: Fiber sagt dir, was du heute rund ums Training isst – berechnet, nicht geschätzt.“ *(stark gegen Einwand 2, trifft aber auch Nicht-Käufer)*

**C:** „Der Rennblock-Ernährungsplan aus deiner Uhr: 12 Wochen, einmal bezahlt.“ *(Rennpaket; bedient Abo-Verweigerer, schwächer für Dauerbindung)*

### 3. Kanäle
| Kanal | Warum er passt | Kosten | Woran wir sehen, dass es wirkt |
|---|---|---|---|
| **Laufclubs, HYROX-Boxen, Tri-Clubs (Pilot)** ✅ | Vertrauen ist der grösste Hemmschuh; Empfehlung aus dem Club wird von 13 Nicht-Käufern als Umstimmer genannt | Club-Abend, Gratis-Jahresabo für Trainer, Rabattcode → CHF 300–600 pro Club | Codes eingelöst, Trial→Abo-Quote pro Club |
| **Coaches & Ernährungsberatende (Partnerprogramm)** ✅ | 10 % der Zielgruppe haben einen Coach und kaufen nur auf dessen Empfehlung | Coach-Zugang gratis + 20 % Provision auf Abos | Anzahl aktiver Coaches, Athleten pro Coach |
| **Instagram/Reels mit Rezepten aus der App** ✅ | Rezept-Sammler (14 % Kaufrate) leben auf Instagram; vegetarische High-Protein-Inhalte zeigen, dass es nicht „Tofu statt Fleisch“ ist (Einwand von P046, P064, P075) | Eigene Produktion; CHF 0–300/Monat Boost | Saves, Profilbesuche → Downloads |
| **Volkslauf-/HYROX-Expo-Stand** (zum Launch) | Zielpublikum am richtigen Ort, Rennpaket-Test | CHF 800–1'500 pro Anlass | QR-Scans, Rennpaket-Käufe |
| ❌ Bezahlte Suche / breite Social Ads | Zu teuer für max. CAC (s. unten), Zielgruppe zu eng | – | – |
| ❌ Influencer gegen Bezahlung | Vertrauens-Thema wird durch bezahlte Posts nicht gelöst; ggf. später mit Offenlegung | – | – |

Start mit den drei ✅-Kanälen.

### 4. Die 30-Tage-Kampagne
**Launch: Montag, 1. März 2027** (Monate 1–2 = Bau der iOS-App und SVDE-Prüfung, siehe `cfo.md`). Ziel-Rennen: Zürich Marathon und Frühlings-HYROX-Events im April. Gründungsmitglied-Angebot (CHF 49 im 1. Jahr, erste 500) **endet am 31. März 2027**.

#### Zehn Hooks
1. *(Reel, 3 s)* „Du isst vegetarisch und trainierst für den Marathon? Das ist dein Teller vor dem Long Run.“ → Einwand: keine passenden Pläne
2. *(Reel)* „Kein Kalorienzählen. Fiber rechnet, du isst.“ → Einwand: Zählen
3. *(Story)* „Kantine heute? Zeig uns das Menü – Fiber plant den Rest des Tages darum herum.“ → Einwand: Kantine *(erst live, wenn Kantinen-Modus gebaut ist)*
4. *(Plakat Club)* „Gemacht in Zürich. Geprüft von einer Ernährungsberaterin SVDE. Jede Zahl mit Quelle.“ → Einwand: wer steckt dahinter
5. *(Reel)* „So viel Kohlenhydrate brauchst du vor deinem Intervalltraining – aus deinen Garmin-Daten, nicht aus dem Bauch.“ → Käufer-Grund Daten-Nerds
6. *(Expo)* „Rennpaket: 12 Wochen Ernährung bis zur Ziellinie. Einmal CHF 29. Kein Abo.“ → Einwand: noch ein Abo
7. *(Carousel)* „Laktosefrei, glutenfrei, vegan: Fiber prüft jede Zutat auf 14 Allergene – auch die versteckten in Sojasauce und Currypulver.“ → Segment Allergie (42 %)
8. *(Reel)* „HYROX-Woche: Was isst du zwischen Sled Push und Wall Balls? Unser Teller für den Tag davor.“ → Segment HYROX (25 %)
9. *(Story)* „Sonntag Meal-Prep: 3 Gerichte, eine Einkaufsliste für Migros oder Coop, passend zu deinen Trainingstagen.“ → Einwand: koche einmal pro Woche
10. *(Post)* „Woher kommen deine Zahlen? Schweizer Nährwertdatenbank des Bundes. Mifflin-St Jeor. Compendium 2024. Hier nachlesen.“ → Einwand: genauer als andere?

#### Kalender
| Datum | Kanal | Was |
|---|---|---|
| Mo 15.02. | Clubs | Pilot-Start in 2 Laufclubs + 1 HYROX-Box: Club-Abend, Trainer erhalten Gratis-Zugang |
| Di 16.02. | Instagram | Hook 4 – wer wir sind, Team mit Namen, SVDE-Fachperson vorgestellt |
| Do 18.02. | Instagram | Hook 1 (Rezept-Reel) |
| Sa 20.02. | Clubs | Long-Run-Treff: Rezept-Degustation nach dem Lauf |
| Mo 22.02. | Coaches | Partnerprogramm an 20 Lauf-/Tri-Coaches (persönlich) |
| Mi 24.02. | Instagram | Hook 7 (Allergene-Carousel) |
| Fr 26.02. | Instagram | Behind the scenes: wie ein Rezept berechnet wird |
| So 28.02. | Instagram | Hook 9 (Sonntag Meal-Prep) |
| **Mo 01.03.** | Alle | **Launch** im App Store; Gründungsmitglied-Angebot startet; Clubs erhalten Codes |
| Di 02.03. | Instagram | Hook 2 |
| Do 04.03. | Instagram | Hook 5 (Intervall-Kohlenhydrate) |
| Sa 06.03. | Expo/Event | Stand an einem Frühlingslauf oder HYROX-Event: Hook 6 (Rennpaket) |
| Mo 08.03. | Clubs | 1. Wochen-Check mit Pilotclubs: Feedback sammeln |
| Mi 10.03. | Instagram | Hook 8 (HYROX) |
| Fr 12.03. | Instagram | Hook 10 (Quellen-Post) |
| Mo 15.03. | Coaches | Erste Coach-Accounts live, Webinar „So nutzen Coaches Fiber“ |
| Mi 17.03. | Instagram | Rezept der Woche aus der App |
| Fr 19.03. | Instagram | Countdown Zürich Marathon: Carb-Loading erklärt (Wissensartikel) |
| Mo 22.03. | Clubs | Zweite Welle: 3 weitere Clubs |
| Mi 24.03. | Instagram | Hook 3 *(nur wenn Kantinen-Modus live)*, sonst Behind the scenes |
| Fr 26.03. | Alle | Erinnerung: Gründungsmitglied endet am 31.03. |
| Mi 31.03. | Alle | Letzter Tag Gründungsmitglied |

**Wenn es nichts Neues gibt:** Rezept aus der App mit Berechnung („so kommen die 34 g Protein zustande“), Wissensartikel als Carousel, Einblick in die SVDE-Prüfung, Fragen aus den Clubs beantworten.

### 5. Budget und Zahlen
**Budget erste 3 Monate: CHF 5'000** (aus Startkosten „Launch-Marketing“, `numbers.json`):
- Clubs/HYROX-Boxen: CHF 2'000 (5 Clubs × ~CHF 400)
- Expo-Stand: CHF 1'500
- Instagram-Produktion/Boost: CHF 900
- Coach-Partnerprogramm (Material, Webinar): CHF 600

**Der höchste Preis für einen Kunden (CAC):**
- Deckungsbeitrag pro Abo-Monat: CHF 4.36 (`cfo.md`).
- Panel: 1.0 Käufe im ersten Monat pro Käufer; Jahresabo ist der Hauptpfad.
- Ein Jahresabonnent bringt im 1. Jahr ≈ 12 × CHF 4.36 = **CHF 52 Deckungsbeitrag**. Bei einer Rückgewinnung der Akquisekosten innert 4 Monaten liegt der **maximale CAC bei ≈ CHF 17** (4 × 4.36). Alles darüber verlängert den Weg zum Break-even.

**Drei Zahlen wöchentlich:**
| Zahl | Ziel | Etwas ändern, wenn |
|---|---|---|
| Downloads pro Club-Code | ≥ 25 % der Clubmitglieder | < 10 % nach 2 Wochen → Club-Abend-Format ändern |
| Trial → bezahltes Abo | ≥ 15 % der Trials | < 8 % → Onboarding und Kantinen/Zahlen-Modus prüfen |
| CAC (Kosten ÷ neue Abos) | ≤ CHF 17 | > CHF 25 zwei Wochen in Folge → Kanal stoppen |

### Regeln
Keine erfundenen Bewertungen, Nutzerzahlen oder Vorher-nachher-Bilder. Gesundheitsangaben nur im Rahmen der Lebensmittelverordnung (keine Heilversprechen; nährwertbezogene Angaben nach geltendem Recht). Bezahlte Partnerschaften werden gekennzeichnet. Keine Rechtsberatung.

## Operations

Fiber ist eine App: Es gibt keinen Laden, aber einen täglichen Betrieb. Der kritische Ablauf ist die **Inhalts-Pipeline** (jedes Rezept muss berechnet und fachlich geprüft sein) und der **Daten-Sync** (wenn Training nicht ankommt, stimmt der Plan nicht).

### 1. Der tägliche Ablauf
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

### 2. Lieferanten und Dienste
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

### 3. Personen
Annahme: drei Gründer:innen, unbezahlt im ersten Jahr (siehe Warnung in `cfo.md`). Lohnnebenkosten (AHV/IV/EO, BVG, UVG) betreffen erst bezahlte Stellen → mit Treuhand klären.

| Rolle | Wer | Std./Woche Aufbau (Monat 1–2) | Std./Woche Betrieb |
|---|---|---|---|
| Produkt & Design | Gründer:in A | 30 | 15 |
| Entwicklung (Expo, Supabase, Integrationen) | Gründer:in B | 35 | 15 |
| Community & Marketing (Clubs, Coaches, Instagram) | Gründer:in C | 15 | 20 |
| Ernährungsfachperson SVDE | extern, Mandat | 10 (Erstprüfung) | 2 (laufend, ≈ 8 Std./Monat) |

**Wochenplan Betrieb:** Mo – Kennzahlen + Planung · Di/Do – Support-Schicht A, Content C · Mi – Release-Vorbereitung B · Fr – Club-Termine C, Support B · Wochenende – rotierender Bereitschaftsdienst für Sync-Ausfälle (1 Person, 30 Min./Tag).

### 4. Routinen (SOPs)
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

### 5. Werkzeuge
| Zweck | Werkzeug | Warum |
|---|---|---|
| Backend | Supabase | bereits gebaut, RLS, EU-Region |
| App | Expo / React Native | iOS + Android aus einer Codebasis, HealthKit über `react-native-health` |
| Abos | RevenueCat | Abos über beide Stores, Gratis-Stufe |
| Buchhaltung | Schweizer KMU-Software (z. B. bexio, Banana) | Offerte/Preisseite prüfen; Treuhand bestimmt |
| Support | geteiltes Postfach + Vorlagen | genügt bis ~1'000 Nutzer |
| Kennzahlen | Supabase-Abfragen + einfache Tabelle | keine zusätzlichen Kosten |

### 6. Bewilligungen, Recht, Versicherung (Schweiz)
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

### 7. Risikoregister
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

### Offene Fragen
- BLV-Nutzungsbedingungen für kommerzielle App (schriftlich)
- Offerten: SVDE (Erstprüfung + Mandat), Datenschutz-Anwalt, Food-Fotografie, Versicherungen
- Garmin-Antrag und Runna-Kontakt: Dauer und Bedingungen
- Treuhand: GmbH vs. Einzelfirma, Gründerlöhne, App-Store-MWST

## Launch plan

**Öffentlicher Launch: Montag, 1. März 2027** (iOS, Deutschschweiz). Heute: 17. November 2026.

### 1. Erst testen, dann ausgeben
**Der Test: Vorverkauf „Gründungsmitglied“, im Voraus bezahlt.**
- Einfache Landingpage (Pitch, Screenshots des Prototyps, Team mit Namen, „So rechnet Fiber“) mit **echtem Bezahllink**: Gründungsmitglied CHF 49 für das erste Jahr ab Launch, voll rückerstattbar bis zum Launch.
- Verteilung nur über die Segmente mit den höchsten Panel-Kaufraten: 2 Laufclubs, 1 HYROX-Box, 1 Triathlon-Club, Instagram-Posts mit vegetarischen/allergiefreundlichen Rezepten.
- **Zeitraum:** Mo 30.11. bis So 20.12.2026. Entscheid: Mo 21.12.2026.
- **Erfolgslinie (vorher festgelegt):** **≥ 40 bezahlte Gründungsmitglieder** bei ≥ 600 erreichten Athlet:innen (≈ 7 %).
- **Abbruchlinie:** < 15 Käufe (< 2.5 %) → nicht bauen wie geplant; zurück zu Angebot und Pricing (Rennpaket als Hauptprodukt testen, Kantinen-Modus zuerst).
- **Vergleich mit dem Panel:** Das Panel sagt 9 % (Obergrenze, simulierte Käufer). Liegt der echte Wert deutlich darunter, gilt der echte Wert.
- **Kosten:** Landingpage selbst gebaut, Bezahllink (Transaktionsgebühr), Club-Abende ≈ CHF 800 → aus dem Launch-Marketing-Budget.

Zusätzlich während des Tests: 10 Gespräche à 20 Minuten mit Nicht-Käufern aus den Clubs – vor allem zur Kantine und zum Kalorienzählen.

### 2. Countdown
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

### 3. Launch-Tag (Mo 1. März 2027)
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

### 4. Die ersten 30 Tage
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

## Not done yet

- The offer: run /founder-offer
- Brand: run /founder-brand

_The panel is simulated buyers and the numbers are projections from your inputs. Confirm demand with real customers and costs with real quotes before you spend. Not financial, legal or tax advice._
