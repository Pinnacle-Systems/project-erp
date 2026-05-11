# @erp-ui-platform/transaction-shell

## Purpose

Provides reusable transaction page structure through slots and contracts.

## What Belongs Here

- Header, lines, totals, actions, validation, and audit trail slots.
- Business-neutral transaction layout behavior.

## What Does Not Belong Here

- Sales invoice rules.
- GST posting logic.
- Journal posting logic.
- Inventory allocation policy.
- Client-specific field definitions.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`
- `@erp-ui-platform/validation-ui`
- `@erp-ui-platform/workflow-actions`
- `@erp-ui-platform/document-ui`

## Examples of Future Exports

- `TransactionShell`
- `TransactionShellSlots`
- `TransactionStatusRegion`
- `TransactionActionRegion`
