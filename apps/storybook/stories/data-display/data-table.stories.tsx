import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable, type ColumnDef } from "@erp-ui-platform/data-display";
import { Badge } from "@erp-ui-platform/primitives";

const meta = {
  title: "Data Display/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Customer {
  id: string;
  name: string;
  amount: number;
  status: "active" | "inactive";
}

const columns: ColumnDef<Customer>[] = [
  { key: "id", header: "ID", accessor: "id", width: "100px" },
  { key: "name", header: "Customer Name", accessor: "name" },
  { 
    key: "amount", 
    header: "Amount", 
    align: "right",
    render: (row) => `$${row.amount.toFixed(2)}`
  },
  {
    key: "status",
    header: "Status",
    render: (row) => (
      <Badge variant={row.status === "active" ? "success" : "default"}>
        {row.status === "active" ? "Active" : "Inactive"}
      </Badge>
    )
  }
];

const data: Customer[] = [
  { id: "CUST-001", name: "Acme Corporation", amount: 15420.50, status: "active" },
  { id: "CUST-002", name: "Global Industries with a very long name that should truncate nicely", amount: 250.00, status: "active" },
  { id: "CUST-003", name: "Stark Enterprises", amount: 99999.99, status: "inactive" },
];

export const Default: Story = {
  args: {
    columns: columns as any,
    data: data as any,
    rowKey: "id" as any,
  },
};

export const Compact: Story = {
  args: {
    columns: columns as any,
    data: data as any,
    rowKey: "id" as any,
    density: "compact",
  },
};

export const Bordered: Story = {
  args: {
    columns: columns as any,
    data: data as any,
    rowKey: "id" as any,
    variant: "bordered",
  },
};

export const Striped: Story = {
  args: {
    columns: columns as any,
    data: data as any,
    rowKey: "id" as any,
    variant: "striped",
  },
};

export const WithRowClick: Story = {
  args: {
    columns: columns as any,
    data: data as any,
    rowKey: "id" as any,
    onRowClick: (row: any) => alert(`Clicked row: ${row.name}`),
    selectedRowKey: "CUST-002",
  },
};
