import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Button,
  TextField,
  SelectField,
  SelectItem,
  Badge,
} from "@erp-ui-platform/primitives";
import {
  ConfirmDialog,
  LoadingState,
  PageHeader,
  StatusBadge,
} from "@erp-ui-platform/app-components";
import {
  ThemeProvider,
  type Density,
  type ThemeName,
} from "@erp-ui-platform/theme";
import { NavigationShell } from "@erp-ui-platform/layout-shells";
import { TransactionShell } from "@erp-ui-platform/transaction-shell";
import {
  createValidationSummary,
  ValidationSummaryPanel,
} from "@erp-ui-platform/validation-ui";
import { MobileApprovalFlow, MobileTaskShell } from "@erp-ui-platform/mobile-patterns";
import { APPROVAL_COMMENTS, APPROVAL_STEPS } from "../../utils/demoData";
import {
  validationBlocking,
  validationInfo,
  validationWarning,
} from "../../utils/demoValidation";

const meta = {
  title: "Foundation/Themes",
} satisfies Meta;

export default meta;
type Story = StoryObj;

const fields = [
  { label: "Customer", value: "Northwind Retail" },
  { label: "Invoice Date", value: "11 May 2026" },
  { label: "Amount", value: "₹1,793.60" },
];

const kpis = [
  { label: "Open receivables", value: "₹18.4L", trend: "+8.2%", tone: "positive" },
  { label: "Pending approvals", value: "23", trend: "-3", tone: "negative" },
  { label: "Fulfillment SLA", value: "96.8%", trend: "+1.4%", tone: "positive" },
];

const invoiceLines = [
  { item: "FAB-001", description: "Fabric roll", qty: 12, status: "Approved" },
  { item: "ACC-220", description: "Accessory pack", qty: 8, status: "Pending" },
  { item: "SVC-042", description: "Finishing service", qty: 1, status: "Submitted" },
];

const statusExamples = [
  ["Draft", "draft"],
  ["Submitted", "submitted"],
  ["Approved", "approved"],
  ["Rejected", "rejected"],
  ["Posted", "posted"],
  ["Cancelled", "cancelled"],
  ["Pending", "pending"],
  ["Warning", "warning"],
  ["Success", "success"],
  ["Danger", "danger"],
  ["Info", "info"],
] as const;

const validationSummary = createValidationSummary([
  validationBlocking,
  validationWarning,
  validationInfo,
]);

const ConfirmDialogExample = ({ density }: { density: Density }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" density={density} onClick={() => setOpen(true)}>
        Open confirm dialog
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm post"
        description="ConfirmDialog consumes the same surface, radius, focus, and action tokens as the rest of the platform."
        confirmLabel="Post invoice"
        onConfirm={() => setOpen(false)}
      />
    </>
  );
};

const ThemeSample = ({
  theme = "default",
  density = "comfortable",
}: {
  theme?: ThemeName;
  density?: Density;
}) => (
  <ThemeProvider
    theme={theme}
    density={density}
    className="rounded-[var(--erp-radius-shell)] bg-[var(--erp-color-app-bg)] p-[var(--erp-page-padding)] text-[var(--erp-color-foreground)]"
  >
    <div className="grid overflow-hidden rounded-[var(--erp-radius-shell)] border border-[var(--erp-color-border-muted)] bg-[var(--erp-color-page-bg)] shadow-[var(--erp-shadow-card)] lg:grid-cols-[15rem_minmax(0,1fr)]">
      <NavigationShell
        title={`${theme} ERP`}
        subtitle="Finance workspace"
        activeItemId="dashboard"
        items={[
          { id: "dashboard", label: "Dashboard", description: "KPIs and work queue" },
          { id: "invoices", label: "Invoices", badge: 12 },
          { id: "approvals", label: "Approvals", badge: 5 },
          { id: "reports", label: "Reports" },
        ]}
      />
      <div className="min-w-0">
      <PageHeader
        title="Sales Invoice"
        subtitle="SI-1002 · modern light theme sample"
        density={density}
        status={<StatusBadge label="Pending" tone="pending" />}
        primaryAction={<Button variant="default" density={density}>Submit</Button>}
        secondaryActions={
          <>
            <Button variant="ghost" density={density}>Preview</Button>
            <Button variant="secondary" density={density}>Save</Button>
          </>
        }
        meta={fields}
      />
      <div className="grid gap-[var(--erp-section-gap)] p-[var(--erp-page-padding)]">
        <div className="grid gap-[var(--erp-gap)] md:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="min-h-[var(--erp-kpi-card-min-height)] rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface-raised)] p-4 shadow-[var(--erp-shadow-card)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-[var(--erp-kpi-icon-size)] w-[var(--erp-kpi-icon-size)] items-center justify-center rounded-[var(--erp-kpi-icon-radius)] bg-[var(--erp-color-primary-soft)] text-sm font-semibold text-[var(--erp-color-primary)]">
                  {kpi.label.slice(0, 2)}
                </div>
                <span
                  className={
                    kpi.tone === "positive"
                      ? "text-xs font-semibold text-[var(--erp-kpi-trend-positive-fg)]"
                      : "text-xs font-semibold text-[var(--erp-kpi-trend-negative-fg)]"
                  }
                >
                  {kpi.trend}
                </span>
              </div>
              <p className="text-xs font-medium text-[var(--erp-color-foreground-muted)]">{kpi.label}</p>
              <p className="mt-1 text-2xl font-semibold text-[var(--erp-color-foreground)]">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-[var(--erp-gap)] rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4 shadow-[var(--erp-shadow-card)] md:grid-cols-2">
          <TextField label="Customer" defaultValue="Northwind Retail" density={density} />
          <SelectField label="Payment Terms" defaultValue="net30" density={density}>
            <SelectItem value="net30">Net 30</SelectItem>
            <SelectItem value="net60">Net 60</SelectItem>
          </SelectField>
          <TextField
            label="Tax Code"
            defaultValue="Not set"
            errorMessage="Tax code is required before posting."
            density={density}
          />
          <div className="flex items-end gap-2">
            <Badge>Draft</Badge>
            <Badge variant="info">Submitted</Badge>
            <Badge variant="success">Approved</Badge>
            <Badge variant="danger">Blocked</Badge>
          </div>
        </div>

        <div className="overflow-hidden rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] shadow-[var(--erp-shadow-card)]">
          <div className="border-b border-[var(--erp-color-border-muted)] bg-[var(--erp-color-surface-muted)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--erp-color-foreground-muted)]">
            Invoice lines
          </div>
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[var(--erp-color-surface-muted)] text-xs text-[var(--erp-color-foreground-muted)]">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Item</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
                <th className="px-4 py-2 text-right font-medium">Qty</th>
                <th className="px-4 py-2 text-left font-medium">State</th>
              </tr>
            </thead>
            <tbody>
              {invoiceLines.map((line) => (
                <tr key={line.item} className="border-t border-[var(--erp-color-border-muted)]">
                  <td className="px-4 py-2 font-mono text-xs text-[var(--erp-color-foreground)]">{line.item}</td>
                  <td className="px-4 py-2 text-[var(--erp-color-foreground-muted)]">{line.description}</td>
                  <td className="px-4 py-2 text-right text-[var(--erp-color-foreground)]">{line.qty}</td>
                  <td className="px-4 py-2"><StatusBadge label={line.status} tone={line.status.toLowerCase() as "approved" | "pending" | "submitted"} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ValidationSummaryPanel summary={validationSummary} title="Cannot post" />
        <div>
          <ConfirmDialogExample density={density} />
        </div>
      </div>
      </div>
    </div>
  </ThemeProvider>
);

export const DefaultTheme: Story = {
  render: () => <ThemeSample theme="default" />,
};

export const ClientATheme: Story = {
  render: () => <ThemeSample theme="clientA" />,
};

export const ClientBTheme: Story = {
  render: () => <ThemeSample theme="clientB" />,
};

export const CompactDensity: Story = {
  render: () => <ThemeSample theme="default" density="compact" />,
};

export const ComfortableDensity: Story = {
  render: () => <ThemeSample theme="default" density="comfortable" />,
};

export const TouchDensity: Story = {
  render: () => <ThemeSample theme="default" density="touch" />,
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map((theme) => (
        <ThemeSample key={theme} theme={theme} density="compact" />
      ))}
    </div>
  ),
};

export const StatusTonesByTheme: Story = {
  render: () => (
    <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map((theme) => (
        <ThemeProvider
          key={theme}
          theme={theme}
          density="comfortable"
          className="rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4 shadow-[var(--erp-shadow-card)]"
        >
          <p className="mb-3 text-sm font-semibold text-[var(--erp-color-foreground)]">{theme}</p>
          <div className="flex flex-wrap gap-2">
            {statusExamples.map(([label, tone]) => (
              <StatusBadge key={tone} label={label} tone={tone} />
            ))}
          </div>
        </ThemeProvider>
      ))}
    </div>
  ),
};

export const FocusAndDisabledStates: Story = {
  render: () => (
    <ThemeProvider
      theme="clientA"
      density="comfortable"
      className="grid gap-4 rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)] md:grid-cols-2"
    >
      <div className="grid gap-3 rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
        <p className="text-sm font-semibold text-[var(--erp-fg)]">Focus tokens</p>
        <Button autoFocus>Focused button</Button>
        <TextField label="Focused field" defaultValue="Focus uses --erp-focus-ring" />
        <SelectField label="Focused select" defaultValue="posting">
          <SelectItem value="posting">Ready to post</SelectItem>
          <SelectItem value="hold">Hold</SelectItem>
        </SelectField>
      </div>
      <div className="grid gap-3 rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
        <p className="text-sm font-semibold text-[var(--erp-fg)]">Disabled tokens</p>
        <Button disabled>Disabled button</Button>
        <TextField label="Disabled field" defaultValue="Read only" disabled />
        <SelectField label="Disabled select" defaultValue="posting" disabled>
          <SelectItem value="posting">Ready to post</SelectItem>
        </SelectField>
      </div>
    </ThemeProvider>
  ),
};

export const NestedDensityOverride: Story = {
  render: () => (
    <ThemeProvider
      theme="clientB"
      density="comfortable"
      className="grid gap-4 rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)]"
    >
      <ThemeSample theme="clientB" density="comfortable" />
      <ThemeProvider
        density="compact"
        className="rounded-lg border border-[var(--erp-border-strong)] bg-[var(--erp-surface)] p-4"
      >
        <p className="mb-3 text-sm font-semibold text-[var(--erp-fg)]">
          Nested provider inherits clientB and only overrides density
        </p>
        <div className="grid gap-[var(--erp-field-gap)] md:grid-cols-3">
          <TextField label="Compact field" defaultValue="Inherited brand" />
          <SelectField label="Compact select" defaultValue="approved">
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="posted">Posted</SelectItem>
          </SelectField>
          <div className="flex items-end gap-2">
            <Button>Compact action</Button>
          </div>
        </div>
      </ThemeProvider>
    </ThemeProvider>
  ),
};

export const TransactionShellByTheme: Story = {
  render: () => (
    <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map((theme) => (
        <ThemeProvider
          key={theme}
          theme={theme}
          density="compact"
          className="overflow-hidden rounded-lg border border-[var(--erp-border)] bg-[var(--erp-surface)] shadow-[var(--erp-shadow-sm)]"
        >
          <PageHeader
            title="Sales Invoice"
            subtitle={`${theme} · SI-1002`}
            density="compact"
            status={<StatusBadge label="Draft" tone="default" />}
          />
          <TransactionShell
            title="Sales Invoice"
            status="draft"
            mode="edit"
            density="compact"
            header={
              <div className="grid gap-2">
                <TextField label="Customer" defaultValue="Northwind Retail" density="compact" />
                <TextField label="Invoice Date" defaultValue="11 May 2026" density="compact" />
              </div>
            }
            lines={
              <table className="erp-demo-table text-xs">
                <tbody>
                  <tr>
                    <td>FAB-001</td>
                    <td>Fabric roll</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>ACC-220</td>
                    <td>Accessory pack</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
            }
            validationMessages={[validationWarning]}
            actions={<Button density="compact">Save</Button>}
          />
        </ThemeProvider>
      ))}
    </div>
  ),
};

export const MobileApprovalByTheme: Story = {
  render: () => (
    <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map((theme) => (
        <ThemeProvider key={theme} theme={theme} density="touch">
          <MobileTaskShell
            title="Approval"
            subtitle={`${theme} · PO-2024-0841`}
            backLabel="Back"
          >
            <MobileApprovalFlow
              status="pending"
              statusLabel="Pending"
              statusTone="warning"
              steps={APPROVAL_STEPS}
              comments={APPROVAL_COMMENTS}
              actions={[
                { id: "approve", decision: "approve", label: "Approve" },
                { id: "changes", decision: "request_changes", label: "Changes" },
                { id: "reject", decision: "reject", label: "Reject" },
              ]}
              summary={
                <div className="grid gap-1 text-sm text-[var(--erp-fg)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--erp-muted)]">Requester</span>
                    <span>A. Sharma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--erp-muted)]">Amount</span>
                    <span>₹1,24,500.00</span>
                  </div>
                </div>
              }
            />
          </MobileTaskShell>
        </ThemeProvider>
      ))}
    </div>
  ),
};

export const LoadingAndValidationByTheme: Story = {
  render: () => (
    <ThemeProvider theme="clientA" density="comfortable" className="rounded-lg bg-[var(--erp-surface)] p-4">
      <div className="grid gap-4 md:grid-cols-2">
        <LoadingState variant="skeleton" />
        <ValidationSummaryPanel summary={validationSummary} title="Validation" />
      </div>
    </ThemeProvider>
  ),
};
