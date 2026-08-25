# — En navichain story —

# UNDANTAGET SOM ALDRIG ÄR TYST

### Görel och låset som kräver en anledning, inte bara en knapptryckning

**Vinkel:** Elfte avsnittet i sviten om sammanhängande arbetsflöden handlar om det motsatta problemet mot flera tidigare avsnitt: inte att göra något enklare att ändra, utan att se till att en redan utfärdad, redan upphämtad bokning **inte** kan ändras i det tysta — samtidigt som ett verkligt, motiverat undantag ändå ska vara möjligt. Uppgiften är unik genom att den kräver båda sakerna samtidigt: en stark spärr och ett fungerande sätt att med gott skäl bryta den, spårbart.

**Källa:** Navichain — Bookings/Users & Roles, BookingLockOverride (verifierat: In Transit kan inte redigeras, Delivered är låst, och bokningar med utfärdad CMR eller redan upphämtade är låsta om inte användaren har behörigheten BookingLockOverride och anger en anledning — som registreras i bokningens historik.)

## Medverkande

| Karaktär | Roll | Företag |
| --- | --- | --- |
| **Görel Ask** *(ny huvudkaraktär)* | Driftchef, en av få med behörigheten BookingLockOverride | Björklunda Åkeri AB |
| **Sara Lund** *(återkommande)* | Trafikledare — upptäcker det låsta ärendet | Björklunda Åkeri AB |

Görel är en av mycket få på Björklunda med rätt att över huvud taget röra en låst bokning — en behörighet given med eftertanke, inte som standard, och en som aldrig går att använda utan att lämna ett spår efter sig.

## Omslagskoncept

Sara vid sin skärm, en bokning framför henne markerad med en tydlig låsikon och texten "Bokningen är låst". Bredvid henne, i en mindre inramad bildruta, Görel som med en nyckelikon och ett textfält där en anledning måste skrivas innan något alls går att ändra. Rubriktypografi i samma rost-röd/petroleumgrön kombination som seriens övriga omslag.

## PANEL 1 — Låset som stoppar Sara

**Visuellt:** Sara försöker rätta ett felaktigt kolliantal på en bokning där CMR redan utfärdats och godset redan hämtats upp. Skärmen svarar med en tydlig spärr: "Bokningen är låst." **Text:** "Ett fel hon vill rätta. Ett lås som säger nej." **Status:** 🔴 Röd — en nödvändig ändring, blockerad

## PANEL 2 — Vanan från förr

**Visuellt:** Sara minns hur det brukade fungera i ett tidigare system — vem som helst kunde ändra vad som helst, när som helst, utan att det syntes efteråt vem som gjort vad. **Text:** "Förr kunde vem som helst ändra vad som helst. Ingen visste vem, eller varför." **Status:** 🔴 Röd — obegränsad redigering, obefintlig spårbarhet

## PANEL 3 — Minnet av en tvist

**Visuellt:** En kort tillbakablick: en gammal tvist där en kund ifrågasatte en levererad mängd, och ingen på åkeriet kunde säkert säga om siffran ändrats efter att godset lämnat lagret eller inte. **Text:** "Ingen kunde bevisa vare sig det ena eller det andra. Bara att ingen visste säkert." **Status:** 🔴 Röd — ett gammalt problem utan bevis åt något håll

## PANEL 4 — Sara har inte behörigheten

**Visuellt:** Sara söker igenom sina egna behörigheter — ingenting ger henne rätt att själv häva låset. Hon skickar istället ärendet vidare till Görel med en kort förklaring. **Text:** "Hon kan se felet. Hon kan inte rätta det själv. Så ska det vara." **Status:** 🔴 Röd — rätt spärr, men fortfarande ett olöst fel

## PANEL 5 — Vändpunkten: Görel öppnar ärendet

**Visuellt:** Görel läser igenom Saras förklaring och öppnar den låsta bokningen i navichain. Samma låsikon syns — men eftersom hon har behörigheten BookingLockOverride erbjuds hon ett sätt vidare, inte bara ett nej. **Text:** "Samma lås. Men för henne finns ett sätt vidare — om hon kan förklara varför." **Status:** 🟠 Orange — ett verkligt undantag inom räckhåll

## PANEL 6 — Anledningen som måste skrivas

**Visuellt:** Innan något går att redigera möts Görel av ett obligatoriskt textfält: "Ange anledning för att låsa upp." Hon skriver kort och konkret: felaktigt kolliantal upptäckt innan fakturering, korrigerat efter kontroll med lagret. **Text:** "Inget kryss i en ruta. En riktig mening, skriven av en riktig person." **Status:** 🟠 Orange — inget undantag utan en förklaring

## PANEL 7 — Rättelsen, exakt

**Visuellt:** Görel justerar det felaktiga kolliantalet till rätt siffra, sparar ändringen. Bokningen återgår automatiskt till låst status direkt efteråt. Ett diskret klistermärke med navichains officiella logga syns i formulärets hörn. **Text:** "En siffra rättad. Låset stänger sig själv igen direkt efteråt." **Status:** 🟢 Grön — undantaget avslutat, spärren återställd

## PANEL 8 — Historiken som minns allt

**Visuellt:** Görel öppnar bokningens historikflik: tid, hennes namn och den skrivna anledningen står kvar, tydligt tidsstämplat bredvid själva ändringen. **Text:** "Vem, när och varför — allt kvar, precis där ändringen gjordes." **Status:** 🟢 Grön — spårbarhet, inte bara en spärr

## PANEL 9 — Sara ser resultatet

**Visuellt:** Sara öppnar samma bokning igen — kolliantalet är nu rätt, fakturaunderlaget stämmer. Hon ser också historiken, kan läsa exakt vad som hänt utan att behöva fråga. **Text:** "Rätt siffra. Och hela vägen dit, synlig för henne också." **Status:** 🟢 Grön — löst, och begripligt i efterhand

## PANEL 10 — Frågan som inte längre saknar svar

**Visuellt:** Veckor senare hör en kund av sig och undrar om något ändrats i just den här bokningen efter att godset hämtats. Görel visar historikfliken direkt — inget att gissa sig till. **Text:** "'Ändrades något?' Ja — och exakt vad, av vem, och varför. Inget kvar att undra över." **Status:** 🟢 Grön — tvisten som aldrig blev en tvist

## PANEL 11 — Låset håller för alla andra

**Visuellt:** En annan kollega utan behörigheten försöker senare samma dag ändra en annan låst bokning — samma tydliga spärr som i panel 1 möter honom. Görels undantag var just ett undantag, inte ett kryphål för alla. **Text:** "Samma lås, för alla andra. Görels väg runt det var aldrig en genväg — bara en dokumenterad möjlighet, för de få som faktiskt behöver den." **Status:** 🟢 Grön — spärren gäller fortfarande, som den ska

## PANEL 12 — Görel, en kopp kaffe och en lugn eftermiddag

**Visuellt:** Görel lutar sig tillbaka med kaffemugg med navichains officiella logga i handen, skärmen bakom henne visar en vanlig, låst bokning — precis som den ska vara, ostörd. **Text:** "Ett lås som håller. Ett undantag som aldrig är tyst. Precis så det ska fungera." **Status:** 🟢 Grön — kedjan komplett, från blockering till dokumenterad lösning

**Post-it på Görels skrivbord (teaser):** *"Nästa: när ett företag växer till flera orter — och behörigheterna växer med, utan att någon behöver ge bort mer än nödvändigt."*

## Illustratörsreferens

| Element | Instruktion |
| --- | --- |
| **Stil** | Varm 1950-talston, Hergé/Tintin *ligne claire*: jämn konturlinje, platta färgfält, inget tungt raster. Diskret offset-korn, patina, mjuk kantslitning. |
| **Färgdramaturgi** | Panel 1–4: rost-röd, en tydlig spärr och frustration utan väg framåt. Panel 5–6: mustig orange, en möjlig väg öppnas — men bara genom en förklaring. Panel 7–12: petroleumgrön, klart och löst. |
| **Görel Ask** | Praktisk, auktoritativ kontorsklädsel — lugn och metodisk hållning genomgående, snarare än stressad; hon representerar kontroll snarare än kris. |
| **Låsikonen som visuellt motiv** | Använd en tydlig, återkommande låsikon på skärmarna genom hela berättelsen — öppen bara i panel 6–7, annars stängd, inklusive i panel 11 för att visa att spärren fortfarande gäller för andra. |
| **Textfältet för anledning** | Ska vara läsbart och konkret i panel 6 — en kort, verklig mening, inte en generisk platshållartext. |
| **Viktigt narrativt påbud** | Ingen panel får antyda att BookingLockOverride är en genväg tillgänglig för vem som helst, eller att bokningen förblir olåst efteråt. Behörigheten ska framstå som sällsynt, ansvarsfull och alltid dokumenterad — panel 11 är central för att understryka just detta. |
| **Sara Lund** | Samma återkommande visuella design som i tidigare avsnitt. Bär den inledande frustrationen, men agerar korrekt genom att eskalera snarare än att försöka kringgå spärren. |
| **Navichains officiella logga** | Använd den uppladdade källfilen exakt som den är — återskapa den aldrig för hand. Frånvarande i panel 1–4. Introduceras diskret från panel 7 (formulärets hörn) och syns sedan på kaffemugg i sista panelen — aldrig centrerad, aldrig reklamaktig, max cirka 5 % av panelytan. |
| **Ingen IT-support** | Ingen extern tekniker, inget supportärende. Görel och Sara löser allt själva genom gränssnittet — navichain är självförklarande genom hela berättelsen. |

## Kontinuitetsnot

Elfte avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB, och det första som medvetet handlar om en spärr snarare än ett verktyg för att göra något snabbare — en viktig balans i en serie annars byggd kring att minska friktion. Görel Ask introduceras som en ny huvudkaraktär i en roll definierad av begränsat, ansvarsfullt förtroende snarare än bred tillgång. Sara Lund återkommer i en bikaraktärsroll som visar att rätt agerande vid ett låst ärende är att eskalera, inte att leta efter en genväg.

**Nästa i serien:** Flera orter, en gemensam grund — hur navichains avdelningsstruktur låter behörigheter ärvas nedåt i en organisation som växer, utan att varje ny ort eller avdelning behöver byggas upp och ges tillgång från grunden. En ännu inte utnyttjad vinkel i serien.
