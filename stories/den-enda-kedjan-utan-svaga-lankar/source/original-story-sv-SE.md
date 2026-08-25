# DEN ENDA KEDJAN UTAN SVAGA LÄNKAR

### En navichain story — Jonas och suveränitetsrevisionen

**Tagline (omslag):** Alla säger "EU-hostat". Bara en kunde bevisa det, länk för länk.

**Huvudperson:** Jonas Ekvall, 45 år — IT-säkerhetschef, Nordkust Distribution AB (38 fordon, temperaturkänslig distribution åt regional sjukvård och livsmedelskedjor — en verksamhet med skärpta krav på leverantörskedjans säkerhet)

**Bikaraktärer:**

- Två konkurrerande leverantörsrepresentanter — generiska, konturlösa, avsiktligt utbytbara ("Leverantör A", stor enterprise-aktör; "Leverantör B", mindre SaaS-utmanare) — fokus ska ligga på svaren, inte på personerna
- Robban Ek — chaufför, kontinuitetscameo i panel 11

**Källmaterial:** Den fördjupade tekniska suveränitetsanalysen av Navichains arkitektur (eget järn/bare metal, lokal AI + Berget AI, anonymiserade HERE-anrop, EU-only DNS) samt jämförelsen mot Trimble, Descartes, Soloplan CarLo och LIS WinSped.

**Vinkel (ny, ej tidigare använd i serien):** Tidigare avsnitt har täckt datasuveränitet som skydd mot amerikansk övervakning i sig (Sofia Bergqvist, Petra Lindahl, Birgitta Lind, Calle Wallin) och en bred funktionsjämförelse mellan namngivna TMS-konkurrenter (Rasmus Boström). Den här storyn tar en tredje, mer teknisk vinkel: **den formella infrastrukturrevisionen** — att som IT-säkerhetsansvarig ställa en konkret frågelista (var finns servern, vem äger den, vilka underleverantörer hanterar AI/kartor/DNS) till flera namngivna konkurrenter och upptäcka att endast Navichain kan svara på varje enskild länk i kedjan, inte bara påstå "EU-hostat" som ett marknadsord. Fokus ligger på djupet i infrastrukturen (eget järn, Berget AI, anonymiserad geodata, europeisk DNS) snarare än på funktionsbredd eller det juridiska hotet i sig.

**Format:** 12-panels illustratörsbrief, panel-för-panel visuell beskrivning + bildtext **Färgkodning:** 🔴 Röd = obesvarade frågor/vaga löften, 🟠 Orange = Navichain testas mot samma frågelista, 🟢 Grön = varje länk verifierad och dokumenterad

---

## Visuell stil-not (gäller alla paneler)

- **Bildstil:** Varm 1950-tals Hergé/Tintin *ligne claire* — jämntjocka svarta konturlinjer, platta/jämna färgfält (inget tungt korsraster eller halvtonsraster), pergament/gräddvit botten, palett i rostrött, senapsgult, petroleumgrönt och varmt guld. Handtextade bildtexter, inte digital sans-serif.
- **Textur:** Hela ytan ska ha en lätt grynig offset-print-patina — subtilt tryckkorn, mjuk kantslitning/foxing, dova/något bleknade färgtoner, som ett välbevarat men äkta 1950-talsalbum.
- **Modern handling i klassiskt bildspråk:** Berättelsen utspelar sig i nutid. Jonas arbetar med dator, mobil och surfplatta — aldrig med papperslistor eller manuella pärmar när navichain väl kommer in i bilden. Innan dess (problemdelen) kan konkurrenternas presentationer gärna innehålla generiska powerpoint-mockuper och pärmar som visuell kontrast.
- **Fysiska rekvisita** föredras framför skärmmockuper där det går; där skärmar krävs (t.ex. arkitekturdiagram) ska de tecknas i samma varma stil, inte som fotorealistiska UI-skärmdumpar.
- **Ingen IT-support förekommer i navichain-delen av berättelsen.** Navichain förklarar sig själv — Jonas och Robban behöver aldrig ringa en supportlinje eller boka en konsult.

### Logotypregler

- **navichains officiella logga är helt frånvarande i panel 1–6** (problemdelen med de andra leverantörerna) — medvetet, för att förstärka kontrasten.
- Från panel 7 introduceras loggan diskret som miljödetalj (datorskärmens hörn, en kaffemugg, en pärmrygg, en app-header) — aldrig centrerad eller reklamlik, max ca 5 % av panelytan.
- Illustratören ska använda den uppladdade källfilen med navichains officiella logga vid varje angiven placering, inte återskapa loggan för hand.

---

## Panel 1 — Uppdraget

**Visuellt:** Jonas vid sitt skrivbord på Nordkust Distribution, ett brev/mejl uppe på skärmen med rubriken "Krav vid upphandling av transportsystem — bilaga: informationssäkerhet". På väggen bakom syns ett schema för temperaturövervakad distribution och en karta med regionens sjukhus markerade. **Text:** "Ett nytt TMS ska upphandlas. Men den här gången räcker det inte med funktionslistor. Data om känsliga leveranser får inte hamna var som helst." **Status:** 🔴 Röd — skärpta krav, oklart vem som klarar dem

## Panel 2 — Frågelistan

**Visuellt:** Jonas skriver en checklista för hand på ett blädderblock: "Var finns servern? Vem äger den? Vilka underleverantörer för AI, kartor, DNS?" Enkla ikoner bredvid varje fråga. **Text:** "Inte 'är ni GDPR-kompatibla'. Utan: exakt vilken serverhall, vilken ägare, vilken kedja av underleverantörer." **Status:** 🔴 Röd — en frågelista utan svar än

## Panel 3 — Leverantör A: den stora aktören

**Visuellt:** Ett konferensrum. En namnlös säljare från en stor internationell TMS-jätte visar en glansig presentation med molnikoner. Jonas frågar, säljaren bläddrar osäkert bakåt i sina slides. **Text:** "'Vi använder ledande molnleverantörer med global närvaro', säger han. Jonas frågar vilken jurisdiktion som gäller. Tystnad." **Status:** 🔴 Röd — vag hänvisning till "molnet"

## Panel 4 — Leverantör B: utmanaren

**Visuellt:** Ett mindre, informellt möte. En annan säljare visar en mobilapp med en karta. Jonas pekar på kartvyn och frågar vart koordinaterna skickas. Säljaren tittar ner i sina papper. **Text:** "Kartorna kommer från en extern tjänst. Anonymiseras adresserna innan de skickas dit? 'Det får jag återkomma om.'" **Status:** 🔴 Röd — okänd dataväg för positioner

## Panel 5 — Väggen av frågetecken

**Visuellt:** Jonas tillbaka på kontoret, blädderblocket nu fullt av röda frågetecken bredvid varje post: AI-leverantör?, DNS?, kartdata?, underbiträden?. Han sitter med armarna i kors, uppgiven. **Text:** "Två leverantörer. Två presentationer. Fortfarande ingen som kunnat rita hela kedjan från order till server." **Status:** 🔴 Röd — ingen leverantör klarar hela revisionen

## Panel 6 — Tipset

**Visuellt:** En kollega lutar sig in genom dörren och lägger en utskrift på Jonas skrivbord: "Testa navichain — kör din lista mot dem också." Jonas höjer på ögonbrynen, skeptisk men nyfiken. **Text:** "'Kör din lista mot dem också', säger hon. Jonas suckar — men skriver upp ett möte." **Status:** 🟠 Orange — samma frågelista, en ny leverantör

## Panel 7 — Arkitekturdiagrammet

**Visuellt:** Ett videomöte. På skärmen ritas ett enkelt arkitekturdiagram upp, ruta för ruta: "Navichain kärnsystem → eget järn". Jonas lutar sig framåt, antecknar. Ett litet klistermärke med navichains officiella logga syns i skärmens hörn. **Text:** "Första svaret kommer direkt: kärnsystemet körs på egen fysisk hårdvara. Ingen extern molnleverantör mellan Jonas och servern." **Status:** 🟠 Orange — första länken verifierad

## Panel 8 — AI-frågan

**Visuellt:** Samma diagram, nu med en gren som visar "Lokal AI" och "Berget AI — svensk AI-infrastruktur". Jonas bockar av frågetecknet "AI-leverantör?" på sitt eget block bredvid datorn. **Text:** "Känslig AI-bearbetning sker på egen hårdvara. Det som skalas upp går till Berget AI — svensk infrastruktur, inte en amerikansk API." **Status:** 🟢 Grön — AI-kedjan dokumenterad

## Panel 9 — Kartfrågan

**Visuellt:** Diagrammet fortsätter: en ruta märkt "HERE Maps" med en liten sköld-ikon och texten "anrop anonymiserade". Jonas jämför mentalt med Leverantör B:s obesvarade fråga i panel 4 — en tankebubbla visar ett litet rött frågetecken som stryks över. **Text:** "Kartmotorn får en rutt att räkna på — inte vilket företag, vilken förare eller vilken order det gäller." **Status:** 🟢 Grön — positionsdata skyddad

## Panel 10 — DNS-frågan

**Visuellt:** Sista grenen i diagrammet: "DNS & infrastruktur — endast europeiska leverantörer". Jonas bockar av den sista raden på sin lista, som nu är helt grön. **Text:** "Även de små, osynliga lagren — DNS, nätverk — är europeiska. Ingen amerikansk aktör någonstans i kedjan." **Status:** 🟢 Grön — hela listan avbockad

## Panel 11 — Ute på vägen

**Visuellt:** Robban Ek, chauffören, lastar en temperaturkänslig leverans och loggar in i navichains förarapp på sin egen mobil — inga manualer, ingen väntan på support. En liten navichain-dekal syns diskret på lastbilsdörren. **Text:** "Ingen supportlinje att ringa. Robban var igång innan lasten ens var färdiglastad." **Status:** 🟢 Grön — självförklarande även i förarledet

## Panel 12 — Beslutet

**Visuellt:** Jonas presenterar sitt ifyllda revisionsdokument för en liten grupp kollegor kring ett bord — hela listan grön, ett handslag över bordet. Genom fönstret syns en av Nordkusts distributionsbilar med navichains officiella logga som en diskret dekal. **Text:** "Två leverantörer kunde beskriva sin molntjänst. Bara en kunde rita hela kedjan — länk för länk, utan luckor." **Teaser till nästa avsnitt:** En liten notis i bildens hörn: "Nästa: Vad händer när en revision blir en återkommande rutin — varje kvartal, inte bara vid upphandling?" **Status:** 🟢 Grön — revisionen godkänd, avtal på väg att tecknas

---

**Sammanfattande badge (valfri sista ruta/eftertext):** "navichain: den enda kedjan där varje länk går att bevisa."

---

## Illustratörsreferens

| Element | Beskrivning |
|---|---|
| Jonas Ekvall | 45 år, IT-säkerhetschef. Kostym utan slips eller smart-casual kavaj, kortklippt mörkt hår, glasögon för läsande/analytisk framtoning. Skeptisk, noggrann kroppshållning — armarna ofta i kors eller antecknande. |
| Leverantör A (säljare) | Namnlös, generisk enterprise-säljarestetik: mörk kostym, glansig presentation, något överdrivet självsäker hållning som knäcks av tystnad vid detaljfrågor. |
| Leverantör B (säljare) | Namnlös, mer informell/startup-aktig klädsel, yngre uttryck, osäker kroppshållning vid detaljfrågor. |
| Robban Ek | Etablerad seriekaraktär — chaufför, varm och praktisk framtoning, syns kort i panel 11. |
| Arkitekturdiagrammet (panel 7–10) | Enkelt, handritat/schematiskt utseende i stil med ett blädderblock eller en whiteboard-skiss — inte en fotorealistisk UI-skärmdump. Rutor och pilar i varm tuschlinje, textade i handtextad stil. |
| navichains officiella logga | Använd den uppladdade källfilen. Frånvarande panel 1–6. Introduceras diskret från panel 7: skärmhörn, klistermärke, dekal, kaffemugg. Aldrig centrerad eller reklamlik. |

## Seriekontinuitet

Denna story fördjupar suveränitetstemat som tidigare introducerats via Sofia Bergqvist (skydd mot amerikansk övervakningslagstiftning), Petra Lindahl, Birgitta Lind och Calle Wallin, samt bygger vidare på den jämförande upphandlingsvinkeln från Rasmus Boströms story. Den nya vinkeln här är den tekniska revisionsprocessen i sig — frågelistan, de obesvarade luckorna hos namngivna typer av konkurrenter, och det gradvisa avbockandet av varje infrastrukturlänk (eget järn, lokal AI/Berget AI, anonymiserad geodata, europeisk DNS) som konkurrensfördel. Robban Ek gör sin sedvanliga kontinuitetscameo i panel 11.
