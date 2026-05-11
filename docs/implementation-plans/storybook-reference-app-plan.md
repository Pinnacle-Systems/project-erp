# Storybook and Reference App Plan

## Purpose

Storybook and the reference app are governance tools for the shared ERP UI/UX platform.

Storybook documents package-level behavior, states, variants, accessibility expectations, and visual contracts. The reference app demonstrates how platform packages compose into realistic workflows without using real client business rules.

Together, they should make platform behavior reviewable before it reaches consuming client apps.

## Storybook Scope

Storybook should show:

- Tokens.
- Primitives.
- Application components.
- Transaction shell.
- Editable grid states.
- Lookup states.
- Validation states.
- Approval flows.
- Desktop vs mobile shell examples.
- Density variants.
- Disabled and blocked capability states.

## Required Stories

### Tokens

- Color tokens.
- Semantic color tokens.
- Typography tokens.
- Spacing tokens.
- Radius tokens.
- Shadow tokens.
- Density tokens.
- Status tokens.
- Z-index tokens.

### Primitives

- Buttons by variant and state.
- Text fields by state.
- Select and combobox states.
- Dialog and confirmation states.
- Tooltip, badge, toast, and menu states.

### Application Components

- Page header.
- Filter bar.
- Status badge.
- Empty state.
- Error state.
- Loading state.
- Confirm dialog.
- Attachment panel.
- Audit timeline.

### ERP Patterns

- Transaction shell in create, edit, view, and approval modes.
- Editable grid clean, new, dirty, deleted, stale, and invalid states.
- Lookup loading, empty, search results, resolved, validation error, and autofill preview states.
- Validation summary with info, warning, error, and blocking messages.
- Workflow action bar with primary, secondary, overflow, footer, and contextual actions.
- Approval panel with pending, approved, rejected, and request-changes flows.

### Shell Examples

- Desktop workspace example.
- Mobile task flow example.
- Mobile approval example.
- Scanner capture example.
- Tablet exception example where justified.

### Capability States

- Allowed action.
- Disabled action with reason.
- Blocked action with reason.
- Hidden action.
- Desktop-only high-risk action.
- Mobile companion action.

## Reference App Scope

The reference app should show realistic but fake workflows:

- One sales transaction.
- One approval flow.
- One master data form.
- One report page.
- One mobile scanner/capture flow.
- One dashboard summary.

The reference app must not contain real client business rules, integrations, credentials, or client-specific configuration.

## Required Reference App Flows

### Sales Transaction

Demonstrates:

- Transaction shell.
- Header form.
- Editable line grid.
- Lookup field.
- Validation summary.
- Workflow actions.
- Attachments.
- Audit timeline.

The sales transaction should use fake pricing and validation adapters only for demonstration.

### Approval Flow

Demonstrates:

- Approval panel.
- Approval steps.
- Comments.
- Attachments.
- Allowed, disabled, and blocked actions.
- Desktop and mobile approval surfaces.

### Master Data Form

Demonstrates:

- Field definitions.
- Field validation.
- Lookup.
- Save/cancel actions.
- Readonly and edit modes.

### Report Page

Demonstrates:

- Filter bar.
- Data table.
- Empty state.
- Loading state.
- Export action controlled by capability.

### Mobile Scanner/Capture Flow

Demonstrates:

- Mobile task shell.
- Scanner/capture entry.
- Lookup result.
- Quantity or note capture.
- Validation messages.
- Handoff to desktop where needed.

### Dashboard Summary

Demonstrates:

- Summary cards.
- Status badges.
- Mobile and desktop density differences.
- Capability-aware shortcuts.

## Review Process

Platform changes that affect visible UI, interaction behavior, keyboard behavior, validation display, shell rules, or accessibility behavior should include Storybook updates.

Review should cover:

- Does the story demonstrate all relevant states?
- Does the behavior match package boundary rules?
- Does the example avoid client-specific business logic?
- Does the component work in supported density modes?
- Does the component work in desktop and mobile shells where applicable?
- Are disabled, blocked, and hidden capability states visible where needed?
- Are validation and error states shown?

Reference app changes should be reviewed when a package introduces or changes a workflow-level pattern.

## Visual Regression Recommendation

Use visual regression testing for:

- Tokens.
- Primitives.
- Transaction shell.
- Editable grid.
- Lookup.
- Validation UI.
- Approval UI.
- Desktop and mobile shell examples.
- Density variants.

Visual diffs should be reviewed before release, especially for minor and major package versions.

## Accessibility Review

Accessibility review should include:

- Keyboard navigation.
- Focus order.
- Focus trapping in dialogs.
- Visible focus states.
- ARIA labels where required.
- Screen reader behavior for validation messages.
- Touch target size for mobile.
- Color contrast for status, validation, and disabled states.
- Error and blocking action announcements.

Accessibility fixes that alter behavior should be versioned according to the versioning policy.

## Release Readiness Checklist

Before releasing a shared UI/UX platform package:

- Relevant Storybook stories are added or updated.
- Reference app flow is updated when workflow behavior changes.
- Disabled, blocked, hidden, loading, empty, and error states are represented.
- Density variants are reviewed.
- Desktop and mobile shell impact is reviewed.
- Capability-driven states are demonstrated.
- Validation states are demonstrated.
- Accessibility review is complete.
- Visual regression review is complete where available.
- Release notes mention visual, behavioral, accessibility, and migration impacts.
- Major versions include a migration guide.

