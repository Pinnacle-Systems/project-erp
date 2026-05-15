// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import tseslint from "typescript-eslint";

const appPackageImports = [
  "@erp-ui-platform/storybook",
  "@erp-ui-platform/playground",
  "@erp-ui-platform/reference-app",
];

const uiPackageImports = [
  "@erp-ui-platform/primitives",
  "@erp-ui-platform/theme",
  "@erp-ui-platform/app-components",
  "@erp-ui-platform/layout-shells",
  "@erp-ui-platform/desktop-patterns",
  "@erp-ui-platform/mobile-patterns",
  "@erp-ui-platform/transaction-shell",
  "@erp-ui-platform/editable-grid",
  "@erp-ui-platform/lookup",
  "@erp-ui-platform/validation-ui",
  "@erp-ui-platform/workflow-actions",
  "@erp-ui-platform/approval-ui",
  "@erp-ui-platform/document-ui",
];

const appRelativeImportPatterns = [
  "apps/*",
  "../apps/*",
  "../../apps/*",
  "../../../apps/*",
  "../../../../apps/*",
];

const noRestrictedImports = (patterns) => [
  "error",
  {
    patterns,
  },
];

const restrictedGroup = (group, message) => ({
  group,
  message,
});

export default [{
  ignores: [
    "node_modules/**",
    "dist/**",
    "coverage/**",
    ".turbo/**",
    ".vite/**",
    "storybook-static/**",
  ],
}, {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parser: tseslint.parser,
  },
}, {
  files: ["packages/tokens/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/*", "../../*", "../../../packages/*"],
        "The tokens package is the bottom of the dependency graph and must not import other internal packages.",
      ),
    ]),
  },
}, {
  files: ["packages/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        [...appPackageImports, ...appRelativeImportPatterns],
        "Shared packages must not import from apps.",
      ),
      restrictedGroup(
        ["**/client-app/**", "**/client-apps/**", "**/client/**"],
        "Platform UI packages must not import from client app folders.",
      ),
    ]),
  },
}, {
  files: ["packages/tokens/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/*", "../../*", "../../../packages/*"],
        "The tokens package is the bottom of the dependency graph and must not import other internal packages.",
      ),
    ]),
  },
}, {
  files: ["packages/capability-contracts/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/*", "../../*", "../../../packages/*"],
        "capability-contracts must stay UI-independent and must not import internal UI packages.",
      ),
    ]),
  },
}, {
  files: [
    "packages/config-runtime/**/*.{ts,tsx}",
    "packages/screen-runtime/**/*.{ts,tsx}",
  ],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        uiPackageImports,
        "Platform/core/runtime packages must not import UI packages.",
      ),
    ]),
  },
}, {
  files: ["packages/desktop-patterns/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/mobile-patterns", "../mobile-patterns/*", "../../mobile-patterns/*"],
        "desktop-patterns must not import mobile-patterns directly; use a shared abstraction instead.",
      ),
    ]),
  },
}, {
  files: ["packages/mobile-patterns/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/desktop-patterns", "../desktop-patterns/*", "../../desktop-patterns/*"],
        "mobile-patterns must not import desktop-patterns directly; use a shared abstraction instead.",
      ),
    ]),
  },
}, {
  files: ["apps/storybook/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/playground", "@erp-ui-platform/reference-app", "../playground/*", "../reference-app/*", "../../apps/playground/*", "../../apps/reference-app/*"],
        "Apps must not import from other apps.",
      ),
    ]),
  },
}, {
  files: ["apps/playground/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/storybook", "@erp-ui-platform/reference-app", "../storybook/*", "../reference-app/*", "../../apps/storybook/*", "../../apps/reference-app/*"],
        "Apps must not import from other apps.",
      ),
    ]),
  },
}, {
  files: ["apps/reference-app/**/*.{ts,tsx}"],
  rules: {
    "no-restricted-imports": noRestrictedImports([
      restrictedGroup(
        ["@erp-ui-platform/storybook", "@erp-ui-platform/playground", "../storybook/*", "../playground/*", "../../apps/storybook/*", "../../apps/playground/*"],
        "Apps must not import from other apps.",
      ),
    ]),
  },
}, ...storybook.configs["flat/recommended"]];
