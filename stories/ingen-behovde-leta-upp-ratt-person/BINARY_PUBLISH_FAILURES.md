# Binary publish limitations for this backfill

The active GitHub connector exposed repository write operations for UTF-8 contents and Git data blobs whose content must be supplied inline as UTF-8/base64 text, but it exposed no action accepting a mounted local binary file reference/path.

For this backfill, directly accessible PNG/PDF/ZIP binaries were inventoried and hashed but were **not claimed as written to GitHub**. No binary was regenerated, reconstructed, converted, or substituted during this backfill.

This does not change locale completeness: `sv-SE` is independently `INCOMPLETE` because the accessible release QA explicitly documents that `panel_01` and `panel_03` are reconstructions of earlier renders whose original binaries were not retained. `en-GB` is `INCOMPLETE` because only `cover_00` and `panel_01` exist.
