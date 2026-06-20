import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DatePicker } from "@erp-ui-platform/primitives";

const meta = {
  title: "Form Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Invoice Date",
  },
};

export const Compact: Story = {
  args: {
    label: "Due Date",
    density: "compact",
  },
};

export const WithValue: Story = {
  args: {
    label: "Delivery Date",
    defaultValue: "2025-05-15",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Posting Date",
    description: "The date when this transaction affects the general ledger.",
  },
};

export const Required: Story = {
  args: {
    label: "Start Date",
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Expiration Date",
    defaultValue: "2023-01-01",
    error: "Date cannot be in the past.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Creation Date",
    defaultValue: "2025-01-01",
    disabled: true,
  },
};

export const WithRange: Story = {
  args: {
    label: "Posting Date",
    defaultValue: "2025-06-15",
    min: "2025-06-01",
    max: "2025-06-30",
    description: "Only June posting dates are available.",
  },
};

export const ManualEntry: Story = {
  args: {
    label: "Posting Date",
    defaultValue: "2025-06-15",
    min: "2025-01-01",
    max: "2025-12-31",
    description: "Type dd/mm/yyyy or use the calendar button. Invalid and out-of-range drafts stay visible for correction.",
  },
};

export const ConfiguredDisplayFormat: Story = {
  args: {
    label: "US Posting Date",
    defaultValue: "2025-06-15",
    displayFormat: "mm/dd/yyyy",
    description: "Configured to accept and display mm/dd/yyyy while submitting YYYY-MM-DD.",
  },
};

export const ControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>("2025-10-24");

    return (
      <div className="w-80 space-y-3">
        <DatePicker
          label="Controlled settlement date"
          value={value}
          onValueChange={setValue}
          min="2025-01-01"
          max="2025-12-31"
        />
        <div className="rounded-sm border border-border bg-surface-muted px-3 py-2 font-mono text-xs text-muted-foreground">
          value: {value ?? "undefined"}
        </div>
      </div>
    );
  },
};

export const TouchDensity: Story = {
  args: {
    label: "Mobile posting date",
    density: "touch",
    defaultValue: "2025-04-18",
    min: "2025-01-01",
    max: "2025-12-31",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[340px] p-4">
        <Story />
      </div>
    ),
  ],
};

export const InFilterBar: Story = {
  args: {
    label: "Date",
    defaultValue: "2025-05-15",
    min: "2025-01-01",
    max: "2025-12-31",
  },
  decorators: [
    (Story) => (
      <div className="flex w-[720px] items-end gap-3 rounded-lg border border-border bg-surface-raised p-4 shadow-sm">
        <div className="min-w-64">
          <Story />
        </div>
        <button className="h-control rounded-control border border-border bg-surface px-4 text-control text-foreground">
          Apply
        </button>
      </div>
    ),
  ],
};

export const InCard: Story = {
  args: {
    label: "Due Date",
    defaultValue: "2025-12-15",
  },
  decorators: [
    (Story) => (
      <div className="w-[420px] rounded-lg border border-border bg-surface p-5 shadow-sm">
        <div className="mb-4">
          <div className="text-sm font-semibold text-foreground">Invoice terms</div>
          <div className="text-sm text-muted-foreground">Calendar popover should inherit the same panel treatment.</div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const InDialogPanel: Story = {
  args: {
    label: "Approval Deadline",
    defaultValue: "2025-07-03",
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="grid min-h-screen place-items-center bg-surface-muted p-8">
        <div className="w-[460px] rounded-lg border border-border bg-surface p-6 shadow-popover">
          <div className="mb-5">
            <div className="text-base font-semibold text-foreground">Schedule approval</div>
            <div className="text-sm text-muted-foreground">Dialog-contained picker QA state.</div>
          </div>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const InScrollContainer: Story = {
  args: {
    label: "Ship Date",
    defaultValue: "2025-08-20",
  },
  decorators: [
    (Story) => (
      <div className="h-64 w-[460px] overflow-auto rounded-lg border border-border bg-surface p-4">
        <div className="h-28 text-sm text-muted-foreground">Scroll content above</div>
        <Story />
        <div className="h-80 pt-4 text-sm text-muted-foreground">Scroll content below</div>
      </div>
    ),
  ],
};

export const DarkMode: Story = {
  args: {
    label: "Settlement Date",
    defaultValue: "2025-09-10",
    min: "2025-09-01",
    max: "2025-09-30",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="dark rounded-lg bg-background p-8">
        <div className="w-80">
          <Story />
        </div>
      </div>
    ),
  ],
};
