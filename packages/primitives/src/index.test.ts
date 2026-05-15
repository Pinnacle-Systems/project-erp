import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Button, SelectField, SelectItem, TextField } from "./index";

describe("@erp-ui-platform/primitives sizing", () => {
  it("renders buttons with hug width by default", () => {
    const html = renderToStaticMarkup(createElement(Button, null, "Save"));

    expect(html).toContain('data-width="hug"');
    expect(html).toContain("w-[var(--erp-size-intent-hug)]");
  });

  it("uses theme density variables when button density is omitted", () => {
    const html = renderToStaticMarkup(createElement(Button, null, "Save"));

    expect(html).toContain("h-[var(--erp-control-height)]");
    expect(html).toContain("px-[var(--erp-control-padding-x)]");
    expect(html).toContain("text-[length:var(--erp-control-font-size)]");
    expect(html).toContain("rounded-[var(--erp-radius-md)]");
    expect(html).not.toContain("h-7 px-2.5 text-xs");
    expect(html).not.toContain("h-11 px-5 text-base");
  });

  it("supports explicit compact button density", () => {
    const html = renderToStaticMarkup(
      createElement(Button, { density: "compact" }, "Save"),
    );

    expect(html).toContain("h-7");
    expect(html).toContain("px-2.5");
    expect(html).toContain("text-xs");
    expect(html).toContain("rounded-[var(--erp-radius-sm)]");
  });

  it("supports explicit comfortable button density", () => {
    const html = renderToStaticMarkup(
      createElement(Button, { density: "comfortable" }, "Save"),
    );

    expect(html).toContain("h-[var(--erp-control-height)]");
    expect(html).toContain("px-[var(--erp-control-padding-x)]");
    expect(html).toContain("text-[length:var(--erp-control-font-size)]");
    expect(html).toContain("rounded-[var(--erp-radius-md)]");
  });

  it("supports explicit touch button density", () => {
    const html = renderToStaticMarkup(
      createElement(Button, { density: "touch" }, "Approve"),
    );

    expect(html).toContain("h-11");
    expect(html).toContain("px-5");
    expect(html).toContain("text-base");
    expect(html).toContain("rounded-[var(--erp-radius-lg)]");
  });

  it("supports fill width for buttons", () => {
    const html = renderToStaticMarkup(
      createElement(Button, { width: "fill" }, "Continue"),
    );

    expect(html).toContain('data-width="fill"');
    expect(html).toContain("w-[var(--erp-size-intent-fill)]");
  });

  it("renders text fields with md control width by default", () => {
    const html = renderToStaticMarkup(
      createElement(TextField, { label: "Customer" }),
    );

    expect(html).toContain('data-width="md"');
    expect(html).toContain("w-[var(--erp-control-width-md)]");
  });

  it("supports fixed token widths for text fields", () => {
    const html = renderToStaticMarkup(
      createElement(TextField, { width: "lg", label: "Customer" }),
    );

    expect(html).toContain('data-width="lg"');
    expect(html).toContain("w-[var(--erp-control-width-lg)]");
  });

  it("renders select fields with md control width by default", () => {
    const item = createElement(SelectItem, { value: "open" }, "Open");
    const html = renderToStaticMarkup(
      createElement(SelectField, {
        label: "Status",
        children: item,
      }),
    );

    expect(html).toContain('data-width="md"');
    expect(html).toContain("w-[var(--erp-control-width-md)]");
  });

  it("supports fixed token widths for select fields", () => {
    const item = createElement(SelectItem, { value: "open" }, "Open");
    const html = renderToStaticMarkup(
      createElement(SelectField, {
        width: "lg",
        label: "Status",
        children: item,
      }),
    );

    expect(html).toContain('data-width="lg"');
    expect(html).toContain("w-[var(--erp-control-width-lg)]");
  });
});
