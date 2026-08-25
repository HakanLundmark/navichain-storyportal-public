# Backfill QA — NC-SWF-018 / sv-SE

Status: **INCOMPLETE**

The directly accessible current-assets ZIP contains 13 canonical-named image files: cover_00, panel_01–panel_03, panel_05–panel_12 and cta_13. It does not contain panel_04.

Release completeness is blocked because panel_04 has no valid active-story render, while the directly accessible panel_10, panel_11 and panel_12 files are landscape/foreign-story outputs from this chat and are therefore not valid release masters. Three panel_04 rebuild attempts are preserved verbatim in `panel_04-rejected-attempts.zip`; they are foreign-story outputs and are not treated as canonical assets.

Additional notes: panel_06 and panel_07 contain the UI name `Kalle Svensson` instead of canonical `Kalle Nordin`; the files are source-exportable but not release-locked. The current no-index CTA is contained in the current-assets ZIP and its QR was previously decoded in-chat to `https://navichain.se/signup`. No PDF carousel and no LinkedIn/social copy for this story were produced in this chat. No release ZIP is created because the locale is incomplete.
