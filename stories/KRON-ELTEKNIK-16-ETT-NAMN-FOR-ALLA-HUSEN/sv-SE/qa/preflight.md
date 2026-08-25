# Preflight QA snapshot

Story: `KRON-ELTEKNIK-16-ETT-NAMN-FOR-ALLA-HUSEN`

Result from this chat: Reality Validation PASS, Product Truth PASS, Story Relevance PASS, with minor claim-safe corrections before Story Lock.

## Product-grounding corrections recorded in chat

1. Panel 4 caption: `Rätt summa, fel avsändarnamn för dem som skulle betala den.` → `Rätt summa, fel företagsnamn för dem som skulle betala den.` Reason: customer invoice identity, not sender identity.
2. Panel 5 wording about agreed terms → wording limited to recognizing the buildings as parts of the same customer relationship. Reason: Product Truth does not establish automatic inheritance of terms/pricing from parent to subsidiaries.
3. Panel 10 causal mechanism revised: the hierarchy helps Cornelia see the parent relationship and select the correct customer organization before booking creation; the story must not claim that the hierarchy automatically routes invoices to the parent organization.
4. Panel 10 caption revised to: `Rätt kundnamn — därför att sammanhanget äntligen gick att se innan bokningen skapades.`

## Product Truth boundary

Supported: organization records hold a parent and organization details show subsidiaries together with related operational information.

Not claimed: automatic duplicate detection, automatic suggestion that two organizations belong together, automatic inheritance of pricing/terms, or automatic invoice routing solely because a parent/child hierarchy exists.

## Visual QA state

No release QA PASS exists. The currently accessible `cover_00` is REBUILD_REQUIRED. Three currently accessible later image-generation outputs are MULTI_ASSET_RENDER artifacts and cannot be canonical masters. A previously produced standalone `panel_09` is no longer directly exportable and had already been marked REBUILD_REQUIRED.
