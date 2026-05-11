import type { Meta, StoryObj } from "@storybook/react-vite";
import { TransactionShell } from "@erp-ui-platform/transaction-shell";
import {
  filterActionsByCapabilities,
  type WorkflowAction,
} from "@erp-ui-platform/workflow-actions";
import type { BaseCapabilities } from "@erp-ui-platform/capability-contracts";
import {
  TextField,
  Badge,
  TooltipProvider,
} from "@erp-ui-platform/primitives";
import { PageHeader, StatusBadge } from "@erp-ui-platform/app-components";
import { cap } from "../utils/demoCapabilities";
import { ActionButton } from "../utils/demoActions";
import { validationVariance } from "../utils/demoValidation";

const meta = {
  title: "Shells/Desktop",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── stories ───────────────────────────────────────────────────────────────────

export const DenseTransactionPage: Story = {
  render: () => {
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("allowed"),
      canEditHeader: cap("allowed"),
      canEditLines: cap("allowed"),
      canDelete: cap("hidden"),
      canSubmit: cap("allowed"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap(
        "blocked",
        "Resolve delivery variance on line 2 before posting.",
      ),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed"),
    };

    const actions: WorkflowAction[] = [
      {
        id: "cancel",
        label: "Cancel",
        variant: "ghost",
        placement: "primary",
        requiredCapability: "canCancel",
      },
      {
        id: "save",
        label: "Save",
        variant: "secondary",
        placement: "primary",
        requiredCapability: "canEdit",
      },
      {
        id: "submit",
        label: "Submit",
        variant: "primary",
        placement: "primary",
        requiredCapability: "canSubmit",
      },
      {
        id: "post",
        label: "Post",
        variant: "danger",
        placement: "secondary",
        requiredCapability: "canPost",
        requiresConfirmation: true,
      },
      {
        id: "export",
        label: "Export",
        variant: "ghost",
        placement: "overflow",
        requiredCapability: "canExport",
      },
    ];

    const resolved = filterActionsByCapabilities(actions, caps, "desktop");
    const primary = resolved.filter((a) => a.placement === "primary");
    const secondary = resolved.filter((a) => a.placement === "secondary");
    const overflow = resolved.filter((a) => a.placement === "overflow");

    return (
      <TooltipProvider>
        <div className="bg-neutral-50 min-h-screen p-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm">
              <PageHeader
                title="Sales Delivery"
                subtitle="SD-8821 · Main Warehouse → Truck-17"
                density="compact"
                status={
                  <div className="flex items-center gap-1.5">
                    <StatusBadge label="Submitted" tone="info" />
                    <Badge variant="warning">1 variance</Badge>
                  </div>
                }
                breadcrumbs={[
                  { label: "Sales", href: "#" },
                  { label: "Deliveries", href: "#" },
                  { label: "SD-8821" },
                ]}
                meta={[
                  { label: "Customer", value: "Northwind Retail" },
                  { label: "Lines", value: "3" },
                  { label: "Units", value: "38" },
                  { label: "Dispatch", value: "11 May 2025" },
                ]}
              />

              <TransactionShell
                title="Sales Delivery"
                documentNumber="SD-8821"
                status="submitted"
                mode="edit"
                density="compact"
                header={
                  <div className="grid grid-cols-3 gap-3">
                    <TextField
                      label="Customer"
                      defaultValue="Northwind Retail"
                      density="compact"
                    />
                    <TextField
                      label="Warehouse"
                      defaultValue="Main Warehouse"
                      density="compact"
                    />
                    <TextField
                      label="Dispatch Route"
                      defaultValue="Truck-17"
                      density="compact"
                    />
                  </div>
                }
                lines={
                  <table className="w-full text-xs mt-1">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        {[
                          "Item",
                          "Description",
                          "Ordered",
                          "Picked",
                          "Delivered",
                          "Status",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left py-1.5 px-2 text-neutral-500 font-medium"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { item: "FAB-001", desc: "Fabric roll", ord: 12, pick: 12, del: 12, ok: true },
                        { item: "ACC-220", desc: "Accessory pack", ord: 8, pick: 6, del: 6, ok: false },
                        { item: "BOX-010", desc: "Shipping box", ord: 20, pick: 20, del: 20, ok: true },
                      ].map((row) => (
                        <tr
                          key={row.item}
                          className={[
                            "border-b border-neutral-100",
                            !row.ok ? "bg-amber-50" : "",
                          ].join(" ")}
                        >
                          <td className="py-1.5 px-2 font-mono text-neutral-800">{row.item}</td>
                          <td className="py-1.5 px-2 text-neutral-700">{row.desc}</td>
                          <td className="py-1.5 px-2 text-right text-neutral-800">{row.ord}</td>
                          <td className="py-1.5 px-2 text-right text-neutral-800">{row.pick}</td>
                          <td className="py-1.5 px-2 text-right text-neutral-800">{row.del}</td>
                          <td className="py-1.5 px-2">
                            <Badge variant={row.ok ? "success" : "warning"}>
                              {row.ok ? "Ready" : "Variance"}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                }
                totals={
                  <div className="flex justify-between items-center text-xs text-neutral-600 pt-1">
                    <span>3 lines · 38 units total</span>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span>2 ready · 1 variance</span>
                    </div>
                  </div>
                }
                validationMessages={[validationVariance]}
                actions={
                  <>
                    {overflow.map((a) => (
                      <ActionButton key={a.id} action={a} />
                    ))}
                    {secondary.length > 0 && (
                      <div className="w-px h-4 bg-neutral-200" />
                    )}
                    {secondary.map((a) => (
                      <ActionButton key={a.id} action={a} />
                    ))}
                    {primary.map((a) => (
                      <ActionButton key={a.id} action={a} />
                    ))}
                  </>
                }
              />
            </div>
          </div>
        </div>
      </TooltipProvider>
    );
  },
};
