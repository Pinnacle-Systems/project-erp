import type {
  WorkflowActionCapability,
} from "@erp-ui-platform/capability-contracts";
import type { TransactionStatus } from "@erp-ui-platform/transaction-shell";

export const cap = (
  decision: WorkflowActionCapability["decision"],
  msg?: string,
): WorkflowActionCapability => ({
  decision,
  available: decision === "allowed",
  visible: decision !== "hidden",
  disabled: decision !== "allowed",
  riskLevel: decision === "blocked" ? "high" : "low",
  reason: msg ? { code: "story", message: msg } : undefined,
});

export const statusTone: Record<
  TransactionStatus,
  "default" | "info" | "warning" | "success" | "danger" | "muted"
> = {
  draft: "default",
  submitted: "info",
  pendingApproval: "warning",
  approved: "success",
  rejected: "danger",
  posted: "success",
  cancelled: "muted",
  completed: "success",
  onHold: "warning",
};
