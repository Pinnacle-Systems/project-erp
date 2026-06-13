import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AuditTrail,
  AttachmentList,
  ApprovalActionBar,
  TotalsPanel,
} from "@erp-ui-platform/app-components";
import { Stack, Panel } from "@erp-ui-platform/layout";
import { ValidationMessage } from "@erp-ui-platform/primitives";

const meta: Meta = {
  title: "Workflow/ERP Transaction Workflow Example",
  parameters: {
    layout: "padded",
  },
};

export default meta;

export const SalesInvoiceWorkflowPanel: StoryObj = {
  render: () => (
    <div className="max-w-md">
      <Panel title="Sales Invoice #INV-2026-06-13" description="Workflow & Details">
        <Stack gap="lg" className="p-4">
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Totals</h3>
            <TotalsPanel
              density="compact"
              items={[
                { label: "Subtotal", value: "₹45,000.00" },
                { label: "IGST @ 18%", value: "₹8,100.00" },
                { label: "Total Amount", value: "₹53,100.00", emphasis: "strong", dividerBefore: true },
              ]}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Attachments</h3>
            <AttachmentList
              density="compact"
              items={[
                {
                  id: "1",
                  name: "PurchaseOrder.pdf",
                  size: "248 KB",
                  uploadedBy: "Sales Team",
                },
                {
                  id: "2",
                  name: "DeliveryChallan.pdf",
                  size: "1.2 MB",
                  uploadedBy: "Logistics",
                }
              ]}
              onView={(item: any) => console.log(item)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Audit Trail</h3>
            <AuditTrail
              density="compact"
              items={[
                {
                  id: "1",
                  title: "Invoice Draft Created",
                  actor: "Sales Rep",
                  timestamp: "Yesterday",
                },
                {
                  id: "2",
                  title: "Submitted for Approval",
                  actor: "Sales Rep",
                  timestamp: "Today, 10:00 AM",
                  tone: "info"
                }
              ]}
            />
          </div>

        </Stack>
        <ApprovalActionBar
          status="Pending Approval"
          statusTone="warning"
          density="compact"
          actions={[
            { key: "approve", label: "Approve", tone: "success" },
            { key: "reject", label: "Reject", tone: "danger" },
            { key: "hold", label: "Hold", variant: "secondary" },
          ]}
        />
      </Panel>
    </div>
  ),
};
