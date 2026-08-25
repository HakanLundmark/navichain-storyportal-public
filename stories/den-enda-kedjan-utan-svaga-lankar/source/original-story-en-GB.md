---
sourceLocale: sv-SE
locale: en-GB
translationType: faithful
narrativeMaster: false
sourceClass: DERIVED_TRANSLATION
sourceStoryGitBlobSha: 4396ccf8323364a01461ce8406cd6d1fa7c74925
sourceStorySha256: null
---

# THE ONLY CHAIN WITHOUT WEAK LINKS

### A navichain story — Jonas and the sovereignty audit

**Tagline (cover):** Everyone says “EU-hosted”. Only one could prove it, link by link.

**Protagonist:** Jonas Ekvall, 45 — Head of IT Security, Nordkust Distribution AB (38 vehicles, temperature-sensitive distribution for regional healthcare and grocery chains — an operation with stricter supply-chain security requirements)

**Supporting characters:**

- Two competing supplier representatives — generic, indistinct, deliberately interchangeable (“Supplier A”, a large enterprise player; “Supplier B”, a smaller SaaS challenger) — the focus should be on the answers, not the people
- Robban Ek — driver, continuity cameo in panel 11

**Source material:** The in-depth technical sovereignty analysis of Navichain’s architecture (own hardware/bare metal, local AI + Berget AI, anonymised HERE calls, EU-only DNS) and the comparison with Trimble, Descartes, Soloplan CarLo and LIS WinSped.

**Angle (new, not previously used in the series):** Earlier episodes have covered data sovereignty as protection from US surveillance in itself (Sofia Bergqvist, Petra Lindahl, Birgitta Lind, Calle Wallin) and a broad feature comparison between named TMS competitors (Rasmus Boström). This story takes a third, more technical angle: **the formal infrastructure audit** — as the person responsible for IT security, asking several named competitors a concrete list of questions (where is the server, who owns it, which subcontractors handle AI/maps/DNS) and discovering that only Navichain can answer for every individual link in the chain, rather than merely using “EU-hosted” as a marketing term. The focus is on the depth of the infrastructure (own hardware, Berget AI, anonymised geodata, European DNS) rather than feature breadth or the legal threat itself.

**Format:** 12-panel illustrator brief, panel-by-panel visual description + caption **Colour coding:** 🔴 Red = unanswered questions/vague promises, 🟠 Orange = Navichain is tested against the same checklist, 🟢 Green = every link verified and documented

---

## Visual style note (applies to all panels)

- **Image style:** Warm 1950s Hergé/Tintin *ligne claire* — even black outlines, flat/even colour fields (no heavy cross-hatching or halftone screens), parchment/cream background, palette of rust red, mustard yellow, petroleum green and warm gold. Hand-lettered captions, not digital sans-serif.
- **Texture:** The entire surface should have a light grainy offset-print patina — subtle print grain, soft edge wear/foxing, muted/slightly faded colour tones, like a well-preserved but authentic 1950s album.
- **Modern action in a classic visual language:** The story takes place in the present day. Jonas works with a computer, mobile phone and tablet — never paper lists or manual binders once navichain enters the picture. Before that (the problem section), the competitors’ presentations may include generic PowerPoint mock-ups and binders as a visual contrast.
- **Physical props** are preferred to screen mock-ups where possible; where screens are required (for example architecture diagrams), they should be drawn in the same warm style, not as photorealistic UI screenshots.
- **No IT support appears in the navichain part of the story.** Navichain explains itself — Jonas and Robban never need to call a support line or book a consultant.

### Logo rules

- **navichain’s official logo is completely absent from panels 1–6** (the problem section with the other suppliers) — deliberately, to reinforce the contrast.
- From panel 7, the logo is introduced discreetly as an environmental detail (corner of a computer screen, a coffee mug, a binder spine, an app header) — never centred or advertising-like, max about 5% of the panel area.
- The illustrator must use the uploaded source file containing navichain’s official logo at every specified placement, not recreate the logo by hand.

---

## Panel 1 — The assignment

**Visual:** Jonas at his desk at Nordkust Distribution, a letter/email on screen headed “Requirements for procurement of transport system — appendix: information security”. On the wall behind him is a diagram for temperature-monitored distribution and a map with the region’s hospitals marked. **Text:** “A new TMS is being procured. But this time feature lists are not enough. Data about sensitive deliveries cannot end up just anywhere.” **Status:** 🔴 Red — stricter requirements, unclear who can meet them

## Panel 2 — The checklist

**Visual:** Jonas writes a checklist by hand on a flip chart: “Where is the server? Who owns it? Which subcontractors for AI, maps, DNS?” Simple icons beside each question. **Text:** “Not ‘are you GDPR-compliant’. But: exactly which server facility, which owner, which chain of subcontractors.” **Status:** 🔴 Red — a checklist with no answers yet

## Panel 3 — Supplier A: the large player

**Visual:** A conference room. An unnamed salesperson from a large international TMS giant shows a glossy presentation with cloud icons. Jonas asks a question; the salesperson uncertainly flicks back through the slides. **Text:** “‘We use leading cloud providers with a global presence,’ he says. Jonas asks which jurisdiction applies. Silence.” **Status:** 🔴 Red — vague reference to “the cloud”

## Panel 4 — Supplier B: the challenger

**Visual:** A smaller, informal meeting. Another salesperson shows a mobile app with a map. Jonas points at the map view and asks where the coordinates are sent. The salesperson looks down at the papers. **Text:** “The maps come from an external service. Are the addresses anonymised before they are sent there? ‘I’ll have to get back to you on that.’” **Status:** 🔴 Red — unknown data path for positions

## Panel 5 — The wall of question marks

**Visual:** Jonas back at the office, the flip chart now full of red question marks beside each item: AI provider? DNS? map data? subprocessors? He sits with his arms folded, frustrated. **Text:** “Two suppliers. Two presentations. Still no one has been able to draw the entire chain from order to server.” **Status:** 🔴 Red — no supplier passes the full audit

## Panel 6 — The tip

**Visual:** A colleague leans in through the doorway and puts a printout on Jonas’s desk: “Try navichain — run your list against them too.” Jonas raises an eyebrow, sceptical but curious. **Text:** “‘Run your list against them too,’ she says. Jonas sighs — but schedules a meeting.” **Status:** 🟠 Orange — the same checklist, a new supplier

## Panel 7 — The architecture diagram

**Visual:** A video meeting. On screen, a simple architecture diagram is drawn box by box: “Navichain core system → own hardware”. Jonas leans forward and takes notes. A small sticker with navichain’s official logo is visible in the corner of the screen. **Text:** “The first answer comes immediately: the core system runs on its own physical hardware. No external cloud provider between Jonas and the server.” **Status:** 🟠 Orange — the first link verified

## Panel 8 — The AI question

**Visual:** The same diagram, now with a branch showing “Local AI” and “Berget AI — Swedish AI infrastructure”. Jonas ticks off the question mark “AI provider?” on his own pad beside the computer. **Text:** “Sensitive AI processing takes place on its own hardware. What needs to scale goes to Berget AI — Swedish infrastructure, not a US API.” **Status:** 🟢 Green — the AI chain documented

## Panel 9 — The map question

**Visual:** The diagram continues: a box labelled “HERE Maps” with a small shield icon and the text “calls anonymised”. Jonas mentally compares it with Supplier B’s unanswered question in panel 4 — a thought bubble shows a small red question mark being crossed out. **Text:** “The map engine gets a route to calculate — not which company, which driver or which order it concerns.” **Status:** 🟢 Green — position data protected

## Panel 10 — The DNS question

**Visual:** The final branch in the diagram: “DNS & infrastructure — European providers only”. Jonas ticks off the last line on his list, which is now completely green. **Text:** “Even the small, invisible layers — DNS, network — are European. No US actor anywhere in the chain.” **Status:** 🟢 Green — the whole list ticked off

## Panel 11 — Out on the road

**Visual:** Robban Ek, the driver, loads a temperature-sensitive delivery and logs in to navichain’s driver app on his own mobile phone — no manuals, no waiting for support. A small navichain decal is discreetly visible on the truck door. **Text:** “No support line to call. Robban was up and running before the load was even fully loaded.” **Status:** 🟢 Green — self-explanatory even for the driver

## Panel 12 — The decision

**Visual:** Jonas presents his completed audit document to a small group of colleagues around a table — the whole list is green, with a handshake across the table. Through the window, one of Nordkust’s distribution vehicles can be seen with navichain’s official logo as a discreet decal. **Text:** “Two suppliers could describe their cloud service. Only one could draw the entire chain — link by link, with no gaps.” **Teaser for the next episode:** A small note in the corner of the image: “Next: What happens when an audit becomes a recurring routine — every quarter, not just during procurement?” **Status:** 🟢 Green — audit approved, contract about to be signed

---

**Summary badge (optional final box/aftertext):** “navichain: the only chain where every link can be proven.”

---

## Illustrator reference

| Element | Description |
|---|---|
| Jonas Ekvall | 45, Head of IT Security. Suit without a tie or smart-casual blazer, short dark hair, glasses for a reading/analytical look. Sceptical, precise body language — often arms folded or taking notes. |
| Supplier A (salesperson) | Unnamed, generic enterprise sales aesthetic: dark suit, glossy presentation, slightly overconfident stance that falters when detailed questions are asked. |
| Supplier B (salesperson) | Unnamed, more informal/start-up style clothing, younger expression, uncertain body language when detailed questions are asked. |
| Robban Ek | Established series character — driver, warm and practical demeanour, appears briefly in panel 11. |
| The architecture diagram (panels 7–10) | Simple, hand-drawn/schematic appearance in the style of a flip-chart or whiteboard sketch — not a photorealistic UI screenshot. Boxes and arrows in warm ink lines, text in a hand-lettered style. |
| navichain’s official logo | Use the uploaded source file. Absent from panels 1–6. Introduced discreetly from panel 7: screen corner, sticker, decal, coffee mug. Never centred or advertising-like. |

## Series continuity

This story deepens the sovereignty theme previously introduced through Sofia Bergqvist (protection against US surveillance legislation), Petra Lindahl, Birgitta Lind and Calle Wallin, and also builds on the comparative procurement angle from Rasmus Boström’s story. The new angle here is the technical audit process itself — the checklist, the unanswered gaps among the named types of competitors, and the gradual ticking-off of every infrastructure link (own hardware, local AI/Berget AI, anonymised geodata, European DNS) as a competitive advantage. Robban Ek makes his usual continuity cameo in panel 11.
