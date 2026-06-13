import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "@erp-ui-platform/layout";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Layout Primitives/Panel",
  component: Panel,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicPanel: Story = {
  args: {
    children: "This is a basic panel content.",
  },
};

export const PanelWithDescription: Story = {
  args: {
    title: "Customer Details",
    description: "Billing and contact information",
    children: "Panel content goes here.",
  },
};

export const PanelWithActions: Story = {
  args: {
    title: "Customer Details",
    description: "Billing and contact information",
    actions: <Button density="compact">Edit</Button>,
    children: "Panel content goes here.",
  },
};

export const PanelWithFooter: Story = {
  args: {
    title: "Terms and Conditions",
    children: "Please review the terms.",
    footer: (
      <div className="flex justify-end gap-2">
        <Button variant="secondary" density="compact">Cancel</Button>
        <Button density="compact">Accept</Button>
      </div>
    ),
  },
};

export const DenseErpSectionPanel: Story = {
  args: {
    title: "Line Items",
    density: "compact",
    actions: <Button density="compact" variant="secondary">Add Item</Button>,
    children: "Dense content goes here.",
  },
};
