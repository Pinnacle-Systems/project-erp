import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel, DescriptionList, DataLabel, Stack, Divider } from "@erp-ui-platform/layout";
import { Badge, Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Layout Primitives/ERP Example",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

export const CustomerMasterReadOnlyView: StoryObj = {
  render: () => (
    <Stack gap="lg" className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Acme Corporation</h1>
          <p className="text-sm text-muted-foreground">Customer ID: CUST-10024</p>
        </div>
        <Badge variant="success">Active</Badge>
      </div>

      <Panel
        title="General Information"
        actions={<Button density="compact" variant="secondary">Edit Details</Button>}
      >
        <DescriptionList columns={3}>
          <DescriptionList.Item label="Company Name" value="Acme Corporation" />
          <DescriptionList.Item label="Trading Name" value="Acme Global" />
          <DescriptionList.Item label="Tax ID" value="US-998877665" />
          <DescriptionList.Item label="Currency" value="USD" />
          <DescriptionList.Item label="Payment Terms" value="Net 30" />
          <DescriptionList.Item label="Credit Limit" value="$50,000" />
        </DescriptionList>
      </Panel>

      <Panel
        title="Primary Contact"
      >
        <Stack gap="md">
          <DescriptionList columns={2}>
            <DescriptionList.Item label="Name" value="Jane Doe" />
            <DescriptionList.Item label="Role" value="Procurement Manager" />
          </DescriptionList>
          <Divider />
          <DescriptionList columns={2}>
            <DescriptionList.Item label="Email" value="jane.doe@acme.com" />
            <DescriptionList.Item label="Phone" value="+1 (555) 123-4567" />
          </DescriptionList>
        </Stack>
      </Panel>
    </Stack>
  ),
};
