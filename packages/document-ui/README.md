# @erp-ui-platform/document-ui

## Purpose

Provides reusable document viewing, attachment, audit, and summary UI.

## What Belongs Here

- Document summary panels, attachment lists, audit trail display, document status display, preview containers, and metadata layouts.

## What Does Not Belong Here

- Client-specific document schemas.
- Posting logic.
- Retention rules.
- Client-specific file storage assumptions.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`
- `@erp-ui-platform/validation-ui`

## Examples of Future Exports

- `DocumentSummaryCard`
- `AttachmentPanel`
- `AuditTimeline`
- `DocumentPreview`
