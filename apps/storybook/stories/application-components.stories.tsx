import type { Meta, StoryObj } from "@storybook/react-vite";

import { semanticColorTokens, statusTokens, type WorkflowStatusName } from "@erp-ui-platform/tokens";

const meta = {
  title: "Application",
} satisfies Meta;

export default meta;

type Story = StoryObj;

const StatusBadge = ({ status }: { status: WorkflowStatusName }) => {
  const token = statusTokens[status];
  const colors = semanticColorTokens[token.semantic];

  return (
    <span
      className="erp-demo-badge"
      style={{ color: colors.foreground, background: colors.background }}
    >
      {token.label}
    </span>
  );
};

export const PageHeader: Story = {
  render: () => (
    <header className="erp-demo-panel">
      <div className="erp-demo-row" style={{ justifyContent: "space-between" }}>
        <div>
          <h1>Sales Invoices</h1>
          <p>Dense desktop list header with filters and capability-aware actions.</p>
        </div>
        <button className="erp-demo-button" data-variant="primary" type="button">
          New invoice
        </button>
      </div>
    </header>
  ),
};

export const StatusBadgeStory: Story = {
  name: "StatusBadge",
  render: () => (
    <div className="erp-demo-row">
      <StatusBadge status="draft" />
      <StatusBadge status="pendingApproval" />
      <StatusBadge status="approved" />
      <StatusBadge status="rejected" />
      <StatusBadge status="posted" />
    </div>
  ),
};
