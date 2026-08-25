# Retro backfill v2 — missing / source classification

## sv-SE

### EXACT_ORIGINAL currently accessible
- `cover_00` + `panel_01`–`panel_12` + `cta_13`: exactly 14 current historical PNG candidates are directly accessible as exact runtime bytes.
- PDF carousel: `resan_tillbaka_som_aldrig_behovde_ske_sv-SE_carousel.pdf`, 14 pages, SHA-256 `68ef70beed603fd1e64d482d356c62e2a832a6b2c51730d6da2c7fe3946195ab`.
- Package/PDF inspection material and package manifests are accessible.
- `NAVICHAIN-OFFICIAL-LOGO.png` and `Korrekt QR kod till signup.png` are exact accessible source/reference binaries.
- Historical current-story multi-asset/contact-sheet attempts are also exact accessible artifacts, but they are not promoted to canonical release images.

### SOURCE_NOT_EXPORTABLE
- An older `assets-manifest.json` records a different historical candidate for each of the 14 canonical slots. None of those 14 recorded SHA-256 byte identities is present in the current runtime. They were not rerendered, reconstructed, cropped, restyled or substituted.

### NOT_CREATED release components
- `social/linkedin-sv-SE.txt`.
- formal `qa/raster-qa.yaml`.
- formal `qa/pdf-qa.yaml`.
- formal `manifest/release-manifest.yaml`.

### Historical QA
The latest exact 14-image package is not marked RELEASE/PASS. `panel_05`, `panel_06`, `panel_07`, `panel_09` and `panel_10` are explicitly `REBUILD_REQUIRED`; the remaining assets retain review/validation requirements rather than being silently upgraded to PASS/LOCKED.

## en-GB

### DERIVED_TRANSLATION
- Faithful English story text is published at `stories/KRON-ELTEKNIK-02-RESAN-TILLBAKA/source/original-story-en-GB.md`; it is explicitly not the Narrative Master.

### EXACT_ORIGINAL currently accessible
- `cover_00`: exact historical candidate, QA `REJECTED/INCOMPLETE_LOCALE_SOURCE`.
- `panel_01`: exact historical candidate, QA `REJECTED` because the rendered text is Swedish and the scene drifts from the active Parts story.

### NOT_CREATED
- `panel_02`–`panel_12`.
- `cta_13`.
- PDF carousel.
- LinkedIn/social copy.
- formal release QA.
- release manifest.

## Binary publication status
`GITHUB_PUBLISH_FAILED` for historical binaries in this execution. Exact binary sources are locally accessible, but the required Chrome → local capture → Nextcloud → hardened router → publisher automatic transport cannot be invoked from the current ChatGPT tool surface. The GitHub connector can accept explicit base64 blob payloads, but the multi-megabyte image/PDF/archive payload set is too large for a practical in-chat transfer. No creative or binary reconstruction was used as a workaround.

Overall story/release status remains `INCOMPLETE` / `PARTIAL_BACKFILL`.
