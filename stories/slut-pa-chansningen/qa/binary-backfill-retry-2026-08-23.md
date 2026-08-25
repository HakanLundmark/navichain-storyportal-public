# Binary Backfill Retry — SLUT PÅ CHANSNINGEN

Timestamp: 2026-08-23T23:30:00+02:00
Protocol: `BINARY-BACKFILL-RETRY.md`
Repository: `HakanLundmark/-navichain-storyportal`
Branch: `main`

## Result

`GITHUB_PUBLISH_FAILED`

The source runtime was re-inventoried from actual directly accessible files. No image was rerendered, reconstructed, cropped, extracted from the PDF, or substituted during this retry.

The GitHub repository is readable and Git writes are available. The binary protocol requires exact original bytes to be sent to `create_blob` as inline base64 (or as ordered inline-base64 chunks). In this runtime, the directly accessible originals are multi-megabyte files, while the available source-to-connector transfer surface does not accept a mounted file path for `create_blob`; attempts to surface sufficiently large exact base64 through the tool-result channel are truncated. Therefore an exact complete blob payload cannot be transferred to the GitHub connector without changing or truncating the source bytes. No queue manifest was written because doing so without complete verified chunk blobs would be invalid.

A deterministic Git blob-SHA recovery check was also performed for `sv-SE/panel_01` (`936e45085ac9bcf7faf3d4c57b43f71c74b419d4`); GitHub returned 404, so that exact source is not recoverable as a pre-existing orphan blob.

## Directly accessible source binaries re-verified

### sv-SE

- `panel_01` — 3,126,724 bytes — SHA-256 `4cedc040410fc60050c9839fcbb345643996fe7dbf01fa0496dec5d314628665`
- `panel_02` — 3,198,421 bytes — SHA-256 `c258ac6c83552480b16dbfa9cecc4230e970e168ebe9cb6534f794d9ddff2016`
- `panel_03` — 3,233,158 bytes — SHA-256 `e27cd389c1a82daaae9274577af4eac6353791eae7a298a88d91382d6e2d8b6d`
- `panel_04` — 3,102,828 bytes — SHA-256 `de50efe9fa9fc3fb5c52418056e57a4a6d75133b66235834dbc84125632d2777`
- `panel_05` — 3,056,786 bytes — SHA-256 `e14d4430b343ff91f763a07d0d300472b17cb0504c7e30a9cc78b8ea28c309e3`
- `panel_06` — 3,039,034 bytes — SHA-256 `a5e1ff9b3ee0dbe55b31f2ac45bbce06c1ec7afa5e9ad5f4fc6fe12e68cf3e14`
- `panel_07` — 3,020,567 bytes — SHA-256 `8299f1a3cd0738206e57a370fd1e801f6030bef7f8aa3852ddfee515b5c9874f`
- `panel_08` — 3,134,565 bytes — SHA-256 `0d779b7073057799e101e56c6855ad0d72422f5e7e56fbb6e3d143a574ea16c1`
- `panel_09` — 3,070,749 bytes — SHA-256 `aa7713f5e1b7ed75bbad4b73180ad3b327e97e8f5da7daa9febd4720e4d0c06d`
- `panel_10` — 3,165,080 bytes — SHA-256 `c76bc9bad6d30da79868d19d11038a4f1946a7aecd98a89a090cf4dadf81d8c9`
- `panel_11` latest directly accessible render — 3,459,536 bytes — SHA-256 `966e7ac4b2f1e3c2f3d3c0ccd384e133be63cc20e0792075b09ef0f3f0fc0a76` — preserve existing QA/rebuild blocker (1024×1536 does not match the established 1055×1491 series format)
- `panel_12` — 2,990,785 bytes — SHA-256 `8b1f9c7d0fb62692da9d9fbddf0673bc4f06ae47a4673829c46f6d1d47e534b3`
- `cta_13` — 3,075,826 bytes — SHA-256 `4fcdeaefa4951be4c008e877c73a74286ef74819f700de6c09a952ff2f832baa`
- 14-page PDF — 4,834,860 bytes — SHA-256 `38c9298f561ad54a8d75218e550cee973ba3d4643ebef7e18d37cfc15e46e6ba`

`cover_00`: `SOURCE_NOT_EXPORTABLE` as a standalone original. The PDF was not used to manufacture a replacement original image.

### en-GB

- `panel_01` — 3,034,737 bytes — SHA-256 `8e58b3da80931706b178385861d5778f8ef903c77a0f5833e8d29b99ce597a53`
- `panel_02` — 3,081,353 bytes — SHA-256 `e293b00bce04858db5a14a016f104dc84854ce3a0b2d64538fd82160182d4b36`
- `panel_03` — 3,020,592 bytes — SHA-256 `7906d8026f605d5f2cf21235eb952ad8c7540593b9368f14789da073e2f989ff`
- `panel_04` — 3,143,174 bytes — SHA-256 `d944ef863f7670943b4ff3bbdfcfa43982027d0327c57ec445ea5dedbe0b84af`
- `panel_05` — 3,016,260 bytes — SHA-256 `f273e24fbae8c0d35f58487bdb7002adb1e580af182d4d972db4a9dd67546fe4`
- `panel_06` — 2,945,887 bytes — SHA-256 `2750c858e81d90a306654f95cb935043cf9ef9a8b079b3b4c3239abb573e8f56`
- `panel_10` — 3,017,112 bytes — SHA-256 `11ca4e4aeb2a0367f4193b9dab7dd6892d8c99b831421fa014db290cfaf24eef`
- `panel_11` — 3,253,010 bytes — SHA-256 `19f0c4be6c8b3da323e33264e373ae26d370a2403a1fe2c41aa20d804291587b` — preserve existing format blocker (1536×1024 landscape)
- `panel_12` — 3,252,860 bytes — SHA-256 `3723cc6f9b87b4eb04c3039c333cda6e5efcdee229aa59c20193be1d6bab62bf`

`cover_00`, `panel_07`, `panel_08`, `panel_09`: `SOURCE_NOT_EXPORTABLE` as standalone originals in the current runtime.
`cta_13`: no acceptable canonical English CTA source was verified.

## Metadata rule

`story.json` and `stories/index.json` were deliberately not changed in this retry because no final binary destination was assembled and read back from GitHub. `COMPLETE + SYNCED` is not claimed.
