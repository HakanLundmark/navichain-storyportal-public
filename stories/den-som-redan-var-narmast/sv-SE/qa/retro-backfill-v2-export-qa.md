# RETRO BACKFILL v2 — Export QA

Story: DEN SOM REDAN VAR NÄRMAST  
Story ID: den-som-redan-var-narmast  
Locale: sv-SE  
Master version: 1.0

## Source/recovery QA

- 14/14 canonical sv-SE image files are directly accessible as exact original bytes.
- Byte identity was verified with `cmp` between the selected canonical files and their original image-generation runtime files.
- SHA-256 and file size were calculated for each canonical image.
- 21 additional historical render attempts are directly accessible as exact original bytes and preserved separately.
- No image was rerendered, reconstructed, cropped, restyled or replaced for this backfill.
- Narrative source was recovered from the actual source-story text present in the chat/backfill artifact; no byte-identity claim is made against the original chat message serialization.
- en-GB source story is a faithful direct translation and is not a Narrative Master.

## Historical visual QA

The earlier QA artifact explicitly marked these canonical slots `REBUILD_REQUIRED`:

- panel_07
- panel_09
- panel_10
- panel_11
- panel_12
- cta_13

Other canonical assets remain `UNKNOWN` unless a historical QA state was actually recorded. Backfill publication must not upgrade them.

Current brand rules also block release of historical images containing generated pseudo-Navichain branding. Historical preservation is allowed; release eligibility remains separate.

## Completeness

- sv-SE canonical image inventory: COMPLETE at the source/runtime level (14/14 exportable).
- sv-SE release QA: NOT PASSED.
- en-GB narrative text: present.
- en-GB visual locale: INCOMPLETE / NOT_CREATED.
