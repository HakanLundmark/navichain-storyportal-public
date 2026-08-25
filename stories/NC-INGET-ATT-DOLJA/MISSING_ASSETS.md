# Retro Backfill v2 — missing / not-exportable material

Story: `NC-INGET-ATT-DOLJA`  
Checked: `2026-08-24T22:21:00+02:00`

## sv-SE canonical visual assets

The current runtime contains exact original bytes for `cover_00` and `panel_01`–`panel_12`. They are therefore **not missing** and are classified `EXACT_ORIGINAL` for provenance. Their GitHub binary publication is a separate state and remains pending/blocked in this runtime.

- `cta_13` — **SOURCE_NOT_EXPORTABLE**. The final deterministic CTA was created earlier, used in the 14-page carousel, and its QR was verified, but the final CTA original binary is no longer directly present. The exact pre-composite CTA base is preserved separately as historical `REBUILD_REQUIRED` material; it is not a substitute for final `cta_13`.

No image was rerendered, reconstructed, cropped from a PDF, redrawn, restyled, screenshotted, or substituted.

## en-GB canonical visual assets

Exact original bytes are directly available for:

- `cover_00`
- `panel_01`
- `panel_02`

These are current historical candidates with QA status kept separate (`UNKNOWN`; no PASS/LOCKED upgrade is asserted).

The following valid canonical en-GB assets were **NOT_CREATED**:

- `panel_03`
- `panel_04`
- `panel_05`
- `panel_06`
- `panel_07`
- `panel_08`
- `panel_09`
- `panel_10`
- `panel_11`
- `panel_12`
- `cta_13`

Exact bytes for numerous divergent/rejected en-GB attempts are preserved in the local historical archive with their actual non-PASS status; they are not promoted to canonical assets.

## PDF / carousel

Two exact sv-SE PDF binaries are directly available and SHA-256 inventoried. Both contain 14 pages. The earlier carousel was historically verified for canonical order and CTA QR decode to `https://navichain.se/signup`.

The en-GB PDF was not created as a valid canonical carousel: **NOT_CREATED**.

## Social

The sv-SE LinkedIn copy is available and byte-identical to the existing GitHub export. The en-GB social post was **NOT_CREATED**.

## Historical release ZIP

`NC-INGET-ATT-DOLJA-v1.0-sv-SE-package.zip` was created and linked earlier, but its original ZIP bytes are no longer present: **SOURCE_NOT_EXPORTABLE**. Its surviving package carousel PDF is preserved separately.
