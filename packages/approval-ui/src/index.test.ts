import { describe, expect, it, vi } from "vitest";

import {
  ApprovalPanel,
  type ApprovalAction,
  type ApprovalPanelProps,
} from "./index";

const action: ApprovalAction = {
  id: "approve",
  decision: "approve",
  label: "Approve",
};

const baseProps: ApprovalPanelProps = {
  status: "pending",
  shell: "mobile",
  steps: [
    {
      id: "manager",
      label: "Manager review",
      status: "pending",
      actor: {
        id: "user-1",
        displayName: "A. Manager",
      },
    },
  ],
  comments: [
    {
      id: "comment-1",
      actor: {
        id: "user-2",
        displayName: "Requester",
      },
      message: "Please review.",
      createdAt: "2026-05-11T00:00:00.000Z",
    },
  ],
  allowedActions: [action],
};

describe("@erp-ui-platform/approval-ui", () => {
  it("renders a basic approval panel element with shell and status metadata", () => {
    const element = ApprovalPanel(baseProps);

    expect(element.type).toBe("section");
    expect(element.props["data-component"]).toBe("ApprovalPanel");
    expect(element.props["data-status"]).toBe("pending");
    expect(element.props["data-shell"]).toBe("mobile");
  });

  it("omits action rendering in readonly mode", () => {
    const element = ApprovalPanel({
      ...baseProps,
      readonly: true,
    });

    expect(element.props["data-readonly"]).toBe("true");
  });

  it("supports injected action rendering", () => {
    const renderAction = vi.fn((approvalAction: ApprovalAction) => approvalAction.label);

    ApprovalPanel({
      ...baseProps,
      renderAction,
    });

    expect(renderAction).toHaveBeenCalledWith(action);
  });
});
