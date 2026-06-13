import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@erp-ui-platform/primitives";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info", "muted"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Draft", variant: "default" },
};

export const Success: Story = {
  args: { children: "Approved", variant: "success" },
};

export const Warning: Story = {
  args: { children: "Pending approval", variant: "warning" },
};

export const Danger: Story = {
  args: { children: "Rejected", variant: "danger" },
};

export const Info: Story = {
  args: { children: "Submitted", variant: "info" },
};

export const Muted: Story = {
  args: { children: "Cancelled", variant: "muted" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Workflow status badges
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="muted">Draft</Badge>
          <Badge variant="info">Submitted</Badge>
          <Badge variant="warning">Pending approval</Badge>
          <Badge variant="success">Approved</Badge>
          <Badge variant="danger">Rejected</Badge>
          <Badge variant="success">Posted</Badge>
          <Badge variant="muted">Cancelled</Badge>
          <Badge variant="default">On hold</Badge>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          In context — document list row
        </p>
        <div className="overflow-hidden rounded-card border border-border bg-surface">
          {[
            { doc: "SI-1004", customer: "Northwind Retail", badge: <Badge variant="warning">Pending approval</Badge> },
            { doc: "SI-1003", customer: "Contoso Ltd", badge: <Badge variant="success">Posted</Badge> },
            { doc: "SI-1002", customer: "Fabrikam Inc", badge: <Badge variant="danger">Rejected</Badge> },
            { doc: "SI-1001", customer: "Adventure Works", badge: <Badge variant="muted">Draft</Badge> },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-border-subtle px-4 py-2.5 text-sm last:border-0"
            >
              <span className="font-mono text-foreground">{row.doc}</span>
              <span className="text-muted-foreground">{row.customer}</span>
              {row.badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
