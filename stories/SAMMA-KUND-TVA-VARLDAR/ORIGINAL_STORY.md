# — En navichain story —

# SAMMA KUND, TVÅ VÄRLDAR
### Petra, Torgny och portalen som visste vem som var vem

**Format:** 12 paneler + omslagskoncept. Illustratörsbrief.

**Vinkel:** Trettiosjätte avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB återvänder till Petra Vindh (kund, tidigare sedd i avsnitt 26) för hennes andra huvudroll — nu i egenskap av att hennes företag precis öppnat en andra anläggning på en annan ort. Problemet är inte tekniskt i sig, utan mänskligt: när Torgny, den nya kontaktpersonen på det andra kontoret, får tillgång till samma kundportal som Petra, uppstår genast osäkerhet om vem som ser vems bokningar — och en kort, obehaglig stund där det verkar som att ingen av dem har någon egen avgränsad vy alls.

**Källa:** Navichain — Organizations & Customer Portal (verifierat: organisationer har ett **parent**-fält och underorganisationer (subsidiaries) syns i organisationens detaljvy tillsammans med kopplade portalanvändare. En kund kan ha flera portalanvändare, och **en portalanvändare kan tillhöra flera organisationer**. Kundportalen har en **org-switching-dashboard** — en användare växlar mellan de organisationer hen faktiskt har tillgång till, och ser bara den valda organisationens ordrar, spårning och fakturaförhandsgranskning. Källa: NAVICHAIN-PRODUCT-TRUTH.md, avsnitt "Organizations" och modul 43 "Customer Portal".)

**Vad som medvetet INTE påstås:** navichain bygger aldrig automatiskt upp kundens organisationsstruktur eller bestämmer själv vem som ska ha tillgång till vad — det är fortfarande en människa på Björklunda som skapar underorganisationen och medvetet knyter varje portalanvändare till rätt organisation. Det finns heller ingen dokumenterad, sammanslagen översiktsvy som automatiskt visar *alla* underorganisationers bokningar i en enda gemensam rapport — om Petra vill se båda anläggningarna måste hon själv ha tillgång till båda organisationerna och växla mellan dem. Ingen IT-avdelning syns; Oskar löser hela konfigurationen själv genom gränssnittet.

---

## Medverkande

| Karaktär | Roll | Företag |
|---|---|---|
| **Petra Vindh** *(huvudroll, andra gången)* | Inköpsansvarig, huvudkontoret | Extern kund (flera anläggningar) |
| **Torgny Aspelin** *(ny biroll)* | Ny kontaktperson, den nyöppnade anläggningen | Extern kund (samma bolag, annan ort) |
| **Oskar Lind** *(återkommande)* | Administratör — sätter upp organisationsstrukturen | Björklunda Åkeri AB |

---

## Omslagskoncept

Ett delat uppslag: till vänster Petra vid sitt skrivbord på huvudkontoret, till höger Torgny vid sitt nya skrivbord på den nyöppnade anläggningen, båda med varsin skärm som visar en portal — men med olika innehåll, tydligt åtskilt av en tunn linje i mitten som symboliserar den osynliga gränsen mellan dem. Rubriktypografi i seriens rost-röd/petroleumgröna kombination.

---

## PANEL 1 — En ny anläggning öppnar
**Visuellt:** Petra på huvudkontoret får ett mejl: den nya anläggningen på andra sidan landet är officiellt öppnad, med Torgny Aspelin som ny kontaktperson för leveranser dit.
**Text:** "En ny adress. En ny kollega. Samma kund — på pappret."
**Status:** 🔴 Röd — expansion utan tydlig struktur ännu

## PANEL 2 — Torgny loggar in, osäker på vad han ser
**Visuellt:** Torgny loggar in i kundportalen för första gången på sin nya arbetsplats och stirrar förvirrat på skärmen — han vet inte om det han ser är hans egna bokningar eller om det är blandat med huvudkontorets.
**Text:** "Är det här mina leveranser? Eller Petras? Han visste inte."
**Status:** 🔴 Röd — otydlig avgränsning, osäkerhet

## PANEL 3 — Petra upptäcker en okänd order
**Visuellt:** Petra bläddrar i sin egen orderlista och stöter på en bokning hon inte känner igen — adressen är den nya anläggningens, inte hennes egen.
**Text:** "En order hon aldrig lagt. Från en adress som inte var hennes."
**Status:** 🔴 Röd — risk för sammanblandning

## PANEL 4 — Ett osäkert telefonsamtal
**Visuellt:** Petra ringer Torgny för att reda ut det hela; båda är osäkra på om de av misstag ser eller kan påverka varandras bokningar, ingen av dem vet riktigt vad som är sant.
**Text:** "'Ser du mina ordrar?' 'Jag vet inte. Ser du mina?'"
**Status:** 🔴 Röd — ömsesidig osäkerhet, ingen har svaret

## PANEL 5 — Oron för misstag
**Visuellt:** Torgny tvekar inför att lägga en ny bokning, rädd att av misstag råka ändra något som tillhör Petras huvudkontor istället för hans egen anläggning.
**Text:** "Han vågade knappt trycka på någonting. Tänk om det blev fel."
**Status:** 🔴 Röd — handlingsförlamning av osäkerhet

## PANEL 6 — Petra kontaktar Björklunda
**Visuellt:** Petra ringer Oskar Lind på Björklunda och förklarar situationen — två anläggningar, en delad känsla av att ingen riktigt vet vem som ser vad.
**Text:** "'Vi behöver varsin egen vy. Inte en gemensam röra.'"
**Status:** 🔴 Röd — problemet formuleras tydligt för första gången

## PANEL 7 — Oskar ser lösningen i organisationsstrukturen
**Visuellt:** Oskar öppnar kundens organisationspost i navichain och ser fältet för underorganisation — han inser att den nya anläggningen borde läggas upp som en egen, kopplad organisation under huvudkontoret, inte blandas in i samma post.
**Text:** "Inte en delad inloggning. Två organisationer — kopplade, men åtskilda."
**Status:** 🟠 Orange — vändpunkten, strukturen blir tydlig

## PANEL 8 — Underorganisationen skapas
**Visuellt:** Oskar skapar en ny underorganisation för den nya anläggningen, med Petras företag som överordnad organisation — en tydlig, dokumenterad koppling utan att slå ihop dem till en enda post.
**Text:** "Samma familj. Två adresser. Tydligt vem som hör till vem."
**Status:** 🟢 Grön — strukturen upprättad korrekt

## PANEL 9 — Torgnys egen portalanvändare
**Visuellt:** Oskar knyter en ny portalanvändare specifikt till den nya underorganisationen och skickar en inbjudan till Torgny — kopplingen är gjord medvetet, en gång, av en människa.
**Text:** "Torgnys inloggning knuten till hans egen anläggning. Inget mer, inget mindre."
**Status:** 🟢 Grön — avsiktlig, exakt behörighet

## PANEL 10 — Torgny ser bara sitt eget
**Visuellt:** Torgny loggar in igen. Den här gången visar skärmen enbart hans egen anläggnings bokningar — rent, tydligt, utan en enda order som inte hör dit.
**Text:** "Nu visste han. Allt han såg var faktiskt hans."
**Status:** 🟢 Grön — klarhet och trygghet

## PANEL 11 — Petra ser bara sitt
**Visuellt:** Petra loggar in på huvudkontoret, ser sin egen orderlista precis som tidigare — den okända bokningen från panel 3 är borta ur hennes vy, tillbaka där den hör hemma.
**Text:** "Hennes lista var hennes igen. Ingenting av Torgnys blandades in."
**Status:** 🟢 Grön — ordning återställd på båda sidor

## PANEL 12 — Petra och Torgny, samma bild som omslaget
**Visuellt:** Samma delade uppslag som omslaget — men nu lugnt och tryggt, båda arbetar avslappnat vid sina respektive skärmar. En diskret dekal med navichains officiella logga syns på Oskars datorskärm i en liten inklippt bildruta mellan dem.
**Text:** "Samma kund. Två världar. Och för första gången: ingen förvirring alls."
**Status:** 🟢 Grön (avslutning, tydlig poäng)

---

## Kontinuitetsnot

Trettiosjätte avsnittet i sviten om sammanhängande arbetsflöden hos Björklunda Åkeri AB, och Petra Vindhs andra huvudroll — nu ur ett strukturellt snarare än ett funktionellt perspektiv (avsnitt 26 handlade om att klona en bokning, det här handlar om vem som överhuvudtaget får se vad). Grundat i den verifierade parent/underorganisations-strukturen och att portalanvändare knyts till specifika organisationer, med org-switching som gör att var och en bara ser det de har tillgång till. Medvetet återhållsam grund: ingen automatisk sammanslagen rapport över alla anläggningar visas — om Petra vill se båda krävs att hon själv får tillgång till båda organisationerna.

**Nästa i serien:** En ännu inte utnyttjad vinkel — hur Björklunda hanterar en förfrågan om ett nytt fordon som redan finns registrerat i systemet under fel organisation, och hur referenskontrollen vid radering avslöjar och förklarar varför det inte bara går att flytta det rakt av.

---

## Produktionsnoter till illustratören

- **Den delade uppslagskompositionen** (Petra till vänster, Torgny till höger, en tunn linje mellan dem) ska återkomma identiskt i omslaget och i panel 12 — samma bildspråk, men med tydligt annorlunda känsla: osäker distans i omslaget, trygg parallellitet i panel 12.
- **Färgdramaturgi:** Röd dominerar paneler 1–6 (sammanblandning, osäkerhet, handlingsförlamning), orange är vändpunkten (panel 7), petroleumgrön dominerar paneler 8–12.
- **Panel 3:s "okända order"** bör tecknas med en tydlig visuell markering (t.ex. ett frågetecken eller en avvikande färg på raden) som sedan försvinner spårlöst i panel 11 — utan att kännas som att något raderats, bara att det äntligen ligger rätt.
- **Oskars roll (panel 7–9)** ska tecknas metodisk och lugn, inte som en krisinsats — han löser strukturen som en naturlig del av sitt vanliga arbete.
- **Fysiska rekvisita att prioritera:** de två skärmarna i omslaget/panel 12, telefonluren i panel 4, organisationsträdet på Oskars skärm (panel 7–8), den lilla logga-dekalen i inklippt bildruta (panel 12).

---

## Sammanfattningstabell för illustratören

| Panel | Färgstatus | Nyckelmotiv | Logotyp-not |
|---|---|---|---|
| 1 | 🔴 Röd | Mejl om ny anläggning, ny kontaktperson | Ingen |
| 2 | 🔴 Röd | Torgny förvirrad vid sin första inloggning | Ingen |
| 3 | 🔴 Röd | Petra hittar okänd order i sin lista | Ingen |
| 4 | 🔴 Röd | Osäkert telefonsamtal mellan Petra och Torgny | Ingen |
| 5 | 🔴 Röd | Torgny tvekar, vågar inte agera | Ingen |
| 6 | 🔴 Röd | Petra ringer Oskar, problemet formuleras | Ingen |
| 7 | 🟠 Orange | Oskar ser underorganisations-fältet, insikt | Skärmhörn, ~4 % |
| 8 | 🟢 Grön | Underorganisation skapas, kopplad men åtskild | Skärmhörn |
| 9 | 🟢 Grön | Torgnys egen portalanvändare skapas | Skärmhörn, ~4 % |
| 10 | 🟢 Grön | Torgny ser bara sin egen anläggnings bokningar | Nedtonad |
| 11 | 🟢 Grön | Petra ser bara sina egna bokningar igen | Nedtonad |
| 12 | 🟢 Grön | Delad bild, båda trygga, Oskars skärm i inklipp | Datorskärm (inklipp), ~5 % |

**Instruktion till illustratören:** Använd **navichains officiella logga** (uppladdad som källfil i projektet) vid varje angiven placering ovan — aldrig en tolkad eller egenritad variant.
