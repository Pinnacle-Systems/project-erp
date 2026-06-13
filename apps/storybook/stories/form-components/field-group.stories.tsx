import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldGroup, TextField } from "@erp-ui-platform/primitives";

const meta = {
  title: "Form Components/FieldGroup",
  component: FieldGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FieldGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Customer Address",
    description: "Used for billing and dispatch.",
    children: (
      <div className="flex flex-col gap-2">
        <TextField placeholder="Address Line 1" />
        <TextField placeholder="Address Line 2" />
      </div>
    ),
  },
};

export const Required: Story = {
  args: {
    label: "Payment Details",
    required: true,
    children: (
      <div className="flex gap-2">
        <TextField placeholder="Card Number" />
        <TextField placeholder="CVV" width="sm" />
      </div>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Contact Information",
    error: "Please provide a valid email and phone number.",
    children: (
      <div className="flex flex-col gap-2">
        <TextField placeholder="Email" error />
        <TextField placeholder="Phone" error />
      </div>
    ),
  },
};
