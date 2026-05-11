import { describe, expect, it } from "vitest";

import type { BaseCapabilities } from "@erp-ui-platform/capability-contracts";
import {
  filterActionsByCapabilities,
  type WorkflowAction,
} from "./index";

const allowedCapability = {
  decision: "allowed",
  available: true,
  visible: true,
  disabled: false,
  riskLevel: "low",
} as const;

const baseCapabilities: BaseCapabilities = {
  canView: allowedCapability,
  canCreate: allowedCapability,
  canEdit: allowedCapability,
  canEditHeader: allowedCapability,
  canEditLines: allowedCapability,
  canDelete: allowedCapability,
  canSubmit: allowedCapability,
  canApprove: allowedCapability,
  canReject: allowedCapability,
  canPost: allowedCapability,
  canCancel: allowedCapability,
  canAttachDocuments: allowedCapability,
  canComment: allowedCapability,
  canScan: allowedCapability,
  canBulkOperate: allowedCapability,
  canExport: allowedCapability,
};

const action = (overrides: Partial<WorkflowAction>): WorkflowAction => ({
  id: "submit",
  label: "Submit",
  variant: "primary",
  placement: "primary",
  ...overrides,
});

describe("@erp-ui-platform/workflow-actions", () => {
  it("removes hidden actions", () => {
    const actions = filterActionsByCapabilities(
      [action({ id: "visible" }), action({ id: "hidden", hidden: true })],
      baseCapabilities,
      "desktop",
    );

    expect(actions.map((item) => item.id)).toEqual(["visible"]);
  });

  it("preserves disabled actions with reason", () => {
    const reason = {
      code: "workflow.locked",
      message: "This document is locked.",
    };

    const actions = filterActionsByCapabilities(
      [
        action({
          id: "submit",
          disabled: true,
          reason,
          requiredCapability: "canSubmit",
        }),
      ],
      baseCapabilities,
      "desktop",
    );

    expect(actions).toHaveLength(1);
    expect(actions[0]?.disabled).toBe(true);
    expect(actions[0]?.reason).toEqual(reason);
  });

  it("filters actions by shell availability", () => {
    const actions = filterActionsByCapabilities(
      [
        action({ id: "desktopOnly", availableOn: ["desktop"] }),
        action({ id: "mobileOnly", availableOn: ["mobile"] }),
      ],
      baseCapabilities,
      "mobile",
    );

    expect(actions.map((item) => item.id)).toEqual(["mobileOnly"]);
  });

  it("filters hidden required capabilities and disables blocked capabilities", () => {
    const capabilities: BaseCapabilities = {
      ...baseCapabilities,
      canPost: {
        decision: "blocked",
        available: false,
        visible: true,
        disabled: true,
        riskLevel: "high",
        reason: {
          code: "shell.desktopOnly",
          message: "Posting is desktop-only.",
        },
      },
      canDelete: {
        decision: "hidden",
        available: false,
        visible: false,
        disabled: true,
        riskLevel: "high",
      },
    };

    const actions = filterActionsByCapabilities(
      [
        action({ id: "post", requiredCapability: "canPost" }),
        action({ id: "delete", requiredCapability: "canDelete" }),
        action({ id: "missing", requiredCapability: "canArchive" }),
      ],
      capabilities,
      "mobile",
    );

    expect(actions.map((item) => item.id)).toEqual(["post"]);
    expect(actions[0]?.disabled).toBe(true);
    expect(actions[0]?.reason?.code).toBe("shell.desktopOnly");
  });
});
