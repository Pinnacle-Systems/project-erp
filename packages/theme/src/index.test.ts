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
    expect(variables["--erp-surface-page"]).toBe("#f6fbf9");
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
