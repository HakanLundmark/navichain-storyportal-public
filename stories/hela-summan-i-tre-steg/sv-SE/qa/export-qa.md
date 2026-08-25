# Retro backfill v2 export QA

- Canonical expected order checked: cover_00 → panel_01–panel_12 → cta_13.
- 13 canonical original image files are present as exact unmodified bytes.
- Canonical `panel_06` is intentionally absent because the historical original bytes are not recoverable.
- No image was rerendered, reconstructed, cropped, restyled or substituted for a missing canonical original.
- Six other story-relevant historical render files with directly accessible exact bytes are preserved only under `archive/historical-renders/` and are not promoted to canonical assets.
- Narrative Master local bytes reproduce Git blob `4d2d60608871d6a3b4e26a1658c629eaa8b000ec` exactly.
- en-GB is a direct faithful text translation and is not marked Narrative Master.
- Historical PDF is not recreated. Its recorded historical QA is `PASS`, while the package that produced it had a `panel_06` reconstruction note; provenance and QA are therefore kept separate.
- ZIP integrity is checked after packaging.

Export result: `PASS_WITH_SOURCE_GAP`.
Release result: `INCOMPLETE`.
