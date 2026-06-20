import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  MobileApprovalCommentList,
  MobileApprovalSummaryCard,
  MobileApprovalTimeline,
  MobileBottomActionBar,
  MobileDocumentSummary,
  MobileTaskShell,
  ScannerCapturePlaceholder,
} from "@erp-ui-platform/mobile-patterns";
import type { ApprovalStep, ApprovalComment } from "@erp-ui-platform/approval-ui";
import { StatusBadge } from "@erp-ui-platform/app-components";
import { APPROVAL_COMMENTS, APPROVAL_STEPS } from "../utils/demoData";

const meta = {
  title: "Patterns/Mobile",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── composition rules ─────────────────────────────────────────────────────────

const RULES = [
  {
    id: "task-first",
    number: "01",
    title: "Task-first, not desktop-compressed",
    body: "Each mobile screen presents one task. Do not collapse multi-tab desktop workflows into a single scrolling form. Use MobileTaskShell to enforce a single focused header, scrollable content, and a sticky action bar.",
    token: "MobileTaskShell",
  },
  {
    id: "summary-card",
    number: "02",
    title: "Summary cards for document identity",
    body: "MobileApprovalSummaryCard (or MobileDocumentSummary) provides the primary decision context at the top of the screen. The amount must be the most visually prominent number — the approver should know exactly what they are deciding on before reading the timeline or comments. Document type, number, and requester are secondary.",
    token: "MobileApprovalSummaryCard · MobileDocumentSummary",
  },
  {
    id: "timeline",
    number: "03",
    title: "Timelines for workflow progress",
    body: "MobileApprovalTimeline visualises where a document is in the approval chain. Approved steps use success tone, the current step uses info/primary tone, and pending steps use a muted indicator. Do not render step data as plain text rows.",
    token: "MobileApprovalTimeline",
  },
  {
    id: "comments",
    number: "04",
    title: "Comments as grouped cards",
    body: "MobileApprovalCommentList renders each reviewer or requester note as a distinct card: author name prominent, message in default text, timestamp in muted text. Do not render comments as a flat text stream or inside the summary card.",
    token: "MobileApprovalCommentList",
  },
  {
    id: "bottom-bar",
    number: "05",
    title: "Primary decisions in the bottom action bar",
    body: "MobileBottomActionBar places Approve, Reject, and Changes decisions in the thumb zone via MobileTaskShell's bottomBar slot. Primary actions must use touch density. Do not place decision buttons inline in the scrollable content area.",
    token: "MobileBottomActionBar",
  },
  {
    id: "density",
    number: "06",
    title: "Density controls rhythm, not capability",
    body: "Touch density increases spacing and touch target sizes. It does not show or hide features, change workflow permissions, or alter business rules. Use density='touch' on mobile screens; never use it to conditionally suppress actions.",
    token: "density=\"touch\"",
  },
] as const;

const RuleCard = ({
  number,
  title,
  body,
  token,
}: (typeof RULES)[number]) => (
  <div className="rounded-card border border-border bg-[var(--erp-surface-card)] p-4 shadow-[var(--erp-shadow-xs)]">
    <div className="mb-2 flex items-baseline gap-2">
      <span className="text-[10px] font-bold tabular-nums text-muted-foreground">
        {number}
      </span>
      <p className="text-sm font-semibold text-foreground">{title}</p>
    </div>
    <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{body}</p>
    <code className="rounded bg-[var(--erp-surface-raised)] px-1.5 py-0.5 text-[10px] text-muted-foreground">
      {token}
    </code>
  </div>
);

// ── story data ────────────────────────────────────────────────────────────────

const APPROVAL_STEPS_EXAMPLE: ApprovalStep[] = APPROVAL_STEPS;
const APPROVAL_COMMENTS_EXAMPLE: ApprovalComment[] = APPROVAL_COMMENTS;

const REVIEW_FIELDS = [
  { label: "Customer", value: "ABC Traders" },
  { label: "Return date", value: "14 May 2026" },
  { label: "Warehouse", value: "Main Warehouse" },
  { label: "Reason", value: "Defective goods" },
] as const;

// ── stories ───────────────────────────────────────────────────────────────────

export const CompositionPrimer: Story = {
  render: () => (
    <div
      className="mx-auto max-w-4xl space-y-6 p-6"
      style={{ background: "var(--erp-surface-page)" }}
    >
      <div className="rounded-card border border-border-subtle bg-[var(--erp-surface-raised)] p-5 shadow-card">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Patterns / Mobile
        </p>
        <h1 className="mb-2 text-lg font-semibold text-foreground">
          Mobile ERP Composition Grammar
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          ERP workflows on mobile are companion tasks: approve, review, capture, or comment — not
          full document authoring. Each screen should present one task clearly, with the decision
          action always reachable without scrolling. The rules below govern how the reusable mobile
          pattern components compose into screens.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RULES.map((rule) => (
          <RuleCard key={rule.id} {...rule} />
        ))}
      </div>

      <div className="rounded-card border border-border-subtle bg-[var(--erp-surface-card)] p-4">
        <p className="mb-2 text-xs font-semibold text-muted-foreground">
          Canonical screen anatomy
        </p>
        <div className="mx-auto max-w-xs space-y-1.5">
          {[
            { label: "MobileTaskShell header", bg: "var(--erp-surface-raised)", border: "var(--erp-border-default)" },
            { label: "MobileApprovalSummaryCard", bg: "var(--erp-surface-raised)", border: "var(--erp-color-primary-border)" },
            { label: "MobileApprovalTimeline", bg: "var(--erp-surface-card)", border: "var(--erp-border-muted)" },
            { label: "MobileApprovalCommentList", bg: "var(--erp-surface-card)", border: "var(--erp-border-muted)" },
            { label: "MobileBottomActionBar (sticky)", bg: "var(--erp-surface-raised)", border: "var(--erp-border-default)" },
          ].map(({ label, bg, border }) => (
            <div
              key={label}
              className="rounded px-3 py-2 text-xs text-muted-foreground"
              style={{ background: `var(${bg}, ${bg})`, border: `1px solid var(${border}, ${border})` }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const ApprovalTask: Story = {
  render: () => (
    <div className="flex justify-center py-6" style={{ background: "var(--erp-surface-page)" }}>
      <MobileTaskShell
        title="Approval"
        subtitle="PO-2024-0841 · Purchase Order"
        backLabel="‹ Back"
        status={<StatusBadge label="Pending Approval" tone="warning" />}
        bottomBar={
          <MobileBottomActionBar
            actions={[
              { id: "approve", label: "Approve", variant: "default" },
              { id: "changes", label: "Changes", variant: "secondary" },
              { id: "reject", label: "Reject", variant: "destructive" },
            ]}
          />
        }
      >
        <div className="space-y-3 p-4">
          {/*
           * Rule 02 — Summary card gives immediate document identity and decision context.
           * The approver sees what they are acting on before reading anything else.
           */}
          <MobileApprovalSummaryCard
            statusLabel="Pending Approval"
            statusTone="warning"
            docType="Purchase Order"
            docNumber="PO-2024-0841"
            amount="₹1,24,500.00"
            requester="A. Sharma"
            helperText="Awaiting Finance Review"
          />

          {/*
           * Rule 03 — Timeline shows approval chain progress with semantic tone per step.
           * approved → success (green), pending → info (blue), not_started → muted.
           */}
          <MobileApprovalTimeline steps={APPROVAL_STEPS_EXAMPLE} />

          {/*
           * Rule 04 — Each comment is a discrete card: author / message / timestamp.
           * Not a flat text stream, and never merged into the summary card.
           */}
          <MobileApprovalCommentList comments={APPROVAL_COMMENTS_EXAMPLE} />
        </div>
        {/*
         * Rule 05 — Actions are in the sticky bottom bar, always above the thumb line.
         * Approve uses primary variant, Changes uses secondary, Reject uses destructive.
         * Rule 06 — MobileBottomActionBar uses touch density automatically.
         */}
      </MobileTaskShell>
    </div>
  ),
};

export const ScannerAssistedTask: Story = {
  render: () => {
    const [scanState, setScanState] = useState<"ready" | "scanning" | "captured" | "error">(
      "ready",
    );

    return (
      <div className="flex justify-center py-6" style={{ background: "var(--erp-surface-page)" }}>
        <MobileTaskShell
          title="Scan Document"
          subtitle="SD-8821 · Delivery receipt"
          backLabel="‹ Back"
          /*
           * Rule 01 — Single focused task: capture a delivery note.
           * No inline form editing, no line items, no header fields.
           * ScannerCapturePlaceholder owns its own bottom action bar.
           */
        >
          <ScannerCapturePlaceholder
            reference="SD-8821"
            title="Delivery note capture"
            description="Position the delivery note inside the frame."
            state={scanState}
            onScan={() => {
              setScanState("scanning");
              setTimeout(() => setScanState("captured"), 1600);
            }}
            onReset={() => setScanState("ready")}
            onError={() => setScanState("error")}
          />
        </MobileTaskShell>
      </div>
    );
  },
};

export const ReviewTask: Story = {
  render: () => (
    <div className="flex justify-center py-6" style={{ background: "var(--erp-surface-page)" }}>
      <MobileTaskShell
        title="Review"
        subtitle="SR-108 · Sales Return"
        backLabel="‹ Back"
        status={<StatusBadge label="Submitted" tone="info" />}
        bottomBar={
          <MobileBottomActionBar
            actions={[
              { id: "approve", label: "Approve", variant: "default" },
              { id: "reject", label: "Reject", variant: "destructive" },
            ]}
            helperText="Line editing is available from the desktop workspace."
          />
        }
      >
        <div className="space-y-3 p-4">
          {/*
           * Rule 02 — MobileDocumentSummary provides document identity and field context.
           * totals carries the hero operational fact (items returned + pending credit).
           * lines render each returned item as a scannable card with a status badge.
           * desktopEditMessage is secondary — nudge without blocking the review flow.
           */}
          <MobileDocumentSummary
            fields={[...REVIEW_FIELDS]}
            totals={
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                    Items returned
                  </p>
                  <p className="text-2xl font-bold tabular-nums text-foreground">2</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                    Pending credit
                  </p>
                  <p className="text-2xl font-bold tabular-nums text-[var(--erp-text-warning)]">
                    ₹18,240
                  </p>
                </div>
              </div>
            }
            lines={[
              {
                id: "l1",
                title: "Widget A — 12 units",
                description: "Defective on arrival",
                meta: "₹9,600",
                status: <StatusBadge label="Pending credit" tone="warning" />,
              },
              {
                id: "l2",
                title: "Widget B — 8 units",
                description: "Wrong specification",
                meta: "₹8,640",
                status: <StatusBadge label="Pending credit" tone="warning" />,
              },
            ]}
            readOnlyLabel="Mobile review"
            desktopEditMessage="Quantity adjustments and line additions are available from the desktop workspace."
          />
        </div>
      </MobileTaskShell>
    </div>
  ),
};

// ── tone & status regression coverage ───────────────────────────────────────
// This story exists specifically to catch two classes of regression:
//   1. Tailwind-scanner regressions — arbitrary-value tone classes built with
//      template literals instead of static string literals silently produce
//      no CSS (a class can look right in source and still render unstyled).
//   2. Dark-mode tone regressions — a tone resolving to the wrong palette, or
//      to no color at all, under the "Mode" toolbar's dark setting.
// It deliberately exercises ApprovalStatus values (rejected, changes_requested)
// and field/line tone combinations that no other story in this file reaches.
// Toggle the Storybook "Mode" toolbar to dark when reviewing this story.

const TONE_COVERAGE_STEPS: ApprovalStep[] = [
  { id: "approved", label: "Approved step", status: "approved", actor: { id: "u1", displayName: "A. Rao" } },
  { id: "pending", label: "Pending step", status: "pending", actor: { id: "u2", displayName: "B. Chen" } },
  { id: "rejected", label: "Rejected step", status: "rejected", actor: { id: "u3", displayName: "C. Verma" } },
  {
    id: "changes_requested",
    label: "Changes requested step",
    status: "changes_requested",
    actor: { id: "u4", displayName: "D. Nair" },
  },
  { id: "not_started", label: "Not started step", status: "not_started", actor: { id: "u5", displayName: "E. Sharma" } },
  { id: "cancelled", label: "Cancelled step", status: "cancelled", actor: { id: "u6", displayName: "F. Iyer" } },
];

export const ToneAndStatusCoverage: Story = {
  render: () => (
    // bg-background (not the var(--erp-surface-page) used by sibling stories
    // above) on purpose — --erp-surface-page isn't redefined under `.dark`,
    // which would wash out the very tint contrast this story exists to check.
    <div className="mx-auto max-w-sm space-y-4 bg-background p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        Regression coverage — timeline statuses · field/line tones · scanner success
      </p>

      {/* All 6 ApprovalStatus values, including rejected / changes_requested. */}
      <MobileApprovalTimeline steps={TONE_COVERAGE_STEPS} />

      <MobileDocumentSummary
        // MobileDocumentField only supports warning / danger / info tones —
        // no "success" field tone exists, and one is not being added here.
        fields={[
          { label: "Default field", value: "—" },
          { label: "Warning field", value: "Variance", tone: "warning" },
          { label: "Danger field", value: "Blocked", tone: "danger" },
          { label: "Info field", value: "Submitted", tone: "info" },
        ]}
        // MobileDocumentLine only supports warning / danger / success tones —
        // no "info" line tone exists, and one is not being added here.
        lines={[
          { id: "l1", title: "Default line", meta: "—" },
          { id: "l2", title: "Warning line", meta: "Variance", tone: "warning" },
          { id: "l3", title: "Danger line", meta: "Blocked", tone: "danger" },
          { id: "l4", title: "Success line", meta: "Matched", tone: "success" },
        ]}
      />

      {/*
       * Captured state must render as a solid filled success circle, not a
       * bare checkmark with no fill — that silent-fill loss was exactly the
       * regression the Tailwind-scanner bug introduced.
       */}
      <ScannerCapturePlaceholder state="captured" capturedLabel="Captured" title="Scan" />
    </div>
  ),
};

export const AllCompositions: Story = {
  render: () => {
    const [scanState, setScanState] = useState<"ready" | "scanning" | "captured" | "error">(
      "ready",
    );

    return (
      <div
        className="grid gap-6 p-6 lg:grid-cols-3"
        style={{ background: "var(--erp-color-app-bg)" }}
      >
        {/* Approval */}
        <MobileTaskShell
          title="Approval"
          subtitle="PO-2024-0841 · Purchase Order"
          backLabel="‹ Back"
          status={<StatusBadge label="Pending Approval" tone="warning" />}
          bottomBar={
            <MobileBottomActionBar
              actions={[
                { id: "approve", label: "Approve", variant: "default" },
                { id: "changes", label: "Changes", variant: "secondary" },
                { id: "reject", label: "Reject", variant: "destructive" },
              ]}
            />
          }
        >
          <div className="space-y-3 p-4">
            <MobileApprovalSummaryCard
              statusLabel="Pending Approval"
              statusTone="warning"
              docType="Purchase Order"
              docNumber="PO-2024-0841"
              amount="₹1,24,500.00"
              requester="A. Sharma"
              helperText="Awaiting Finance Review"
            />
            <MobileApprovalTimeline steps={APPROVAL_STEPS_EXAMPLE} />
            <MobileApprovalCommentList comments={APPROVAL_COMMENTS_EXAMPLE} />
          </div>
        </MobileTaskShell>

        {/* Review */}
        <MobileTaskShell
          title="Review"
          subtitle="SR-108 · Sales Return"
          backLabel="‹ Back"
          status={<StatusBadge label="Submitted" tone="info" />}
          bottomBar={
            <MobileBottomActionBar
              actions={[
                { id: "approve", label: "Approve", variant: "default" },
                { id: "reject", label: "Reject", variant: "destructive" },
              ]}
              helperText="Line editing is available from the desktop workspace."
            />
          }
        >
          <div className="space-y-3 p-4">
            <MobileDocumentSummary
              fields={[...REVIEW_FIELDS]}
              totals={
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                      Items returned
                    </p>
                    <p className="text-2xl font-bold tabular-nums text-foreground">2</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                      Pending credit
                    </p>
                    <p className="text-2xl font-bold tabular-nums text-[var(--erp-text-warning)]">
                      ₹18,240
                    </p>
                  </div>
                </div>
              }
              lines={[
                {
                  id: "l1",
                  title: "Widget A — 12 units",
                  description: "Defective on arrival",
                  meta: "₹9,600",
                  status: <StatusBadge label="Pending credit" tone="warning" />,
                },
                {
                  id: "l2",
                  title: "Widget B — 8 units",
                  description: "Wrong specification",
                  meta: "₹8,640",
                  status: <StatusBadge label="Pending credit" tone="warning" />,
                },
              ]}
              readOnlyLabel="Mobile review"
              desktopEditMessage="Quantity adjustments and line additions are available from the desktop workspace."
            />
          </div>
        </MobileTaskShell>

        {/* Scanner */}
        <MobileTaskShell
          title="Scan Document"
          subtitle="SD-8821 · Delivery receipt"
          backLabel="‹ Back"
        >
          <ScannerCapturePlaceholder
            reference="SD-8821"
            title="Delivery note capture"
            description="Position the delivery note inside the frame."
            state={scanState}
            onScan={() => {
              setScanState("scanning");
              setTimeout(() => setScanState("captured"), 1600);
            }}
            onReset={() => setScanState("ready")}
            onError={() => setScanState("error")}
          />
        </MobileTaskShell>
      </div>
    );
  },
};
