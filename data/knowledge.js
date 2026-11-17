/*
 * Fiber – Wissensbereich
 * Jeder Artikel nennt seine Quellen. Status "in_review": vor dem Launch von einer
 * Ernährungsberaterin BSc / einem Ernährungsberater SVDE fachlich freizugeben.
 */
(function (root) {
  const A = [
  { slug: 'so-rechnet-fiber', cat: 'Grundlagen', min: 3, title: 'So rechnet Fiber', summary: 'Woher deine Zahlen kommen und wie genau sie sind.',
    body: [
      'Fiber schätzt nichts „pi mal Daumen“. Jede Zahl folgt einer veröffentlichten Methode:',
      '• **Nährwerte** stammen aus der Schweizer Nährwertdatenbank des BLV (über 1200 Lebensmittel). Nur wo dort ein Eintrag fehlt (z. B. Tahini, Whey), nutzen wir die USDA FoodData Central.',
      '• **Rezepte** sind in Gramm pro Zutat erfasst. Kalorien, Makros, Mikronährstoffe und Allergene werden daraus berechnet – nicht von Hand eingetragen.',
      '• **Dein Ruheumsatz** wird mit der Mifflin-St-Jeor-Formel berechnet, mit gemessenem Körperfett mit Katch-McArdle. Beide liegen bei den meisten Menschen innerhalb von ±10 %.',
      '• **Training** rechnen wir mit MET-Werten aus dem Compendium of Physical Activities (2024). Misst deine Uhr den Verbrauch, nutzen wir diesen Wert.',
      '• **Kennzeichnungen** wie „Hoher Proteingehalt“ folgen der EU-Verordnung 1924/2006.',
      'Wichtig: Jeder Körper weicht vom Durchschnitt ab. Darum vergleicht Fiber nach 2–3 Wochen deinen Gewichtsverlauf mit der Prognose und passt das Ziel an.',
    ], sources: [['Schweizer Nährwertdatenbank (BLV)', 'https://naehrwertdaten.ch'], ['Mifflin et al. 1990, Am J Clin Nutr', 'https://pubmed.ncbi.nlm.nih.gov/2305711/'], ['Compendium of Physical Activities 2024', 'https://pacompendium.com'], ['Verordnung (EG) 1924/2006', 'https://eur-lex.europa.eu/eli/reg/2006/1924/oj']] },

  { slug: 'kalorienbedarf', cat: 'Energie', min: 4, title: 'Wie viel Energie brauchst du?', summary: 'Ruheumsatz, Alltag und Training – drei Bausteine.',
    body: [
      'Dein Tagesbedarf setzt sich aus drei Teilen zusammen:',
      '**1. Ruheumsatz (BMR):** Energie für Atmung, Herz, Gehirn – rund 60 % des Bedarfs.',
      '**2. Alltag (PAL):** Bewegung ohne Sport. Ein Bürojob entspricht etwa dem 1.4-Fachen des Ruheumsatzes, ein Job im Stehen etwa 1.6.',
      '**3. Training:** kommt an Trainingstagen dazu. Deshalb ist dein Ziel an Lauftagen höher als an Ruhetagen – das ist gewollt.',
      'Zum Abnehmen zieht Fiber ein Defizit ab, das 0.5–1 % deines Körpergewichts pro Woche entspricht – nie mehr als 25 % deines Bedarfs und nie unter deinen Ruheumsatz.',
    ], sources: [['D-A-CH Referenzwerte Energie', 'https://www.dge.de/wissenschaft/referenzwerte/energie/'], ['Helms et al. 2014, JISSN', 'https://pubmed.ncbi.nlm.nih.gov/24864135/']] },

  { slug: 'protein', cat: 'Makronährstoffe', min: 3, title: 'Protein: wie viel und wann?', summary: 'Mehr als 0.8 g/kg lohnt sich, wenn du trainierst.',
    body: [
      'Die DGE empfiehlt Erwachsenen mindestens **0.8 g Protein pro kg** Körpergewicht. Wer regelmässig trainiert, profitiert von **1.4–2.0 g/kg** (ISSN).',
      'Im Kaloriendefizit schützt eine höhere Zufuhr die Muskulatur: Fiber rechnet dann mit 2.4 g pro kg fettfreier Masse.',
      '**Verteilung zählt:** 3–5 Mahlzeiten mit je 0.3–0.4 g/kg sind wirksamer als eine grosse Portion am Abend.',
      'Gute Quellen: Quark, Skyr, Eier, Hülsenfrüchte, Tofu, Fisch, Geflügel. Pflanzliche Quellen lassen sich kombinieren (z. B. Linsen + Reis).',
      'Bei Nierenerkrankungen gelten andere Grenzen – sprich mit deiner Ärztin oder deinem Arzt.',
    ], sources: [['Jäger et al. 2017, ISSN Position Stand', 'https://pubmed.ncbi.nlm.nih.gov/28642676/'], ['DGE Referenzwert Protein', 'https://www.dge.de/wissenschaft/referenzwerte/protein/']] },

  { slug: 'kohlenhydrate-training', cat: 'Training', min: 4, title: 'Essen rund ums Training', summary: 'Was du vorher, während und nachher brauchst.',
    body: [
      '**Vorher (1–4 Std.):** 1–4 g Kohlenhydrate pro kg, wenig Fett und Ballaststoffe – das ist gut verträglich und füllt die Speicher.',
      '**30–60 Min. vorher:** ein kleiner Snack mit 20–30 g schnellen Kohlenhydraten, z. B. eine Banane.',
      '**Während (> 60 Min.):** 30–60 g Kohlenhydrate pro Stunde, bei über 2.5 Std. bis 90 g.',
      '**Danach:** 0.3–0.4 g Protein pro kg und – nach Ausdauer – Kohlenhydrate zum Auffüllen.',
      'An Tagen mit langen Einheiten empfiehlt das ACSM 5–7 g Kohlenhydrate pro kg. Fiber warnt dich, wenn dein Defizit an einem solchen Tag zu gross wäre.',
    ], sources: [['Thomas, Erdman & Burke 2016, ACSM Joint Position', 'https://pubmed.ncbi.nlm.nih.gov/26891166/'], ['Kerksick et al. 2017, ISSN Nutrient Timing', 'https://pubmed.ncbi.nlm.nih.gov/28919842/']] },

  { slug: 'ballaststoffe', cat: 'Makronährstoffe', min: 3, title: 'Ballaststoffe – der unterschätzte Nährstoff', summary: '30 g pro Tag schaffen die wenigsten.',
    body: [
      'Die DGE empfiehlt **mindestens 30 g Ballaststoffe pro Tag**. Im Schnitt essen Erwachsene in der Schweiz deutlich weniger.',
      'Eine grosse Auswertung im Lancet (2019) zeigt: Wer 25–29 g oder mehr isst, hat ein geringeres Risiko für Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes und Darmkrebs.',
      'Ballaststoffe sättigen, stabilisieren den Blutzucker und ernähren die Darmflora.',
      'Quellen: Hülsenfrüchte, Vollkorn, Haferflocken, Gemüse, Beeren, Nüsse und Samen. Steigere langsam und trinke genug.',
    ], sources: [['DGE Referenzwert Ballaststoffe', 'https://www.dge.de/wissenschaft/referenzwerte/kohlenhydrate-ballaststoffe/'], ['Reynolds et al. 2019, Lancet', 'https://pubmed.ncbi.nlm.nih.gov/30638909/']] },

  { slug: 'fette', cat: 'Makronährstoffe', min: 3, title: 'Fett: Qualität vor Menge', summary: 'Welche Fette du bevorzugen solltest.',
    body: [
      'Fett liefert Energie, fettlösliche Vitamine (A, D, E, K) und lebenswichtige Fettsäuren. Etwa **30 % der Energie** aus Fett sind ein guter Richtwert.',
      '**Gesättigte Fettsäuren** (Butter, Rahm, fettes Fleisch) sollten unter 10 % der Energie bleiben (WHO 2023).',
      '**Omega-3:** EFSA empfiehlt 250 mg EPA+DHA pro Tag – das entspricht 1–2 Portionen fettem Fisch pro Woche. Pflanzlich liefern Lein-, Chia- und Rapsöl ALA.',
      'Raps- und Olivenöl sind in der Küche die beste Basis.',
    ], sources: [['WHO 2023: Saturated fatty acid and trans-fatty acid intake', 'https://www.who.int/publications/i/item/9789240073630'], ['EFSA 2010, DRV for fats', 'https://www.efsa.europa.eu/en/efsajournal/pub/1461']] },

  { slug: 'zucker-salz', cat: 'Grundlagen', min: 2, title: 'Zucker und Salz im Blick', summary: 'Zwei Grenzwerte, die wirklich zählen.',
    body: [
      '**Freie Zucker** (zugesetzter Zucker, Honig, Sirup, Säfte) sollten unter **10 % der Energie** bleiben, besser unter 5 % (WHO). Zucker in ganzen Früchten und Milch zählt nicht dazu.',
      '**Salz:** höchstens **5 g pro Tag**. Der grösste Teil stammt aus Brot, Käse, Fleischwaren und Fertigprodukten, nicht aus dem Salzstreuer.',
      'Fiber zeigt dir beide Werte pro Rezept. Sojasauce, Feta und Halloumi sind typische Salzquellen.',
    ], sources: [['WHO 2015, Sugars intake guideline', 'https://www.who.int/publications/i/item/9789241549028'], ['BLV Salzstrategie', 'https://www.blv.admin.ch/blv/de/home/lebensmittel-und-ernaehrung/ernaehrung/produktzusammensetzung/salz.html']] },

  { slug: 'gesund-abnehmen', cat: 'Ziele', min: 4, title: 'Abnehmen, ohne Muskeln zu verlieren', summary: 'Langsam ist schneller.',
    body: [
      'Ein Tempo von **0.5–1 % des Körpergewichts pro Woche** gilt als gut, um Fett zu verlieren und Muskeln zu erhalten.',
      'Die drei wichtigsten Hebel: ausreichend Protein, Krafttraining 2–3× pro Woche und genug Schlaf.',
      'Das Gewicht schwankt täglich um 1–2 kg (Wasser, Darminhalt, Zyklus). Fiber wertet darum den Wochentrend aus, nicht einzelne Tage.',
      'Nach einigen Wochen sinkt der Verbrauch leicht (metabolische Anpassung). Fiber erkennt das am Verlauf und passt dein Ziel an.',
      'Kein Defizit bei Untergewicht, unter 18 Jahren, in Schwangerschaft/Stillzeit oder bei Essstörungen – hier gibt Fiber bewusst keine Abnehmziele vor.',
    ], sources: [['Helms et al. 2014, JISSN', 'https://pubmed.ncbi.nlm.nih.gov/24864135/'], ['Hall et al. 2011, Lancet', 'https://pubmed.ncbi.nlm.nih.gov/21872751/']] },

  { slug: 'pflanzlich', cat: 'Ernährungsformen', min: 4, title: 'Vegan und vegetarisch gut versorgt', summary: 'Diese Nährstoffe brauchen Aufmerksamkeit.',
    body: [
      '**Vitamin B12** muss bei veganer Ernährung immer supplementiert werden – es gibt keine verlässliche pflanzliche Quelle.',
      '**Eisen:** Hülsenfrüchte, Vollkorn und Samen kombiniert mit Vitamin C (z. B. Peperoni, Zitrone) verbessern die Aufnahme.',
      '**Jod:** Jodsalz verwenden. **Calcium:** angereicherte Pflanzendrinks und Tofu mit Calciumsulfat.',
      '**Omega-3:** Leinöl, Chia, Baumnüsse; bei veganer Ernährung kann Algenöl sinnvoll sein.',
      '**Protein:** Hülsenfrüchte, Tofu, Tempeh, Seitan – über den Tag kombinieren.',
      'Fiber zeigt dir die Abdeckung dieser Nährstoffe in deinem Plan.',
    ], sources: [['DGE-Positionspapier vegane Ernährung 2024', 'https://www.dge.de/wissenschaft/stellungnahmen-und-fachinformationen/positionen/vegane-ernaehrung/'], ['Eidg. Ernährungskommission: Vegane Ernährung', 'https://www.blv.admin.ch/blv/de/home/das-blv/organisation/kommissionen/eek.html']] },

  { slug: 'trinken', cat: 'Training', min: 2, title: 'Wie viel solltest du trinken?', summary: 'Grundbedarf plus Schweiss.',
    body: [
      'Die EFSA nennt als Gesamtwasser **2.0 l (Frauen) bzw. 2.5 l (Männer) pro Tag**. Etwa 20 % davon kommen aus dem Essen.',
      'Beim Sport verlierst du je nach Intensität und Wetter **0.4–1 l Schweiss pro Stunde**.',
      'Ein einfacher Test: Wiege dich vor und nach dem Training. 1 kg weniger ≈ 1 l Flüssigkeit – ersetze davon 125–150 %.',
    ], sources: [['EFSA 2010, DRV for water', 'https://www.efsa.europa.eu/en/efsajournal/pub/1459'], ['ACSM 2007, Fluid Replacement', 'https://pubmed.ncbi.nlm.nih.gov/17277604/']] },

  { slug: 'vitamin-d', cat: 'Mikronährstoffe', min: 2, title: 'Vitamin D im Schweizer Winter', summary: 'Von Oktober bis März reicht die Sonne nicht.',
    body: [
      'Zwischen Oktober und März ist die Sonne in der Schweiz zu schwach, damit die Haut genug Vitamin D bildet.',
      'Über das Essen nimmt man nur wenig auf (fetter Fisch, Eier).',
      'Das BAG empfiehlt Erwachsenen **600 IE (15 µg) pro Tag**, ab 60 Jahren 800 IE. Besprich eine Ergänzung mit deiner Hausärztin oder deinem Hausarzt.',
    ], sources: [['BAG / Eidg. Ernährungskommission: Vitamin D', 'https://www.blv.admin.ch/blv/de/home/lebensmittel-und-ernaehrung/ernaehrung/empfehlungen-informationen/naehrstoffe/vitamine.html']] },

  { slug: 'naehrwertangaben', cat: 'Grundlagen', min: 2, title: 'Was „High Protein“ wirklich heisst', summary: 'Gesetzliche Definitionen statt Marketing.',
    body: [
      'Fiber vergibt Kennzeichnungen nur nach den Regeln der EU-Verordnung 1924/2006:',
      '• **Hoher Proteingehalt:** mind. 20 % der Energie aus Protein. **Proteinquelle:** mind. 12 %.',
      '• **Hoher Ballaststoffgehalt:** mind. 6 g/100 g oder 3 g/100 kcal. **Ballaststoffquelle:** 3 g/100 g oder 1.5 g/100 kcal.',
      '• **Zuckerarm:** max. 5 g Zucker/100 g. **Fettarm:** max. 3 g Fett/100 g.',
      '„Kohlenhydratarm“ ist gesetzlich nicht definiert. Fiber verwendet ≤ 20 g verfügbare Kohlenhydrate pro Portion und weist das aus.',
    ], sources: [['Verordnung (EG) 1924/2006', 'https://eur-lex.europa.eu/eli/reg/2006/1924/oj']] },

  { slug: 'allergien', cat: 'Sicherheit', min: 2, title: 'Allergien und Unverträglichkeiten', summary: 'Wie Fiber Allergene erkennt – und wo die Grenzen sind.',
    body: [
      'Fiber prüft jede einzelne Zutat auf die 14 Hauptallergene der Lebensmittelverordnung – auch versteckte (Gluten in Sojasauce, Senf und Sellerie in Currypulver).',
      'Rezepte mit deinen Allergenen werden nie vorgeschlagen, auch nicht als Alternative.',
      '**Grenze:** Fiber kennt die Rezeptur, nicht dein Produkt. Spuren und Kreuzkontaminationen stehen auf dem Etikett. Bei schweren Allergien immer die Verpackung prüfen.',
      'Unverträglichkeiten (z. B. Laktose) und Allergien sind verschieden. Eine Diagnose gehört in ärztliche Hände.',
    ], sources: [['Lebensmittelinformationsverordnung (LIV), Anhang 6', 'https://www.fedlex.admin.ch/eli/cc/2017/158/de'], ['aha! Allergiezentrum Schweiz', 'https://www.aha.ch']] },

  { slug: 'koerperfett', cat: 'Grundlagen', min: 2, title: 'Körperfett messen – wie genau ist das?', summary: 'Methoden im Vergleich.',
    body: [
      '**DEXA:** sehr genau (±1–2 %), in Kliniken und Sportzentren.',
      '**Caliper (Hautfalten):** ±3–4 %, gut für Verläufe bei gleicher messender Person.',
      '**Smart-Waagen (BIA):** schwanken je nach Wasserhaushalt um mehrere Prozent – nur unter gleichen Bedingungen vergleichen.',
      '**Schätzung aus BMI:** ±4–5 %. Fiber nutzt sie nur, wenn du nichts gemessen hast, und rechnet dann mit Mifflin-St Jeor statt Katch-McArdle.',
    ], sources: [['Deurenberg et al. 1991, Br J Nutr', 'https://pubmed.ncbi.nlm.nih.gov/2043597/']] },

  { slug: 'teller', cat: 'Grundlagen', min: 2, title: 'Der optimale Teller', summary: 'Ein einfaches Bild für jede Mahlzeit.',
    body: [
      'Die Schweizer Lebensmittelpyramide lässt sich als Teller denken:',
      '• **½ Gemüse und Früchte** – bunt und abwechslungsreich.',
      '• **¼ stärkehaltige Beilage** – bevorzugt Vollkorn, Kartoffeln, Hülsenfrüchte.',
      '• **¼ Proteinquelle** – Hülsenfrüchte, Tofu, Eier, Milchprodukte, Fisch oder Fleisch.',
      '• Dazu wenig hochwertiges Öl und Wasser als Getränk.',
      'Für Sporttage verschiebt sich der Teller Richtung mehr Kohlenhydrate.',
    ], sources: [['SGE: Schweizer Lebensmittelpyramide', 'https://www.sge-ssn.ch/ich-und-du/essen-und-trinken/ausgewogen/schweizer-lebensmittelpyramide/'], ['SGE: Optimaler Teller', 'https://www.sge-ssn.ch/teller/']] },
  ];

  // Info-Buttons in der App → Artikel
  const INFO = { kcal: 'kalorienbedarf', protein: 'protein', carbs: 'kohlenhydrate-training', fat: 'fette', fiber: 'ballaststoffe', water: 'trinken', timing: 'kohlenhydrate-training', claims: 'naehrwertangaben', bodyfat: 'koerperfett', allergens: 'allergien', method: 'so-rechnet-fiber', loss: 'gesund-abnehmen', vegan: 'pflanzlich', salt: 'zucker-salz', vitd: 'vitamin-d', plate: 'teller' };

  const api = { ARTICLES: A, INFO };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FiberKnowledge = api;
})(typeof self !== 'undefined' ? self : this);
