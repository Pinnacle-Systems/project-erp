import { describe, expect, it } from "vitest";

import {
  applySafeDefaults,
  collectConfigWarnings,
  mergeConfig,
  validateConfigPatch,
  type ConfigObject,
  type OverridePermission,
} from "./index";

const baseConfig = {
  title: "Sales Invoice",
  density: "compact",
  fields: {
    customer: {
      label: "Customer",
      required: true,
    },
    taxCode: {
      label: "Tax Code",
      required: true,
    },
  },
} satisfies ConfigObject;

const permissions: OverridePermission[] = [
  { path: "title", allowed: true, expectedType: "string" },
  { path: "density", allowed: true, expectedType: "string" },
  { path: "fields.customer.label", allowed: true, expectedType: "string" },
  { path: "fields.customer.required", allowed: true, expectedType: "boolean" },
  {
    path: "fields.taxCode.required",
    allowed: false,
    invariant: true,
    expectedType: "boolean",
    reason: "Tax code requirement is a platform invariant.",
  },
];

describe("@erp-ui-platform/config-runtime", () => {
  it("allows permitted overrides", () => {
    const result = mergeConfig(
      baseConfig,
      {
        values: {
          title: "Client Invoice",
          fields: {
            customer: {
              label: "Bill To",
            },
          },
        },
      },
      permissions,
    );

    expect(result.config.title).toBe("Client Invoice");
    expect(result.config.fields.customer.label).toBe("Bill To");
    expect(result.appliedPaths).toEqual(["title", "fields.customer.label"]);
    expect(result.issues).toHaveLength(0);
  });

  it("rejects forbidden overrides without corrupting base config", () => {
    const result = mergeConfig(
      baseConfig,
      {
        values: {
          fields: {
            taxCode: {
              required: false,
            },
          },
        },
      },
      permissions,
    );

    expect(result.config.fields.taxCode.required).toBe(true);
    expect(result.rejectedPaths).toEqual(["fields.taxCode.required"]);
    expect(result.issues[0]?.code).toBe("config.override.forbidden");
  });

  it("produces warnings for invalid patch values", () => {
    const issues = validateConfigPatch(
      {
        values: {
          density: 123,
          unknown: true,
        },
      },
      permissions,
    );

    expect(issues.map((entry) => entry.code)).toEqual([
      "config.override.invalidType",
      "config.override.notPermitted",
    ]);
  });

  it("does not allow base invariants to be changed by client config", () => {
    const result = mergeConfig(
      baseConfig,
      {
        values: {
          fields: {
            taxCode: {
              required: false,
            },
          },
        },
      },
      permissions,
    );

    expect(result.config.fields.taxCode.required).toBe(true);
    expect(collectConfigWarnings(result)).toHaveLength(1);
  });

  it("applies safe defaults without mutating the input", () => {
    const result = applySafeDefaults(baseConfig, [
      {
        path: "pageSize",
        defaultValue: 25,
        expectedType: "number",
      },
    ]);

    expect(result.config).not.toBe(baseConfig);
    expect(result.config.pageSize).toBe(25);
    expect(baseConfig).not.toHaveProperty("pageSize");
  });
});
