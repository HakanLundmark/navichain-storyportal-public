# Retro Backfill v2 — read-back verification

Story: `NC-INGET-ATT-DOLJA` — **INGET ATT DÖLJA — Åsa & kundportalen**  
Run: `2026-08-24T22:21:00+02:00`  
Repository: `HakanLundmark/-navichain-storyportal`  
Branch: `main`

## Execution rules

- No rerendering performed.
- No visual reconstruction, redraw, restyle, crop-from-PDF, screenshot substitution or generative replacement performed.
- Provenance and QA were kept separate.
- Existing Story Truth was not modified.

## Source/runtime re-inventory

Current `/mnt/data` contains no story-specific `cover_00`, `panel_01`–`panel_12`, `cta_13` image binary and no `inget_att_dolja_sv-SE_pdf_karusell.pdf` binary. The only image binaries exposed there are project-global reference inputs: official logo, validated signup QR and the three Visual Calibration references.

No individual historical INGET ATT DÖLJA render is directly exposed to the assistant as an unambiguous visible raster in this source chat/tool surface. Therefore CHAT visual recovery cannot be used in this run.

## GitHub read-back

- Narrative Master: `stories/NC-INGET-ATT-DOLJA/ORIGINAL_STORY.md` — present, 7,469 bytes, source class `EXACT_ORIGINAL`; stored SHA-256 `7c121a6ee26d4d870dd468cc9f8bd7d18a8befc512db5af47540915a1d7abc96`.
- en-GB faithful translation: `stories/NC-INGET-ATT-DOLJA/source/original-story-en-GB.md` — present, 8,037 bytes, source class `DERIVED_TRANSLATION`, `narrativeMaster: false`; stored SHA-256 `c79ce996890bafcd0dc01f6aff71d2aa7dcc1cbdf042e1f3e551915ad021ee10` and sourceStorySha256 matches the Narrative Master.
- sv-SE LinkedIn copy: `stories/NC-INGET-ATT-DOLJA/sv-SE/social/linkedin-sv-SE.txt` — present, source class `EXACT_ORIGINAL`, QA `UNKNOWN`; stored SHA-256 `c536b86a07e1118e68b44ad69f95e87f716018743e7c4f381197e12443a4b855`.
- `story.json`, `stories/index.json`, `MISSING_ASSETS.md`, `qa/retro-backfill-v2.json` and both locale backfill manifests were read back and agree on the current incomplete state.

## Historical visual/binary classification

### sv-SE

All 14 canonical image slots (`cover_00`, `panel_01`–`panel_12`, `cta_13`) are `SOURCE_NOT_EXPORTABLE` in this run. Historical per-asset QA remains `UNKNOWN`.

The sv-SE PDF is `SOURCE_NOT_EXPORTABLE`; historical QA evidence only establishes 14 pages in canonical order and CTA QR decoding to `https://navichain.se/signup` (`PARTIAL_QA_VERIFIED`).

### en-GB

`cover_00`, `panel_01`, `panel_02` are `SOURCE_NOT_EXPORTABLE`, QA `UNKNOWN`. `panel_03`–`panel_12` and `cta_13` are `NOT_CREATED` as valid canonical assets. The en-GB PDF and social output are `NOT_CREATED`.

Historical divergent/rejected en-GB attempts remain acknowledged as `SOURCE_NOT_EXPORTABLE` with QA `REJECTED`; they were not guessed into canonical slots.

## Automatic transport

Requested chain: `ChatGPT → Chrome download → local capture → Nextcloud archive → hardened router → publisher → GitHub`.

Current execution environment exposes the GitHub repository but no callable Chrome download bridge, local-capture connector, Nextcloud write connector, hardened-router connector or publisher connector. Plugin discovery also returned no Nextcloud plugin. The automatic transport entry point therefore cannot be executed from this runtime. No claim is made that Chrome/local capture/Nextcloud/router/publisher ran.

Because there are no currently exportable historical visual/PDF binaries, no binary queue manifest was created. Existing text/metadata had already been published to GitHub; this run uses the connected GitHub integration only to write this verification record and then read it back.

## Result

- Narrative Master: `GITHUB VERIFIED`.
- en-GB story: `GITHUB VERIFIED` as faithful `DERIVED_TRANSLATION`, not Narrative Master.
- Historical canonical visual binary backfill: `SOURCE_NOT_EXPORTABLE` for all 14 sv-SE assets and 3 en-GB assets; 11 en-GB canonical assets were `NOT_CREATED`.
- Metadata consistency: `PASS`.
- Release status remains `INCOMPLETE`.
- Final retro-backfill status: `PARTIAL_BACKFILL`.
