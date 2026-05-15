import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBadge } from "@erp-ui-platform/app-components";

const meta = {
  title: "Application/StatusBadge",
  component: StatusBadge,
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info", "muted"],
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Draft", tone: "default" },
};

export const AllStatuses: Story = {
  args: { label: "Draft" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Tones
        </p>
        <div className="flex flex-wrap gap-2">
          <StatusBadge label="Draft" tone="default" />
          <StatusBadge label="Active" tone="success" />
          <StatusBadge label="Pending" tone="warning" />
          <StatusBadge label="Cancelled" tone="danger" />
          <StatusBadge label="In Review" tone="info" />
          <StatusBadge label="Archived" tone="muted" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Generic workflow statuses
        </p>
        <div className="flex flex-wrap gap-2">
          <StatusBadge label="Open" tone="default" />
          <StatusBadge label="Submitted" tone="info" />
          <StatusBadge label="Pending Approval" tone="warning" />
          <StatusBadge label="Approved" tone="success" />
          <StatusBadge label="Rejected" tone="danger" />
          <StatusBadge label="Closed" tone="muted" />
          <StatusBadge label="On Hold" tone="warning" />
          <StatusBadge label="Posted" tone="success" />
        </div>
      </div>
    </div>
  ),
};
