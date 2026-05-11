export type ShellType = "desktop" | "mobile" | "tablet";

export type RiskLevel = "low" | "medium" | "high";

export type CapabilityDecision =
  | "allowed"
  | "disabled"
  | "blocked"
  | "hidden";

export type CapabilityReason = {
  code: string;
  message: string;
};

export type CapabilityContext = {
  userId: string;
  role: string;
  tenantId: string;
  shell: ShellType;
  module: string;
  documentType: string;
  workflowState: string;
  documentStatus: string;
  riskLevel: RiskLevel;
  featureFlags: Record<string, boolean>;
  permissions?: readonly string[];
};

export type WorkflowActionCapability = {
  decision: CapabilityDecision;
  available: boolean;
  visible: boolean;
  disabled: boolean;
  riskLevel: RiskLevel;
  reason?: CapabilityReason;
};

export type BaseCapabilities = {
  canView: WorkflowActionCapability;
  canCreate: WorkflowActionCapability;
  canEdit: WorkflowActionCapability;
  canEditHeader: WorkflowActionCapability;
  canEditLines: WorkflowActionCapability;
  canDelete: WorkflowActionCapability;
  canSubmit: WorkflowActionCapability;
  canApprove: WorkflowActionCapability;
  canReject: WorkflowActionCapability;
  canPost: WorkflowActionCapability;
  canCancel: WorkflowActionCapability;
  canAttachDocuments: WorkflowActionCapability;
  canComment: WorkflowActionCapability;
  canScan: WorkflowActionCapability;
  canBulkOperate: WorkflowActionCapability;
  canExport: WorkflowActionCapability;
};

export type CapabilityResolver<TCapabilities extends BaseCapabilities> = (
  context: CapabilityContext,
) => TCapabilities;

export type Shell = ShellType;
export type CapabilityResult = WorkflowActionCapability;

const allowed = (riskLevel: RiskLevel = "low"): WorkflowActionCapability => ({
  decision: "allowed",
  available: true,
  visible: true,
  disabled: false,
  riskLevel,
});

const disabled = (
  reason: CapabilityReason,
  riskLevel: RiskLevel = "low",
): WorkflowActionCapability => ({
  decision: "disabled",
  available: false,
  visible: true,
  disabled: true,
  riskLevel,
  reason,
});

const blocked = (
  reason: CapabilityReason,
  riskLevel: RiskLevel = "low",
): WorkflowActionCapability => ({
  decision: "blocked",
  available: false,
  visible: true,
  disabled: true,
  riskLevel,
  reason,
});

const hidden = (
  reason: CapabilityReason,
  riskLevel: RiskLevel = "low",
): WorkflowActionCapability => ({
  decision: "hidden",
  available: false,
  visible: false,
  disabled: true,
  riskLevel,
  reason,
});

const reason = (code: string, message: string): CapabilityReason => ({
  code,
  message,
});

const hasPermission = (
  context: CapabilityContext,
  permission: string,
): boolean =>
  context.permissions?.includes(permission) ?? context.role === "admin";

const createBaseCapabilities = (
  context: CapabilityContext,
): BaseCapabilities => ({
  canView: hasPermission(context, "view")
    ? allowed("low")
    : blocked(reason("permission.required", "View permission is required.")),
  canCreate: hasPermission(context, "create")
    ? allowed("medium")
    : blocked(reason("permission.required", "Create permission is required.")),
  canEdit: hasPermission(context, "edit")
    ? allowed("medium")
    : blocked(reason("permission.required", "Edit permission is required.")),
  canEditHeader: hasPermission(context, "edit")
    ? allowed("medium")
    : blocked(reason("permission.required", "Edit permission is required.")),
  canEditLines: hasPermission(context, "edit")
    ? allowed("medium")
    : blocked(reason("permission.required", "Edit permission is required.")),
  canDelete: hasPermission(context, "delete")
    ? allowed("high")
    : hidden(reason("permission.required", "Delete permission is required."), "high"),
  canSubmit: hasPermission(context, "submit")
    ? allowed("medium")
    : blocked(reason("permission.required", "Submit permission is required.")),
  canApprove: hasPermission(context, "approve")
    ? allowed("medium")
    : blocked(reason("permission.required", "Approve permission is required.")),
  canReject: hasPermission(context, "reject")
    ? allowed("medium")
    : blocked(reason("permission.required", "Reject permission is required.")),
  canPost: hasPermission(context, "post")
    ? allowed("high")
    : blocked(reason("permission.required", "Post permission is required."), "high"),
  canCancel: hasPermission(context, "cancel")
    ? allowed("medium")
    : blocked(reason("permission.required", "Cancel permission is required.")),
  canAttachDocuments: hasPermission(context, "attach")
    ? allowed("low")
    : blocked(reason("permission.required", "Attach permission is required.")),
  canComment: hasPermission(context, "comment")
    ? allowed("low")
    : blocked(reason("permission.required", "Comment permission is required.")),
  canScan: hasPermission(context, "scan")
    ? allowed("low")
    : hidden(reason("permission.required", "Scan permission is required.")),
  canBulkOperate: hasPermission(context, "bulk")
    ? allowed("high")
    : hidden(reason("permission.required", "Bulk permission is required."), "high"),
  canExport: hasPermission(context, "export")
    ? allowed("low")
    : hidden(reason("permission.required", "Export permission is required.")),
});

const desktopOnly = (action: string, riskLevel: RiskLevel = "high") =>
  blocked(
    reason("shell.desktopOnly", `${action} is available on desktop only.`),
    riskLevel,
  );

const notInWorkflowState = (action: string) =>
  disabled(
    reason(
      "workflow.stateUnavailable",
      `${action} is not available in the current workflow state.`,
    ),
  );

/**
 * Example resolver only. Consuming apps should implement client-specific
 * permission mapping, workflow rules, and backend enforcement outside this
 * package.
 */
export const resolveSalesInvoiceCapabilities: CapabilityResolver<
  BaseCapabilities
> = (context) => {
  const capabilities = createBaseCapabilities(context);
  const isMobile = context.shell === "mobile";
  const isPendingApproval = context.workflowState === "pendingApproval";

  if (isMobile) {
    capabilities.canEditLines = desktopOnly("Invoice line editing");
    capabilities.canPost = desktopOnly("Invoice posting");
    capabilities.canBulkOperate = hidden(
      reason("shell.mobileUnsupported", "Bulk operations are not available on mobile."),
      "high",
    );
    capabilities.canDelete = hidden(
      reason("shell.mobileUnsupported", "Delete is not available on mobile."),
      "high",
    );
  }

  if (!isPendingApproval) {
    capabilities.canApprove = notInWorkflowState("Approve");
    capabilities.canReject = notInWorkflowState("Reject");
  }

  return capabilities;
};

/**
 * Example resolver only. Journal entry line editing and posting are high-risk
 * accounting actions and are blocked on mobile by default.
 */
export const resolveJournalEntryCapabilities: CapabilityResolver<
  BaseCapabilities
> = (context) => {
  const capabilities = createBaseCapabilities(context);
  const isMobile = context.shell === "mobile";
  const isPendingApproval = context.workflowState === "pendingApproval";

  if (isMobile) {
    capabilities.canCreate = desktopOnly("Full journal entry creation");
    capabilities.canEdit = desktopOnly("Journal editing");
    capabilities.canEditHeader = desktopOnly("Journal header editing");
    capabilities.canEditLines = desktopOnly("Debit and credit line editing");
    capabilities.canSubmit = desktopOnly("Journal submission", "medium");
    capabilities.canPost = desktopOnly("Ledger posting");
    capabilities.canCancel = desktopOnly("Journal cancellation", "medium");
    capabilities.canBulkOperate = hidden(
      reason("shell.mobileUnsupported", "Bulk operations are not available on mobile."),
      "high",
    );
  }

  if (!isPendingApproval) {
    capabilities.canApprove = notInWorkflowState("Approve");
    capabilities.canReject = notInWorkflowState("Reject");
  }

  return capabilities;
};

/**
 * Example resolver only. Leave approval is a bounded workflow that is usually
 * suitable for mobile approval, rejection, comments, and attachments.
 */
export const resolveLeaveApprovalCapabilities: CapabilityResolver<
  BaseCapabilities
> = (context) => {
  const capabilities = createBaseCapabilities(context);
  const isPendingApproval = context.workflowState === "pendingApproval";

  capabilities.canEditLines = hidden(
    reason("document.noLines", "Leave requests do not use editable line items."),
  );
  capabilities.canPost = hidden(
    reason("document.noPosting", "Leave requests do not use posting actions."),
  );
  capabilities.canBulkOperate = hidden(
    reason("workflow.noBulk", "Bulk actions are not part of leave approval."),
  );
  capabilities.canScan = hidden(
    reason("workflow.noScan", "Scanning is not part of leave approval."),
  );

  if (!isPendingApproval) {
    capabilities.canApprove = notInWorkflowState("Approve");
    capabilities.canReject = notInWorkflowState("Reject");
  }

  return capabilities;
};
