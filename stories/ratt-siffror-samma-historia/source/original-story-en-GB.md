# CORRECT NUMBERS, SAME STORY

**Story ID:** `ratt-siffror-samma-historia`  
**Story ID authority:** backfill-derived from canonical title and episode 34 context in this chat  
**Source locale:** sv-SE  
**Locale:** en-GB  
**Translation type:** faithful  
**Narrative Master:** false  
**Source class:** DERIVED_TRANSLATION  
**Master version:** not explicitly established in this chat  
**Status:** Faithful translation of the available sv-SE Narrative Master; visual locale not created

## Premise

Ingrid Sund, traffic dispatcher at Björklunda Åkeri AB, discovers that an already issued CMR shows the wrong number of packages: 22 instead of 24. The conflict is not that Navichain detects the error, but that Ingrid herself sees it and must correct an already issued document without the original version disappearing.

The story demonstrates the verified CMR mechanism in Navichain: issuing freezes a snapshot, creates a SHA-256 hash, requests an RFC 3161 timestamp and adds a public verification QR. Issued/picked-up bookings are locked. Re-issuing is user-initiated, requires a stated reason and retains the superseded version; verification can report intact, superseded or failed integrity. The story makes no claim to eIDAS-qualified signer identity or that the document itself determines a legal dispute.

## Cast

- **Ingrid Sund** — traffic dispatcher, Björklunda Åkeri AB; protagonist.
- **Robban Ek** — driver, Björklunda Åkeri AB; cameo in panels 04 and 11.

## Cover — cover_00

Ingrid holds two almost identical CMR papers up against the light from the window. The clear difference is the package count. An old archive binder with crossed-out ink in the background symbolises the old way of correcting errors.

## Panel 01 — An error is discovered after issue

**Visual:** Ingrid reviews an already sent and locked CMR on screen and notices that the number of packages is wrong — 22 instead of 24.  
**Text:** "Already issued. Already sent. And already wrong."

## Panel 02 — The old fear: what happens to the original?

**Visual:** Ingrid imagines an old paper workflow in which one document is voided, a new one is written and the version status becomes difficult to follow.  
**Corrected text:** "In the past, a correction could make it difficult to follow what was there first — and which version applied afterwards."

## Panel 03 — The customer calls, confused

**Visual:** The customer calls and asks why their copy shows a different number of packages from what was actually delivered.  
**Text:** "Which number actually applies? Ingrid does not have a certain answer yet."

## Panel 04 — Robban, unsure about his own delivery

**Visual:** Robban is back at the depot and wonders whether he counted incorrectly or whether the document is wrong.  
**Text:** "Robban remembers 24 packages. The paper says 22. Who is right?"

## Panel 05 — Ingrid considers simply rewriting everything

**Visual:** Ingrid starts creating a new, separate document from scratch but realises that it would not show that a correction was actually made.  
**Text:** "A new document fixes the number. But not the question of what happened."

## Panel 06 — The archive binder with crossed-out ink

**Visual:** Ingrid leafs through an old physical archive binder full of crossed-out and hand-corrected figures without a clear explanation.  
**Text:** "Crossed-out ink. No reason stated. No one who remembers why."

## Panel 07 — The Re-issue button is discovered

**Visual:** Ingrid sees the "Re-issue" button on the locked CMR and a field requiring a reason.  
**Text:** "Not delete. Not rewrite from scratch. Just: re-issue — with a reason."

## Panel 08 — The reason is entered

**Visual:** Ingrid writes: "Incorrect package count at issue, corrected after the customer's check." The field is mandatory.  
**Corrected text:** "A reason recorded together with the correction. Not just a changed number."

## Panel 09 — The new version is issued

**Visual:** A new CMR is created with the correct number of packages, a new hash and a new timestamp. The old version remains and is clearly marked as superseded.  
**Text:** "A new version issued. The old one remained — only with a different status."

## Panel 10 — Verification shows the status clearly

**Visual:** Ingrid scans the QR code on the old version. The screen shows "Superseded".  
**Text:** "Scanned again: not 'valid', not 'deleted' — just 'superseded'. Exactly what it is."

## Panel 11 — Robban and the customer get the right answer

**Visual:** Ingrid sends the new, correct CMR to the customer and reports back to Robban.  
**Corrected text:** "24 packages is now the corrected information. And it is still possible to see exactly what was there first."

## Panel 12 — Ingrid, two documents, one explanation

**Visual:** Ingrid sits at her desk and looks at the two document versions side by side on the screen — both visible and understandable.  
**Text:** "Correct numbers. Same story. Nothing disappeared — it was simply corrected."

## CTA intent — cta_13

Illustrated album back cover in the same visual DNA as the cover. Show Ingrid's movement from uncertainty to a traceable correction. Short value promise, exactly one main action to sign up, clear-text `navichain.se/signup`, validated QR to `https://navichain.se/signup` and only the official Navichain logo deterministically composited from the project's source file.

## Continuity

This is episode thirty-four in the series about connected workflows at Björklunda Åkeri AB. The core conflict is the everyday correction of an incorrect package count in an already issued CMR, not a legal dispute. Product Truth is the primary source for product claims.
