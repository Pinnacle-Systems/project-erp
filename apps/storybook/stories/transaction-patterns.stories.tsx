import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TransactionShell,
  type TransactionStatus,
} from "@erp-ui-platform/transaction-shell";
import type { ValidationMessage } from "@erp-ui-platform/validation-ui";
import {
  filterActionsByCapabilities,
  type WorkflowAction,
} from "@erp-ui-platform/workflow-actions";
import type { BaseCapabilities } from "@erp-ui-platform/capability-contracts";
import {
  Button,
  TextField,
  SelectField,
  SelectItem,
  Badge,
  TooltipProvider,
} from "@erp-ui-platform/primitives";
import { PageHeader, StatusBadge, TotalsPanel, AttachmentList, AuditTrail } from "@erp-ui-platform/app-components";
import { cap, statusTone } from "../utils/demoCapabilities";
import { ActionBar } from "../utils/demoActions";
import {
  INVOICE_LINES,
  INVOICE_TOTALS,
  INVOICE_TOTAL_FORMATTED,
  AUDIT_ENTRIES,
  DEMO_ATTACHMENTS,
} from "../utils/demoData";
import {
  FormGrid,
  DescriptionList,
  Stack,
  DataLabel,
  Card,
  Panel,
} from "@erp-ui-platform/layout";

const meta = {
  title: "Patterns/Transaction",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── slot content ──────────────────────────────────────────────────────────────

const HeaderForm = ({ readOnly = false }: { readOnly?: boolean }) => (
  <FormGrid columns={3} gap="sm">
    <TextField
      label="Customer"
      defaultValue="Northwind Retail"
      readOnly={readOnly}
      density="compact"
    />
    <TextField
      label="Invoice Date"
      type="date"
      defaultValue="2025-05-11"
      readOnly={readOnly}
      density="compact"
    />
    <SelectField label="Payment Terms" density="compact" defaultValue="net30">
      <SelectItem value="net30">Net 30</SelectItem>
      <SelectItem value="net60">Net 60</SelectItem>
      <SelectItem value="immediate">Immediate</SelectItem>
    </SelectField>
    <TextField
      label="Reference No."
      defaultValue="PO-0841"
      readOnly={readOnly}
      density="compact"
    />
    <TextField
      label="Currency"
      defaultValue="INR"
      readOnly={readOnly}
      density="compact"
    />
  </FormGrid>
);

const LinesTable = ({ highlightLine }: { highlightLine?: number } = {}) => (
  <table className="w-full text-xs mt-1">
    <thead>
      <tr className="border-b border-neutral-200">
        {["#", "Item", "Description", "Qty", "Rate", "Amount"].map((h) => (
          <th
            key={h}
            className="text-left py-1.5 px-2 text-neutral-500 font-medium first:pl-0"
          >
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {INVOICE_LINES.map((row) => (
        <tr
          key={row.n}
          className={[
            "border-b border-neutral-100",
            highlightLine === row.n ? "bg-amber-50" : "",
          ].join(" ")}
        >
          <td className="py-1.5 px-2 pl-0 text-neutral-400">{row.n}</td>
          <td className="py-1.5 px-2 font-mono text-neutral-800">{row.item}</td>
          <td className="py-1.5 px-2 text-neutral-700">{row.desc}</td>
          <td className="py-1.5 px-2 text-right text-neutral-800">{row.qty}</td>
          <td className="py-1.5 px-2 text-right text-neutral-800">{row.rate}</td>
          <td className="py-1.5 px-2 text-right font-medium text-neutral-900">{row.amt}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DemoTotals = () => (
  <div className="flex justify-end">
    <TotalsPanel
      className="min-w-64 border-none p-0 bg-transparent"
      align="financial"
      items={[
        ...INVOICE_TOTALS.map((t) => ({ ...t, emphasis: "muted" as const })),
        { label: "Total", value: INVOICE_TOTAL_FORMATTED, emphasis: "strong", dividerBefore: true }
      ]}
    />
  </div>
);

const DemoAttachments = () => (
  <AttachmentList
    density="compact"
    items={DEMO_ATTACHMENTS.map((name, i) => ({ id: String(i), name }))}
    onView={(item: any) => console.log(item)}
  />
);

const DemoAudit = () => (
  <AuditTrail
    density="compact"
    items={AUDIT_ENTRIES.map((entry, i) => ({
      id: String(i),
      title: entry.what,
      actor: entry.who,
      timestamp: entry.when,
      tone: i === AUDIT_ENTRIES.length - 1 ? "success" : "default"
    }))}
  />
);


// ── story wrapper ─────────────────────────────────────────────────────────────

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background p-4">
    <div className="mx-auto max-w-5xl">
      <Card padding="none" className="overflow-hidden">
        {children}
      </Card>
    </div>
  </div>
);

// ── stories ───────────────────────────────────────────────────────────────────

export const CreateMode: Story = {
  name: "Create Mode",
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
      canPost: cap("hidden"),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("hidden"),
    };
    const actions: WorkflowAction[] = [
      { id: "discard", label: "Discard", variant: "ghost", placement: "primary", requiredCapability: "canCancel" },
      { id: "save", label: "Save Draft", variant: "secondary", placement: "primary", requiredCapability: "canEdit" },
      { id: "submit", label: "Save & Submit", variant: "primary", placement: "primary", requiredCapability: "canSubmit" },
    ];
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");

    return (
      <TooltipProvider>
        <Page>
          <PageHeader
            title="New Sales Invoice"
            subtitle="Create and submit for approval"
            status={<StatusBadge label="Draft" tone="default" />}
            density="compact"
          />
          <TransactionShell
            title="New Sales Invoice"
            status="draft"
            mode="create"
            density="compact"
            header={<HeaderForm />}
            lines={<LinesTable />}
            totals={<DemoTotals />}
            validationMessages={[]}
            actions={<ActionBar actions={resolved} />}
          />
        </Page>
      </TooltipProvider>
    );
  },
};

export const EditMode: Story = {
  name: "Edit Mode",
  render: () => {
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("allowed"),
      canEditHeader: cap("allowed"),
      canEditLines: cap("allowed"),
      canDelete: cap("blocked", "Delete requires supervisor review."),
      canSubmit: cap("allowed"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("blocked", "Post after approval."),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed"),
    };
    const actions: WorkflowAction[] = [
      { id: "cancel", label: "Cancel", variant: "ghost", placement: "primary", requiredCapability: "canCancel" },
      { id: "save", label: "Save", variant: "secondary", placement: "primary", requiredCapability: "canEdit" },
      { id: "submit", label: "Submit", variant: "primary", placement: "primary", requiredCapability: "canSubmit" },
      { id: "post", label: "Post", variant: "danger", placement: "secondary", requiredCapability: "canPost", requiresConfirmation: true },
    ];
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");

    return (
      <TooltipProvider>
        <Page>
          <PageHeader
            title="Sales Invoice"
            subtitle="SI-1001 · Northwind Retail"
            status={<StatusBadge label="Submitted" tone="info" />}
            density="compact"
            breadcrumbs={[
              { id: "sales", label: "Sales", href: "#" },
              { id: "invoices", label: "Invoices", href: "#" },
              { id: "si-1001", label: "SI-1001", current: true },
            ]}
          />
          <TransactionShell
            title="Sales Invoice"
            documentNumber="SI-1001"
            status="submitted"
            mode="edit"
            density="compact"
            header={<HeaderForm />}
            lines={<LinesTable />}
            totals={<DemoTotals />}
            validationMessages={[]}
            actions={<ActionBar actions={resolved} />}
          />
        </Page>
      </TooltipProvider>
    );
  },
};

export const ViewMode: Story = {
  name: "View Mode",
  render: () => {
    const actions: WorkflowAction[] = [
      { id: "export", label: "Export PDF", variant: "secondary", placement: "primary" },
    ];
    const resolved = filterActionsByCapabilities(actions, {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("blocked", "Document is posted."),
      canEditHeader: cap("blocked", "Document is posted."),
      canEditLines: cap("blocked", "Document is posted."),
      canDelete: cap("hidden"),
      canSubmit: cap("hidden"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("hidden"),
      canCancel: cap("hidden"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed"),
    }, "desktop");

    return (
      <TooltipProvider>
        <Page>
          <PageHeader
            title="Sales Invoice"
            subtitle="SI-1001 · 11 May 2025 · Northwind Retail"
            status={<StatusBadge label="Posted" tone="success" />}
            density="compact"
            primaryAction={<ActionBar actions={resolved} />}
            meta={[
              { label: "Total", value: INVOICE_TOTAL_FORMATTED },
              { label: "Posted by", value: "F. Chen" },
              { label: "Posted on", value: "11 May 2025, 08:00" },
            ]}
          />
          <TransactionShell
            title="Sales Invoice"
            documentNumber="SI-1001"
            status="posted"
            mode="view"
            density="compact"
            header={<HeaderForm readOnly />}
            lines={<LinesTable />}
            totals={<DemoTotals />}
            actions={undefined}
            audit={<DemoAudit />}
            attachments={<DemoAttachments />}
          />
        </Page>
      </TooltipProvider>
    );
  },
};

export const ApprovalMode: Story = {
  name: "Approval Mode",
  render: () => {
    const actions: WorkflowAction[] = [
      { id: "approve", label: "Approve", variant: "primary", placement: "primary" },
      { id: "request-changes", label: "Request Changes", variant: "secondary", placement: "primary" },
      { id: "reject", label: "Reject", variant: "danger", placement: "secondary" },
    ];
    const allCap = cap("allowed");
    const resolved = filterActionsByCapabilities(actions, {
      canView: allCap, canCreate: allCap, canEdit: allCap,
      canEditHeader: allCap, canEditLines: allCap, canDelete: cap("hidden"),
      canSubmit: allCap, canApprove: allCap, canReject: allCap, canPost: cap("hidden"),
      canCancel: allCap, canAttachDocuments: allCap, canComment: allCap,
      canScan: cap("hidden"), canBulkOperate: cap("hidden"), canExport: allCap,
    }, "desktop");

    return (
      <TooltipProvider>
        <Page>
          <PageHeader
            title="Sales Invoice"
            subtitle={`SI-1001 · Northwind Retail · ${INVOICE_TOTAL_FORMATTED}`}
            status={<StatusBadge label="Pending Approval" tone="warning" />}
            density="compact"
            breadcrumbs={[
              { id: "approvals", label: "Approvals", href: "#" },
              { id: "si-1001", label: "SI-1001", current: true },
            ]}
          />
          <TransactionShell
            title="Sales Invoice"
            documentNumber="SI-1001"
            status="pendingApproval"
            mode="approval"
            density="compact"
            header={<HeaderForm readOnly />}
            lines={<LinesTable />}
            totals={<DemoTotals />}
            actions={<ActionBar actions={resolved} />}
          />
        </Page>
      </TooltipProvider>
    );
  },
};

export const WithBlockingValidation: Story = {
  name: "With Blocking Validation",
  render: () => {
    const validationMessages: ValidationMessage[] = [
      {
        id: "v-customer",
        severity: "blocking",
        scope: "field",
        fieldPath: "header.customerId",
        message: "Customer is required before posting.",
      },
      {
        id: "v-tax",
        severity: "warning",
        scope: "workflow",
        message: "Tax code not set. Default GST rate will be applied.",
      },
    ];
    const actions: WorkflowAction[] = [
      { id: "save", label: "Save", variant: "secondary", placement: "primary", requiredCapability: "canEdit" },
      { id: "post", label: "Post", variant: "danger", placement: "primary", requiredCapability: "canPost", requiresConfirmation: true },
    ];
    const caps: BaseCapabilities = {
      canView: cap("allowed"), canCreate: cap("allowed"), canEdit: cap("allowed"),
      canEditHeader: cap("allowed"), canEditLines: cap("allowed"),
      canDelete: cap("hidden"), canSubmit: cap("hidden"),
      canApprove: cap("hidden"), canReject: cap("hidden"),
      canPost: cap("blocked", "Posting blocked until validation is resolved."),
      canCancel: cap("allowed"), canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"), canScan: cap("hidden"),
      canBulkOperate: cap("hidden"), canExport: cap("allowed"),
    };
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");

    return (
      <TooltipProvider>
        <Page>
          <PageHeader
            title="Sales Invoice"
            subtitle="SI-1002 · Draft"
            status={
              <div className="flex items-center gap-1.5">
                <StatusBadge label="Draft" tone="default" />
                <Badge variant="danger">2 issues</Badge>
              </div>
            }
            density="compact"
          />
          <TransactionShell
            title="Sales Invoice"
            documentNumber="SI-1002"
            status="draft"
            mode="edit"
            density="compact"
            header={
              <Stack gap="sm">
                <HeaderForm />
                <TextField
                  label="Customer"
                  placeholder="Search customer…"
                  error
                  errorMessage="Customer is required before posting."
                  density="compact"
                  className="max-w-xs"
                />
              </Stack>
            }
            lines={<LinesTable />}
            totals={<DemoTotals />}
            validationMessages={validationMessages}
            actions={<ActionBar actions={resolved} />}
          />
        </Page>
      </TooltipProvider>
    );
  },
};

export const WithAttachments: Story = {
  name: "With Attachments",
  render: () => (
    <TooltipProvider>
      <Page>
        <PageHeader
          title="Sales Invoice"
          subtitle="SI-1001 · Northwind Retail"
          status={<StatusBadge label="Posted" tone="success" />}
          density="compact"
        />
        <TransactionShell
          title="Sales Invoice"
          documentNumber="SI-1001"
          status="posted"
          mode="view"
          density="compact"
          header={<HeaderForm readOnly />}
          lines={<LinesTable />}
          totals={<DemoTotals />}
          attachments={<DemoAttachments />}
        />
      </Page>
    </TooltipProvider>
  ),
};

export const WithAudit: Story = {
  name: "With Audit",
  render: () => (
    <TooltipProvider>
      <Page>
        <PageHeader
          title="Sales Invoice"
          subtitle="SI-1001 · Full audit trail"
          status={<StatusBadge label="Posted" tone="success" />}
          density="compact"
        />
        <TransactionShell
          title="Sales Invoice"
          documentNumber="SI-1001"
          status="posted"
          mode="view"
          density="compact"
          header={<HeaderForm readOnly />}
          lines={<LinesTable />}
          totals={<DemoTotals />}
          attachments={<DemoAttachments />}
          audit={<DemoAudit />}
        />
      </Page>
    </TooltipProvider>
  ),
};
