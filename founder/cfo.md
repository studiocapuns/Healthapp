# CFO-Notiz: Fiber

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

## Ramp-Herleitung
Monate 1–2: Bau der iOS-App, kein Umsatz. Ab Monat 3 Launch im Pilot mit Laufclubs. Das Panel: 9 von 100 Zielkunden würden nach dem Gratis-Test zahlen (Obergrenze, simulierte Käufer neigen zu Zustimmung). Bei einer angenommenen Reichweite von ~600–900 neuen Downloads pro Monat aus Clubs, Events und Content und einer Umwandlung von 4–6 % in zahlende Abos ergeben sich +25 bis +60 Abos pro Monat (abzüglich Kündigungen). **Die Reichweite ist eine Annahme, keine Messung** – genau das muss der Vorverkauf prüfen.

---

# Unit economics: Fiber – Ernährungs-App für Menschen, die trainieren (Schweiz)

Every number below comes from the input file. Nothing is looked up or guessed.

## One zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)

| line | per zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) |
| --- | ---: |
| Price | $5.37 |
| App-Store-Provision 15 % (Small Business Program) | -$0.81 |
| Hosting/Datenbank/Bilder pro aktivem Nutzer (Schätzung) | -$0.10 |
| Support pro Abo (Schätzung) | -$0.10 |
| **Contribution** (what each zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST) leaves to pay the fixed costs) | **$4.36** (81%) |

## The margin that matters

Fixed costs: $2,445 a month (Ernährungsberatung SVDE: laufende Prüfung neuer Rezepte/Artikel, 8 Std. à CHF 150 (Schätzung) $1,200, Marketing laufend (Laufclub-Partnerschaften, Content, Events) – Annahme $1,000, Supabase Pro + Monitoring (USD 25 + Reserve) $45, Apple Developer (CHF 99/Jahr) + Google Play anteilig $10, Domain, E-Mail, Tools $40, Versicherung/Buchhaltung (Schätzung) $150).

- **Break-even: 561 zahlender Abo-Monat (Mix aus Jahres- und Monatsabo, CHF ohne MWST)s a day.** Below that you lose money every month.
- **Profit margin at your plan** (800 a day): **24%** of every sale, after every cost.
- Capacity: 100000 a day.

## Year 1, month by month

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

## What if

| scenario | margin at plan | break-even a day | year 1 profit |
| --- | ---: | ---: | ---: |
| Base plan | 24% | 561 | -$19,835 |
| Price -10% | 16% | 640 | -$21,006 |
| Volume -20% | 10% | 561 | -$21,736 |
| Unit costs +15% | 21% | 581 | -$20,165 |

## Red flags

- Year 1 loses money on operations (-$19,835).
- The startup spend is not earned back within year 1.
