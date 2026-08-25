# INGEN BEHÖVDE LETA UPP RÄTT PERSON
## Lotta och samtalet hon aldrig behövde koppla vidare

**Story ID:** `ingen-behovde-leta-upp-ratt-person`  
**Master version:** `1.0.0`  
**Narrative Master:** `sv-SE`  
**Format:** 12 paneler + omslag + CTA

## Vinkel

Tjugotredje avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB skiljer sig medvetet från Peter Lunds tidigare berättelse, "Samma fråga. 83 gånger. Innan lunch.", som handlade om att eliminera samtalen helt genom automatiska leveransaviseringar till kunden.

Den här berättelsen utgår istället från att samtalet redan har kommit in och löser ett annat vanligt problem: den som svarar i telefon är sällan den som faktiskt vet svaret. Kunden riskerar annars att kopplas vidare, sättas i vänteläge eller få ett återuppringningslöfte. Här visas att vem som helst på kontoret kan svara direkt med tracker-ID som nyckel, utan att behöva hitta rätt trafikledare.

## Verifierad produktgrund

Navichain Bookings/Public tracking: ett tracker-ID i formatet `TRK-XXXX-XXXX` genereras automatiskt när en bokning sparas. Publik spårning kräver ingen inloggning och visar status, ETA och tidslinje. Sökning i publik spårning sker på exakt tracker-ID. Funktionen är DISPLAY/REPORTING: den skapar inte ny transportdata utan visar det som redan finns i bokningen.

## Narrativ regel

Navichain ringer aldrig upp kunden automatiskt och löser aldrig ärendet åt Lotta. Lotta slår själv upp tracker-ID:t och läser upp svaret. Ingen IT-avdelning syns. Ingen kollega behöver störas eller kopplas in för att hon ska kunna svara.

## Medverkande

- **Lotta Sjö** — huvudroll, HR- och kvalitetsansvarig, Björklunda Åkeri AB.
- **Sara Lund** — trafikledare; nämns men visas inte i bild i den låsta versionen.
- **Kund** — namnlös röst i telefon.

## Omslag

Lotta sitter vid sitt eget skrivbord, inte vid trafikledningens, med luren i handen. Uttrycket går från lätt panik till lugn koncentration. På skärmen framför henne syns ett enda sökfält och en tydlig tidslinje: Upphämtad → Under transport → Levererad, med aktuell position markerad.

## Panel 01 — Fel person svarar
**Text:** "Fel person svarade. Men telefonen ringde där hon satt."

## Panel 02 — Den gamla växeltavlan
**Text:** "Det gamla svaret hade varit att koppla vidare. Och hoppas att någon var ledig."

## Panel 03 — Sara är upptagen
Sara visas inte. Hennes linje/arbetsplats markeras som upptagen.
**Text:** "Sara var mitt i något annat. Att avbryta skulle bara flytta problemet."

## Panel 04 — Kunden väntar
**Text:** "Hon visste inte var leveransen var. Men hon behövde inte heller be kunden vänta."

## Panel 05 — Tracker-ID:t
Lotta ber kunden läsa upp tracker-ID:t.
**Text:** "Tracker-ID:t. Det var allt hon behövde be om."

## Panel 06 — Sökningen
**Text:** "Ett fält. Ett nummer. Inget kontonamn eller lösenord att komma ihåg."

## Panel 07 — Svaret på skärmen
**Text:** "Under transport. Beräknad ankomst 14:20. Precis där, i klartext."

## Panel 08 — Lotta svarar direkt
**Text:** "Den är under transport, beräknad ankomst 14:20. Rakt av, utan att koppla ett enda samtal."

## Panel 09 — Kundens ton ändras
**Text:** "Kundens röst ändrades på en enda mening."

## Panel 10 — Sara, ostörd
Sara visas inte. Hennes arbetsplats/linje förblir ostörd.
**Text:** "Sara visste inte ens att samtalet hade kommit in."

## Panel 11 — Växeltavlan, tyst
**Text:** "Ingenting att koppla. Ingenting att vänta på."

## Panel 12 — Kaffe och nästa samtal
**Text:** "Nästa samtal ringde. Den här gången visste hon redan att hon skulle klara det."

## CTA
Storyspecifik CTA: vem som helst på kontoret kan ge kunden status, ETA och tidslinje med tracker-ID utan att leta efter rätt trafikledare. Lotta är hjälten; Navichain är verktyget. Huvudhandling: signup via `https://navichain.se/signup`.

## Låsta korrigeringar från preflight
1. **Bokningsnummer → tracker-ID** eftersom publik spårning söker på exakt tracker-ID.
2. **Sara syns inte i panel 03 eller 10** eftersom cast-regeln säger att hon endast nämns.
