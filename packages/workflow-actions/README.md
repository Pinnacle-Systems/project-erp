# @erp-ui-platform/workflow-actions

## Purpose

Renders workflow actions consistently across shells.

## What Belongs Here

- Action grouping, primary/secondary placement, disabled and blocked states, confirmation UI, risk indication, and capability-aware rendering.

## What Does Not Belong Here

- Client action availability decisions.
- Approval hierarchy.
- Posting permissions.
- Workflow transition rules.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`

## Examples of Future Exports

- `WorkflowActions`
- `WorkflowActionBar`
- `ActionAvailability`
- `RiskConfirmationDialog`
