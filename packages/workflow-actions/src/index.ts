import type {
  BaseCapabilities,
  CapabilityReason,
  RiskLevel,
  ShellType,
  WorkflowActionCapability,
} from "@erp-ui-platform/capability-contracts";

export type WorkflowActionId = string;

export type WorkflowActionVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "link";

export type WorkflowActionPlacement =
  | "primary"
  | "secondary"
  | "overflow"
  | "footer"
  | "contextual";

export type WorkflowActionState = {
  disabled?: boolean;
  hidden?: boolean;
  reason?: CapabilityReason;
};

export type WorkflowAction = {
  id: WorkflowActionId;
  label: string;
  iconKey?: string;
  variant: WorkflowActionVariant;
  placement: WorkflowActionPlacement;
  riskLevel?: RiskLevel;
  requiredCapability?: keyof BaseCapabilities | string;
  availableOn?: readonly ShellType[];
  disabled?: boolean;
  hidden?: boolean;
  reason?: CapabilityReason;
  requiresConfirmation?: boolean;
  confirmationTitle?: string;
  confirmationMessage?: string;
};

export type WorkflowActionGroup = {
  id: string;
  label?: string;
  placement?: WorkflowActionPlacement;
  actions: readonly WorkflowAction[];
};

export type WorkflowActionHandler<TAction extends WorkflowAction = WorkflowAction> = (
  action: TAction,
) => void | Promise<void>;

export type ResolveWorkflowActionsInput<
  TCapabilities extends Record<string, WorkflowActionCapability> = BaseCapabilities,
> = {
  actions: readonly WorkflowAction[];
  capabilities: TCapabilities;
  shell: ShellType;
};

export type ResolvedWorkflowAction = WorkflowAction & {
  disabled: boolean;
  hidden: boolean;
  reason?: CapabilityReason;
};

const capabilityForAction = <
  TCapabilities extends Record<string, WorkflowActionCapability>,
>(
  action: WorkflowAction,
  capabilities: TCapabilities,
): WorkflowActionCapability | undefined => {
  if (!action.requiredCapability) {
    return undefined;
  }

  return capabilities[action.requiredCapability];
};

const isAvailableOnShell = (
  action: WorkflowAction,
  shell: ShellType,
): boolean => !action.availableOn || action.availableOn.includes(shell);

export const filterActionsByCapabilities = <
  TCapabilities extends Record<string, WorkflowActionCapability>,
>(
  actions: readonly WorkflowAction[],
  capabilities: TCapabilities,
  shell: ShellType,
): ResolvedWorkflowAction[] =>
  actions.flatMap((action) => {
    if (action.hidden || !isAvailableOnShell(action, shell)) {
      return [];
    }

    const capability = capabilityForAction(action, capabilities);

    if (action.requiredCapability && !capability) {
      return [];
    }

    if (capability && (!capability.visible || capability.decision === "hidden")) {
      return [];
    }

    const capabilityBlocksAction =
      capability &&
      (!capability.available ||
        capability.disabled ||
        capability.decision === "blocked" ||
        capability.decision === "disabled");

    return [
      {
        ...action,
        disabled: action.disabled || Boolean(capabilityBlocksAction),
        hidden: false,
        reason: action.reason ?? capability?.reason,
        riskLevel: action.riskLevel ?? capability?.riskLevel,
      },
    ];
  });
