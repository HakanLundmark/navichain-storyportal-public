# Binary Backfill Retry — 2026-08-24 00:22 +02:00

Story: `sandningen-som-visste-vart-den-skulle`
Repository: `HakanLundmark/-navichain-storyportal`
Branch: `main`
Protocol: current `BINARY-BACKFILL-RETRY.md` read from `main` immediately before this retry.

## Runtime re-inventory

Previous backfill metadata was used only as a recovery hint. Exact source filenames were rechecked against the current chat runtime. No image was rerendered, reconstructed, cropped, extracted, or substituted.

Twelve prior canonical sv-SE original PNGs are directly accessible now and match the byte sizes/SHA-256 values recorded by the earlier backfill inventory:

- `cover_00` — `sändningen_som_visste_vart_den_skulle.png` — 3,367,475 bytes — `419f6325bb96cf82ae20bc0ce9b7d65094ed3473b4f44d994b8df9aabc3ecb30`
- `panel_01` — `tre_adresser_en_order_en_plan.png` — 3,419,217 bytes — `6d717b818832590c3d8178aa1fbcd05194758420b2c88cd7c34f3c8fd9477969`
- `panel_02` — `tre_bokningar_ingen_koppling.png` — 3,350,380 bytes — `40779d85e3abd9a13e7c0bc8af2b1ebbe52307e26d8ab49832d90f7277ab9e06`
- `panel_03` — `stressad_dispatcher_räknar_orderstatus.png` — 3,446,723 bytes — `65d1957da362373603af5c1dc2611df3e8028a74ded06a1b74fe838fc6363d9b`
- `panel_04` — `robban_på_jakt_efter_dagens_leveranser.png` — 3,360,756 bytes — `0ef515028f19c7019ca61aa43bade11d7ffa59e4cf3d923262d2ca32bc46271e`
- `panel_05` — `tre_formulär_ett_felpostnummer.png` — 3,516,975 bytes — `fa16804852cf25583e346959d6fb049ec0c53cba290664fc111a289f7af9702d`
- `panel_06` — `sanna_och_den_röda_orderkaoset.png` — 3,547,168 bytes — `3585575c8f46812b5de9e07048acca6858ac5e12cdca63674ad6080a706f141e`
- `panel_07` — `en_bokning_tre_vägar_ut.png` — 3,412,969 bytes — `5943f0d939ca41ee023fb74a4eb26119cd6755c75f210c6611a0652bc29c573e`
- `panel_08` — `noggrann_kontroll_av_multistopporder.png` — 3,485,098 bytes — `7f2123badac24b4f96b444648e4e9eda60dfc84e58c10e1a6c5a71d17ad279d2`
- `panel_09` — `masterbokning_på_gröna_vägar.png` — 3,505,222 bytes — `175f3533e4d90dd39b7d0b0e0f628957b81b3ddc10380ba0ced88f77e0d18b8f`
- `panel_10` — `imagegen.png` — 3,578,244 bytes — `d4ddf654d746c3ea0f3b7614a7f0fc10236f227bac90da83aecd48ebd36144a8`
- `panel_12` — `kontroll_på_hela_leveransen.png` — 3,304,000 bytes — `4052b26b30c2ffaf5e4d611a38005585978918755dda6e6d9e0fd57ff73c4ca8`

`panel_11` and `cta_13` remain missing as story-correct canonical originals. The directly accessible later panel-like/CTA-like generations are wrong-story/rejected artifacts and are not substituted. No verified canonical en-GB locale originals are promoted.

## Binary transport attempt/result

The current GitHub connector was rechecked. The protocol-required Git blob action accepts literal `content` plus `encoding=utf-8|base64`; it still exposes no mounted-file/file-reference parameter. The local PNGs are directly accessible to the runtime, but the exact multi-megabyte bytes cannot be losslessly handed to the connector through a supported file channel. The only possible connector path would require materialising the entire binary payload as literal base64 through model/tool messages; the runtime-to-tool response channel truncates large base64 output, so complete original bytes cannot be transferred without corruption. Chunking does not solve that handoff because every complete chunk still has to traverse the same truncating textual channel.

Therefore this retry is `GITHUB_PUBLISH_FAILED` before a valid complete binary queue manifest can be created. No partial queue manifest was written. No assembler workflow was started.

## Mandatory read-back

The canonical `stories/sandningen-som-visste-vart-den-skulle/sv-SE/images/` path was read after the retry and is still absent on `main`. Therefore `githubPublishedBinaryAssets` remains 0. No `SYNCED` status is claimed.

## Result

- sv-SE: `INCOMPLETE`; 12 canonical originals are currently `EXISTS_AND_EXPORTABLE` locally, but binary publication is `GITHUB_PUBLISH_FAILED` due the connector handoff limitation; `panel_11` and `cta_13` are `MISSING`.
- en-GB: `INCOMPLETE`; no verified canonical locale originals are publishable from the current runtime inventory.
- `COMPLETE + SYNCED`: NO.
