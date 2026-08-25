# Retro Backfill v2 — final execution report

Story: `uppkopplad-utan-ett-enda-snitt`  
Narrative Master: `sv-SE`  
Final status: **PARTIAL_BACKFILL**

## Verified on GitHub main

- `source/original-story-sv-SE.md` is present and read back; provenance `EXACT_ORIGINAL`.
- `source/original-story-en-GB.md` is present and read back; provenance `DERIVED_TRANSLATION`, translation type `faithful`, `narrativeMaster=false`.
- Both narrative provenance sidecars are present.
- `story.json` is `PARTIAL_BACKFILL` and records 14 locally exact canonical visual slots but zero GitHub-published canonical visual binaries.
- `stories/index.json` contains the same `PARTIAL_BACKFILL` / zero-binary state.
- Retro-v2 summary and QA metadata are present and read back.

## Current historical visual candidate rule

The local publication package uses the latest actually generated source-chat candidate for each current slot. For `panel_04` that is `/mnt/data/teknikerns_svåra_offertbeslut.png`, SHA-256 `6f19486113d0754eaa7af1c1176d85cfab65077ce9186b1a631d5e0d1994f695`, with QA `REBUILD_REQUIRED`. The previously packaged panel_04 is preserved in the historical archive instead of silently replacing the newer candidate. Provenance and QA remain separate.

## Binary result

The source runtime contains exact historical bytes for the 14 current `sv-SE` canonical visual slots plus the historical PDF and many superseded/rejected historical candidates. They were packaged without rerendering, reconstruction, restyling or story-content cropping.

Binary publication is **GITHUB_PUBLISH_FAILED** in this execution. The ChatGPT tool surface exposes neither Chrome-download control nor Nextcloud/local-router/publisher actions, and the GitHub connector does not expose a mounted local-file parameter for the multi-megabyte binaries. A small exact-logo queue retry remained unassembled at GitHub read-back, and canonical image/PDF destinations were still absent.

No binary is reported `SYNCED`; no historical QA status is promoted.

## Local package checksums

- Complete historical export: `51b1ce660059c96f1bf865d2486558d80d3c97ff5c75737c3d638f314d5aebcf`
- Historical revisions archive: `1d72cd2c20947a56186778c9a85003bf266a74dd5e35267321007d87d0ae3846`
- sv-SE publisher package: `7419af938c660e0cba7182f36e7ebfdaeb076a9a41b9556fd176013dc53da8cf`
- en-GB text publisher package: `a21def871c643a5b29e8001ff9d64dd39d37ab03c05b5f254c4d9a4bbaf8417f`

Package/request ZIP integrity, archive names, file sizes and listed per-file SHA-256 values were verified locally before this report.
