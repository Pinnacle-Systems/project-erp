import type { ApprovalStep, ApprovalComment } from "@erp-ui-platform/approval-ui";

export const INVOICE_LINES = [
  { n: 1, item: "FAB-001", desc: "Fabric roll", qty: 12, rate: "100.00", amt: "1,200.00" },
  { n: 2, item: "ACC-220", desc: "Accessory pack", qty: 8, rate: "40.00", amt: "320.00" },
] as const;

export const INVOICE_TOTALS = [
  { label: "Subtotal", value: "1,520.00" },
  { label: "Tax (18%)", value: "273.60" },
] as const;

export const INVOICE_TOTAL_FORMATTED = "₹1,793.60";

export const AUDIT_ENTRIES = [
  { when: "09 May 2025, 14:02", who: "A. Sharma", what: "Created draft" },
  { when: "10 May 2025, 09:15", who: "A. Sharma", what: "Submitted for approval" },
  { when: "10 May 2025, 11:30", who: "M. Rao", what: "Approved" },
  { when: "11 May 2025, 08:00", who: "F. Chen", what: "Posted to general ledger" },
] as const;

export const DEMO_ATTACHMENTS = ["Invoice_Scan.pdf", "PO_Reference.pdf"] as const;

export const APPROVAL_STEPS: ApprovalStep[] = [
  {
    id: "dept-head",
    label: "Department Head",
    status: "approved",
    actor: { id: "u1", displayName: "M. Rao", role: "Dept. Head" },
    completedAt: "2025-05-09T10:00:00Z",
  },
  {
    id: "finance",
    label: "Finance Review",
    status: "pending",
    actor: { id: "u2", displayName: "F. Chen", role: "Finance Manager" },
    required: true,
  },
  {
    id: "cfo",
    label: "CFO Sign-off",
    status: "not_started",
    actor: { id: "u3", displayName: "A. Sharma", role: "CFO" },
    required: true,
  },
];

export const APPROVAL_COMMENTS: ApprovalComment[] = [
  {
    id: "c1",
    actor: { id: "u4", displayName: "Requester" },
    message: "Urgent dispatch needed by Friday. Please expedite.",
    createdAt: "2025-05-08T09:00:00Z",
  },
  {
    id: "c2",
    actor: { id: "u1", displayName: "M. Rao" },
    message: "Approved. Budget confirmed for Q2.",
    createdAt: "2025-05-09T10:05:00Z",
    decision: "approve",
  },
];
