# @erp-ui-platform/validation-ui

## Purpose

Provides shared validation message types and presentation helpers for forms, grids, and transaction shells.

This package includes shared contracts, helpers, and lightweight placeholder React components. Client apps and modules generate validation messages; this package standardizes how those messages are represented and prepared for display.

## What Belongs Here

- Validation summaries, inline field errors, warning/blocking/info display, field-to-message mapping contracts, and error focus behavior.
- UI-agnostic helpers for grouping, sorting, and selecting validation messages.

## What Does Not Belong Here

- Tax validation rules.
- Leave policy validation.
- Pricing validation.
- Posting validation.
- Client-specific error catalogs.
- Client-specific validation rules.

## Allowed Dependencies

- `react` as a peer dependency.

## Current Exports

- `ValidationSeverity`
- `ValidationScope`
- `ValidationMessage`
- `ValidationSummary`
- `FieldValidationState`
- `LineValidationState`
- `groupValidationMessagesByScope`
- `hasBlockingMessages`
- `getFieldMessages`
- `getLineMessages`
- `sortValidationMessagesBySeverity`
- `createValidationSummary`
- `createFieldValidationState`
- `createLineValidationState`
- `ValidationSummaryPanel`
- `FieldValidationMessage`
- `BlockingActionNotice`

## Placeholder Components

The React components are intentionally minimal placeholders:

- `ValidationSummaryPanel`
- `FieldValidationMessage`
- `BlockingActionNotice`

They provide stable names and basic accessible structure. Full styling and richer composition can be added later by platform UI packages.

## Example

```ts
import {
  getFieldMessages,
  hasBlockingMessages,
} from "@erp-ui-platform/validation-ui";

const customerMessages = getFieldMessages(messages, "header.customerId");
const blocksSubmit = hasBlockingMessages(messages);
```

Client apps and modules generate validation messages. This package does not implement client-specific validation rules.
