# Board-Brief: Fiber

(Inhalt von founder/idea.md)

# Fiber

- What it is: Eine Ernährungs-App, die Menschen, die trainieren, präzise Kalorien- und Makroziele, passende Rezepte und Essens-Timing rund um ihre Trainings gibt – berechnet aus offiziellen Nährwertdaten statt geschätzt.
- Who it is for: Erwachsene (ca. 25–45) in der Schweiz und im DACH-Raum, die 3–6× pro Woche trainieren (Laufen, Rad, Kraft, Hybrid/HYROX), eine Sportuhr oder Lauf-App nutzen (Garmin, Strava, Apple Watch, Runna) und ein Ziel haben: abnehmen ohne Muskelverlust, Muskelaufbau oder Leistung im Ausdauersport. Viele mit Ernährungsform (vegetarisch, vegan) oder Allergien.
- What it sells, at what price: Freemium-App. Gratis: Onboarding, Tagesziele, Rezepte-Basis, Wissensbereich. Premium-Abo: persönlicher Tagesplan mit Portionsgrössen, Training-Sync und Essens-Timing, Alternativen/Zutatentausch, Mikronährstoff-Check, Einkaufsliste. Preis noch offen (wird mit Käufer-Panel und Pricing bestimmt).
- Where and how: Online, iOS zuerst (Apple Health), dann Android. Markt zuerst Schweiz, dann DACH. Kundengewinnung über Laufclubs, Community, Instagram/Content, Partnerschaften mit Lauf-/Trainings-Apps. Lieferung als App-Store-Abo.
- Budget and constraints: Bis CHF 50'000 für die ersten 12 Monate. Team: Design/Produkt, Entwicklung und Marketing/Community vorhanden; Ernährungsfachperson (SVDE) fehlt noch und muss Rezepte/Inhalte freigeben. Prototyp, Nährwert-Engine (Schweizer Nährwertdatenbank BLV + USDA), 58 Rezepte, Supabase-Backend und Strava/Garmin/Apple-Health-Anbindung (Code) existieren. Garmin Health API braucht Zulassung; Runna hat keine öffentliche API. Ziel: Nr. 1 Ernährungs-App im Bereich Sport-Ernährung.

## Zusätzlicher Kontext vom Gründer
- Anspruch: Man soll sich auf die App verlassen können. Keine „pi mal Daumen“-Rezepte: Nährwerte werden aus Zutaten in Gramm aus der Schweizer Nährwertdatenbank (BLV, 1216 Lebensmittel) berechnet; Allergene (14 Hauptallergene) pro Zutat; Kennzeichnungen nach EU-Claims-Verordnung; Energiebedarf mit Mifflin-St Jeor / Katch-McArdle, Trainingsverbrauch aus MET-Werten oder Uhr-Messung; Sicherheitsregeln (kein Defizit unter 18, bei Untergewicht, Schwangerschaft, Essstörung).
- Aufklärung ist Kernfeature: Wissensbereich mit belegten Artikeln, Info-Buttons überall („So rechnet Fiber“).
- Rezept-Alternativen: Zutatentausch mit neu berechneten Werten, ähnliche Rezepte.
- Integrationen: Strava (OAuth/Webhook, Code fertig), Garmin Health API (Code fertig, Zulassung nötig), Apple Health (nur in nativer iOS-App), Runna (keine API; Läufe kommen über Strava/Garmin/Apple Health, geplante Einheiten bräuchten Partnerschaft).
- Stand: Klickbarer Web-Prototyp mit Design, Engine mit Tests, Datenbankschema. Noch keine native App, keine Nutzer, keine Umsätze.
- Unbekannt (nicht erfinden): Marktgrösse, Kundengewinnungskosten, Zahlungsbereitschaft, Wettbewerbsdetails – werden von späteren Skills (competitors, consumer, pricing, cfo) ermittelt.
