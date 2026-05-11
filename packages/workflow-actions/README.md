# @erp-ui-platform/workflow-actions

## Purpose

Provides UI-agnostic workflow action definitions that can be rendered consistently by desktop and mobile shells.

## What Belongs Here

- Action grouping, primary/secondary placement, disabled and blocked states, confirmation UI, risk indication, and capability-aware rendering.
- Workflow action contracts.
- Capability-aware action filtering.
- Shell availability metadata.

## What Does Not Belong Here

- Client action availability decisions.
- Approval hierarchy.
- Posting permissions.
- Workflow transition rules.
- React components or shell-specific rendering.

## Allowed Dependencies

- `@erp-ui-platform/capability-contracts`

## Current Exports

- `WorkflowActionId`
- `WorkflowActionVariant`
- `WorkflowActionPlacement`
- `WorkflowAction`
- `WorkflowActionGroup`
- `WorkflowActionState`
- `WorkflowActionHandler`
- `ResolveWorkflowActionsInput`
- `filterActionsByCapabilities`

## Example

```ts
import { filterActionsByCapabilities } from "@erp-ui-platform/workflow-actions";

const visibleActions = filterActionsByCapabilities(
  actions,
  capabilities,
  "mobile",
);
```

Rendering packages can use the filtered result to decide what to show, disable, hide, or move into overflow. This package does not render React components.
