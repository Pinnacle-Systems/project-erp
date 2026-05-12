import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

const packagePath = (path: string) => new URL(path, import.meta.url).pathname;

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(ts|tsx|mdx)",
    "../apps/storybook/stories/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.plugins = [...(config.plugins ?? []), tailwindcss() as any];
    config.resolve = {
      ...(config.resolve ?? {}),
      alias: {
        ...(config.resolve?.alias ?? {}),
        "@erp-ui-platform/app-components": packagePath("../packages/app-components/src/index.ts"),
        "@erp-ui-platform/approval-ui": packagePath("../packages/approval-ui/src/index.ts"),
        "@erp-ui-platform/capability-contracts": packagePath("../packages/capability-contracts/src/index.ts"),
        "@erp-ui-platform/desktop-patterns": packagePath("../packages/desktop-patterns/src/index.ts"),
        "@erp-ui-platform/layout-shells": packagePath("../packages/layout-shells/src/index.ts"),
        "@erp-ui-platform/mobile-patterns": packagePath("../packages/mobile-patterns/src/index.ts"),
        "@erp-ui-platform/primitives": packagePath("../packages/primitives/src/index.ts"),
        "@erp-ui-platform/transaction-shell": packagePath("../packages/transaction-shell/src/index.ts"),
        "@erp-ui-platform/theme": packagePath("../packages/theme/src/index.tsx"),
        "@erp-ui-platform/validation-ui": packagePath("../packages/validation-ui/src/index.ts"),
        "@erp-ui-platform/workflow-actions": packagePath("../packages/workflow-actions/src/index.ts"),
      },
    };
    return config;
  },
};

export default config;
