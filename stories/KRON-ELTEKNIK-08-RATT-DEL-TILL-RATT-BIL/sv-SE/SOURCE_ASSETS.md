# sv-SE source asset publication status

Locale status: `INCOMPLETE`.

Eight PNG render files are directly accessible in the current chat runtime and are inventoried with byte size, dimensions and SHA-256 in `../manifest/source-inventory.json`.

They are not release masters: four are rejected multi-panel/storyboard cover attempts; three are panel 08 candidates and one is a panel 09 candidate, none explicitly PASS/LOCKED.

The connected GitHub write surface available in this execution exposes UTF-8 text writes and Git-data blob creation from supplied text/base64, but no direct local-file/binary upload parameter. The original PNG binaries were therefore not copied to GitHub during this backfill. They remain `EXISTS_AND_EXPORTABLE` in the local source inventory, with GitHub binary publication recorded as failed/not performed rather than silently reconstructed.
