import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataLabel, DescriptionList } from "@erp-ui-platform/layout";

const meta = {
  title: "Layout Primitives/Data Display",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

export const DefaultDataLabel: StoryObj = {
  render: () => <DataLabel label="Status" value="Active" />,
};

export const HorizontalDataLabel: StoryObj = {
  render: () => <DataLabel orientation="horizontal" label="Status:" value="Active" />,
};

export const EmptyValueDataLabel: StoryObj = {
  render: () => <DataLabel label="Middle Name" />,
};

export const LongValueDataLabel: StoryObj = {
  render: () => (
    <div className="w-48">
      <DataLabel
        label="Description"
        value="This is a very long description that should wrap correctly within its container."
      />
    </div>
  ),
};

export const StrongMutedEmphasis: StoryObj = {
  render: () => (
    <div className="flex gap-8">
      <DataLabel label="Default" value="123.45" />
      <DataLabel label="Strong" value="123.45" emphasis="strong" />
      <DataLabel label="Muted" value="123.45" emphasis="muted" />
    </div>
  ),
};

export const TwoColumnCustomerDetails: StoryObj = {
  render: () => (
    <DescriptionList columns={2}>
      <DescriptionList.Item label="Customer Code" value="CUST-001" />
      <DescriptionList.Item label="Company Name" value="Acme Corp" />
      <DescriptionList.Item label="Tax ID" value="TAX-998877" />
      <DescriptionList.Item label="Status" value="Active" />
    </DescriptionList>
  ),
};

export const ThreeColumnInvoiceMetadata: StoryObj = {
  render: () => (
    <DescriptionList columns={3}>
      <DescriptionList.Item label="Invoice No." value="INV-2023-001" />
      <DescriptionList.Item label="Date" value="2023-10-01" />
      <DescriptionList.Item label="Due Date" value="2023-10-31" />
      <DescriptionList.Item label="Currency" value="USD" />
      <DescriptionList.Item label="Total Amount" value="$1,250.00" />
    </DescriptionList>
  ),
};

export const CompactDensityList: StoryObj = {
  render: () => (
    <DescriptionList columns={3} density="compact">
      <DescriptionList.Item label="ID" value="101" />
      <DescriptionList.Item label="Type" value="Standard" />
      <DescriptionList.Item label="Category" value="Hardware" />
    </DescriptionList>
  ),
};

export const DescriptionListLongValues: StoryObj = {
  render: () => (
    <DescriptionList columns={2}>
      <DescriptionList.Item label="Short Field" value="ABC" />
      <DescriptionList.Item
        label="Long Description"
        value="This text is very long and spans across multiple lines to ensure wrapping behaves."
      />
    </DescriptionList>
  ),
};

export const DescriptionListEmptyValues: StoryObj = {
  render: () => (
    <DescriptionList columns={2}>
      <DescriptionList.Item label="Filled" value="Present" />
      <DescriptionList.Item label="Empty String" value="" />
      <DescriptionList.Item label="Null Value" value={null} />
      <DescriptionList.Item label="Undefined Value" />
    </DescriptionList>
  ),
};
