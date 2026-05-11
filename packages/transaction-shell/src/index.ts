import { createElement, type ReactElement, type ReactNode } from "react";

import {
  ValidationSummaryPanel,
  createValidationSummary,
  type ValidationMessage,
} from "@erp-ui-platform/validation-ui";
import type {
  WorkflowAction,
  WorkflowActionHandler,
} from "@erp-ui-platform/workflow-actions";

export type TransactionStatus =
  | "draft"
  | "submitted"
  | "pendingApproval"
  | "approved"
  | "rejected"
  | "posted"
  | "cancelled"
  | "completed"
  | "onHold";

export type TransactionMode = "create" | "edit" | "view" | "approval";

export type TransactionShellDensity = "compact" | "comfortable" | "touch";

export type TransactionHeaderSlot = ReactNode;

export type TransactionLinesSlot = ReactNode;

export type TransactionTotalsSlot = ReactNode;

export type TransactionActionSlot = ReactNode | readonly WorkflowAction[];

export type TransactionShellProps = {
  title: string;
  documentNumber?: string;
  status: TransactionStatus;
  mode: TransactionMode;
  density?: TransactionShellDensity;
  header: TransactionHeaderSlot;
  lines: TransactionLinesSlot;
  totals?: TransactionTotalsSlot;
  actions?: TransactionActionSlot;
  validationMessages?: readonly ValidationMessage[];
  audit?: ReactNode;
  attachments?: ReactNode;
  footer?: ReactNode;
  onAction?: WorkflowActionHandler;
};

const isActionArray = (
  actions: TransactionActionSlot | undefined,
): actions is readonly WorkflowAction[] => Array.isArray(actions);

const renderActions = (
  actions: TransactionActionSlot | undefined,
  onAction: WorkflowActionHandler | undefined,
): ReactNode => {
  if (!actions) {
    return null;
  }

  if (!isActionArray(actions)) {
    return actions;
  }

  return createElement(
    "div",
    {
      "data-slot": "transaction-actions-list",
    },
    actions.map((action) =>
      createElement(
        "button",
        {
          key: action.id,
          type: "button",
          disabled: action.disabled,
          "data-action-id": action.id,
          "data-variant": action.variant,
          "data-placement": action.placement,
          "data-risk-level": action.riskLevel,
          title: action.reason?.message,
          onClick: () => {
            if (!action.disabled) {
              void onAction?.(action);
            }
          },
        },
        action.label,
      ),
    ),
  );
};

export const TransactionShell = ({
  title,
  documentNumber,
  status,
  mode,
  density = "comfortable",
  header,
  lines,
  totals,
  actions,
  validationMessages = [],
  audit,
  attachments,
  footer,
  onAction,
}: TransactionShellProps): ReactElement => {
  const validationSummary = createValidationSummary(validationMessages);

  return createElement(
    "section",
    {
      "data-component": "TransactionShell",
      "data-status": status,
      "data-mode": mode,
      "data-density": density,
    },
    createElement(
      "header",
      {
        "data-slot": "transaction-title",
      },
      createElement("h1", null, title),
      documentNumber
        ? createElement(
            "p",
            {
              "data-slot": "transaction-document-number",
            },
            documentNumber,
          )
        : null,
      createElement(
        "span",
        {
          "data-slot": "transaction-status",
        },
        status,
      ),
    ),
    validationMessages.length > 0
      ? createElement(ValidationSummaryPanel, {
          summary: validationSummary,
          title: "Validation",
        })
      : null,
    createElement(
      "div",
      {
        "data-slot": "transaction-actions",
      },
      renderActions(actions, onAction),
    ),
    createElement(
      "div",
      {
        "data-slot": "transaction-body",
      },
      createElement(
        "section",
        {
          "data-slot": "transaction-header",
        },
        header,
      ),
      createElement(
        "section",
        {
          "data-slot": "transaction-lines",
        },
        lines,
      ),
      totals
        ? createElement(
            "aside",
            {
              "data-slot": "transaction-totals",
            },
            totals,
          )
        : null,
      attachments
        ? createElement(
            "aside",
            {
              "data-slot": "transaction-attachments",
            },
            attachments,
          )
        : null,
      audit
        ? createElement(
            "aside",
            {
              "data-slot": "transaction-audit",
            },
            audit,
          )
        : null,
    ),
    footer
      ? createElement(
          "footer",
          {
            "data-slot": "transaction-footer",
          },
          footer,
        )
      : null,
  );
};
