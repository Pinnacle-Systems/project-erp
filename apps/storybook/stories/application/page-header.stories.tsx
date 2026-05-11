import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeader } from "@erp-ui-platform/app-components";
import { Badge, Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Application/PageHeader",
  component: PageHeader,
  argTypes: {
    density: {
      control: "select",
      options: ["compact", "comfortable", "touch"],
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Vendor Bills",
    subtitle: "All vendor invoices and credit notes",
  },
};

export const WithStatusAndActions: Story = {
  args: {
    title: "Purchase Order #PO-2024-0841",
    subtitle: "Raised 12 Apr 2024 · Acme Supplies Ltd",
    status: <Badge variant="warning">Pending Approval</Badge>,
    breadcrumbs: [
      { label: "Procurement", href: "#" },
      { label: "Purchase Orders", href: "#" },
      { label: "PO-2024-0841" },
    ],
    primaryAction: (
      <Button variant="default" density="compact">
        Approve
      </Button>
    ),
    secondaryActions: (
      <>
        <Button variant="ghost" density="compact">
          Reject
        </Button>
        <Button variant="secondary" density="compact">
          Edit
        </Button>
      </>
    ),
    meta: [
      { label: "Total", value: "₹1,24,500.00" },
      { label: "Items", value: "6" },
      { label: "Due", value: "30 Apr 2024" },
      { label: "Warehouse", value: "Mumbai Central" },
    ],
  },
};

export const DenseERPHeader: Story = {
  args: {
    title: "General Ledger",
    subtitle: "FY 2024–25 · Posting period 04",
    density: "compact",
    status: <Badge variant="success">Active</Badge>,
    primaryAction: (
      <Button variant="default" density="compact">
        Post Entries
      </Button>
    ),
    secondaryActions: (
      <Button variant="secondary" density="compact">
        Export
      </Button>
    ),
    meta: [
      { label: "Unposted", value: "14 entries" },
      { label: "Last posted", value: "09 May 2025, 14:32" },
    ],
  },
};
