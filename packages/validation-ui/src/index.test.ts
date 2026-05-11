import { describe, expect, it } from "vitest";

import {
  BlockingActionNotice,
  FieldValidationMessage,
  ValidationSummaryPanel,
  createFieldValidationState,
  createLineValidationState,
  createValidationSummary,
  getFieldMessages,
  getLineMessages,
  groupValidationMessagesByScope,
  hasBlockingMessages,
  sortValidationMessagesBySeverity,
  type ValidationMessage,
} from "./index";

const messages: ValidationMessage[] = [
  {
    id: "info-1",
    severity: "info",
    scope: "document",
    message: "Informational message.",
  },
  {
    id: "blocking-1",
    severity: "blocking",
    scope: "workflow",
    message: "Posting is blocked.",
  },
  {
    id: "warning-1",
    severity: "warning",
    scope: "field",
    fieldPath: "header.customerId",
    message: "Customer credit is near limit.",
  },
  {
    id: "error-1",
    severity: "error",
    scope: "line",
    lineId: "line-1",
    lineIndex: 0,
    fieldPath: "lines[0].quantity",
    message: "Quantity is required.",
  },
];

describe("@erp-ui-platform/validation-ui", () => {
  it("groups validation messages by scope", () => {
    const groups = groupValidationMessagesByScope(messages);

    expect(groups.document).toHaveLength(1);
    expect(groups.workflow).toHaveLength(1);
    expect(groups.field).toHaveLength(1);
    expect(groups.line).toHaveLength(1);
    expect(groups.header).toHaveLength(0);
  });

  it("detects blocking messages", () => {
    expect(hasBlockingMessages(messages)).toBe(true);
    expect(hasBlockingMessages([messages[0] as ValidationMessage])).toBe(false);
  });

  it("returns field messages sorted by severity", () => {
    const fieldMessages = getFieldMessages(messages, "header.customerId");

    expect(fieldMessages).toHaveLength(1);
    expect(fieldMessages[0]?.id).toBe("warning-1");
  });

  it("returns line messages by id or index", () => {
    expect(getLineMessages(messages, { lineId: "line-1" })).toHaveLength(1);
    expect(getLineMessages(messages, { lineIndex: 0 })).toHaveLength(1);
  });

  it("sorts messages by severity", () => {
    const sorted = sortValidationMessagesBySeverity(messages);

    expect(sorted.map((message) => message.severity)).toEqual([
      "blocking",
      "error",
      "warning",
      "info",
    ]);
  });

  it("creates summary and field/line states", () => {
    const summary = createValidationSummary(messages);
    const fieldState = createFieldValidationState(messages, "header.customerId");
    const lineState = createLineValidationState(messages, { lineId: "line-1" });

    expect(summary.counts.blocking).toBe(1);
    expect(summary.hasBlocking).toBe(true);
    expect(fieldState.hasWarning).toBe(true);
    expect(lineState.hasError).toBe(true);
    expect(lineState.fieldStates["lines[0].quantity"]?.hasError).toBe(true);
  });

  it("creates placeholder React elements for validation display", () => {
    const summary = createValidationSummary(messages);
    const fieldState = createFieldValidationState(messages, "header.customerId");

    expect(ValidationSummaryPanel({ summary }).type).toBe("section");
    expect(FieldValidationMessage({ state: fieldState })?.type).toBe("p");
    expect(BlockingActionNotice({ messages })?.type).toBe("aside");
    expect(BlockingActionNotice({ messages: [messages[0] as ValidationMessage] })).toBe(
      null,
    );
  });
});
