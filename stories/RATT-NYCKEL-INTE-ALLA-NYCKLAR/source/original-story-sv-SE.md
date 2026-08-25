# RÄTT NYCKEL, INTE ALLA NYCKLAR
### Oskar och trafikledaren som fick exakt det hon behövde — och inget annat

**Vinkel:** Tjugoförsta avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB knyter an till Oskars två tidigare huvudroller — API-nyckeln till Viktor (avsnitt 3) och avdelningsstrukturen till Örebro-kontoret (avsnitt 12) — men vänder blicken mot den vanligaste av alla admin-uppgifter: att ge en enskild nyanställd tillgång till systemet. Uppgiften är förrädisk enkel på ytan och farlig i praktiken, eftersom den vanliga genvägen — att kopiera en kollegas behörigheter "för säkerhets skull" — nästan alltid ger antingen för lite eller alldeles för mycket åtkomst.

**Källa:** Navichain — Users & Roles (verifierat: användare har en fast inloggnings-e-post, aktiv status, en eller flera roller och en valfri förarprofil. Roller grupperar behörigheter/claims — dokumenterade claims omfattar Transport, Bookings, Runs, Inspections, BookingLockOverride, DriverContract, Invoice och Settings. Invoice-claimet döljer finansiella värden i webb/mobil för den som saknar det. Settings ger administrationsrättigheter/Documents. BookingLockOverride kräver en angiven anledning och loggas. Roller kan inte tas bort medan de är tilldelade eller om de är den sista kvarvarande.)

**Viktigt narrativt påbud:** navichain skapar aldrig en roll eller tilldelar behörigheter automatiskt utan att Oskar aktivt väljer det. Systemet visar tydligt vad varje roll faktiskt innehåller — Oskar väljer en befintlig, redan definierad roll och kopplar den till det nya kontot; han bygger inte upp behörigheter från grunden, men han "gissar" inte heller genom att kopiera en annan persons konto. Ingen IT-avdelning syns. Ingen SA-roll (den reserverade systemadministratörsrollen) delas ut i onödan.

## Medverkande

| Karaktär | Roll | Företag |
|---|---|---|
| **Oskar Lind** *(huvudroll, tredje gången)* | Administratör | Björklunda Åkeri AB |
| **Elin Sjöberg** *(ny biroll)* | Nyanställd trafikledare, första dagen | Björklunda Åkeri AB |
| **Sara Lund** *(återkommande)* | Trafikledare — kort cameo, visar Elin runt | Björklunda Åkeri AB |

Oskar har tidigare gett Viktor en API-nyckel och byggt upp behörighetsstrukturen för det nya Örebro-kontoret. Den här gången är uppgiften mindre och mer personlig: en enda ny kollega, en enda första dag, och risken att antingen låsa ute henne från det hon behöver eller — värre — ge henne tillgång till sådant hon aldrig borde se, som andras löneuppgifter eller fakturavärden.

## Omslagskoncept

Oskar sitter vid sitt skrivbord med två skärmbilder bredvid varandra i tanken: till vänster en gammal, tänkt genväg — ett konto skapat genom att bara kryssa i samma rutor som en erfaren kollega, med en varningstriangel över några av dem. Till höger en ren, tydlig rollista där han istället väljer en färdig roll märkt "Trafikledare" och kopplar den till Elins nya konto med ett enda klick. Rubriktypografi i seriens etablerade rost-röd/petroleumgrön kombination.

## VISUELL STIL (gäller samtliga paneler)

Varm 1950-talsestetik i Hergé/Tintin *ligne claire*: rena konturlinjer i jämn tjocklek, platta färgfält utan halvtoner eller kraftig skraffering. Parkument-/krämfärgad botten med rost-röd, senapsgul, petroleumgrön och varm guld. Bildtexter handtextade, aldrig digital sans-serif. Fysiska rekvisita (ett välkomstkort på Elins skrivbord, en kaffekopp, en klippbräda) prioriteras framför skarpa UI-mockups. Lätt kornig offsettryck-textur med patina, mjuk kantslitning och foxing.

**Genomgående motiv:** i tidiga paneler syns en gammal utskriven checklista på Oskars skrivbord — "NYTT KONTO: KRYSSA I SAMMA SOM KOLLEGAN" — full av handskrivna kryss och osäkra frågetecken. Från vändpunkten och framåt läggs listan undan, och rollvalet sker istället genom ett par tydliga, färdiga alternativ på skärmen.

**Logotypregel:** navichains officiella logga är helt frånvarande i paneler 1–6. Introduceras diskret från panel 7 — som en liten ikon i hörnet av rollistan, en logga på Oskars surfplatta, och slutligen på hans kaffemugg i sista panelen. Aldrig centrerad, aldrig mer än cirka 5 % av panelytan, aldrig annonsmässig. *Den officiella loggan är uppladdad som källfil i projektet — illustratören ska använda den filen vid varje angiven placering, inte återskapa den för hand.*

**Inget IT-stöd:** Ingen supportperson eller IT-avdelning syns någonstans. Oskar löser allt själv, på tio minuter, innan Elins första kaffe blivit kall.

## PANEL 1 — Elins första morgon
**Visuellt:** Elin Sjöberg står i receptionen, väska i handen, ler nervöst. Sara Lund kommer emot henne med utsträckt hand. I bakgrunden syns Oskar vid sitt skrivbord, redan i full gång.
**Text:** "Elins första dag som trafikledare. Ett nytt skrivbord, en ny inloggning att skapa."
**Status:** 🔴 Röd (uppgift under tidspress)

## PANEL 2 — Den gamla checklistan
**Visuellt:** Oskar plockar fram en sliten, handskriven checklista: "NYTT KONTO: KRYSSA I SAMMA SOM KOLLEGAN". Flera rutor har frågetecken bredvid sig.
**Text:** "Den gamla vanan: kolla vad en annan trafikledare hade, och kryssa i likadant."
**Status:** 🔴 Röd (osäker genväg)

## PANEL 3 — Risken syns
**Visuellt:** Oskar tittar närmare på en kollegas konto som referens och upptäcker att det av misstag även har en Invoice-behörighet kvar sedan ett gammalt vikariat — något en ny trafikledare inte borde ha från dag ett.
**Text:** "Om han kopierade rakt av, skulle Elin få se saker hon inte skulle behöva se."
**Status:** 🔴 Röd (för mycket åtkomst, av misstag)

## PANEL 4 — Han stannar upp
**Visuellt:** Oskar lägger ifrån sig checklistan, lutar sig tillbaka, tittar på den nya kontoformuläret på skärmen istället för att fortsätta kopiera i blindo.
**Text:** "Han insåg att gissa fel var lika farligt åt båda hållen."
**Status:** 🟠 Orange (vändpunkt — eftertanke)

## PANEL 5 — Rollistan
**Visuellt:** Oskar öppnar rollhanteringen i navichain på sin surfplatta. En tydlig lista med färdigdefinierade roller syns: "Trafikledare", "Chaufför", "Ekonomi", "Administratör" — varje rad med en kort beskrivning av vad rollen faktiskt innehåller.
**Text:** "Inte en tom ruta att fylla i. En färdig roll att välja."
**Status:** 🟠 Orange (klarhet)

## PANEL 6 — Ett tydligt innehåll
**Visuellt:** Oskar klickar på "Trafikledare" och en kort, läsbar lista visas: Bookings, Runs, Transport — inget Invoice, inget Settings. Precis det en trafikledare faktiskt behöver.
**Text:** "Bokningar, körningar, transport. Inget mer, inget mindre."
**Status:** 🟢 Grön (precision)

## PANEL 7 — Kontot skapas
**Visuellt:** Oskar fyller i Elins e-postadress och kopplar rollen "Trafikledare" till det nya kontot. navichains officiella logga syns diskret i hörnet av vyn.
**Text:** "Ett e-postfält, en roll, ett klick."
**Status:** 🟢 Grön (enkelhet)

## PANEL 8 — Inbjudan skickas
**Visuellt:** Ett bekräftelsemeddelande visas: "Kontoinbjudan skickad — Elin Sjöberg." Samtidigt vibrerar en telefon på Elins nya skrivbord.
**Text:** "Inbjudan var på väg innan Elin ens hunnit sätta sig ner."
**Status:** 🟢 Grön (omedelbarhet)

## PANEL 9 — Elin loggar in
**Visuellt:** Elin sätter sig, öppnar mejlet, loggar in för första gången. Gränssnittet visar exakt de flikar en trafikledare behöver — inget annat, inget som förvirrar.
**Text:** "Hon loggade in och kände igen precis det hon behövde — inget mer att navigera runt."
**Status:** 🟢 Grön (självbetjäning)

## PANEL 10 — Sara visar runt, kort
**Visuellt:** Sara Lund lutar sig över Elins axel en kort stund, pekar på skärmen med ett leende — inte för att förklara ett rörigt gränssnitt, utan för att peka ut var kaffet finns.
**Text:** "Sara behövde bara visa var kaffet stod. Systemet förklarade resten."
**Status:** 🟢 Grön (kort, avgränsad cameo)

## PANEL 11 — Checklistan i lådan
**Visuellt:** Tillbaka hos Oskar — den gamla checklistan "KRYSSA I SAMMA SOM KOLLEGAN" läggs i en skrivbordslåda, inte kastad, men inte längre använd.
**Text:** "Checklistan fick vila. Den behövdes inte längre."
**Status:** 🟢 Grön (symbolisk avslutning)

## PANEL 12 — Eftermiddagen samma dag
**Visuellt:** Elin sitter mitt i sitt första bokningsflöde, koncentrerad men lugn. Oskar går förbi med sin kaffemugg, där navichains officiella logga syns diskret, och nickar nöjt.
**Text:** "Samma eftermiddag var Elin igång — med exakt de nycklar hon behövde, och inga andra."
**Status:** 🟢 Grön (avslutning, tydlig poäng)

## Kontinuitetsnot

Tjugoförsta avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB, och Oskar Linds tredje huvudroll — en naturlig fortsättning på hans tidigare berättelser om Viktors API-nyckel (avsnitt 3) och Örebro-kontorets avdelningsstruktur (avsnitt 12). Där avsnitt 12 handlade om att en hel ny ort ärver rätt behörigheter automatiskt, handlar det här avsnittet om den mycket vanligare situationen: en enskild nyanställd, en enda dag, och vikten av att varken låsa ute eller släppa in för mycket. Sara Lund gör en kort, avgränsad cameo som visar att den mänskliga introduktionen fortfarande behövs — bara inte för att förklara systemet.

**Nästa i serien:** En ännu inte utnyttjad vinkel — hur en åkeriägare, mitt i en period med flera samtidiga kundförfrågningar, kan se hela sin prissättningshistorik för en viss sträcka i ett ögonblick, istället för att gräva i gamla fakturor för att komma ihåg vad som offererades senast.

## Produktionsnoter till illustratören

- **Checklistan "KRYSSA I SAMMA SOM KOLLEGAN"** ska synas tydligt sliten och handskriven i panel 2, och läggas undan (inte kastas) i panel 11 — samma symboliska rörelse som tidigare avsnitts pärmar och listor.
- **Rollistan i panel 5–6** ska tecknas enkel och läsbar: fyra–fem tydligt namngivna roller med en kort radbeskrivning var, inga kryptiska koder eller tekniska termer.
- **Elin Sjöberg** är en ny, återkommande biroll — notera hennes utseende tydligt för framtida cameos, likt Robban Ek.
- **Sara Lunds cameo (panel 10)** ska vara kort och vardaglig — kaffe, inte support.
- **Fysiska rekvisita att prioritera:** den handskrivna checklistan, ett litet välkomstkort på Elins nya skrivbord, kaffemuggen med diskret logga i sista panelen.
