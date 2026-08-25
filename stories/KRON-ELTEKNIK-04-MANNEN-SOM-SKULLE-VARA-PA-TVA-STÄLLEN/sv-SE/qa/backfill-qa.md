# Backfill QA — sv-SE

Story ID: `KRON-ELTEKNIK-04-MANNEN-SOM-SKULLE-VARA-PA-TVA-STÄLLEN`  
Locale: `sv-SE`  
Backfill time: `2026-08-23T10:46:00+02:00`

## Classification

**INCOMPLETE**

The chat now contains an exportable produced image for every required asset slot (`cover_00`, `panel_01`–`panel_12`, `cta_13`). That is **14/14 source-slot files exportable**, with no `EXISTS_BUT_NOT_EXPORTABLE` slot.

This does **not** make the locale a complete release. The project requires approved/locked release masters and the release components PDF + social copy + QA/manifest/package. Several produced images were explicitly identified in this chat as wrong-story/underkända, and the latest CTA-like output is also not established as a release-qualified CTA.

## Required 14-asset source check

- `cover_00`: EXISTS_AND_EXPORTABLE — release qualification not established
- `panel_01`: EXISTS_AND_EXPORTABLE — release qualification not established / product-story drift present in produced variants
- `panel_02`: EXISTS_AND_EXPORTABLE — release qualification not established
- `panel_03`: EXISTS_AND_EXPORTABLE — release qualification not established
- `panel_04`: EXISTS_AND_EXPORTABLE — release qualification not established
- `panel_05`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `panel_06`: EXISTS_AND_EXPORTABLE — release qualification not established
- `panel_07`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `panel_08`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `panel_09`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `panel_10`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `panel_11`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `panel_12`: EXISTS_AND_EXPORTABLE — wrong-story/underkänd produced variants exist
- `cta_13`: EXISTS_AND_EXPORTABLE — source file `se_krocken_innan_den_händer.png`; **UNDERKÄND_NOT_RELEASE_MASTER**

Required source asset slots exportable: **14/14**.  
Missing source slots: **none**.  
EXISTS_BUT_NOT_EXPORTABLE: **none**.

## Other release components

- `ORIGINAL_STORY.md`: EXISTS_AND_EXPORTABLE and already published
- PDF carousel: MISSING
- LinkedIn/social copy: MISSING
- complete release QA: MISSING
- release manifest: MISSING
- release ZIP: MISSING
- other locales: MISSING

## Latest CTA-source note

`se_krocken_innan_den_händer.png` is directly accessible and therefore inventoried as an exportable source artifact. It is not promoted to release master because its depicted claim/flow does not satisfy the validated story/product constraints and its brand-critical Navichain logo is not established as deterministic compositing from the official source file.

## Backfill decision

No image was regenerated, reconstructed, cropped from a collage, or extracted from a PDF during this backfill. No incomplete locale is represented as COMPLETE. Because the locale is INCOMPLETE, no complete release image directory or release ZIP is published.
