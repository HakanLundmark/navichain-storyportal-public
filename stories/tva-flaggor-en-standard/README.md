# Två flaggor, en standard — RETRO BACKFILL v2

- Story ID: `tva-flaggor-en-standard` (backfill slug derived from canonical title; no explicit Story ID was supplied in the source chat)
- Narrative Master: `sv-SE`
- Master version: not supplied (`null`)
- Export timestamp: 2026-08-24T22:26:00+02:00
- Source: active Navichain story in this ChatGPT chat plus directly accessible exact runtime files and exact historical Git blobs from the prior backfill in this same chat
- Creative regeneration: NONE
- Image reconstruction/cropping/restyling: NONE

## Locales

### sv-SE
Canonical exact historical image bytes available: 11/14 — `cover_00`, `panel_01`–`panel_07`, `panel_11`, `panel_12`, `cta_13`.

SOURCE_NOT_EXPORTABLE canonical slots: `panel_08`, `panel_09`, `panel_10`.

Four authentic rejected/alternative CTA renders are preserved in the local package under `sv-SE/history/rejected/` with QA status REJECTED; they are not substituted for canonical release assets.

### en-GB
Canonical story-faithful exact historical image bytes available: 5/14 — `cover_00`, `panel_01`, `panel_02`, `panel_03`, `panel_06`.

SOURCE_NOT_EXPORTABLE story-faithful slots: `panel_04`, `panel_05`, `panel_07`–`panel_12`, `cta_13`.

Ten authentic divergent/rejected historical renders are preserved in the local package under `en-GB/history/rejected/`, and one byte-identical cover alias is preserved under `en-GB/history/duplicates/`. These do not become canonical release assets.

## Narrative
`source/original-story-sv-SE.md` is an exact byte copy of the historical Narrative Master; its Git object identity was checked against historical blob `aefde1db59c427f76b9cb1168df7e7c921144e4c`.

`source/original-story-en-GB.md` is a faithful direct translation from that Narrative Master and is marked `DERIVED_TRANSLATION`, not Narrative Master.

## QA
Provenance and QA are separate. Exact bytes do not imply PASS/LOCKED. Where no actual historical asset QA state is available, QA remains `UNKNOWN`. Divergent/foreign-story historical renders previously rejected are retained as `REJECTED`.

Current release blockers include incomplete canonical asset sets, historical brand-critical logo non-verification on generated cover/CTA, CTA QR release non-verification, and absence of story-specific PDF/social/release QA.

## Transport status
The complete local packages and publish-request files were built. This execution environment does not expose a controllable Chrome download bridge or a connected Nextcloud write surface, so the requested automatic `ChatGPT → Chrome → local capture → Nextcloud → router → publisher` transport cannot be truthfully claimed as executed. No manual curl/`--once`/Python publisher substitute was used.

GitHub text/metadata publication is performed through the connected GitHub integration. Binary GitHub publication requires transport of exact local bytes into the repository's binary import/backfill mechanism; until that occurs, binaries remain locally packaged and are reported as not GitHub-published.
