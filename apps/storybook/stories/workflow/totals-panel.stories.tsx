import type { Meta, StoryObj } from "@storybook/react-vite";
import { TotalsPanel } from "@erp-ui-platform/app-components";

const meta: Meta<typeof TotalsPanel> = {
  title: "Workflow/TotalsPanel",
  component: TotalsPanel,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof TotalsPanel>;

export const InvoiceTotals: Story = {
  args: {
    title: "Invoice Summary",
    items: [
      { label: "Subtotal", value: "₹12,500.00" },
      { label: "Discount", value: "-₹500.00", tone: "success" },
      { label: "CGST (9%)", value: "₹1,080.00", description: "Central Tax" },
      { label: "SGST (9%)", value: "₹1,080.00", description: "State Tax" },
      { label: "Grand Total", value: "₹14,160.00", emphasis: "strong", dividerBefore: true },
    ],
  },
};

export const TaxSummary: Story = {
  args: {
    title: "Tax Breakdown",
    items: [
      { label: "Taxable Amount", value: "₹10,000.00" },
      { label: "IGST @ 18%", value: "₹1,800.00" },
      { label: "Total Tax", value: "₹1,800.00", emphasis: "strong", dividerBefore: true },
    ],
  },
};

export const QuantitySummary: Story = {
  args: {
    title: "Stock Transfer Summary",
    align: "default",
    items: [
      { label: "Requested Qty", value: "150 Nos" },
      { label: "Dispatched Qty", value: "100 Nos" },
      { label: "Pending Qty", value: "50 Nos", tone: "warning" },
    ],
  },
};

export const CompactDensity: Story = {
  args: {
    density: "compact",
    items: [
      { label: "Subtotal", value: "₹1,000" },
      { label: "Tax", value: "₹100" },
      { label: "Total", value: "₹1,100", emphasis: "strong", dividerBefore: true },
    ],
  },
};

export const FinancialAlignment: Story = {
  args: {
    align: "financial",
    items: [
      { label: "Base Amount", value: "100,000.00" },
      { label: "Adjustments", value: "-5,000.00", tone: "danger" },
      { label: "Net Amount", value: "95,000.00", emphasis: "strong", dividerBefore: true },
    ],
  },
};
