# Export QA

Status: `PASS` for source inventory integrity; `INCOMPLETE` for locale release.

Checks performed:

- Canonical story/manus is directly present in the chat and exported to `ORIGINAL_STORY.md`.
- No missing release asset was regenerated or reconstructed.
- Eight generated PNG source files are directly accessible in the local runtime and checksummed in `manifest/source-inventory.json`.
- Rejected multi-panel/storyboard outputs are not promoted to canonical assets.
- Standalone panel 08/09 candidates are not promoted to PASS/LOCKED release masters.
- Required canonical order remains cover → panel_01–panel_12 → CTA.
- `sv-SE` is correctly classified `INCOMPLETE`.
- No COMPLETE release ZIP is created.
