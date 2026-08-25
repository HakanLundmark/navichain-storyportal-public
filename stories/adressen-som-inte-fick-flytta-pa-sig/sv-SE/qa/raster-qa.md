# QA - sv-SE working package

Story: ADRESSEN SOM INTE FICK FLYTTA PÅ SIG
Locale: sv-SE

## Resultat

**RELEASE BLOCKED**

Återfunna rasterassets: 12/14.

Saknade rasterkällor i aktiv runtime:
- panel_05.png
- panel_12.png

De två bilderna renderades tidigare i konversationen men deras lokala filnamn `imagegen.png`
återanvändes senare och den aktiva runtime-kopian skrevs över. För att inte ersätta dem med
fel bild eller dubblett är de medvetet inte förfalskade i detta paket.

CTA-raster finns med som `cta_13.png`, men den bildgenererade QR-koden kan inte avkodas
maskinellt i den aktiva filen. Den verifierade käll-QR:n avkodas däremot korrekt till:
https://navichain.se/signup

Därför har ingen 14-sidig release-PDF skapats i detta arbets-/återställningspaket.
