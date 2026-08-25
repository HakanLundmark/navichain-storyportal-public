# RETRO BACKFILL v2 QA — ANTECKNINGEN SOM ALDRIG SKREVS

Checked: 2026-08-24T19:35:00+02:00

Story ID: `KRON-ELTEKNIK-03-ANTECKNINGEN-SOM-ALDRIG-SKREVS`

## Source/provenance validation

- sv-SE Narrative Master: EXACT_ORIGINAL, 10,508 bytes, SHA-256 `10a90668e12537cb477289aba4689f7e89bb6c7d9fad759b2cb0f60be9698e27` — GitHub read-back PASS.
- en-GB faithful story translation: DERIVED_TRANSLATION, 10,602 bytes, SHA-256 `0978cde1980d3556774c49516fa32780d04c06e3c48e64893f7d752fef8354f3` — GitHub read-back PASS; not Narrative Master.
- Historical story PNGs directly accessible in the current chat runtime: 31/31 inventoried and copied byte-for-byte into the local retro archive package.
- Canonical historical visual slots with exact source bytes: 14/14.
- CHAT_RECOVERED used: 0. Exact source bytes were available for all currently mapped canonical candidates.
- Rerendering/reconstruction/restyling/content cropping/substitution during this backfill: NONE.

## QA separation

Historical provenance is not approval. `passLockedCanonicalAssets` remains 0. Known `REBUILD_REQUIRED` and `REJECTED` candidates remain underqualified; no visual was upgraded to PASS/LOCKED because it was archived.

Current project brand rules require the authentic `NAVICHAIN-OFFICIAL-LOGO.png` binary for visible Navichain branding and forbid generated pseudo-branding. Several historical renders visibly violate that rule and therefore remain REBUILD_REQUIRED. The original preflight also requires no Navichain logo in panels 01–06 and contains story-specific corrections for panels 08, 11 and 12.

## Derived/release material

- sv-SE PDF/carousel: NOT_CREATED.
- sv-SE LinkedIn/social copy: NOT_CREATED.
- completed release manifest / release QA / release ZIP: NOT_CREATED.
- en-GB visual locale, PDF and social outputs: NOT_CREATED. Only the faithful text translation exists.

## Transport verification

Requested automatic chain: `ChatGPT -> Chrome download -> local capture -> Nextcloud archive -> hardened router -> publisher -> GitHub`.

This runtime exposes no Chrome-download action, no Nextcloud connector and no local/hardened publisher action. GitHub text write/read-back works, and Git blob primitives exist, but there is no mounted local-file binary upload route. The prior exact-binary retry also established that transferring these multi-megabyte PNGs via the inline model/tool bridge cannot be done safely without risking truncation, which would violate byte identity.

Therefore no canonical image was claimed as GitHub-published. Final read-back of `stories/KRON-ELTEKNIK-03-ANTECKNINGEN-SOM-ALDRIG-SKREVS/sv-SE/images/` returned 404. `story.json` and `stories/index.json` retain `githubPublishedBinaryAssets: 0` and were intentionally not advanced, because current recovery protocol allows those counts to change only after successful canonical binary read-back.

## Result

Narrative Master: GITHUB VERIFIED

en-GB story: GITHUB VERIFIED

Local historical export packages: BUILT AND CHECKSUMMED

Nextcloud automatic archive: NOT EXECUTED — action surface unavailable

Canonical image GitHub publication: GITHUB_PUBLISH_FAILED

Release completeness: INCOMPLETE

FINAL STATUS: PARTIAL_BACKFILL
