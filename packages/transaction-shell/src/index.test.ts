import { describe, expect, it, vi } from "vitest";

import { TransactionShell, type TransactionShellProps } from "./index";

const baseProps: TransactionShellProps = {
  title: "Sales Invoice",
  documentNumber: "SI-1001",
  status: "draft",
  mode: "edit",
  header: "Header slot",
  lines: "Lines slot",
};

describe("@erp-ui-platform/transaction-shell", () => {
  it("renders a neutral transaction shell element with metadata", () => {
    const element = TransactionShell(baseProps);

    const props = element.props as Record<string, unknown>;
    expect(element.type).toBe("section");
    expect(props["data-component"]).toBe("TransactionShell");
    expect(props["data-status"]).toBe("draft");
    expect(props["data-mode"]).toBe("edit");
  });

  it("supports validation messages without client-specific rules", () => {
    const element = TransactionShell({
      ...baseProps,
      validationMessages: [
        {
          id: "blocking-1",
          severity: "blocking",
          scope: "workflow",
          message: "Posting is blocked.",
        },
      ],
    });

    expect((element.props as Record<string, unknown>).children).toBeDefined();
  });

  it("supports workflow action arrays and action handlers", () => {
    const onAction = vi.fn();
    const element = TransactionShell({
      ...baseProps,
      actions: [
        {
          id: "save",
          label: "Save",
          variant: "primary",
          placement: "primary",
        },
      ],
      onAction,
    });

    expect(element.type).toBe("section");
  });
});
