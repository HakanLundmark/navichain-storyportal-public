# Historisk PREFLIGHT / korrigeringslogg — DEN SOM REDAN VAR NÄRMAST

Detta dokument återger de korrigeringar som accepterades i chatten före bildproduktionen. Det är ett historiskt backfill-artefakt, inte en ny kreativ revision.

1. **Fleet Map-formulering**
   - Original: Fleet Map visar servicebilarnas “faktiska position i realtid”.
   - Reviderat: Fleet Map visar rapporterad/aktuell fordonsposition.
   - Skäl: Product Truth dokumenterar position från rapporterande enheter och polling; ingen claim om omedelbar push.

2. **Bakgrunds-GPS**
   - Original: Bakgrunds-GPS beskrevs som orsaken till att servicebilen visas i Fleet Map.
   - Reviderat: Kron Eltekniks servicebilar har kopplade rapporterande telematikenheter; Fleet Map visar deras senast rapporterade position.
   - Skäl: Fleet Map och mobilens background GPS är separata dokumenterade beteenden och ska inte bindas ihop utan stöd.

3. **Alla nio fordon**
   - Reviderad storyförutsättning: Kron Elteknik har nio aktiva servicebilar och samtliga nio har fungerande kopplad telematik och rapporterad position i scenen där alla nio visas.

4. **Fordon kontra tekniker**
   - Reviderad kontinuitetsförutsättning: Rasmus och Daniel befinner sig med sina tilldelade servicebilar när akutärendena dispatchas.
   - Skäl: Fleet Map lokaliserar fordon, inte en abstrakt personresurs.

5. **45 minuter kontra 10 minuter**
   - Klassning: PLAUSIBLE_FICTION för storyns fiktiva incident, inte ett generellt Navichain-prestandalöfte.

6. **Panel 12 operativ logik**
   - Original: Yvonne tittar på kartvyn innan hon ens svarar i telefon.
   - Reviderat: När kunden har uppgett adressen går hennes blick rutinmässigt till Fleet Map.
   - Skäl: närmaste fordon kan inte bedömas innan destinationen är känd.

7. **Panel 7-dialog**
   - Original: “Bilarna rapporterar ju redan var de är. Varför ringde du runt istället för att titta?”
   - Reviderat: “Bilarna syns ju redan på kartan. Varför ringde du runt istället för att titta?”
   - Skäl: håller dialogen på verifierad displaynivå.

Historiskt beslut i chatten: Reality Validation PASS efter minimala korrigeringar; Product Truth PASS WITH DOCUMENTATION LIMIT; storyn kunde låsas som version 1.0.
