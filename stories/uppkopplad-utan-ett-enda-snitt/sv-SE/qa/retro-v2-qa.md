# Retro Backfill v2 QA — uppkopplad-utan-ett-enda-snitt

- Narrative Master: `sv-SE`, exact source bytes, SHA-256 `f95f183e2e02fd3346f6f8f6f016a85f58b2db8f9fcda89136f4b3519d17e3ba`.
- English story: `en-GB`, faithful text-only `DERIVED_TRANSLATION`, SHA-256 `6f1b98e5ba18907c8a971555af50c25596fcdc0368bac7a571186df2c4f66a63`; it is not the Narrative Master.
- Current local historical inventory: 161 classified items — 115 `EXACT_ORIGINAL`, 0 `CHAT_RECOVERED`, 2 `DERIVED_TRANSLATION`, 28 `SOURCE_NOT_EXPORTABLE`, 16 `NOT_CREATED`.
- The latest current `sv-SE` candidate exists as exact source bytes for all 14 canonical slots.
- `panel_04` current candidate is the latest actually generated source-chat render `/mnt/data/teknikerns_svåra_offertbeslut.png`, SHA-256 `6f19486113d0754eaa7af1c1176d85cfab65077ce9186b1a631d5e0d1994f695`, and remains `REBUILD_REQUIRED`. Its older packaged predecessor is preserved separately in the historical archive.
- Visual provenance is separate from QA. The 14-image set is not promoted to `PASS`/`LOCKED`; `releaseQaAsserted=false` remains in story metadata.
- Earlier superseded/rejected cover, CTA and panel candidates are retained separately where they can be identified unambiguously.
- No rerendering, reconstruction, restyling, generative fill, story-content cropping or PDF-derived replacement was used.
- `en-GB` visual assets, PDF and social output were not created; only the faithful text translation exists.
- GitHub binary read-back currently fails: canonical image paths and the historical PDF are not present on `main`.
- An exact-logo `navichain-binary-backfill-v2` manifest remains in `backfill-binary-queue/` and had not assembled to its final destination at read-back.
- This ChatGPT runtime has no Chrome-download, Nextcloud archive, hardened-router or local-publisher action surface, so that external automatic transport chain cannot be verified here.

Final Retro Backfill v2 state: `PARTIAL_BACKFILL`. Binary publication status: `GITHUB_PUBLISH_FAILED`. Metadata/text read-back: PASS.
