# RETRO BACKFILL v2 — INGEN LÖSEN ATT KRÄVA

Checked: 2026-08-24T19:05:00+02:00

## Result

**FINAL STATUS: PARTIAL_BACKFILL**

This run did not rerender, redraw, reconstruct, crop, restyle or substitute any historical visual asset.

The canonical sv-SE Narrative Master was copied byte-for-byte from the existing `ORIGINAL_STORY.md` into `sources/original-story-sv-SE.md`. GitHub blob identity is identical (`dcf23961cc4092421fa764996f730536df6327ea`), so its provenance is `EXACT_ORIGINAL`.

A faithful en-GB text translation was created directly from that Narrative Master and published as `sources/original-story-en-GB.md` with provenance `DERIVED_TRANSLATION`. It is explicitly not a Narrative Master and no en-GB images were generated.

The historical sv-SE release manifest proves a complete 14-image raster set at 1055×1491 and records raster/PDF/release QA `PASS`. Those image bytes are not present in the current runtime and the actual historical renders are not directly exposed in this current chat, so this run cannot legitimately classify them as `EXACT_ORIGINAL` or `CHAT_RECOVERED`. Their current recovery result is `SOURCE_NOT_EXPORTABLE`; the historical QA status remains `PASS`.

The two historically identifiable en-GB render candidates remain `REJECTED` (`cover_00`) and `REBUILD_REQUIRED` (`panel_01`). Their bytes/renders are not available in the current runtime, so they are `SOURCE_NOT_EXPORTABLE`. The remaining en-GB image slots have no reliable creation evidence and remain `NOT_CREATED`.

The historical sv-SE PDF and release ZIP are evidenced by recorded SHA-256 values but their bytes are not available in the current runtime, so both are `SOURCE_NOT_EXPORTABLE`. Existing LinkedIn copy, release manifest, raster QA, PDF QA and Reality Validation remain present on GitHub.

## Narrative read-back

| item | locale | provenance | SHA-256 | GitHub status |
|---|---|---|---|---|
| Narrative Master | sv-SE | EXACT_ORIGINAL | `28f056cf5f84d2984b2c02ef5f571cd6440f0f63c476b200ee89c7930aba7ea1` | VERIFIED |
| Faithful story translation | en-GB | DERIVED_TRANSLATION | `da2d1f90097cc056217b48aa228dbd4b97b35566e584392d7f01fb6535d01e8d` | VERIFIED |

## Binary state

- sv-SE canonical images: 14 historically evidenced, 0/14 published to canonical GitHub image paths in this run; current recovery result `SOURCE_NOT_EXPORTABLE`; historical QA `PASS`.
- en-GB images: 2 historically identifiable rejected/rebuild candidates are `SOURCE_NOT_EXPORTABLE`; 12 slots are `NOT_CREATED`; 0/14 published.
- sv-SE PDF: `SOURCE_NOT_EXPORTABLE`, historical QA `PASS`, SHA-256 `5726383cca9b3d9dcc2448cc6d37bf017c26c5514667a3d00b3f3fd4655b012b`.
- sv-SE release ZIP: `SOURCE_NOT_EXPORTABLE`, SHA-256 `354d78ae9212482a610d2f60d083aec028d135481f3e290ea459a7c27dfb583f`.

## Automatic transport

The requested Chrome → local capture → Nextcloud → hardened router → publisher chain is not callable from this chat runtime. No Nextcloud archive is therefore claimed or marked verified. Direct connected GitHub write/read-back was used only for the new text/metadata backfill artifacts.

`stories/index.json` was read back and left unchanged because the indexed binary facts remain correct: `githubPublishedBinaryAssets` is still `0` and the image publication status has not been upgraded.

Detailed inventory: `BACKFILL_INVENTORY.json`.
