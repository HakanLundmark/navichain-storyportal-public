# Preflight corrections captured in this chat

This file records validation/correction material that was actually produced in this chat. It is not a newly invented story source and does not replace `ORIGINAL_STORY.md`.

## Product Truth correction 1 — Parts vs Purchase Orders

The chat validation found that maintenance **Parts** and commerce **Articles / Purchase Orders** are distinct ledgers. Verified support exists for Parts stock adjustment with reason and for `Order` creating a draft PO to replenish the minimum. Purchase-order receiving is verified for Commerce stock, but the chat validation did not establish a single documented automatic chain `Parts low level → draft PO → PO received → Parts balance updated`.

Minimal revision proposed in chat:

- Keep Parts low-level / draft reorder concept.
- For panel 8, avoid claiming that PO receiving automatically updates maintenance Parts stock. Depict the physical delivery arriving and Micke registering/adjusting the parts stock.

## Product Truth correction 2 — future service jobs

The chat validation found that Navichain `Booking` is documented as a transport order and did not verify a dedicated field-service planning view covering all technicians' future service jobs.

Minimal revision proposed in chat:

- Micke himself compares known upcoming jobs and their timing.
- Navichain supplies verified stock visibility / traceable stock adjustments; the human makes the prioritization decision.

## Panel 10 wording boundary

The chat validation recommended treating distribution as **Parts stock adjustments with a reason**, not as a dedicated Parts `Transfer` feature.

## Teaser boundary

The chat validation did not find Product Truth support for a review/rating capability and recommended removing or neutralising the customer-review teaser before release.

## Render consequence

The renders generated later in the chat were not explicitly promoted to PASS/LOCKED. Several also contain the earlier unsupported PO-receipt / field-service-view framing or were multi-panel collage/storyboard outputs. They are therefore inventoried as source/rejected render material, not as release masters.
