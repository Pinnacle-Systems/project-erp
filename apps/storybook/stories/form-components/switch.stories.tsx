import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@erp-ui-platform/primitives";

const meta = {
  title: "Form Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Active Customer",
  },
};

export const Compact: Story = {
  args: {
    label: "Auto-Approve Orders",
    density: "compact",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Two-Factor Authentication",
    description: "Require an extra code when logging in.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Maintenance Mode",
    error: "Cannot disable maintenance mode during active migration.",
  },
};

export const Disabled: Story = {
  args: {
    label: "System Admin Access",
    disabled: true,
    checked: true,
    description: "You do not have permission to change this setting.",
  },
};
