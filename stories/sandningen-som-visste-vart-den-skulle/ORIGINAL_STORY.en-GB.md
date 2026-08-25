---
sourceLocale: sv-SE
locale: en-GB
translationType: faithful
narrativeMaster: false
sourceClass: DERIVED_TRANSLATION
sourceStoryGitBlobSha: e0488893ef2b29f91966eecce9a57a708f990ded
sourceStorySha256: ffc700b8020cc19acd132db78a182501e8e27a61a8aacd60d3267a0d0cbb8f90
---

# THE SHIPMENT THAT KNEW WHERE IT WAS GOING

### Sanna and the order that became three — without becoming three different stories

**Source:** canonical story brief supplied directly in this chat.
**Master language:** sv-SE
**Master version:** not explicitly locked/versioned in chat
**Story ID authority:** derived from canonical title for repository path

**Format:** 12 panels + cover concept. Illustrator brief.

**Angle:** The thirty-second episode in the series about connected workflows at Björklunda Åkeri AB gives Sanna Berg (planning manager, episode 31) her second lead role — and a relative of the previous episode's problem, but not the same thing. Last time, the issue was that a load was *too large* for one run and was split by quantity. This time, the load is not too large at all: it is one and the same order from one and the same customer that is going to *three different receiving addresses* — three shops in the same chain, in different towns. The risk is not quantity, but that the order is split into three disconnected bookings that lose contact with each other, so no one can any longer see that they belong together or how the whole is progressing.

**Source:** Navichain — Bookings/Hub/multi-leg (verified: a new booking in multi-stop mode with hub rows creates, when saved, a **master booking** plus a **child booking per leg**. Each child has its own endpoints, dates and can be planned on its own run. The child bookings' status **cascades** from the master booking, so the whole can be followed from one place. Source: NAVICHAIN-PRODUCT-TRUTH.md, section "Hub/multi-leg" and NAVICHAIN-TERMINOLOGY.md.)

**What is deliberately NOT claimed:** A saved multi-stop/hub booking is currently **read-only** in the form — an incorrect detail cannot be edited afterwards; the booking has to be cancelled and created again. The story therefore shows Sanna double-checking carefully *before* she saves, not correcting something afterwards. Navichain does not itself optimise which shop receives which part of the load — Sanna decides the allocation; the system only keeps the whole together and handles the status automatically. No IT department is shown.

## Cast

| Character | Role | Company |
|---|---|---|
| **Sanna Berg** *(lead role, second time)* | Planning manager | Björklunda Åkeri AB |
| **Robban Ek** *(cameo)* | Driver — drives one of the three legs | Björklunda Åkeri AB |
| **Curt Malmén** *(new, short supporting role)* | Buyer at the customer (retail chain) | External customer |

## Cover concept

Sanna at her desk, one delivery note in one hand — but three different stamps/labels beside it, one for each shop town. On the screen: one order line branching visually into three lines, like a river delta. Title lettering in the series' rust-red/petroleum-green combination.

## PANEL 1 — One order, three recipients on paper
**Visual:** Sanna reads a fax/email printout from Curt Malmén: one single order, but with a handwritten note at the bottom — "NOTE: split between three shops, see attached list." Three addresses scribbled in the margin.
**Text:** "One order. Three addresses. And one piece of paper that has to hold it all together."
**Status:** 🔴 Red — one composite order, no connected booking yet

## PANEL 2 — Three loose bookings take shape
**Visual:** Sanna starts creating three separate bookings by hand in the old way of working — three screens/tabs open at the same time, three different booking numbers on yellow notes in front of her.
**Text:** "Three bookings. Three numbers. Nothing that shows they belong together."
**Status:** 🔴 Red — split, no common origin visible

## PANEL 3 — The question no one can answer quickly
**Visual:** Curt calls and asks how much of the whole order is complete in total. Sanna has to flick between three different bookings to add up the answer manually.
**Text:** "'How much of the whole order is complete?' Sanna has to count. Three times."
**Status:** 🔴 Red — no consolidated overview

## PANEL 4 — Robban in the truck, unsure of the context
**Original brief:** Robban Ek in the cab, looking at one of the three legs on his mobile, wondering aloud whether there are more deliveries for the same customer that day that he ought to know about.
**Preflight revision recorded in chat:** Robban sees the job he is going to drive, but Sanna still has to keep track of how everything fits together herself. No claim that the driver app shows "2 of 3" or the other child bookings.
**Revised text:** "Robban sees the job he is going to drive. But Sanna still has to keep track of how everything fits together herself."

## PANEL 5 — One address is entered wrongly in one of three
**Visual:** Sanna discovers that one of the three separate bookings has been given the wrong postcode — a simple copy-and-paste error between the three loose forms.
**Text:** "Three forms to fill in by hand. Three chances to type something wrong."
**Status:** 🔴 Red — risk built into the split itself

## PANEL 6 — Sanna, three yellow notes, one sigh
**Visual:** Sanna at her desk, the three yellow notes with booking numbers spread out, no clear link between them except her own memory.
**Text:** "Everything holding the order together existed only in Sanna's head."
**Status:** 🔴 Red — the context is person-dependent, not system-dependent

## PANEL 7 — Multi-stop mode is discovered
**Visual:** Sanna finds multi-stop mode when creating a new booking — a single order form where she adds several recipient rows under the same original order instead of opening three separate forms. The screen clearly shows "One booking → several legs."
**Text:** "Not three bookings. One booking — with three ways out."
**Status:** 🟠 Orange — the turning point, the insight that the whole can remain whole

## PANEL 8 — The multi-stop/leg rows are filled in, one at a time
**Preflight revision recorded in chat:** the shop addresses must not be called hubs. Sanna fills in the multi-stop flow's addresses/leg rows and checks them before Save.
**Revised text:** "Three stops in the same setup. She reads every row twice before she saves."
**Status:** 🟢 Green — checking before saving, aware of the read-only limitation

## PANEL 9 — Saved: one master, three children
**Visual:** Sanna saves. The screen shows a master booking branching into three child bookings, each with its own booking number but clearly marked as part of the same origin.
**Preflight-safe text:** "One master booking. A transport leg of its own for each part of the route."
**Status:** 🟢 Green — automatic split that still stays connected

## PANEL 10 — Robban gets his part clearly
**Preflight revision recorded in chat:** Robban sees his own child booking with clear endpoints and the information he needs; no claim that he sees the whole order family.
**Revised text:** "Robban gets his part as a real transport leg — not as a loose note Sanna has to explain."

## PANEL 11 — Curt's question is answered from the same structure
**Preflight revision recorded in chat:** Sanna opens the master/child structure and can identify the related legs. No claim of automatic total aggregation or an aggregated progress view.
**Revised text:** "'How is the order going?' Now she starts from the same master — not from three loose bookings."

## PANEL 12 — Sanna, one screen, the whole context
**Visual:** Sanna leans back with her coffee mug and looks at the connected master/child structure.
**Preflight-safe text:** "One order became several transport legs. But the context never had to disappear."
**Status:** 🟢 Green — ending, clear point

## Continuity note

The thirty-second episode in the series about connected workflows at Björklunda Åkeri AB, and Sanna Berg's second lead role — a direct release of the teaser from episode 31. Deliberately distinct from that episode: there, it was about splitting a load's *quantity* between runs (split cargo, quantity-based); here, it is about splitting an order to several *recipients* in different towns (hub/multi-leg, destination-based) — two related but verified different mechanisms in the product.

**Next in the series:** An angle not yet used — how Björklunda handles a return after a failed delivery (Reattempt/Return), where a new delivery booking is created automatically from the original, with the correct addresses already filled in, instead of someone starting again completely from zero.

## Production notes

- River-delta/branch motif: one stem that divides into three, metaphorically and not as an exact UI claim.
- The three yellow notes in panel 6 are contrasted with the consolidated screen view in panel 12.
- Colour dramaturgy: red panels 1–6, orange panel 7, petroleum green panels 8–12.
- Robban cameo in panels 4 and 10 shows the contrast between an unclear loose note and a clearly assigned transport leg.
- Panel 8 shows calm checking before saving.
- Prioritised props: order printout, three yellow notes, mobile in the cab, coffee mug.

## CTA intent

The CTA should be a bright illustrated album back cover. Short story-specific value promise: **"One order. Several transport legs. The same context."** One primary action: **"Create account"**. URL: `navichain.se/signup`; QR payload: `https://navichain.se/signup`. The official Navichain logo must be used deterministically from the source file.

## Lock/release note

No explicit `LOCK STORY` with a master version has been verified in the current chat. This file therefore preserves the directly available story brief and the explicitly documented preflight revisions, without claiming release PASS.
