# — A Navichain story —

# SAME CUSTOMER, TWO WORLDS
### Petra, Torgny and the portal that knew who was who

**Format:** 12 panels + cover concept. Illustrator brief.

**Angle:** The thirty-sixth episode in the series about connected workflows at Björklunda Åkeri AB returns to Petra Vindh (customer, previously seen in episode 26) for her second leading role — now because her company has just opened a second facility in another location. The problem is not technical in itself, but human: when Torgny, the new contact person at the second office, gets access to the same customer portal as Petra, uncertainty immediately arises about who can see whose bookings — and there is a brief, uncomfortable moment when it seems that neither of them has a view that is actually separated from the other.

**Source:** Navichain — Organizations & Customer Portal (verified: organizations have a **parent** field and subsidiaries are shown in the organization detail view together with linked portal users. A customer can have several portal users, and **one portal user can belong to several organizations**. The Customer Portal has an **org-switching dashboard** — a user switches between the organizations they actually have access to, and sees only the selected organization’s orders, tracking and invoice preview. Source: NAVICHAIN-PRODUCT-TRUTH.md, sections “Organizations” and module 43 “Customer Portal”.)

**What is deliberately NOT claimed:** Navichain never automatically builds the customer’s organizational structure or decides by itself who should have access to what — a person at Björklunda still creates the subsidiary and deliberately links each portal user to the correct organization. There is also no documented, merged overview that automatically shows *all* subsidiaries’ bookings in one common report — if Petra wants to see both facilities, she herself must have access to both organizations and switch between them. No IT department is shown; Oskar handles the entire configuration himself through the interface.

---

## Cast

| Character | Role | Company |
|---|---|---|
| **Petra Vindh** *(lead role, second time)* | Purchasing manager, head office | External customer (multiple facilities) |
| **Torgny Aspelin** *(new supporting role)* | New contact person, the newly opened facility | External customer (same company, different location) |
| **Oskar Lind** *(recurring)* | Administrator — sets up the organizational structure | Björklunda Åkeri AB |

---

## Cover concept

A split spread: Petra at her desk at the head office on the left, Torgny at his new desk at the newly opened facility on the right, both with a screen showing a portal — but with different content, clearly separated by a thin line down the middle symbolising the invisible boundary between them. Title typography in the series’ rust-red/petroleum-green combination.

---

## PANEL 1 — A new facility opens
**Visual:** At the head office, Petra receives an email: the new facility on the other side of the country has officially opened, with Torgny Aspelin as the new contact person for deliveries there.
**Text:** “A new address. A new colleague. The same customer — on paper.”
**Status:** 🔴 Red — expansion without a clear structure yet

## PANEL 2 — Torgny logs in, unsure what he is seeing
**Visual:** Torgny logs in to the Customer Portal for the first time at his new workplace and stares at the screen in confusion — he does not know whether what he sees is his own bookings or whether they are mixed with the head office’s.
**Text:** “Are these my deliveries? Or Petra’s? He didn’t know.”
**Status:** 🔴 Red — unclear separation, uncertainty

## PANEL 3 — Petra discovers an unfamiliar order
**Visual:** Petra browses her own order list and comes across a booking she does not recognise — the address is the new facility’s, not her own.
**Text:** “An order she had never placed. From an address that wasn’t hers.”
**Status:** 🔴 Red — risk of mix-up

## PANEL 4 — An uncertain phone call
**Visual:** Petra calls Torgny to sort it out; both are unsure whether they are accidentally seeing or can affect each other’s bookings, and neither really knows what is true.
**Text:** “‘Can you see my orders?’ ‘I don’t know. Can you see mine?’”
**Status:** 🔴 Red — mutual uncertainty, nobody has the answer

## PANEL 5 — The fear of making a mistake
**Visual:** Torgny hesitates before placing a new booking, afraid that he might accidentally change something belonging to Petra’s head office instead of his own facility.
**Text:** “He hardly dared click anything. What if he got it wrong?”
**Status:** 🔴 Red — uncertainty causing paralysis

## PANEL 6 — Petra contacts Björklunda
**Visual:** Petra calls Oskar Lind at Björklunda and explains the situation — two facilities, with a shared feeling that nobody really knows who can see what.
**Text:** “‘We need our own separate views. Not one shared mess.’”
**Status:** 🔴 Red — the problem is stated clearly for the first time

## PANEL 7 — Oskar sees the solution in the organizational structure
**Visual:** Oskar opens the customer’s organization record in Navichain and sees the subsidiary field — he realises that the new facility should be set up as its own linked organization under the head office, not mixed into the same record.
**Text:** “Not a shared login. Two organizations — linked, but separate.”
**Status:** 🟠 Orange — turning point, the structure becomes clear

## PANEL 8 — The subsidiary is created
**Visual:** Oskar creates a new subsidiary for the new facility, with Petra’s company as the parent organization — a clear, documented link without merging them into a single record.
**Text:** “Same family. Two addresses. Clear who belongs to whom.”
**Status:** 🟢 Green — the structure is set up correctly

## PANEL 9 — Torgny’s own portal user
**Visual:** Oskar links a new portal user specifically to the new subsidiary and sends an invitation to Torgny — the link is made deliberately, once, by a person.
**Text:** “Torgny’s login linked to his own facility. Nothing more, nothing less.”
**Status:** 🟢 Green — deliberate, exact access

## PANEL 10 — Torgny sees only his own
**Visual:** Torgny logs in again. This time the screen shows only his own facility’s bookings — clean and clear, without a single order that does not belong there.
**Text:** “Now he knew. Everything he saw really was his.”
**Status:** 🟢 Green — clarity and confidence

## PANEL 11 — Petra sees only her own
**Visual:** Petra logs in at the head office and sees her own order list just as before — the unfamiliar booking from panel 3 is gone from her view, back where it belongs.
**Text:** “Her list was hers again. Nothing of Torgny’s was mixed in.”
**Status:** 🟢 Green — order restored on both sides

## PANEL 12 — Petra and Torgny, the same image as the cover
**Visual:** The same split spread as the cover — but now calm and secure, both working comfortably at their respective screens. A discreet sticker with Navichain’s official logo is visible on Oskar’s computer screen in a small inset between them.
**Text:** “Same customer. Two worlds. And for the first time: no confusion at all.”
**Status:** 🟢 Green (ending, clear point)

---

## Continuity note

The thirty-sixth episode in the series about connected workflows at Björklunda Åkeri AB, and Petra Vindh’s second leading role — now from a structural rather than functional perspective (episode 26 was about cloning a booking; this is about who gets to see what at all). Based on the verified parent/subsidiary structure and portal users being linked to specific organizations, with org-switching meaning that each person sees only what they have access to. Deliberately restrained foundation: no automatic merged report across all facilities is shown — if Petra wants to see both, she herself must be given access to both organizations.

**Next in the series:** An angle not yet used — how Björklunda handles a request for a new vehicle that is already registered in the system under the wrong organization, and how the reference check on deletion reveals and explains why it cannot simply be moved as-is.

---

## Production notes for the illustrator

- **The split-spread composition** (Petra on the left, Torgny on the right, a thin line between them) should recur identically on the cover and in panel 12 — the same visual language, but with a clearly different feeling: uncertain distance on the cover, secure parallelism in panel 12.
- **Colour dramaturgy:** Red dominates panels 1–6 (mix-up, uncertainty, paralysis), orange is the turning point (panel 7), petroleum green dominates panels 8–12.
- **Panel 3’s “unfamiliar order”** should be drawn with a clear visual marker (for example a question mark or a contrasting colour on the row) which then disappears without a trace in panel 11 — without making it feel as though anything has been deleted, only that it is finally in the right place.
- **Oskar’s role (panels 7–9)** should be drawn as methodical and calm, not as a crisis response — he resolves the structure as a natural part of his normal work.
- **Physical props to prioritise:** the two screens on the cover/panel 12, the telephone receiver in panel 4, the organization tree on Oskar’s screen (panels 7–8), the small logo sticker in the inset in panel 12.

---

## Summary table for the illustrator

| Panel | Colour status | Key motif | Logo note |
|---|---|---|---|
| 1 | 🔴 Red | Email about new facility, new contact person | None |
| 2 | 🔴 Red | Torgny confused at his first login | None |
| 3 | 🔴 Red | Petra finds unfamiliar order in her list | None |
| 4 | 🔴 Red | Uncertain phone call between Petra and Torgny | None |
| 5 | 🔴 Red | Torgny hesitates, does not dare act | None |
| 6 | 🔴 Red | Petra calls Oskar, the problem is stated | None |
| 7 | 🟠 Orange | Oskar sees the subsidiary field, insight | Screen corner, ~4% |
| 8 | 🟢 Green | Subsidiary created, linked but separate | Screen corner |
| 9 | 🟢 Green | Torgny’s own portal user is created | Screen corner, ~4% |
| 10 | 🟢 Green | Torgny sees only his own facility’s bookings | Subdued |
| 11 | 🟢 Green | Petra sees only her own bookings again | Subdued |
| 12 | 🟢 Green | Split image, both secure, Oskar’s screen in inset | Computer screen (inset), ~5% |

**Instruction to the illustrator:** Use **Navichain’s official logo** (uploaded as a source file in the project) at every placement specified above — never an interpreted or redrawn variant.
