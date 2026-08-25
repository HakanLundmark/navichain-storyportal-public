# — En navichain story —

# ALDRIG SAMMA RAD TVÅ GÅNGER

### Viktor och kedjan som kopplar ihop två system utan en enda knapptryckning

**Vinkel:** Seriens tredje avsnitt i sviten om sammanhängande kedjor flyttar sig utanför Björklunda Åkeris väggar — till en kund som bokar transporter varje dag och tvingas skriva samma information två gånger: en gång i sitt eget affärssystem, en gång i navichains bokningsportal. Uppgiften är unik i sin natur: den handlar inte om en funktion i navichain, utan om **avsaknaden** av en koppling mellan navichain och ett system navichain aldrig kan se in i på egen hand — tills de kopplas ihop.

**Källa:** Navichain — External API / EDI-integrationsflöde (verifierat: administratör skapar organisationsbunden nyckel med begränsat behörighetsomfång, hemlighet visas endast en gång; ERP:et skapar/uppdaterar organisationer idempotent via externt nummer; ERP:et skapar/uppdaterar/avbokar bokningar inom statusreglerna, max 100 per anrop; signerad webhook-registrering med leveranshistorik och automatiska omförsök; ERP:et läser tillbaka spårning och dokument för avstämning).

---

## Medverkande

| Karaktär | Roll | Företag |
| --- | --- | --- |
| **Viktor Ahlin** *(ny huvudkaraktär)* | IT- och systemansvarig | Nordform AB (kund till Björklunda Åkeri) |
| **Oskar Lind** *(återkommande)* | Administratör hos Björklunda Åkeri — utfärdar API-nyckeln | Björklunda Åkeri AB |

Viktor sitter inte hos åkeriet utan hos kunden — Nordform AB, ett grossistföretag som bokar transporter hos Björklunda flera gånger om dagen. Han representerar en vinkel serien inte tidigare visat: hur navichain upplevs från utsidan, av någon som aldrig loggar in i själva portalen utan bara vill att de två systemen ska sluta kräva samma information två gånger.

---

## Omslagskoncept

Viktor vid sitt skrivbord hos Nordform, två skärmar bredvid varandra: till vänster företagets eget affärssystem, till höger navichains bokningsvy — en tunn, ljusande länk ritas mellan skärmarna som en enda kabel/ljuslinje snarare än en bokstavlig sladd. Rubriktypografi i samma rost-röd/petroleumgrön kombination som seriens övriga omslag.

---

## PANEL 1 — Måndag, 08:14

**Visuellt:** Viktor sitter mellan två skärmar. På den ena en lista med 30 nya order i Nordforms affärssystem. På den andra en tom bokningsvy i navichains portal. Han sträcker på nacken redan innan han börjat. **Text:** "Trettio order i vårt system. Noll i deras. Han vet redan hur förmiddagen kommer se ut." **Status:** 🔴 Röd — samma information, två system

## PANEL 2 — Rad för rad

**Visuellt:** Viktor kopierar adress, godsslag och vikt manuellt från ena skärmen till den andra, order för order. Ett papper bredvid tangentbordet med en handskriven ruta: "Order 14 av 30". **Text:** "Ingen bokning skapar sig själv. Varje rad skrivs två gånger — en gång rätt, en gång kanske." **Status:** 🔴 Röd — manuell dubbelinmatning

## PANEL 3 — Den felskrivna adressen

**Visuellt:** En siffra i ett postnummer skiljer sig mellan skärmarna — 3 istället för 8. Viktor upptäcker det först när en leveransvarning dyker upp mot slutet av dagen. **Text:** "En siffra fel i en adress som redan fanns rätt — i det andra systemet." **Status:** 🔴 Röd — mänskligt fel i onödan

## PANEL 4 — Avstämningen i slutet av månaden

**Visuellt:** Viktor med två utskrivna listor bredvid varandra på skrivbordet, en penna i handen, prickar av rad för rad — spårningsstatus i det ena systemet mot fakturaunderlaget i det andra. **Text:** "Två listor, en penna, en hel eftermiddag — bara för att veta att allt stämmer." **Status:** 🔴 Röd — manuell avstämning varje månad

## PANEL 5 — Vändpunkten: nyckeln

**Visuellt:** Videosamtal mellan Viktor och Oskar Lind (Björklundas administratör). Oskar skapar en organisationsbunden API-nyckel med begränsat behörighetsomfång direkt i navichains adminvy och visar den — "syns bara en gång, spara den nu". **Text:** "En nyckel, avgränsad till precis det Nordform behöver — inte mer, visad exakt en gång." **Status:** 🟠 Orange — behörighet skapad på minuter, inte veckor

## PANEL 6 — Systemen känner igen varandra

**Visuellt:** Ett enkelt flödesschema på Viktors skärm: Nordforms organisationsnummer matchas automatiskt mot rätt konto i navichain — ingen dubblett skapas även om anropet skickas flera gånger av misstag. **Text:** "Skicka samma uppgift två gånger av misstag — systemet skapar den ändå bara en gång." **Status:** 🟠 Orange — säkert även när något går fel på vägen

## PANEL 7 — Bokningarna dyker upp av sig själva

**Visuellt:** Viktor lutar sig tillbaka. På navichains skärm dyker de trettio ordrarna upp i bokningsvyn, en efter en, utan att han rör tangentbordet. Ett diskret klistermärke med navichains officiella logga syns i gränssnittets hörn. **Text:** "Trettio order. Noll knapptryckningar från honom." **Status:** 🟢 Grön — bokningar skapas automatiskt från affärssystemet

## PANEL 8 — Måndagen som inte längre är värst

**Visuellt:** Samma klocka som i panel 1, men nu visar den 08:20 och Viktor dricker sitt kaffe medan skärmarna redan är synkade. Kartongen med "Order 14 av 30"-lappen är borta. **Text:** "Samma måndag, samma volym. Sex minuter, inte hela förmiddagen." **Status:** 🟢 Grön — hela dagens order hanterade i ett svep

## PANEL 9 — Statusen kommer tillbaka av sig själv

**Visuellt:** En signerad webhook-notis dyker upp i Nordforms eget system: "Order 4821 — upphämtad". Viktor har inte behövt öppna navichain för att veta det. **Text:** "Han slutade fråga navichain om status. Nu berättar navichain det själv." **Status:** 🟢 Grön — statusuppdateringar levereras automatiskt

## PANEL 10 — Ett meddelande som studsar — och kommer ändå fram

**Visuellt:** En liten notis om ett tillfälligt nätverksavbrott, följt direkt av "Automatiskt omförsök lyckades" i en leveranshistorik-logg. Viktor rycker knappt på axlarna. **Text:** "Ett meddelande som inte kom fram första gången. Det försökte igen — utan att någon behövde märka det." **Status:** 🟢 Grön — leveranshistorik och omförsök inbyggt

## PANEL 11 — Avstämningen, utan pennorna

**Visuellt:** Samma scen som panel 4, men de två pappersutskrifterna är borta. Viktor läser istället spårning och dokument direkt inifrån sitt eget affärssystem, redan synkat, och bockar av på skärmen på några minuter. **Text:** "Samma avstämning. Från en hel eftermiddag till en kaffepaus." **Status:** 🟢 Grön — avstämning i realtid, inte i efterhand

## PANEL 12 — Slutet av kvartalet

**Visuellt:** Viktor visar en enkel sammanställning för sin chef: timmar sparade, fel som aldrig uppstod. Kaffemugg med navichains officiella logga på skrivbordet. Genom fönstret skymtar en Björklunda-lastbil lämna lastplatsen. **Text:** "Två system som pratar med varandra. Ingen rad skriven två gånger — den här månaden, eller nästa." **Status:** 🟢 Grön — kedjan sluten från order till avstämning

**Post-it på Viktors skärmkant (teaser):** *"Nästa: när navichain själv föreslår vilken bil och förare som passar bäst — innan någon hunnit fråga."*

---

## Illustratörsreferens

| Element | Instruktion |
| --- | --- |
| **Stil** | Varm 1950-talston, Hergé/Tintin *ligne claire*: jämn konturlinje, platta färgfält, inget tungt raster. Diskret offset-korn, patina, mjuk kantslitning. |
| **Färgdramaturgi** | Panel 1–4: rost-röd, tätt och stillasittande skrivbordsljus. Panel 5–6: mustig orange, ett videosamtal öppnar upp rummet. Panel 7–12: petroleumgrön, luftigare komposition och mer ljus i rummet. |
| **Viktor Ahlin** | Kontorsklädsel, något mer "affärssystem" än "logistik" i stilen — skjorta, inga overaller. Spänd, framåtlutad hållning i röda panelerna, avslappnad tillbakalutad hållning i gröna. |
| **Oskar Lind** | Samma visuella design som tidigare i serien. Syns denna gång via videosamtal — ska tydligt läsas som "på andra sidan skärmen", inte i samma rum som Viktor. |
| **Två skärmar som motiv** | Genomgående kompositionsmotiv: Nordforms affärssystem och navichain ska alltid vara visuellt urskiljbara som två olika gränssnitt, även när de senare börjar "prata" — visa gärna en tunn ljuslinje eller synkroniseringsindikator mellan dem från panel 7 och framåt, aldrig en bokstavlig sladd. |
| **Navichains officiella logga** | Använd den uppladdade källfilen exakt som den är — återskapa den aldrig för hand. Frånvarande i panel 1–4. Introduceras diskret från panel 7 (gränssnittets hörn) och syns sedan i webhook-notisens avsändarikon samt på kaffemugg — aldrig centrerad, aldrig reklamaktig, max cirka 5 % av panelytan. |
| **Ingen IT-support** | Ingen extern konsult, inget supportärende. Oskar är intern administratör hos kunden Björklunda, inte en IT-avdelning som kallas in — navichain är självförklarande genom hela berättelsen. |
| **Papper vs. skärm** | Panel 3–4 präglas av utskrivna listor och penna. Från panel 7 och framåt är skrivbordet fritt från papper — övergången ska synas fysiskt i miljön. |

---

## Kontinuitetsnot

Tredje avsnittet i sviten om sammanhängande arbetsflöden, och det första i serien som utspelar sig primärt hos en kund snarare än hos ett åkeri — ett medvetet perspektivbyte som visar navichain "utifrån och in". Oskar Lind återkommer i sin etablerade roll som administratör, nu i en gränssnittsfunktion mot en extern part istället för mot interna användare. Viktor Ahlin introduceras som en helt ny typ av persona i serien: inte chaufför, trafikledare eller lagerpersonal, utan en IT-/systemroll på kundsidan — vilket breddar seriens persongalleri bortom transportbranschens egna roller.

**Nästa i serien:** Resursmatchning — hur navichain kan föreslå vilken bil och förare som passar bäst för ett uppdrag innan en trafikledare hunnit fundera på det själv. En vinkel som tidigare pekats ut som kommande i serien men ännu inte utvecklats till ett eget avsnitt.
