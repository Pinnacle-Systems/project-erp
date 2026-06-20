import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

import {
  Button,
  DatePicker,
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

describe("date picker calendar popover states", () => {
  it("uses the same popover shell treatment as dropdown and select panels", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("rounded-md");
    expect(source).toContain("border border-border");
    expect(source).toContain("bg-surface");
    expect(source).toContain("shadow-popover");
  });

  it("uses elevated surface tokens for date hover, selected, and selected interaction states", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("hover:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("focus-visible:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("data-[selected=true]:bg-[var(--erp-surface-selected)]");
    expect(source).toContain("data-[selected=true]:hover:bg-[var(--erp-surface-selected-hover)]");
    expect(source).toContain("data-[selected=true]:focus-visible:bg-[var(--erp-surface-selected-hover)]");
  });

  it("keeps today and calendar actions on semantic tokens", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("data-[today=true]:border-[var(--erp-border-selected)]");
    expect(source).toContain("text-[var(--erp-text-link)]");
    expect(source).toContain("text-muted-foreground");
    expect(source).toContain("text-foreground");
  });

  it("does not hardcode calendar popover colors", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).not.toMatch(/#[0-9a-fA-F]{3,8}/);
    expect(source).not.toContain("bg-white");
    expect(source).not.toContain("text-white");
    expect(source).not.toContain("bg-slate");
    expect(source).not.toContain("bg-gray");
    expect(source).not.toContain("border-slate");
    expect(source).not.toContain("border-gray");
    expect(source).not.toContain("bg-blue");
  });

  it("renders an editable visible field plus a hidden normalized form value", () => {
    const html = renderToStaticMarkup(
      createElement(DatePicker, { id: "posting-date", defaultValue: "2025-05-15" }),
    );

    expect(html).toContain('type="text"');
    expect(html).toContain('value="15/05/2025"');
    expect(html).toContain('type="hidden"');
    expect(html).toContain('id="posting-date-value"');
    expect(html).toContain('value="2025-05-15"');
    expect(html).toContain('id="posting-date"');
    expect(html).toContain('aria-label="Open date picker calendar"');
    expect(html).toContain('aria-haspopup="dialog"');
  });

  it("renders controlled and uncontrolled hidden form values in YYYY-MM-DD format", () => {
    const uncontrolledHtml = renderToStaticMarkup(
      createElement(DatePicker, { id: "uncontrolled-date", name: "uncontrolledDate", defaultValue: "2025-05-15" }),
    );
    const controlledHtml = renderToStaticMarkup(
      createElement(DatePicker, { id: "controlled-date", name: "controlledDate", value: "2025-06-20" }),
    );

    expect(uncontrolledHtml).toContain('name="uncontrolledDate"');
    expect(uncontrolledHtml).toContain('value="2025-05-15"');
    expect(controlledHtml).toContain('name="controlledDate"');
    expect(controlledHtml).toContain('value="2025-06-20"');
  });

  it("keeps keyboard and close behavior explicit for the custom calendar popover", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("event.key === \"Escape\"");
    expect(source).toContain("triggerRef.current?.focus()");
    expect(source).toContain("findFocusableDayIndex");
    expect(source).toContain("tabIndex={index === focusableDayIndex ? 0 : -1}");
    expect(source).toContain("case \"ArrowLeft\"");
    expect(source).toContain("case \"ArrowRight\"");
    expect(source).toContain("case \"ArrowUp\"");
    expect(source).toContain("case \"ArrowDown\"");
    expect(source).toContain("case \"Home\"");
    expect(source).toContain("case \"End\"");
    expect(source).toContain("case \"PageUp\"");
    expect(source).toContain("case \"PageDown\"");
    expect(source).toContain("event.shiftKey");
    expect(source).toContain("openPopover(true)");
  });

  it("supports typed dates, draft validation, and normalized submit values", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("displayFormat?: DateDisplayFormat");
    expect(source).toContain("parseTypedDate");
    expect(source).toContain("\"dd/mm/yyyy\"");
    expect(source).toContain("\"yyyy-mm-dd\"");
    expect(source).toContain("inputMode=\"numeric\"");
    expect(source).toContain("normalizedSubmitValue");
    expect(source).toContain("draftError || isDraftDirty ? \"\" : selectedValue ?? \"\"");
    expect(source).toContain("Enter a valid date in");
    expect(source).toContain("Date is outside the allowed range.");
  });

  it("provides faster month and year navigation without leaving the token family", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("aria-label=\"Previous year\"");
    expect(source).toContain("aria-label=\"Previous month\"");
    expect(source).toContain("aria-label=\"Month\"");
    expect(source).toContain("aria-label=\"Year\"");
    expect(source).toContain("aria-label=\"Next month\"");
    expect(source).toContain("aria-label=\"Next year\"");
    expect(source).toContain("handleMonthChange");
    expect(source).toContain("handleYearChange");
    expect(source).toContain("canMoveToMonth");
    expect(source).toContain("hover:bg-[var(--erp-surface-hover)]");
    expect(source).toContain("border border-border bg-surface");
  });

  it("labels the dialog, day cells, action buttons, today, selected, and disabled dates for assistive tech", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("aria-labelledby={headingId}");
    expect(source).toContain("role=\"grid\"");
    expect(source).toContain("role=\"columnheader\"");
    expect(source).toContain("role=\"gridcell\"");
    expect(source).toContain("aria-label={dayLabel}");
    expect(source).toContain("isToday ? \"today\"");
    expect(source).toContain("isSelected ? \"selected\"");
    expect(source).toContain("isDisabled ? \"unavailable\"");
    expect(source).toContain("aria-label=\"Clear selected date\"");
    expect(source).toContain("aria-label=\"Select today\"");
    expect(source).toContain("aria-label=\"Open date picker calendar\"");
  });

  it("prevents out-of-range selection and disables Today when it falls outside min/max", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("if (isOutOfRange(date, props.min, props.max)) return;");
    expect(source).toContain("disabled={todayDisabled}");
    expect(source).toContain("const todayDisabled = today ? isOutOfRange(today, props.min, props.max) : true;");
  });

  it("uses fixed viewport positioning so overflow containers do not clip the popover shell", () => {
    const source = readComponentSource("date-picker.tsx");

    expect(source).toContain("\"fixed z-50");
    expect(source).toContain("getBoundingClientRect()");
    expect(source).toContain("window.addEventListener(\"scroll\", onPositionChange, true)");
    expect(source).toContain("window.addEventListener(\"resize\", onPositionChange)");
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
