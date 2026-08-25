# RETRO BACKFILL v2 — export QA

Story: `KRON-ELTEKNIK-08-RATT-DEL-TILL-RATT-BIL`
Checked: 2026-08-24T19:07:00+02:00

- No rerendering, reconstruction, cropping, restyling, filling-in or replacement was performed.
- The canonical sv-SE Narrative Master is already published and read back from GitHub: SHA-256 `37cb60e6255b0a523d384920d7dfceef478b7a9e2d6748b7386a73b1da5e6e8b`.
- The en-GB source story is a faithful direct text translation, not Narrative Master, and is published/read back with SHA-256 `5600c900c65c912f58aee50913c8a863cdceae7b98d70b692e76d492f2fda480`.
- All 14 canonical current-build PNG byte streams are directly accessible in the current runtime as `EXACT_ORIGINAL`, all 1024×1536. `panel_07` and `cta_13` retain `REBUILD_REQUIRED`; the remaining per-asset historical QA state is `UNKNOWN`, while the build as a whole remains `CURRENT_BUILD_NOT_RELEASE_LOCKED`.
- Seventeen additional historical render PNGs are directly accessible byte-for-byte. Failed collage/storyboard/divergent outputs retain `REBUILD_REQUIRED`; `imagegen.png` remains `UNKNOWN` because no stronger historical per-asset QA was verified.
- Eight older render filenames remain historical inventory hints only and are `SOURCE_NOT_EXPORTABLE` in this runtime because their exact bytes and an unambiguous directly recoverable visible instance are unavailable.
- The existing 14-page PDF is directly accessible as exact bytes: SHA-256 `9b11f8300f6c1160fc703552a358475015a3b8025525959ecca437bbdbc12454`.
- The existing current-build ZIP is directly accessible as exact bytes: SHA-256 `abe08a9aa7ed88da96383d99ffabd2e9d5cd38bb47d240c65501d9ea21108571`. It is a working build, not a release package.
- No story-specific LinkedIn/social copy is verifiably produced.
- Exact project source/reference files were archived locally, including the official Navichain logo, validated signup QR, visual calibration references, Product Truth and current production/validation/localization control sources.
- Full retro archive and publisher package integrity were checked after build. Publisher request `packageSha256` and all listed file size/SHA-256 values were verified against actual ZIP members.
- The assistant tool environment exposes GitHub but no controllable Chrome-download bridge, Nextcloud connector, hardened local router or local publisher invocation. Therefore the specified automatic transport chain is blocked at ChatGPT → Chrome in this execution environment.
- Direct GitHub binary retry remains `GITHUB_PUBLISH_FAILED`: the connector's blob write accepts literal base64 but has no mounted/local-file parameter, and the complete multi-megabyte payload set cannot be transferred safely through the available text bridge without truncation. No incomplete queue manifest was fabricated.
- Read-back confirms no canonical `sv-SE/images/` directory exists in GitHub for this story, so `githubPublishedBinaryAssets` remains `0`.

Final status: `PARTIAL_BACKFILL`. Historical archive preparation and text/metadata publication do not imply release approval or binary sync.
