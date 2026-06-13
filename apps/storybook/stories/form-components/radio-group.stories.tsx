import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, Radio } from "@erp-ui-platform/primitives";

const meta = {
  title: "Form Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Delivery Method",
    defaultValue: "standard",
    children: (
      <>
        <Radio value="standard" label="Standard (3-5 days)" />
        <Radio value="express" label="Express (1-2 days)" />
        <Radio value="pickup" label="Store Pickup" />
      </>
    ),
  },
};

export const HorizontalCompact: Story = {
  args: {
    label: "Order Priority",
    orientation: "horizontal",
    defaultValue: "normal",
    children: (
      <>
        <Radio density="compact" value="low" label="Low" />
        <Radio density="compact" value="normal" label="Normal" />
        <Radio density="compact" value="high" label="High" />
      </>
    ),
  },
};

export const WithDescriptions: Story = {
  args: {
    label: "Payment Terms",
    defaultValue: "net30",
    children: (
      <>
        <Radio value="net30" label="Net 30" description="Payment due 30 days from invoice date." />
        <Radio value="net60" label="Net 60" description="Payment due 60 days from invoice date." />
      </>
    ),
  },
};

export const ErrorState: Story = {
  args: {
    label: "Approval Decision",
    error: "Please select an approval decision.",
    children: (
      <>
        <Radio value="approve" label="Approve" error />
        <Radio value="reject" label="Reject" error />
      </>
    ),
  },
};

export const DisabledOption: Story = {
  args: {
    label: "Pricing Tier",
    defaultValue: "standard",
    children: (
      <>
        <Radio value="basic" label="Basic" />
        <Radio value="standard" label="Standard" />
        <Radio value="premium" label="Premium (Not eligible)" disabled />
      </>
    ),
  },
};
