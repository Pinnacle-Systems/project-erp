import { describe, expect, it } from "vitest";

import {
  getActionsForShell,
  getFieldsForMode,
  resolveScreenDefinition,
  validateScreenDefinition,
  type ScreenDefinition,
} from "./index";

const baseDefinition: ScreenDefinition = {
  id: "sales-invoice",
  type: "transaction",
  title: "Sales Invoice",
  shells: ["desktop", "mobile"],
  sections: [
    {
      id: "header",
      title: "Header",
      order: 1,
      fields: [
        {
          id: "customer",
          label: "Customer",
          fieldType: "lookup",
          required: true,
          order: 1,
          modes: ["create", "edit", "view"],
        },
        {
          id: "taxCode",
          label: "Tax Code",
          fieldType: "text",
          required: true,
          businessInvariant: true,
          allowClientOverrides: ["label", "helpText"],
          order: 2,
        },
      ],
    },
  ],
  actions: [
    {
      id: "save",
      label: "Save",
      placement: "primary",
      shells: ["desktop"],
      order: 1,
    },
    {
      id: "approve",
      label: "Approve",
      placement: "primary",
      shells: ["mobile"],
      order: 2,
    },
  ],
};

describe("@erp-ui-platform/screen-runtime", () => {
  it("fails fast for invalid base definitions", () => {
    const invalid = {
      ...baseDefinition,
      id: "",
    };

    expect(validateScreenDefinition(invalid).valid).toBe(false);
    expect(() => resolveScreenDefinition(invalid)).toThrow(
      /Invalid screen definition/,
    );
  });

  it("merges allowed client config", () => {
    const resolved = resolveScreenDefinition(baseDefinition, {
      title: "Client Invoice",
      sections: {
        header: {
          title: "Invoice Header",
          fields: {
            customer: {
              label: "Bill To",
              helpText: "Select the customer account.",
            },
          },
        },
      },
    });

    expect(resolved.title).toBe("Client Invoice");
    expect(resolved.sections[0]?.title).toBe("Invoice Header");
    expect(resolved.sections[0]?.fields[0]?.label).toBe("Bill To");
    expect(resolved.warnings).toHaveLength(0);
  });

  it("fails safely with warnings for forbidden business invariant overrides", () => {
    const resolved = resolveScreenDefinition(baseDefinition, {
      sections: {
        header: {
          fields: {
            taxCode: {
              required: false,
              label: "Tax Group",
            },
          },
        },
      },
    });

    const taxCode = resolved.sections[0]?.fields[1];

    expect(taxCode?.required).toBe(true);
    expect(taxCode?.label).toBe("Tax Group");
    expect(resolved.warnings[0]?.code).toBe("field.override.forbidden");
  });

  it("filters actions by shell", () => {
    expect(getActionsForShell(baseDefinition, "desktop").map((action) => action.id))
      .toEqual(["save"]);
    expect(getActionsForShell(baseDefinition, "mobile").map((action) => action.id))
      .toEqual(["approve"]);
  });

  it("filters fields by mode", () => {
    const fields = getFieldsForMode(baseDefinition, "create");

    expect(fields.map((field) => field.id)).toEqual(["customer", "taxCode"]);
  });
});
