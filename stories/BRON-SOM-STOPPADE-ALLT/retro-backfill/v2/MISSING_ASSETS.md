# RETRO BACKFILL v2 — MISSING / SOURCE NOT EXPORTABLE

Story ID: `BRON-SOM-STOPPADE-ALLT`  
Master version: `1.0`  
Narrative Master: `sv-SE`

## sv-SE

Canonical visual files `cover_00`, `panel_01`–`panel_12`, `cta_13` are all directly available as exact historical JPG artifacts. The 14-page PDF carousel is also directly available.

The following historical release/support artifacts are not directly recoverable as their original files and were not reconstructed:

- historical LinkedIn/social copy file — `SOURCE_NOT_EXPORTABLE`
- standalone raster release-QA file — `SOURCE_NOT_EXPORTABLE`
- standalone PDF release-QA file — `SOURCE_NOT_EXPORTABLE`
- standalone release manifest — `SOURCE_NOT_EXPORTABLE`
- standalone story-specific Reality Validation report — `SOURCE_NOT_EXPORTABLE`
- standalone Story DNA / Continuity / lock files created only in conversation context — `SOURCE_NOT_EXPORTABLE`

The preflight corrections that survive in the canonical `ORIGINAL_STORY.md` are preserved exactly; no missing standalone report was fabricated.

## en-GB

A faithful text translation of the Narrative Master is created in this backfill as `DERIVED_TRANSLATION`. It is not a new Narrative Master and not a new visual build.

Historical en-GB render attempts are preserved under `en-GB/wip/` and `retro-backfill/v2/historical-renders/` with their actual QA state where known.

Canonical visual release gaps:

- `cover_00`, `panel_01`–`panel_11`: WIP/candidates exist, but no approved/locked canonical locale image is directly exportable as such — `SOURCE_NOT_EXPORTABLE` for canonical release identity; WIP binaries are separately `EXACT_ORIGINAL`.
- `panel_12`: `NOT_CREATED`
- `cta_13`: `NOT_CREATED`
- en-GB PDF carousel: `NOT_CREATED`
- en-GB LinkedIn/social: `NOT_CREATED`
- en-GB release QA/manifest/ZIP: `NOT_CREATED`

## Transport-chain limitation

The repository contains the `binary-backfill-assembler.yml` and `mobile-binary-import.yml` workflows, but this assistant session has no callable Chrome download bridge, Nextcloud/WebDAV connector, hardened local router, or Navichain publisher action. The available GitHub connector can create binary Git blobs only from inline content and cannot accept local file paths; the mobile import workflow requires a direct HTTPS package URL. Therefore this run cannot truthfully claim that the large exact binaries traversed ChatGPT → Chrome → local capture → Nextcloud → router → publisher → GitHub.

No rerendering, screenshot recovery, PDF extraction, cropping, or invented replacement was performed.
