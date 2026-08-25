# Retro Backfill v2 QA — den-enda-kedjan-utan-svaga-lankar

**Final status:** PARTIAL_BACKFILL

## Provenance / QA separation

Historical source provenance and historical QA were kept separate. No historical visual was upgraded to PASS or LOCKED because it was archived. No missing creative asset was rerendered, reconstructed, cropped from a PDF, screenshotted, restyled or replaced.

## Narrative

- sv-SE Narrative Master: EXACT_ORIGINAL, GitHub path `stories/den-enda-kedjan-utan-svaga-lankar/ORIGINAL_STORY.md`, Git blob `4396ccf8323364a01461ce8406cd6d1fa7c74925`, size 11445 bytes, read-back PASS.
- en-GB story: DERIVED_TRANSLATION, faithful/direct from sv-SE, `narrativeMaster: false`, SHA-256 `b932811093e8e0322f5bc6d1c7f152d10f10313df94b47c2cb27f3c753373591`, GitHub read-back PASS.

## Canonical sv-SE visual slots

- EXACT_ORIGINAL directly accessible: 13/14 (`cover_00`, `panel_01`–`panel_12`).
- SOURCE_NOT_EXPORTABLE: `cta_13`. Prior inventory proves a historical standalone CTA was referenced, but the standalone original bytes are not currently available. PDF extraction or reconstruction was not used.
- CHAT_RECOVERED: 0. No applicable CHAT-VISUAL-RECOVERY procedure was found and no screenshot/PDF recovery was substituted.

Historical QA preserved:
- cover_00: UNKNOWN_APPROVAL
- panel_01: UNKNOWN_APPROVAL
- panel_02–panel_06: REBUILD_REQUIRED_story_logo_rule_violation
- panel_07–panel_10: UNKNOWN_APPROVAL
- panel_11–panel_12: REBUILD_REQUIRED_wrong_story_scene
- cta_13: REBUILD_REQUIRED_brand_critical_logo_not_deterministic

## Historical derived assets

Two exact historical 14-page PDF builds are locally archived:
- v0.10 — 72,883,282 bytes — SHA-256 `9e4cc610461f373b766b4bd1d10a924c2c45b0d157f3675c662520a03f66966c`
- v0.9 — 71,168,380 bytes — SHA-256 `a751c8bdf213f20854be2aba0a6c99b799b8a3ba4c4392ff4bbb81659f726dfe`

The historical archive also retains 22 exact render candidates, 14 PDF read-back QA rasters and 3 analysis montages with their actual historical/analysis QA classifications. These are not promoted to canonical master assets.

## Automatic transport / GitHub binary result

The requested automatic transport could not be completed from this assistant session because no Chrome-download/Nextcloud write surface is connected. The repository contains hardened binary workflows, but the local packages cannot be exposed as a direct HTTPS source to those workflows from the available tool surface. The GitHub connector also exposes no local-file binary upload argument.

Therefore:
- Nextcloud archive: NOT_EXECUTED_NO_CONNECTED_WRITE_SURFACE
- GitHub binary publication: GITHUB_PUBLISH_FAILED
- `sv-SE/images/` read-back: absent
- githubPublishedBinaryAssets: 0

Exact binaries were retained in local ZIP packages; they were not transcoded or substituted.

## Package verification

Full historical archive ZIP:
- `den-enda-kedjan-utan-svaga-lankar-retro-backfill-v2-20260824.zip`
- 446,264,659 bytes
- SHA-256 `7d0ad3f60756f8f0bc5fa99ef7f7ad1eb2f54c3ef4c621e5bba0c1e7e999b9bb`
- ZIP integrity test: PASS

Publisher package ZIP:
- `den-enda-kedjan-utan-svaga-lankar-sv-SE-retro-v2-package.zip`
- 185,513,205 bytes
- SHA-256 `d87f76dffe6038a85add776dde82c6c510e95f8ff28cf45183e5c28c4a6ff7ae`

This historical backfill is not a release approval.
