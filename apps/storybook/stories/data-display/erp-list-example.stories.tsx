import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable, FilterBar, Pagination, type ColumnDef } from "@erp-ui-platform/data-display";
import { Button, SelectField, SelectItem, Badge } from "@erp-ui-platform/primitives";
import { Card } from "@erp-ui-platform/layout";
import { useState } from "react";

const meta = {
  title: "Data Display/ERP List Example",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

interface Customer {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "hold";
  balance: number;
}

const rawData: Customer[] = [
  { id: "C-1001", name: "Acme Corporation", email: "billing@acme.corp", status: "active", balance: 12500.00 },
  { id: "C-1002", name: "Global Industries", email: "accounts@global.ind", status: "active", balance: 0.00 },
  { id: "C-1003", name: "Stark Enterprises", email: "finance@stark.com", status: "hold", balance: 450000.00 },
  { id: "C-1004", name: "Wayne Tech", email: "ap@wayne.tech", status: "active", balance: 500.00 },
  { id: "C-1005", name: "Oscorp", email: "billing@oscorp.net", status: "inactive", balance: 0.00 },
];

const columns: ColumnDef<Customer>[] = [
  { key: "id", header: "Customer ID", accessor: "id", width: "120px" },
  { key: "name", header: "Customer Name", accessor: "name" },
  { key: "email", header: "Email", accessor: "email" },
  {
    key: "status",
    header: "Status",
    width: "100px",
    render: (row) => {
      const tones: Record<string, "success" | "default" | "warning"> = {
        active: "success",
        inactive: "default",
        hold: "warning",
      };
      return <Badge variant={tones[row.status]}>{row.status.toUpperCase()}</Badge>;
    },
  },
  {
    key: "balance",
    header: "Balance",
    align: "right",
    width: "150px",
    render: (row) => `$${row.balance.toFixed(2)}`,
  },
];

const StatefulList = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRow, setSelectedRow] = useState<string | undefined>();

  // Fake filtering
  const filteredData = rawData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-neutral-50 min-h-screen p-4 sm:p-6">
      <Card padding="none" className="max-w-6xl mx-auto overflow-hidden">
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Search customers..."
          actions={<Button variant="default">New Customer</Button>}
        >
          <SelectField defaultValue="all">
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="hold">On Hold</SelectItem>
          </SelectField>
        </FilterBar>

        <DataTable
          columns={columns}
          data={filteredData}
          rowKey="id"
          selectedRowKey={selectedRow}
          onRowClick={(row) => setSelectedRow(row.id)}
          emptyState="No customers found matching your criteria."
          containerClassName="border-0 border-y border-border rounded-none shadow-none"
        />

        <Pagination
          page={page}
          pageSize={pageSize}
          total={filteredData.length}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </Card>
    </div>
  );
};

export const CustomerMasterList: Story = {
  render: () => <StatefulList />,
};
