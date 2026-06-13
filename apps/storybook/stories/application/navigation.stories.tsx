import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs, PageHeader, StatusBadge } from "@erp-ui-platform/app-components";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Application/Navigation",
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const invoiceBreadcrumbs = [
  { id: "sales", label: "Sales", href: "#" },
  { id: "sales-invoices", label: "Invoices", href: "#" },
  { id: "si-1024", label: "SI-1024", current: true },
];

const returnBreadcrumbs = [
  { id: "sales", label: "Sales", href: "#" },
  { id: "sales-returns", label: "Returns", href: "#" },
  { id: "sr-108", label: "SR-108", current: true },
];

const transferBreadcrumbs = [
  { id: "inventory", label: "Inventory", href: "#" },
  { id: "inventory-operations", label: "Operations", href: "#" },
  { id: "inventory-transfers", label: "Transfers", href: "#" },
  { id: "inventory-transfer-review", label: "Transfer Review", href: "#" },
  { id: "tr-771", label: "TR-771", current: true },
];

export const BreadcrumbsDefault: Story = {
  args: {
    items: invoiceBreadcrumbs,
  },
};

export const BreadcrumbsCompact: Story = {
  args: {
    items: returnBreadcrumbs,
    compact: true,
  },
};

export const BreadcrumbsWithCurrentDocument: Story = {
  args: {
    items: transferBreadcrumbs,
  },
};

export const BreadcrumbsTruncated: Story = {
  args: {
    items: transferBreadcrumbs,
    maxItems: 3,
  },
};

export const BreadcrumbsInsidePageHeader: Story = {
  args: {
    items: invoiceBreadcrumbs,
  },
  render: () => (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <PageHeader
        title="Sales Invoice SI-1024"
        subtitle="ABC Traders"
        breadcrumbs={invoiceBreadcrumbs}
        status={<StatusBadge label="Draft" tone="default" />}
        primaryAction={
          <Button variant="default" density="compact">
            Save
          </Button>
        }
        secondaryActions={
          <Button variant="secondary" density="compact">
            Submit
          </Button>
        }
      />
    </div>
  ),
};
