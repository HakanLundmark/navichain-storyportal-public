# — En navichain story —

# HYLLAN SOM HÅLLER ISÄR

### Frida och gränsen mellan kundens gods och åkeriets eget lager

**Vinkel:** Direkt fortsättning på förra avsnittets kedja (avvikelse → lager → inköp), men med fokus på en annan typ av gods: sådant som inte tillhör åkeriet alls. Kundägt gods som mellanlagras får aldrig blandas ihop med det egna reservdelslagret — varken fysiskt på hyllan eller i värderingen. Uppgiften är återigen unik för skärningspunkten mellan lager och kundrelation: en vanlig lagerapp håller reda på "vad finns", men inte på "vems är det, och hur mycket får lämnas ut utan att fråga igen".

**Källa:** Navichain — Warehouses / Customer Goods custody-modul (verifierat flöde: mottagning kopplad till kund/lager/bokning, kundägt gods ingår aldrig i eget lagervärde, streckkod auto-tilldelas, skannerslagning rapporterar ärligt none/one/many, utlämning upp till innestående saldo, felaktig kund/lager/kvantitet vägrar utlämning istället för att blockera chauffören efter avfärd, full historik för mottagning/placering/utlämning).

---

## Medverkande

| Karaktär Roll Företag                      |                                                                    |                      |
| ------------------------------------------ | ------------------------------------------------------------------ | -------------------- |
| **Frida Ahl** *(ny huvudkaraktär)*         | Lagerchef                                                          | Björklunda Åkeri AB  |
| **Robban Ek** *(återkommande)*             | Chaufför — hämtar kundgods i avslutningen                          | Björklunda Åkeri AB  |
| **Kenneth Broman** *(återkommande, cameo)* | Verkstads- och inköpsansvarig — kort cameo som kontrast till Frida | Björklunda Åkeri AB  |
| **Marianne Holt** *(ny biroll)*            | Inköpsansvarig, kund                                               | Solgläntan Möbler AB |

Frida arbetar i samma byggnad som Kenneth från förra avsnittet, men hennes del av lagret hanterar något helt annat: säsongsgods som kunder som Solgläntan Möbler mellanlagrar hos Björklunda mellan leveranser. Där Kenneths berättelse handlade om att veta vad *åkeriet äger*, handlar Fridas om att aldrig ta miste på vad *åkeriet bara förvarar*.

---

## Omslagskoncept

Frida mitt i lagergången, en hand vilande på en pall märkt med kundens namn, den andra på en pekplatta. Gången är tydligt uppdelad — till vänster Björklundas egna märkta hyllor (samma miljö som i Kenneths avsnitt), till höger en sektion med Solgläntans säsongsmöbler under en tydlig, egen skylt. Ljuset delar bildytan i två varma toner utan att vara påträngande symboliskt. Rubriktypografi i samma rost-röd/petroleumgrön kombination som seriens övriga omslag.

---

## PANEL 1 — Leveransen som inte är åkeriets

**Visuellt:** En lastbil backar in med pallar trädgårdsmöbler från Solgläntan Möbler. Frida möter upp med en klemblädda, tittar osäkert mellan pallarna och en tom fält på pappret där en streckkod borde stå. **Text:** "Kundens gods. Inte vårt. Men det ska ändå in genom samma port." **Status:** 🔴 Röd — ingen streckkod, ingen tydlig plats

## PANEL 2 — Samma hylla, olika ägare

**Visuellt:** En lagerhylla där kundens möbelkartonger står blandade med Björklundas egna reservdelslådor, åtskilda bara av en handskriven lapp: "OBS! Kundgods — rör ej". Lappen har lossnat i ena hörnet. **Text:** "En papperslapp är allt som skiljer det som är vårt från det som inte är det." **Status:** 🔴 Röd — fysisk och bokföringsmässig risk

## PANEL 3 — Det gamla telefonsamtalet

**Visuellt:** Frida i telefon med Marianne Holt (via en liten inringad bildruta/telefonlur-symbol), båda osäkra: hur mycket möbler hämtades förra veckan, hur mycket finns kvar? Ingen av dem har ett exakt svar. **Text:** "'Hur mycket har vi kvar hos er?' Ingen av dem vet säkert." **Status:** 🔴 Röd — inget löpande saldo för kundens gods

## PANEL 4 — Nästan fel utlämning

**Visuellt:** En chaufför från ett annat företag står redo att lasta möbler för en helt annan kund. Frida håller handen uppe, tvekar — kvantiteten stämmer inte riktigt med vad hon minns, men hon har inget att kolla mot. **Text:** "Utan ett säkert saldo blir varje utlämning en gissning — och den här gången är gissningen nästan fel." **Status:** 🔴 Röd — felaktig utlämning nästan verklighet

## PANEL 5 — Vändpunkten: en egen mottagning

**Visuellt:** Frida öppnar navichain på sin pekplatta och registrerar mottagningen kopplad direkt till Solgläntan Möbler och det här lagret. Ett streckkodsnummer tilldelas automatiskt eftersom kundens kartonger saknar egen kod. **Text:** "Ingen egen kod på kartongen? Systemet skapar en — kopplad till exakt den här kunden, det här lagret." **Status:** 🟠 Orange — mottagning registrerad, spårbar från start

## PANEL 6 — Två lager, ett golv

**Visuellt:** Skärmen visar tydligt två separata saldon sida vid sida: "Björklundas eget lagervärde" och "Kundägt gods — Solgläntan Möbler" — samma fysiska golvyta, men aldrig samma siffra. **Text:** "Kundens gods räknas aldrig in i vårt eget lagervärde. Aldrig av misstag, aldrig 'för enkelhetens skull'." **Status:** 🟠 Orange — värdena hålls isär per princip, inte av tur

## PANEL 7 — Kvittensen som bara skapas en gång

**Visuellt:** En prydlig PDF-mottagningskvittens genereras på skärmen, kopplad till kund, lager och datum. Frida skickar den till Marianne med ett klick. Navichains officiella logga syns diskret i skärmens hörn. **Text:** "En kvittens. Rätt från början. Ingen anledning att skapa den igen." **Status:** 🟢 Grön — kvittens genererad och skickad

## PANEL 8 — Robban hämtar rätt mängd

**Visuellt:** Robban Ek ansluter en utgående bokning kopplad till kundens gods. Han skannar pallen vid lastning — systemet släpper automatiskt exakt den kopplade posten, inget mer, inget mindre. **Text:** "En skanning vid lastning. Rätt mängd släpps ut — automatiskt, inte på minnet." **Status:** 🟢 Grön — automatisk utlämning vid hämtning

## PANEL 9 — Den nästan-fel-utlämningen som aldrig blir av

**Visuellt:** Samma situation som i panel 4 upprepas — men nu vägrar systemet tydligt på skärmen: "Fel kund/lager/kvantitet" innan chauffören ens har lastat bilen. Frida pekar lugnt på skärmen istället för att gissa. **Text:** "Den här gången säger skärmen ifrån — innan bilen lämnat gården, inte efteråt." **Status:** 🟢 Grön — felaktig utlämning stoppad i tid

## PANEL 10 — Frida svarar direkt

**Visuellt:** Telefonen ringer igen — Marianne Holt undrar hur mycket som finns kvar. Frida svarar direkt från skärmen utan att lämna sitt skrivbord, pekar på ett exakt saldo. **Text:** "Samma fråga som förra gången. Den här gången finns svaret på skärmen, inte i huvudet." **Status:** 🟢 Grön — saldo tillgängligt i realtid

## PANEL 11 — Historiken som avgör tvisten

**Visuellt:** En kort dispyt uppstår om en leverans från för tre veckor sedan. Frida öppnar historiken: mottagning, placering, varje utlämning — allt med tidsstämpel. Marianne (via telefon) tystnar, nöjd. **Text:** "Mottaget, placerat, utlämnat — allt kvar, i ordning, utan att någon behöver minnas rätt." **Status:** 🟢 Grön — fullständig spårbarhet löser tvisten

## PANEL 12 — Två lager, en lugn eftermiddag

**Visuellt:** Frida lutar sig mot en pall, kaffemugg med navichains officiella logga i handen. I bakgrunden går Kenneth förbi med sin egen pekplatta, upptagen med sitt eget hörn av lagret — de två delarna av byggnaden syns tydligt fungera sida vid sida utan att korsa varandra. **Text:** "Två lager under samma tak. Aldrig sammanblandade — aldrig ett minnesspel." **Status:** 🟢 Grön — kedjan komplett, från mottagning till förtroende

**Post-it på Fridas skrivbord (teaser):** *"Nästa: när kundens affärssystem pratar direkt med navichain — utan att någon behöver knappa in något alls."*

---

## Illustratörsreferens

| Element Instruktion                      |                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stil**                                 | Varm 1950-talston, Hergé/Tintin *ligne claire*: jämn konturlinje, platta färgfält, inget tungt raster. Diskret offset-korn, patina, mjuk kantslitning. |
| **Färgdramaturgi**                       | Panel 1–4: rost-röd, splittrad/osäker belysning. Panel 5–6: mustig orange, tydlig men fortfarande i rörelse. Panel 7–12: petroleumgrön, klart och strukturerat ljus. |
| **Frida Ahl**                            | Praktisk lagerklädsel i petroleumgrönt/beige, håret uppsatt, alert och lite bekymrad blick i de röda panelerna — lugn, rak hållning i de gröna. |
| **Marianne Holt**                        | Syns endast via telefonlur-symbol/liten inringad bildruta — hon ska aldrig ta över bildytan, bara antyda ett samtal på andra sidan. |
| **Kenneth Broman**                       | Samma visuella design som i förra avsnittet. Kort, tydlig cameo i panel 12 — ska läsas som "samma byggnad, olika uppgift", inte som huvudperson. |
| **Robban Ek**                            | Samma återkommande design. Bär ingen tung narrativ vikt, fungerar som kontinuitetsfigur i panel 8. |
| **Navichains officiella logga**          | Använd den uppladdade källfilen exakt som den är — återskapa den aldrig för hand. Frånvarande i panel 1–4. Introduceras diskret från panel 5 (gränssnitt på pekplatta) och syns sedan på skärm, PDF-header (antytt, inte utskriven text) och kaffemugg — aldrig centrerad, aldrig reklamaktig, max cirka 5 % av panelytan. |
| **Ingen IT-support**                     | Ingen tekniker, inget supportsamtal. Frida löser allt själv genom gränssnittet — navichain är självförklarande genom hela berättelsen. |
| **Fysisk separation som visuellt motiv** | Låt hyllornas färg, skyltning och belysning tydligt särskilja Björklundas eget gods från Solgläntans — detta ska synas i bilden, inte bara nämnas i texten, både i de röda och de gröna panelerna. |

---

## Kontinuitetsnot

Detta är seriens andra avsnitt i en medveten svit om sammanhängande, flerfunktionella arbetsflöden snarare än enskilda funktioner — och den direkta uppföljaren på förra avsnittets teaser om kundens eget gods i lagret. Frida Ahl introduceras som ny huvudkaraktär för att representera en roll som skiljer sig tydligt från Kenneths: han äger sitt lager, hon förvaltar någon annans. Kenneth återkommer i en kort, tydligt avgränsad cameo för att visa att de två lagerflödena existerar sida vid sida i samma byggnad utan att någonsin korsas — en visuell påminnelse om seriens princip att kundägt gods aldrig ingår i det egna lagervärdet. Robban Ek fortsätter i sin etablerade funktion som seriens sammanbindande figur.

**Nästa i serien:** Integrationsberättelsen — hur en kunds eget affärssystem kan prata direkt med navichain via API/webhook, utan manuell inmatning på någon sida. En ännu inte utnyttjad vinkel i serien, väl lämpad att introducera en ny persona på kundens IT- eller ekonomisida.
