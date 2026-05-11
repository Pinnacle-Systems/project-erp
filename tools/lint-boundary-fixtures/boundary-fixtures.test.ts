import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

const eslint = new ESLint({
  overrideConfigFile: "eslint.config.js",
});

const lintFixture = async (filePath: string, code: string) => {
  const [result] = await eslint.lintText(code, { filePath });
  return result?.messages ?? [];
};

describe("package boundary lint fixtures", () => {
  it("rejects tokens importing UI packages", async () => {
    const messages = await lintFixture(
      "packages/tokens/src/invalid-boundary-fixture.ts",
      'import "@erp-ui-platform/primitives";',
    );

    expect(messages.some((message) => message.ruleId === "no-restricted-imports"))
      .toBe(true);
  });

  it("rejects capability contracts importing UI packages", async () => {
    const messages = await lintFixture(
      "packages/capability-contracts/src/invalid-boundary-fixture.ts",
      'import "@erp-ui-platform/approval-ui";',
    );

    expect(messages.some((message) => message.ruleId === "no-restricted-imports"))
      .toBe(true);
  });

  it("rejects direct mobile to desktop pattern imports", async () => {
    const messages = await lintFixture(
      "packages/mobile-patterns/src/invalid-boundary-fixture.ts",
      'import "@erp-ui-platform/desktop-patterns";',
    );

    expect(messages.some((message) => message.ruleId === "no-restricted-imports"))
      .toBe(true);
  });

  it("rejects shared packages importing apps", async () => {
    const messages = await lintFixture(
      "packages/primitives/src/invalid-boundary-fixture.ts",
      'import "@erp-ui-platform/storybook";',
    );

    expect(messages.some((message) => message.ruleId === "no-restricted-imports"))
      .toBe(true);
  });
});
