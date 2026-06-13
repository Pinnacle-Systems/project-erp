import type { Meta, StoryObj } from "@storybook/react-vite";
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
