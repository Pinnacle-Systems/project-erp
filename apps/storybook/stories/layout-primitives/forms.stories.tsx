import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormGrid, FormSection, Panel } from "@erp-ui-platform/layout";
import { TextField } from "@erp-ui-platform/primitives";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Layout Primitives/Forms",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

export const TwoColumnForm: StoryObj = {
  render: () => (
    <FormGrid columns={2}>
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <TextField label="Email" />
      <TextField label="Phone" />
    </FormGrid>
  ),
};

export const ThreeColumnErpForm: StoryObj = {
  render: () => (
    <FormGrid columns={3}>
      <TextField label="Customer" />
      <TextField label="Invoice Date" />
      <TextField label="Due Date" />
      <TextField label="Currency" />
      <TextField label="Amount" />
      <TextField label="Reference" />
    </FormGrid>
  ),
};

export const FourColumnCompactForm: StoryObj = {
  render: () => (
    <FormGrid columns={4} density="compact">
      <TextField label="Item Code" density="compact" />
      <TextField label="Quantity" density="compact" />
      <TextField label="Unit Price" density="compact" />
      <TextField label="Total" density="compact" />
    </FormGrid>
  ),
};

export const ResponsiveCollapseExample: StoryObj = {
  render: () => (
    <div className="max-w-md border border-border p-4">
      <p className="mb-4 text-sm text-muted-foreground">Resize to see collapse</p>
      <FormGrid columns={3}>
        <TextField label="Field 1" />
        <TextField label="Field 2" />
        <TextField label="Field 3" />
      </FormGrid>
    </div>
  ),
};

export const BasicSection: StoryObj = {
  render: () => (
    <FormSection title="Personal Information" description="Your basic details">
      <FormGrid columns={2}>
        <TextField label="First Name" />
        <TextField label="Last Name" />
      </FormGrid>
    </FormSection>
  ),
};

export const SectionWithActions: StoryObj = {
  render: () => (
    <FormSection
      title="Addresses"
      actions={<Button density="compact">Add Address</Button>}
    >
      <FormGrid columns={2}>
        <TextField label="Street" />
        <TextField label="City" />
      </FormGrid>
    </FormSection>
  ),
};

export const NestedInsidePanel: StoryObj = {
  render: () => (
    <Panel title="Customer Profile" footer={<Button>Save Changes</Button>}>
      <div className="flex flex-col gap-8">
        <FormSection title="Basic Details">
          <FormGrid columns={2}>
            <TextField label="Company Name" />
            <TextField label="Tax ID" />
          </FormGrid>
        </FormSection>
        <FormSection title="Contact Person">
          <FormGrid columns={3}>
            <TextField label="Name" />
            <TextField label="Email" />
            <TextField label="Phone" />
          </FormGrid>
        </FormSection>
      </div>
    </Panel>
  ),
};
