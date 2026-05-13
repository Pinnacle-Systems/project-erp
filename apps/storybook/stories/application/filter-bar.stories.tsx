import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterBar } from "@erp-ui-platform/app-components";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Application/FilterBar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const STATUS_OPTIONS = [
  { label: "Draft", value: "draft" },
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
  { label: "Closed", value: "closed" },
];

export const Basic: Story = {
  render: () => {
    const [search, setSearch] = useState("");
    return (
      <div className="bg-neutral-50 min-h-40 rounded">
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Search records..."
        />
        <p className="text-xs text-neutral-400 px-4 pt-3">
          Search value: "{search}"
        </p>
      </div>
    );
  },
};

export const WithStatusAndDate: Story = {
  render: () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const hasFilters = Boolean(search || status || from || to);

    return (
      <div className="bg-neutral-50 min-h-40 rounded">
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Search by ref or party..."
          statusOptions={STATUS_OPTIONS}
          statusValue={status}
          onStatusChange={setStatus}
          dateFrom={from}
          onDateFromChange={setFrom}
          dateTo={to}
          onDateToChange={setTo}
          hasActiveFilters={hasFilters}
          onClearFilters={() => {
            setSearch("");
            setStatus("");
            setFrom("");
            setTo("");
          }}
          actions={
            <Button variant="default" density="compact" width="hug">
              Export
            </Button>
          }
        />
        <p className="text-xs text-neutral-400 px-4 pt-3">
          Active filters: {hasFilters ? "yes" : "none"}
        </p>
      </div>
    );
  },
};
