# Customization Model

## Purpose

This document defines how consuming client apps may customize the shared ERP UI/UX platform.

Customization should be explicit, layered, and governed. The shared UI platform owns extension points. Client apps own concrete rules, configurations, integrations, and business decisions.

Layers 1 through 4 can often be config-driven. Layer 5 should usually be code, plugin, or adapter-driven, not pure JSON.

## Customization Layers

### 1. Theme Customization

Theme customization covers client visual identity.

Includes:

- Logo.
- Colors.
- Typography.
- Density.
- Radius.
- Brand assets.

The shared platform owns:

- Token names.
- Theme provider contracts.
- Allowed density and radius scales.
- Semantic status token usage.

Client apps own:

- Concrete brand values.
- Logo assets.
- Client-specific theme configuration.

### 2. Layout Customization

Layout customization covers product arrangement and shell availability.

Includes:

- Navigation items.
- Dashboard widgets.
- Module visibility.
- Shell availability.
- Desktop, mobile, and tablet route availability.

The shared platform owns:

- Shell layout patterns.
- Navigation component behavior.
- Dashboard layout primitives.
- Route and shell extension points.

Client apps own:

- Which modules appear.
- Which dashboards are enabled.
- Which shells expose which workflows.
- The client route tree.

### 3. Field Customization

Field customization covers screen-level configuration.

Includes:

- Labels.
- Visible fields.
- Required fields.
- Read-only fields.
- Default values.
- Field order.
- Help text.

The shared platform owns:

- Field definition contracts.
- Form layout behavior.
- Required and read-only presentation.
- Help text presentation.
- Validation message placement.

Client apps own:

- Concrete field definitions.
- Client labels.
- Visibility rules.
- Default values.
- Client-specific field ordering.

Field customization may be config-driven when rules are simple and declarative.

### 4. Workflow Customization

Workflow customization covers lifecycle and action availability.

Includes:

- Statuses.
- Transitions.
- Approval steps.
- Allowed actions.
- Role capabilities.
- Shell-specific action availability.

The shared platform owns:

- Capability contract shapes.
- Workflow action UI.
- Approval UI patterns.
- Disabled, blocked, and hidden action presentation.
- Confirmation and risk display behavior.

Client apps own:

- Status mappings.
- Transition rules.
- Approval configuration.
- Role-to-capability mapping.
- Shell-specific action policy for the client.

Workflow customization should be represented through capability contracts, workflow configuration, and client-owned adapters.

### 5. Business Rule Customization

Business rule customization covers client-specific business truth.

Includes:

- Pricing.
- Tax.
- Discounts.
- Leave rules.
- Inventory allocation.
- Posting logic.
- Validation logic.

The shared platform owns:

- Adapter contracts.
- Validation UI.
- Slots for calculated output.
- Business-neutral action and error presentation.

Client apps own:

- Concrete calculations.
- Concrete validation rules.
- Posting behavior.
- Tax behavior.
- Approval hierarchy rules.
- Allocation policy.
- Leave policy.

Business rule customization should usually live in client-owned code, plugins, adapters, BFF/API services, or domain packages. It should not be expressed as pure JSON unless the rule is intentionally simple, declarative, and safe to evaluate as configuration.

## Extension Point Ownership

The shared UI platform owns extension points such as:

- Theme providers.
- Render slots.
- Field definition contracts.
- Lookup provider interfaces.
- Validation adapter interfaces.
- Workflow action contracts.
- Business rule adapter contracts.
- Capability contract shapes.
- Shell availability contracts.

Client apps own the concrete implementations of those extension points.

## Examples

### Invoice Customization

An invoice module may customize:

- Theme layer: client invoice logo and brand color.
- Layout layer: sales module visible on desktop and tablet, invoice approval queue visible on mobile.
- Field layer: client-specific labels, required purchase order field, hidden internal margin field.
- Workflow layer: statuses such as draft, submitted, approved, posted, and cancelled.
- Business rule layer: pricing, tax, discount, posting, and validation logic.

The shared platform may provide `TransactionShell`, `EditableGrid`, `Lookup`, `ValidationSummary`, and `WorkflowActions`. The client app provides invoice fields, rules, API calls, and capability resolution.

### Leave Request Customization

A leave request module may customize:

- Theme layer: HR portal branding.
- Layout layer: leave request appears in mobile quick actions and desktop HRMS navigation.
- Field layer: leave type, date range, reason, attachment, and manager comment fields.
- Workflow layer: submitted, manager-approved, HR-approved, rejected, and cancelled statuses.
- Business rule layer: leave balance checks, holiday rules, carry-forward rules, and policy exceptions.

The shared platform may provide form layout, approval UI, validation display, and workflow action UI. The client app owns leave policy and approval hierarchy.

### Mobile Approval Customization

A mobile approval workflow may customize:

- Layout layer: approval queue appears in the mobile shell.
- Field layer: compact document summary fields.
- Workflow layer: approve, reject, comment, and request-change actions.
- Business rule layer: whether the user is an eligible approver and whether approval requires additional checks.

The shared platform owns the mobile approval pattern and action presentation. The client app maps roles, workflow state, and document risk into capability contracts.

### Scanner/Capture Customization

A scanner or capture workflow may customize:

- Layout layer: scanner flow available only in the mobile shell.
- Field layer: captured code, quantity, location, attachment, or notes.
- Workflow layer: capture, confirm, submit, discard, and hand off to desktop.
- Business rule layer: barcode interpretation, inventory validation, duplicate handling, and allocation logic.

The shared platform owns scanner/capture UI patterns and validation presentation. The client app owns scanner providers, interpretation rules, inventory checks, and API submission.

## Rule of Thumb

Use configuration for product shape and presentation when possible. Use code, plugins, adapters, or backend services for business truth.
