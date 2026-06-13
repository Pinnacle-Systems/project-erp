import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterBar } from "@erp-ui-platform/data-display";
import { Button, SelectField, SelectItem } from "@erp-ui-platform/primitives";

const meta = {
  title: "Data Display/FilterBar",
  component: FilterBar,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchOnly: Story = {
  args: {
    searchPlaceholder: "Search invoices...",
  },
};

export const WithFilters: Story = {
  args: {
    searchPlaceholder: "Search customers...",
    children: (
      <>
        <SelectField defaultValue="all">
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectField>
        <SelectField defaultValue="all">
          <SelectItem value="all">All Branches</SelectItem>
          <SelectItem value="north">North Region</SelectItem>
          <SelectItem value="south">South Region</SelectItem>
        </SelectField>
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    searchPlaceholder: "Search users...",
    actions: <Button variant="default">Add User</Button>,
  },
};

export const FullERPFilterRow: Story = {
  args: {
    searchPlaceholder: "Search transactions...",
    children: (
      <>
        <SelectField defaultValue="today">
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
        </SelectField>
        <SelectField defaultValue="all">
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="po">Purchase Order</SelectItem>
          <SelectItem value="so">Sales Order</SelectItem>
        </SelectField>
      </>
    ),
    actions: (
      <>
        <Button variant="ghost">Export</Button>
        <Button variant="default">New Transaction</Button>
      </>
    ),
  },
};

export const CompactResponsive: Story = {
  args: {
    density: "compact",
    searchPlaceholder: "Quick search...",
    children: (
      <SelectField defaultValue="all" density="compact">
        <SelectItem value="all">All Items</SelectItem>
      </SelectField>
    ),
    actions: <Button variant="default" density="compact">Add</Button>,
  },
};
