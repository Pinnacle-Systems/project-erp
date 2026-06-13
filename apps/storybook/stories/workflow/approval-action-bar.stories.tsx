import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApprovalActionBar } from "@erp-ui-platform/app-components";

const meta: Meta<typeof ApprovalActionBar> = {
  title: "Workflow/ApprovalActionBar",
  component: ApprovalActionBar,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ApprovalActionBar>;

export const PendingApproval: Story = {
  args: {
    status: "Pending approval",
    statusTone: "warning",
    actions: [
      { key: "approve", label: "Approve", tone: "success" },
      { key: "reject", label: "Reject", tone: "danger" },
      { key: "changes", label: "Request Changes", variant: "secondary" },
    ],
    onAction: (action: any) => console.log("Action clicked:", action),
  },
};

export const ApprovedState: Story = {
  args: {
    status: "Approved",
    statusTone: "success",
    message: "Approved by Finance Manager on Jun 13",
    actions: [
      { key: "return", label: "Return to Draft", variant: "secondary" },
    ],
  },
};

export const RejectedState: Story = {
  args: {
    status: "Rejected",
    statusTone: "danger",
    message: "Budget exceeded for Q3",
    actions: [
      { key: "resubmit", label: "Edit & Resubmit", variant: "primary" as any }, // mapped internally to default
    ],
  },
};

export const DisabledActions: Story = {
  args: {
    status: "Processing...",
    statusTone: "info",
    actions: [
      { key: "approve", label: "Approve", tone: "success", disabled: true },
      { key: "reject", label: "Reject", tone: "danger", disabled: true },
    ],
  },
};

export const CompactDensity: Story = {
  args: {
    status: "Draft",
    density: "compact",
    actions: [
      { key: "submit", label: "Submit", tone: "success" },
    ],
  },
};

export const WithMessage: Story = {
  args: {
    status: "Hold",
    statusTone: "warning",
    message: "Waiting on vendor clarification before we can proceed.",
    actions: [
      { key: "resume", label: "Resume Processing", tone: "success" },
    ],
  },
};
