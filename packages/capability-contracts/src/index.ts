export type Shell = "desktop" | "mobile" | "tablet";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type CapabilityContext = {
  userId: string;
  role: string;
  tenantId: string;
  shell: Shell;
  module: string;
  documentType: string;
  workflowState: string;
  documentStatus: string;
  riskLevel: RiskLevel;
  featureFlags: Record<string, boolean>;
};

export type CapabilityResult = {
  available: boolean;
  visible: boolean;
  disabled: boolean;
  reason?: string;
  riskLevel?: RiskLevel;
};
