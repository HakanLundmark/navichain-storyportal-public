# RÄTT SIFFROR, SAMMA HISTORIA

**Story ID:** `ratt-siffror-samma-historia`  
**Story ID authority:** backfill-derived from canonical title and episode 34 context in this chat  
**Master language:** sv-SE  
**Master version:** not explicitly established in this chat  
**Status:** Narrative Master available; visual locale incomplete

## Premiss

Ingrid Sund, trafikledare på Björklunda Åkeri AB, upptäcker att en redan utfärdad CMR visar fel antal kollin: 22 i stället för 24. Konflikten är inte att Navichain upptäcker felet, utan att Ingrid själv ser det och måste rätta ett redan utfärdat dokument utan att den ursprungliga versionen försvinner.

Berättelsen demonstrerar den verifierade CMR-mekanismen i Navichain: utfärdande fryser en snapshot, skapar SHA-256-hash, begär RFC 3161-tidsstämpel och lägger till offentlig verifierings-QR. Utfärdade/upphämtade bokningar låses. Omutfärdande är användarinitierat, kräver en angiven anledning och behåller den överskuggade versionen; verifiering kan rapportera intakt, överskuggad/superseded eller failed integrity. Berättelsen gör inga anspråk på eIDAS-kvalificerad undertecknaridentitet eller att dokumentet i sig avgör en juridisk tvist.

## Medverkande

- **Ingrid Sund** — trafikledare, Björklunda Åkeri AB; huvudperson.
- **Robban Ek** — förare, Björklunda Åkeri AB; cameo i panel 04 och 11.

## Omslag — cover_00

Ingrid håller upp två nästan identiska CMR-papper mot ljuset från fönstret. Den tydliga skillnaden är kolliantalet. En gammal arkivpärm med överstruket bläck i bakgrunden symboliserar det gamla sättet att rätta fel.

## Panel 01 — Ett fel upptäcks efter utfärdandet

**Visuellt:** Ingrid granskar en redan skickad och låst CMR på skärmen och märker att antalet kollin är fel — 22 i stället för 24.  
**Text:** "Redan utfärdad. Redan skickad. Och redan fel."

## Panel 02 — Den gamla rädslan: vad händer med originalet?

**Visuellt:** Ingrid föreställer sig ett gammalt pappersflöde där ett dokument makuleras, ett nytt skrivs och versionsstatusen blir svår att följa.  
**Korrigerad text:** "Förr kunde en rättelse göra det svårt att följa vad som stod först — och vilken version som gällde sedan."

## Panel 03 — Kunden ringer, förvirrad

**Visuellt:** Kunden ringer och undrar varför deras kopia visar fel antal kollin jämfört med vad som faktiskt levererades.  
**Text:** "Vilken siffra gäller egentligen? Ingrid har inget säkert svar än."

## Panel 04 — Robban, osäker på sin egen leverans

**Visuellt:** Robban är tillbaka på depån och funderar över om han räknade fel eller om dokumentet har fel.  
**Text:** "Robban minns 24 kollin. Pappret säger 22. Vem har rätt?"

## Panel 05 — Ingrid överväger att bara skriva om allt

**Visuellt:** Ingrid börjar skapa ett nytt separat dokument från grunden men inser att det inte skulle visa att en rättelse faktiskt gjordes.  
**Text:** "Ett nytt dokument löser siffran. Men inte frågan om vad som hände."

## Panel 06 — Arkivpärmen med överstruket bläck

**Visuellt:** Ingrid bläddrar i en gammal fysisk arkivpärm full av överstrukna och handrättade siffror utan tydlig förklaring.  
**Text:** "Överstruket bläck. Ingen anledning angiven. Ingen som minns varför."

## Panel 07 — Omutfärda-knappen upptäcks

**Visuellt:** Ingrid ser knappen "Omutfärda" på den låsta CMR:n och ett fält som kräver en anledning.  
**Text:** "Inte radera. Inte skriva om från noll. Bara: omutfärda — med en anledning."

## Panel 08 — Anledningen skrivs in

**Visuellt:** Ingrid skriver: "Felaktigt kolliantal vid utfärdande, korrigerat efter kundens kontroll." Fältet är obligatoriskt.  
**Korrigerad text:** "En anledning registrerad tillsammans med rättelsen. Inte bara en ändrad siffra."

## Panel 09 — Den nya versionen utfärdas

**Visuellt:** En ny CMR skapas med rätt antal kollin, ny hash och ny tidsstämpel. Den gamla versionen ligger kvar och är tydligt märkt som överskuggad.  
**Text:** "En ny version utfärdad. Den gamla fanns kvar — bara med en annan status."

## Panel 10 — Verifieringen visar status tydligt

**Visuellt:** Ingrid skannar QR-koden på den gamla versionen. Skärmen visar "Överskuggad".  
**Text:** "Skannad igen: inte 'giltig', inte 'borttagen' — bara 'överskuggad'. Precis vad den är."

## Panel 11 — Robban och kunden får rätt svar

**Visuellt:** Ingrid skickar den nya korrekta CMR:n till kunden och återkopplar till Robban.  
**Korrigerad text:** "24 kollin är nu den korrigerade uppgiften. Och det går fortfarande att se exakt vad som stod först."

## Panel 12 — Ingrid, två dokument, en förklaring

**Visuellt:** Ingrid sitter vid skrivbordet och betraktar de två dokumentversionerna sida vid sida på skärmen — båda synliga och begripliga.  
**Text:** "Rätt siffror. Samma historia. Ingenting försvann — det bara rättades."

## CTA-intent — cta_13

Illustrerad albumbaksida i samma visuella DNA som omslaget. Visa Ingrids förflyttning från osäkerhet till spårbar rättelse. Kort värdelöfte, exakt en huvudhandling till signup, klartext `navichain.se/signup`, validerad QR till `https://navichain.se/signup` och endast den officiella Navichain-logotypen deterministiskt monterad från projektets källfil.

## Kontinuitet

Detta är trettiofjärde avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB. Kärnkonflikten är den vardagliga rättelsen av ett felaktigt kolliantal i en redan utfärdad CMR, inte en juridisk tvist. Product Truth är primär källa för produktpåståendena.
