# Retro Backfill v2 — current runtime QA

Story: `sandningen-som-visste-vart-den-skulle`
Checked: 2026-08-24T19:39:00+02:00

## Execution rules

No image generation, rerendering, reconstruction, cropping, restyling, padding, resizing, re-encoding, or creative substitution was performed. Canonical historical image files in the package were copied byte-for-byte from directly accessible runtime files. Provenance and QA status are tracked independently.

## Narrative

- sv-SE Narrative Master: `ORIGINAL_STORY.md`; sourceClass `EXACT_ORIGINAL`; SHA-256 `ffc700b8020cc19acd132db78a182501e8e27a61a8aacd60d3267a0d0cbb8f90`; Git blob `e0488893ef2b29f91966eecce9a57a708f990ded`; read-back verified from `main`.
- en-GB: `ORIGINAL_STORY.en-GB.md`; sourceClass `DERIVED_TRANSLATION`; `translationType: faithful`; `narrativeMaster: false`; SHA-256 `92744d0a088011399f161e539ab5136fdc701906347cfa2413e25c202a332c03`; Git blob `d6e6a8566c09da9cd45b94cad4171b89f986cb33`; read-back verified from `main`.
- No explicit `LOCK STORY` / master version was verified. This is not silently upgraded.

## sv-SE historical visual recovery

All 14 canonical visual slots have directly accessible exact historical render bytes in the current runtime and are packaged as `EXACT_ORIGINAL`:

- `cover_00` — QA `UNKNOWN`
- `panel_01` — QA `UNKNOWN`
- `panel_02` — QA `UNKNOWN`
- `panel_03` — QA `UNKNOWN`
- `panel_04` — QA `UNKNOWN`
- `panel_05` — QA `UNKNOWN`
- `panel_06` — QA `UNKNOWN`
- `panel_07` — QA `UNKNOWN`
- `panel_08` — QA `UNKNOWN`
- `panel_09` — QA `UNKNOWN`
- `panel_10` — QA `REBUILD_REQUIRED`; historical candidate contains the unsupported driver-facing order-family/progress implication already blocked by Product Truth/preflight.
- `panel_11` — QA `REBUILD_REQUIRED`; historical candidate contains an unsupported aggregate progress presentation.
- `panel_12` — QA `REBUILD_REQUIRED`; historical candidate contains an unsupported aggregate status/progress presentation.
- `cta_13` — QA `REBUILD_REQUIRED`; historical candidate is preserved as history and is not promoted to release.

Historical publication is not release approval. The locale remains `INCOMPLETE_NOT_RELEASE_READY`.

## Other historical binaries

Exact historical derived artifacts are also preserved in the package without being used as substitute source renders:

- 14-page historical PDF: SHA-256 `b5ca281d1128decbb6bfc098a7740a2ac4ee6f78d6f0f55b8945a1285f841fef`, QA `NOT_RELEASE_READY`.
- Previous historical package ZIP: SHA-256 `af20429e360bf2d6cb81df19e90eae603d4f970f37bc9cb60d624a948c8aa600`, QA `NOT_RELEASE_READY`.
- Alternate exact historical `panel_10` candidate: SHA-256 `72f86fde8201e10fd200cfa51de2a908258dea9cdc5ca6cd8e411bacf277b468`, QA `REBUILD_REQUIRED`.

Additional generic runtime renders whose active-story/canonical-slot association cannot be established with sufficient certainty are classified `SOURCE_NOT_EXPORTABLE` and are not substituted into the story.

## en-GB visuals / derived release outputs

A valid en-GB visual set was not created: all 14 en-GB image slots remain `NOT_CREATED`. No release-grade PDF, LinkedIn/social copy, social image set, release manifest, or release ZIP exists for this story. The historical sv-SE PDF remains a non-release historical artifact only.

## Packages built locally

- sv-SE retro publisher package: `sandningen-som-visste-vart-den-skulle-sv-SE.retro-v2-current-package.zip`; 203009399 bytes; SHA-256 `30ffb22283aaab81fc461bdb62c59b6b68540682d8d0038d12912961aa2cdc76`; ZIP integrity PASS.
- sv-SE publish request: SHA-256 `a3c471b7901e279a723ebeee7a3bee5c23776701ee80ed38d119306cd35b319d`; wrapped request SHA-256 `33241daef9602e408f43243516db0ebde08cb7aa54b46a2f796086bb41430489`.
- en-GB publisher package: `sandningen-som-visste-vart-den-skulle-en-GB.retro-v2-current-package.zip`; 10103 bytes; SHA-256 `7bf453d87f638f899bae220417423368868d893d432308f09bc43be0cacadd72`; ZIP integrity PASS.
- en-GB publish request: SHA-256 `24f27d2c156bdb2574663bf648fa14eaf207b0000e1d1c73ee8c2485b33ad37c`; wrapped request SHA-256 `2b32b7ff74aff7f0e773adca4098e148c1fe4ba6d5ffca0d6ae79b43e3800567`.
- complete archive: `sandningen-som-visste-vart-den-skulle-retro-backfill-v2-current-complete.zip`; 417770734 bytes; SHA-256 `c56c140ef23049bbdc1ef09dfe355a9036194c45499ef6510a2ed751119da755`; ZIP integrity PASS.

## Automatic transport / GitHub binaries

The requested browser-side chain cannot be invoked or observed by the assistant runtime: no Chrome-download/browser-control action and no connected Nextcloud/local-capture/hardened-router/publisher action is exposed. The GitHub connector can perform repository text operations, but does not accept these local binary files as upload file parameters. The repository's binary workflows require pre-created Git blobs or a runner-reachable HTTPS package URL; neither is available from the sandbox without the external transport action.

Therefore binary publication is `GITHUB_PUBLISH_FAILED` for this execution and `githubPublishedBinaryAssets` remains 0. No binary is reported `SYNCED` without canonical-path GitHub read-back.

Overall: `PARTIAL_BACKFILL`.
