# ADR 001: Multi-Device Front-End Architecture

**Status:** Accepted  
**Date:** 2026-05-11  
**Tags:** Architecture, Front-End, Device Strategy, UI Governance

## 1. Context & Rationale

Dense ERP workflows do not translate cleanly to mobile through CSS media queries. Attempting to force fixed-height, data-heavy desktop workflows into one fully responsive interface creates compromised user experiences, excessive conditional logic, and poor performance.

Desktop and mobile have different interaction models:

- Desktop uses keyboard speed, hover affordances, split panes, dense grids, and internal scrolling.
- Mobile uses tap targets, drill-down navigation, bottom sheets, camera and scanner flows, approvals, and lightweight capture.

The architecture must represent these differences directly. The goal is not to make every workflow fit every device. The goal is to let each device support the workflows it is best suited to perform.

## 2. Decision

We will not build one fully responsive ERP interface.

We will build:

- One product system.
- One domain model.
- One API layer.
- Device-specific experience shells.

Each shell may provide different navigation, composition, density, and workflow surfaces while participating in the same product, domain, API, permission, and workflow model.

## 3. Architecture Stack

### Shared Platform Core

The shared platform core contains reusable platform behavior and contracts such as:

- API clients.
- Domain models.
- Query hooks.
- Validation contracts.
- Workflow state contracts.
- Permission and capability contract types.
- Utility libraries.

The shared platform core must not contain shared route definitions. Sharing route definitions would pull shells back toward shared page layouts and weaken the device-specific architecture.

### Shared Design Tokens

The product uses one token system across shells and clients. Tokens define shared visual foundations such as color, typography, spacing, density, radius, elevation, focus states, and semantic status language.

One token system may support multiple interaction grammars.

### Shared Domain/Workflow State

All shells participate in the same business lifecycle through shared domain and workflow state models.

This ADR commits to shared workflow state, not to a specific synchronization transport. Real-time updates through websockets or server-sent events may be used where required, but they are not assumed as a baseline unless already implemented.

Until a real-time transport is available, clients may rely on explicit refresh, polling, or existing invalidation mechanisms.

### Shared Permission & Capability Contracts

Capability contracts define which actions are available by role, shell, workflow state, and risk level.

Device boundaries must be enforced through capability contracts, permissions, workflow state, and API authorization. They must not rely only on hidden UI controls.

### Device-Specific Experience Shells

Each shell owns its own:

- Route structure.
- Navigation model.
- Screen composition.
- Interaction grammar.
- Density rules.
- Workflow surfaces.

Examples include a desktop authoring workspace and a mobile task flow. These shells may share domain-facing contracts and UI platform behavior, but they should not be forced into one page model.

## 4. Architecture Principle: Workflow Fitness

The purpose of each shell is not feature parity. The purpose is workflow fitness.

### Desktop: Authoring Shell

Desktop owns full-complexity authoring and operations workflows, including:

- Dense review.
- Reconciliation.
- Posting.
- Admin configuration.
- Bulk operations.
- Multi-line transaction entry.
- Side-by-side document comparison.

### Mobile: Companion Shell

Mobile owns companion workflows, including:

- Capture.
- Notification response.
- Approval and rejection.
- Comments.
- Attachments.
- Scanning.
- Lightweight status updates.
- Quick document visibility.

Mobile should not become a cramped clone of desktop.

### Tablet: Hybrid Exception

Tablet starts from the mobile touch-first grammar and selectively borrows desktop density only where repeated field, counter, or warehouse workflows prove the need.

Tablet becomes a separate grammar only when neither mobile task flows nor desktop dense screens fit the job.

## 5. Governance & Boundaries

These boundaries are technical and product governance rules. They should be enforced through shell design, capability contracts, permissions, workflow state, API behavior, and product review.

### Mobile Capture vs Completion

Mobile capture is not the same as mobile completion.

Mobile may initiate, capture, review, approve, reject, comment, attach, scan, or update status. Mobile should not complete workflows that require:

- Dense multi-line entry.
- Bulk operations.
- Multi-field financial or accounting validation.
- Cross-reference reconciliation.
- Side-by-side document comparison.
- Complex tax, pricing, or allocation rules.
- High-risk posting or reversal actions.

Those workflows belong to the desktop grammar unless the product explicitly creates a separate mobile-native workflow with its own reduced data contract, validation rules, permissions, audit behavior, and handoff path to desktop where required.

### Mobile Edit Boundary

Mobile edits are allowed only when they are local, bounded, and low-risk. They should be scoped to a single record, limited in field surface, and should not trigger dependent validation or recalculation chains.

Allowed examples:

- Correcting a description or comment.
- Updating a status.
- Adding an attachment.
- Changing an assignee.
- Selecting from a controlled list where downstream effects are limited and visible.

Not allowed by default:

- Editing debit or credit lines.
- Changing item, quantity, price, tax, or allocation fields when they recalculate dependent totals.
- Modifying multiple linked records in one action.
- Making edits that require side-by-side comparison or reconciliation.

### Journal Entry Example

For a journal entry workflow, mobile may support:

- Capturing an expense note.
- Uploading a receipt.
- Selecting a cost center from a limited list.
- Submitting a request for finance review.
- Approving or rejecting an already-prepared journal entry.
- Commenting on a pending entry.

Mobile should not support by default:

- Creating a full journal entry from scratch.
- Editing debit and credit lines in bulk.
- Posting the journal to the general ledger.
- Performing allocation or reconciliation.
- Overriding accounting validations.

### Product-Scope Change Rule

Requests to add full desktop workflows into the mobile shell must be evaluated as product-scope changes, not simple UI backlog items.

The question is not: "Can we build this on mobile?"

The question is: "Does this workflow belong to the mobile shell?"

### Shell-Specific API/BFF Boundary

Device-specific shells may use optimized read models or BFF endpoints for payload shaping, performance, scanner flows, approval queues, or task-focused summaries.

However, shell-specific APIs must not:

- Redefine workflow states.
- Bypass capability contracts.
- Duplicate validation logic inconsistently.
- Introduce mobile-only business rules.
- Weaken audit, permission, or approval behavior.

Shell-specific APIs may optimize delivery and presentation. They must not become separate sources of business truth.

## 6. Non-Goals

This ADR does not decide:

- The final component library.
- The exact mobile navigation implementation.
- The exact tablet breakpoint strategy.
- The exact real-time synchronization transport.
- The complete list of mobile-supported workflows.
- The visual design language.

## 7. Consequences

### Positives

- Prevents dense desktop workflows from being compromised by mobile constraints.
- Prevents mobile from becoming a cramped clone of desktop.
- Supports smaller, shell-specific bundles.
- Allows desktop, mobile, and tablet experiences to evolve around their actual workflow responsibilities.
- Gives product and engineering a shared governance model for device-specific requests.
- Creates a clear role for capability contracts in enforcing shell boundaries.

### Tradeoffs

- Some UI duplication is intentional.
- Feature parity across devices is not guaranteed.
- Teams must maintain discipline around shell boundaries.
- Shared workflow, permission, and capability contracts become more important.
- API and BFF design must preserve one business model while supporting shell-specific payload needs.
- Tablet support may require additional investment if field, counter, or warehouse workflows justify a separate grammar.
