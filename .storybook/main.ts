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
    config.build = {
      ...(config.build ?? {}),
      // Storybook's docs, a11y, and preview runtime bundles are loaded as
      // separate chunks below. Keep the warning threshold aligned with those
      // known Storybook-owned lazy chunks so app/story chunks still stay small.
      chunkSizeWarningLimit: 900,
      rollupOptions: {
        ...(config.build?.rollupOptions ?? {}),
        output: {
          ...(config.build?.rollupOptions?.output ?? {}),
          manualChunks: (id) => {
            if (!id.includes("node_modules")) {
              return undefined;
            }

            if (id.includes("/react-dom/")) {
              return "vendor-react-dom";
            }

            if (id.includes("/react/")) {
              return "vendor-react";
            }

            if (id.includes("/@radix-ui/")) {
              return "vendor-radix";
            }

            if (id.includes("/@storybook/addon-docs/")) {
              return "storybook-docs-addon";
            }

            if (id.includes("/@storybook/blocks/")) {
              return "storybook-docs-blocks";
            }

            if (
              id.includes("/react-syntax-highlighter/") ||
              id.includes("/refractor/") ||
              id.includes("/@mdx-js/")
            ) {
              return "storybook-docs-formatting";
            }

            if (id.includes("/axe-core/")) {
              return "axe-core";
            }

            if (id.includes("/@storybook/addon-a11y/")) {
              return "storybook-a11y";
            }

            return undefined;
          },
        },
      },
    };
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
