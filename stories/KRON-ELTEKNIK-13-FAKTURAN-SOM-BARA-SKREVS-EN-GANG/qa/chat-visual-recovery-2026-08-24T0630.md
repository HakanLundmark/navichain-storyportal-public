# CHAT VISUAL RECOVERY — 2026-08-24 06:30 +02:00

Story: `KRON-ELTEKNIK-13-FAKTURAN-SOM-BARA-SKREVS-EN-GANG`  
Title: `FAKTURAN SOM BARA SKREVS EN GÅNG`  
Repository: `HakanLundmark/-navichain-storyportal`  
Branch: `main`

Protocols read immediately before recovery:
- `CHAT-VISUAL-RECOVERY.md` @ `c1016cbf1fe3632cb4ef7e274d1c7f7cce91a79d`
- `BINARY-BACKFILL-RETRY.md` @ `685577a9d7b5ba5e8c7e6e0a3a7199a8063e94a4`

## Rules applied

Historical BACKFILL metadata was used only as inventory/recovery hints. Every source listed below was rechecked against the current source-chat runtime. No image was rerendered, redrawn, restyled, filled, cropped from a multi-asset sheet, extracted from a PDF, or substituted from another locale. Provenance and visual QA remain separate.

Only `sv-SE` was actually produced for this story in the source chat. No other locale has a verified canonical image set in this recovery context.

## sv-SE — current recovery inventory

The current runtime contains exact original PNG bytes for all 14 canonical slots. Each listed file is 1024×1536 and is directly readable from the current runtime. Therefore the intended provenance for these candidates is `EXACT_ORIGINAL`, not `CHAT_RECOVERED`.

| Asset | Current candidate / source file | Bytes | SHA-256 | Intended provenance | QA |
|---|---|---:|---|---|---|
| cover_00 | `a_detailed_comic_book_style_illustrated_poster_cov.png` | 3,658,106 | `45c99caa06db6ad395bb9fc7226724cd5535f57ee35aeac3246d23e96a4d9d50` | EXACT_ORIGINAL | REBUILD_REQUIRED — brand-critical logo was rendered in-image |
| panel_01 | `a_comic_book_style_panel_illustration_with_a_warm.png` | 3,554,699 | `87e4b58042b81b7e8a583e467d8af478cca3dd90fb2b43e95d0e35243b841ee1` | EXACT_ORIGINAL | REBUILD_REQUIRED — panel 1–6 logo-absence rule / QA blocker |
| panel_02 | `en_liten_felskrivning_i_bokföringen.png` | 3,706,391 | `6d5a48fb49924483e0a08e057c43f24a23c1e3e445d82946766449e03581a9f1` | EXACT_ORIGINAL | REBUILD_REQUIRED — panel 1–6 logo-absence rule / QA blocker |
| panel_03 | `a_detailed_comic_book_infographic_style_illustra.png` | 3,571,456 | `d34605948d4d241844cbfea6751ccb04c5c4a806bee784419c7bcc8482cd20ad` | EXACT_ORIGINAL | REBUILD_REQUIRED — panel 1–6 logo-absence rule / QA blocker |
| panel_04 | `a_comic_book_illustrated_infographic_panel_in_wa.png` | 3,591,746 | `6a79784eef661ec0c3c4e06365ad887719e669e8bf6c9a82b445408d48c1f9bc` | EXACT_ORIGINAL | REBUILD_REQUIRED — panel 1–6 logo-absence rule / QA blocker |
| panel_05 | `a_vintage_comic_infographic_style_poster_illustr.png` | 3,520,089 | `8a4f51d93b4ad4495ab6e45effca9bf86529703ce8be1d726c83d7736a1bc3db` | EXACT_ORIGINAL | REBUILD_REQUIRED — panel 1–6 logo-absence rule / QA blocker |
| panel_06 | `yvonne_ser_stressen_växa.png` | 3,691,227 | `71540b1af0c59ab9074552f2a5626b10073df161db78f1fd38b9417048e1eb77` | EXACT_ORIGINAL | UNREVIEWED — later corrected story candidate; no formal PASS/LOCKED state verified |
| panel_07 | `a_comic_book_infographic_style_illustration_po.png` | 3,258,222 | `4d81e78559efc86170dff1e1edc5eda19578284be2ee0d3cc4e6d83a6018c025` | EXACT_ORIGINAL | REBUILD_REQUIRED — does not depict discovering the already-connected accounting connection |
| panel_08 | `a_comic_book_style_poster_page_illustration_like.png` | 3,237,855 | `95d06b3dc2e3a6f24f89ba1cd97f900a6e81034a012c80086063f95e064ef614` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong transport/routing story content |
| panel_09 | `a_comic_book_infographic_style_illustration_in_a.png` | 3,389,887 | `dc667d7dd2359970f0bd7168a0e9d135829a8bc3723b848653e0c3d220f02d7a` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong story content |
| panel_10 | `a_comic_infographic_illustration_style_scene_with.png` | 3,491,467 | `028217220e6186717d54d201220b2dabc3232966129b5353992e7a0b9462d7c9` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong story content |
| panel_11 | `a_comic_infographic_style_poster_illustration_vin.png` | 3,253,503 | `87a76352704798e7cafdfbc461831cc84dbb5fef398667395940bd3a3fbc5c2b` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong story content |
| panel_12 | `a_detailed_comic_infographic_poster_style_illustra.png` | 3,255,228 | `368afd20c4ec24e7569a2b58de90ee1bd7c46857aefa849578770bec39b1b0a5` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong story content |
| cta_13 | `a_detailed_poster_comic_style_advertisement_scene.png` | 3,078,246 | `e74636b24b72c356064799fc48fa9d6a0cea913b3d9888a4092165ab3796aaca` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong story + brand-critical CTA failure |

The source draft ZIP also contains byte-identical copies of the earlier 14-slot working set, and those bytes were independently matched against the standalone PNGs for the package-era candidates. Additional exact historical candidates/retries are present in the runtime, including earlier `panel_06`, `panel_07` and `panel_08` attempts. They are not silently promoted to new canonical slots when revision order is ambiguous. No multi-asset render is cropped for recovery.

## Binary publication attempt

The current v2 protocol requires the actual preserved bytes to be passed to `create_blob(..., encoding=base64)` and then referenced from a `navichain-binary-backfill-v2` queue manifest. The connected GitHub action exposes `create_blob` only with literal inline text/base64 `content`; it does not expose a mounted-file/file-reference parameter. The exact source candidates above are multi-megabyte PNGs (approximately 3.1–3.7 MB each). The source runtime and GitHub connector do not expose a lossless local-file → GitHub-blob byte-stream handoff. Materialising the full set as model/tool-message base64 is not a practical supported file channel and risks truncation/corruption.

Result for all 14 directly accessible `EXACT_ORIGINAL` candidates: `GITHUB_PUBLISH_FAILED` before a complete valid v2 blob set and queue manifest could be created. No partial queue manifest was written, and no exact source was misclassified as `CHAT_RECOVERED` merely to reduce payload size.

## Mandatory GitHub read-back

After the attempt, the canonical image directory `stories/KRON-ELTEKNIK-13-FAKTURAN-SOM-BARA-SKREVS-EN-GANG/sv-SE/images/` was read from `main` and returned not found. Therefore:

- assembler workflow for this recovery: not started;
- published canonical image files from this recovery: 0;
- provenance sidecars from this recovery: 0;
- `story.json` / `stories/index.json`: intentionally not updated by this recovery, because the protocol requires successful final image + sidecar read-back first;
- `COMPLETE + SYNCED`: NO;
- locale status remains `INCOMPLETE` because the visual QA/rebuild blockers remain independently in force.
