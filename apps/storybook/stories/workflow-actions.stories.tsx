import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  filterActionsByCapabilities,
  type WorkflowAction,
} from "@erp-ui-platform/workflow-actions";
import type {
  BaseCapabilities,
  WorkflowActionCapability,
} from "@erp-ui-platform/capability-contracts";
import {
  Button,
  TooltipProvider,
  Badge,
} from "@erp-ui-platform/primitives";
import { ConfirmDialog, StatusBadge } from "@erp-ui-platform/app-components";
import { cap } from "../utils/demoCapabilities";
import { variantMap, ActionButton } from "../utils/demoActions";

const meta = {
  title: "Patterns/Workflow Actions",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── shared fixtures ──────────────────────────────────────────────────────────

const stdCaps: BaseCapabilities = {
  canView: cap("allowed"),
  canCreate: cap("allowed"),
  canEdit: cap("allowed"),
  canEditHeader: cap("allowed"),
  canEditLines: cap("allowed"),
  canDelete: cap("blocked", "Delete requires supervisor approval."),
  canSubmit: cap("allowed"),
  canApprove: cap("disabled", "Not in approval state."),
  canReject: cap("disabled", "Not in approval state."),
  canPost: cap(
    "blocked",
    "Posting is blocked until all validation errors are resolved.",
  ),
  canCancel: cap("allowed"),
  canAttachDocuments: cap("allowed"),
  canComment: cap("allowed"),
  canScan: cap("hidden"),
  canBulkOperate: cap("hidden"),
  canExport: cap("allowed"),
};

const stdActions: WorkflowAction[] = [
  {
    id: "save",
    label: "Save",
    variant: "primary",
    placement: "primary",
    requiredCapability: "canEdit",
  },
  {
    id: "submit",
    label: "Submit",
    variant: "secondary",
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
    id: "delete",
    label: "Delete",
    variant: "danger",
    placement: "overflow",
    requiredCapability: "canDelete",
  },
  {
    id: "export",
    label: "Export",
    variant: "ghost",
    placement: "overflow",
    requiredCapability: "canExport",
  },
];

// ── stories ───────────────────────────────────────────────────────────────────

export const DesktopActionBar: Story = {
  render: () => {
    const resolved = filterActionsByCapabilities(stdActions, stdCaps, "desktop");
    const primary = resolved.filter((a) => a.placement === "primary");
    const secondary = resolved.filter((a) => a.placement === "secondary");
    const overflow = resolved.filter((a) => a.placement === "overflow");

    return (
      <TooltipProvider>
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-neutral-800">
                Sales Invoice SI-1001
              </span>
              <StatusBadge label="Submitted" tone="info" />
            </div>
            <div className="flex items-center gap-2">
              {overflow.map((a) => (
                <ActionButton key={a.id} action={a} />
              ))}
              <div className="w-px h-4 bg-neutral-200" />
              {secondary.map((a) => (
                <ActionButton key={a.id} action={a} />
              ))}
              {primary.map((a) => (
                <ActionButton key={a.id} action={a} />
              ))}
            </div>
          </div>
          <div className="px-4 py-10 text-center text-xs text-neutral-400">
            Document body area
          </div>
        </div>
      </TooltipProvider>
    );
  },
};

export const MobileBottomBar: Story = {
  render: () => {
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
        variant: "ghost",
        placement: "primary",
        requiredCapability: "canComment",
      },
    ];
    const mobileCaps: BaseCapabilities = {
      ...stdCaps,
      canApprove: cap("allowed"),
      canReject: cap("allowed"),
      canComment: cap("allowed"),
    };
    const resolved = filterActionsByCapabilities(mobileActions, mobileCaps, "mobile");

    return (
      <div
        className="max-w-sm mx-auto bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 relative"
        style={{ minHeight: 360 }}
      >
        <div className="px-4 py-3 border-b border-neutral-200 bg-white flex items-center gap-2">
          <span className="text-sm font-semibold text-neutral-800">
            Purchase Order PO-0841
          </span>
          <StatusBadge label="Pending" tone="warning" />
        </div>
        <div className="px-4 py-4 text-xs text-neutral-400">
          Document summary
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-white border-t border-neutral-200">
          {resolved.map((a) => (
            <Button
              key={a.id}
              variant={variantMap[a.variant] ?? "secondary"}
              density="touch"
              width="fill"
              disabled={a.disabled}
              className="flex-1"
            >
              {a.label}
            </Button>
          ))}
        </div>
      </div>
    );
  },
};

export const DisabledWithReason: Story = {
  render: () => {
    const resolved = filterActionsByCapabilities(stdActions, stdCaps, "desktop");
    return (
      <TooltipProvider>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Hover over disabled buttons to see reason
            </p>
            <div className="flex flex-wrap gap-2">
              {resolved.map((a) => (
                <ActionButton key={a.id} action={a} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Resolved states
            </p>
            <table className="w-full text-xs border border-neutral-200 rounded-md overflow-hidden">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left px-3 py-2 font-medium text-neutral-500">Action</th>
                  <th className="text-left px-3 py-2 font-medium text-neutral-500">State</th>
                  <th className="text-left px-3 py-2 font-medium text-neutral-500">Reason</th>
                </tr>
              </thead>
              <tbody>
                {resolved.map((a) => (
                  <tr key={a.id} className="border-b border-neutral-50">
                    <td className="px-3 py-2 text-neutral-700">{a.label}</td>
                    <td className="px-3 py-2">
                      <Badge variant={a.disabled ? "danger" : "success"}>
                        {a.disabled ? "disabled" : "allowed"}
                      </Badge>
                    </td>
                    <td className="px-3 py-2 text-neutral-500">
                      {a.reason?.message ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TooltipProvider>
    );
  },
};

export const HighRiskConfirmation: Story = {
  args: { open: false } as never,
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
      <TooltipProvider>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-500">
            High-risk actions (riskLevel: &quot;high&quot;,{" "}
            requiresConfirmation: true) show a confirmation dialog before
            executing.
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              density="compact"
              width="hug"
              onClick={() => setOpen(true)}
            >
              Post Document
            </Button>
            <Badge variant="warning">high-risk</Badge>
          </div>
          <ConfirmDialog
            open={open}
            onOpenChange={setOpen}
            title="Post this document?"
            description="Posting is irreversible. The document will be committed to the general ledger and locked for editing."
            confirmLabel="Post"
            cancelLabel="Cancel"
            destructive
            loading={loading}
            onConfirm={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setOpen(false);
              }, 1500);
            }}
          />
        </div>
      </TooltipProvider>
    );
  },
};

export const PostBlockedByCapability: Story = {
  render: () => {
    const postAction: WorkflowAction[] = [
      {
        id: "post",
        label: "Post",
        variant: "danger",
        placement: "primary",
        requiredCapability: "canPost",
        requiresConfirmation: true,
      },
    ];
    const resolved = filterActionsByCapabilities(postAction, stdCaps, "desktop");

    return (
      <TooltipProvider>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-500">
            The Post action is blocked by the capability system — validation
            must be resolved first.
          </p>
          <div className="flex items-center gap-2">
            {resolved.map((a) => (
              <ActionButton key={a.id} action={a} />
            ))}
            <Badge variant="danger">blocked</Badge>
          </div>
          <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
            {stdCaps.canPost.reason?.message}
          </div>
        </div>
      </TooltipProvider>
    );
  },
};

export const CapabilityStates: Story = {
  render: () => {
    const rows: {
      action: string;
      decision: WorkflowActionCapability["decision"];
      reason?: string;
    }[] = [
      { action: "View", decision: "allowed" },
      { action: "Edit", decision: "allowed" },
      { action: "Submit", decision: "allowed" },
      { action: "Approve", decision: "disabled", reason: "Not in approval state." },
      { action: "Post", decision: "blocked", reason: "Validation must be resolved." },
      { action: "Delete", decision: "blocked", reason: "Requires supervisor approval." },
      { action: "Scan (mobile)", decision: "blocked", reason: "Desktop only." },
      { action: "Bulk operate", decision: "hidden" },
    ];

    const toneMap: Record<
      WorkflowActionCapability["decision"],
      "success" | "warning" | "danger" | "muted"
    > = {
      allowed: "success",
      disabled: "warning",
      blocked: "danger",
      hidden: "muted",
    };

    return (
      <div className="max-w-xl">
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-neutral-200 bg-neutral-50">
            <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">
              Capability decisions
            </span>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="text-left px-4 py-2 text-neutral-500 font-medium">Action</th>
                <th className="text-left px-4 py-2 text-neutral-500 font-medium">Decision</th>
                <th className="text-left px-4 py-2 text-neutral-500 font-medium">Reason</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.action} className="border-b border-neutral-50">
                  <td className="px-4 py-2.5 text-neutral-700">{row.action}</td>
                  <td className="px-4 py-2.5">
                    <StatusBadge
                      label={row.decision}
                      tone={toneMap[row.decision]}
                    />
                  </td>
                  <td className="px-4 py-2.5 text-neutral-400">
                    {row.reason ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};
