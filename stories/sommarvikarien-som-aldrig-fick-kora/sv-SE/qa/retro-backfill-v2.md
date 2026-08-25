# RETRO BACKFILL v2 — historical QA / provenance report

Story ID: `sommarvikarien-som-aldrig-fick-kora`
Master locale: `sv-SE`
Master version: `UNSPECIFIED_IN_CHAT`
Backfill status: `PARTIAL_BACKFILL`

This report describes historical source availability and known QA separately. It is not a release QA and does not upgrade any historical render.

## Canonical visual slots

- `cover_00`, `panel_01`–`panel_05`, `panel_07`–`panel_12`: exact historical PNG bytes are directly accessible in the current runtime and are preserved unchanged as `EXACT_ORIGINAL`. No PASS/LOCKED state is inferred where no explicit historical approval is available.
- `panel_06`: two exact historical attempts are directly accessible, but both were previously classified `REBUILD_REQUIRED`; no approved/current canonical master can be selected without guessing. The two binaries are preserved under `historical-renders/`, while the canonical slot remains `SOURCE_NOT_EXPORTABLE` because canonical resolution is ambiguous.
- `cta_13`: a CTA render was produced earlier in this chat, but the original binary is no longer directly accessible in the current runtime. No rerender or reconstruction was performed. Status: `SOURCE_NOT_EXPORTABLE`, QA `UNKNOWN`.
- `panel_09` and `panel_10`: directly accessible candidates exist. Prior backfill QA noted that these are later claim-safe revisions rather than strict reproductions of the user’s original storyboard; this remains a release blocker but does not change their exact-source provenance.

## Failed/superseded historical visual material

Five multi-asset/contact-sheet renders, one earlier cover, one earlier panel 01, one panel 05 rebuild and two panel 06 rebuilds are directly accessible as exact historical PNG bytes. They are preserved for history and review only. The explicitly failed/rebuild candidates retain `REBUILD_REQUIRED`.

## Narrative and localization

- The directly accessible historical `ORIGINAL_STORY.md` is preserved byte-identically and exported as the sv-SE Narrative Master.
- `source/original-story-en-GB.md` is a faithful deterministic text translation from the sv-SE Narrative Master. It is `DERIVED_TRANSLATION` and is not a Narrative Master.
- An earlier preflight/reality/product review occurred; previous safe reasoning summaries establish that modern-prop/timeline and insurance-claim wording were reviewed. The exact original preflight/correction-log artifact is no longer directly exportable, so no reconstructed preflight file is created.
- No explicit locked master version is verifiable; `masterVersion` remains null and Story Lock is not claimed.

## Derived/release material

- PDF carousel: `NOT_CREATED` for this story.
- LinkedIn/social copy: `NOT_CREATED`.
- Historical release manifest/ZIP: `NOT_CREATED` before this retro backfill.
- This backfill creates archive/inventory/publish-request artifacts only; they are historical-preservation outputs, not release outputs.

## Binary transport

The current ChatGPT runtime does not expose a Chrome-download or Nextcloud action that can be invoked by the assistant. Therefore the requested automatic path `ChatGPT → Chrome → local capture → Nextcloud → router → publisher → GitHub` cannot be executed end-to-end from this tool surface. Local packages and publish requests are created and made downloadable; text/metadata can be written to GitHub directly as a fallback. Binary source bytes are not claimed GitHub-published until final canonical paths are read back from GitHub.

No image was rerendered, redrawn, cropped, restyled, repaired or substituted during this backfill.
