# Retro Backfill v2 QA — UNDANTAGET SOM ALDRIG ÄR TYST

Checked: 2026-08-24T22:14:00+02:00

## Source boundary

No image generation, rerendering, reconstruction, redrawing, restyling, generative fill or PDF extraction was used in this backfill. Provenance is recorded separately from visual/release QA.

## Narrative

- sv-SE Narrative Master: exact runtime bytes available and already present at `stories/undantaget-som-aldrig-ar-tyst/ORIGINAL_STORY.md`.
- sv-SE SHA-256: `64374c28cb845ff7a6bfad5e54917bb5ef768307ab2cfa8ed1a30d7ef9bd2624`.
- en-GB: faithful direct translation from the sv-SE Narrative Master; `DERIVED_TRANSLATION`, not Narrative Master.
- en-GB SHA-256: `fca21ed7f1a330598b37d9396c5bb54c87dc3c767fcbd380358f1b7716b926e1`.

## Canonical visual inventory

Exact current runtime binaries are available for 11/14 canonical slots: `cover_00`, `panel_02`, `panel_03`, `panel_04`, `panel_05`, `panel_06`, `panel_07`, `panel_08`, `panel_10`, `panel_11`, `panel_12`.

`panel_01`, `panel_09`, and the later user-selected correct-logo `cta_13` are `SOURCE_NOT_EXPORTABLE` in this execution runtime. Generation/use is evidenced by the source-chat history, but no exact binary or directly recoverable current file reference is available. No substitute was used.

The earlier exact file `imagegen.png` is preserved only as a historical CTA candidate because the user subsequently rejected/corrected it and explicitly selected a different existing CTA. It is not mapped to canonical `cta_13`.

## Historical visual candidates

Thirty unique exact historical render binaries from this story execution remain directly accessible. Nineteen are alternatives, superseded attempts, or rejected/foreign-story candidates and are kept separate from canonical paths. Known rejected foreign-story outputs include the EU checkpoint/ICS2 image, the generic fleet-control image, and the E6 rerouting image.

No historical candidate is upgraded to PASS/LOCKED merely because its bytes exist. Canonical exact candidates without explicit historical approval are recorded as `UNKNOWN` QA.

## Derived/release outputs

- PDF/carousel for this story: NOT_CREATED.
- LinkedIn/social copy for this story: NOT_CREATED.
- Formal locale release: not eligible; canonical visual set is incomplete and no release QA is asserted.

## Transport/publishing

The project repository contains the binary-backfill assembler and chat-recovery policy. The local historical package was created and verified, but this ChatGPT execution environment exposes neither a Chrome-download control nor a connected Nextcloud write surface, so the requested automatic `ChatGPT → Chrome → local capture → Nextcloud` segment cannot be truthfully marked executed.

The GitHub connector can write metadata/text directly. Large local PNG bytes cannot be passed as a local-file parameter to the connector; completing all exact historical visual binaries would require inline base64 transfer or a public direct-download package URL. Neither is available through the automatic transport surface in this execution. Binary status therefore remains `PACKAGE_READY_NOT_GITHUB_PUBLISHED`; no SYNCED claim is made for the images.
