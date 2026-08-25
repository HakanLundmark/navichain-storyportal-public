# Retro Backfill v2 QA — Den sista touchpointen

Checked: 2026-08-24 19:42 +02:00  
Story ID: `den-sista-touchpointen`  
Master version: `v1.0`

## Provenance rules applied

- No image was rerendered, reconstructed, cropped, restyled or replaced.
- `EXACT_ORIGINAL` is used only where the directly accessible file bytes are the historical source bytes being inventoried.
- PDF-derived fallback images from the earlier backfill are preserved only as derived historical artifacts; they are not treated as original render bytes or canonical image replacements.
- No `CHAT_RECOVERED` visual was used in this run.
- Provenance and historical QA state remain separate.

## Locale validation

### sv-SE
- Narrative Master: EXACT_ORIGINAL.
- Direct exact original canonical visuals: 10/14.
- SOURCE_NOT_EXPORTABLE original render bytes: `cover_00`, `panel_04`, `panel_08`, `panel_10`.
- Exact original 14-page PDF survives.
- Per-asset PASS/LOCKED evidence does not survive as a directly exportable QA record; canonical visual QA is therefore `UNKNOWN_PER_ASSET` for historical backfill purposes.
- Release status: INCOMPLETE.

### en-GB
- Faithful story translation: DERIVED_TRANSLATION from sv-SE Narrative Master; not a Narrative Master.
- Direct exact original canonical visuals: 12/14.
- SOURCE_NOT_EXPORTABLE original render bytes: `panel_01`, `panel_03`.
- Exact original 14-page PDF survives.
- Per-asset historical PASS/LOCKED evidence is not reconstructed; QA is `UNKNOWN_PER_ASSET`.
- Release status: INCOMPLETE.

### de-DE
- Direct exact current non-divergent canonical visuals: `panel_01`, `panel_02`.
- Current `cover_00`, `panel_03`–`panel_12`, `cta_13`: NOT_CREATED as release-valid current assets.
- Eleven exact historical divergent German renders survive and are retained with QA `REJECTED_DIVERGENT`; they are not canonical/release assets.
- Release status: INCOMPLETE.

## Transport / publication

Repository binary recovery workflow and assembler are present on `main` and validate size/SHA-256 before writing reconstructed bytes. The current chat tool surface cannot trigger the required Chrome download/local capture/Nextcloud archive chain and no connected Nextcloud write connector is available. Large local PNG/PDF/archive files were therefore not falsely represented as GitHub-published.

Text metadata and narrative files are written directly through the connected GitHub integration and must be read back before they are marked verified. Binary status remains `GITHUB_PUBLISH_FAILED_AUTOMATIC_TRANSPORT_UNAVAILABLE` until canonical GitHub binary paths can be read back.

## Final QA decision

`PARTIAL_BACKFILL` — historical source inventory and text metadata are exportable; binary publication through the required external automatic transport cannot be completed from the available chat tool surface.
