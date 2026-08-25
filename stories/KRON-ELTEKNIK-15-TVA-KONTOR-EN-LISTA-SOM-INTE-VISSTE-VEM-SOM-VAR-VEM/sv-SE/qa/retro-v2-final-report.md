# Retro Backfill v2 — final execution report

Story: `KRON-ELTEKNIK-15-TVA-KONTOR-EN-LISTA-SOM-INTE-VISSTE-VEM-SOM-VAR-VEM`  
Narrative Master: `sv-SE`  
Final status: **PARTIAL_BACKFILL**

## Verified on GitHub main

- `source/original-story-sv-SE.md` is present and read back; provenance `EXACT_ORIGINAL`, SHA-256 `d2df49b22f40f387fb43e27cf30495099949b7e10d0da0216af7c2855e97ef66`.
- Its Git blob SHA is `cc11eb59564fd6681e0538b8ff74292a1353bd92`, identical to the pre-existing canonical `ORIGINAL_STORY.md` blob.
- `source/original-story-en-GB.md` is present and read back; provenance `DERIVED_TRANSLATION`, translation type `faithful`, `narrativeMaster=false`, SHA-256 `b31d2574ce5adb265871e18202c74dc438730d5ba5d79047e7ba9f93e89a7747`.
- Both narrative provenance sidecars are present.

## Historical visual inventory

The current chat runtime still contains exact original bytes for six separate canonical visual candidates:

- `cover_00` — `REBUILD_REQUIRED`
- `panel_01` — `UNKNOWN`
- `panel_02` — `REBUILD_REQUIRED`
- `panel_10` — `REBUILD_REQUIRED`
- `panel_11` — `REBUILD_REQUIRED`
- `panel_12` — `REBUILD_REQUIRED`

The separate canonical slots `panel_03`–`panel_09` and `cta_13` were not created as full-frame assets in this chat. Invalid multi-asset sheets are preserved as historical raw render artifacts but are never cropped or promoted into missing canonical slots.

Ten historical raw render PNGs are directly accessible and preserved in the local historical archive. Provenance and QA remain separate; rejected/superseded renders are not upgraded.

## Binary result

The exact historical binary files were packaged locally without rerendering, reconstruction, restyling or story-content cropping.

Binary publication is **GITHUB_PUBLISH_FAILED** in this execution. The current ChatGPT action surface exposes neither Chrome-download control nor Nextcloud archive, hardened-router or local-publisher actions. The GitHub connector can accept literal Git-blob payload strings but exposes no mounted-local-file parameter for the multi-megabyte binary images/packages. The required automatic transport chain therefore cannot be truthfully claimed as executed.

No canonical image binary is reported `SYNCED`.

## Local package checksums

- Complete historical export: `f1fa97ee5e3dae63e2e08b0419e533dc771e3b864f2dfc8aee63cf3b7c7fc3b1` — 64,966,218 bytes
- Historical revisions/raw render archive: `c6b4c855f81fee660a96deaebc7bbe891fd107eba26dd550a9d15ff5b1b7c407` — 33,112,118 bytes
- sv-SE publisher package: `480e1b34be9701a2c7267532a4219cb761b65c37297b29ac3234069bc096cb64` — 20,230,985 bytes
- en-GB text publisher package: `44b66cbff6410644f7a5141f08ea801a10ae4a55149826b36a4e27086bd5e643` — 10,895 bytes
- sv-SE publish request: `74f24ef0e2725f1fe1ab42abe207f8a225059681303bcd528f999d5768d528e3`
- sv-SE publish-request wrapper ZIP: `6e8a5dd823476a8dc84cba5a832b14dd00bbe27edec4d13c318177efc916a69c`
- en-GB publish request: `707f513327a1e70052aefb0d79ec443ebd14afab83c59683d959a87ea457a9ee`
- en-GB publish-request wrapper ZIP: `6cf9abdc419d8e9cc7daca8e579b1f9697b53fa6a1c6c66f227fa57ae07f3aa7`

## Release state

Historical backfill does not change Story Truth or Product Truth. The original Product Truth blocker is retained: department parent-chain permission inheritance is documented, but automatic department-scoped row-level booking/resource visibility required by panels 9–11 is not established. Story Lock and release remain blocked.
