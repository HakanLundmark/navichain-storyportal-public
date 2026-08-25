# — En navichain story —

# KEDJAN INGEN SER — FÖRRÄN DEN BRISTER

### Kenneth och länken mellan inköp, lager och verkstad

**Vinkel:** Till skillnad från tidigare avsnitt i serien, som var och en visat en enskild funktion (spårning, e-CMR, HaaS, cabotage, kundportal...), visar det här avsnittet vad som händer när flera moduler arbetar som **en enda kedja**: en avvikelse i verkstaden triggar automatiskt rätt lagersaldo, rätt inköpsorder och rätt leverans — utan att någon människa behöver hålla ihop det manuellt. Uppgiften är i sig unik: den existerar bara i skärningspunkten mellan underhåll, lager och inköp, och kan därför bara lösas av en plattform som förenar alla tre.

**Källa:** Navichain — Purchase Orders, Stock Levels, Stock Movements, Warehouses, Maintenance/Work Orders (verifierade plattformsflöden: draft PO → send/confirm → receive → automatiskt uppdaterat lagersaldo → länkad till arbetsorder).

---

## Medverkande

| Karaktär | Roll | Företag |
| --- | --- | --- |
| **Kenneth Broman** *(ny huvudkaraktär)* | Verkstads- och inköpsansvarig | Björklunda Åkeri AB |
| **Robban Ek** *(återkommande)* | Chaufför — cameo i öppning och avslutning | Björklunda Åkeri AB |
| **Ingela** *(ny biroll)* | Mekaniker på verkstaden | Björklunda Åkeri AB |

Kenneth är ny i seriens persongalleri: han representerar den roll som traditionellt suttit "mellan stolarna" — varken renodlad lagerchef eller renodlad inköpare, utan den som i praktiken måste hålla ihop båda när en bil står stilla.

---

## Omslagskoncept

Kenneth i verkstadskontoret, telefonlur i ena handen, en pekplatta i den andra. På skärmen syns tre sammanlänkade rutor: en arbetsorder, ett lagersaldo och en inköpsorder — alla med samma ärendenummer. Genom fönstret bakom honom står Robbans lastbil uppallad med ett öppet motorutrymme. Rubriktypografi i varm rost-röd/petroleumgrön kombination, i linje med seriens övriga omslag.

---

## PANEL 1 — Larmet på morgonkollen

**Visuellt:** Robban Ek gör sin morgonkontroll av bilen på gården. Han upptäcker en sliten bromsbelägg och rapporterar avvikelsen via sin mobil. I bakgrunden syns Björklunda Åkeris skylt i gryningsljus. **Text:** "En avvikelse i morgonkontrollen. Bilen får inte gå ut förrän den är åtgärdad." **Status:** 🔴 Röd — kritisk avvikelse, fordon spärrat

## PANEL 2 — Arbetsordern som inte räcker ensam

**Visuellt:** Kenneth i verkstaden, ett papper med en handskriven arbetsorder framför sig. Han kliar sig i huvudet och tittar bort mot en hylla med reservdelar där en lucka syns — precis den typ av bromsbelägg som saknas. **Text:** "En arbetsorder säger vad som är fel. Den säger ingenting om vad som finns på hyllan." **Status:** 🔴 Röd — okänt lagersaldo

## PANEL 3 — Den gamla rundringningen

**Visuellt:** Kenneth med telefonlur i handen, en lista med tre leverantörers nummer på ett anteckningsblock, två redan överstrukna. Bakom honom en pärm märkt "INKÖP" som ligger uppslagen och orörd. **Text:** "Tre samtal, tre gissningar om vad som faktiskt finns i lager hos dem — och vad som redan är beställt hos oss." **Status:** 🔴 Röd — inköp och lager pratar inte med varandra

## PANEL 4 — Risken som ingen ser

**Visuellt:** En kalender på väggen med dagens datum inringat i rött. Bredvid den en lapp: "Robban → Göteborg 14:00". Kenneth tittar oroligt mellan klockan och den tomma hyllplatsen. **Text:** "Om delen inte är på plats innan 14:00 står både bilen och leveransen stilla." **Status:** 🔴 Röd — leveransen hotad av en enskild komponent

## PANEL 5 — Vändpunkten: samma skärm, hela bilden

**Visuellt:** Kenneth öppnar navichain på sin pekplatta. Arbetsordern för Robbans bil är redan öppen — och direkt under den syns artikelns lagersaldo: "I lager: 0 · På väg: 0 · Reserverat: 0". Ingen gissning kvar. **Text:** "Samma arbetsorder. Men nu med exakt saldo — inte en uppskattning." **Status:** 🟠 Orange — verkligt saldo, inte en gissning

## PANEL 6 — Inköpsordern föds ur avvikelsen

**Visuellt:** Kenneth trycker på en knapp direkt i artikelvyn: "Skapa inköpsorder". Ett utkast fylls i automatiskt — rätt leverantör, rätt artikelnummer, rätt lager — kopplat till Robbans arbetsorder med samma ärendenummer. **Text:** "Inköpsordern skapas där bristen upptäcktes — inte i en separat pärm, långt senare." **Status:** 🟠 Orange — utkast klart på under en minut

## PANEL 7 — Bekräftelsen, utan telefonsamtal

**Visuellt:** Kenneth skickar inköpsordern med en knapptryckning. På skärmen dyker en bekräftelse upp: antal bekräftat, leveransdatum utlovat. Ett diskret klistermärke med navichains officiella logga syns i skärmens hörn, som app-ikon. **Text:** "Bekräftat antal. Utlovat datum. Inget mer 'jag återkommer'." **Status:** 🟢 Grön — beställning bekräftad

## PANEL 8 — Ankomsten på lagret

**Visuellt:** Ingela tar emot paketet på lagret, skannar streckkoden mot en handdator. En kvittens genereras direkt på skärmen. Navichains officiella logga syns diskret på handdatorns skal. **Text:** "En skanning. Lagersaldot uppdateras samma sekund — automatiskt." **Status:** 🟢 Grön — mottagning registrerad

## PANEL 9 — Delen hittar sin plats av sig själv

**Visuellt:** Split-bild: till vänster artikeln bokas in på rätt hylla/fack i lagerstrukturen; till höger uppdateras arbetsordern automatiskt — statusen växlar från "Väntar på del" till "Redo att åtgärdas". **Text:** "Samma system som skapade beställningen ser också att den är löst." **Status:** 🟢 Grön — lager och verkstad synkade

## PANEL 10 — Ingela monterar, Kenneth signerar

**Visuellt:** Ingela monterar den nya bromsbelägget under Robbans lastbil. Kenneth står bredvid med pekplattan och gör det avslutande godkännandet av arbetsordern — bilen markeras som klar för trafik. **Text:** "Ett namn, ett godkännande. Ingen bil lämnar gården på gissning." **Status:** 🟢 Grön — fordon friklassat

## PANEL 11 — Spåret som aldrig ljuger

**Visuellt:** Kenneth vid sin dator, en enkel logg öppen: avvikelse → arbetsorder → inköpsorder → mottagning → montering, allt med tidsstämplar på en rad. Kaffemugg med navichains officiella logga i förgrunden. **Text:** "Från trasig del till rullande bil — hela kedjan går att följa, i efterhand, utan att fråga någon." **Status:** 🟢 Grön — full spårbarhet, automatiskt

## PANEL 12 — Klockan 13:20

**Visuellt:** Robban Ek backar ut lastbilen från verkstaden, blinkar åt Kenneth genom rutan. Klockan på väggen visar 13:20 — 40 minuter innan avgången. Kenneth lutar sig tillbaka med kaffekoppen, pekplattan vilar på bordet med tre gröna bockar synliga. **Text:** "Ingen rundringning. Ingen gissning. Bara en kedja som höll ihop av sig själv." **Status:** 🟢 Grön — leverans räddad

**Post-it på Kenneths bord (teaser):** *"Nästa: när kundens eget gods delar hylla med vårt — utan att någonsin blandas ihop."*

---

## Illustratörsreferens

| Element | Instruktion |
| --- | --- |
| **Stil** | Varm 1950-talston, Hergé/Tintin *ligne claire*: jämn konturlinje, platta färgfält, inget tungt raster. Diskret offset-korn, patina, mjuk kantslitning. |
| **Färgdramaturgi** | Panel 1–4: rost-röd, kaotisk belysning. Panel 5–6: mustig orange, övergångsljus. Panel 7–12: petroleumgrön, klart och lugnt ljus. |
| **Kenneth Broman** | Mörkblå/grå verkstadsrock över en enkel skjorta, praktisk snarare än chic. Varm, lite bekymrad blick i röda panelerna — avslappnad och närvarande i de gröna. |
| **Ingela** | Overall i lagrets färg, hårnät eller keps, praktisk och koncentrerad — inte en biperson i bakgrunden utan en aktiv medskapare av lösningen. |
| **Robban Ek** | Samma återkommande visuella design som i tidigare avsnitt — cameo i öppning och stängning, bär ingen tung narrativ vikt själv. |
| **Navichains officiella logga** | Använd den uppladdade källfilen exakt som den är — återskapa den aldrig för hand. Frånvarande i panel 1–4. Introduceras diskret från panel 5 (skärmens gränssnitt) och syns sedan som app-ikon, klistermärke på handdator, samt på kaffemugg — aldrig centrerad, aldrig reklamaktig, max cirka 5 % av panelytan. |
| **Ingen IT-support** | Inga tekniker, ingen "ring supporten"-scen. Kenneth och Ingela löser allt själva genom gränssnittet — navichain är självförklarande genom hela berättelsen. |
| **Papper vs. skärm** | Panel 1–4 dominerade av handskrivna lappar, pärmar och telefonlurar. Från panel 5 och framåt ersätts pappersarbetet gradvis av pekplatta/handdator — övergången ska synas fysiskt i miljön, inte bara nämnas i texten. |

---

## Kontinuitetsnot

Det här är seriens första avsnitt som medvetet visar **tre moduler i en enda kedja** snarare än en isolerad funktion — en tydlig eskalering från tidigare enfunktionsberättelser (spårning, cabotage, HaaS, kundportal). Kenneth Broman är en ny huvudkaraktär vald specifikt för att representera den verkliga, sammansatta rollen mellan verkstad, lager och inköp som ofta saknar en egen tydlig plattformsfunktion att representeras av — vilket gör honom till en naturlig bärare av just detta helhetsperspektiv. Robban Ek fortsätter sin funktion som seriens sammanbindande figur, denna gång i en stödjande roll snarare än huvudroll.

**Nästa i serien:** Kundens eget gods i lagret — hur navichain håller kundägt gods fysiskt och digitalt separerat från det egna lagersaldot, utan att det någonsin blandas ihop eller felaktigt värderas som eget.
