# RETRO BACKFILL v2 QA — RÄTT SIFFROR, SAMMA HISTORIA

## Source integrity

- No image was rerendered for this backfill.
- No historical image was reconstructed, cropped, restyled, filled in, or substituted.
- Canonical-slot images were copied byte-for-byte from directly accessible `/mnt/data` originals.
- Additional historical render attempts were copied byte-for-byte and kept separate from canonical slot mapping.
- SHA-256, size, and dimensions are recorded in `manifest/historical-inventory.json` and `manifest/asset-list.json`.

## Narrative

- sv-SE Narrative Master source file: `ORIGINAL_STORY_RATT_SIFFROR.md`, exported unchanged as `source/original-story-sv-SE.md`.
- Original long user brief is preserved separately as `source/original-user-brief-sv-SE.md`; it does not override the corrected Narrative Master.
- en-GB story text is a faithful direct translation of the sv-SE Narrative Master and is marked `DERIVED_TRANSLATION`, `narrativeMaster: false`.

## Product Truth

The story's CMR mechanism is supported by the current Product Truth: issuing freezes a snapshot, creates SHA-256 integrity data, requests an RFC 3161 timestamp and adds a verification QR; re-issue requires a reason and retains the superseded document. Product Truth also limits claims: this does not establish eIDAS-qualified signer identity or universal legal effect.

## Visual QA / historical status

- `panel_02`: REBUILD_REQUIRED (explicitly recoverable from the conversation state).
- Several CTA candidates: REJECTED due user rejection of incorrect logo handling; preserved only as historical render attempts.
- Two later wrong-asset CTA attempts and three later wrong/diverged panel_02 attempts: REBUILD_REQUIRED; preserved as history.
- Other canonical-slot candidates: historical PASS/LOCKED state is not fully recoverable; recorded as UNKNOWN rather than upgraded.
- Latest CTA candidate is preserved with historical QA UNKNOWN. Current brand rules still require provenance from `NAVICHAIN-OFFICIAL-LOGO.png` to be verified before release.

## Dimensions

Canonical historical slot dimensions are not uniform:
- 1055×1491: cover_00, panel_02–panel_09
- 1024×1536: panel_01, panel_10–panel_12
- 1086×1448: cta_13

Therefore the historical image set is not a release-ready 14-image master under current production rules.

## Derived/release assets

No story PDF, LinkedIn copy, social derivatives or locked release ZIP were verified as created before this backfill. They are not fabricated.

## Transport status

The current ChatGPT execution environment has GitHub connector access but no connected Nextcloud plugin and no controllable Chrome download bridge. The requested automatic `Chrome download → local capture → Nextcloud → hardened router → publisher` chain therefore cannot be truthfully reported as executed from this runtime. Local packages and publish-request artifacts are created so the automatic client-side chain can ingest them if downloaded, but that download cannot be initiated or verified by the assistant.

GitHub publication/read-back is tracked separately and must not be marked SYNCED unless actual GitHub paths are read back.
