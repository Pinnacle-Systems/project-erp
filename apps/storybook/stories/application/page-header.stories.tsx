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

const invoiceBreadcrumbs = [
  { id: "sales", label: "Sales", href: "#" },
  { id: "invoices", label: "Invoices", href: "#" },
  { id: "si-1024", label: "SI-1024", current: true },
];

const returnBreadcrumbs = [
  { id: "sales", label: "Sales", href: "#" },
  { id: "returns", label: "Returns", href: "#" },
  { id: "sr-108", label: "SR-108", current: true },
];

export const Default: Story = {
  args: {
    title: "Vendor Bills",
    subtitle: "All vendor invoices and credit notes",
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: "Sales Invoice SI-1024",
    subtitle: "ABC Traders",
    breadcrumbs: invoiceBreadcrumbs,
  },
};

export const WithBreadcrumbsStatusAndActions: Story = {
  args: {
    title: "Sales Return SR-108",
    subtitle: "ABC Traders",
    status: <Badge variant="warning">Pending Approval</Badge>,
    breadcrumbs: returnBreadcrumbs,
    primaryAction: (
      <Button variant="default" density="compact" width="hug">
        Approve
      </Button>
    ),
    secondaryActions: (
      <>
        <Button variant="ghost" density="compact" width="hug">
          Reject
        </Button>
        <Button variant="secondary" density="compact" width="hug">
          Edit
        </Button>
      </>
    ),
    meta: [
      { label: "Status", value: "Awaiting review" },
      { label: "Lines", value: "6" },
      { label: "Updated", value: "30 Apr 2024" },
    ],
  },
};

export const WithStatusAndActions = WithBreadcrumbsStatusAndActions;

export const DenseERPHeader: Story = {
  args: {
    title: "General Ledger",
    subtitle: "FY 2024–25 · Posting period 04",
    density: "compact",
    status: <Badge variant="success">Active</Badge>,
    primaryAction: (
      <Button variant="default" density="compact" width="hug">
        Post Entries
      </Button>
    ),
    secondaryActions: (
      <Button variant="secondary" density="compact" width="hug">
        Export
      </Button>
    ),
    meta: [
      { label: "Unposted", value: "14 entries" },
      { label: "Last posted", value: "09 May 2025, 14:32" },
    ],
  },
};

export const DenseERPHeaderWithBreadcrumbs: Story = {
  args: {
    title: "Inventory Transfer TR-771",
    subtitle: "Main Warehouse to North Dock",
    density: "compact",
    breadcrumbs: [
      { id: "inventory", label: "Inventory", href: "#" },
      { id: "transfers", label: "Transfers", href: "#" },
      { id: "tr-771", label: "TR-771", current: true },
    ],
    status: <Badge variant="info">In Review</Badge>,
    primaryAction: (
      <Button variant="default" density="compact" width="hug">
        Save
      </Button>
    ),
    secondaryActions: (
      <Button variant="secondary" density="compact" width="hug">
        Submit
      </Button>
    ),
    meta: [
      { label: "Lines", value: "14" },
      { label: "Updated", value: "09 May 2025, 14:32" },
    ],
  },
};
