# @erp-ui-platform/lookup

## Purpose

Provides reusable lookup, search, selection, and autofill UX behavior.

## What Belongs Here

- Lookup input behavior, search result presentation, recent selections, empty/loading states, autofill preview, and provider interfaces.

## What Does Not Belong Here

- Client-specific endpoints.
- Product pricing rules.
- Client-specific item search logic.
- Legacy API assumptions.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`
- `@erp-ui-platform/validation-ui`

## Examples of Future Exports

- `LookupField`
- `LookupProvider`
- `LookupResultList`
- `AutofillPreview`
