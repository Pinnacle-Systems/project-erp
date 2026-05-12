# Sales Invoice Approval Vertical Slice

## Purpose

Use Sales Invoice / Sales Delivery / Approval Flow to validate the shared UI/UX platform architecture.

This vertical slice should prove that the platform can support a realistic ERP workflow while keeping business meaning, integrations, and client-specific rules in the consuming app.

## What This Must Prove

- Shared domain and capability contracts.
- Desktop authoring shell.
- Mobile approval shell.
- Transaction shell.
- Editable grid.
- Validation display.
- Workflow actions.
- BFF/read-model boundary.
- Client-specific business rule injection.

## Architecture Flow

```txt
Client App
  sales module
  invoice rules
  delivery rules
  API/BFF integration
  capability adapter
  lookup providers
        |
        v
Shared Platform Contracts
  capability-contracts
  validation-ui
  workflow-actions
  lookup
        |
        v
Shared Platform UI Behavior
  transaction-shell
  editable-grid
  approval-ui
  document-ui
  desktop/mobile patterns
        |
        v
Device Shells
  desktop authoring shell
  mobile approval shell
```

The desktop and mobile shells may use different page composition and route structures. They must consume the same domain, workflow, validation, and capability semantics.

Mobile may use BFF/read-model endpoints for summaries or approval queues. Those endpoints must not create separate business truth.

## Desktop Scope

Desktop must demonstrate:

- Full document authoring.
- Multi-document workspace switching for open work items.
- Header fields.
- Line grid.
- Lookup and autofill.
- Totals panel.
- Validation messages.
- Save, post, and submit actions.
- Audit and attachment panels.

Desktop is the authoring shell. It should prove dense review, keyboard-oriented data entry, line editing, and high-risk actions where permitted.

The desktop reference app may use `MultiDocumentWorkspace` for open invoice, return, and customer work items. Workspace tabs answer "what am I currently working on?" and are not route hierarchy.

Breadcrumbs are scoped to the active workspace tab. They describe hierarchy or location for the active item only, not all open tabs and not navigation history.

Reference app target screens:

- Desktop Sales Invoice Create/Edit can open as a workspace tab.
- Sales Return can open as another workspace tab.
- Customer detail can open as another workspace tab.
- Switching tabs updates `PageHeader` breadcrumbs to match the active tab.
- Dirty and error markers should be visible on workspace tabs using mock state.

## Mobile Scope

Mobile must demonstrate:

- Document summary.
- Approval and rejection.
- Comments.
- Attachments.
- Quick status visibility.
- No dense line editing.
- No high-risk posting unless explicitly allowed by capability contract.
- No workspace tabs by default.

Mobile is the companion shell. It should not render the desktop transaction page as a smaller layout.

The mobile reference app should use back navigation, screen title, document status, and optional module labels instead of desktop workspace tabs and full breadcrumbs by default.

## Out of Scope

- Full accounting engine.
- Full tax engine.
- Offline mutation.
- Client-specific production rules.
- Advanced reporting.

## Packages Touched

- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`
- `@erp-ui-platform/workflow-actions`
- `@erp-ui-platform/validation-ui`
- `@erp-ui-platform/lookup`
- `@erp-ui-platform/editable-grid`
- `@erp-ui-platform/transaction-shell`
- `@erp-ui-platform/approval-ui`
- `@erp-ui-platform/document-ui`
- Desktop and mobile shell pattern packages when shell examples are added.

## Consuming App Responsibilities

The consuming app owns:

- Sales invoice module assembly.
- Sales delivery module assembly.
- Header field definitions.
- Line item column definitions.
- Customer, item, warehouse, and delivery lookup providers.
- Pricing, tax, discount, and total calculation rules.
- Validation rule generation.
- API/BFF integration.
- Capability resolution for the client.
- Approval workflow mapping.
- Audit and attachment data sources.
- Desktop and mobile routes.

The shared platform owns:

- Slot-based transaction layout.
- Editable grid behavior contracts.
- Lookup provider contracts.
- Validation message shape and presentation.
- Workflow action contracts and filtering.
- Approval panel behavior.
- Capability contract shapes.
- Shell boundary patterns.

## Acceptance Criteria

### Shared Contracts

- Desktop and mobile consume the same capability contract shapes.
- Desktop and mobile consume the same validation message contract.
- Workflow action availability is capability-driven.
- Mobile restrictions are represented in capability resolution.

### Desktop Authoring

- User can edit header fields.
- User can edit line items through the editable grid.
- User can switch between open Sales Invoice, Sales Return, and Customer detail workspace tabs.
- Switching workspace tabs updates the active `PageHeader` breadcrumbs.
- Workspace tab dirty and error markers render from mock state.
- Lookup/autofill works through injected providers.
- Totals are shown through an injected totals slot.
- Validation messages render at document, field, line, and workflow levels.
- Save, submit, and post actions render according to capabilities.
- Audit and attachment panels render through slots.

### Mobile Approval

- User can view compact document summary.
- User can navigate back from the active mobile detail screen.
- User can approve or reject when capability allows.
- User can comment and view attachments.
- User can see status and workflow state.
- Workspace tabs are not shown by default.
- Dense line editing is not available.
- Posting is blocked unless explicitly allowed by capability contract.

### BFF/Read Model

- Mobile summary or approval queue endpoints may shape payloads for mobile.
- BFF/read-model endpoints do not redefine workflow states.
- BFF/read-model endpoints do not bypass validation or permissions.
- Desktop and mobile agree on document truth.

### Business Rule Injection

- Pricing, tax, totals, posting, and validation rules live outside shared packages.
- Shared packages receive calculated values, validation messages, capabilities, and slots.
- No sales-specific business logic is added to shared platform packages.

## Test Strategy

### Contract Tests

- Capability context and result shape.
- Workflow action filtering by capability and shell.
- Validation message shape and severity ordering.
- Lookup provider contract behavior.

### Unit Tests

- Editable grid row state transitions.
- Cell change behavior and stale markers.
- Validation helper functions.
- Capability adapter behavior in desktop and mobile contexts.

### Integration Tests

- Desktop sales invoice authoring path.
- Desktop save, submit, and post action availability.
- Mobile approval and rejection path.
- Comment and attachment rendering.
- BFF/read-model response mapping.

### Accessibility Tests

- Desktop grid keyboard navigation.
- Validation focus and announcement behavior.
- Approval action focus order.
- Mobile tap target and screen reader review.

### Governance Tests

- Run the mobile feature request checklist against the slice.
- Verify package boundary linting prevents sales-specific logic from entering shared packages.
- Review BFF/read-model endpoints against the BFF/API boundary rules.

## Risks

- Sales-specific assumptions may leak into shared packages.
- The desktop slice may become too broad and delay architecture validation.
- Mobile approval may accidentally become a resized desktop page.
- BFF/read-model endpoints may duplicate workflow or validation logic.
- Capability checks may be mistaken for backend authorization.
- Tax, pricing, or posting complexity may distract from the UI platform proof.

## Completion Signal

The vertical slice is successful when desktop and mobile support different workflow-fit experiences while sharing contracts, capability semantics, validation shape, and platform UI behavior.
