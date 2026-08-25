# RETRO BACKFILL v2 — export QA

Story: `KRON-ELTEKNIK-05-KLOCKAN-SOM-INTE-LJOG`
Checked: `2026-08-24T19:04:00+02:00`

- No rerendering, reconstruction, cropping, restyling, drawing-over or creative replacement was performed.
- The canonical sv-SE Narrative Master was byte-reconstructed only by exact text read-back and verified against the existing Git blob SHA: local Git blob SHA `96a4b992dcd3da176f53b68c9b787709ac3bd9d1`, identical to GitHub. SHA-256: `797a314ffcab2feec6f1c32f2f86ea70e6c6da036ed63dc99649b7cc87bd4310`.
- A faithful en-GB text translation was derived directly from the exact sv-SE Narrative Master. It is explicitly `DERIVED_TRANSLATION`, `narrativeMaster: false`, and was published and read back from GitHub. SHA-256: `8fb7f550a2e54d0d781b449c12870e0b4b368111178f3600d28b82d405450880`.
- All 14 canonical sv-SE historical image candidate files are directly byte-accessible in the current runtime and classified `EXACT_ORIGINAL`. No `CHAT_RECOVERED` fallback is needed for the canonical slots.
- An additional 38 historical render PNGs are directly byte-accessible and preserved as non-canonical historical candidates. QA is not upgraded; where no historical QA record is reliable, the status remains `UNKNOWN`.
- The previously created 14-page working PDF and working-package ZIP are directly byte-accessible and remain historical working outputs with release QA not passed.
- Fourteen normalized working-package image derivatives were extracted byte-for-byte from the previously created ZIP for historical archive preservation only; they are not substitutes for original render bytes.
- Twenty-five directly accessible source/reference files relevant to this story/backfill were inventoried for archival transport.
- No LinkedIn/social copy was actually created for this story; it remains `NOT_CREATED`.
- Three publisher packages and matching `navichain-local-publish-request-v1` requests were created for the configured Chrome → local capture → Nextcloud → hardened router → publisher chain. ZIP integrity, individual file size and SHA-256, and package SHA-256 were checked locally.
- The assistant environment cannot operate the user's Chrome UI, local capture service or Nextcloud client directly. No manual `--once`, curl or direct local publisher execution was substituted.
- GitHub read-back after package creation still returned `404` for `stories/KRON-ELTEKNIK-05-KLOCKAN-SOM-INTE-LJOG/sv-SE/images/cover_00.png`; therefore canonical binary publication is not claimed.

Final status for this run: **PARTIAL_BACKFILL / GITHUB_PUBLISH_FAILED for binaries**. Narrative Master and en-GB story text are GitHub read-back verified. Historical release status remains **INCOMPLETE**.
