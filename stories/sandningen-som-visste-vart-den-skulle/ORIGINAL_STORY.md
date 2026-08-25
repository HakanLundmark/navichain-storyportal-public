# SÄNDNINGEN SOM VISSTE VART DEN SKULLE

### Sanna och ordern som blev tre — utan att bli tre olika historier

**Source:** canonical story brief supplied directly in this chat.
**Master language:** sv-SE
**Master version:** not explicitly locked/versioned in chat
**Story ID authority:** derived from canonical title for repository path

**Format:** 12 paneler + omslagskoncept. Illustratörsbrief.

**Vinkel:** Trettioandra avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB ger Sanna Berg (planeringsansvarig, avsnitt 31) sin andra huvudroll — och en släkting till förra avsnittets problem, men inte samma sak. Förra gången handlade det om att en last var *för stor* för en körning och delades efter mängd. Den här gången är lasten inte för stor alls: det är en och samma order från en och samma kund som ska till *tre olika mottagningsadresser* — tre butiker i samma kedja, på olika orter. Risken är inte kvantitet, utan att ordern splittras i tre lösryckta bokningar som tappar kontakten med varandra, så att ingen längre ser att de hör ihop eller hur helheten ligger till.

**Källa:** Navichain — Bookings/Hub/multi-leg (verifierat: en ny bokning i multi-stop-läge med hub-rader skapar vid sparande en **masterbokning** plus en **child-bokning per sträcka**. Varje child har egna ändpunkter, datum och kan planeras på en egen körning. Child-bokningarnas status **kaskaderar** från masterbokningen, så helheten går att följa på ett ställe. Källa: NAVICHAIN-PRODUCT-TRUTH.md, avsnitt "Hub/multi-leg" och NAVICHAIN-TERMINOLOGY.md.)

**Vad som medvetet INTE påstås:** En sparad multi-stop/hub-bokning är för närvarande **skrivskyddad** i formuläret — en felaktig uppgift kan inte redigeras i efterhand, utan bokningen måste avbokas och skapas på nytt. Berättelsen visar därför Sanna dubbelkolla noggrant *innan* hon sparar, inte att hon rättar något i efterhand. Navichain optimerar inte själv vilken butik som får vilken del av lasten — Sanna bestämmer fördelningen; systemet håller bara ihop helheten och sköter statusen automatiskt. Ingen IT-avdelning syns.

## Medverkande

| Karaktär | Roll | Företag |
|---|---|---|
| **Sanna Berg** *(huvudroll, andra gången)* | Planeringsansvarig | Björklunda Åkeri AB |
| **Robban Ek** *(cameo)* | Förare — kör en av de tre sträckorna | Björklunda Åkeri AB |
| **Curt Malmén** *(ny, kort biroll)* | Inköpare hos kunden (butikskedja) | Extern kund |

## Omslagskoncept

Sanna vid sitt skrivbord, en enda leveranssedel i ena handen — men tre olika stämplar/etiketter bredvid den, en för varje butiksort. På skärmen: en enda orderrad som förgrenar sig visuellt till tre linjer, som en flodmynning. Rubriktypografi i seriens rost-röd/petroleumgröna kombination.

## PANEL 1 — En order, tre mottagare på papper
**Visuellt:** Sanna läser ett fax/e-postutskrift från Curt Malmén: en enda beställning, men med en handskriven notering längst ner — "OBS: delas mellan tre butiker, se bifogad lista." Tre adresser klottrade i marginalen.
**Text:** "En order. Tre adresser. Och ett papper som ska hålla ihop alltihop."
**Status:** 🔴 Röd — en sammansatt order, ingen sammanhållen bokning ännu

## PANEL 2 — Tre lösa bokningar växer fram
**Visuellt:** Sanna börjar skapa tre separata bokningar för hand i det gamla arbetssättet — tre skärmar/flikar öppna samtidigt, tre olika bokningsnummer på gula lappar framför henne.
**Text:** "Tre bokningar. Tre nummer. Ingenting som visar att de hör ihop."
**Status:** 🔴 Röd — splittring, inget gemensamt ursprung syns

## PANEL 3 — Frågan som ingen kan svara på snabbt
**Visuellt:** Curt ringer och frågar hur stor del av hela ordern som är klar totalt. Sanna måste bläddra mellan tre olika bokningar för att räkna ihop svaret manuellt.
**Text:** "'Hur mycket av hela ordern är klar?' Sanna måste räkna. Tre gånger."
**Status:** 🔴 Röd — ingen samlad överblick

## PANEL 4 — Robban i lastbilen, osäker på sammanhanget
**Original brief:** Robban Ek i förarhytten, tittar på en av de tre sträckorna på sin mobil, undrar högt om det finns fler leveranser till samma kund samma dag som han borde känna till.
**Preflight revision recorded in chat:** Robban ser jobbet han ska köra, men Sanna måste fortfarande själv hålla reda på hur allt hänger ihop. Ingen claim att förarappen visar "2 av 3" eller övriga child-bokningar.
**Revised text:** "Robban ser jobbet han ska köra. Men Sanna måste fortfarande själv hålla reda på hur allt hänger ihop."

## PANEL 5 — En adress som skrivs fel i en av tre
**Visuellt:** Sanna upptäcker att en av de tre separata bokningarna fått fel postnummer inskrivet — ett enkelt copy-paste-fel mellan de tre lösa formulären.
**Text:** "Tre formulär att fylla i för hand. Tre chanser att skriva fel."
**Status:** 🔴 Röd — risk inbyggd i själva uppdelningen

## PANEL 6 — Sanna, tre gula lappar, en suck
**Visuellt:** Sanna vid sitt skrivbord, de tre gula lapparna med bokningsnummer utspridda, ingen tydlig koppling mellan dem förutom hennes eget minne.
**Text:** "Allt som höll ihop ordern fanns bara i Sannas huvud."
**Status:** 🔴 Röd — sammanhanget är personberoende, inte systemberoende

## PANEL 7 — Multi-stop-läget upptäcks
**Visuellt:** Sanna hittar multi-stop-läget vid en ny bokning — en enda ordermask där hon lägger till flera mottagningsrader under samma ursprungsorder, istället för att öppna tre separata formulär. Skärmen visar tydligt "En bokning → flera sträckor."
**Text:** "Inte tre bokningar. En bokning — med tre vägar ut."
**Status:** 🟠 Orange — vändpunkten, insikten om att helheten kan förbli hel

## PANEL 8 — Multi-stop-/leg-raderna fylls i, en i taget
**Preflight revision recorded in chat:** butikernas adresser ska inte kallas hubs. Sanna fyller i multi-stop-flödets adresser/leg-rader och kontrollerar dem före Save.
**Revised text:** "Tre stopp i samma upplägg. Hon läser varje rad två gånger innan hon sparar."
**Status:** 🟢 Grön — kontroll före sparande, medveten om skrivskyddet

## PANEL 9 — Sparat: en master, tre barn
**Visuellt:** Sanna sparar. Skärmen visar en masterbokning som förgrenar sig till tre child-bokningar, var och en med eget bokningsnummer men tydligt märkta som del av samma ursprung.
**Preflight-safe text:** "En masterbokning. Ett eget transportben för varje del av rutten."
**Status:** 🟢 Grön — automatisk uppdelning som ändå håller ihop

## PANEL 10 — Robban får sin del tydligt
**Preflight revision recorded in chat:** Robban ser sin egen child-bokning med tydliga ändpunkter och information han behöver; ingen claim att han ser hela orderfamiljen.
**Revised text:** "Robban får sin del som ett riktigt transportben — inte som en lös anteckning Sanna måste förklara."

## PANEL 11 — Curts fråga besvaras från samma struktur
**Preflight revision recorded in chat:** Sanna öppnar master-/child-strukturen och kan identifiera de sammanhörande benen. Ingen claim om automatisk totalsummering eller aggregerad progressvy.
**Revised text:** "'Hur ligger ordern till?' Nu börjar hon i samma master — inte i tre lösa bokningar."

## PANEL 12 — Sanna, en skärm, hela sammanhanget
**Visuellt:** Sanna lutar sig tillbaka med sin kaffekopp och betraktar den sammanhållna master/child-strukturen.
**Preflight-safe text:** "En order blev flera transportben. Men sammanhanget behövde aldrig försvinna."
**Status:** 🟢 Grön — avslutning, tydlig poäng

## Kontinuitetsnot

Trettioandra avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB, och Sanna Bergs andra huvudroll — direkt release av teasern från avsnitt 31. Medvetet skild från det avsnittet: där handlade det om att dela en lasts *mängd* mellan körningar (split cargo, kvantitetsbaserat), här handlar det om att dela en order till flera *mottagare* på olika orter (hub/multi-leg, destinationsbaserat) — två besläktade men verifierat olika mekanismer i produkten.

**Nästa i serien:** En ännu inte utnyttjad vinkel — hur Björklunda hanterar en retur efter en misslyckad leverans (Reattempt/Return), där en ny leveransbokning skapas automatiskt utifrån den ursprungliga, med rätt adresser redan ifyllda, istället för att någon börjar om helt från noll.

## Produktionsnoter

- Flodmynnings-/grenmotivet: en stam som delar sig i tre, metaforiskt och inte som exakt UI-claim.
- De tre gula lapparna i panel 6 kontrasteras mot den samlade skärmvyn i panel 12.
- Färgdramaturgi: röd panel 1–6, orange panel 7, petroleumgrön panel 8–12.
- Robban-cameo i panel 4 och 10 visar kontrasten mellan otydlig lös anteckning och tydligt tilldelat transportben.
- Panel 8 visar lugn kontroll före sparande.
- Prioriterade props: orderutskrift, tre gula lappar, mobil i hytten, kaffekopp.

## CTA intent

CTA ska vara en ljus illustrerad albumbaksida. Kort värdelöfte för storyn: **"En order. Flera transportben. Samma sammanhang."** En huvudhandling: **"Skapa konto"**. URL: `navichain.se/signup`; QR payload: `https://navichain.se/signup`. Officiell Navichain-logga ska användas deterministiskt från källfilen.

## Lock/release note

Ingen explicit `LOCK STORY` med masterversion har verifierats i den aktuella chatten. Denna fil bevarar därför den direkt tillgängliga storybriefen samt de uttryckligen dokumenterade preflight-revisionerna, utan att påstå release-PASS.
