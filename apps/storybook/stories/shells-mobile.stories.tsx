import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ApprovalPanel } from "@erp-ui-platform/approval-ui";
import type { ApprovalAction, ApprovalStep, ApprovalComment } from "@erp-ui-platform/approval-ui";
import {
  filterActionsByCapabilities,
  type WorkflowAction,
} from "@erp-ui-platform/workflow-actions";
import type { BaseCapabilities } from "@erp-ui-platform/capability-contracts";
import type { ValidationMessage } from "@erp-ui-platform/validation-ui";
import {
  Button,
  Badge,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  TooltipProvider,
} from "@erp-ui-platform/primitives";
import {
  StatusBadge,
  EmptyState,
  ErrorState,
  LoadingState,
  ConfirmDialog,
} from "@erp-ui-platform/app-components";
import {
  MobileApprovalFlow as MobileApprovalFlowPattern,
  MobileBottomActionBar as MobileBottomActionBarPattern,
  MobileDocumentSummary as MobileDocumentSummaryPattern,
  MobileTaskShell,
  ScannerCapturePlaceholder as ScannerCapturePlaceholderPattern,
} from "@erp-ui-platform/mobile-patterns";
import { cap } from "../utils/demoCapabilities";
import { variantMap } from "../utils/demoActions";
import { APPROVAL_STEPS, APPROVAL_COMMENTS } from "../utils/demoData";
import {
  validationBlocking,
  validationWarning,
  validationVariance,
} from "../utils/demoValidation";

const meta = {
  title: "Shells/Mobile",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── Mobile frame wrapper ──────────────────────────────────────────────────────
// Gives each story an explicit phone-sized container so the layout reads as
// a mobile companion screen rather than a desktop canvas.

const MobileFrame = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="flex justify-center py-6 bg-neutral-100 min-h-screen">
    <div
      className={[
        "relative bg-white rounded-3xl overflow-hidden border border-neutral-300",
        "shadow-xl flex flex-col",
        className,
      ].join(" ")}
      style={{ width: 390, minHeight: 780, maxHeight: 844 }}
    >
      {/* Status bar strip */}
      <div className="bg-neutral-900 flex items-center justify-between px-6 py-2 shrink-0">
        <span className="text-white text-xs font-medium">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-2.5 rounded-sm border border-white/60 relative">
            <div className="absolute inset-0.5 left-0.5 right-1 bg-white/70 rounded-sm" />
          </div>
          <div className="flex gap-0.5 items-end">
            {[3, 4, 5, 6].map((h) => (
              <div key={h} className="w-1 bg-white/80 rounded-sm" style={{ height: h }} />
            ))}
          </div>
          <div className="w-3.5 h-3.5 rounded-full border border-white/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/70" />
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className={["flex-1 overflow-y-auto flex flex-col", className].join(" ")}>
        {children}
      </div>

      {/* Home indicator */}
      <div className="bg-white flex justify-center py-2 shrink-0">
        <div className="w-24 h-1 bg-neutral-300 rounded-full" />
      </div>
    </div>
  </div>
);

// ── Mobile nav bar ────────────────────────────────────────────────────────────

const MobileNavBar = ({
  title,
  subtitle,
  back,
  right,
}: {
  title: string;
  subtitle?: string;
  back?: boolean;
  right?: React.ReactNode;
}) => (
  <div className="bg-white border-b border-neutral-100 px-4 pt-3 pb-3 flex items-center gap-3 shrink-0">
    {back && (
      <button className="text-blue-600 text-sm mr-1">‹ Back</button>
    )}
    <div className="flex-1 min-w-0">
      <p className="text-base font-semibold text-neutral-900 leading-tight truncate">{title}</p>
      {subtitle && (
        <p className="text-xs text-neutral-500 leading-tight">{subtitle}</p>
      )}
    </div>
    {right}
  </div>
);

// ── Fixed bottom action bar ───────────────────────────────────────────────────

const BottomBar = ({ children }: { children: React.ReactNode }) => (
  <div className="border-t border-neutral-200 bg-white px-4 pt-3 pb-4 flex gap-2 shrink-0">
    {children}
  </div>
);

// ── Shared mock data ──────────────────────────────────────────────────────────

const PENDING_TASKS = [
  {
    id: "po-0841",
    type: "Purchase Order",
    number: "PO-2024-0841",
    amount: "₹1,24,500",
    requester: "A. Sharma",
    age: "2 days ago",
    status: "pending" as const,
  },
  {
    id: "lv-0089",
    type: "Leave Request",
    number: "LV-2025-0089",
    amount: "5 days",
    requester: "S. Nair",
    age: "4 hours ago",
    status: "pending" as const,
  },
  {
    id: "exp-0312",
    type: "Expense Claim",
    number: "EXP-2025-0312",
    amount: "₹8,200",
    requester: "P. Verma",
    age: "1 hour ago",
    status: "pending" as const,
  },
];

const DELIVERY_LINES = [
  { item: "FAB-001", desc: "Fabric roll", ord: 12, pick: 12, ok: true },
  { item: "ACC-220", desc: "Accessory pack", ord: 8, pick: 6, ok: false },
  { item: "BOX-010", desc: "Shipping box", ord: 20, pick: 20, ok: true },
];

// ── MobileDocumentViewWithoutWorkspaceTabs ───────────────────────────────────

export const MobileDocumentViewWithoutWorkspaceTabs: Story = {
  render: () => (
    <MobileTaskShell
      title="Approval Detail"
      subtitle="Sales Return"
      backLabel="Back"
      status={<StatusBadge label="Pending" tone="warning" />}
      bottomBar={
        <MobileBottomActionBarPattern
          helperText="Mobile uses back navigation, title, and status instead of desktop workspace tabs."
          actions={[
            { id: "comment", label: "Comment", variant: "secondary" },
            { id: "reject", label: "Reject", variant: "destructive" },
            { id: "approve", label: "Approve", variant: "default" },
          ]}
        />
      }
    >
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
              Sales Return
            </p>
            <p className="text-sm font-semibold text-neutral-950">SR-108</p>
          </div>
          <Button variant="ghost" density="compact">
            Add note
          </Button>
        </div>

        <MobileDocumentSummaryPattern
          fields={[
            { label: "Customer", value: "ABC Traders" },
            { label: "Amount", value: "₹18,240" },
            { label: "Requested by", value: "A. Sharma" },
            { label: "Age", value: "4 hours" },
          ]}
          lines={[
            {
              id: "line-1",
              title: "Returned goods",
              description: "2 items require approval",
              meta: "2 lines",
              status: <StatusBadge label="Review" tone="warning" />,
            },
            {
              id: "line-2",
              title: "Customer credit",
              description: "Credit note pending approval",
              meta: "₹18,240",
              status: <StatusBadge label="Pending" tone="warning" />,
            },
          ]}
          readOnlyLabel="Mobile review"
          desktopEditMessage="Desktop may keep several work items open with workspace tabs and scoped breadcrumbs. This mobile view stays focused on one active task."
        />
      </div>
    </MobileTaskShell>
  ),
};

// ── 1. MobileTaskHome ─────────────────────────────────────────────────────────

export const MobileTaskHome: Story = {
  render: () => (
    <MobileFrame>
      {/* App nav */}
      <div className="bg-white px-4 pt-4 pb-3 flex items-center justify-between shrink-0">
        <div>
          <p className="text-xs text-neutral-400">Good morning,</p>
          <p className="text-lg font-bold text-neutral-900">F. Chen</p>
        </div>
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-700 text-sm font-semibold">FC</span>
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">
            3
          </span>
        </div>
      </div>

      {/* Section header */}
      <div className="px-4 pb-2 flex items-center justify-between shrink-0">
        <p className="text-sm font-semibold text-neutral-700">Pending your action</p>
        <Badge variant="warning">3</Badge>
      </div>

      {/* Task cards */}
      <div className="flex-1 px-4 flex flex-col gap-3 pb-4">
        {PENDING_TASKS.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl border border-neutral-200 shadow-xs overflow-hidden"
          >
            <div className="px-4 pt-3.5 pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wide">
                    {task.type}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 leading-snug">
                    {task.number}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {task.requester} · {task.age}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <StatusBadge label="Pending" tone="warning" />
                  <p className="text-sm font-semibold text-neutral-800">{task.amount}</p>
                </div>
              </div>
            </div>
            <div className="flex border-t border-neutral-100">
              <button className="flex-1 py-2.5 text-sm font-medium text-neutral-500 hover:bg-neutral-50 border-r border-neutral-100 active:bg-neutral-100">
                View
              </button>
              <button className="flex-1 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 border-r border-neutral-100 active:bg-red-100">
                Reject
              </button>
              <button className="flex-1 py-2.5 text-sm font-medium text-green-600 hover:bg-green-50 active:bg-green-100">
                Approve
              </button>
            </div>
          </div>
        ))}

        <EmptyState
          title="That's everything"
          description="No more items waiting for your action."
          className="py-6 border-dashed border border-neutral-200 rounded-xl mt-2"
        />
      </div>
    </MobileFrame>
  ),
};

// ── 2. MobileDocumentSummary ──────────────────────────────────────────────────

export const MobileDocumentSummary: Story = {
  render: () => (
    <MobileFrame>
      <MobileNavBar
        title="Sales Delivery"
        subtitle="SD-8821"
        back
        right={<StatusBadge label="Submitted" tone="info" />}
      />

      <div className="flex-1 flex flex-col gap-0">
        {/* Summary cards */}
        <div className="px-4 pt-4 pb-2 grid grid-cols-2 gap-2">
          {[
            { label: "Customer", value: "Northwind Retail" },
            { label: "Dispatch", value: "11 May 2025" },
            { label: "Warehouse", value: "Main Warehouse" },
            { label: "Route", value: "Truck-17" },
          ].map((f) => (
            <div key={f.label} className="bg-neutral-50 rounded-xl px-3 py-2.5">
              <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">
                {f.label}
              </p>
              <p className="text-sm text-neutral-800 font-medium mt-0.5">{f.value}</p>
            </div>
          ))}
        </div>

        {/* Totals strip */}
        <div className="mx-4 my-1 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-blue-500 font-semibold uppercase tracking-wide">
              Total units
            </p>
            <p className="text-2xl font-bold text-blue-700">38</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-blue-500 font-semibold uppercase tracking-wide">
              Lines
            </p>
            <p className="text-2xl font-bold text-blue-700">3</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-amber-500 font-semibold uppercase tracking-wide">
              Variances
            </p>
            <p className="text-2xl font-bold text-amber-600">1</p>
          </div>
        </div>

        {/* Line cards — read-only on mobile */}
        <div className="px-4 pt-2 pb-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-neutral-700">Lines</p>
            <Badge variant="muted">Read-only</Badge>
          </div>
          <div className="flex flex-col gap-2">
            {DELIVERY_LINES.map((line) => (
              <div
                key={line.item}
                className={[
                  "rounded-xl border px-3 py-3 flex items-center justify-between",
                  line.ok
                    ? "border-neutral-200 bg-white"
                    : "border-amber-200 bg-amber-50",
                ].join(" ")}
              >
                <div>
                  <p className="text-xs font-mono font-semibold text-neutral-800">
                    {line.item}
                  </p>
                  <p className="text-xs text-neutral-500">{line.desc}</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <p className="text-xs text-neutral-500">
                    <span className="font-medium text-neutral-800">{line.pick}</span>
                    {" / "}
                    {line.ord} picked
                  </p>
                  <Badge variant={line.ok ? "success" : "warning"}>
                    {line.ok ? "Ready" : "Variance"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop nudge */}
        <div className="mx-4 mt-3 mb-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-3 flex items-start gap-2.5">
          <div className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-neutral-500" fill="currentColor">
              <rect x="1" y="2" width="14" height="9" rx="1.5" />
              <path d="M5 13h6M8 11v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-700">Line editing on desktop</p>
            <p className="text-xs text-neutral-500">
              Edit quantities, add or remove lines from your desktop browser.
            </p>
          </div>
        </div>
      </div>

      <BottomBar>
        <Button variant="ghost" density="touch" width="fill" className="flex-1">
          Comment
        </Button>
        <Button variant="default" density="touch" width="fill" className="flex-1">
          Approve
        </Button>
      </BottomBar>
    </MobileFrame>
  ),
};

// ── 3. MobileApprovalFlow ─────────────────────────────────────────────────────

export const MobileApprovalFlow: Story = {
  render: () => {
    const renderAction = (action: ApprovalAction) => (
      <Button
        variant={
          action.decision === "reject"
            ? "destructive"
            : action.decision === "request_changes"
              ? "secondary"
              : "default"
        }
        density="touch"
        width="fill"
        disabled={action.disabled}
        title={action.reason}
        className="flex-1"
      >
        {action.label}
      </Button>
    );

    return (
      <MobileFrame>
        <MobileNavBar
          title="Purchase Order"
          subtitle="PO-2024-0841 · ₹1,24,500"
          back
          right={<StatusBadge label="Pending" tone="warning" />}
        />

        <div className="flex-1 overflow-y-auto">
          <ApprovalPanel
            status="pending"
            steps={APPROVAL_STEPS}
            comments={APPROVAL_COMMENTS}
            allowedActions={[
              { id: "approve", decision: "approve", label: "Approve" },
              {
                id: "request-changes",
                decision: "request_changes",
                label: "Changes",
                requiresComment: true,
              },
              {
                id: "reject",
                decision: "reject",
                label: "Reject",
                requiresComment: true,
              },
            ]}
            shell="mobile"
            renderAction={renderAction}
            summary={
              <div className="flex flex-col gap-1 text-sm text-neutral-700">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Requester</span>
                  <span>A. Sharma</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Department</span>
                  <span>Procurement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Amount</span>
                  <span className="font-semibold">₹1,24,500.00</span>
                </div>
              </div>
            }
          />
        </div>
      </MobileFrame>
    );
  },
};

// ── 4. MobileBottomActionBar ──────────────────────────────────────────────────
// Shows how filterActionsByCapabilities collapses the action surface for mobile.
// Edit, lines, and post actions are blocked/hidden; only companion actions surface.

export const MobileBottomActionBar: Story = {
  render: () => {
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("hidden"),
      canEdit: cap("blocked", "Line editing requires the desktop browser."),
      canEditHeader: cap("blocked", "Header editing requires the desktop browser."),
      canEditLines: cap("blocked", "Line editing is not available on mobile."),
      canDelete: cap("hidden"),
      canSubmit: cap("hidden"),
      canApprove: cap("allowed"),
      canReject: cap("allowed"),
      canPost: cap("hidden"),
      canCancel: cap("hidden"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("allowed"),
      canBulkOperate: cap("hidden"),
      canExport: cap("blocked", "Export is desktop-only."),
    };

    const mobileActions: WorkflowAction[] = [
      {
        id: "approve",
        label: "Approve",
        variant: "primary",
        placement: "primary",
        requiredCapability: "canApprove",
      },
      {
        id: "reject",
        label: "Reject",
        variant: "danger",
        placement: "primary",
        requiredCapability: "canReject",
      },
      {
        id: "comment",
        label: "Comment",
        variant: "secondary",
        placement: "primary",
        requiredCapability: "canComment",
      },
      {
        id: "scan",
        label: "Scan",
        variant: "ghost",
        placement: "primary",
        requiredCapability: "canScan",
      },
      {
        id: "edit",
        label: "Edit",
        variant: "secondary",
        placement: "primary",
        requiredCapability: "canEdit",
      },
      {
        id: "export",
        label: "Export PDF",
        variant: "ghost",
        placement: "overflow",
        requiredCapability: "canExport",
      },
    ];

    const resolved = filterActionsByCapabilities(mobileActions, caps, "mobile");
    const visible = resolved.filter((a) => !a.hidden);
    const blocked = visible.filter((a) => a.disabled && a.reason);
    const active = visible.filter((a) => !a.disabled);

    return (
      <TooltipProvider>
        <div className="flex flex-col gap-6 max-w-sm mx-auto py-6">

          {/* Phone preview */}
          <MobileFrame>
            <MobileNavBar
              title="Sales Invoice"
              subtitle="SI-1001 · Northwind Retail"
              back
              right={<StatusBadge label="Pending Approval" tone="warning" />}
            />

            <div className="flex-1 px-4 py-4 flex flex-col gap-3">
              <div className="bg-neutral-50 rounded-xl p-4 text-center text-xs text-neutral-400 border border-dashed border-neutral-200">
                Document summary
              </div>
            </div>

            <BottomBar>
              {active.map((a) => (
                <Button
                  key={a.id}
                  variant={variantMap[a.variant] ?? "secondary"}
                  density="touch"
                  width="fill"
                  className="flex-1"
                >
                  {a.label}
                </Button>
              ))}
            </BottomBar>
          </MobileFrame>

          {/* Capability audit table — shown outside the frame for clarity */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden text-xs">
            <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-200 font-semibold text-neutral-600 uppercase tracking-wide text-[10px]">
              Mobile capability resolution
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-100">
                  <th className="text-left px-3 py-2 text-neutral-400 font-medium">Action</th>
                  <th className="text-left px-3 py-2 text-neutral-400 font-medium">Mobile result</th>
                  <th className="text-left px-3 py-2 text-neutral-400 font-medium">Reason</th>
                </tr>
              </thead>
              <tbody>
                {resolved.map((a) => (
                  <tr key={a.id} className="border-b border-neutral-50 last:border-0">
                    <td className="px-3 py-2 text-neutral-700">{a.label}</td>
                    <td className="px-3 py-2">
                      {a.hidden ? (
                        <Badge variant="muted">hidden</Badge>
                      ) : a.disabled ? (
                        <Badge variant="danger">blocked</Badge>
                      ) : (
                        <Badge variant="success">shown</Badge>
                      )}
                    </td>
                    <td className="px-3 py-2 text-neutral-400">
                      {a.reason?.message ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Blocked actions panel — on mobile these would appear as explanatory text, not tooltips */}
          {blocked.length > 0 && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 flex flex-col gap-1.5">
              <p className="text-[10px] font-semibold text-amber-700 uppercase tracking-wide">
                Not available on mobile
              </p>
              {blocked.map((a) => (
                <p key={a.id} className="text-xs text-amber-800">
                  <span className="font-medium">{a.label}:</span>{" "}
                  {a.reason?.message}
                </p>
              ))}
            </div>
          )}
        </div>
      </TooltipProvider>
    );
  },
};

// ── 5. ScannerCapturePlaceholder ──────────────────────────────────────────────
// Companion workflow: capture a delivery note or barcode.
// Does NOT show a transaction editor — scanning is a supporting action.

export const ScannerCapturePlaceholder: Story = {
  render: () => {
    const [mode, setMode] = useState<"ready" | "scanning" | "captured" | "error">("ready");

    return (
      <MobileFrame>
        <MobileNavBar
          title="Scan Document"
          subtitle="Delivery receipt capture"
          back
        />

        <div className="flex-1 flex flex-col">
          {/* Viewfinder */}
          <div
            className="relative bg-neutral-900 flex items-center justify-center shrink-0"
            style={{ height: 340 }}
          >
            {mode === "ready" && (
              <>
                {/* Corner markers */}
                {[
                  "top-8 left-10 border-t-2 border-l-2 rounded-tl",
                  "top-8 right-10 border-t-2 border-r-2 rounded-tr",
                  "bottom-8 left-10 border-b-2 border-l-2 rounded-bl",
                  "bottom-8 right-10 border-b-2 border-r-2 rounded-br",
                ].map((cls) => (
                  <div
                    key={cls}
                    className={`absolute w-8 h-8 border-white ${cls}`}
                  />
                ))}
                <p className="text-white/60 text-xs text-center px-8">
                  Position the delivery note within the frame
                </p>
              </>
            )}

            {mode === "scanning" && (
              <div className="flex flex-col items-center gap-3">
                <LoadingState variant="inline" label="Scanning…" className="[&_*]:text-white [&_svg]:stroke-white" />
                {/* Scan line animation */}
                <div
                  className="absolute left-12 right-12 h-0.5 bg-blue-400 opacity-80"
                  style={{
                    top: "40%",
                    animation: "none",
                    boxShadow: "0 0 8px 2px rgb(96 165 250 / 0.6)",
                  }}
                />
              </div>
            )}

            {mode === "captured" && (
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4,10 8,14 16,6" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">Captured</p>
              </div>
            )}

            {mode === "error" && (
              <div className="absolute inset-0 bg-neutral-800/80 flex items-center justify-center px-6">
                <ErrorState
                  title="Camera unavailable"
                  description="Allow camera access in Settings to scan documents."
                  onRetry={() => setMode("ready")}
                  retryLabel="Try again"
                  className="bg-white rounded-xl py-4 px-4 w-full"
                />
              </div>
            )}
          </div>

          {/* Document reference form */}
          <div className="px-4 pt-4 flex flex-col gap-3 flex-1">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-neutral-600">Reference to document</label>
              <div className="flex gap-2">
                <div className="flex-1 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-800 bg-neutral-50">
                  SD-8821
                </div>
                <button className="px-3 py-2.5 rounded-lg border border-neutral-200 text-xs text-neutral-500 bg-white">
                  Change
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-neutral-600">Capture type</label>
              <div className="grid grid-cols-3 gap-2">
                {["Delivery note", "Invoice", "Barcode"].map((opt) => (
                  <button
                    key={opt}
                    className={[
                      "rounded-lg border py-2 text-xs font-medium text-center transition-colors",
                      opt === "Delivery note"
                        ? "border-blue-400 bg-blue-50 text-blue-700"
                        : "border-neutral-200 text-neutral-600",
                    ].join(" ")}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {mode === "captured" && (
              <div className="rounded-xl bg-green-50 border border-green-200 px-3 py-2.5 flex items-center gap-2">
                <Badge variant="success">Captured</Badge>
                <span className="text-xs text-green-700">
                  delivery-note-sd8821.jpg · attached to SD-8821
                </span>
              </div>
            )}
          </div>
        </div>

        <BottomBar>
          {mode === "ready" && (
            <>
              <Button
                variant="ghost"
                density="touch"
                width="fill"
                className="flex-1"
                onClick={() => setMode("error")}
              >
                Simulate error
              </Button>
              <Button
                variant="default"
                density="touch"
                width="fill"
                className="flex-1"
                onClick={() => {
                  setMode("scanning");
                  setTimeout(() => setMode("captured"), 1800);
                }}
              >
                Scan
              </Button>
            </>
          )}
          {mode === "scanning" && (
            <Button variant="ghost" density="touch" width="fill" className="flex-1" onClick={() => setMode("ready")}>
              Cancel
            </Button>
          )}
          {mode === "captured" && (
            <>
              <Button variant="ghost" density="touch" width="fill" className="flex-1" onClick={() => setMode("ready")}>
                Scan again
              </Button>
              <Button variant="default" density="touch" width="fill" className="flex-1">
                Attach & close
              </Button>
            </>
          )}
          {mode === "error" && (
            <Button variant="secondary" density="touch" width="fill" className="flex-1" onClick={() => setMode("ready")}>
              Go back
            </Button>
          )}
        </BottomBar>
      </MobileFrame>
    );
  },
};

// ── 6. MobileValidationSheet ──────────────────────────────────────────────────
// On mobile, validation errors surface as a bottom sheet triggered by a badge,
// not as an inline panel — keeping the compact summary visible at all times.

export const MobileValidationSheet: Story = {
  args: { open: false } as never,
  render: () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const messages: ValidationMessage[] = [
      validationBlocking,
      validationWarning,
      validationVariance,
    ];

    const blockingCount = messages.filter((m) => m.severity === "blocking").length;
    const warningCount = messages.filter((m) => m.severity === "warning").length;

    const severityConfig = {
      blocking: { label: "Blocking", badgeVariant: "danger" as const, dot: "bg-red-500" },
      error:    { label: "Error",    badgeVariant: "danger" as const, dot: "bg-red-400" },
      warning:  { label: "Warning",  badgeVariant: "warning" as const, dot: "bg-amber-400" },
      info:     { label: "Info",     badgeVariant: "info" as const, dot: "bg-blue-400" },
    };

    return (
      <TooltipProvider>
        <MobileFrame>
          <MobileNavBar
            title="Sales Invoice"
            subtitle="SI-1002 · Draft"
            back
            right={
              <div className="flex items-center gap-1.5">
                <StatusBadge label="Draft" tone="default" />
              </div>
            }
          />

          {/* Document body (compact, read-only summary) */}
          <div className="flex-1 px-4 pt-4 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Customer", value: "—", error: true },
                { label: "Invoice Date", value: "11 May 2025", error: false },
                { label: "Tax Code", value: "Not set", error: false, warn: true },
                { label: "Amount", value: "₹1,793.60", error: false },
              ].map((f) => (
                <div
                  key={f.label}
                  className={[
                    "rounded-xl border px-3 py-2.5",
                    f.error
                      ? "border-red-200 bg-red-50"
                      : f.warn
                        ? "border-amber-200 bg-amber-50"
                        : "border-neutral-200 bg-neutral-50",
                  ].join(" ")}
                >
                  <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">
                    {f.label}
                  </p>
                  <p
                    className={[
                      "text-sm font-medium mt-0.5",
                      f.error ? "text-red-600 italic" : "text-neutral-800",
                    ].join(" ")}
                  >
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Inline issues summary bar */}
            <button
              className="w-full rounded-xl border border-red-200 bg-red-50 px-3 py-3 flex items-center justify-between active:bg-red-100"
              onClick={() => setSheetOpen(true)}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <Badge variant="danger">{blockingCount} blocking</Badge>
                  <Badge variant="warning">{warningCount} warning</Badge>
                </div>
              </div>
              <span className="text-xs text-red-600 font-medium">View all ›</span>
            </button>
          </div>

          {/* Bottom action bar */}
          <BottomBar>
            <Button
              variant="secondary"
              density="touch"
              width="fill"
              className="flex-1"
            >
              Save Draft
            </Button>
            <Button
              variant="destructive"
              density="touch"
              width="fill"
              className="flex-1"
              disabled
              onClick={() => setConfirmOpen(true)}
            >
              Post
            </Button>
          </BottomBar>

          {/* Validation bottom sheet (Dialog styled as sheet) */}
          <Dialog open={sheetOpen} onOpenChange={setSheetOpen}>
            <DialogContent
              className="!top-auto !bottom-0 !translate-y-0 !translate-x-0 !left-0 !right-0 !max-w-none !w-full rounded-t-2xl rounded-b-none p-0 border-0"
              style={{ position: "fixed", margin: 0 }}
            >
              <div className="w-10 h-1 bg-neutral-300 rounded-full mx-auto mt-3 mb-1" />
              <DialogHeader className="px-4 pt-1 pb-3 border-b border-neutral-100">
                <DialogTitle className="text-base">
                  Issues · SI-1002
                </DialogTitle>
              </DialogHeader>

              <div className="px-4 py-4 flex flex-col gap-3 max-h-96 overflow-y-auto">
                {messages.map((m) => {
                  const cfg = severityConfig[m.severity];
                  return (
                    <div
                      key={m.id}
                      className={[
                        "rounded-xl border px-3 py-3 flex items-start gap-3",
                        m.severity === "blocking" || m.severity === "error"
                          ? "border-red-200 bg-red-50"
                          : m.severity === "warning"
                            ? "border-amber-200 bg-amber-50"
                            : "border-blue-200 bg-blue-50",
                      ].join(" ")}
                    >
                      <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${cfg.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Badge variant={cfg.badgeVariant} className="capitalize">
                            {cfg.label}
                          </Badge>
                          <span className="text-[10px] text-neutral-400 uppercase tracking-wide">
                            {m.scope}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-800">{m.message}</p>
                        {m.fieldPath && (
                          <p className="text-[10px] font-mono text-neutral-400 mt-0.5">
                            {m.fieldPath}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="px-4 pb-6 pt-2 border-t border-neutral-100 flex gap-2">
                <Button
                  variant="secondary"
                  density="touch"
                  width="fill"
                  className="flex-1"
                  onClick={() => setSheetOpen(false)}
                >
                  Dismiss
                </Button>
                <Button
                  variant="default"
                  density="touch"
                  width="fill"
                  className="flex-1"
                  onClick={() => setSheetOpen(false)}
                >
                  Fix on Desktop
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <ConfirmDialog
            open={confirmOpen}
            onOpenChange={setConfirmOpen}
            title="Cannot post"
            description="Resolve all blocking issues before posting. Open the document on desktop to fix them."
            confirmLabel="Open on Desktop"
            cancelLabel="Dismiss"
            onConfirm={() => setConfirmOpen(false)}
          />
        </MobileFrame>
      </TooltipProvider>
    );
  },
};

export const MobileCompanionShellPattern: Story = {
  render: () => {
    const [scanState, setScanState] = useState<"ready" | "scanning" | "captured" | "error">("ready");

    return (
      <div className="grid gap-6 bg-neutral-100 p-6 lg:grid-cols-3">
        <MobileTaskShell
          title="Sales Delivery"
          subtitle="SD-8821 · companion summary"
          backLabel="‹ Back"
          status={<StatusBadge label="Submitted" tone="info" />}
          bottomBar={
            <MobileBottomActionBarPattern
              helperText="Dense line editing is available from desktop."
              actions={[
                { id: "comment", label: "Comment", variant: "secondary" },
                { id: "approve", label: "Approve", variant: "default" },
              ]}
            />
          }
        >
          <MobileDocumentSummaryPattern
            fields={[
              { label: "Customer", value: "Northwind Retail" },
              { label: "Dispatch", value: "11 May 2025" },
              { label: "Warehouse", value: "Main Warehouse" },
              { label: "Route", value: "Truck-17" },
            ]}
            totals={
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-blue-700">38 units</span>
                <Badge variant="warning">1 variance</Badge>
              </div>
            }
            lines={[
              {
                id: "fab",
                title: "FAB-001",
                description: "Fabric roll",
                meta: "12 / 12 picked",
                status: <Badge variant="success">Ready</Badge>,
              },
              {
                id: "acc",
                title: "ACC-220",
                description: "Accessory pack",
                meta: "6 / 8 picked",
                status: <Badge variant="warning">Variance</Badge>,
                tone: "warning",
              },
            ]}
            desktopEditMessage="Mobile is a companion shell: review, comment, approve, or capture documents here; edit dense lines on desktop."
          />
        </MobileTaskShell>

        <MobileTaskShell
          title="Approval"
          subtitle="PO-2024-0841 · ₹1,24,500"
          backLabel="‹ Back"
        >
          <MobileApprovalFlowPattern
            status="pending"
            statusLabel="Pending"
            statusTone="warning"
            steps={APPROVAL_STEPS}
            comments={APPROVAL_COMMENTS}
            actions={[
              { id: "approve", decision: "approve", label: "Approve" },
              { id: "changes", decision: "request_changes", label: "Changes", requiresComment: true },
              { id: "reject", decision: "reject", label: "Reject", requiresComment: true },
            ]}
            summary={
              <div className="grid gap-1 text-sm text-neutral-700">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Requester</span>
                  <span>A. Sharma</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Department</span>
                  <span>Procurement</span>
                </div>
              </div>
            }
          />
        </MobileTaskShell>

        <MobileTaskShell
          title="Scan Document"
          subtitle="Delivery receipt capture"
          backLabel="‹ Back"
        >
          <ScannerCapturePlaceholderPattern
            reference="SD-8821"
            state={scanState}
            onScan={() => {
              setScanState("scanning");
              setTimeout(() => setScanState("captured"), 900);
            }}
            onReset={() => setScanState("ready")}
            onError={() => setScanState("error")}
          />
        </MobileTaskShell>
      </div>
    );
  },
};
