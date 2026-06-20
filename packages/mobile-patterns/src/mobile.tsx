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

// ─────────────────────────────────────────────────────────────────────────────
// Tone helpers
//
// Status accents (success / info / danger / warning) are sourced from the
// existing --erp-text-* tokens rather than raw Tailwind palette utilities.
// Those tokens are redefined under `.dark` in theme.css, so anything built
// from them adapts to dark mode automatically — no `dark:` variants needed.
//
// Every class below is a complete literal string. Tailwind's static scanner
// only generates CSS for arbitrary-value classes it can find verbatim in
// source — a template-built class (e.g. `` `bg-[var(${token})]` ``) never
// appears as literal text, so it silently produces no CSS. These lookup
// tables exist specifically so each class stays scannable.
// ─────────────────────────────────────────────────────────────────────────────

type StatusTone = "success" | "info" | "danger" | "warning";

const TONE_TEXT_CLASS = {
  success: "text-[var(--erp-text-success)]",
  info: "text-[var(--erp-text-info)]",
  danger: "text-[var(--erp-text-danger)]",
  warning: "text-[var(--erp-text-warning)]",
} as const satisfies Record<StatusTone, string>;

const TONE_BG_CLASS = {
  success: "bg-[var(--erp-text-success)]",
  info: "bg-[var(--erp-text-info)]",
  danger: "bg-[var(--erp-text-danger)]",
  warning: "bg-[var(--erp-text-warning)]",
} as const satisfies Record<StatusTone, string>;

const TONE_SURFACE_CLASS = {
  success:
    "border-[color-mix(in_srgb,var(--erp-text-success)_20%,transparent)] bg-[color-mix(in_srgb,var(--erp-text-success)_10%,transparent)]",
  info:
    "border-[color-mix(in_srgb,var(--erp-text-info)_20%,transparent)] bg-[color-mix(in_srgb,var(--erp-text-info)_10%,transparent)]",
  danger:
    "border-[color-mix(in_srgb,var(--erp-text-danger)_20%,transparent)] bg-[color-mix(in_srgb,var(--erp-text-danger)_10%,transparent)]",
  warning:
    "border-[color-mix(in_srgb,var(--erp-text-warning)_20%,transparent)] bg-[color-mix(in_srgb,var(--erp-text-warning)_10%,transparent)]",
} as const satisfies Record<StatusTone, string>;

const TONE_RING_CLASS = {
  success: "ring-[color-mix(in_srgb,var(--erp-text-success)_20%,transparent)]",
  info: "ring-[color-mix(in_srgb,var(--erp-text-info)_20%,transparent)]",
  danger: "ring-[color-mix(in_srgb,var(--erp-text-danger)_20%,transparent)]",
  warning: "ring-[color-mix(in_srgb,var(--erp-text-warning)_20%,transparent)]",
} as const satisfies Record<StatusTone, string>;

/** Solid accent — text or fill color taken directly from the tone token. */
const toneAccentClass = (tone: StatusTone, property: "text" | "bg" = "text"): string =>
  property === "text" ? TONE_TEXT_CLASS[tone] : TONE_BG_CLASS[tone];

/** Soft tinted surface (border + background) for status cards/rows. */
const toneSurfaceClass = (tone: StatusTone): string => TONE_SURFACE_CLASS[tone];

/** Soft tinted ring, e.g. around a status dot. */
const toneRingClass = (tone: StatusTone): string => TONE_RING_CLASS[tone];

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
      "mx-auto flex min-h-[44rem] w-full max-w-[27rem] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-xl",
      className,
    )}
  >
    <div className="flex items-center justify-between bg-surface-inverse px-6 py-2 text-xs font-medium text-foreground-inverse">
      <span>9:41</span>
      <span className="tracking-wide">LTE 100%</span>
    </div>
    <header className="flex h-[var(--erp-shell-mobile-header-height)] shrink-0 items-center gap-3 border-b border-border-subtle bg-surface px-4 py-3">
      {backLabel && (
        <button
          type="button"
          onClick={onBack}
          className="shrink-0 text-sm font-medium text-primary"
        >
          {backLabel}
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-semibold leading-tight text-foreground">
          {title}
        </h1>
        {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {status && <div className="shrink-0">{status}</div>}
    </header>
    <div className={cn("min-h-0 flex-1 overflow-y-auto bg-background", contentClassName)}>
      {children}
    </div>
    {bottomBar}
    <div className="flex shrink-0 justify-center bg-surface py-2">
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
            field.tone === "warning" && toneSurfaceClass("warning"),
            field.tone === "danger" && toneSurfaceClass("danger"),
            field.tone === "info" && toneSurfaceClass("info"),
            (!field.tone || field.tone === "default") &&
              "border-border-subtle bg-background",
          )}
        >
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            {field.label}
          </p>
          <div className="mt-0.5 text-sm font-medium text-foreground">{field.value}</div>
        </div>
      ))}
    </div>
    {totals && (
      <div className={cn("rounded-xl border p-3", toneSurfaceClass("info"))}>{totals}</div>
    )}
    {lines.length > 0 && (
      <section>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-muted-foreground">Lines</p>
          <Badge variant="muted">{readOnlyLabel}</Badge>
        </div>
        <div className="space-y-2">
          {lines.map((line) => (
            <div
              key={line.id}
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl border bg-surface px-3 py-3",
                line.tone === "warning" && toneSurfaceClass("warning"),
                line.tone === "danger" && toneSurfaceClass("danger"),
                line.tone === "success" && toneSurfaceClass("success"),
                (!line.tone || line.tone === "default") && "border-border",
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{line.title}</p>
                {line.description && (
                  <p className="truncate text-xs text-muted-foreground">{line.description}</p>
                )}
              </div>
              <div className="shrink-0 text-right text-xs text-muted-foreground">
                {line.meta}
                {line.status && <div className="mt-1 flex justify-end">{line.status}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
    {desktopEditMessage && (
      <div className="rounded-xl border border-border bg-surface px-3 py-3 text-xs text-muted-foreground">
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
    className={cn("shrink-0 border-t border-border bg-surface px-4 py-3", className)}
  >
    {helperText && <div className="mb-2 text-xs text-muted-foreground">{helperText}</div>}
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
  <div data-component="MobileApprovalFlow" className={cn("bg-surface", className)}>
    <div className="border-b border-border-subtle px-4 py-3">
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
    <div className="relative flex h-80 shrink-0 items-center justify-center bg-surface-inverse text-foreground-inverse">
      {state === "ready" && (
        <>
          <FrameCorner className="left-10 top-8 rounded-tl border-l-2 border-t-2" />
          <FrameCorner className="right-10 top-8 rounded-tr border-r-2 border-t-2" />
          <FrameCorner className="bottom-8 left-10 rounded-bl border-b-2 border-l-2" />
          <FrameCorner className="bottom-8 right-10 rounded-br border-b-2 border-r-2" />
          <p className="px-10 text-center text-xs text-foreground-inverse/65">{description}</p>
        </>
      )}
      {state === "scanning" && (
        <div className="flex flex-col items-center gap-3 text-sm font-medium">
          <span className="h-8 w-8 motion-safe:animate-spin rounded-full border-2 border-foreground-inverse/30 border-t-foreground-inverse" />
          Scanning
          <div className="absolute left-12 right-12 top-1/2 h-0.5 bg-primary shadow-[0_0_12px_var(--erp-color-primary-soft)]" />
        </div>
      )}
      {state === "captured" && (
        <div className="flex flex-col items-center gap-2">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full text-2xl",
              toneAccentClass("success", "bg"),
            )}
          >
            ✓
          </div>
          <p className="text-sm font-medium">{capturedLabel}</p>
        </div>
      )}
      {state === "error" && (
        <div className="mx-6 rounded-xl bg-surface p-4 text-center text-muted-foreground">
          <p className="text-sm font-semibold">Camera unavailable</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Camera access can be connected by the host app later.
          </p>
        </div>
      )}
    </div>
    <div className="flex-1 space-y-3 bg-background p-4">
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {reference && <p className="text-xs text-muted-foreground">Reference: {reference}</p>}
      </div>
      <div className="rounded-xl border border-border bg-surface p-3 text-xs text-muted-foreground">
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
  <div className={cn("absolute h-8 w-8 border-foreground-inverse", className)} />
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
      "rounded-card border border-border bg-[var(--erp-surface-raised)] p-4 shadow-card",
      className,
    )}
  >
    <div className="mb-3 flex items-center justify-between gap-2">
      <StatusBadge label={statusLabel} tone={statusTone} />
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        {docType}
      </p>
    </div>
    <p className="mb-0.5 text-sm font-medium text-muted-foreground">{docNumber}</p>
    <p className="mb-4 text-2xl font-bold tabular-nums text-foreground">{amount}</p>
    <p className="text-xs text-muted-foreground">
      Requester:{" "}
      <span className="font-medium text-muted-foreground">{requester}</span>
    </p>
    {helperText && (
      <p className="mt-3 border-t border-border-subtle pt-2 text-xs text-muted-foreground">
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
    return cn(
      "h-2.5 w-2.5 rounded-full ring-2",
      toneAccentClass("success", "bg"),
      toneRingClass("success"),
    );
  if (status === "pending")
    return cn(
      "h-3 w-3 rounded-full ring-2",
      toneAccentClass("info", "bg"),
      toneRingClass("info"),
    );
  if (status === "rejected") return cn("h-2.5 w-2.5 rounded-full", toneAccentClass("danger", "bg"));
  return "h-2.5 w-2.5 rounded-full border-2 border-border-strong bg-surface";
};

const timelineLabelClass = (status: ApprovalStatus): string =>
  status === "not_started" || status === "cancelled"
    ? "text-muted-foreground"
    : "text-foreground";

const TIMELINE_STATUS_TONE: Partial<Record<ApprovalStatus, StatusTone>> = {
  approved: "success",
  pending: "info",
  rejected: "danger",
  changes_requested: "warning",
};

const TIMELINE_STATUS_TEXT: Record<ApprovalStatus, string> = {
  not_started: "Not started",
  pending: "In review",
  approved: "Completed",
  rejected: "Rejected",
  changes_requested: "Changes requested",
  cancelled: "Cancelled",
};

const timelineStateLabelClass = (
  status: ApprovalStatus,
): { text: string; className: string } => {
  const tone = TIMELINE_STATUS_TONE[status];
  return {
    text: TIMELINE_STATUS_TEXT[status],
    className: tone ? toneAccentClass(tone, "text") : "text-muted-foreground",
  };
};

export const MobileApprovalTimeline = ({
  steps,
  className,
}: MobileApprovalTimelineProps) => (
  <div
    data-component="MobileApprovalTimeline"
    className={cn(
      "rounded-card border border-border-subtle bg-surface px-4 py-3 shadow-[var(--erp-shadow-xs)]",
      className,
    )}
  >
    <p className="mb-3 text-xs font-semibold text-muted-foreground">Approval progress</p>
    <ol className="space-y-0">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const stateLabel = timelineStateLabelClass(step.status);
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
                  <span className="text-xs text-muted-foreground">
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
      <p className="text-xs font-semibold text-muted-foreground">Notes</p>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-card border border-border-subtle bg-surface px-3 py-3"
        >
          <p className="mb-0.5 text-xs font-semibold text-foreground">
            {comment.actor.displayName}
          </p>
          <p className="text-sm text-muted-foreground">{comment.message}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
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
