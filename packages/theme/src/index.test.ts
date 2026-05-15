import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  applyTheme,
  createThemeStyle,
  densityTokens,
  getThemeVariables,
  requiredThemeVariables,
  supportedDensities,
  supportedThemeNames,
  ThemeProvider,
  themes,
} from "./index";

class FakeStyle {
  private values = new Map<string, string>();

  getPropertyValue(name: string) {
    return this.values.get(name) ?? "";
  }

  setProperty(name: string, value: string) {
    this.values.set(name, value);
  }

  removeProperty(name: string) {
    this.values.delete(name);
  }
}

class FakeElement {
  readonly style = new FakeStyle();
  private attributes = new Map<string, string>();

  getAttribute(name: string) {
    return this.attributes.get(name) ?? null;
  }

  setAttribute(name: string, value: string) {
    this.attributes.set(name, value);
  }

  removeAttribute(name: string) {
    this.attributes.delete(name);
  }
}

const withFakeHTMLElement = <T>(callback: () => T): T => {
  const original = globalThis.HTMLElement;
  globalThis.HTMLElement = FakeElement as unknown as typeof HTMLElement;

  try {
    return callback();
  } finally {
    globalThis.HTMLElement = original;
  }
};

describe("@erp-ui-platform/theme", () => {
  it("renders provider data attributes with explicit options", () => {
    const html = renderToStaticMarkup(
      createElement(
        ThemeProvider,
        { theme: "clientA", density: "compact", colorMode: "light" },
        "ERP",
      ),
    );

    expect(html).toContain('data-theme="clientA"');
    expect(html).toContain('data-density="compact"');
    expect(html).toContain('data-color-mode="light"');
  });

  it("applies provider defaults when props are omitted", () => {
    const html = renderToStaticMarkup(
      createElement(ThemeProvider, null, "ERP"),
    );

    expect(html).toContain('data-theme="default"');
    expect(html).toContain('data-density="comfortable"');
    expect(html).toContain('data-color-mode="light"');
  });

  it("exports valid named themes and density options", () => {
    expect(supportedThemeNames).toEqual(["default", "clientA", "clientB"]);
    expect(Object.keys(themes)).toEqual(supportedThemeNames);
    expect(supportedDensities).toEqual(["compact", "comfortable", "touch"]);
    expect(Object.keys(densityTokens)).toEqual(supportedDensities);
  });

  it("keeps theme variable mapping aligned with required variables", () => {
    const variables = getThemeVariables("clientB", "touch", "light");

    for (const variable of requiredThemeVariables) {
      expect(variables[variable]).toBeDefined();
    }

    expect(variables["--erp-color-primary"]).toBe("#0f766e");
    expect(variables["--erp-control-height"]).toBe("44px");
    expect(variables["--erp-surface-page"]).toBe("#f4fbf9");
    expect(variables["--erp-color-app-bg"]).toBe("#edf7f5");
    expect(variables["--erp-color-page-bg"]).toBe("#f4fbf9");
    expect(variables["--erp-color-surface-raised"]).toBeDefined();
    expect(variables["--erp-color-surface-accent"]).toBe("#ecfdf5");
    expect(variables["--erp-color-foreground-muted"]).toBeDefined();
    expect(variables["--erp-color-border-muted"]).toBeDefined();
    expect(variables["--erp-color-primary-hover"]).toBe("#0d625c");
    expect(variables["--erp-color-primary-soft"]).toBe("#ecfdf5");
    expect(variables["--erp-color-primary-border"]).toBe("#a7f3d0");
    expect(variables["--erp-text-link"]).toBe("#0d625c");
    expect(variables["--erp-border-focus"]).toBe("#0f766e");
    expect(variables["--erp-state-dirty"]).toBe("#fffbeb");
    expect(variables["--erp-state-error-border"]).toBe("#fecaca");
    expect(variables["--erp-validation-warning-bg"]).toBe("#fffbeb");
    expect(variables["--erp-validation-blocking-icon"]).toBe("#b91c1c");
    expect(variables["--erp-grid-row-dirty-bg"]).toBe("#fffbeb");
    expect(variables["--erp-grid-selection-handle"]).toBe("#0f766e");
    expect(variables["--erp-shell-content-padding"]).toBe("20px");
    expect(variables["--erp-shell-mobile-bottom-bar-height"]).toBe("72px");
    expect(variables["--erp-form-field-focus-border"]).toBe("#0f766e");
    expect(variables["--erp-form-field-gap"]).toBe("10px");
    expect(variables["--erp-size-intent-hug"]).toBe("max-content");
    expect(variables["--erp-size-intent-fill"]).toBe("100%");
    expect(variables["--erp-size-intent-fit"]).toBe("fit-content");
    expect(variables["--erp-control-width-xs"]).toBe("6rem");
    expect(variables["--erp-control-width-xl"]).toBe("24rem");
  });

  it("defines the modern light ERP variable contract for every named theme", () => {
    const contractVariables = [
      "--erp-color-app-bg",
      "--erp-color-page-bg",
      "--erp-color-surface",
      "--erp-color-surface-muted",
      "--erp-color-surface-raised",
      "--erp-color-surface-accent",
      "--erp-color-border",
      "--erp-color-border-muted",
      "--erp-color-border-strong",
      "--erp-color-foreground",
      "--erp-color-foreground-muted",
      "--erp-color-foreground-subtle",
      "--erp-color-foreground-inverse",
      "--erp-color-primary",
      "--erp-color-primary-hover",
      "--erp-color-primary-soft",
      "--erp-color-primary-border",
      "--erp-status-draft-bg",
      "--erp-status-draft-fg",
      "--erp-status-draft-border",
      "--erp-status-submitted-bg",
      "--erp-status-approved-bg",
      "--erp-status-rejected-bg",
      "--erp-status-posted-bg",
      "--erp-status-cancelled-bg",
      "--erp-status-pending-bg",
      "--erp-status-warning-bg",
      "--erp-status-success-bg",
      "--erp-status-danger-bg",
      "--erp-status-info-bg",
      "--erp-focus-ring",
      "--erp-radius-card",
      "--erp-radius-shell",
      "--erp-shadow-none",
      "--erp-shadow-card",
      "--erp-shadow-floating",
      "--erp-control-height",
      "--erp-page-padding",
      "--erp-grid-row-height",
      "--erp-kpi-card-min-height",
      "--erp-chart-grid-color",
    ] as const;

    for (const theme of supportedThemeNames) {
      const variables = getThemeVariables(theme, "comfortable", "light");

      for (const variable of contractVariables) {
        expect(variables[variable]).toBeDefined();
        expect(variables[variable]).not.toBe("");
      }
    }
  });

  it("supports the legacy applyTheme style overload", () => {
    const style = applyTheme("clientA", "compact");

    expect(style["--erp-color-primary" as keyof typeof style]).toBe("#1455d9");
    expect(style["--erp-control-height" as keyof typeof style]).toBe("32px");
  });

  it("sets and cleans up element theme attributes and variables", () => {
    withFakeHTMLElement(() => {
      const element = new FakeElement() as unknown as HTMLElement;
      element.setAttribute("data-theme", "default");
      element.style.setProperty("--erp-color-primary", "previous");

      const cleanup = applyTheme(element, {
        theme: "clientB",
        density: "touch",
        colorMode: "light",
      });

      expect(element.getAttribute("data-theme")).toBe("clientB");
      expect(element.getAttribute("data-density")).toBe("touch");
      expect(element.getAttribute("data-color-mode")).toBe("light");
      expect(element.style.getPropertyValue("--erp-color-primary")).toBe("#0f766e");

      cleanup();

      expect(element.getAttribute("data-theme")).toBe("default");
      expect(element.getAttribute("data-density")).toBeNull();
      expect(element.getAttribute("data-color-mode")).toBeNull();
      expect(element.style.getPropertyValue("--erp-color-primary")).toBe("previous");
    });
  });

  it("updates element theme values without leaking the previous theme", () => {
    withFakeHTMLElement(() => {
      const element = new FakeElement() as unknown as HTMLElement;

      applyTheme(element, { theme: "clientA", density: "compact" });
      applyTheme(element, { theme: "clientB", density: "touch" });

      expect(element.getAttribute("data-theme")).toBe("clientB");
      expect(element.getAttribute("data-density")).toBe("touch");
      expect(element.style.getPropertyValue("--erp-color-primary")).toBe("#0f766e");
      expect(element.style.getPropertyValue("--erp-control-height")).toBe("44px");
    });
  });

  it("allows nested providers to override density locally while inheriting theme", () => {
    const html = renderToStaticMarkup(
      createElement(
        ThemeProvider,
        { theme: "clientA", density: "comfortable" },
        createElement(ThemeProvider, { density: "compact" }, "Nested"),
      ),
    );

    expect(html).toContain('data-theme="clientA"');
    expect(html).toContain('data-density="comfortable"');
    expect(html).toContain('data-density="compact"');
    expect(html).not.toContain('data-theme="default"');
  });

  it("creates theme styles for deferred color mode API values", () => {
    const style = createThemeStyle("default", "comfortable", "system");

    expect(style["--erp-color-mode" as keyof typeof style]).toBe("system");
    expect(style["--erp-color-background" as keyof typeof style]).toBeDefined();
  });
});
