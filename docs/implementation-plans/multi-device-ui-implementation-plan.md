# Multi-Device UI Implementation Plan

## Purpose

This plan translates the multi-device front-end ADR into implementation workstreams and a first validation slice.

The implementation must prove that desktop and mobile can share product, domain, workflow, and capability contracts without sharing page composition by default.

## Goals

- Establish device-specific shell boundaries.
- Share design tokens and UI behavior.
- Keep client-specific business rules outside the shared platform.
- Enforce action availability through capability contracts.
- Avoid treating mobile as a resized desktop screen.
- Validate the architecture through a real vertical slice.

## Workstreams

### 1. Shared Platform Core

Deliverables:

- Shared domain-facing type contracts.
- Shared workflow state contracts.
- Shared validation message contracts.
- Shared capability contract shapes.
- Shared query and data access extension points.
- Shared utility packages.

Acceptance criteria:

- Desktop and mobile consume the same domain and capability contract shapes.
- Shared platform core does not contain shared route definitions.
- Shared platform core does not contain client-specific business rules.
- Shells can resolve their own screen composition independently.

Risks:

- Shared core may accidentally become a shared app framework.
- Route or page composition may leak into shared packages.
- Business logic may be placed in shared utilities for convenience.

### 2. Shared Design Tokens

Deliverables:

- Color, typography, spacing, density, radius, elevation, focus, and semantic status tokens.
- Theme provider contract.
- Density system for desktop and mobile use.
- Storybook examples for token usage.

Acceptance criteria:

- Tokens are shared across desktop and mobile.
- Client branding can be applied through theme configuration.
- Tokens do not encode client-specific business meaning.

Risks:

- Tokens may become too visual and miss density semantics.
- Client-specific branding may leak into shared defaults.

### 3. Desktop Shell

Deliverables:

- Desktop workspace shell.
- Transaction authoring layout.
- Dense line-item grid pattern.
- Validation display pattern.
- Workflow action placement.
- Dense review layout.

Acceptance criteria:

- Desktop supports full authoring workflows.
- Desktop supports keyboard-first interaction.
- Desktop supports dense grids and internal scrolling where appropriate.
- Desktop owns its own routes, navigation, and screen composition.

Risks:

- Desktop shell may overfit the first module.
- Dense layouts may become inaccessible if keyboard and focus behavior are not tested.

### 4. Mobile Shell

Deliverables:

- Mobile task flow shell.
- Document summary pattern.
- Approval and rejection flow.
- Comment and attachment patterns.
- Status visibility pattern.
- Bounded edit pattern.

Acceptance criteria:

- Mobile supports companion workflows.
- Mobile does not clone the desktop transaction screen.
- Mobile owns its own routes, navigation, and screen composition.
- Mobile blocks desktop-only actions through capability contracts.

Risks:

- Mobile may drift into a smaller desktop.
- Product pressure may add complex workflows without reduced contracts.
- Hidden UI controls may be mistaken for sufficient enforcement.

### 5. Tablet Exception Handling

Deliverables:

- Tablet evaluation criteria.
- Tablet pattern guidance.
- Decision record template for tablet-specific workflows.

Acceptance criteria:

- Tablet starts from mobile grammar.
- Tablet borrows desktop density only when workflow evidence justifies it.
- Tablet-specific patterns are not created solely because the screen is larger.

Risks:

- Tablet scope may expand prematurely.
- Tablet may become an unmanaged third shell.

### 6. Capability Enforcement

Deliverables:

- Capability context model.
- Capability result model.
- Action availability mapping.
- Disabled, blocked, hidden, and unavailable reason handling.
- Shell-specific capability examples.

Acceptance criteria:

- Capabilities are resolved from role, shell, workflow state, document status, risk level, and feature flags.
- Desktop and mobile action availability is driven by capability results.
- Backend/API still enforces permissions and workflow transitions.
- Mobile restrictions are reflected in capability resolution.

Risks:

- UI capability checks may be confused with security enforcement.
- Client apps may diverge in capability mapping.
- High-risk actions may be exposed in mobile through incomplete rules.

### 7. BFF/Read Model Boundary

Deliverables:

- Shell-specific BFF/read-model guidelines.
- Mobile summary payload shape guidance.
- Approval queue payload guidance.
- Scanner or capture payload guidance.
- Offline read-model constraints where needed.

Acceptance criteria:

- Mobile may use BFF/read-model endpoints when needed for payload shaping or performance.
- BFF/read models preserve shared domain, workflow, validation, and capability semantics.
- No shell-specific endpoint creates separate business truth.

Risks:

- BFF endpoints may become alternate workflow engines.
- Mobile and desktop may disagree about document state.
- Validation logic may be duplicated inconsistently.

### 8. Governance and Review Process

Deliverables:

- Mobile feature request checklist.
- Shell boundary review process.
- Capability contract review process.
- Architecture review trigger for high-risk workflows.

Acceptance criteria:

- Mobile feature requests are reviewed as workflow-fit decisions.
- High-risk mobile workflows require architecture review.
- Requests to move desktop workflows into mobile are treated as product-scope changes.

Risks:

- Governance may be skipped under delivery pressure.
- Teams may treat mobile work as CSS resizing instead of shell design.

### 9. Vertical Slice Validation

Deliverables:

- Sales Invoice desktop flow.
- Sales Delivery supporting flow.
- Approval flow across desktop and mobile.
- Shared domain and capability contracts for the slice.
- Optional mobile BFF/read model for summary or approval queue.

Acceptance criteria:

- Desktop proves full authoring.
- Mobile proves companion workflows.
- Both shells consume shared domain and capability contracts.
- Mobile does not create separate business semantics.

Risks:

- The slice may be too broad and delay architectural learning.
- Sales-specific rules may leak into platform packages.
- Mobile approval may accidentally bypass backend workflow rules.

## Implementation Order

1. Finalize governance docs and capability contract shape.
2. Build shared tokens, primitive wrappers, and theme provider.
3. Create desktop and mobile shell skeletons with separate route ownership.
4. Define Sales Invoice / Sales Delivery / Approval Flow domain and capability contracts.
5. Build desktop Sales Invoice authoring slice.
6. Build mobile Sales Invoice summary and approval slice.
7. Add attachment, comment, and status visibility patterns.
8. Add optional mobile BFF/read model if payload shape or performance requires it.
9. Validate capability enforcement across desktop and mobile.
10. Review tablet needs only after desktop and mobile are proven.

## Vertical Slice: Sales Invoice / Sales Delivery / Approval Flow

The first proof should use Sales Invoice, Sales Delivery, and Approval Flow.

The vertical slice must consume shared domain and capability contracts. Mobile may use BFF/read-model endpoints if needed, but must not create separate business semantics.

### Desktop Must Prove

- Full authoring.
- Line-item grid.
- Pricing, tax, and totals.
- Validation display.
- Save and post actions.
- Dense review.

### Mobile Must Prove

- Document summary.
- Approval and rejection.
- Comments.
- Attachments.
- Status visibility.
- Bounded low-risk edits only.
- No full desktop clone.

## Cross-Slice Acceptance Criteria

- Desktop and mobile use separate routes and page composition.
- Desktop and mobile consume shared domain contracts.
- Desktop and mobile consume shared capability contracts.
- Mobile-only actions are blocked at the capability and API level.
- Desktop-only actions are unavailable or blocked in mobile with a clear reason.
- BFF/read-model endpoints do not redefine workflow, validation, or permissions.
- Shared platform packages contain no client-specific business rules.

## Test Strategy

### Contract Tests

- Validate shared domain contract compatibility.
- Validate capability context and result shapes.
- Validate workflow state and document status mappings.

### Unit Tests

- Test capability resolution for desktop, mobile, and tablet contexts.
- Test validation message mapping.
- Test adapter behavior for client-owned business rules.

### Integration Tests

- Test desktop Sales Invoice authoring flow.
- Test mobile approval and rejection flow.
- Test attachment and comment flow.
- Test API rejection of unauthorized or invalid actions.

### Accessibility Tests

- Test keyboard navigation for desktop grids and action bars.
- Test focus management for dialogs, menus, and validation summaries.
- Test mobile tap targets and screen reader labels.

### Visual and Interaction Tests

- Use Storybook review for platform patterns.
- Use visual regression for tokens, shells, transaction shell, editable grid, validation UI, and approval UI where practical.
- Verify mobile does not render the desktop transaction page as a resized layout.

### Governance Tests

- Run the mobile feature request checklist against the vertical slice.
- Review BFF/read-model endpoints for business truth leakage.
- Review high-risk actions such as posting through capability and backend enforcement.
