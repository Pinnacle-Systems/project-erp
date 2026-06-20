import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

import {
  Button,
  GridCellInput,
  SelectField,
  SelectItem,
  TextField,
} from "./index";

const readComponentSource = (fileName: string) =>
  readFileSync(new URL(`./components/${fileName}`, import.meta.url), "utf8");

describe("@erp-ui-platform/primitives sizing", () => {
  it("renders buttons with hug width by default", () => {
    const html = renderToStaticMarkup(createElement(Button, null, "Save"));

    expect(html).toContain('data-width="hug"');
    expect(html).toContain("w-[var(--erp-size-intent-hug)]");
  });

  it("uses theme density variables when button density is omitted", () => {
    const html = renderToStaticMarkup(createElement(Button, null, "Save"));

    expect(html).toContain("h-control");
    expect(html).toContain("px-[var(--erp-control-padding-x)]");
    expect(html).toContain("text-control");
    expect(html).toContain("rounded-control");
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

    expect(html).toContain("h-control");
    expect(html).toContain("px-[var(--erp-control-padding-x)]");
    expect(html).toContain("text-control");
    expect(html).toContain("rounded-control");
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

describe("GridCellInput sizing", () => {
  it("uses grid cell height token instead of hardcoded h-6", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("h-(--erp-grid-cell-height)");
    expect(html).not.toContain("h-6");
  });

  it("uses grid cell padding-x token instead of hardcoded px-1.5", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("px-(--erp-grid-cell-padding-x)");
    expect(html).not.toContain("px-1.5");
  });

  it("preserves py-0 so vertical padding is not inherited from the token", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("py-0");
  });

  it("uses the current surface-muted token for hover background", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("hover:bg-surface-muted");
    expect(html).not.toContain("hover:bg-(--erp-color-surface-muted)");
  });
});

describe("dropdown and select item states", () => {
  it("uses elevated surface tokens for select hover and keyboard highlight states", () => {
    const source = readComponentSource("select-field.tsx");

    expect(source).toContain("hover:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("focus:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("data-[highlighted]:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("data-[state=checked]:bg-[var(--erp-surface-selected)]");
    expect(source).toContain("data-[state=checked]:hover:bg-[var(--erp-surface-selected-hover)]");
    expect(source).toContain("data-[state=checked]:focus:bg-[var(--erp-surface-selected-hover)]");
    expect(source).toContain(
      "data-[state=checked]:data-[highlighted]:bg-[var(--erp-surface-selected-hover)]",
    );
    expect(source).not.toContain("focus:bg-[var(--erp-color-primary-soft)]");
  });

  it("uses elevated surface tokens for dropdown hover and keyboard highlight states", () => {
    const source = readComponentSource("dropdown-menu.tsx");

    expect(source).toContain("hover:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("focus:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("data-[highlighted]:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("data-[state=checked]:bg-[var(--erp-surface-selected)]");
    expect(source).toContain("data-[state=checked]:hover:bg-[var(--erp-surface-selected-hover)]");
    expect(source).toContain("data-[state=checked]:focus:bg-[var(--erp-surface-selected-hover)]");
    expect(source).toContain(
      "data-[state=checked]:data-[highlighted]:bg-[var(--erp-surface-selected-hover)]",
    );
    expect(source).not.toContain("bg-white");
    expect(source).not.toContain("text-white");
  });
});

describe("GridCellInput typography", () => {
  it("uses token-driven font size matching grid body cells", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("text-(length:--erp-font-size-xs)");
    expect(html).not.toContain("text-xs");
    expect(html).not.toContain("text-[11px]");
    expect(html).not.toContain("text-[10px]");
  });

  it("uses dense line-height token", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("leading-(--erp-line-height-dense)");
  });

  it("uses secondary text token matching static grid cell display", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).toContain("text-foreground");
  });

  it("applies tabular-nums and text-right for numeric cells", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, { numeric: true }));

    expect(html).toContain("tabular-nums");
    expect(html).toContain("text-right");
  });

  it("does not apply tabular-nums for non-numeric cells", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).not.toContain("tabular-nums");
    expect(html).not.toContain("text-right");
  });

  it("applies read-only background token at rest and suppresses hover affordances", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, { readOnly: true }));

    expect(html).toContain("read-only:bg-transparent");
    expect(html).toContain("read-only:hover:border-transparent");
    expect(html).toContain("read-only:hover:bg-transparent");
    expect(html).toContain("read-only:cursor-default");
  });
});

describe("GridCellInput error state", () => {
  it("applies error border token when error=true", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, { error: true }));

    expect(html).toContain("border-danger");
  });

  it("overrides focus-ring variable to error color so focus shadow stays red when invalid", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, { error: true }));

    expect(html).toContain("focus-visible:ring-danger");
  });

  it("overrides editing-bg variable to error cell background so focused error cell shows red tint", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, { error: true }));

    expect(html).toContain("focus-visible:bg-danger/10");
  });

  it("does not apply error editing-bg override when error is absent", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).not.toContain("focus-visible:bg-danger/10");
  });

  it("does not apply error border or focus-ring override when error is absent", () => {
    const html = renderToStaticMarkup(createElement(GridCellInput, null));

    expect(html).not.toContain("border-danger");
    expect(html).not.toContain("focus-visible:ring-danger");
  });

  it("retains blue focus shadow class regardless of error state", () => {
    const htmlValid = renderToStaticMarkup(createElement(GridCellInput, null));
    const htmlError = renderToStaticMarkup(createElement(GridCellInput, { error: true }));

    expect(htmlValid).toContain("focus-visible:ring-primary");
    expect(htmlError).toContain("focus-visible:ring-danger");
    expect(htmlError).not.toContain("focus-visible:ring-primary");
  });
});
