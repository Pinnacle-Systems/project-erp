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
