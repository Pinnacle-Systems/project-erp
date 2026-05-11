# @erp-ui-platform/validation-ui

## Purpose

Defines validation message presentation and mapping behavior.

## What Belongs Here

- Validation summaries, inline field errors, warning/blocking/info display, field-to-message mapping contracts, and error focus behavior.

## What Does Not Belong Here

- Tax validation rules.
- Leave policy validation.
- Pricing validation.
- Posting validation.
- Client-specific error catalogs.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts` where needed.

## Examples of Future Exports

- `ValidationSummary`
- `InlineFieldError`
- `ValidationMessage`
- `ValidationSeverity`
