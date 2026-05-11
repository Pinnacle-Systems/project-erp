# @erp-ui-platform/screen-runtime

## Purpose

Provides business-neutral runtime behavior for rendering resolved screen definitions.

## What Belongs Here

- Resolved screen rendering contracts, slot orchestration, business-neutral composition helpers, runtime validation, and extension point wiring.

## What Does Not Belong Here

- Client module definitions.
- Client workflow rules.
- Client API calls.
- Business calculations.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`
- `@erp-ui-platform/validation-ui`
- `@erp-ui-platform/workflow-actions`
- Approved pattern packages.

## Examples of Future Exports

- `ResolvedScreenDefinition`
- `ScreenRuntime`
- `ScreenSlotRegistry`
- `ScreenRuntimeAdapter`
