import { describe, expect, it } from "vitest";

import {
  type CapabilityContext,
  resolveJournalEntryCapabilities,
  resolveLeaveApprovalCapabilities,
  resolveSalesInvoiceCapabilities,
} from "./index";

const baseContext: CapabilityContext = {
  userId: "user-1",
  role: "finance-user",
  tenantId: "tenant-1",
  shell: "desktop",
  module: "finance",
  documentType: "salesInvoice",
  workflowState: "pendingApproval",
  documentStatus: "submitted",
  riskLevel: "medium",
  featureFlags: {},
  permissions: [
    "view",
    "create",
    "edit",
    "delete",
    "submit",
    "approve",
    "reject",
    "post",
    "cancel",
    "attach",
    "comment",
    "scan",
    "bulk",
    "export",
  ],
};

describe("@erp-ui-platform/capability-contracts", () => {
  it("allows dense sales invoice authoring on desktop when permitted", () => {
    const capabilities = resolveSalesInvoiceCapabilities(baseContext);

    expect(capabilities.canEditLines.available).toBe(true);
    expect(capabilities.canPost.available).toBe(true);
    expect(capabilities.canBulkOperate.available).toBe(true);
  });

  it("blocks high-risk sales invoice mobile posting and line editing", () => {
    const capabilities = resolveSalesInvoiceCapabilities({
      ...baseContext,
      shell: "mobile",
    });

    expect(capabilities.canEditLines.decision).toBe("blocked");
    expect(capabilities.canPost.decision).toBe("blocked");
    expect(capabilities.canBulkOperate.visible).toBe(false);
  });

  it("blocks journal entry mobile authoring and posting by default", () => {
    const capabilities = resolveJournalEntryCapabilities({
      ...baseContext,
      shell: "mobile",
      documentType: "journalEntry",
    });

    expect(capabilities.canCreate.decision).toBe("blocked");
    expect(capabilities.canEditLines.decision).toBe("blocked");
    expect(capabilities.canPost.decision).toBe("blocked");
  });

  it("allows leave approval companion actions on mobile when permitted", () => {
    const capabilities = resolveLeaveApprovalCapabilities({
      ...baseContext,
      shell: "mobile",
      module: "hrms",
      documentType: "leaveRequest",
    });

    expect(capabilities.canApprove.available).toBe(true);
    expect(capabilities.canReject.available).toBe(true);
    expect(capabilities.canComment.available).toBe(true);
    expect(capabilities.canAttachDocuments.available).toBe(true);
  });
});
