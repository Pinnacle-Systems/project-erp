import { type ReactNode } from "react";
import {
  ApprovalPanel,
  type ApprovalAction,
  type ApprovalComment,
  type ApprovalStatus,
  type ApprovalStep,
} from "@erp-ui-platform/approval-ui";
import { StatusBadge, type StatusBadgeTone } from "@erp-ui-platform/app-components";
import { Badge, Button, cn } from "@erp-ui-platform/primitives";

export type MobileActionItem = {
  id: string;
  label: string;
  variant?: "default" | "secondary" | "destructive" | "ghost";
  disabled?: boolean;
  reason?: string;
  onSelect?: () => void;
};

export interface MobileTaskShellProps {
  title: string;
  subtitle?: string;
  status?: ReactNode;
  backLabel?: string;
  onBack?: () => void;
  children: ReactNode;
  bottomBar?: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const MobileTaskShell = ({
  title,
  subtitle,
  status,
  backLabel,
  onBack,
  children,
  bottomBar,
  className,
  contentClassName,
}: MobileTaskShellProps) => (
  <section
    data-component="MobileTaskShell"
    className={cn(
      "mx-auto flex min-h-[44rem] w-full max-w-[27rem] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl",
      className,
    )}
  >
    <div className="flex items-center justify-between bg-neutral-950 px-6 py-2 text-xs font-medium text-white">
      <span>9:41</span>
      <span className="tracking-wide">LTE 100%</span>
    </div>
    <header className="flex shrink-0 items-center gap-3 border-b border-neutral-100 bg-white px-4 py-3">
      {backLabel && (
        <button
          type="button"
          onClick={onBack}
          className="shrink-0 text-sm font-medium text-blue-600"
        >
          {backLabel}
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-semibold leading-tight text-neutral-950">
          {title}
        </h1>
        {subtitle && <p className="truncate text-xs text-neutral-500">{subtitle}</p>}
      </div>
      {status && <div className="shrink-0">{status}</div>}
    </header>
    <div className={cn("min-h-0 flex-1 overflow-y-auto bg-neutral-50", contentClassName)}>
      {children}
    </div>
    {bottomBar}
    <div className="flex shrink-0 justify-center bg-white py-2">
      <div className="h-1 w-24 rounded-full bg-neutral-300" />
    </div>
  </section>
);

MobileTaskShell.displayName = "MobileTaskShell";

export type MobileDocumentField = {
  label: string;
  value: ReactNode;
  tone?: "default" | "warning" | "danger" | "info";
};

export type MobileDocumentLine = {
  id: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  status?: ReactNode;
  tone?: "default" | "warning" | "danger" | "success";
};

export interface MobileDocumentSummaryProps {
  fields: readonly MobileDocumentField[];
  lines?: readonly MobileDocumentLine[];
  totals?: ReactNode;
  readOnlyLabel?: string;
  desktopEditMessage?: ReactNode;
  className?: string;
}

export const MobileDocumentSummary = ({
  fields,
  lines = [],
  totals,
  readOnlyLabel = "Read-only",
  desktopEditMessage,
  className,
}: MobileDocumentSummaryProps) => (
  <div data-component="MobileDocumentSummary" className={cn("space-y-3 p-4", className)}>
    <div className="grid grid-cols-2 gap-2">
      {fields.map((field) => (
        <div
          key={field.label}
          className={cn(
            "rounded-xl border px-3 py-2.5",
            field.tone === "warning" && "border-amber-200 bg-amber-50",
            field.tone === "danger" && "border-red-200 bg-red-50",
            field.tone === "info" && "border-blue-200 bg-blue-50",
            (!field.tone || field.tone === "default") && "border-neutral-200 bg-white",
          )}
        >
          <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-400">
            {field.label}
          </p>
          <div className="mt-0.5 text-sm font-medium text-neutral-900">{field.value}</div>
        </div>
      ))}
    </div>
    {totals && <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">{totals}</div>}
    {lines.length > 0 && (
      <section>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-neutral-700">Lines</p>
          <Badge variant="muted">{readOnlyLabel}</Badge>
        </div>
        <div className="space-y-2">
          {lines.map((line) => (
            <div
              key={line.id}
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl border bg-white px-3 py-3",
                line.tone === "warning" && "border-amber-200 bg-amber-50",
                line.tone === "danger" && "border-red-200 bg-red-50",
                line.tone === "success" && "border-green-200 bg-green-50",
                (!line.tone || line.tone === "default") && "border-neutral-200",
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-neutral-900">{line.title}</p>
                {line.description && (
                  <p className="truncate text-xs text-neutral-500">{line.description}</p>
                )}
              </div>
              <div className="shrink-0 text-right text-xs text-neutral-600">
                {line.meta}
                {line.status && <div className="mt-1 flex justify-end">{line.status}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
    {desktopEditMessage && (
      <div className="rounded-xl border border-neutral-200 bg-white px-3 py-3 text-xs text-neutral-600">
        {desktopEditMessage}
      </div>
    )}
  </div>
);

MobileDocumentSummary.displayName = "MobileDocumentSummary";

export interface MobileBottomActionBarProps {
  actions: readonly MobileActionItem[];
  helperText?: ReactNode;
  className?: string;
}

export const MobileBottomActionBar = ({
  actions,
  helperText,
  className,
}: MobileBottomActionBarProps) => (
  <footer
    data-component="MobileBottomActionBar"
    className={cn("shrink-0 border-t border-neutral-200 bg-white px-4 py-3", className)}
  >
    {helperText && <div className="mb-2 text-xs text-neutral-500">{helperText}</div>}
    <div className="flex gap-2">
      {actions.map((action) => (
        <Button
          key={action.id}
          type="button"
          variant={action.variant ?? "secondary"}
          density="touch"
          disabled={action.disabled}
          title={action.reason}
          onClick={action.onSelect}
          className="min-w-0 flex-1"
        >
          {action.label}
        </Button>
      ))}
    </div>
  </footer>
);

MobileBottomActionBar.displayName = "MobileBottomActionBar";

export interface MobileApprovalFlowProps {
  status: ApprovalStatus;
  statusLabel?: string;
  statusTone?: StatusBadgeTone;
  steps: readonly ApprovalStep[];
  comments?: readonly ApprovalComment[];
  actions?: readonly ApprovalAction[];
  summary?: ReactNode;
  onDecision?: (action: ApprovalAction) => void | Promise<void>;
  className?: string;
}

export const MobileApprovalFlow = ({
  status,
  statusLabel,
  statusTone = "warning",
  steps,
  comments,
  actions,
  summary,
  onDecision,
  className,
}: MobileApprovalFlowProps) => (
  <div data-component="MobileApprovalFlow" className={cn("bg-white", className)}>
    <div className="border-b border-neutral-100 px-4 py-3">
      <StatusBadge label={statusLabel ?? status} tone={statusTone} />
    </div>
    <ApprovalPanel
      status={status}
      steps={steps}
      comments={comments}
      allowedActions={actions}
      onDecision={onDecision}
      shell="mobile"
      summary={summary}
      renderAction={(action) => (
        <Button
          variant={
            action.decision === "reject"
              ? "destructive"
              : action.decision === "request_changes"
                ? "secondary"
                : "default"
          }
          density="touch"
          disabled={action.disabled}
          title={action.reason}
          className="flex-1"
        >
          {action.label}
        </Button>
      )}
    />
  </div>
);

MobileApprovalFlow.displayName = "MobileApprovalFlow";

export interface ScannerCapturePlaceholderProps {
  title?: string;
  description?: string;
  reference?: string;
  state?: "ready" | "scanning" | "captured" | "error";
  capturedLabel?: string;
  onScan?: () => void;
  onReset?: () => void;
  onError?: () => void;
  className?: string;
}

export const ScannerCapturePlaceholder = ({
  title = "Scan document",
  description = "Position the document inside the frame.",
  reference,
  state = "ready",
  capturedLabel = "Captured",
  onScan,
  onReset,
  onError,
  className,
}: ScannerCapturePlaceholderProps) => (
  <div data-component="ScannerCapturePlaceholder" className={cn("flex h-full flex-col", className)}>
    <div className="relative flex h-80 shrink-0 items-center justify-center bg-neutral-950 text-white">
      {state === "ready" && (
        <>
          <FrameCorner className="left-10 top-8 rounded-tl border-l-2 border-t-2" />
          <FrameCorner className="right-10 top-8 rounded-tr border-r-2 border-t-2" />
          <FrameCorner className="bottom-8 left-10 rounded-bl border-b-2 border-l-2" />
          <FrameCorner className="bottom-8 right-10 rounded-br border-b-2 border-r-2" />
          <p className="px-10 text-center text-xs text-white/65">{description}</p>
        </>
      )}
      {state === "scanning" && (
        <div className="flex flex-col items-center gap-3 text-sm font-medium">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Scanning
          <div className="absolute left-12 right-12 top-1/2 h-0.5 bg-blue-400 shadow-[0_0_12px_rgb(96_165_250)]" />
        </div>
      )}
      {state === "captured" && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl">
            ✓
          </div>
          <p className="text-sm font-medium">{capturedLabel}</p>
        </div>
      )}
      {state === "error" && (
        <div className="mx-6 rounded-xl bg-white p-4 text-center text-neutral-800">
          <p className="text-sm font-semibold">Camera unavailable</p>
          <p className="mt-1 text-xs text-neutral-500">
            Camera access can be connected by the host app later.
          </p>
        </div>
      )}
    </div>
    <div className="flex-1 space-y-3 bg-neutral-50 p-4">
      <div>
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        {reference && <p className="text-xs text-neutral-500">Reference: {reference}</p>}
      </div>
      <div className="rounded-xl border border-neutral-200 bg-white p-3 text-xs text-neutral-600">
        Companion capture only. Document authoring and dense line edits stay in the
        desktop workspace.
      </div>
    </div>
    <MobileBottomActionBar
      actions={
        state === "captured"
          ? [
              { id: "reset", label: "Scan again", variant: "ghost", onSelect: onReset },
              { id: "attach", label: "Attach", variant: "default" },
            ]
          : state === "error"
            ? [{ id: "reset", label: "Go back", variant: "secondary", onSelect: onReset }]
            : [
                { id: "error", label: "Simulate error", variant: "ghost", onSelect: onError },
                { id: "scan", label: state === "scanning" ? "Scanning" : "Scan", variant: "default", disabled: state === "scanning", onSelect: onScan },
              ]
      }
    />
  </div>
);

ScannerCapturePlaceholder.displayName = "ScannerCapturePlaceholder";

const FrameCorner = ({ className }: { className: string }) => (
  <div className={cn("absolute h-8 w-8 border-white", className)} />
);
