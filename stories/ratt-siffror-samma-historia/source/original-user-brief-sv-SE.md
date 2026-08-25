# — En navichain story —

# RÄTT SIFFROR, SAMMA HISTORIA
### Ingrid och fraktsedeln som fick en andra version — utan att den första försvann

**Format:** 12 paneler + omslagskoncept. Illustratörsbrief.

**Vinkel:** Trettiofjärde avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB introducerar Ingrid Sund, trafikledare, och ett problem som är litet i sig men skrämmande i sina konsekvenser: en redan utfärdad CMR visar fel antal kollin. I det gamla, pappersbundna tänkandet är en utfärdad fraktsedel närmast helig — att ändra den känns som att den ursprungliga sanningen går förlorad, eller att ingen längre vet vilken version som gäller. Den här berättelsen visar att en rättelse inte behöver betyda att något försvinner — bara att något läggs till.

**Källa:** Navichain — CMR Documents (verifierat: att utfärda en CMR fryser ett ögonblick, skapar en SHA-256-hash, begär en RFC 3161-tidsstämpel och lägger till en offentlig verifierings-QR. Utfärdade/upphämtade bokningar låses. **Omutfärdande kräver en angiven anledning och behåller den överskuggade (superseded) versionen** — den raderas aldrig. Verifieringen rapporterar status som intakt, överskuggad (superseded) eller trasig. Källa: NAVICHAIN-PRODUCT-TRUTH.md, avsnitt "CMR Documents".)

**Vad som medvetet INTE påstås:** navichain upptäcker aldrig själv att antalet kollin är fel — det är fortfarande Ingrid som måste se felet och välja att agera. Omutfärdande är användarinitierat, inte automatiskt. Berättelsen gör heller inga anspråk på eIDAS-kvalificerad undertecknaridentitet eller att dokumentet i sig avgör en juridisk tvist (det ligger utanför denna berättelse — se istället Torsten Fälts rättstvistavsnitt i eCMR-spåret). Det som visas här är enbart den dokumenterade integritetsmekanismen: en spårbar, tidsstämplad rättelse. Ingen IT-avdelning syns.

---

## Medverkande

| Karaktär | Roll | Företag |
|---|---|---|
| **Ingrid Sund** *(ny huvudroll)* | Trafikledare | Björklunda Åkeri AB |
| **Robban Ek** *(cameo)* | Förare — levererade sändningen med den felaktiga CMR:n | Björklunda Åkeri AB |

---

## Omslagskoncept

Ingrid håller upp två papper mot varandra i ljuset från fönstret — nästan identiska, men med en siffra ändrad. Bakom henne, suddigt: en gammal arkivpärm med överstruket bläck som symboliserar det gamla sättet att rätta fel. Rubriktypografi i seriens rost-röd/petroleumgröna kombination.

---

## PANEL 1 — Ett fel upptäcks efter utfärdandet
**Visuellt:** Ingrid granskar en redan skickad CMR på skärmen och märker att antalet kollin är fel — 22 istället för 24. Dokumentet är redan låst, redan skickat till kunden.
**Text:** "Redan utfärdad. Redan skickad. Och redan fel."
**Status:** 🔴 Röd — ett fel i ett låst dokument

## PANEL 2 — Den gamla rädslan: vad händer med originalet?
**Visuellt:** Ingrid tänker sig, i en tankebubbla, hur det brukade fungera på papper — ett dokument som makuleras, ett nytt som skrivs, och ingen som längre kan visa vad som faktiskt hände först.
**Text:** "Förr innebar en rättelse att originalet försvann. Vad gäller då egentligen?"
**Status:** 🔴 Röd — oro för att sanningen suddas ut

## PANEL 3 — Kunden ringer, förvirrad
**Visuellt:** Kunden ringer och undrar varför deras kopia visar fel antal kollin jämfört med vad som faktiskt levererades — ett missförstånd som riskerar att bli en tvist om ingen agerar.
**Text:** "'Vilken siffra gäller egentligen?' Ingrid har inget säkert svar än."
**Status:** 🔴 Röd — förtroendet ifrågasätts

## PANEL 4 — Robban, osäker på sin egen leverans
**Visuellt:** Robban Ek, tillbaka på depån, funderar över om han räknade fel vid lastning eller om det är dokumentet som har fel — osäkerheten sprider sig även till honom.
**Text:** "Robban minns 24 kollin. Pappret säger 22. Vem har rätt?"
**Status:** 🔴 Röd — osäkerhet smittar hela kedjan

## PANEL 5 — Ingrid överväger att bara skriva om allt
**Visuellt:** Ingrid börjar skapa ett helt nytt, separat dokument från grunden, som om det gamla aldrig funnits — men inser att det då inte finns något som visar att en rättelse faktiskt gjordes.
**Text:** "Ett nytt dokument löser siffran. Men inte frågan om vad som hände."
**Status:** 🔴 Röd — en lösning som skapar ett nytt problem

## PANEL 6 — Arkivpärmen med överstruket bläck
**Visuellt:** Ingrid bläddrar i en gammal fysisk arkivpärm från förr, full av överstrukna och handrättade siffror utan förklaring till varför — en påminnelse om hur spårlöst rättelser brukade göras.
**Text:** "Överstruket bläck. Ingen anledning angiven. Ingen som minns varför."
**Status:** 🔴 Röd — historiskt spårlösa rättelser

## PANEL 7 — Omutfärda-knappen upptäcks
**Visuellt:** Ingrid ser knappen "Omutfärda" på den låsta CMR:n i navichain — och ett fält som kräver att hon anger en anledning innan hon kan gå vidare.
**Text:** "Inte radera. Inte skriva om från noll. Bara: omutfärda — med en anledning."
**Status:** 🟠 Orange — vändpunkten, rättelse utan radering

## PANEL 8 — Anledningen skrivs in
**Visuellt:** Ingrid skriver en kort, tydlig anledning: "Felaktigt kolliantal vid utfärdande, korrigerat efter kundens kontroll." Fältet är obligatoriskt — hon kan inte gå vidare utan det.
**Text:** "En anledning, angiven med namn och tid. Inte bara en ändrad siffra."
**Status:** 🟢 Grön — spårbar motivering, inte en tyst ändring

## PANEL 9 — Den nya versionen utfärdas
**Visuellt:** En ny CMR skapas med rätt antal kollin, ny hash, ny tidsstämpel. Bredvid den, tydligt märkt, ligger den gamla versionen kvar — inte borttagen, bara märkt som överskuggad.
**Text:** "En ny version utfärdad. Den gamla fanns kvar — bara med en annan status."
**Status:** 🟢 Grön — båda versionerna existerar, ingenting suddat

## PANEL 10 — Verifieringen visar sanningen tydligt
**Visuellt:** Ingrid skannar QR-koden på den gamla, felaktiga versionen för att se vad som händer — skärmen visar tydligt "Överskuggad" istället för att antingen låtsas att den fortfarande gäller eller dölja att den någonsin funnits.
**Text:** "Skannad igen: inte 'giltig', inte 'borttagen' — bara 'överskuggad'. Precis vad den är."
**Status:** 🟢 Grön — statusen berättar hela sanningen

## PANEL 11 — Robban och kunden får rätt svar
**Visuellt:** Ingrid skickar den nya, korrekta CMR:n till kunden och bekräftar för Robban att hans minne av 24 kollin stämde — felet fanns i det ursprungliga dokumentet, inte i lastningen.
**Text:** "Robban hade rätt hela tiden. Nu visar dokumentet det också."
**Status:** 🟢 Grön — kedjan återställd, inget kvarstående tvivel

## PANEL 12 — Ingrid, två dokument, en förklaring
**Visuellt:** Ingrid lutar sig tillbaka vid sitt skrivbord, kaffekopp med navichains officiella logga diskret synlig, och betraktar de två dokumentversionerna sida vid sida på skärmen — båda synliga, båda begripliga.
**Text:** "Rätt siffror. Samma historia. Ingenting försvann — det bara rättades."
**Status:** 🟢 Grön (avslutning, tydlig poäng)

---

## Kontinuitetsnot

Trettiofjärde avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB, med ny huvudkaraktär Ingrid Sund, trafikledare. Grundat i den verifierade regeln att omutfärdande av en CMR kräver en angiven anledning och behåller den överskuggade versionen — ingenting raderas. Medvetet skild från Torsten Fälts rättstvistavsnitt i eCMR-spåret (som handlar om ett dokument som bevis i en juridisk process) — den här berättelsen handlar istället om den vardagliga, ofarliga rättelsen: ett räknefel som upptäcks och korrigeras spårbart, innan det hinner bli en tvist alls.

**Viktig upptäckt vid research:** Innan detta avsnitt skrevs söktes serien igenom för teasern från avsnitt 33 (retur/omförsök efter misslyckad leverans). Det visade sig att den vinkeln redan var behandlad i avsnitt 18 ("Ingen på plats, ändå en plan", Kalle Nordin och Erik Malm) — avsnitt 33 (Robban Ek, "Leveransen som fick en andra chans") överlappar alltså delvis med ett tidigare avsnitt. Enligt projektets princip om att inte proaktivt skriva om äldre avsnitt rörs avsnitt 33 inte nu, men flaggas här för kännedom om det behöver ses över vid ett senare tillfälle.

**Nästa i serien:** En ännu inte utnyttjad vinkel — hur en ny förare, mitt i sin första vecka, kan se sin egen tilldelade körning med all information redan på plats i mobilappen, utan att någon på kontoret behövt förklara arbetssättet muntligt.

---

## Produktionsnoter till illustratören

- **De två dokumenten i panel 1 och 12** ska vara visuellt identiska i layout men med en tydligt synlig skillnad i kolliantalet — kontrasten mellan förvirring (panel 1, en version) och klarhet (panel 12, två versioner sida vid sida) är berättelsens kärna.
- **Arkivpärmen med överstruket bläck (panel 6)** ska kännas fysiskt gammal och sliten, i tydlig kontrast mot den rena digitala "Omutfärda"-vyn i panel 7.
- **Färgdramaturgi:** Röd dominerar paneler 1–6 (osäkerhet, rädsla för att sanningen försvinner), orange är vändpunkten (panel 7), petroleumgrön dominerar paneler 8–12.
- **QR-kod-skanningen i panel 10** ska tecknas lugnt och sakligt — statusordet "Överskuggad" ska kunna läsas tydligt utan att kännas som ett felmeddelande.
- **Robbans cameo (panel 4 och 11)** ska visa tydlig lättnad i slutet — han litade på sitt eget minne hela tiden, och får det bekräftat.
- **Fysiska rekvisita att prioritera:** de två pappersdokumenten i ljuset (omslag), arkivpärmen (panel 6), mobilen/skärmen med "Omutfärda"-knappen (panel 7–9), kaffekoppen med diskret logga (panel 12).

---

## Sammanfattningstabell för illustratören

| Panel | Färgstatus | Nyckelmotiv | Logotyp-not |
|---|---|---|---|
| 1 | 🔴 Röd | Ingrid upptäcker fel kolliantal på låst CMR | Ingen |
| 2 | 🔴 Röd | Tankebubbla: gammal pappersrädsla för raderat original | Ingen |
| 3 | 🔴 Röd | Förvirrad kund ringer om avvikande siffror | Ingen |
| 4 | 🔴 Röd | Robban osäker på sitt eget minne | Ingen |
| 5 | 🔴 Röd | Ingrid överväger att skriva om allt från noll | Ingen |
| 6 | 🔴 Röd | Gammal arkivpärm, överstruket bläck | Ingen |
| 7 | 🟠 Orange | "Omutfärda"-knappen upptäcks, anledningsfält | Skärmhörn, ~4 % |
| 8 | 🟢 Grön | Anledning skrivs in, obligatoriskt fält | App-header |
| 9 | 🟢 Grön | Ny version utfärdad, gammal kvar som "överskuggad" | Skärmhörn, ~4 % |
| 10 | 🟢 Grön | QR-skanning visar "Överskuggad" tydligt | Dokumentets sidfot |
| 11 | 🟢 Grön | Robban och kund får rätt svar | Nedtonad |
| 12 | 🟢 Grön | Ingrid, kaffekopp, två dokument sida vid sida | Kaffemugg, ~5 % |

**Instruktion till illustratören:** Använd **navichains officiella logga** (uppladdad som källfil i projektet) vid varje angiven placering ovan — aldrig en tolkad eller egenritad variant.
