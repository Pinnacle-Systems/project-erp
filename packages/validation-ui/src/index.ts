import { createElement, type ReactElement } from "react";

export type ValidationSeverity = "info" | "warning" | "error" | "blocking";

export type ValidationScope =
  | "document"
  | "header"
  | "line"
  | "field"
  | "workflow";

export type ValidationMessage = {
  id: string;
  severity: ValidationSeverity;
  scope: ValidationScope;
  message: string;
  code?: string;
  fieldPath?: string;
  lineId?: string;
  lineIndex?: number;
  blockingActionIds?: readonly string[];
  metadata?: Record<string, unknown>;
};

export type ValidationSummary = {
  messages: readonly ValidationMessage[];
  counts: Record<ValidationSeverity, number>;
  hasBlocking: boolean;
};

export type FieldValidationState = {
  fieldPath: string;
  messages: readonly ValidationMessage[];
  hasError: boolean;
  hasWarning: boolean;
  hasBlocking: boolean;
};

export type LineValidationState = {
  lineId?: string;
  lineIndex?: number;
  messages: readonly ValidationMessage[];
  fieldStates: Record<string, FieldValidationState>;
  hasError: boolean;
  hasWarning: boolean;
  hasBlocking: boolean;
};

export type MessagesByScope = Record<ValidationScope, ValidationMessage[]>;

const severityRank: Record<ValidationSeverity, number> = {
  blocking: 0,
  error: 1,
  warning: 2,
  info: 3,
};

const createEmptyScopeGroups = (): MessagesByScope => ({
  document: [],
  header: [],
  line: [],
  field: [],
  workflow: [],
});

export const sortValidationMessagesBySeverity = (
  messages: readonly ValidationMessage[],
): ValidationMessage[] =>
  [...messages].sort((left, right) => {
    const severityDifference =
      severityRank[left.severity] - severityRank[right.severity];

    if (severityDifference !== 0) {
      return severityDifference;
    }

    return left.id.localeCompare(right.id);
  });

export const groupValidationMessagesByScope = (
  messages: readonly ValidationMessage[],
): MessagesByScope =>
  messages.reduce<MessagesByScope>((groups, message) => {
    groups[message.scope].push(message);
    return groups;
  }, createEmptyScopeGroups());

export const hasBlockingMessages = (
  messages: readonly ValidationMessage[],
): boolean => messages.some((message) => message.severity === "blocking");

export const getFieldMessages = (
  messages: readonly ValidationMessage[],
  fieldPath: string,
): ValidationMessage[] =>
  sortValidationMessagesBySeverity(
    messages.filter((message) => message.fieldPath === fieldPath),
  );

export const getLineMessages = (
  messages: readonly ValidationMessage[],
  line: { lineId?: string; lineIndex?: number },
): ValidationMessage[] =>
  sortValidationMessagesBySeverity(
    messages.filter((message) => {
      if (line.lineId !== undefined && message.lineId === line.lineId) {
        return true;
      }

      return line.lineIndex !== undefined && message.lineIndex === line.lineIndex;
    }),
  );

export const createValidationSummary = (
  messages: readonly ValidationMessage[],
): ValidationSummary => {
  const sortedMessages = sortValidationMessagesBySeverity(messages);

  return {
    messages: sortedMessages,
    counts: {
      info: sortedMessages.filter((message) => message.severity === "info").length,
      warning: sortedMessages.filter((message) => message.severity === "warning")
        .length,
      error: sortedMessages.filter((message) => message.severity === "error").length,
      blocking: sortedMessages.filter((message) => message.severity === "blocking")
        .length,
    },
    hasBlocking: hasBlockingMessages(sortedMessages),
  };
};

export const createFieldValidationState = (
  messages: readonly ValidationMessage[],
  fieldPath: string,
): FieldValidationState => {
  const fieldMessages = getFieldMessages(messages, fieldPath);

  return {
    fieldPath,
    messages: fieldMessages,
    hasError: fieldMessages.some((message) => message.severity === "error"),
    hasWarning: fieldMessages.some((message) => message.severity === "warning"),
    hasBlocking: hasBlockingMessages(fieldMessages),
  };
};

export const createLineValidationState = (
  messages: readonly ValidationMessage[],
  line: { lineId?: string; lineIndex?: number },
): LineValidationState => {
  const lineMessages = getLineMessages(messages, line);
  const fieldStates = lineMessages.reduce<Record<string, FieldValidationState>>(
    (states, message) => {
      if (!message.fieldPath || states[message.fieldPath]) {
        return states;
      }

      states[message.fieldPath] = createFieldValidationState(
        lineMessages,
        message.fieldPath,
      );

      return states;
    },
    {},
  );

  return {
    lineId: line.lineId,
    lineIndex: line.lineIndex,
    messages: lineMessages,
    fieldStates,
    hasError: lineMessages.some((message) => message.severity === "error"),
    hasWarning: lineMessages.some((message) => message.severity === "warning"),
    hasBlocking: hasBlockingMessages(lineMessages),
  };
};

export type ValidationSummaryPanelProps = {
  summary: ValidationSummary;
  title?: string;
};

export const ValidationSummaryPanel = ({
  summary,
  title = "Validation",
}: ValidationSummaryPanelProps): ReactElement =>
  createElement(
    "section",
    {
      "aria-label": title,
      "data-component": "ValidationSummaryPanel",
      "data-has-blocking": String(summary.hasBlocking),
    },
    createElement("h2", null, title),
    createElement(
      "ul",
      null,
      summary.messages.map((message) =>
        createElement(
          "li",
          {
            key: message.id,
            "data-severity": message.severity,
            "data-scope": message.scope,
          },
          message.message,
        ),
      ),
    ),
  );

export type FieldValidationMessageProps = {
  state: FieldValidationState;
};

export const FieldValidationMessage = ({
  state,
}: FieldValidationMessageProps): ReactElement | null => {
  const firstMessage = state.messages[0];

  if (!firstMessage) {
    return null;
  }

  return createElement(
    "p",
    {
      "data-component": "FieldValidationMessage",
      "data-field-path": state.fieldPath,
      "data-severity": firstMessage.severity,
      role:
        firstMessage.severity === "error" || firstMessage.severity === "blocking"
          ? "alert"
          : "status",
    },
    firstMessage.message,
  );
};

export type BlockingActionNoticeProps = {
  messages: readonly ValidationMessage[];
  title?: string;
};

export const BlockingActionNotice = ({
  messages,
  title = "Action blocked",
}: BlockingActionNoticeProps): ReactElement | null => {
  const blockingMessages = sortValidationMessagesBySeverity(
    messages.filter((message) => message.severity === "blocking"),
  );

  if (blockingMessages.length === 0) {
    return null;
  }

  return createElement(
    "aside",
    {
      role: "alert",
      "aria-label": title,
      "data-component": "BlockingActionNotice",
    },
    createElement("strong", null, title),
    createElement(
      "ul",
      null,
      blockingMessages.map((message) =>
        createElement("li", { key: message.id }, message.message),
      ),
    ),
  );
};
