# RETRO BACKFILL v2 QA / transport report

Story: `rabatten-ingen-kunde-forklara-sparet-som-fanns-kvar-anda`
Checked: 2026-08-24T17:29:00+02:00

Historical export status: `PARTIAL_BACKFILL`.
Release eligible: **NO**.

## Narrative

- sv-SE Narrative Master is directly accessible and classified `EXACT_ORIGINAL`.
- Its local SHA-256 is `ecbafe14f95212444f08f23a1e38e6c9f1486355f889578558ee205956f23876`.
- GitHub read-back returned blob SHA `a251a3898f57c648336fbf241e1034945deaf75e`, matching the local `git hash-object` value exactly.
- en-GB is a direct faithful translation from sv-SE, classified `DERIVED_TRANSLATION`, and explicitly not Narrative Master.
- Its local SHA-256 is `cf90444af2d9b9497dde33c91ae6da2f500d3bd54a0e7ccccc47ac1638f9e373`.
- GitHub read-back returned blob SHA `33ef890abf7d27336e3868da7f4849fc035cf1dd`, matching the local `git hash-object` value exactly.

## sv-SE visuals

Exact original canonical image sources directly accessible in the runtime: 11/14 slots:
`cover_00`, `panel_01`, `panel_02`, `panel_03`, `panel_04`, `panel_06`, `panel_07`, `panel_08`, `panel_09`, `panel_10`, `panel_11`.

Additional exact historical render candidates accessible: 2:
- alternate `cover_00` candidate `rabatten_som_blev_spårbar.png`;
- earlier `panel_11` candidate `imagegen.png`, historical QA `REBUILD_REQUIRED`.

`panel_05`: `SOURCE_NOT_EXPORTABLE`.
`panel_12`: `SOURCE_NOT_EXPORTABLE`.
`cta_13`: `NOT_CREATED`.

No canonical image is marked PASS/LOCKED by this backfill. Unknown historical QA remains `UNKNOWN`.

## Binary transport

Binary source bytes are locally available for the 13 exact historical PNGs above, but they were not published to GitHub in this execution. The connected GitHub action surface exposes binary blob creation as an inline content string and does not expose a local-file/file-reference upload parameter. The available runtime cannot reach GitHub directly and no Nextcloud/Chrome download connector is available. Large image bytes therefore could not be transported losslessly through the connected surface without an impractical/truncation-prone inline encoding path.

Result for those source binaries: source remains `EXACT_ORIGINAL`; GitHub publish state is `GITHUB_PUBLISH_FAILED`. Do **not** relabel them `SOURCE_NOT_EXPORTABLE` because their exact source files are accessible.

No rerender, reconstruction, screenshot substitution, PDF extraction, crop, restyle, generative fill or replacement was performed.

## Automatic transport intermediates

Chrome-download bridge verified: **NO** — no Chrome download connector/tool is exposed in this execution.
Nextcloud archive verified: **NO** — no Nextcloud connector/plugin is available.
Hardened router/publisher verified: **NO** — no corresponding connected action is exposed.
GitHub text/metadata publication: **YES**, via connected GitHub write actions followed by read-back.

## Remaining release blockers

- `panel_05` unrecoverable from current source execution;
- `panel_12` unrecoverable from current source execution;
- `cta_13` not created;
- no story PDF/carousel;
- no story-specific social copy;
- no 14/14 approved visual master state;
- exact accessible image binaries not GitHub-published/read-back.
