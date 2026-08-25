# Retro Backfill v2 QA — VÅTT BLÄCK, TORRT BEVIS

Checked: 2026-08-24T17:26:00+02:00

- Narrative Master: canonical sv-SE file verified by Git blob identity and SHA-256 `a91364e0d3773e89cd0d796c327f82ad7b5b67fd9eef773f6fed70166a97b1bf`.
- Faithful en-GB story: derived directly from the Narrative Master; SHA-256 `f66c1e5731f6f0d20f3cd22ebad6a317d047013f6525d9b8027118924d1bfe52`; it is not a Narrative Master.
- Exact current-runtime visual bytes: 12 sv-SE canonical slots + 4 en-GB canonical slots + one older en-GB `panel_11` revision.
- `CHAT_RECOVERED`: 0. No source was promoted to chat-recovered without a directly recoverable historic render target.
- sv-SE `panel_10`–`panel_12` and en-GB `panel_09`–`panel_12` remain historical candidates with QA `REBUILD_REQUIRED`; historical publication must not upgrade QA.
- sv-SE `cover_00`: `SOURCE_NOT_EXPORTABLE`. sv-SE `cta_13`: `NOT_CREATED`.
- en-GB historical images/PDF whose bytes are no longer accessible: `SOURCE_NOT_EXPORTABLE` where generation evidence exists.
- de-DE `panel_01`–`panel_03`: `SOURCE_NOT_EXPORTABLE`; remaining de-DE visual slots were not created according to the prior locale inventory.
- No rerender, redraw, crop, restyle, fill, screenshot substitution or PDF extraction was used.
- Local exact-byte publish packages and `navichain-local-publish-request-v1` requests were produced, but the current ChatGPT runtime exposes no callable Chrome-download, Nextcloud, hardened-router or local-publisher surface. Therefore no binary package has been claimed as GitHub-published.
- GitHub canonical image read-back remains empty for this story at the time of this metadata write; `githubPublishedBinaryAssets` remains 0.

Decision: **PARTIAL_BACKFILL**. Narrative text backfill is GitHub-verified; binary historical export remains blocked at the automatic transport boundary and is not `SYNCED`.
