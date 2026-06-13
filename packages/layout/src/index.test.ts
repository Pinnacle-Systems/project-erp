import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Stack, Divider, Card, Panel, FormGrid, FormSection, DataLabel, DescriptionList } from "./index";

describe("@erp-ui-platform/layout Stack", () => {
  it("renders children with correct default gap and direction classes", () => {
    const html = renderToStaticMarkup(createElement(Stack, null, "Item"));
    expect(html).toContain("flex-col");
    expect(html).toContain("gap-4");
  });

  it("applies horizontal direction and custom gap", () => {
    const html = renderToStaticMarkup(createElement(Stack, { direction: "horizontal", gap: "lg" }, "Item"));
    expect(html).toContain("flex-row");
    expect(html).toContain("gap-6");
  });
});

describe("@erp-ui-platform/layout Divider", () => {
  it("renders default horizontal divider", () => {
    const html = renderToStaticMarkup(createElement(Divider, null));
    expect(html).toContain("w-full");
    expect(html).toContain("h-px");
    expect(html).toContain("bg-border");
  });

  it("renders vertical subtle divider", () => {
    const html = renderToStaticMarkup(createElement(Divider, { orientation: "vertical", variant: "subtle" }));
    expect(html).toContain("h-full");
    expect(html).toContain("w-px");
    expect(html).toContain("bg-border-subtle");
  });
});

describe("@erp-ui-platform/layout Card", () => {
  it("renders default card with correct shadow and border", () => {
    const html = renderToStaticMarkup(createElement(Card, null, "Content"));
    expect(html).toContain("border-border");
    expect(html).toContain("shadow-card");
    expect(html).toContain("rounded-card");
  });

  it("renders subtle card without shadow", () => {
    const html = renderToStaticMarkup(createElement(Card, { variant: "subtle" }, "Content"));
    expect(html).toContain("border-border-subtle");
    expect(html).toContain("shadow-none");
    expect(html).toContain("bg-surface-muted");
  });
});

describe("@erp-ui-platform/layout Panel", () => {
  it("renders basic panel without header", () => {
    const html = renderToStaticMarkup(createElement(Panel, null, "Content"));
    expect(html).toContain("bg-surface");
    expect(html).toContain("rounded-panel");
    expect(html).not.toContain("text-sm font-semibold text-foreground");
  });

  it("renders panel header when title is provided", () => {
    const html = renderToStaticMarkup(createElement(Panel, { title: "Title" }, "Content"));
    expect(html).toContain("text-sm font-semibold text-foreground");
    expect(html).toContain("Title");
  });
});

describe("@erp-ui-platform/layout FormGrid", () => {
  it("renders 3 columns with expected classes", () => {
    const html = renderToStaticMarkup(createElement(FormGrid, { columns: 3 }, "Content"));
    expect(html).toContain("lg:grid-cols-3");
    expect(html).toContain("sm:grid-cols-2");
  });
});

describe("@erp-ui-platform/layout FormSection", () => {
  it("renders title and description", () => {
    const html = renderToStaticMarkup(createElement(FormSection, { title: "Title", description: "Desc" }, "Content"));
    expect(html).toContain("Title");
    expect(html).toContain("Desc");
    expect(html).toContain("text-sm font-medium text-foreground");
    expect(html).toContain("text-xs text-muted-foreground");
  });
});

describe("@erp-ui-platform/layout DataLabel", () => {
  it("renders label and value", () => {
    const html = renderToStaticMarkup(createElement(DataLabel, { label: "Name", value: "John" }));
    expect(html).toContain("Name");
    expect(html).toContain("John");
  });

  it("renders fallback empty value", () => {
    const html = renderToStaticMarkup(createElement(DataLabel, { label: "Name" }));
    expect(html).toContain("Name");
    expect(html).toContain("—");
  });
});

describe("@erp-ui-platform/layout DescriptionList", () => {
  it("renders list and item correctly", () => {
    const item = createElement(DescriptionList.Item, { label: "Key", value: "Value", span: 2 });
    const html = renderToStaticMarkup(createElement(DescriptionList, { columns: 4 }, item));
    expect(html).toContain("lg:grid-cols-4");
    expect(html).toContain("sm:col-span-2");
    expect(html).toContain("Key");
    expect(html).toContain("Value");
  });
});
