import type { Meta, StoryObj } from "@storybook/react-vite";
import { type ReactNode } from "react";
import { Button, cn } from "@erp-ui-platform/primitives";
import {
  EmptyState,
  ErrorState,
  IconChip,
  LoadingState,
  StatusBadge,
} from "@erp-ui-platform/app-components";
import type { IconChipTone, StatusBadgeTone } from "@erp-ui-platform/app-components";

const meta = {
  title: "Patterns/Visual Polish",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── inline SVG icons ──────────────────────────────────────────────────────────

const TrendUpIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const TrendDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

const CurrencyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const AlertIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const TruckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ReturnIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 14 4 9 9 4" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </svg>
);

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const InboxIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ── local composition helpers ─────────────────────────────────────────────────

type TrendTone = "positive" | "negative" | "neutral";

const trendTextClass: Record<TrendTone, string> = {
  positive: "text-[var(--erp-kpi-trend-positive-fg)]",
  negative: "text-[var(--erp-kpi-trend-negative-fg)]",
  neutral: "text-[var(--erp-text-muted)]",
};

const KPICard = ({
  label,
  value,
  helper,
  trend,
  trendTone = "neutral",
  icon,
  iconTone = "primary",
}: {
  label: string;
  value: string;
  helper?: string;
  trend?: string;
  trendTone?: TrendTone;
  icon?: ReactNode;
  iconTone?: IconChipTone;
}) => (
  <div
    className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] p-4 shadow-[var(--erp-shadow-card)]"
    style={{ minHeight: "var(--erp-kpi-card-min-height)" }}
  >
    <div className="mb-3 flex items-start justify-between gap-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
        {label}
      </p>
      {icon && <IconChip icon={icon} tone={iconTone} size="sm" />}
    </div>
    <p className="mb-1 text-2xl font-bold tabular-nums text-[var(--erp-text-primary)]">{value}</p>
    {trend && (
      <div className={cn("flex items-center gap-1", trendTextClass[trendTone])}>
        {trendTone === "positive" && <TrendUpIcon />}
        {trendTone === "negative" && <TrendDownIcon />}
        <span className="text-xs font-medium">{trend}</span>
      </div>
    )}
    {helper && <p className="mt-1 text-xs text-[var(--erp-text-muted)]">{helper}</p>}
  </div>
);

const heroToneClass: Record<string, string> = {
  warning: "text-[var(--erp-text-warning)]",
  success: "text-[var(--erp-text-success)]",
  danger: "text-[var(--erp-text-danger)]",
};

const DocSummaryCard = ({
  docType,
  docNumber,
  statusLabel,
  statusTone,
  heroLabel,
  heroValue,
  heroTone,
  fields,
  helperText,
  icon,
  iconTone = "primary",
}: {
  docType: string;
  docNumber: string;
  statusLabel: string;
  statusTone: StatusBadgeTone;
  heroLabel: string;
  heroValue: string;
  heroTone?: "warning" | "success" | "danger";
  fields: Array<{ label: string; value: string }>;
  helperText?: string;
  icon?: ReactNode;
  iconTone?: IconChipTone;
}) => (
  <div className="overflow-hidden rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] shadow-[var(--erp-shadow-card)]">
    <div className="flex items-center justify-between gap-3 border-b border-[var(--erp-border-muted)] bg-[var(--erp-surface-card)] px-4 py-3">
      <div className="flex min-w-0 items-center gap-2.5">
        {icon && <IconChip icon={icon} tone={iconTone} size="sm" />}
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
            {docType}
          </p>
          <p className="truncate text-xs font-medium text-[var(--erp-text-secondary)]">{docNumber}</p>
        </div>
      </div>
      <div className="shrink-0">
        <StatusBadge label={statusLabel} tone={statusTone} />
      </div>
    </div>
    <div className="p-4">
      <p className="text-[10px] uppercase tracking-wide text-[var(--erp-text-subtle)]">{heroLabel}</p>
      <p
        className={cn(
          "mb-3 text-2xl font-bold tabular-nums",
          heroTone ? heroToneClass[heroTone] : "text-[var(--erp-text-primary)]",
        )}
      >
        {heroValue}
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--erp-border-muted)] pt-3">
        {fields.map(({ label, value }) => (
          <div key={label} className="min-w-0">
            <p className="text-[10px] text-[var(--erp-text-subtle)]">{label}</p>
            <p className="truncate text-xs font-medium text-[var(--erp-text-secondary)]">{value}</p>
          </div>
        ))}
      </div>
      {helperText && (
        <p className="mt-3 border-t border-[var(--erp-border-muted)] pt-2.5 text-xs text-[var(--erp-text-muted)]">
          {helperText}
        </p>
      )}
    </div>
  </div>
);

const SectionHeader = ({
  label,
  title,
  description,
  action,
}: {
  label?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) => (
  <div className="flex items-start justify-between gap-4 border-b border-[var(--erp-border-muted)] pb-3">
    <div>
      {label && (
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          {label}
        </p>
      )}
      <h2 className="text-sm font-semibold text-[var(--erp-text-primary)]">{title}</h2>
      {description && (
        <p className="mt-0.5 text-xs text-[var(--erp-text-muted)]">{description}</p>
      )}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

// ── story data ────────────────────────────────────────────────────────────────

const CHIP_TONES: Array<{ tone: IconChipTone; label: string; icon: ReactNode }> = [
  { tone: "primary", label: "Primary", icon: <CurrencyIcon /> },
  { tone: "success", label: "Success", icon: <CheckCircleIcon /> },
  { tone: "warning", label: "Warning", icon: <ClockIcon /> },
  { tone: "danger",  label: "Danger",  icon: <AlertIcon /> },
  { tone: "info",    label: "Info",    icon: <ActivityIcon /> },
  { tone: "neutral", label: "Neutral", icon: <GridIcon /> },
];

const TABLE_ROWS = [
  { ref: "PO-2024-0841", party: "Northwind Retail", date: "10 May 2026", amount: "₹1,24,500", status: "pending"   },
  { ref: "SI-2025-1001", party: "ABC Traders",      date: "08 May 2026", amount: "₹74,320",   status: "posted"    },
  { ref: "EXP-2025-0312",party: "A. Sharma",        date: "07 May 2026", amount: "₹3,850",    status: "rejected"  },
  { ref: "LV-2025-0089", party: "P. Verma",         date: "05 May 2026", amount: "—",          status: "approved"  },
  { ref: "DO-2025-0334", party: "Blue Dart",        date: "14 May 2026", amount: "₹18,240",   status: "submitted" },
] as const;

const STATUS_LABELS: Record<string, string> = {
  pending: "Pending", posted: "Posted", rejected: "Rejected",
  approved: "Approved", submitted: "Submitted",
};

// ── stories ───────────────────────────────────────────────────────────────────

export const IconChips: Story = {
  render: () => (
    <div className="space-y-6 p-6" style={{ background: "var(--erp-surface-page)" }}>
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Medium (default) — KPI cards, section identities, document summaries
        </p>
        <div className="flex flex-wrap gap-5">
          {CHIP_TONES.map(({ tone, label, icon }) => (
            <div key={tone} className="flex flex-col items-center gap-2">
              <IconChip icon={icon} tone={tone} size="md" />
              <span className="text-[10px] text-[var(--erp-text-muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Small — inline use alongside labels, card headers, table row accents
        </p>
        <div className="flex flex-wrap gap-5">
          {CHIP_TONES.map(({ tone, label, icon }) => (
            <div key={tone} className="flex flex-col items-center gap-2">
              <IconChip icon={icon} tone={tone} size="sm" />
              <span className="text-[10px] text-[var(--erp-text-muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const KPICards: Story = {
  render: () => (
    <div className="p-6" style={{ background: "var(--erp-surface-page)" }}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          label="Open receivables"
          value="₹18.4L"
          trend="+8.2% vs last month"
          trendTone="positive"
          helper="34 invoices outstanding"
          icon={<CurrencyIcon />}
          iconTone="primary"
        />
        <KPICard
          label="Pending approvals"
          value="23"
          trend="3 urgent, oldest 6 days"
          trendTone="negative"
          helper="Next: Finance Review"
          icon={<ClockIcon />}
          iconTone="warning"
        />
        <KPICard
          label="Fulfillment SLA"
          value="96.8%"
          trend="+1.4% vs target"
          trendTone="positive"
          helper="Target 95.0%"
          icon={<ActivityIcon />}
          iconTone="success"
        />
        <KPICard
          label="Overdue invoices"
          value="7"
          trend="↓ 2 from yesterday"
          trendTone="neutral"
          helper="₹4.2L at risk"
          icon={<AlertIcon />}
          iconTone="neutral"
        />
      </div>
    </div>
  ),
};

export const DocumentSummaryCards: Story = {
  render: () => (
    <div className="p-6" style={{ background: "var(--erp-surface-page)" }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <DocSummaryCard
          docType="Purchase Order"
          docNumber="PO-2024-0841"
          statusLabel="Pending Approval"
          statusTone="pending"
          heroLabel="Order value"
          heroValue="₹1,24,500"
          fields={[
            { label: "Vendor",      value: "Northwind Retail" },
            { label: "Requested by", value: "A. Sharma" },
            { label: "Created",     value: "10 May 2026" },
            { label: "Department",  value: "Procurement" },
          ]}
          helperText="Awaiting Finance Review — step 2 of 3"
          icon={<CheckCircleIcon />}
          iconTone="warning"
        />
        <DocSummaryCard
          docType="Sales Invoice"
          docNumber="SI-2025-1001"
          statusLabel="Posted"
          statusTone="posted"
          heroLabel="Invoice amount"
          heroValue="₹74,320"
          fields={[
            { label: "Customer",  value: "ABC Traders" },
            { label: "Due date",  value: "30 May 2026" },
            { label: "Posted",    value: "08 May 2026" },
            { label: "Route",     value: "Truck-17" },
          ]}
          helperText="Payment link sent · 22 days remaining"
          icon={<FileTextIcon />}
          iconTone="info"
        />
        <DocSummaryCard
          docType="Delivery Order"
          docNumber="DO-2025-0334"
          statusLabel="Dispatched"
          statusTone="submitted"
          heroLabel="Items dispatched"
          heroValue="14 units"
          fields={[
            { label: "Destination", value: "Pune Warehouse" },
            { label: "Carrier",     value: "Blue Dart" },
            { label: "ETA",         value: "14 May 2026" },
            { label: "AWB",         value: "BD-88210" },
          ]}
          helperText="In transit · 2 days remaining"
          icon={<TruckIcon />}
          iconTone="info"
        />
        <DocSummaryCard
          docType="Sales Return"
          docNumber="SR-108"
          statusLabel="Pending credit"
          statusTone="pending"
          heroLabel="Credit pending"
          heroValue="₹18,240"
          heroTone="warning"
          fields={[
            { label: "Customer",    value: "ABC Traders" },
            { label: "Return date", value: "14 May 2026" },
            { label: "Items",       value: "2 lines" },
            { label: "Reason",      value: "Defective goods" },
          ]}
          helperText="Credit note to be issued on approval"
          icon={<ReturnIcon />}
          iconTone="warning"
        />
      </div>
    </div>
  ),
};

export const SectionHeaderPattern: Story = {
  render: () => (
    <div className="p-6" style={{ background: "var(--erp-surface-page)" }}>
      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] p-5 shadow-[var(--erp-shadow-card)]">
        <div className="space-y-6">
          {/* Minimal: title only */}
          <SectionHeader title="Approval queue" />
          {/* With section label and description */}
          <SectionHeader
            label="Finance · Q2 2026"
            title="Open payables"
            description="Invoices due within the next 30 days that require posting or approval."
          />
          {/* With action button */}
          <SectionHeader
            title="Recent documents"
            description="Last 30 days across all document types."
            action={
              <Button variant="secondary" density="compact" width="hug">
                Export CSV
              </Button>
            }
          />
        </div>
      </div>
    </div>
  ),
};

export const DenseTableCard: Story = {
  render: () => (
    <div className="p-6" style={{ background: "var(--erp-surface-page)" }}>
      <div className="overflow-hidden rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] shadow-[var(--erp-shadow-card)]">
        <div className="flex items-center justify-between border-b border-[var(--erp-border-muted)] px-4 py-3">
          <p className="text-sm font-semibold text-[var(--erp-text-primary)]">Recent documents</p>
          <Button variant="ghost" density="compact" width="hug">
            View all
          </Button>
        </div>
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[var(--erp-surface-muted)]">
              {(["Ref", "Party", "Date", "Amount", "Status"] as const).map((h, i) => (
                <th
                  key={h}
                  className={cn(
                    "px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",
                    i === 3 ? "text-right" : "text-left",
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row) => (
              <tr
                key={row.ref}
                className="border-t border-[var(--erp-border-muted)] transition-colors duration-[var(--erp-motion-fast)] hover:bg-[var(--erp-surface-hover)]"
              >
                <td className="px-4 py-2.5 font-mono text-[var(--erp-text-primary)]">{row.ref}</td>
                <td className="px-4 py-2.5 text-[var(--erp-text-secondary)]">{row.party}</td>
                <td className="px-4 py-2.5 tabular-nums text-[var(--erp-text-muted)]">{row.date}</td>
                <td className="px-4 py-2.5 text-right tabular-nums font-medium text-[var(--erp-text-primary)]">
                  {row.amount}
                </td>
                <td className="px-4 py-2.5">
                  <StatusBadge
                    label={STATUS_LABELS[row.status] ?? row.status}
                    tone={row.status as StatusBadgeTone}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-[var(--erp-border-default)] bg-[var(--erp-surface-muted)]">
              <td colSpan={3} className="px-4 py-2.5 text-[var(--erp-text-muted)]">
                5 documents
              </td>
              <td className="px-4 py-2.5 text-right font-bold tabular-nums text-[var(--erp-text-primary)]">
                ₹2,20,910
              </td>
              <td className="px-4 py-2.5" />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  ),
};

export const EmptyLoadingErrorStates: Story = {
  render: () => (
    <div
      className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4"
      style={{ background: "var(--erp-surface-page)" }}
    >
      {/* Empty */}
      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] shadow-[var(--erp-shadow-card)]">
        <EmptyState
          icon={<InboxIcon />}
          title="No pending items"
          description="New approvals and tasks will appear here."
          primaryAction={
            <Button density="compact" variant="secondary">
              Refresh
            </Button>
          }
        />
      </div>
      {/* No results */}
      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] shadow-[var(--erp-shadow-card)]">
        <EmptyState
          icon={<SearchIcon />}
          title="No results found"
          description="Try adjusting your search or filter criteria."
          primaryAction={
            <Button density="compact" variant="ghost">
              Clear filters
            </Button>
          }
        />
      </div>
      {/* Error */}
      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] shadow-[var(--erp-shadow-card)]">
        <ErrorState
          title="Failed to load"
          description="The document list could not be fetched. Check your connection."
          onRetry={() => {}}
        />
      </div>
      {/* Loading skeleton */}
      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] py-4 shadow-[var(--erp-shadow-card)]">
        <LoadingState variant="skeleton" rows={5} label="Loading documents..." />
      </div>
    </div>
  ),
};
