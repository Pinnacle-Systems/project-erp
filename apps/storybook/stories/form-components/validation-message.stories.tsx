import type { Meta, StoryObj } from "@storybook/react-vite";
import { ValidationMessage } from "@erp-ui-platform/primitives";

const meta = {
  title: "Form Components/ValidationMessage",
  component: ValidationMessage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ValidationMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a default helper message.",
    tone: "default",
  },
};

export const ErrorTone: Story = {
  args: {
    children: "Customer name is required.",
    tone: "error",
  },
};

export const WarningTone: Story = {
  args: {
    children: "Credit limit exceeded for this customer.",
    tone: "warning",
  },
};

export const SuccessTone: Story = {
  args: {
    children: "VAT number successfully verified.",
    tone: "success",
  },
};

export const InfoTone: Story = {
  args: {
    children: "Password must be at least 8 characters.",
    tone: "info",
  },
};
