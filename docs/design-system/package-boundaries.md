# Package Boundaries

## Purpose

This document defines the target repository structure and package boundaries for the shared ERP UI/UX platform.

The platform should share stable UI behavior, interaction grammar, and ERP patterns. It must not absorb client-specific business rules, integrations, deployment concerns, or client app code.

## Target Repository Structure

```txt
erp-ui-platform/
  packages/
    tokens/
    primitives/
    app-components/
    layout-shells/
    desktop-patterns/
    mobile-patterns/
    transaction-shell/
    editable-grid/
    lookup/
    validation-ui/
    workflow-actions/
    approval-ui/
    document-ui/
    capability-contracts/
    screen-runtime/
    config-runtime/
  apps/
    storybook/
    playground/
    reference-app/
  docs/
    adr/
    design-system/
    ui-governance/
    implementation-plans/
```

## Global Dependency Rules

- `tokens` must not import from anything.
- `primitives` may import `tokens`.
- `app-components` may import `primitives` and `tokens`.
- Pattern packages may import `app-components`, `primitives`, `tokens`, and domain or capability contracts where applicable.
- Platform UI packages must not import from client apps.
- `capability-contracts` must not import UI packages.
- Business rules must not live inside shared UI packages.
- Shell-specific patterns must not import from each other unless explicitly routed through a shared abstraction.

## Package Boundaries

### tokens

**Purpose:** Define shared design tokens for visual foundations.

**Allowed dependencies:** None.

**Forbidden dependencies:** All platform packages, client apps, UI libraries, runtime frameworks, business rule packages, API clients.

**Belongs here:**

- Color tokens.
- Typography tokens.
- Spacing tokens.
- Density tokens.
- Radius tokens.
- Elevation tokens.
- Motion tokens.
- Focus tokens.
- Semantic status tokens.

**Must not belong here:**

- Components.
- CSS tied to a specific application shell.
- Client branding implementations.
- Business statuses with client-specific meaning.
- Runtime theme loading logic.

### primitives

**Purpose:** Provide low-level accessible UI wrappers.

**Allowed dependencies:** `tokens`, approved third-party primitive or accessibility foundations.

**Forbidden dependencies:** Client apps, business rules, API clients, shell packages, pattern packages, `screen-runtime`, `config-runtime`.

**Belongs here:**

- `AppButton`.
- `AppTextField`.
- Selects, checkboxes, radio groups, tabs, menus, dialogs, toasts, badges, tooltips.
- Accessibility behavior and focus states.
- Primitive-level theming hooks.

**Must not belong here:**

- ERP transaction behavior.
- Workflow action decisions.
- Approval flows.
- Business validation.
- Client-specific labels, fields, or permissions.

### app-components

**Purpose:** Provide business-neutral application components composed from primitives.

**Allowed dependencies:** `primitives`, `tokens`.

**Forbidden dependencies:** Client apps, business rules, API clients, shell-specific pattern packages, runtime packages unless explicitly approved.

**Belongs here:**

- Page headers.
- Empty states.
- Loading states.
- Error states.
- Filter bars.
- Status summaries.
- Generic action bars.
- Business-neutral cards and panels.

**Must not belong here:**

- Client-specific dashboards.
- Module-specific screens.
- Posting, allocation, pricing, tax, or approval hierarchy logic.
- Device-specific shell orchestration.

### layout-shells

**Purpose:** Define shared shell layout abstractions for application frames and content regions.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts` where needed.

**Forbidden dependencies:** Client apps, business rules, API clients, direct dependencies between desktop-specific and mobile-specific packages.

**Belongs here:**

- App frame primitives.
- Navigation region contracts.
- Content region layout.
- Toolbar and panel placement rules.
- Shared shell abstractions used by multiple device grammars.

**Must not belong here:**

- Client route definitions.
- Module route trees.
- Client navigation configuration.
- Business workflow decisions.
- Device-specific screens.

### desktop-patterns

**Purpose:** Define desktop interaction grammar for dense ERP workspaces.

**Allowed dependencies:** `layout-shells`, `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`, `workflow-actions`.

**Forbidden dependencies:** Client apps, business rules, mobile-specific packages except through shared abstractions, client API integrations.

**Belongs here:**

- Dense workspace layouts.
- Split-pane patterns.
- Keyboard-heavy interaction rules.
- Desktop review surfaces.
- Desktop action placement.
- Internal scrolling patterns.

**Must not belong here:**

- Mobile task flows.
- Client-specific modules.
- Posting rules.
- Pricing or discount calculations.
- Approval hierarchy logic.

### mobile-patterns

**Purpose:** Define mobile interaction grammar for focused task flows.

**Allowed dependencies:** `layout-shells`, `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`, `workflow-actions`, `approval-ui`, `document-ui`.

**Forbidden dependencies:** Client apps, business rules, desktop-specific packages except through shared abstractions, client API integrations.

**Belongs here:**

- Drill-down navigation patterns.
- Bottom sheet patterns.
- Mobile capture flows.
- Mobile approval response patterns.
- Mobile validation presentation.
- Task-focused summaries.

**Must not belong here:**

- Desktop dense workspaces.
- Full desktop transaction completion flows.
- Client-specific scanner rules.
- Client-specific approval hierarchy.
- Mobile-only business rules.

### transaction-shell

**Purpose:** Provide reusable transaction page structure through slots and contracts.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`, `workflow-actions`, `document-ui`.

**Forbidden dependencies:** Client apps, business rules, API clients, client-specific document modules.

**Belongs here:**

- Header, lines, totals, actions, validation, and audit trail slots.
- Transaction layout behavior.
- Sticky action regions.
- Unsaved-state UI hooks.
- Business-neutral document status display.

**Must not belong here:**

- Sales invoice rules.
- GST posting logic.
- Journal posting logic.
- Inventory allocation policy.
- Client-specific field definitions.

### editable-grid

**Purpose:** Provide reusable editable grid behavior for ERP data entry and review.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`.

**Forbidden dependencies:** Client apps, business rules, API clients, transaction-specific modules.

**Belongs here:**

- Keyboard navigation.
- Cell focus management.
- Row selection behavior.
- Inline validation display.
- Column sizing behavior.
- Add, remove, reorder, and copy row UI behavior.

**Must not belong here:**

- Pricing calculations.
- Tax calculations.
- Inventory rules.
- Client-specific columns.
- Client-specific lookup providers.

### lookup

**Purpose:** Provide reusable lookup, search, selection, and autofill UX behavior.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`.

**Forbidden dependencies:** Client apps, business rules, hardcoded API clients, client-specific data providers.

**Belongs here:**

- Lookup input behavior.
- Search result presentation.
- Recent selections.
- Empty and loading states.
- Selection confirmation.
- Autofill preview and conflict UI.
- Provider interfaces.

**Must not belong here:**

- Customer-specific lookup endpoints.
- Product pricing rules.
- Client-specific item search logic.
- Legacy API assumptions.

### validation-ui

**Purpose:** Define validation message presentation and mapping behavior.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts` where needed.

**Forbidden dependencies:** Client apps, business rules, API clients, domain-specific validators.

**Belongs here:**

- Validation summaries.
- Inline field errors.
- Warning, blocking, and informational message display.
- Field-to-message mapping contracts.
- Error focus behavior.

**Must not belong here:**

- Tax validation rules.
- Leave policy validation.
- Pricing validation.
- Posting validation.
- Client-specific error catalogs.

### workflow-actions

**Purpose:** Render workflow actions consistently across shells.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`.

**Forbidden dependencies:** Client apps, business rules, API clients, client-specific workflow engines.

**Belongs here:**

- Action grouping.
- Primary and secondary action placement.
- Disabled and blocked states.
- Confirmation UI.
- Risk indication.
- Capability-aware action rendering.

**Must not belong here:**

- Action availability decisions for a client.
- Approval hierarchy.
- Posting permissions.
- Workflow transition rules.

### approval-ui

**Purpose:** Provide reusable approval, rejection, comment, and decision history UI.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`, `workflow-actions`, `validation-ui`, `document-ui`.

**Forbidden dependencies:** Client apps, business rules, API clients, client-specific approval engines.

**Belongs here:**

- Approval cards.
- Reject/comment forms.
- Decision history UI.
- Attachment presentation for approvals.
- Approval queue display patterns.

**Must not belong here:**

- Approval hierarchy.
- Escalation policy.
- Client-specific approver resolution.
- Finance, HR, or procurement approval rules.

### document-ui

**Purpose:** Provide reusable document viewing, attachment, audit, and summary UI.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`.

**Forbidden dependencies:** Client apps, business rules, API clients, client document schemas.

**Belongs here:**

- Document summary panels.
- Attachment lists.
- Audit trail display.
- Document status display.
- Preview containers.
- Metadata layout patterns.

**Must not belong here:**

- Client-specific document schemas.
- Posting logic.
- Retention rules.
- Client-specific file storage assumptions.

### capability-contracts

**Purpose:** Define shared type shapes for action availability, risk, shell, role, and workflow-state contracts.

**Allowed dependencies:** Type-only utility packages with no UI dependency, if approved.

**Forbidden dependencies:** UI packages, client apps, business rules, API clients, runtime packages.

**Belongs here:**

- Capability types.
- Workflow action types.
- Shell identifiers.
- Risk-level types.
- Availability state types.
- Common reason-code shapes.

**Must not belong here:**

- UI rendering.
- Permission evaluation for a specific client.
- Business workflow engines.
- Client role mappings.

### screen-runtime

**Purpose:** Provide business-neutral runtime behavior for rendering resolved screen definitions.

**Allowed dependencies:** `app-components`, `primitives`, `tokens`, `capability-contracts`, `validation-ui`, `workflow-actions`, approved pattern packages.

**Forbidden dependencies:** Client apps, business rules, API clients, client-specific manifests.

**Belongs here:**

- Resolved screen rendering contracts.
- Slot orchestration.
- Business-neutral screen composition helpers.
- Runtime validation for screen definitions.
- Extension point wiring.

**Must not belong here:**

- Client module definitions.
- Client workflow rules.
- Client API calls.
- Business calculations.
- Hidden client-specific assumptions.

### config-runtime

**Purpose:** Provide business-neutral configuration loading, merging, validation, and resolution helpers.

**Allowed dependencies:** `capability-contracts`, type-only utility packages, schema validation libraries where approved.

**Forbidden dependencies:** UI packages unless explicitly approved, client apps, business rules, API clients.

**Belongs here:**

- Config schema helpers.
- Config merge behavior.
- Config validation errors.
- Environment-neutral resolution helpers.
- Extension point registration contracts.

**Must not belong here:**

- Client configuration values.
- Client business rules.
- Client permissions mapping.
- Client-specific feature flag values.
- Deployment configuration.

## Apps

### storybook

Documents platform packages and approved usage patterns. It may import platform packages and mock data, but it must not contain client-specific business rules.

### playground

Supports internal experimentation with platform patterns. Experiments must be promoted into packages only after review.

### reference-app

Demonstrates realistic platform usage with fake or generic business scenarios. It must not become a client app or contain real client rules.

## Review Checklist

Before adding code to a package, confirm:

- The package does not import from a client app.
- The package does not contain client-specific business rules.
- The dependency direction follows the global dependency rules.
- Capability contract types remain UI-independent.
- Shell-specific packages do not depend on each other directly.
- Extension points are used for client-owned behavior.
