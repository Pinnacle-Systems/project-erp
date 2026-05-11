# Shell Boundary Rules

## Purpose

This document defines what belongs in each device shell and how teams should evaluate requests that cross shell boundaries.

The goal is workflow fitness, not feature parity.

## Core Rule

Desktop, mobile, and tablet shells are separate interaction grammars. A workflow should be placed in the shell where it best fits the user's context, input method, risk level, and required information density.

Mobile is not a smaller desktop. It is a companion shell with its own workflow responsibilities.

Desktop and mobile may consume the same domain contracts, workflow contracts, API layer, and capability contracts. They must not share page composition by default.

Shared route definitions are forbidden. Shell-specific route ownership is required.

## Desktop Shell

The desktop shell owns:

- Dense authoring.
- Full transaction entry.
- Bulk operations.
- Reconciliation.
- Posting.
- Admin configuration.
- Keyboard-first workflows.
- Complex grids.
- Cross-document comparison.
- Long-form review.

Desktop is the authoring shell. It should provide the full-complexity workspace for users who need density, speed, precision, and side-by-side context.

Desktop may use:

- Dense grids.
- Split panes.
- Internal scrolling regions.
- Hover affordances.
- Keyboard shortcuts.
- Bulk action surfaces.
- High-risk confirmation flows.

## Mobile Shell

The mobile shell owns:

- Companion workflows.
- Capture.
- Approval and rejection.
- Comments.
- Attachments.
- Scanner flows.
- Quick visibility.
- Lightweight bounded edits.
- Notifications.
- Status updates.

Mobile is the companion shell. It should support focused work that fits tap-first interaction, short attention windows, and field usage.

Mobile should avoid:

- Dense multi-line transaction entry.
- Bulk operations.
- Full reconciliation.
- Full posting workflows.
- Complex side-by-side comparison.
- High-risk accounting changes.
- Desktop grid clones.

## Tablet Shell

Tablet starts with mobile grammar.

Tablet may selectively borrow desktop density only when justified by field, counter, warehouse, or repeated-entry workflows.

Tablet may become its own grammar only when mobile and desktop both do not fit.

Do not create tablet-specific behavior only because the screen is larger than a phone. The workflow must justify it.

## Route and Composition Rules

- Each shell owns its own route structure.
- Each shell owns its own navigation model.
- Each shell owns its own screen composition.
- Shared route definitions are forbidden.
- Shared page composition is not the default.
- Shared domain contracts are allowed.
- Shared capability contracts are required.
- Shared design tokens and platform components are allowed.

The shared platform may provide shells, slots, layout patterns, and contracts. It must not force desktop, mobile, and tablet into the same page model.

## Mobile Edit Boundary

Mobile edits are allowed only when they are local, bounded, and low-risk.

Allowed examples:

- Correcting a description.
- Adding a comment.
- Adding an attachment.
- Updating an assignee.
- Selecting a controlled status.
- Choosing from a limited list.

Not allowed by default:

- Editing debit and credit lines.
- Changing quantities, prices, taxes, or allocations that recalculate totals.
- Updating multiple linked records in one action.
- Performing side-by-side reconciliation.
- Posting or reversing high-risk documents.

## Mobile-Native Complex Workflows

A mobile-native version of a complex desktop workflow requires an explicit product and architecture decision.

It must define:

- Reduced data contracts.
- Mobile-specific validation rules.
- Audit behavior.
- Permission and capability behavior.
- Desktop handoff path.
- Failure and recovery behavior.
- What is intentionally excluded from mobile.

Without this definition, the workflow remains desktop-owned.

## Capability Enforcement

Shell boundaries must be enforced through capability contracts, permissions, workflow state, and API authorization.

Hidden buttons are not enough.

## Product-Scope Change Rule

Requests to add full desktop workflows into the mobile shell are product-scope changes, not simple UI backlog items.

Ask:

- Does this workflow belong to the mobile shell?
- Is there a mobile-native contract for this workflow?
- What data is reduced or omitted?
- What validation rules apply?
- What is the handoff path to desktop?
- What audit behavior is required?

## Examples

### Sales Invoice

Desktop owns:

- Full invoice creation.
- Header and line editing.
- Pricing and tax review.
- Bulk line operations.
- Posting.
- Cancellation requiring financial review.

Mobile may own:

- Invoice visibility.
- Approval or rejection.
- Comments.
- Attachments.
- Receipt or document capture.
- Limited header corrections when low-risk.

Mobile should not own full invoice line editing or posting by default.

### Journal Entry

Desktop owns:

- Full journal entry creation.
- Debit and credit line editing.
- Allocation.
- Reconciliation.
- Posting to the general ledger.
- Validation override workflows.

Mobile may own:

- Expense note capture.
- Receipt upload.
- Comments.
- Approval or rejection of an already-prepared journal entry.
- Quick visibility into status.

Mobile should not create full journal entries, edit debit and credit lines, or post to the ledger by default.

### Stock Receiving

Desktop owns:

- Full receiving document review.
- Variance reconciliation.
- Bulk quantity correction.
- Supplier document matching.
- Inventory posting when high-risk.

Mobile may own:

- Barcode or QR scanning.
- Quantity capture.
- Photo attachment.
- Location confirmation.
- Lightweight receiving status updates.

Tablet may become appropriate when warehouse users need repeated quantity entry with more density than mobile but less complexity than desktop.

### Leave Approval

Desktop owns:

- HR configuration.
- Policy setup.
- Bulk leave report review.
- Complex balance correction.

Mobile may own:

- Leave request submission.
- Manager approval or rejection.
- Comments.
- Attachment review.
- Notification response.

Leave approval is a strong mobile candidate because the decision surface is usually focused and bounded.

### Barcode Scanning

Mobile owns:

- Camera or scanner flow.
- Scan confirmation.
- Captured item visibility.
- Lightweight quantity or location input.
- Submit or handoff action.

Desktop owns:

- Bulk correction.
- Reconciliation.
- Complex inventory allocation.
- Exception review.

Scanner flows must still use capability contracts and backend validation. A successful scan is not by itself authorization to receive, move, allocate, or post inventory.
