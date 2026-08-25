# Preflight review — Kalibreringen som inte fick vänta

ACTIVE STORY uppdaterades till **Ferm Mobilkran AB, avsnitt 4 — “Kalibreringen som inte fick vänta”**.

Preflight identifierade en Product Truth-justering före Story Lock: Equipment stöder verifierat spårning/visning av underhåll, garanti och kalibrering, men källorna verifierar inte att ett kalibreringsfält automatiskt färgväxlar gul → röd → grön utifrån datum. Capabilityn är DISPLAY / REPORTING. Work Orders för equipment, verkstad/datum samt workshopkatalog med kontaktuppgifter och timpris är verifierade.

Rekommenderad minsta korrigering: behåll gul→röd→grön som visuell dramaturgi men presentera inte färgerna som verifierad automatisk Navichain-logik. Panel 6 bör inte hävda att det gula fältet automatiskt blivit rött, och panel 10 inte att systemet automatiskt gjort det grönt.

Panel 8 bör också preciseras: Work Order kan kopplas till equipment och innehålla workshop/datum; Workshops har kontaktuppgifter och timpris. Det är däremot inte verifierat att telefonnummer och timpris automatiskt fylls i i arbetsordern när verkstad väljs.

Ändringslogg:
- “gult fält → rött fält → grönt fält” → “kalibreringsdatum närmar sig → datum passerat → nytt registrerat kalibreringsdatum” → färgautomatik saknar Product Truth-stöd.
- “telefonnummer och timpris redan ifyllt” → “verkstad väljs från katalogen där kontaktuppgifter och timpris finns” → katalogen är verifierad, automatisk fältkopiering är inte det.

Status: **PASS WITH MINOR REVISIONS**. Ingen korrigering förändrar protagonist, kärnkonflikt eller affärsbudskap.