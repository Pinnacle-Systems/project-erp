# @erp-ui-platform/lookup

## Purpose

Provides shared lookup/autocomplete contracts for ERP screens.

This package defines provider contracts and lifecycle helpers. It does not implement client-specific item, customer, vendor, employee, or account APIs.

## What Belongs Here

- Lookup input behavior, search result presentation, recent selections, empty/loading states, autofill preview, and provider interfaces.
- Search, select, resolve, enrich, validate, and autofill contracts.
- Async lookup provider contract.
- Lookup state helpers.

## What Does Not Belong Here

- Client-specific endpoints.
- Product pricing rules.
- Client-specific item search logic.
- Legacy API assumptions.
- Client-specific item, customer, vendor, employee, or account APIs.

## Allowed Dependencies

- `@erp-ui-platform/validation-ui`

## Current Exports

- `LookupQuery`
- `LookupResult`
- `LookupProvider`
- `LookupResolveInput`
- `LookupResolveResult`
- `LookupAutofillMapping`
- `LookupValidationResult`
- `LookupState`
- `LookupError`
- `createLookupState`
- `isLookupResolved`
- `mapAutofillValues`

## Future UI Exports

- `LookupField`
- `LookupProvider`
- `LookupResultList`
- `AutofillPreview`

## Example

```ts
import type { LookupProvider } from "@erp-ui-platform/lookup";

export const itemLookupProvider: LookupProvider = {
  search(query) {
    return itemApi.search(query.searchText);
  },
  resolve(result) {
    return itemApi.getById(result.id);
  },
  validate(resolved) {
    return itemValidationAdapter.validate(resolved);
  },
};
```

Consuming apps provide concrete providers. This package only standardizes the shape of lookup behavior.
