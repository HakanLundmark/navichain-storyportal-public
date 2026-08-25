## PREFLIGHT — **PASS MED MINDRE KORRIGERINGAR**

Storyn fungerar mycket bra som ACTIVE STORY. Kärnkonflikten är tydlig, Kaj förblir hjälten och Navichain används som beslutsunderlag snarare än autonom dispatcher. Den träffar dessutom exakt Market Truths kombination av **P09 störning/omplanering**, **P13 sjukfrånvarons kapacitetseffekt** och framför allt **P14 trafikledarens administrativa belastning**.

Product Truth stöder kärnan: förarprofiler innehåller bland annat körkortsklasser, ADR-typ/utgångsdatum och skift; Drivers-området har dokumenterade filter; en run kan ha flera förare och resursassignment ägs av runen. Det är också korrekt att användaren själv gör valet — dokumentationen stödjer inte autonom förartilldelning.

Jag skulle göra **fyra korrigeringar före Story Lock**.

1. **Panel 9–10: ändra notification-triggern.** Det är verifierat att förartilldelningsnotiser skickas när en run **blir Confirmed**, via organisationens konfigurerade kanal. Det är däremot inte uttryckligen verifierat att ett rent byte av förare på en redan Confirmed run automatiskt skickar samma notis. Gör därför morgonkörningen redan planerad och bemannad men ännu inte bekräftad.

   **Panel 9 revised:** Kaj byter Vidar mot Robban på körningen och **bekräftar körningen**.  
   **Bildtext:** *"Kaj valde Robban och bekräftade körningen."*

   **Panel 10 revised:** Robban får den konfigurerade tilldelningsnotisen.  
   **Bildtext:** *"När körningen bekräftades fick Robban beskedet direkt."*

2. **Panel 4 får inte vara ett collage.** Projektets produktionsregler förbjuder panelcollage som masterasset.

   Behåll panelens funktion men visa **en enda bred kontorsscen**: Kaj vid bordstelefonen, den överstrukna listan framför honom, flera handskrivna markeringar bredvid redan ringda namn och tre synliga klockslag på exempelvis skrivbordsklocka, väggklocka och en anteckning. Ett avvisande telefonsvar pågår just nu, medan tidigare misslyckanden syns genom överstrykningar och korta marginalnoteringar: ”ADR”, ”skift”, ”inget svar”.

3. **Tidslinjen 08:00 behöver definieras som avgång/körstart, inte leverans hos kund.**

   Minsta ändringen är:
   - Panel 1 kalender: **”08:00 — AVGÅNG”**
   - Bildtext: **”05:40. Vidar var sjuk. Körningen skulle lämna gården klockan åtta.”**
   - Panel 5 kalender: **”08:00 — AVGÅNG”**
   - Panel 11: Robban är färdiglastad och rullar ut 07:52.
   - Bildtext: **”07:52. Körningen rullade ut enligt plan.”**

4. **Teasern får inte visa en automatisk försäkringsnotis.** Product Truth stöder försäkrings-/compliance-datum på fordonsprofilen, färgkodning och filter för försäkring, men inte här ett specifikt automatiskt ”försäkringen går snart ut”-larm.

   Ändra teasern till att Kaj, när han stänger skärmen, kort ser **en bärnstensmarkerad försäkringsrad med ett närmande utgångsdatum**.

### Ändringslogg

| Original | Revised | Reason |
|---|---|---|
| Omtilldelning → automatisk notis | Byt förare → Kaj bekräftar run → konfigurerad tilldelningsnotis | Notification-triggern är dokumenterad vid Confirmed |
| Panel 4 med tre smårutor | En sammanhållen scen med visuella spår av flera misslyckade samtal | Masterpanel-collage är förbjudet |
| ”Leverans 08:00” + avfärd 07:52 | ”Avgång 08:00” + avfärd 07:52 | Tar bort tidsmässig motsägelse |
| Automatisk notis om försäkring | Synlig bärnstensmarkerad försäkringsgiltighet | Expiry-display/filter är verifierat; specifik auto-notis är inte etablerad |

### Story Lock-bedömning

**Reality Validation: PASS efter ovanstående korrigeringar.**  
**Product Truth: PASS efter ovanstående korrigeringar.**  
**Story isolation: PASS.**  
**Human-as-hero: PASS.**  
**Visual direction: PASS med panel 4-revisionen.**  
**Story Lock: REKOMMENDERAS.**
