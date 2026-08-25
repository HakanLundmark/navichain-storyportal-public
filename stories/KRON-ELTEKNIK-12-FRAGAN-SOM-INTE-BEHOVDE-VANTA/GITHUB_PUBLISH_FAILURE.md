# GitHub publish failure — binary release payload

Status: `GITHUB_PUBLISH_FAILED`

The source material is locally complete for `sv-SE`: exactly 14 approved release images (`cover_00`, `panel_01`–`panel_12`, `cta_13`), the 14-page PDF carousel, social copy, QA, manifest, sources and a release ZIP are directly accessible in the current chat runtime.

The connected GitHub integration is readable and text writes succeed, but its available binary write action accepts blob bytes only as in-band string/base64 content. The connector does not expose a file-path/file-reference upload argument that can transfer the directly accessible multi-megabyte PNG/PDF/ZIP files from the local runtime unchanged. In-band reconstruction/encoding of the full 14-image release plus the 65 MB PDF and ~96 MB ZIP is not a viable connector transfer path and would not satisfy the requirement to publish the directly accessible originals through a file upload interface.

No missing release image was regenerated, reconstructed from a PDF, or substituted.

The complete local release ZIP is retained in the task runtime as:
`/mnt/data/github_backfill/releases/KRON-ELTEKNIK-12-FRAGAN-SOM-INTE-BEHOVDE-VANTA/unversioned/KRON-ELTEKNIK-12-FRAGAN-SOM-INTE-BEHOVDE-VANTA-sv-SE-release.zip`
