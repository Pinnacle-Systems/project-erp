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
      "mx-auto flex min-h-[44rem] w-full max-w-[27rem] flex-col overflow-hidden rounded-3xl border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] shadow-xl",
      className,
    )}
  >
    <div className="flex items-center justify-between bg-[var(--erp-surface-inverse)] px-6 py-2 text-xs font-medium text-[var(--erp-text-inverse)]">
      <span>9:41</span>
      <span className="tracking-wide">LTE 100%</span>
    </div>
    <header className="flex h-[var(--erp-shell-mobile-header-height)] shrink-0 items-center gap-3 border-b border-[var(--erp-border-muted)] bg-[var(--erp-surface-panel)] px-4 py-3">
      {backLabel && (
        <button
          type="button"
          onClick={onBack}
          className="shrink-0 text-sm font-medium text-[var(--erp-text-link)]"
        >
          {backLabel}
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-semibold leading-tight text-[var(--erp-text-primary)]">
          {title}
        </h1>
        {subtitle && <p className="truncate text-xs text-[var(--erp-text-muted)]">{subtitle}</p>}
      </div>
      {status && <div className="shrink-0">{status}</div>}
    </header>
    <div className={cn("min-h-0 flex-1 overflow-y-auto bg-[var(--erp-surface-page)]", contentClassName)}>
      {children}
    </div>
    {bottomBar}
    <div className="flex shrink-0 justify-center bg-[var(--erp-surface-card)] py-2">
      <div className="h-1 w-24 rounded-full bg-[var(--erp-border-strong)]" />
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
            field.tone === "warning" &&
              "border-[var(--erp-validation-warning-border)] bg-[var(--erp-validation-warning-bg)]",
            field.tone === "danger" &&
              "border-[var(--erp-validation-error-border)] bg-[var(--erp-validation-error-bg)]",
            field.tone === "info" &&
              "border-[var(--erp-validation-info-border)] bg-[var(--erp-validation-info-bg)]",
            (!field.tone || field.tone === "default") &&
              "border-[var(--erp-border-muted)] bg-[var(--erp-surface-page)]",
          )}
        >
          <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--erp-text-subtle)]">
            {field.label}
          </p>
          <div className="mt-0.5 text-sm font-medium text-[var(--erp-text-primary)]">{field.value}</div>
        </div>
      ))}
    </div>
    {totals && <div className="rounded-xl border border-[var(--erp-border-selected)] bg-[var(--erp-surface-selected)] p-3">{totals}</div>}
    {lines.length > 0 && (
      <section>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--erp-text-secondary)]">Lines</p>
          <Badge variant="muted">{readOnlyLabel}</Badge>
        </div>
        <div className="space-y-2">
          {lines.map((line) => (
            <div
              key={line.id}
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl border bg-[var(--erp-surface-card)] px-3 py-3",
                line.tone === "warning" &&
                  "border-[var(--erp-validation-warning-border)] bg-[var(--erp-validation-warning-bg)]",
                line.tone === "danger" &&
                  "border-[var(--erp-validation-error-border)] bg-[var(--erp-validation-error-bg)]",
                line.tone === "success" &&
                  "border-[var(--erp-border-success)] bg-[var(--erp-state-new)]",
                (!line.tone || line.tone === "default") && "border-[var(--erp-border-default)]",
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[var(--erp-text-primary)]">{line.title}</p>
                {line.description && (
                  <p className="truncate text-xs text-[var(--erp-text-muted)]">{line.description}</p>
                )}
              </div>
              <div className="shrink-0 text-right text-xs text-[var(--erp-text-muted)]">
                {line.meta}
                {line.status && <div className="mt-1 flex justify-end">{line.status}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
    {desktopEditMessage && (
      <div className="rounded-xl border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] px-3 py-3 text-xs text-[var(--erp-text-muted)]">
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
    className={cn("shrink-0 border-t border-[var(--erp-border-default)] bg-[var(--erp-surface-panel)] px-4 py-3", className)}
  >
    {helperText && <div className="mb-2 text-xs text-[var(--erp-text-muted)]">{helperText}</div>}
    <div className="flex gap-2">
      {actions.map((action) => (
        <Button
          key={action.id}
          type="button"
          variant={action.variant ?? "secondary"}
          density="touch"
          width="fill"
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
  <div data-component="MobileApprovalFlow" className={cn("bg-[var(--erp-surface-card)]", className)}>
    <div className="border-b border-[var(--erp-border-muted)] px-4 py-3">
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
          width="fill"
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
    <div className="relative flex h-80 shrink-0 items-center justify-center bg-[var(--erp-surface-inverse)] text-[var(--erp-text-inverse)]">
      {state === "ready" && (
        <>
          <FrameCorner className="left-10 top-8 rounded-tl border-l-2 border-t-2" />
          <FrameCorner className="right-10 top-8 rounded-tr border-r-2 border-t-2" />
          <FrameCorner className="bottom-8 left-10 rounded-bl border-b-2 border-l-2" />
          <FrameCorner className="bottom-8 right-10 rounded-br border-b-2 border-r-2" />
          <p className="px-10 text-center text-xs text-[color-mix(in_srgb,var(--erp-text-inverse)_65%,transparent)]">{description}</p>
        </>
      )}
      {state === "scanning" && (
        <div className="flex flex-col items-center gap-3 text-sm font-medium">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-[color-mix(in_srgb,var(--erp-text-inverse)_30%,transparent)] border-t-[var(--erp-text-inverse)]" />
          Scanning
          <div className="absolute left-12 right-12 top-1/2 h-0.5 bg-[var(--erp-color-primary)] shadow-[0_0_12px_var(--erp-color-primary-soft)]" />
        </div>
      )}
      {state === "captured" && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--erp-status-success-fg)] text-2xl">
            ✓
          </div>
          <p className="text-sm font-medium">{capturedLabel}</p>
        </div>
      )}
      {state === "error" && (
        <div className="mx-6 rounded-xl bg-[var(--erp-surface-card)] p-4 text-center text-[var(--erp-text-secondary)]">
          <p className="text-sm font-semibold">Camera unavailable</p>
          <p className="mt-1 text-xs text-[var(--erp-text-muted)]">
            Camera access can be connected by the host app later.
          </p>
        </div>
      )}
    </div>
    <div className="flex-1 space-y-3 bg-[var(--erp-surface-page)] p-4">
      <div>
        <p className="text-sm font-semibold text-[var(--erp-text-primary)]">{title}</p>
        {reference && <p className="text-xs text-[var(--erp-text-muted)]">Reference: {reference}</p>}
      </div>
      <div className="rounded-xl border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] p-3 text-xs text-[var(--erp-text-muted)]">
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
  <div className={cn("absolute h-8 w-8 border-[var(--erp-text-inverse)]", className)} />
);

// ─────────────────────────────────────────────────────────────────────────────
// MobileApprovalSummaryCard
// ─────────────────────────────────────────────────────────────────────────────

export interface MobileApprovalSummaryCardProps {
  statusLabel: string;
  statusTone: StatusBadgeTone;
  docType: string;
  docNumber: string;
  amount: string;
  requester: string;
  helperText?: string;
  className?: string;
}

export const MobileApprovalSummaryCard = ({
  statusLabel,
  statusTone,
  docType,
  docNumber,
  amount,
  requester,
  helperText,
  className,
}: MobileApprovalSummaryCardProps) => (
  <div
    data-component="MobileApprovalSummaryCard"
    className={cn(
      "rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-raised)] p-4 shadow-[var(--erp-shadow-card)]",
      className,
    )}
  >
    <div className="mb-3 flex items-center justify-between gap-2">
      <StatusBadge label={statusLabel} tone={statusTone} />
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
        {docType}
      </p>
    </div>
    <p className="mb-0.5 text-sm font-medium text-[var(--erp-text-secondary)]">{docNumber}</p>
    <p className="mb-4 text-2xl font-bold tabular-nums text-[var(--erp-text-primary)]">{amount}</p>
    <p className="text-xs text-[var(--erp-text-muted)]">
      Requester:{" "}
      <span className="font-medium text-[var(--erp-text-secondary)]">{requester}</span>
    </p>
    {helperText && (
      <p className="mt-3 border-t border-[var(--erp-border-muted)] pt-2 text-xs text-[var(--erp-text-muted)]">
        {helperText}
      </p>
    )}
  </div>
);

MobileApprovalSummaryCard.displayName = "MobileApprovalSummaryCard";

// ─────────────────────────────────────────────────────────────────────────────
// MobileApprovalTimeline
// ─────────────────────────────────────────────────────────────────────────────

export interface MobileApprovalTimelineProps {
  steps: readonly ApprovalStep[];
  className?: string;
}

const timelineDotClass = (status: ApprovalStatus): string => {
  if (status === "approved")
    return "h-2.5 w-2.5 rounded-full bg-[var(--erp-status-success-fg)] ring-2 ring-[var(--erp-status-success-bg)]";
  if (status === "pending")
    return "h-3 w-3 rounded-full bg-[var(--erp-status-info-fg)] ring-2 ring-[var(--erp-status-info-bg)]";
  if (status === "rejected")
    return "h-2.5 w-2.5 rounded-full bg-[var(--erp-status-danger-fg)]";
  return "h-2.5 w-2.5 rounded-full border-2 border-[var(--erp-border-strong)] bg-[var(--erp-surface-card)]";
};

const timelineLabelClass = (status: ApprovalStatus): string =>
  status === "not_started" || status === "cancelled"
    ? "text-[var(--erp-text-muted)]"
    : "text-[var(--erp-text-primary)]";

const timelineStateLabel = (
  status: ApprovalStatus,
): { text: string; className: string } => {
  if (status === "approved")
    return { text: "Completed", className: "text-[var(--erp-status-success-fg)]" };
  if (status === "pending")
    return { text: "In review", className: "text-[var(--erp-status-info-fg)]" };
  if (status === "rejected")
    return { text: "Rejected", className: "text-[var(--erp-status-danger-fg)]" };
  if (status === "changes_requested")
    return { text: "Changes requested", className: "text-[var(--erp-status-warning-fg)]" };
  if (status === "cancelled")
    return { text: "Cancelled", className: "text-[var(--erp-text-muted)]" };
  return { text: "Not started", className: "text-[var(--erp-text-muted)]" };
};

export const MobileApprovalTimeline = ({
  steps,
  className,
}: MobileApprovalTimelineProps) => (
  <div
    data-component="MobileApprovalTimeline"
    className={cn(
      "rounded-[var(--erp-radius-card)] border border-[var(--erp-border-muted)] bg-[var(--erp-surface-card)] px-4 py-3 shadow-[var(--erp-shadow-xs)]",
      className,
    )}
  >
    <p className="mb-3 text-xs font-semibold text-[var(--erp-text-secondary)]">Approval progress</p>
    <ol className="space-y-0">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const stateLabel = timelineStateLabel(step.status);
        return (
          <li key={step.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={cn("mt-0.5 shrink-0", timelineDotClass(step.status))} />
              {!isLast && (
                <div
                  className="my-1 w-px flex-1 bg-[var(--erp-border-muted)]"
                  style={{ minHeight: "1.5rem" }}
                />
              )}
            </div>
            <div className={cn("flex flex-1 flex-col gap-0.5", !isLast && "pb-3")}>
              <p className={cn("text-sm font-medium leading-tight", timelineLabelClass(step.status))}>
                {step.label}
              </p>
              <div className="flex items-center gap-2">
                <span className={cn("text-xs", stateLabel.className)}>{stateLabel.text}</span>
                {step.actor && (
                  <span className="text-xs text-[var(--erp-text-muted)]">
                    · {step.actor.displayName}
                  </span>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  </div>
);

MobileApprovalTimeline.displayName = "MobileApprovalTimeline";

// ─────────────────────────────────────────────────────────────────────────────
// MobileApprovalCommentList
// ─────────────────────────────────────────────────────────────────────────────

export interface MobileApprovalCommentListProps {
  comments: readonly ApprovalComment[];
  className?: string;
}

export const MobileApprovalCommentList = ({
  comments,
  className,
}: MobileApprovalCommentListProps) => {
  if (comments.length === 0) return null;
  return (
    <div data-component="MobileApprovalCommentList" className={cn("space-y-2", className)}>
      <p className="text-xs font-semibold text-[var(--erp-text-secondary)]">Notes</p>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-muted)] bg-[var(--erp-surface-card)] px-3 py-3"
        >
          <p className="mb-0.5 text-xs font-semibold text-[var(--erp-text-primary)]">
            {comment.actor.displayName}
          </p>
          <p className="text-sm text-[var(--erp-text-secondary)]">{comment.message}</p>
          <p className="mt-1 text-[10px] text-[var(--erp-text-muted)]">
            {new Date(comment.createdAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

MobileApprovalCommentList.displayName = "MobileApprovalCommentList";
