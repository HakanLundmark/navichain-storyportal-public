# GitHub publish limitation for binary source archives

The following source archives exist locally, are directly readable in the active runtime, and are therefore source-exportable. They were **not** published to GitHub because the available GitHub connector write actions accept UTF-8/base64 content strings but do not accept a local file path for direct binary upload; safely transferring these large binary archives through the connector was not possible in this run.

- `sv-SE/source/current-assets.zip` — SHA-256 `93d8685c1518b80ed1301c84525a195b1242c15b8569baaeedd1aa1e55b58aaa`
- `sv-SE/qa/panel_04-rejected-attempts.zip` — SHA-256 `cd56d41021fe60b8ee478e32bcf71a8becd97938613e1fbce66307e65442db0c`
- `sources/story-sources.zip` — SHA-256 `29f7447a35deef6b1f1153e5e86b1843ea4b3b1940462f5bb83c41fb4bffd78b`

The member-level inventory and SHA-256 checksums are published in `manifest/asset-list.json`.
