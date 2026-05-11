# @erp-ui-platform/transaction-shell

## Purpose

Provides reusable transaction page structure through slots and contracts.

`TransactionShell` is layout-focused only. It must not contain sales, purchase, finance, HRMS, GST, inventory, or client-specific logic.

## What Belongs Here

- Header, lines, totals, actions, validation, and audit trail slots.
- Business-neutral transaction layout behavior.
- Slot contracts for transaction screens.
- Basic React layout component.

## What Does Not Belong Here

- Sales invoice rules.
- GST posting logic.
- Journal posting logic.
- Inventory allocation policy.
- Client-specific field definitions.
- Business-specific child components.

## Allowed Dependencies

- `@erp-ui-platform/validation-ui`
- `@erp-ui-platform/workflow-actions`
- `react` as a peer dependency.

## Current Exports

- `TransactionShell`
- `TransactionShellProps`
- `TransactionHeaderSlot`
- `TransactionLinesSlot`
- `TransactionTotalsSlot`
- `TransactionActionSlot`
- `TransactionStatus`
- `TransactionMode`
- `TransactionShellDensity`

## Sales Invoice Usage

```tsx
import { TransactionShell } from "@erp-ui-platform/transaction-shell";

export function SalesInvoiceScreen() {
  return (
    <TransactionShell
      title="Sales Invoice"
      documentNumber="SI-1001"
      status="draft"
      mode="edit"
      density="compact"
      header={<SalesInvoiceHeader />}
      lines={<SalesInvoiceLineGrid />}
      totals={<SalesInvoiceTotals />}
      actions={resolvedActions}
      validationMessages={validationMessages}
      attachments={<InvoiceAttachments />}
      audit={<InvoiceAuditTrail />}
      onAction={handleAction}
    />
  );
}
```

Invoice fields, pricing, tax, totals, validations, and API actions are injected by the consuming app.

## Leave Request Usage

```tsx
import { TransactionShell } from "@erp-ui-platform/transaction-shell";

export function LeaveRequestScreen() {
  return (
    <TransactionShell
      title="Leave Request"
      documentNumber="LR-204"
      status="submitted"
      mode="view"
      density="comfortable"
      header={<LeaveRequestDetails />}
      lines={<LeaveDateSummary />}
      actions={leaveActions}
      validationMessages={validationMessages}
      attachments={<LeaveAttachments />}
    />
  );
}
```

Leave balance, policy rules, and approval hierarchy remain outside this package.

## Approval-Only Usage

```tsx
import { TransactionShell } from "@erp-ui-platform/transaction-shell";

export function ApprovalReview() {
  return (
    <TransactionShell
      title="Approval Review"
      documentNumber="DOC-881"
      status="pendingApproval"
      mode="approval"
      density="touch"
      header={<ApprovalSummary />}
      lines={<ApprovalDocumentSummary />}
      actions={approvalActions}
      validationMessages={validationMessages}
      footer={<ApprovalFooter />}
      onAction={handleApprovalAction}
    />
  );
}
```

Approval-specific business rules are supplied through capabilities, workflow actions, and client-owned adapters.
