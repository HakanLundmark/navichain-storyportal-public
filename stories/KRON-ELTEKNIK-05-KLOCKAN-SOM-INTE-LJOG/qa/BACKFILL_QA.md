# Backfill QA — KLOCKAN SOM INTE LJÖG

- Story ID: `KRON-ELTEKNIK-05-KLOCKAN-SOM-INTE-LJOG`
- Locale: `sv-SE`
- Master version: not established/locked in this chat (`null`)
- Locale status: **INCOMPLETE**

## Required asset-slot inventory

| Asset | Classification | Current/historical source | QA/release status |
|---|---|---|---|
| cover_00 | EXISTS_AND_EXPORTABLE | `a_detailed_comic_book_cover_style_illustration_p.png` | REBUILD_REQUIRED — brand-critical logo was generated rather than deterministically composited from official source |
| panel_01 | EXISTS_AND_EXPORTABLE | `a_comic_book_style_illustration_page_panel_vintag.png` | backfill slot usable |
| panel_02 | EXISTS_AND_EXPORTABLE | `a_comic_book_style_illustration_panel_tintin_like.png` | REBUILD_REQUIRED — Navichain logo violates panels 1–6 rule |
| panel_03 | EXISTS_AND_EXPORTABLE | `a_comic_style_illustration_in_a_vintage_ligne_clai.png` | backfill slot usable |
| panel_04 | EXISTS_BUT_NOT_EXPORTABLE | historical `a_comic_illustration_style_scene_in_a_warm_vintage.png` | original binary no longer in active runtime; earlier QA required rebuild |
| panel_05 | EXISTS_BUT_NOT_EXPORTABLE | historical `a_comic_book_illustrated_panel_in_a_warm_retro_i.png` | original binary no longer in active runtime |
| panel_06 | EXISTS_BUT_NOT_EXPORTABLE | historical `a_detailed_comic_book_style_illustration_panel_s.png` | original binary no longer in active runtime |
| panel_07 | EXISTS_AND_EXPORTABLE | `tiderna_finns_redan_i_bilderna.png` | backfill slot usable |
| panel_08 | EXISTS_BUT_NOT_EXPORTABLE | historical `a_comic_book_illustrated_office_scene_in_warm_vi.png` | original binary no longer in active runtime; earlier QA required rebuild for foreign-story content |
| panel_09 | MISSING | — | never verified as valid standalone asset |
| panel_10 | MISSING | — | never verified as valid standalone asset |
| panel_11 | MISSING | — | never verified as valid standalone asset |
| panel_12 | MISSING | — | never verified as valid standalone asset |
| cta_13 | MISSING | — | never produced |

Rejected multi-asset and wrong-story renders are not canonical assets and are not substituted for missing originals.

## Other content

- `ORIGINAL_STORY.md`: EXISTS_AND_EXPORTABLE — canonical user-authored story text.
- PDF carousel: MISSING.
- LinkedIn/social copy: MISSING.
- Complete release QA: MISSING.
- Release manifest: MISSING.
- Release ZIP: MISSING.
- Product/market/brand source files: directly accessible locally; binary sources were not reconstructed or regenerated.

## GitHub binary limitation in this execution

The connected GitHub write surface available to this execution did not expose a local-file binary upload parameter. The original image bytes were therefore not reconstructed, transformed, or re-generated merely to force publication. This locale remains INCOMPLETE and is not marked SYNCED.
