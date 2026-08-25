# Retro Backfill v2 — Export QA

Story: `KRON-ELTEKNIK-10-VARNINGEN-SOM-KOM-FORE-VALET`  
Checked: `2026-08-24T17:27:00+02:00`

## Creative integrity

- No rerendering performed.
- No reconstruction performed.
- No cropping, restyling, generative filling or replacement performed.
- Provenance and QA state remain separate.
- Historical unknown/rejected/rebuild-required material was not promoted to PASS/LOCKED.

## Inventory

- Total inventory items: 120.
- EXACT_ORIGINAL files: 119.
- DERIVED_TRANSLATION: 1.
- CHAT_RECOVERED: 0.
- SOURCE_NOT_EXPORTABLE: 1 — the fully rewritten Product-Truth-corrected Narrative Master was discussed but never materialised as one exact coherent artifact.
- NOT_CREATED: 24.
- Current canonical visual sources: sv-SE 14/14; en-GB 4/14.
- Historical directly accessible chat-render candidates retained in the local historical package: 52.

## Narrative read-back

- `sources/original-story-sv-SE.md`: EXACT_ORIGINAL, SHA-256 `d3a7c116fc490a7687687604719f6a8065d288b629391b84d7e08d2cb0b5a269`, GitHub read-back PASS.
- `sources/original-story-en-GB.md`: DERIVED_TRANSLATION, faithful direct translation from sv-SE, SHA-256 `f82cf67a380d6a60ce244349a68e6cad0296817916f707545b987d371d6a0af7`, GitHub read-back PASS, not Narrative Master.

Both narrative artifacts retain QA `REBUILD_REQUIRED` because historical backfill does not repair the unsupported job-specific assignment-view compliance-marker claim.

## Local publish packages

All three ZIP packages were opened and `ZipFile.testzip()` returned no corrupt member.

1. `KRON-ELTEKNIK-10-VARNINGEN-SOM-KOM-FORE-VALET-sv-SE-retro-backfill-v2.zip`
   - 16 members
   - 110,942,186 bytes
   - SHA-256 `3d308f80ee48ce3201602226a86924cd5dacd552cdb45d00417cbe15977002a7`
2. `KRON-ELTEKNIK-10-VARNINGEN-SOM-KOM-FORE-VALET-en-GB-retro-backfill-v2.zip`
   - 5 members
   - 12,570,350 bytes
   - SHA-256 `0aafdf4b28a4d28d7c0a7e2002d1542699459c035377ac94805cbcaa2ed64bd9`
3. `KRON-ELTEKNIK-10-VARNINGEN-SOM-KOM-FORE-VALET-history-retro-backfill-v2.zip`
   - 100 members
   - 560,283,356 bytes
   - SHA-256 `0ce21abd2079bd0d1af56d95d104796f10a3da8935236b5e7e7ff0cfbb0c9e88`

Each package has a matching `navichain-local-publish-request-v1` JSON and a `.publish.zip` wrapper containing exactly one `.publish.json`.

## Binary transport result

`GITHUB_PUBLISH_FAILED` for the bulk historical binaries.

The exact source bytes remain directly accessible in the source runtime. The currently available assistant tool surface does not expose the configured Chrome download → local capture → Nextcloud archive → hardened router → publisher chain. Direct GitHub blob creation requires inline base64 instead of a local file reference; the multi-megabyte historical binary set cannot be safely marshalled through that interface without truncation. A small exact-source v2 queue probe was written, but remained in `backfill-binary-queue/` with no new assembler commit observed.

Therefore canonical GitHub image publication remains 0 and no binary is reported SYNCED.

## Final QA status

`PARTIAL_BACKFILL`

Narrative text publication/read-back: PASS.  
Metadata publication/read-back: PASS.  
Bulk binary publication/read-back: FAIL.  
Nextcloud/router/publisher verification: unavailable from current tool surface.  
Release completeness: INCOMPLETE.
