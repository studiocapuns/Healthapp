# Wettbewerb: Fiber

Stand 17.11.2026 · nur öffentliche Quellen, jeder Fakt verlinkt. Einige Seiten (cronometer.com, dcrainmaker.com, roadmancycling.com) waren aus dieser Umgebung nicht erreichbar; Werte daraus stammen nur aus Suchergebnis-Zusammenfassungen und sind entsprechend markiert. Rohdaten: `competitors.csv`.

## 1. Wer ist da (nach Nähe zu Fiber)

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

## 2. Preisspanne (Jahresabo, Originalwährung, keine Umrechnung)
- **Tiefster:** YAZIO EUR 35.90/Jahr (DE)
- **Mittelfeld:** Garmin Connect+ USD 69.99, MacroFactor USD 71.99, MyFitnessPal USD 79.99
- **Höchster App-Preis:** Fuelin USD 119/Jahr (unbestätigt); eBalance CHF 35/Monat
- **Ersatz Mensch:** SVDE-Beratung CHF 120–180 pro Stunde
→ Ein Sporternährungs-Abo um ca. CHF 70–120/Jahr liegt im Bereich der direkten Konkurrenz. Zahlungsbereitschaft klärt `/founder-pricing`.

## 3. Positionierungskarte
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

## 4. Was Kundinnen und Kunden kritisieren (gerankt)
1. **Ungenaue Lebensmitteldaten** – bei fast allen Trackern.
   - YAZIO: Bewertungsanalyse nennt „ungenaue Lebensmitteldatenbank“ ([Kimola](https://kimola.com/reports/unlock-insights-yazio-app-customer-feedback-report-google-play-151936)); Datenbank stark aus Community-Einträgen ([t3n](https://t3n.de/news/abnehm-apps-vergleich-diaet-1442623/)).
   - Hexis: „many entries are inaccurate or unverified“ ([Nutzerbewertungen](https://appshunter.io/ios/app/1610334327/reviews)).
   - MacroFactor: „occasional database gaps outside the U.S.“ ([Macaron](https://macaron.im/playbook/macrofactor-reviews)).
2. **Regionale Lücken in Europa** (Garmin): Österreich – Region mehrfach umstellen; Norwegen – Datenbank „nearly empty“ ([Garmin-Forum AT](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-mobile-andriod/430037/connect-nutrition-absolute-garbage-austria), [NO](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-mobile-ios/428930/nutrition-feature---norway)); Test: „Still Not Worth It After a Year“ ([the5krunner](https://the5krunner.com/2026/04/20/garmin-connect-plus-review/)).
3. **Mühsames Erfassen** – Hexis: Food-Tracking „pretty painful“ ([Bewertungen](https://appshunter.io/ios/app/1610334327/reviews)); Garmin: KI-Erfassung ohne Portionsanpassung ([Garmin-Forum](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-mobile-ios/444062/garmin-connect-nutrition-bugs)).
4. **Preis/Abo ohne Test** – Hexis: Jahresabo ohne Demo, danach gekündigt ([TrainerRoad-Forum](https://trainerroad.com/forum/t/anyone-with-experience-using-nutrition-app-hexis/85624)); MacroFactor ohne Gratis-Version ([Macaron](https://macaron.im/playbook/macrofactor-reviews)); YAZIO führt laufend zur Abo-Seite ([nextpit](https://www.nextpit.de/kaufberatungen/die-besten-kalorienzaehler-apps)).
5. **Unfertige Funktionen** – Hexis: Funktionen „coming soon“ trotz hohem Preis ([Bewertungen](https://appshunter.io/ios/app/1610334327/reviews)). *Dünn: unter drei Belege.*

Hinweis: Mehrere Kritik-Zusammenfassungen stammen von Konkurrenz-Blogs (z. B. Nutrola) und sind nicht neutral; nur als Hinweis verwendet, nicht als Beleg.

## 5. Die Lücke
**Niemand verbindet Trainingsplan, deutschsprachige Bedienung und geprüfte Schweizer Lebensmitteldaten.**
- Die Trainings-Apps (Hexis, Fuelin) sind englischsprachig, auf Radprofis ausgerichtet und werden für ungenaue Datenbanken kritisiert.
- Die Tracker (YAZIO, MyFitnessPal, MacroFactor) haben keinen Trainingsplan-Bezug und Datenlücken ausserhalb der USA bzw. Community-Daten.
- Garmin hat die Trainingsdaten, aber laut Nutzern schwache europäische Lebensmitteldaten.
- Die Schweizer Lösungen (eBalance, MySwissFoodPyramid) haben lokale Daten, aber keinen Sportbezug.

Fibers Ansatz – **Plan statt Erfassen** (Rezepte mit Portionsfaktor aus BLV-Daten) plus Trainingssync – adressiert die beiden meistgenannten Beschwerden (ungenaue Daten, mühsames Erfassen) gleichzeitig. Das bestätigt die Board-Nische (Läufer/innen in der Schweiz mit Rennziel), ist aber noch nicht vom Käufer belegt.

## 6. Die Bedrohung
1. **Garmin** – besitzt Gerät, Trainingsdaten und Abo-Kunden; könnte Schweizer Daten und Planung nachrüsten. Schnellster Kopierer.
2. **Hexis** – hat bereits Konzept und Garmin-Sync; Lokalisierung (Deutsch, Schweizer Lebensmittel) wäre ein überschaubarer Schritt.
3. **YAZIO** – DACH-Reichweite und Rezepte; ein Trainingssync wäre für sie ein Feature, für Fiber der Kern.
→ Schutzwall muss aus dem kommen, was diese nicht schnell haben: geprüfte Schweizer Rezept- und Produktdaten, SVDE-Vertrauen, Club-Netzwerk.
