# @erp-ui-platform/approval-ui

## Purpose

Provides reusable approval, rejection, comment, and decision history UI.

## What Belongs Here

- Approval cards, reject/comment forms, decision history UI, attachment presentation, and approval queue display patterns.

## What Does Not Belong Here

- Approval hierarchy.
- Escalation policy.
- Client-specific approver resolution.
- Finance, HR, or procurement approval rules.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts`
- `@erp-ui-platform/workflow-actions`
- `@erp-ui-platform/validation-ui`
- `@erp-ui-platform/document-ui`

## Examples of Future Exports

- `ApprovalPanel`
- `ApprovalDecisionCard`
- `RejectionForm`
- `ApprovalTimeline`
