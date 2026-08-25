# Binary Backfill Retry — 2026-08-23 23:46 +02:00

Story: `sandningen-som-visste-vart-den-skulle`
Repository: `HakanLundmark/-navichain-storyportal`
Branch: `main`
Protocol: `BINARY-BACKFILL-RETRY.md` at blob `f2a9bf7adb60d0c44adbbde48ae79a9448f2d365`.

## Re-inventory rule

Previous backfill metadata was used only as a recovery hint. Exact source files were rechecked against the current chat runtime. No image was rerendered, reconstructed, cropped, extracted from a collage, or substituted.

## Previous canonical source hints that are not directly accessible now

The source filenames currently recorded in `story.json` for the earlier canonical candidates are not present as exact files in the current runtime. They therefore remain `SOURCE_NOT_EXPORTABLE` for this retry and were not replaced by visually similar or older render attempts.

Affected earlier hints include `cover_00`, `panel_01`–`panel_10`, and `panel_12`. `panel_11` and `cta_13` were already recorded as missing. The `en-GB` locale has no verified canonical image originals directly accessible in this runtime.

## Newer directly accessible render after the earlier backfill

A later `panel_06` render produced in this same chat is directly accessible as the exact original binary:

- source file: `a_detailed_comic_style_illustration_panel_page_wi.png`
- byte size: `3132798`
- SHA-256: `059f5d9b24e3ec1fe4ababd063ceb31099857d95afb4ab6208f485e79210dee0`
- QA state: `REBUILD_REQUIRED` (story/brand divergence); publication would not make it PASS or canonical.

Other older visible render attempts remain superseded/rejected recovery artifacts and were not substituted for inaccessible canonical originals.

## Binary publication result

`GITHUB_PUBLISH_FAILED` before queue creation for the directly accessible `panel_06` original. The connected GitHub action exposes `create_blob(content, encoding)` but no mounted-file/file-reference parameter. In this execution environment there is no supported lossless tool-to-tool handoff that can pass the 3,132,798 exact PNG bytes from the mounted runtime file into `create_blob` without materialising the complete binary as literal base64 in the model tool payload. The protocol requires exact bytes and forbids reconstruction/substitution, so no partial/incomplete queue manifest was written.

No assembler workflow was started for this story in this retry. The canonical `sv-SE/images/` path was re-read and remains absent, so `githubPublishedBinaryAssets` remains 0 and no `SYNCED` status is claimed.

## Result

- `sv-SE`: `INCOMPLETE`, binary retry `GITHUB_PUBLISH_FAILED` for the directly accessible newer `panel_06` render; earlier canonical source hints are `SOURCE_NOT_EXPORTABLE` in the current runtime.
- `en-GB`: `INCOMPLETE`; no canonical original binary set directly accessible.
- `COMPLETE + SYNCED`: NO.
