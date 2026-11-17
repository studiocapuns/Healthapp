/*
 * Fiber – Nährwert-Engine
 * Läuft identisch im Browser (window.FiberEngine), in Node (require) und in Supabase Edge Functions (Deno, via import).
 * Alle Referenzwerte sind in SOURCES belegt. Keine Zahl in dieser Datei ist geschätzt, ohne dass das markiert ist.
 */
(function (root) {
  'use strict';

  /* ------------------------------------------------------------------ Quellen */
  const SOURCES = {
    msj: 'Mifflin MD et al. (1990). A new predictive equation for resting energy expenditure. Am J Clin Nutr 51:241–247',
    katch: 'Katch-McArdle: REE = 370 + 21.6 × fettfreie Masse (kg); McArdle, Katch & Katch, Exercise Physiology',
    pal: 'D-A-CH Referenzwerte für die Nährstoffzufuhr, Energie (DGE/ÖGE/SGE), PAL-Werte',
    met: 'Herrmann SD et al. (2024). 2024 Adult Compendium of Physical Activities. J Sport Health Sci 13:6–12',
    rate: 'Helms ER et al. (2014). Evidence-based recommendations for natural bodybuilding contest preparation. JISSN 11:20 (0.5–1 % Körpergewicht/Woche)',
    energyDensity: '≈ 7700 kcal pro kg Körpermasse (Näherung; reale Anpassung nicht linear, vgl. Hall KD et al. 2011, Lancet 378:826–837)',
    protein: 'Jäger R et al. (2017). ISSN Position Stand: protein and exercise. JISSN 14:20 (1.4–2.0 g/kg/Tag)',
    proteinDeficit: 'Helms ER et al. (2014). Int J Sport Nutr Exerc Metab 24:127–138 (2.3–3.1 g/kg fettfreie Masse im Defizit)',
    proteinDge: 'DGE Referenzwert Protein Erwachsene 0.8 g/kg/Tag (Minimum)',
    carbsAthlete: 'Thomas DT, Erdman KA, Burke LM (2016). ACSM/AND/DC Joint Position: Nutrition and Athletic Performance. Med Sci Sports Exerc 48:543–568',
    fat: 'D-A-CH: Fett 30 % der Energie (Richtwert), min. 20 %; gesättigte Fettsäuren < 10 % (WHO 2023)',
    fiber: 'DGE: Ballaststoffe mind. 30 g/Tag',
    sugar: 'WHO (2015). Guideline: Sugars intake for adults and children – freie Zucker < 10 % der Energie',
    salt: 'WHO: < 5 g Salz/Tag; Schweizer Salzstrategie (BLV)',
    water: 'EFSA (2010). Dietary Reference Values for water: 2.0 l (Frauen) / 2.5 l (Männer) Gesamtwasser/Tag',
    sweat: 'ACSM (2007). Exercise and Fluid Replacement Position Stand; Schweissrate typ. 0.4–1.0 l/h',
    dach: 'D-A-CH Referenzwerte (DGE/ÖGE/SGE), Erwachsene 25 bis < 51 Jahre, Stand 2025',
    epa: 'EFSA (2010). Fats DRV: 250 mg EPA+DHA/Tag',
    claims: 'Verordnung (EG) Nr. 1924/2006, Anhang (nährwertbezogene Angaben)',
    timing: 'Kerksick CM et al. (2017). ISSN Position Stand: nutrient timing. JISSN 14:33',
    vegan: 'DGE-Positionspapier vegane Ernährung (2024): Vitamin B12 muss supplementiert werden',
    blv: 'Schweizer Nährwertdatenbank, BLV (naehrwertdaten.ch)',
    usda: 'USDA FoodData Central, SR Legacy',
  };

  /* -------------------------------------------------------- Referenzwerte */
  const PAL = { sitzend: 1.4, leicht: 1.5, aktiv: 1.6, sehr: 1.8 }; // Alltag OHNE Sport – Training wird separat aus MET berechnet

  // MET nach Compendium 2024 (repräsentative Codes je Intensität)
  const MET = {
    laufen:    { locker: 8.0, mittel: 9.8, intensiv: 11.8 },  // ~8 km/h, ~9.7 km/h, ~11.3 km/h
    rad:       { locker: 6.8, mittel: 8.0, intensiv: 10.0 }, // 19–22, 22–25, 25–30 km/h
    kraft:     { locker: 3.5, mittel: 5.0, intensiv: 6.0 },
    schwimmen: { locker: 5.8, mittel: 8.3, intensiv: 9.8 },
    hiit:      { locker: 4.3, mittel: 8.0, intensiv: 9.0 },  // Circuit training
    yoga:      { locker: 2.5, mittel: 3.0, intensiv: 4.0 },
  };
  const ENDURANCE = new Set(['laufen', 'rad', 'schwimmen']);

  // D-A-CH Referenzwerte (Erwachsene 25–<51 J.), Einheiten wie in der Lebensmitteldatenbank
  const DRV = {
    w: { ca: 1000, vitD: 20, fe: 16, mg: 300, k: 4000, zn: 8, b12: 4, folate: 300, vitC: 95, vitA: 700, iodine: 150, se: 60, b1: 1.0, b2: 1.1, b6: 1.4, vitE: 12 },
    m: { ca: 1000, vitD: 20, fe: 11, mg: 350, k: 4000, zn: 14, b12: 4, folate: 300, vitC: 110, vitA: 850, iodine: 150, se: 70, b1: 1.2, b2: 1.4, b6: 1.6, vitE: 14 },
  };
  DRV.d = Object.fromEntries(Object.keys(DRV.w).map(k => [k, Math.max(DRV.w[k], DRV.m[k])]));

  const NUTRIENT_LABELS = {
    kcal: ['Energie', 'kcal'], protein: ['Protein', 'g'], carb: ['Kohlenhydrate', 'g'], sugar: ['Zucker', 'g'], fiber: ['Ballaststoffe', 'g'],
    fat: ['Fett', 'g'], sfa: ['Gesättigte Fettsäuren', 'g'], salt: ['Salz', 'g'], epa: ['EPA', 'g'], dha: ['DHA', 'g'], ala: ['Alpha-Linolensäure', 'g'],
    ca: ['Calcium', 'mg'], fe: ['Eisen', 'mg'], mg: ['Magnesium', 'mg'], k: ['Kalium', 'mg'], zn: ['Zink', 'mg'], iodine: ['Jod', 'µg'], se: ['Selen', 'µg'],
    vitA: ['Vitamin A', 'µg'], b1: ['Vitamin B1', 'mg'], b2: ['Vitamin B2', 'mg'], b6: ['Vitamin B6', 'mg'], b12: ['Vitamin B12', 'µg'], folate: ['Folat', 'µg'],
    vitC: ['Vitamin C', 'mg'], vitD: ['Vitamin D', 'µg'], vitE: ['Vitamin E', 'mg'],
  };

  const round = (v, d = 0) => { const f = 10 ** d; return Math.round(v * f) / f; };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ------------------------------------------------------------ Profil */
  function validateProfile(p) {
    const errors = [];
    if (!(p.age >= 14 && p.age <= 99)) errors.push('Alter muss zwischen 14 und 99 liegen.');
    if (!(p.height >= 120 && p.height <= 230)) errors.push('Grösse muss zwischen 120 und 230 cm liegen.');
    if (!(p.weight >= 35 && p.weight <= 250)) errors.push('Gewicht muss zwischen 35 und 250 kg liegen.');
    if (p.bf != null && !(p.bf >= 3 && p.bf <= 60)) errors.push('Körperfett muss zwischen 3 und 60 % liegen.');
    return errors;
  }

  /** Sicherheitsregeln: wann kein Defizit empfohlen werden darf */
  function safety(p) {
    const bmi = p.weight / ((p.height / 100) ** 2);
    const flags = [];
    let allowDeficit = true;
    if (p.age < 18) { allowDeficit = false; flags.push({ level: 'block', code: 'minor', text: 'Unter 18 Jahren planen wir kein Kaloriendefizit. Wachstum braucht Energie – sprich mit deiner Ärztin oder deinem Arzt.' }); }
    if (p.pregnant || p.lactating) { allowDeficit = false; flags.push({ level: 'block', code: 'pregnancy', text: 'In Schwangerschaft und Stillzeit gibt Fiber keine Abnehmziele vor. Bitte lass dich ärztlich oder von einer Ernährungsberatung begleiten.' }); }
    if (p.edHistory) { allowDeficit = false; flags.push({ level: 'block', code: 'ed', text: 'Bei einer Essstörung in der Vorgeschichte zeigen wir keine Defizite und keine Kalorienziele. Unterstützung: Beratungsstellen und deine Fachperson.' }); }
    if (bmi < 18.5) { allowDeficit = false; flags.push({ level: 'block', code: 'underweight', text: `Dein BMI liegt bei ${round(bmi, 1)} und damit unter 18.5. Abnehmen empfehlen wir nicht.` }); }
    if (p.conditions && p.conditions.length) flags.push({ level: 'warn', code: 'medical', text: 'Bei Vorerkrankungen (z. B. Diabetes, Nierenerkrankung) bitte Ziele mit der behandelnden Fachperson abstimmen.' });
    return { bmi, allowDeficit, flags };
  }

  function estimateBodyFat(p) {
    // Deurenberg P et al. (1991) Br J Nutr 65:105–114 – Schätzung aus BMI, Alter, Geschlecht (±4 % Fehler)
    const bmi = p.weight / ((p.height / 100) ** 2);
    const sex = p.sex === 'm' ? 1 : 0;
    return clamp(round(1.2 * bmi + 0.23 * p.age - 10.8 * sex - 5.4, 1), 5, 55);
  }

  /** Ruheumsatz: Katch-McArdle wenn Körperfett gemessen, sonst Mifflin-St Jeor */
  function bmr(p) {
    const msj = 10 * p.weight + 6.25 * p.height - 5 * p.age + (p.sex === 'm' ? 5 : p.sex === 'w' ? -161 : -78);
    if (p.bf != null && p.bfSource === 'measured') {
      const ffm = p.weight * (1 - p.bf / 100);
      return { value: 370 + 21.6 * ffm, method: 'Katch-McArdle', source: SOURCES.katch, alt: msj };
    }
    return { value: msj, method: 'Mifflin-St Jeor', source: SOURCES.msj };
  }

  /** Netto-Energieverbrauch einer Einheit: (MET − 1) × kg × h. Gemessene Werte (Uhr) haben Vorrang. */
  function exerciseKcal(t, weight) {
    if (t.measuredKcal != null) return { kcal: Math.round(t.measuredKcal), method: 'gemessen (' + (t.src || 'Gerät') + ')' };
    const met = (MET[t.type] || MET.kraft)[t.int || 'mittel'];
    return { kcal: Math.round((met - 1) * weight * (t.dur / 60)), method: `MET ${met} (Compendium 2024)`, met };
  }

  /** Tagesziele inkl. Begründung je Wert */
  function targets(p, trainings = []) {
    const s = safety(p);
    const bf = p.bf != null ? p.bf : estimateBodyFat(p);
    const ffm = p.weight * (1 - bf / 100);
    const b = bmr({ ...p, bf });
    const pal = PAL[p.activity] || 1.5;
    const neat = b.value * pal;
    const ex = trainings.map(t => exerciseKcal(t, p.weight));
    const exKcal = ex.reduce((a, e) => a + e.kcal, 0);
    const tdee = neat + exKcal;
    const why = {};

    // Ziel-Anpassung
    const paceRate = { sanft: 0.005, moderat: 0.0075, ambitioniert: 0.01 }[p.pace || 'moderat'];
    let adj = 0, ratePerWeek = 0;
    if (p.goal === 'abnehmen' && s.allowDeficit) {
      ratePerWeek = -p.weight * paceRate;                        // kg/Woche
      adj = (ratePerWeek * 7700) / 7;                            // kcal/Tag
      adj = Math.max(adj, -0.25 * neat);                          // Defizit max. 25 % des Bedarfs
      why.adj = `Defizit für ${round(Math.abs(ratePerWeek), 2)} kg/Woche (${paceRate * 100} % des Körpergewichts). ${SOURCES.rate}`;
    } else if (p.goal === 'aufbau') {
      adj = Math.min(neat * 0.1, 350);
      // Zunahme ≈ 0.25–0.5 % Körpergewicht pro Monat (je nach Tempo), umgerechnet auf Wochen
      ratePerWeek = round(p.weight * 0.0025 / 4.33 * (p.pace === 'ambitioniert' ? 2 : p.pace === 'sanft' ? 0.75 : 1.25), 3);
      why.adj = 'Moderater Überschuss (≈ 10 %), um Muskelaufbau zu unterstützen, ohne unnötig Fett aufzubauen.';
    } else if (p.goal === 'zunehmen') {
      adj = Math.min(neat * 0.15, 500); ratePerWeek = round(adj * 7 / 7700, 2);
      why.adj = 'Überschuss von ≈ 15 % für eine kontrollierte Gewichtszunahme.';
    } else {
      why.adj = p.goal === 'abnehmen' ? 'Kein Defizit: siehe Sicherheitshinweis.' : 'Energiebilanz ausgeglichen.';
    }

    const floor = Math.max(b.value, p.sex === 'm' ? 1500 : 1200);
    let kcal = Math.max(neat + adj, floor) + exKcal;
    kcal = Math.round(kcal / 10) * 10;

    // Protein
    let protein, proteinWhy;
    if (p.goal === 'abnehmen' && s.allowDeficit) { protein = 2.4 * ffm; proteinWhy = `2.4 g/kg fettfreie Masse (${round(ffm, 1)} kg) im Defizit. ${SOURCES.proteinDeficit}`; }
    else {
      const gpk = { aufbau: 1.8, zunehmen: 1.6, halten: 1.4, ausdauer: 1.5, abnehmen: 1.6 }[p.goal] || 1.4;
      const refW = s.bmi > 30 ? (p.height / 100) ** 2 * 25 : p.weight; // bei Adipositas auf BMI-25-Gewicht beziehen
      protein = gpk * refW; proteinWhy = `${gpk} g/kg${s.bmi > 30 ? ' (bezogen auf Gewicht bei BMI 25)' : ''}. ${SOURCES.protein}`;
    }
    protein = Math.round(Math.max(protein, 0.8 * p.weight));

    // Fett
    const fat = Math.round(Math.max(0.25 * kcal / 9, 0.6 * p.weight));
    // Kohlenhydrate (Rest), Prüfung gegen Sport-Empfehlung
    let carbs = Math.round((kcal - protein * 4 - fat * 9) / 4);
    const trainMin = trainings.reduce((a, t) => a + t.dur, 0);
    const endu = trainings.some(t => ENDURANCE.has(t.type));
    const carbMin = endu ? (trainMin >= 60 ? 5 : 3) * p.weight : 0;
    const carbsWhy = endu ? `Ausdauertag: Empfehlung ${trainMin >= 60 ? '5–7' : '3–5'} g/kg. ${SOURCES.carbsAthlete}` : 'Rest der Energie nach Protein und Fett.';
    const carbWarning = endu && carbs < carbMin ? `Für dein Training wären ≥ ${Math.round(carbMin)} g Kohlenhydrate sinnvoll. Prüfe, ob dein Defizit an diesem Tag zu gross ist.` : null;

    const water = (p.sex === 'm' ? 2.5 : 2.0) * 0.8 + trainings.reduce((a, t) => a + (t.dur / 60) * (t.int === 'intensiv' ? 0.8 : t.int === 'locker' ? 0.4 : 0.6), 0);
    const drv = DRV[p.sex] || DRV.d;

    return {
      kcal, protein, fat, carbs: Math.max(carbs, 50),
      fiber: 30, sugarMax: Math.round(kcal * 0.10 / 4), sfaMax: Math.round(kcal * 0.10 / 9), saltMax: 5, epaDha: 0.25,
      waterL: round(water, 2), micros: drv,
      breakdown: { bmr: Math.round(b.value), bmrMethod: b.method, pal, neat: Math.round(neat), exercise: exKcal, exerciseDetail: ex, adj: Math.round(adj), floor: Math.round(floor), tdee: Math.round(tdee), ffm: round(ffm, 1), bf, bfEstimated: p.bf == null || p.bfSource !== 'measured' },
      ratePerWeek: round(ratePerWeek, 2), safety: s, carbWarning,
      why: { bmr: b.source, pal: SOURCES.pal, exercise: SOURCES.met, adj: why.adj, protein: proteinWhy, fat: SOURCES.fat, carbs: carbsWhy, fiber: SOURCES.fiber, sugar: SOURCES.sugar, salt: SOURCES.salt, water: SOURCES.water + '; plus Schweissverlust: ' + SOURCES.sweat, micros: SOURCES.dach },
    };
  }

  /** Dauer bis zum Zielgewicht (Wochen), lineare Näherung */
  function weeksToGoal(p, t) {
    if (!t.ratePerWeek || p.target == null) return null;
    const diff = p.target - p.weight;
    if (Math.sign(diff) !== Math.sign(t.ratePerWeek) || Math.abs(diff) < 0.2) return null;
    return Math.ceil(Math.abs(diff / t.ratePerWeek));
  }

  /* -------------------------------------------------------- Lebensmittel & Rezepte */
  function createDb(foodsList, ingredients) {
    const foods = new Map();
    for (const f of foodsList) foods.set(f.id, f);
    return { foods, ingredients };
  }

  const NUTRIENTS = ['kcal', 'protein', 'carb', 'sugar', 'fiber', 'fat', 'sfa', 'mufa', 'pufa', 'ala', 'epa', 'dha', 'salt', 'ca', 'fe', 'mg', 'k', 'zn', 'iodine', 'se', 'vitA', 'b1', 'b2', 'b6', 'b12', 'folate', 'vitC', 'vitD', 'vitE'];

  /** Rezept auswerten: Summe aller Zutaten (Gramm × Wert/100), Abdeckung je Nährstoff, Allergene, Diätklasse */
  function analyzeRecipe(db, recipe, servings = 1) {
    const total = Object.fromEntries(NUTRIENTS.map(n => [n, 0]));
    const known = Object.fromEntries(NUTRIENTS.map(n => [n, 0]));
    let grams = 0; const allergens = new Set(); const notes = []; const missing = [];
    let dietRank = 0; const RANK = { vegan: 0, veg: 1, fisch: 2, fleisch: 3 };
    for (const [key, g] of recipe.ing) {
      const ing = db.ingredients[key];
      if (!ing) { missing.push(key); continue; }
      const food = db.foods.get(ing.f);
      if (!food) { missing.push(ing.f); continue; }
      grams += g;
      ing.al.forEach(a => allergens.add(a));
      dietRank = Math.max(dietRank, RANK[ing.diet]);
      if (ing.note) notes.push(`${ing.n}: ${ing.note}`);
      for (const n of NUTRIENTS) {
        const v = food.n[n];
        if (v != null) { total[n] += v * g / 100; known[n] += g; }
      }
    }
    const per = {}; const coverage = {};
    for (const n of NUTRIENTS) { per[n] = total[n] / recipe.serves * servings; coverage[n] = grams ? known[n] / grams : 0; }
    const diet = Object.keys(RANK).find(k => RANK[k] === dietRank);
    return { per, coverage, grams: grams / recipe.serves * servings, allergens: [...allergens], diet, notes, missing, claims: claims(per, grams / recipe.serves * servings) };
  }

  /** Kennzeichnungen nach EU-Claims-Verordnung 1924/2006 (pro Portion und pro 100 g ausgewertet) */
  function claims(per, grams) {
    const out = [];
    const e = per.kcal || 1;
    if (per.protein * 4 / e >= 0.20) out.push({ code: 'hp', label: 'Hoher Proteingehalt', rule: '≥ 20 % der Energie aus Protein' });
    else if (per.protein * 4 / e >= 0.12) out.push({ code: 'protein', label: 'Proteinquelle', rule: '≥ 12 % der Energie aus Protein' });
    const fib100 = grams ? per.fiber / grams * 100 : 0, fib100k = per.fiber / e * 100;
    if (fib100 >= 6 || fib100k >= 3) out.push({ code: 'fiber_high', label: 'Hoher Ballaststoffgehalt', rule: '≥ 6 g/100 g oder ≥ 3 g/100 kcal' });
    else if (fib100 >= 3 || fib100k >= 1.5) out.push({ code: 'fiber', label: 'Ballaststoffquelle', rule: '≥ 3 g/100 g oder ≥ 1.5 g/100 kcal' });
    if (grams && per.fat / grams * 100 <= 3) out.push({ code: 'lowfat', label: 'Fettarm', rule: '≤ 3 g Fett/100 g' });
    if (grams && per.sugar / grams * 100 <= 5) out.push({ code: 'lowsugar', label: 'Zuckerarm', rule: '≤ 5 g Zucker/100 g' });
    if (per.carb <= 20) out.push({ code: 'lc', label: 'Kohlenhydratarm (Fiber-Definition)', rule: '≤ 20 g verfügbare Kohlenhydrate pro Portion – keine EU-Angabe' });
    if ((per.epa || 0) + (per.dha || 0) >= 0.08) out.push({ code: 'omega3', label: 'Omega-3-Quelle', rule: '≥ 40 mg EPA+DHA/100 g bzw. /100 kcal (EU) – hier ≥ 80 mg/Portion' });
    return out;
  }

  /** Mikronährstoffe, die eine Portion zu ≥ 20 % des Tagesbedarfs deckt */
  function richIn(per, sex = 'w') {
    const drv = DRV[sex] || DRV.d;
    return Object.keys(drv)
      .map(k => ({ k, label: NUTRIENT_LABELS[k][0], pct: per[k] / drv[k] }))
      .filter(x => x.pct >= 0.2).sort((a, b) => b.pct - a.pct);
  }

  function fitsProfile(analysis, recipe, p) {
    const OK = { alles: ['vegan', 'veg', 'fisch', 'fleisch'], flexi: ['vegan', 'veg', 'fisch', 'fleisch'], vegetarisch: ['vegan', 'veg'], vegan: ['vegan'], pesc: ['vegan', 'veg', 'fisch'], lowcarb: ['vegan', 'veg', 'fisch', 'fleisch'] };
    const reasons = [];
    if (!(OK[p.diet] || OK.alles).includes(analysis.diet)) reasons.push('Ernährungsform');
    const hit = analysis.allergens.filter(a => (p.allergies || []).includes(a));
    if (hit.length) reasons.push('Allergen: ' + hit.join(', '));
    if (p.diet === 'lowcarb' && analysis.per.carb > 30) reasons.push('Zu viele Kohlenhydrate für Low Carb');
    const dis = (p.dislikes || '').toLowerCase().split(/[,;]+/).map(s => s.trim()).filter(Boolean);
    if (dis.some(d => recipe.ing.some(([k]) => k.includes(d) || (recipe._names || []).some(n => n.toLowerCase().includes(d))))) reasons.push('Enthält etwas, das du nicht magst');
    return { ok: reasons.length === 0, reasons };
  }

  /** Alternativen: (1) Zutaten-Tausch mit neu berechneten Werten, (2) ähnliche Rezepte nach Nährwertprofil */
  function swapOptions(db, recipe, p, swaps) {
    const out = [];
    recipe.ing.forEach(([key, g], idx) => {
      for (const s of (swaps[key] || [])) {
        const to = db.ingredients[s.to]; if (!to) continue;
        const blocked = to.al.some(a => (p.allergies || []).includes(a));
        if (blocked) continue;
        const ing = recipe.ing.slice(); ing[idx] = [s.to, Math.round(g * (s.factor || 1))];
        const r2 = { ...recipe, ing };
        const a = analyzeRecipe(db, r2);
        const base = analyzeRecipe(db, recipe);
        out.push({ from: key, to: s.to, fromName: db.ingredients[key].n, toName: to.n, grams: ing[idx][1], why: s.why,
          delta: { kcal: Math.round(a.per.kcal - base.per.kcal), protein: Math.round(a.per.protein - base.per.protein), fiber: round(a.per.fiber - base.per.fiber, 1) },
          diet: a.diet, allergens: a.allergens });
      }
    });
    return out;
  }

  function similarRecipes(db, recipe, all, p, n = 3) {
    const a = analyzeRecipe(db, recipe).per;
    const vec = x => [x.kcal / 600, x.protein / 40, x.carb / 70, x.fat / 25, x.fiber / 10];
    const va = vec(a);
    return all.filter(r => r.id !== recipe.id && r.meals.some(m => recipe.meals.includes(m)))
      .map(r => { const an = analyzeRecipe(db, r); const vb = vec(an.per); const d = Math.hypot(...va.map((v, i) => v - vb[i])); return { r, an, d, fit: fitsProfile(an, r, p) }; })
      .filter(x => x.fit.ok).sort((x, y) => x.d - y.d).slice(0, n);
  }

  /* -------------------------------------------------------- Tagesplan */
  const SLOT_SHARE = { fruehstueck: 0.25, mittag: 0.35, snack: 0.10, abend: 0.30 };
  function slotShares(trainings) {
    const s = { ...SLOT_SHARE };
    const t = trainings[0];
    if (t) {
      const h = parseInt(t.time, 10);
      if (h >= 12 && h < 20) { s.snack = 0.15; s.mittag = 0.32; s.abend = 0.28; } // Pre-Workout-Snack grösser
      if (h < 10) { s.fruehstueck = 0.28; s.snack = 0.08; }
    }
    return s;
  }

  /** Eignung fürs Training-Timing (Kerksick 2017, Thomas 2016):
   *  pre  = kohlenhydratbetont, wenig Fett und Ballaststoffe (gut verträglich vor Belastung)
   *  post = Protein ≥ 20 g und Kohlenhydrate ≥ 30 g (Reparatur + Glykogen) */
  function timingFit(per) {
    return { pre: per.carb >= 25 && per.fat <= 12 && per.fiber <= 8, post: per.protein >= 20 && per.carb >= 30 };
  }

  /** Wählt Rezepte + Portionsfaktoren (0.5–2.0 in 0.25-Schritten), sodass Energie und Protein möglichst genau getroffen werden */
  function planDay(db, recipes, p, tg, trainings = [], seed = 'x', fixed = {}) {
    const shares = slotShares(trainings);
    const plan = {}; let acc = { kcal: 0, protein: 0 }; const used = new Set();
    const t0 = trainings[0], th = t0 ? toMin(t0.time) / 60 : null;
    const want = { fruehstueck: th != null && th < 10 ? 'post' : null, snack: th != null && th >= 12 && th < 20 ? 'pre' : null, abend: th != null && th >= 15 ? 'post' : null, mittag: th != null && th >= 15 ? 'pre' : null };
    const slots = Object.keys(shares);
    slots.forEach((slot, i) => {
      const remainingShare = slots.slice(i).reduce((a, s2) => a + shares[s2], 0);
      const kcalGoal = (tg.kcal - acc.kcal) * shares[slot] / remainingShare;
      const protGoal = (tg.protein - acc.protein) * shares[slot] / remainingShare;
      const pool = fixed[slot] ? recipes.filter(r => r.id === fixed[slot]) : recipes.filter(r => r.meals.includes(slot));
      const score = cands => cands.map(r => {
        const an = analyzeRecipe(db, r);
        if (!fixed[slot] && (!fitsProfile(an, r, p).ok || used.has(r.id))) return null;
        const timing = want[slot] && !timingFit(an.per)[want[slot]] ? 0.35 : 0;
        const f = clamp(Math.round(kcalGoal / an.per.kcal * 4) / 4, 0.5, 2);
        const kErr = Math.abs(an.per.kcal * f - kcalGoal) / kcalGoal;
        const pErr = Math.max(0, protGoal - an.per.protein * f) / Math.max(protGoal, 1);
        const jitter = (hash(seed + slot + r.id) % 100) / 1000; // Vielfalt, ohne Präzision zu opfern
        return { r, an, f, score: kErr + 0.8 * pErr + timing + jitter };
      }).filter(Boolean).sort((x, y) => x.score - y.score);
      let scored = score(pool);
      // Kein passendes Rezept für diese Mahlzeit (z. B. vegan + mehrere Allergien): jedes passende Rezept zulassen
      if (!scored.length && !fixed[slot]) scored = score(recipes.filter(r => !r.meals.includes(slot))).map(x => ({ ...x, fallback: true }));
      const best = scored[0];
      if (best) { used.add(best.r.id); plan[slot] = { id: best.r.id, timing: want[slot], fallback: !!best.fallback, factor: best.f, kcal: best.an.per.kcal * best.f, protein: best.an.per.protein * best.f, per: best.an.per }; acc.kcal += plan[slot].kcal; acc.protein += plan[slot].protein; }
      else plan[slot] = null;
    });
    return { plan, total: acc, deviation: { kcal: Math.round(acc.kcal - tg.kcal), protein: Math.round(acc.protein - tg.protein) } };
  }

  function hash(s) { let h = 7; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) | 0; return Math.abs(h); }

  /* -------------------------------------------------------- Training & Timing */
  function trainingTips(t, p) {
    const w = p.weight, start = toMin(t.time), end = start + t.dur;
    const endu = ENDURANCE.has(t.type), hard = t.int !== 'locker', long = t.dur >= 75;
    const out = [];
    if (t.type === 'yoga') {
      out.push({ at: start - 120, title: 'Leicht essen', text: 'Letzte grössere Mahlzeit etwa 2 Stunden vorher.', src: SOURCES.timing });
      return out;
    }
    const gpk = long ? 2 : 1;
    if (start >= 9 * 60) out.push({ at: start - 180, tag: 'pre', title: 'Mahlzeit 3 Std. vorher', text: `${Math.round(w * gpk / 5) * 5} g Kohlenhydrate (${gpk} g/kg), moderat Protein, wenig Fett und Ballaststoffe.`, src: SOURCES.carbsAthlete });
    else out.push({ at: start - 45, tag: 'pre', title: 'Frühes Training', text: hard || long ? '20–30 g schnell verfügbare Kohlenhydrate, z. B. Banane oder Toast mit Honig.' : 'Locker und unter 60 Min.: nüchtern ist möglich, Wasser trinken.', src: SOURCES.timing });
    if ((hard || long) && start >= 9 * 60) out.push({ at: start - 45, tag: 'snack', title: 'Snack 30–60 Min. vorher', text: '20–30 g leicht verdauliche Kohlenhydrate, wenig Fett und Ballaststoffe.', src: SOURCES.timing });
    if (endu && t.dur >= 60) out.push({ at: start + 30, tag: 'during', title: 'Während der Einheit', text: `${t.dur > 150 ? '60–90' : '30–60'} g Kohlenhydrate pro Stunde, ca. 400–800 ml Flüssigkeit pro Stunde.`, src: SOURCES.carbsAthlete });
    out.push({ at: end + 30, tag: 'post', title: 'Innerhalb 1–2 Std. danach', text: `${Math.round(w * 0.3)}–${Math.round(w * 0.4)} g Protein (0.3–0.4 g/kg)${endu || t.type === 'hiit' ? ` + ${Math.round(w * (long ? 1.2 : 0.8))} g Kohlenhydrate` : ''}.`, src: SOURCES.protein });
    if (t.type === 'kraft') out.push({ at: null, tag: 'day', title: 'Protein verteilen', text: 'Über 3–5 Mahlzeiten à 0.3–0.4 g/kg verteilen.', src: SOURCES.protein });
    if (endu && t.dur >= 45) out.push({ at: null, tag: 'day', title: 'Flüssigkeit', text: `Schweissverlust ca. ${t.int === 'intensiv' ? '0.8–1.0' : '0.5–0.8'} l/h. Danach etwa 1.25–1.5 × des Verlusts trinken (Gewicht vor/nach dem Training).`, src: SOURCES.sweat });
    return out;
  }
  function toMin(s) { const [h, m] = String(s).split(':').map(Number); return h * 60 + (m || 0); }

  const api = { SOURCES, PAL, MET, DRV, NUTRIENTS, NUTRIENT_LABELS, validateProfile, safety, estimateBodyFat, bmr, exerciseKcal, targets, weeksToGoal, createDb, analyzeRecipe, claims, richIn, fitsProfile, timingFit, swapOptions, similarRecipes, planDay, trainingTips };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FiberEngine = api;
})(typeof self !== 'undefined' ? self : this);
