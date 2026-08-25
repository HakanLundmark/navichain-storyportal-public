# Binary publish status

The active story has directly accessible binary artifacts in the current chat/runtime, including a 14-image draft working set, a 14-page draft PDF carousel, raw generated PNG renders, the official logo source, and the existing draft ZIP package. Exact sizes and SHA-256 checksums for the canonical slot files are recorded in `manifest/inventory.json`.

They are **not a COMPLETE release** because the source QA report classifies the package as `DRAFT / NOT RELEASE-READY`; wrong-story contamination remains in later panels/CTA and brand-critical-logo requirements are not satisfied. A newer corrected panel_06 render exists after the draft package.

GitHub binary publication was not performed in this backfill because the connected GitHub write surface in this session exposes UTF-8 text writes but no direct local-file upload action for PNG/PDF/ZIP bytes. No binary was reconstructed, substituted, or fabricated.

Classification: local source binaries are `EXISTS_AND_EXPORTABLE`; their GitHub binary transfer is `GITHUB_PUBLISH_FAILED`. Locale status remains `INCOMPLETE`.
