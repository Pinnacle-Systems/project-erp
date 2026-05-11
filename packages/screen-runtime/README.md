# @erp-ui-platform/screen-runtime

## Purpose

Provides contract-driven screen definition types used by consuming apps to assemble screens consistently.

## What Belongs Here

- Resolved screen rendering contracts, slot orchestration, business-neutral composition helpers, runtime validation, and extension point wiring.
- Base screen definition contracts.
- Client config merge helpers.
- Shell and mode filtering helpers.
- Validation for screen definition structure.

## What Does Not Belong Here

- Client module definitions.
- Client workflow rules.
- Client API calls.
- Business calculations.
- Client-specific business invariants.

## Allowed Dependencies

- None currently.

## Current Exports

- `ScreenDefinition`
- `ScreenType`
- `ScreenShell`
- `ScreenFieldDefinition`
- `ScreenSectionDefinition`
- `ScreenActionDefinition`
- `ScreenCapabilityBinding`
- `ScreenValidationBinding`
- `ScreenSlotDefinition`
- `ResolvedScreenDefinition`
- `resolveScreenDefinition`
- `validateScreenDefinition`
- `getActionsForShell`
- `getFieldsForMode`

## Example

```ts
import { resolveScreenDefinition } from "@erp-ui-platform/screen-runtime";

const resolved = resolveScreenDefinition(baseSalesInvoiceDefinition, {
  title: "Client Invoice",
  sections: {
    header: {
      fields: {
        customer: {
          label: "Bill To",
        },
      },
    },
  },
});
```

Base definitions describe structure. Client configs may customize allowed aspects. Client configs must not override forbidden business invariants unless the base definition explicitly allows that override.
