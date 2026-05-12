# Token Architecture

## Purpose

This document defines the token architecture for the reusable ERP UI/UX platform.

The platform should expose stable semantic CSS variables that components can consume across clients, themes, devices, and densities. Components should not rely on raw Tailwind palette classes for reusable styling.

Token names are public styling contracts. Rename or remove them only through the versioning and migration process.

## Token Layers

### 1. Foundation Tokens

Foundation tokens are raw visual primitives. They are the source material for higher-level tokens and should not usually appear directly in component styling.

Includes:

- Neutral scale.
- Spacing scale.
- Typography scale.
- Radius scale.
- Shadow scale.
- Z-index scale.

Foundation tokens belong in the token/theme layer. They may use raw values such as hex colors, numeric spacing, and base font sizes.

### 2. Semantic Tokens

Semantic tokens describe product-agnostic UI meaning.

Includes:

- Surface tokens: app background, surface, raised surface, muted surface.
- Text tokens: foreground, muted foreground, subtle text, inverse text.
- Border tokens: default, strong, focus.
- Interactive state tokens: hover, active, focus ring, disabled opacity.
- Semantic intent colors: primary, success, warning, danger, info, muted.

Components should prefer semantic tokens over raw palette values. For example, use `--erp-color-surface`, `--erp-color-foreground`, `--erp-color-border`, and `--erp-color-primary` instead of Tailwind classes such as `bg-white`, `text-neutral-900`, `border-neutral-200`, or `bg-blue-600`.

### 3. ERP Application Tokens

ERP application tokens describe reusable ERP UI patterns without encoding client-specific business rules.

Includes:

- Grid and table tokens: row height, header background, cell padding, row hover, selected row, stale cell, edited cell.
- Validation severity tokens: info, warning, error, blocking, field error, line error, workflow blocker.
- Workflow and action tokens: primary action, secondary action, destructive action, blocked action, disabled action, pending action.
- Document status tokens: draft, submitted, pending approval, approved, rejected, posted, cancelled, closed.
- Shell layout tokens: top bar height, side navigation width, workspace tab height, content padding, panel width.
- Form layout tokens: field gap, section gap, label color, help text, required marker, read-only field surface.

Document status tokens must not be confused with validation severity tokens. A document may have status `approved` while still showing a validation warning in a separate review context. Status describes lifecycle; validation severity describes feedback or blocking conditions.

Business-specific statuses must not be added to core tokens unless they are generic across ERP, HRMS, billing, and adjacent product areas. Client-specific statuses should map to existing generic document or semantic tokens.

### 4. Device And Density Tokens

Device and density tokens control interaction rhythm and layout comfort.

Supported density modes:

- `compact`: dense desktop authoring, grid-heavy work, keyboard-oriented workflows.
- `comfortable`: default desktop and tablet rhythm.
- `touch`: mobile or touch-first surfaces.

Density tokens may affect:

- Control height.
- Grid row height.
- Toolbar height.
- Page padding.
- Field spacing.
- Mobile bottom action bar height.

Density must not encode permissions, workflow state, validation policy, or route availability.

### 5. Deferred Token Groups

The following token groups are intentionally deferred until the platform has enough usage to stabilize them:

- Motion tokens.
- Breakpoints.
- Icon tokens.
- Advanced chart tokens.

These groups should not be invented ad hoc inside components. If a component needs one of these concerns before the token group exists, document the local decision and keep the styling narrow.

## Component Rules

- Components should prefer semantic tokens over raw palette values.
- Raw neutral and color scales are allowed only inside token definitions, not reusable component styling.
- Use ERP application tokens for recurring ERP patterns such as grids, validation, workflow actions, document status, shells, and forms.
- Do not use document status tokens to represent validation severity.
- Do not use validation severity tokens to represent document lifecycle.
- Do not add client-specific business statuses to core tokens.
- Client-specific theme overrides should map semantic tokens, not rewrite component styles.
- Token names should remain stable because they are public styling contracts.

## Theme Override Rules

Client themes should override semantic variables and ERP application variables.

Allowed:

- Mapping `--erp-color-primary` to a client brand color.
- Mapping `--erp-color-surface` to a client-approved surface color.
- Adjusting density variables for a client deployment.
- Mapping a client document status to a generic platform status tone.

Not allowed:

- Rewriting shared component CSS for one client.
- Adding client-only workflow statuses to core token definitions.
- Encoding permissions, workflow rules, or field visibility in tokens.
- Using theme overrides to change route structure or shell availability.

## Migration Guidance

When updating components:

- Replace raw Tailwind palette classes with semantic CSS variables first.
- Keep layout and behavior unchanged unless the token migration requires a small visual correction.
- Prefer package-level semantic variables over component-local hardcoded colors.
- Add new ERP application tokens only when the pattern is reusable across modules or shells.
- Update Storybook examples when a token migration changes visible behavior.

Raw palette values may still appear in token definition files, documentation examples that explain raw scales, or one-off non-theme visual assets. They should not be the normal styling mechanism for platform components.
