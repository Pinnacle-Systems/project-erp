import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TextField,
  SelectField,
  SelectItem,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  DatePicker,
  FieldGroup,
  Button,
} from "@erp-ui-platform/primitives";
import { FormSection, FormGrid, Stack, Card } from "@erp-ui-platform/layout";

const meta = {
  title: "Form Components/ERP Invoice Settings",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvoiceSettingsForm: Story = {
  render: () => {
    return (
      <div className="max-w-4xl mx-auto bg-neutral-50 p-6 min-h-screen">
        <Card>
          <Stack gap="xl">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Invoice Settings</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Configure default values and behaviors for new invoices.
              </p>
            </div>

            <FormSection title="General Information" description="Basic invoice defaults.">
              <FormGrid columns={2}>
                <TextField label="Default Prefix" defaultValue="INV-" required />
                <SelectField label="Default Currency" defaultValue="usd">
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                </SelectField>
                <DatePicker label="Next Posting Date" defaultValue="2025-06-01" />
              </FormGrid>
            </FormSection>

            <FormSection title="Tax & Discount" description="Configure default tax and discount application.">
              <FormGrid columns={1}>
                <FieldGroup label="Tax Rules" description="How taxes are applied to line items.">
                  <RadioGroup defaultValue="exclusive" orientation="horizontal">
                    <Radio value="exclusive" label="Tax Exclusive (Added at checkout)" />
                    <Radio value="inclusive" label="Tax Inclusive (Included in price)" />
                    <Radio value="exempt" label="Tax Exempt" />
                  </RadioGroup>
                </FieldGroup>
                
                <FieldGroup label="Discount Configuration">
                  <div className="flex gap-4">
                    <Checkbox label="Allow line-item discounts" defaultChecked />
                    <Checkbox label="Allow document-level discounts" defaultChecked />
                    <Checkbox label="Require approval for discounts > 10%" />
                  </div>
                </FieldGroup>
              </FormGrid>
            </FormSection>

            <FormSection title="Automation" description="Automatic behaviors upon invoice creation or posting.">
              <Stack gap="md">
                <Switch 
                  label="Auto-post approved invoices" 
                  description="Automatically post invoices to the general ledger once approved." 
                  defaultChecked
                />
                <Switch 
                  label="Email customer on posting" 
                  description="Send a PDF copy of the invoice to the customer's billing email." 
                  defaultChecked
                />
                <Switch 
                  label="Enable dunning" 
                  description="Automatically send reminders for overdue invoices." 
                />
              </Stack>
            </FormSection>

            <div className="flex justify-end gap-3 pt-4 border-t border-border">
              <Button variant="ghost">Cancel</Button>
              <Button variant="default">Save Settings</Button>
            </div>
          </Stack>
        </Card>
      </div>
    );
  },
};
