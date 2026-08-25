# RETRO BACKFILL v2 — NC-SWF-018

Checked: 2026-08-24T19:34:00+02:00

## Result

Overall status: **PARTIAL_BACKFILL**.

Narrative Master (`sv-SE`) is preserved at `stories/NC-SWF-018/ORIGINAL_STORY.md` and was read back from `main`. A faithful direct `en-GB` text translation was published at `stories/NC-SWF-018/source/original-story-en-GB.md` and was read back from `main`. The English artifact is `DERIVED_TRANSLATION`, not Narrative Master.

The historical current-assets archive remains **INCOMPLETE** for release: it contains 13 canonical-named visual candidates and lacks `panel_04`. Exact original bytes are available locally for the 13 candidates. Historical QA remains separate from provenance: `panel_06` and `panel_07` are `REBUILD_REQUIRED` because the UI name drifts to Kalle Svensson; `panel_10`–`panel_12` are `REJECTED` landscape/foreign-story renders. Three exact rejected `panel_04` attempts are also retained as historical evidence and are not substituted for the missing canonical asset.

No PDF carousel, LinkedIn/social copy, social image set, thumbnail set, or release ZIP was created historically for this story.

## Automatic transport

The requested automatic chain is `ChatGPT → Chrome download → local capture → Nextcloud archive → hardened router → publisher → GitHub`.

This chat runtime can create the payload ZIPs and publish-request files, but it has no connected Chrome/local-capture/Nextcloud/router/publisher action and therefore cannot initiate or verify that external automatic chain. No manual `--once`, curl or local publisher command was used. The GitHub connector also does not accept a local binary file path for `create_blob`; transporting the ~88 MB payload by embedding base64 through the model/tool argument surface is not a safe or practical file-streaming channel.

Consequently, canonical image binaries remain unpublished on GitHub and `githubPublishedBinaryAssets` remains `0`. Binary status is **GITHUB_PUBLISH_FAILED**. Nextcloud archive status is **UNVERIFIED**. This must not be reported as `SYNCED`.

## Prepared exact publish payloads

- `NC-SWF-018-sv-SE-retro-v2-publish-payload.zip` — 87,921,340 bytes — SHA-256 `02c6717a9cf91da02eeec92de5bac7cb06d0ad2289664ab65e53d7b2876c296b`
- `NC-SWF-018-sv-SE-retro-v2-publish-payload.publish.json` — 7,317 bytes — SHA-256 `1d662a6efecaf06b25cf9eb2cac185d4d201f89cf98092060574cc4a50849471`
- `NC-SWF-018-sv-SE-retro-v2-publish-payload.publish.zip` — 2,107 bytes — SHA-256 `a6f297d97a9d31e44449dd1042188f8d8b6d62b0bb5474da65dd11015ffc14a8`
- `NC-SWF-018-en-GB-retro-v2-publish-payload.zip` — 3,970 bytes — SHA-256 `dd2ee334bc87623da76c3171673ffd75904b1796f085eec926426e06553facce`
- `NC-SWF-018-en-GB-retro-v2-publish-payload.publish.json` — 701 bytes — SHA-256 `4a44c4d8684d5aa6fd34b47fc284b0fb1c1ddf040c44a003a35f5f336fb30dd9`
- `NC-SWF-018-en-GB-retro-v2-publish-payload.publish.zip` — 620 bytes — SHA-256 `37c438edc107bfce97a3c761ca2119bd35ac04cd59407276cbdbfb2a76a1ee67`
- full audit/export ZIP `NC-SWF-018-retro-backfill-v2-full-export.zip` — 87,943,237 bytes — SHA-256 `aa239bfedfd18e8e4f007e4702c818cd636a0e9ab814f2be5abcca6a91b8982d`

These payloads were locally ZIP-tested and their member size/SHA-256 values were checked against the exact source bytes used to build them. Package preparation is not proof of Chrome capture, Nextcloud archival, publisher ingestion, GitHub binary publication, or sync.
