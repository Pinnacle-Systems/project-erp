import { createElement, type ReactElement, type ReactNode } from "react";

import type { ShellType } from "@erp-ui-platform/capability-contracts";

export type ApprovalStatus =
  | "not_started"
  | "pending"
  | "approved"
  | "rejected"
  | "changes_requested"
  | "cancelled";

export type ApprovalDecision = "approve" | "reject" | "request_changes";

export type ApprovalActor = {
  id: string;
  displayName: string;
  role?: string;
};

export type ApprovalStep = {
  id: string;
  label: string;
  status: ApprovalStatus;
  actor?: ApprovalActor;
  required?: boolean;
  completedAt?: string;
};

export type ApprovalComment = {
  id: string;
  actor: ApprovalActor;
  message: string;
  createdAt: string;
  decision?: ApprovalDecision;
};

export type ApprovalTimelineEntry = {
  id: string;
  actor?: ApprovalActor;
  status: ApprovalStatus;
  label: string;
  occurredAt: string;
  comment?: string;
};

export type ApprovalAction = {
  id: string;
  decision: ApprovalDecision;
  label: string;
  disabled?: boolean;
  reason?: string;
  requiresComment?: boolean;
};

export type ApprovalPanelProps = {
  status: ApprovalStatus;
  steps: readonly ApprovalStep[];
  comments?: readonly ApprovalComment[];
  allowedActions?: readonly ApprovalAction[];
  onDecision?: (action: ApprovalAction) => void | Promise<void>;
  attachments?: ReactNode;
  summary?: ReactNode;
  readonly?: boolean;
  shell: ShellType;
  renderAction?: (action: ApprovalAction) => ReactNode;
};

const renderStatus = (status: ApprovalStatus): ReactElement =>
  createElement(
    "p",
    {
      "data-slot": "approval-status",
      "data-status": status,
    },
    status,
  );

const renderStep = (step: ApprovalStep): ReactElement =>
  createElement(
    "li",
    {
      key: step.id,
      "data-step-id": step.id,
      "data-status": step.status,
    },
    createElement("span", null, step.label),
    step.actor
      ? createElement(
          "small",
          {
            "data-slot": "approval-step-actor",
          },
          step.actor.displayName,
        )
      : null,
  );

const renderComment = (comment: ApprovalComment): ReactElement =>
  createElement(
    "li",
    {
      key: comment.id,
      "data-comment-id": comment.id,
      "data-decision": comment.decision,
    },
    createElement("strong", null, comment.actor.displayName),
    createElement("p", null, comment.message),
  );

export const ApprovalPanel = ({
  status,
  steps,
  comments = [],
  allowedActions = [],
  onDecision,
  attachments,
  summary,
  readonly = false,
  shell,
  renderAction,
}: ApprovalPanelProps): ReactElement =>
  createElement(
    "section",
    {
      "data-component": "ApprovalPanel",
      "data-status": status,
      "data-shell": shell,
      "data-readonly": String(readonly),
    },
    summary
      ? createElement(
          "div",
          {
            "data-slot": "approval-summary",
          },
          summary,
        )
      : null,
    renderStatus(status),
    createElement(
      "ol",
      {
        "data-slot": "approval-steps",
      },
      steps.map(renderStep),
    ),
    comments.length > 0
      ? createElement(
          "ul",
          {
            "data-slot": "approval-comments",
          },
          comments.map(renderComment),
        )
      : null,
    attachments
      ? createElement(
          "div",
          {
            "data-slot": "approval-attachments",
          },
          attachments,
        )
      : null,
    readonly || allowedActions.length === 0
      ? null
      : createElement(
          "div",
          {
            "data-slot": "approval-actions",
          },
          allowedActions.map((action) =>
            createElement(
              "span",
              {
                key: action.id,
                "data-action-wrapper": action.id,
              },
              renderAction
                ? renderAction(action)
                : createElement(
                    "button",
                    {
                      type: "button",
                      disabled: action.disabled,
                      title: action.reason,
                      "data-action-id": action.id,
                      "data-decision": action.decision,
                      onClick: () => {
                        if (!action.disabled) {
                          void onDecision?.(action);
                        }
                      },
                    },
                    action.label,
                  ),
            ),
          ),
        ),
  );
