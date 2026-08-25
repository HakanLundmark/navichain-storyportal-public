# RETRO BACKFILL v2 — INGEN LÖSEN ATT KRÄVA

Checked: 2026-08-24T19:35:00+02:00

**FINAL STATUS: PARTIAL_BACKFILL**

No visual asset was rerendered, reconstructed, cropped, restyled, filled in or replaced.

## Narrative

- `sources/original-story-sv-SE.md`: `EXACT_ORIGINAL`, Narrative Master, SHA-256 `28f056cf5f84d2984b2c02ef5f571cd6440f0f63c476b200ee89c7930aba7ea1`, GitHub read-back PASS.
- `sources/original-story-en-GB.md`: `DERIVED_TRANSLATION`, direct faithful translation from sv-SE, `narrativeMaster:false`, SHA-256 `da2d1f90097cc056217b48aa228dbd4b97b35566e584392d7f01fb6535d01e8d`, GitHub read-back PASS.

## Canonical sv-SE visuals

The historical release manifest proves exactly 14 canonical PASS rasters, all 1055×1491, plus a 14-page PDF with QR decode PASS. The final canonical raster/PDF/ZIP bytes are not accessible in the current runtime and the final renders are not directly exposed in the current chat surface. Current recovery result is therefore `SOURCE_NOT_EXPORTABLE`; historical QA remains `PASS`.

Two older noncanonical historical candidates are exact-byte accessible now and have been captured locally without transformation:

- cover candidate: 3,138,039 bytes, 1536×1024, SHA-256 `c605efb4dc8b0fd9a491edf1f980e16357c2fe2ec9fc0ea7b9890c2164a6022a`, provenance `EXACT_ORIGINAL`, QA `NOT_RELEASE_READY`.
- panel_01 candidate: 2,667,367 bytes, 1087×1447, SHA-256 `e905c60258b3d46608434edbd4eff3fa11906afa1d62bf7bc60944cbcbffc070`, provenance `EXACT_ORIGINAL`, QA `NOT_RELEASE_READY`.

They are not substituted for the later canonical PASS assets because their dimensions and hashes differ from the release manifest.

## en-GB visuals

- cover_00 historical candidate: `SOURCE_NOT_EXPORTABLE`, historical QA `REJECTED`, SHA-256 `22e50c1a1c1e9410c956a57c80c233c1a100516b2e2247a3226cd6f1afaa1f4f`.
- panel_01 historical candidate: `SOURCE_NOT_EXPORTABLE`, historical QA `REBUILD_REQUIRED`, SHA-256 `8198edbbbcb6ee744dea827baa4fbbe2ae827a6d23c33ec11aec8cecfd87478c`.
- panel_02–panel_12 and cta_13: `NOT_CREATED` / no reliable creation evidence.

## Exact current reference sources

Official Navichain logo, validated signup QR, three Visual Calibration References, Product Truth and Market Truth are directly accessible exact files and were checksummed into the local archive. They remain reference/source assets, not substitutes for story panels.

## Local export packages

- `ingen-losen-att-krava-retro-v2-archive-20260824T1935.zip` — 16,965,743 bytes — SHA-256 `c018b3aaa6ac5c1bb78336ab8853b07e91bc983b0427f031ed9bee0d0b28b816`.
- `ingen-losen-att-krava-sv-SE-retro-v2-publish-package-20260824T1935.zip` — 6,115,824 bytes — SHA-256 `c77d69dfcb5b2c8bbb6f26cda32d1a955fe6c46363d2928e2db86328c5d1e2b6`.
- `ingen-losen-att-krava-sv-SE.publish.json` — SHA-256 `70eb1f91230546565a03b106b3d8c0fe98cb901beeed7c2b4b3470f8d34fc339`.
- `ingen-losen-att-krava-sv-SE.publish.zip` — SHA-256 `cab7844002a89dff10a5cc598f0194e93646d57b08a84b4d9e182b656576e750`.

## Transport / GitHub

The requested Chrome → local capture → Nextcloud → hardened router → publisher chain is not callable from this runtime; no Nextcloud archive is claimed.

A real GitHub binary-assembler queue manifest was written for the exact canonical Navichain logo using pre-existing verified Git blob chunks with the same file SHA-256. Queue read-back passed, but the assembler did not process the queue and the intended target still read back as 404. This binary attempt is therefore `GITHUB_PUBLISH_FAILED`, not SYNCED.

Canonical story/image publication state is not upgraded. `githubPublishedBinaryAssets` remains 0 for the canonical visual set.

Detailed current run metadata: `metadata/retro-backfill-v2-20260824T1935.json`.
