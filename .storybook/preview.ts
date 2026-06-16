import { createElement } from "react";
import type { Preview } from "@storybook/react-vite";
import {
  ThemeProvider,
  type ColorMode,
  type Density,
  type ThemeName,
} from "@erp-ui-platform/theme";

import "./preview.css";

const preview: Preview = {
  globalTypes: {
    density: {
      description: "Platform density",
      defaultValue: "comfortable",
      toolbar: {
        title: "Density",
        icon: "sidebar",
        items: ["compact", "comfortable", "touch"],
        dynamicTitle: true,
      },
    },
    shell: {
      description: "Device shell grammar",
      defaultValue: "desktop",
      toolbar: {
        title: "Shell",
        icon: "browser",
        items: ["desktop", "mobile", "tablet"],
        dynamicTitle: true,
      },
    },
    clientTheme: {
      description: "Client theme sample",
      defaultValue: "default",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: ["default", "clientA", "clientB"],
        dynamicTitle: true,
      },
    },
    colorMode: {
      description: "Color mode (light is production-supported; dark/system are deferred)",
      defaultValue: "light",
      toolbar: {
        title: "Mode",
        icon: "contrast",
        items: ["light", "dark", "system"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.colorMode === "dark" || 
        (context.globals.colorMode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return createElement(
        ThemeProvider,
        {
          theme: context.globals.clientTheme as ThemeName,
          density: context.globals.density as Density,
          colorMode: context.globals.colorMode as ColorMode,
          className: "erp-storybook-shell bg-background text-foreground",
        },
        createElement(Story),
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      expanded: true,
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
