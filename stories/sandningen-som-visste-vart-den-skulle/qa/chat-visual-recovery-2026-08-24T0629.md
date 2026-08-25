# CHAT VISUAL RECOVERY — 2026-08-24 06:29 +02:00

Story: `sandningen-som-visste-vart-den-skulle`  
Repository: `HakanLundmark/-navichain-storyportal`  
Branch: `main`

Protocols read immediately before recovery:
- `CHAT-VISUAL-RECOVERY.md` @ `c1016cbf1fe3632cb4ef7e274d1c7f7cce91a79d`
- `BINARY-BACKFILL-RETRY.md` @ `685577a9d7b5ba5e8c7e6e0a3a7199a8063e94a4`

## Rules applied

Historical metadata was used only as a hint. Every source was rechecked against the current source-chat runtime. No image was rerendered, redrawn, restyled, filled, cropped from a multi-asset sheet, extracted from a PDF, or substituted from another locale. Provenance and visual QA remain separate.

## sv-SE — current recovery inventory

The current runtime contains exact original bytes for the following unambiguously identified current/historical render candidates. Because the original bytes themselves are present, these candidates qualify for `EXACT_ORIGINAL`, not `CHAT_RECOVERED`.

| Asset | Current candidate / source file | Bytes | SHA-256 | Intended provenance | QA |
|---|---|---:|---|---|---|
| cover_00 | `sändningen_som_hittade_rätt_väg.png` | 3,101,570 | `292e960ec1269a966d47e5aeda88b51bbb553fe3466d57024e2c07c8bca0bd18` | EXACT_ORIGINAL | REBUILD_REQUIRED — historical generated branding is not release-safe under current brand rules |
| panel_01 | `a_comic_graphic_novel_style_illustration_clean_li.png` | 3,435,193 | `92898afc4f42d06fff935274a939953880fcb0b3e046d57b07a03fc7b112444f` | EXACT_ORIGINAL | REBUILD_REQUIRED / historical candidate |
| panel_02 | `a_detailed_comic_book_illustrated_scene_in_an_of.png` | 3,403,179 | `e27239d10dd427310a7299681b1f9966c18631f6fb683958f0ade542df2218bc` | EXACT_ORIGINAL | REBUILD_REQUIRED / historical candidate |
| panel_03 | `a_detailed_comic_book_graphic_novel_style_illust.png` | 3,328,721 | `23c087116c82f828960c4faa49feac736072c9c5c1cd85ea81508737458edc57` | EXACT_ORIGINAL | REBUILD_REQUIRED / historical candidate |
| panel_04 | `lastbilschaufför_granskar_sin_körsträcka.png` | 3,513,886 | `fbf0c0eb6c0fc363d33d35c4279c6a551f8194a56d3acc94b36f90e383486e9a` | EXACT_ORIGINAL | REBUILD_REQUIRED / historical candidate |
| panel_05 | `manuella_formulär_och_dolda_fel.png` | 3,417,266 | `53d483253eb360e6e180a34765844ee4753db097f4ad698a1130da28ad2561d6` | EXACT_ORIGINAL | REBUILD_REQUIRED / historical candidate |
| panel_06 | `a_detailed_comic_style_illustration_panel_page_wi.png` | 3,132,798 | `059f5d9b24e3ec1fe4ababd063ceb31099857d95afb4ab6208f485e79210dee0` | EXACT_ORIGINAL | REBUILD_REQUIRED — wrong-story/brand divergence |

Additional exact historical candidate for `panel_06` is still directly accessible as `allt_i_sannas_huvud.png` (3,277,635 bytes). It is an earlier candidate, not silently substituted for the later current candidate above. Git history would preserve it only if both revisions could be transported in sequence.

The current runtime also contains older cover/panel attempts and multiple collage/storyboard outputs. They are not promoted to additional canonical slots when their asset identity/revision order is ambiguous. Multi-asset renders are not cropped into individual recovery files.

### sv-SE slots without a recoverable current source

- `panel_07`: prior generation/canonical evidence exists, but the previously recorded exact source `en_bokning_tre_vägar_ut.png` is not present now and no current visible-render extraction can be tied unambiguously to this slot without using a multi-asset sheet. `SOURCE_NOT_EXPORTABLE` for this recovery attempt.
- `panel_08`: same condition for `noggrann_kontroll_av_multistopporder.png`. `SOURCE_NOT_EXPORTABLE`.
- `panel_09`: same condition for `masterbokning_på_gröna_vägar.png`. `SOURCE_NOT_EXPORTABLE`.
- `panel_10`: prior source hint `imagegen.png` is not present and no unambiguous current visible-render source is available. `SOURCE_NOT_EXPORTABLE`.
- `panel_11`: no reliable story-correct canonical image candidate verified. `MISSING`.
- `panel_12`: prior source hint `kontroll_på_hela_leveransen.png` is not present and no unambiguous current visible-render source is available. `SOURCE_NOT_EXPORTABLE`.
- `cta_13`: no reliable story-correct canonical CTA candidate verified. `MISSING`.

## en-GB

No exact canonical en-GB original binary is directly accessible in the current runtime and no visible render can be tied unambiguously to a correct en-GB canonical slot. The latest en-GB generation attempt failed technically. No wrong-story/multi-asset output is substituted. All 14 canonical en-GB slots remain `MISSING`/not recovered.

## Binary publication attempt

The current v2 protocol requires exact bytes to be passed to `create_blob(..., encoding=base64)` and then referenced from a `navichain-binary-backfill-v2` queue manifest. The connected GitHub action still accepts only literal text/base64 content; it has no mounted-file or file-reference parameter. The exact candidates above are multi-megabyte PNGs. There is no lossless runtime-file → GitHub-blob binary handoff exposed in this execution. Materialising every multi-megabyte original as model/tool-message base64 is not a supported practical file channel and the response path truncates large payloads. Therefore a complete blob set cannot be created without risking corruption.

Result for every directly accessible multi-megabyte `EXACT_ORIGINAL` candidate above: `GITHUB_PUBLISH_FAILED` before a valid v2 queue manifest could be created. No partial queue manifest was written and no source class was falsely changed to `CHAT_RECOVERED` merely to reduce file size.

## Mandatory GitHub read-back

After the attempt, `stories/sandningen-som-visste-vart-den-skulle/sv-SE/images/` was read from `main` and returned 404 / not found. Therefore:

- assembler workflow for this recovery: not started;
- published canonical image files from this recovery: 0;
- provenance sidecars from this recovery: 0;
- `story.json` / `stories/index.json`: intentionally not changed by this recovery, because the protocol requires successful final image + sidecar read-back first;
- `COMPLETE + SYNCED`: NO.
