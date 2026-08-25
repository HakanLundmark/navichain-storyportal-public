# GitHub publish status

Story: `uppkopplad-utan-ett-enda-snitt`  
Locale: `sv-SE`  
Backfill source status: COMPLETE locally (14/14 canonical image assets are directly exportable in the current chat runtime).

GitHub publication status: **GITHUB_PUBLISH_FAILED for binary release content**.

The connected GitHub action surface used in this chat can create/update UTF-8 text files, but it exposes no local-file/binary upload parameter for the existing PNG, PDF, source-image, or ZIP files. The binary assets were therefore not reconstructed, regenerated, or substituted.

Text metadata/source files successfully published include `ORIGINAL_STORY.md`, `story.json`, README, social copy, QA, portal manifest, release manifest, asset manifest, and `stories/index.json` entry.

Do not treat this locale as `SYNCED` until the exact 14 original image files, PDF, sources and release ZIP have been uploaded and read back from GitHub.
