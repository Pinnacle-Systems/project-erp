import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

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
    return config;
  },
};

export default config;
