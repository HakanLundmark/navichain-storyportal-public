# Retro Backfill v2 — Export QA

Story: `facit-kom-en-manad-for-sent`  
Narrative Master: `sv-SE`  
Checked: 2026-08-24T22:06:00+02:00

## Source integrity

- Rerendered: NO
- Reconstructed: NO
- Cropped: NO
- Substituted: NO
- Provenance and historical QA status kept separate: YES
- Exact original historical render binaries directly verified in current runtime: **16**
- CHAT_RECOVERED: **0**
- Current canonical asset slots with an exact historical candidate: **8 / 14** (`cover_00`, `panel_01`–`panel_07`)
- Canonical slots NOT_CREATED: **6** (`panel_08`–`panel_12`, `cta_13`)

The complete per-file size, dimensions, SHA-256, provenance and QA ledger is in `retro-backfill-v2-inventory.json`.

## Narrative

- `ORIGINAL_STORY.md`: EXACT_ORIGINAL, 10,936 bytes, SHA-256 `c936c52debffefd467f86386bdef6ae8d6e1e5ceb50f10da114db96911eafe2e`; GitHub read-back verified.
- `ORIGINAL_STORY.en-GB.md`: DERIVED_TRANSLATION, faithful direct translation from sv-SE, 11,296 bytes, SHA-256 `bab79e61a97da9ea7bf850025ebd3961b4791008c49dfb1e077c20a467bdccae`; not Narrative Master; GitHub read-back verified.

## Local packages

All ZIPs were opened and tested; package manifests were checked against contained files, sizes and SHA-256 values.

- Historical archive: `facit-kom-en-manad-for-sent-retro-backfill-v2-archive.zip` — 86,200,693 bytes — SHA-256 `31b586bc33b32920624bf5b2544dfa547a6517603561ef684ade8a6d94a70d2c`
- sv-SE publish package: `facit-kom-en-manad-for-sent-sv-SE-retro-backfill-v2-package.zip` — 74,896,148 bytes — SHA-256 `3c46fcf16e3d93ff8afa1627355ae4b739cd8a6a91a337228f7043714ff56f5f`
- sv-SE publish request: `facit-kom-en-manad-for-sent-sv-SE.publish.json` — SHA-256 `31219999cfdf77a3797ff7856dc9f195d9d60d962f08084ff48b2ecb5c7928f7`
- sv-SE request wrapper: `facit-kom-en-manad-for-sent-sv-SE.publish.zip` — SHA-256 `31d6ed28b41ee904c41169d53efd829bdbaae2a3a4f1478170d1afd93f4eb1f7`
- en-GB text package: `facit-kom-en-manad-for-sent-en-GB-retro-backfill-v2-package.zip` — 5,167 bytes — SHA-256 `42ee48af7d02c86a640d80d19512b14742ab9374e17b4b8169926326bb59aec9`
- en-GB publish request: `facit-kom-en-manad-for-sent-en-GB.publish.json` — SHA-256 `04d106fecba1ce3f5f88d8300a51c0cffd5802ec8661f18cc4f2ca633775af44`
- en-GB request wrapper: `facit-kom-en-manad-for-sent-en-GB.publish.zip` — SHA-256 `f92d0c6e2ee4dbc80bd139c405823248b01c148705126839729dc6c214b9ed4e`

## Automatic transport

Requested chain: ChatGPT → Chrome download → local capture → Nextcloud archive → hardened router → publisher → GitHub.

Result: **BLOCKED_AT_CHATGPT_TO_CHROME**. This conversation runtime exposes no callable Chrome download/local-capture/Nextcloud/hardened-router/publisher action, and plugin discovery returned no Nextcloud connector. The GitHub blob tool accepts inline text/base64 rather than a local file path; byte-exact transfer of the multi-megabyte originals through that surface cannot be guaranteed. No partial, transcoded, reconstructed or substituted binary was published.

- Nextcloud archive: NOT_EXECUTED_NO_CONNECTED_WRITE_SURFACE
- GitHub-published historical PNG binaries: 0
- Binary failure class: GITHUB_PUBLISH_FAILED

## Release status

This is a historical archive/backfill, not a release. The locale remains **INCOMPLETE**. Historical `REBUILD_REQUIRED`, `REJECTED` and `UNKNOWN` QA states were not upgraded by archival packaging.
