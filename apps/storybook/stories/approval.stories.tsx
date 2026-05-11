import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApprovalPanel } from "@erp-ui-platform/approval-ui";
import type {
  ApprovalAction,
  ApprovalStep,
  ApprovalComment,
  ApprovalStatus,
} from "@erp-ui-platform/approval-ui";
import { Button } from "@erp-ui-platform/primitives";
import { PageHeader, StatusBadge } from "@erp-ui-platform/app-components";
import { APPROVAL_STEPS, APPROVAL_COMMENTS } from "../utils/demoData";

const meta = {
  title: "Patterns/Approval",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── helpers ───────────────────────────────────────────────────────────────────

const statusTone: Record<
  ApprovalStatus,
  "default" | "warning" | "success" | "danger" | "info" | "muted"
> = {
  not_started: "muted",
  pending: "warning",
  approved: "success",
  rejected: "danger",
  changes_requested: "warning",
  cancelled: "muted",
};

const statusLabel: Record<ApprovalStatus, string> = {
  not_started: "Not Started",
  pending: "Pending Approval",
  approved: "Approved",
  rejected: "Rejected",
  changes_requested: "Changes Requested",
  cancelled: "Cancelled",
};

const renderAction = (action: ApprovalAction) => (
  <Button
    variant={
      action.decision === "reject"
        ? "destructive"
        : action.decision === "request_changes"
          ? "secondary"
          : "default"
    }
    density="comfortable"
    disabled={action.disabled}
    title={action.reason}
  >
    {action.label}
  </Button>
);

const ApprovalCard = ({
  title,
  docNumber,
  status,
  steps,
  comments,
  allowedActions,
  attachments,
  shell = "desktop",
}: {
  title?: string;
  docNumber?: string;
  status: ApprovalStatus;
  steps: readonly ApprovalStep[];
  comments?: readonly ApprovalComment[];
  allowedActions?: readonly ApprovalAction[];
  attachments?: React.ReactNode;
  shell?: "desktop" | "mobile";
}) => (
  <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
    <PageHeader
      title={title ?? "Document"}
      subtitle={docNumber}
      status={
        <StatusBadge label={statusLabel[status]} tone={statusTone[status]} />
      }
      density="compact"
    />
    <ApprovalPanel
      status={status}
      steps={steps}
      comments={comments}
      allowedActions={allowedActions}
      shell={shell}
      renderAction={renderAction}
      summary={
        <div className="text-xs text-neutral-600">
          <span className="font-medium">{docNumber}</span>
          {" · "}
          <span className="text-neutral-500">₹1,24,500.00</span>
        </div>
      }
      attachments={attachments}
    />
  </div>
);

// ── stories ───────────────────────────────────────────────────────────────────

export const PendingApproval: Story = {
  render: () => (
    <ApprovalCard
      title="Purchase Order"
      docNumber="PO-2024-0841"
      status="pending"
      steps={APPROVAL_STEPS}
      comments={APPROVAL_COMMENTS}
      allowedActions={[
        { id: "approve", decision: "approve", label: "Approve" },
        {
          id: "request-changes",
          decision: "request_changes",
          label: "Request Changes",
          requiresComment: true,
        },
        {
          id: "reject",
          decision: "reject",
          label: "Reject",
          requiresComment: true,
        },
      ]}
    />
  ),
};

export const Approved: Story = {
  render: () => (
    <ApprovalCard
      title="Purchase Order"
      docNumber="PO-2024-0841"
      status="approved"
      steps={[
        {
          id: "dept-head",
          label: "Department Head",
          status: "approved",
          actor: { id: "u1", displayName: "M. Rao" },
        },
        {
          id: "finance",
          label: "Finance Review",
          status: "approved",
          actor: { id: "u2", displayName: "F. Chen" },
        },
        {
          id: "cfo",
          label: "CFO Sign-off",
          status: "approved",
          actor: { id: "u3", displayName: "A. Sharma" },
        },
      ]}
      allowedActions={[]}
    />
  ),
};

export const Rejected: Story = {
  render: () => (
    <ApprovalCard
      title="Expense Claim"
      docNumber="EXP-2025-0312"
      status="rejected"
      steps={[
        {
          id: "manager",
          label: "Manager Review",
          status: "approved",
          actor: { id: "u1", displayName: "P. Verma" },
        },
        {
          id: "finance",
          label: "Finance Review",
          status: "rejected",
          actor: { id: "u2", displayName: "F. Chen" },
        },
      ]}
      comments={[
        {
          id: "c1",
          actor: { id: "u2", displayName: "F. Chen" },
          message: "Receipts missing for items over ₹5,000. Resubmit with documentation.",
          createdAt: "2025-05-10T14:30:00Z",
          decision: "reject",
        },
      ]}
      allowedActions={[]}
    />
  ),
};

export const RequestChanges: Story = {
  render: () => (
    <ApprovalCard
      title="Leave Request"
      docNumber="LV-2025-0089"
      status="changes_requested"
      steps={[
        {
          id: "manager",
          label: "Manager Review",
          status: "changes_requested",
          actor: { id: "u1", displayName: "S. Nair" },
        },
      ]}
      comments={[
        {
          id: "c1",
          actor: { id: "u1", displayName: "S. Nair" },
          message: "Please split this into two separate requests — medical and personal.",
          createdAt: "2025-05-10T11:00:00Z",
          decision: "request_changes",
        },
      ]}
      allowedActions={[]}
    />
  ),
};

export const WithComments: Story = {
  render: () => (
    <ApprovalCard
      title="Purchase Order"
      docNumber="PO-2024-0841"
      status="pending"
      steps={APPROVAL_STEPS}
      comments={[
        ...APPROVAL_COMMENTS,
        {
          id: "c3",
          actor: { id: "u2", displayName: "F. Chen" },
          message: "Vendor rate is higher than the last approved order by 8%. Flagging for review.",
          createdAt: "2025-05-10T09:00:00Z",
        },
      ]}
      allowedActions={[
        { id: "approve", decision: "approve", label: "Approve" },
        {
          id: "reject",
          decision: "reject",
          label: "Reject",
          requiresComment: true,
        },
      ]}
    />
  ),
};

export const MobileApprovalCard: Story = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <ApprovalCard
        title="Sales Invoice"
        docNumber="SI-2025-1001"
        status="pending"
        steps={[
          {
            id: "manager",
            label: "Manager review",
            status: "approved",
            actor: { id: "u1", displayName: "M. Rao" },
          },
          {
            id: "finance",
            label: "Finance review",
            status: "pending",
            actor: { id: "u2", displayName: "F. Chen" },
          },
        ]}
        comments={[
          {
            id: "c1",
            actor: { id: "u3", displayName: "Requester" },
            message: "Please approve for dispatch.",
            createdAt: "2025-05-11T00:00:00Z",
          },
        ]}
        allowedActions={[
          { id: "approve", decision: "approve", label: "Approve" },
          {
            id: "reject",
            decision: "reject",
            label: "Reject",
            requiresComment: true,
          },
          {
            id: "post",
            decision: "approve",
            label: "Post",
            disabled: true,
            reason: "Posting is desktop-only.",
          },
        ]}
        attachments={
          <div className="text-xs text-neutral-600">
            2 attachments: Receipt.pdf, PO.pdf
          </div>
        }
        shell="mobile"
      />
    </div>
  ),
};
