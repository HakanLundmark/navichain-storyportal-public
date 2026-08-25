# Historical backfill gaps

- `panel_06` — `SOURCE_NOT_EXPORTABLE` as the canonical historical original. The temporary original render bytes were overwritten before packaging. No replacement is used at the canonical asset path.
- Historical PDF `carousel/hela_summan_i_tre_steg_sv-SE.pdf` — `SOURCE_NOT_EXPORTABLE` in the current runtime. A previous manifest records SHA-256 `3d974354c0ed4f7efba2429231321663d2700c831bcc6611b2e2196c8ae92055` and PDF QA `PASS`, but the PDF bytes are not directly available here and the prior package used a reconstructed panel_06.
- Historical release ZIP — `SOURCE_NOT_EXPORTABLE` in the current runtime. No ZIP is reconstructed as a substitute for that historical file.

A later `panel_06_hela_summan_i_tre_steg_sv-SE.png` file is preserved in the local retro package under `archive/historical-renders/` as a non-canonical historical candidate. Its exact current bytes are archived, but it is not promoted to the missing original `panel_06`.
