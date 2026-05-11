import { createElement } from "react";
import type { Preview } from "@storybook/react-vite";

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
  },
  decorators: [
    (Story, context) =>
      createElement(
        "div",
        {
          className: "erp-storybook-shell",
          "data-density": context.globals.density,
          "data-shell": context.globals.shell,
          "data-client-theme": context.globals.clientTheme,
        },
        createElement(Story),
      ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
