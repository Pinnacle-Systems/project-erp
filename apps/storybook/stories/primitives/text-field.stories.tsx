import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "@erp-ui-platform/primitives";

const meta = {
  title: "Primitives/TextField",
  component: TextField,
  argTypes: {
    density: {
      control: "select",
      options: ["compact", "comfortable", "touch"],
    },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter value…" },
};

export const WithLabel: Story = {
  args: {
    label: "Customer name",
    defaultValue: "Northwind Retail",
  },
};

export const WithHelpText: Story = {
  args: {
    label: "Document number",
    defaultValue: "SI-1001",
    helpText: "Auto-generated on save.",
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    label: "Customer",
    defaultValue: "",
    error: true,
    errorMessage: "Customer is required.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Posted status",
    defaultValue: "Posted",
    disabled: true,
  },
};

export const Compact: Story = {
  args: {
    label: "Quantity",
    defaultValue: "12",
    density: "compact",
  },
};

export const Touch: Story = {
  args: {
    label: "Comment",
    placeholder: "Add a note…",
    density: "touch",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-5 max-w-sm">
      <TextField label="Customer name" defaultValue="Northwind Retail" />
      <TextField
        label="Document number"
        defaultValue="SI-1001"
        helpText="Auto-generated on save."
        readOnly
      />
      <TextField
        label="Customer"
        defaultValue=""
        error
        errorMessage="Customer is required."
      />
      <TextField label="Posted status" defaultValue="Posted" disabled />
      <TextField
        label="Compact field"
        placeholder="Enter value…"
        density="compact"
      />
      <TextField
        label="Touch field"
        placeholder="Add a note…"
        density="touch"
      />
    </div>
  ),
};
