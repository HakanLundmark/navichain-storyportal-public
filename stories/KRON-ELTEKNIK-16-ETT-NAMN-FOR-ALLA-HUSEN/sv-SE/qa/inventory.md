# Backfill inventory — sv-SE

Status: INCOMPLETE

## Canonical release asset slots

- cover_00: EXISTS_AND_EXPORTABLE, source `/mnt/data/imagegen.png`, SHA-256 `e619788ef1b6f7a874a44c0f03c1306729d76b4df081cff5de1966289a1116e7`, 1055×1491 RGB. QA: REBUILD_REQUIRED because the brand-critical Navichain logo was image-generated rather than deterministically composited from the official logo source, and the raster is below the preferred 1024×1536 portrait quality floor in v6.1.7a.
- panel_01: MISSING as a valid standalone asset. Current-chat attempts that depict multiple scenes/panels are rejected production artifacts and do not count.
- panel_02: MISSING
- panel_03: MISSING
- panel_04: MISSING
- panel_05: MISSING
- panel_06: MISSING
- panel_07: MISSING
- panel_08: MISSING
- panel_09: EXISTS_BUT_NOT_EXPORTABLE. A prior backfill inventory in this same story records that a standalone panel_09 was produced, but its original binary path is no longer present in the active runtime. It was already marked REBUILD_REQUIRED because it predates the corrected Story Lock wording and introduced ungrounded location/address detail.
- panel_10: MISSING as a valid standalone asset. A currently accessible split-layout render includes a panel-10-like scene together with cover content; it is `MULTI_ASSET_RENDER` and is not a canonical panel asset.
- panel_11: MISSING
- panel_12: MISSING
- cta_13: MISSING

## Currently accessible rejected render artifacts

These files are directly accessible in the active runtime, but are not canonical assets because they violate one-asset-per-render-call / full-frame rules:

1. `/mnt/data/a_full_page_comic_style_illustration_infographic.png` — 1536×1024 — SHA-256 `cc227ec45821e095d8fe219a7215c7106eebb9d6edb0427420acf376a33ebe68` — multi-panel/contact-sheet style.
2. `/mnt/data/a_full_page_comic_style_infographic_cover_page_in.png` — 1536×1024 — SHA-256 `170f3de80bf9bf6799eed550ff2fc62ae8967b2fb05a35f4928d720318d6e259` — cover plus multiple story panels.
3. `/mnt/data/a_full_color_comic_illustration_style_scene_like_a.png` — 1536×1024 — SHA-256 `6eaa2ceaf8b21702a97823ac47f590e691730aefb9e66c573333d9c4a14cc5b7` — split layout containing cover material and a panel-10-like scene.

## Other material

- ORIGINAL_STORY.md: EXISTS_AND_EXPORTABLE and already present in GitHub from the prior backfill of this same chat story.
- Product Truth source: EXISTS_AND_EXPORTABLE locally as `/mnt/data/NAVICHAIN-PRODUCT-TRUTH.md`.
- Market Truth source: EXISTS_AND_EXPORTABLE locally as `/mnt/data/Navichain_Market_Truth_MASTER_v1.0.md`.
- Official logo source: EXISTS_AND_EXPORTABLE locally as `/mnt/data/NAVICHAIN-OFFICIAL-LOGO.png`.
- PDF carousel: MISSING for this story.
- LinkedIn/social copy: MISSING for this story.
- Release QA: MISSING; only preflight/backfill inventory state exists.
- Release manifest: MISSING because the locale is not release-complete.
- Release ZIP: NOT CREATED because the locale is INCOMPLETE.

## GitHub binary transfer note

The current GitHub connector can create Git blobs from text/base64 but does not expose a local-file parameter or a runtime file-reference bridge for these image binaries. The original PNG bytes therefore cannot be transferred without manually serializing the complete binary payload through the chat tool call, which is not a safe/reliable file bridge for multi-megabyte originals. No image was reconstructed, recompressed, cropped, or regenerated to work around this limitation.
