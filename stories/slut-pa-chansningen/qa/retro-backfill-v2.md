# Retro Backfill v2 QA — SLUT PÅ CHANSNINGEN

Checked: 2026-08-24T19:39:00+02:00
Repository target: `HakanLundmark/-navichain-storyportal` / `main`

## Source boundary
- No image was rerendered.
- No image was reconstructed, cropped, restyled, filled in or replaced.
- PDF render-back pages are QA derivatives only and are not used as original images.
- No CHAT_RECOVERABLE asset was created because no project recovery rule was found that authorizes converting a visible chat rendering into new bytes.

## Canonical source availability
- sv-SE: 13/14 direct original candidate binaries. `cover_00` is SOURCE_NOT_EXPORTABLE. `panel_11` is directly exportable but REBUILD_REQUIRED.
- en-GB: 9/14 direct original candidate binaries. `cover_00`, `panel_07`, `panel_08`, `panel_09` are SOURCE_NOT_EXPORTABLE; acceptable `cta_13` is NOT_CREATED.

## Historical archive inventory
- EXACT_ORIGINAL entries: 107
- DERIVED_TRANSLATION entries: 1
- CHAT_RECOVERABLE entries: 0
- SOURCE_NOT_EXPORTABLE entries: 15
- NOT_CREATED entries: 3

## PDF
The existing Swedish carousel is preserved byte-for-byte. Prior QA recorded 14 pages, consistent page size and QR decode to `https://navichain.se/signup`. PDF pages are not promoted as source images.

## Branding
Current Brand Asset Enforcement requires every visible Navichain logo to trace to the canonical logo binary. Historical image-generation outputs are archived unchanged even where this now causes `REBUILD_REQUIRED`; historical archival provenance is not a release approval.

## Current Product Truth delta
The current Product Truth does not support treating run route calculation/optimization as autonomous dispatch and states routes do not automatically recalculate after every change. Historical `panel_10` therefore requires Product Truth revalidation for a future release. The historical story is not silently edited during backfill.

## Automatic transport
The requested Chrome → local capture → Nextcloud → router → publisher chain cannot be executed from this chat because no Chrome/local-capture/Nextcloud write surface is exposed. This is recorded as `BLOCKED_AT_CHATGPT_TO_CHROME`, not as a successful archive.

## GitHub binary status
The GitHub connector is available for text reads/writes, but the current binary connector accepts only inline base64 for `create_blob` and no mounted-file binary parameter. These multi-megabyte originals cannot be transferred exactly through that surface without truncation. Binary status remains `GITHUB_PUBLISH_FAILED`; no false queue manifest is emitted.

## Release gate
Both locales remain INCOMPLETE. This archive may be imported historically, but neither locale is COMPLETE + SYNCED.
