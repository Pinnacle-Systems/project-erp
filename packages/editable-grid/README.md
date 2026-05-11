# @erp-ui-platform/editable-grid

## Purpose

Provides shared editable grid behavior contracts for ERP line-entry screens.

This package is logic/contracts first. It does not render a grid yet.

## What Belongs Here

- Keyboard navigation, cell focus, row selection, inline validation display, column sizing, and row operation UI behavior.
- Cell editing contracts.
- Row state contracts.
- Lookup and autofill contracts.
- Manual override and stale marker support.
- Phantom/new row behavior.
- Concurrency-safe edit update behavior.

## What Does Not Belong Here

- Pricing calculations.
- Tax calculations.
- Inventory rules.
- Client-specific columns.
- Client-specific lookup providers.
- Business-specific columns or calculations.
- Sales invoice behavior.

## Allowed Dependencies

- `@erp-ui-platform/validation-ui`

## Current Exports

- `GridColumnDefinition`
- `GridRow`
- `GridCell`
- `GridEditState`
- `GridRowState`
- `GridValidationState`
- `GridKeyboardCommand`
- `GridLookupConfig`
- `GridAutofillResult`
- `GridChangeEvent`
- `createEmptyRow`
- `markRowDirty`
- `markRowDeleted`
- `applyCellChange`
- `isRowEditable`
- `getNextEditableCell`

## Example

```ts
import {
  applyCellChange,
  createEmptyRow,
} from "@erp-ui-platform/editable-grid";

const row = createEmptyRow({
  id: "line-1",
  columns,
  defaults: { quantity: 1 },
});

const change = applyCellChange(row, columns[0], "ITEM-001", {
  expectedVersion: row.version,
});

console.log(change.nextRow);
```

Client modules define columns, lookup providers, validation rules, calculations, and API behavior outside this package.
