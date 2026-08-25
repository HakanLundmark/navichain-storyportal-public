# Backfill QA

Story ID: `sandningen-som-visste-vart-den-skulle`  
Locale: `sv-SE`  
Checked: 2026-08-23T10:53:00+02:00

- Narrative master: present on GitHub.
- Required image slots: 14.
- Directly accessible source renders mapped to canonical slots: 6.
- Valid single-panel candidates without known story-format hard failure: 2 (`panel_04`, `panel_05`), but neither has release LOCK/PASS evidence.
- Missing valid canonical slots: `panel_06`, `panel_07`, `panel_08`, `panel_09`, `panel_10`, `panel_11`, `panel_12`, `cta_13`.
- PDF: missing.
- Social: missing.
- Release QA/manifest: missing.
- Locale classification: **INCOMPLETE**.
- No missing canonical image was regenerated or reconstructed.
- Failed multi-asset/storyboard renders were not promoted to canonical assets.
- No COMPLETE release ZIP was created.

GitHub binary transfer note: the current connected GitHub write actions expose UTF-8 text writes and blob-content strings but no local mounted-file parameter. PNGs are directly accessible in the runtime, but a supported direct binary-file handoff is not exposed; therefore this backfill publishes truthful metadata/QA and does not falsely claim binary sync.
