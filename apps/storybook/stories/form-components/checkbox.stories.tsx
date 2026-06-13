import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@erp-ui-platform/primitives";

const meta = {
  title: "Form Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept Terms & Conditions",
  },
};

export const Compact: Story = {
  args: {
    label: "Tax Applicable",
    density: "compact",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Enable Notifications",
    description: "You will receive email alerts for new approvals.",
  },
};

export const Required: Story = {
  args: {
    label: "Confirm Action",
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Accept Terms",
    error: "You must accept the terms before proceeding.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Legacy System Sync",
    disabled: true,
    checked: true,
    description: "This option cannot be modified for legacy accounts.",
  },
};
