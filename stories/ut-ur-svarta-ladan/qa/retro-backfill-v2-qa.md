# RETRO BACKFILL v2 QA — ut-ur-svarta-ladan

Generated/reconciled: 2026-08-24T22:21:00+02:00

## Scope
Historical recovery/export only. No rerendering, reconstruction, cropping, restyling, generative fill or replacement was performed.

## Narrative
- sv-SE Narrative Master: `EXACT_ORIGINAL`, size 10,376, SHA-256 `a7d3efcdefa34af22d951b44357cd4e3429bd699720a2b58390ea1887be1e466`, Git blob SHA-1 `3da4343bd9fa4077281732273b7f5d11ca944093`. The local bytes reproduce that Git blob SHA-1 exactly and GitHub main read-back is PASS.
- en-GB: `DERIVED_TRANSLATION`, direct faithful translation from sv-SE, `narrativeMaster=false`, size 10,497, SHA-256 `76ac78541b85ff396a8383eed1ad4fa8797eea04c827bd6cfe470c1c17939468`. GitHub main read-back and metadata read-back are PASS.

## Visual provenance
- 44 directly accessible story visual files were inventoried as exact current-runtime byte files: sv-SE 30, en-GB 10, de-DE 4.
- Canonical-slot identity is unambiguous for 7 sv-SE files, 6 en-GB files and 4 de-DE files. Other exact historical revisions/candidates are preserved separately and are not silently promoted to canonical release assets.
- Provenance does not imply visual QA PASS. Where a historical PASS/LOCKED record is not available, QA remains `UNKNOWN`.
- Three exact sv-SE multi-panel/composite render attempts are preserved only as historical rejected outputs and are not master sources.
- No PDF page was extracted to replace a missing raster original.

## Derived/historical outputs
- Exact sv-SE PDF bytes are directly accessible locally: `ut_ur_svarta_ladan_sv-SE.pdf`, 14 pages, SHA-256 `69f4e4d0888859727c2efd1885d72263a73f180808d38fec567815f2411b8e3b`.
- Exact en-GB PDF bytes are directly accessible locally: `out_of_the_black_box_en-GB.pdf`, 14 pages, SHA-256 `0bbc83fd61a041d2c8f437222c2d1f4802395b23ba58200e4c710a841e43369a`.
- Social copy and historical release ZIP bytes are not directly accessible and were not reconstructed.

## Local publish packages
- sv-SE historical backfill package: 98,460,564 bytes, SHA-256 `2328bf7a110a3db52e599572a89de59fda6fb05aa0d272f98d2955a8f24d8304`.
- en-GB historical backfill package: 85,317,264 bytes, SHA-256 `99feed0a472e28ffd1d49ff9ce8fb79a41b626d3997d3479d96508c3e82b2ba7`.
- de-DE historical backfill package: 14,077,020 bytes, SHA-256 `9e345ec39dc9d1522d5471bc5a15cbb3a67bc1d0f2b3257ca9579458c4bef889`.
- Source/reference package: 11,177,571 bytes, SHA-256 `b8912b00f13ccd832b39b2f61f0dcd3349814c5d5c1341cbb37e63bf1b839deb`.
- Each locale also has a `navichain-local-publish-request-v1` JSON and a ZIP wrapper containing exactly that request.

## GitHub / transport
- Narrative Master and en-GB text are published and read back from GitHub main.
- Canonical story images and historical PDFs remain `githubPublishedBinaryAssets=0`; no binary is labelled SYNCED.
- Exact binary source bytes are available locally, but the requested ChatGPT → Chrome download → local capture → Nextcloud archive → hardened router → publisher chain cannot be invoked from this chat because there is no controllable Chrome download surface and no connected Nextcloud/WebDAV write surface. The connected GitHub actions in this chat do not accept a local binary file path.
- An unsupported manual curl/`--once`/ad-hoc publisher workaround was not used.

## Release
This backfill is not a release. No locale is upgraded to COMPLETE, PASS or LOCKED merely because historical bytes were recovered or packaged. Final result remains `PARTIAL_BACKFILL` / binary publication `GITHUB_PUBLISH_FAILED`.
