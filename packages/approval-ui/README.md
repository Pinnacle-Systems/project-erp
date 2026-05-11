# @erp-ui-platform/approval-ui

## Purpose

Provides reusable approval, rejection, comment, and decision history UI.

This package defines shared approval UI contracts and a basic React `ApprovalPanel`. It does not define client-specific approval hierarchy or decision rules.

## What Belongs Here

- Approval cards, reject/comment forms, decision history UI, attachment presentation, and approval queue display patterns.
- Approval status, step, actor, comment, timeline, and action contracts.
- Basic approval panel layout.

## What Does Not Belong Here

- Approval hierarchy.
- Escalation policy.
- Client-specific approver resolution.
- Finance, HR, or procurement approval rules.
- Business-specific decision logic.

## Allowed Dependencies

- `@erp-ui-platform/capability-contracts`
- `react` as a peer dependency.

## Current Exports

- `ApprovalPanel`
- `ApprovalStatus`
- `ApprovalDecision`
- `ApprovalStep`
- `ApprovalActor`
- `ApprovalComment`
- `ApprovalTimelineEntry`
- `ApprovalPanelProps`
- `ApprovalAction`

## Example

```tsx
import { ApprovalPanel } from "@erp-ui-platform/approval-ui";

export function MobileApproval() {
  return (
    <ApprovalPanel
      status="pending"
      shell="mobile"
      steps={steps}
      comments={comments}
      allowedActions={allowedActions}
      summary={<DocumentSummary />}
      attachments={<AttachmentList />}
      onDecision={handleDecision}
    />
  );
}
```

The consuming app decides which actions are allowed and what each decision means.
