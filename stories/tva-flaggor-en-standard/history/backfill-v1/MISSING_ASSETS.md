# Missing / non-exportable release components

This backfill does not synthesize or regenerate missing files.

## sv-SE
- `panel_08` — MISSING: no directly accessible original binary can be verified in the current source set.
- `panel_09` — EXISTS_BUT_NOT_EXPORTABLE: a panel_09 generation is evidenced in the current chat, but the original binary is not directly accessible now.
- `panel_10` — MISSING: no directly accessible original binary can be verified in the current source set.
- PDF carousel — MISSING for this story/locale.
- LinkedIn/social copy — MISSING for this story/locale.
- release QA/manifest from a completed release — MISSING.

## en-GB
- `panel_04` — no story-faithful panel is exportable; an accessible divergent render was produced but is not a release asset.
- `panel_05` — EXISTS_BUT_NOT_EXPORTABLE: the story-faithful panel was rendered earlier in chat, but its container path was later overwritten by a different generated image; the original binary is no longer directly accessible.
- `panel_07`–`panel_12` — no story-faithful current binaries; accessible divergent renders were produced but are not release assets.
- `cta_13` — no valid story-faithful CTA; an accessible divergent/indexed CTA was produced but is not a release asset.
- PDF carousel — MISSING for this story/locale.
- LinkedIn/social copy — MISSING for this story/locale.
- release QA/manifest from a completed release — MISSING.

## Master/version metadata
- No explicit canonical Story ID or master version was supplied in the source chat. The path slug is derived from the title solely for backfill organization; `masterVersion` remains `null`.
