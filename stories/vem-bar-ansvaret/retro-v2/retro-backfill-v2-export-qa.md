# Retro Backfill v2 Export QA

Story ID: `vem-bar-ansvaret`

Result: **PARTIAL_BACKFILL**

Checks performed:
- No image generation was invoked.
- No missing visual asset was reconstructed.
- No image was cropped, resized, normalised, trans-coded or restyled for export.
- Canonical source images copied into the package preserve their original bytes; their SHA-256 values match the prior backfill inventory where a prior canonical hash existed.
- `source/original-story-sv-SE.md` reproduces the already-published canonical Git blob exactly (Git blob SHA `542c663a791273b4e6ffbdc6e821f40a4e0940a0`).
- `source/original-story-en-GB.md` is a direct faithful text translation from the byte-verified sv-SE Narrative Master and is marked `DERIVED_TRANSLATION`, not Narrative Master.
- Prior metadata files copied from GitHub were byte-verified by matching their Git blob SHAs.
- `panel_09` canonical original remains SOURCE_NOT_EXPORTABLE; the exact prior reconstructed package artifact is archived under `sv-SE/historical/` only.
- `cta_13` verified original remains SOURCE_NOT_EXPORTABLE; three directly accessible historical CTA candidates are archived under `sv-SE/historical/` and are not substituted for the verified CTA.
- Prior PDF and release ZIP are SOURCE_NOT_EXPORTABLE because the actual binaries are not present in the current runtime.
- Historical source provenance is kept separate from QA status. Unknown visual QA is recorded as UNKNOWN rather than upgraded.

Transport limitation in this runtime:
- The connected GitHub integration supports text writes and Git blob creation from inline strings, but the current ChatGPT runtime exposes no connector file-upload parameter for multi-megabyte local binaries.
- The requested Chrome/local-capture/Nextcloud/hardened-router transport cannot be invoked directly by the available ChatGPT tools in this turn.
- Downloadable ZIP + publish-request artefacts are therefore created for the automatic local bridge, while text metadata can be published directly through the connected GitHub integration.

## Transport package integrity

Locale packages were created and verified locally: every publish request points to an archive that exists; every `archiveName` exists in the ZIP; recorded size and SHA-256 match the actual ZIP member bytes; and the request `packageSha256` matches the actual ZIP. This verifies local packaging only. The Chrome/local-capture/Nextcloud/router bridge is not callable from the current assistant tool surface, so Nextcloud archive and automatic publisher completion remain unverified.
