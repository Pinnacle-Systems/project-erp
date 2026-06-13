import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  ValidationMessage,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  DatePicker,
  FieldGroup,
} from "./index";

describe("ValidationMessage", () => {
  it("renders children and tone class", () => {
    const html = renderToStaticMarkup(
      createElement(ValidationMessage, { tone: "error" }, "Required field")
    );
    expect(html).toContain("Required field");
    expect(html).toContain("text-danger");
  });
});

describe("Checkbox", () => {
  it("associates label and input", () => {
    const html = renderToStaticMarkup(
      createElement(Checkbox, { id: "test-chk", label: "Accept terms" })
    );
    expect(html).toContain('id="test-chk"');
    expect(html).toContain('for="test-chk"');
    expect(html).toContain("Accept terms");
  });

  it("renders error text and sets aria-invalid", () => {
    const html = renderToStaticMarkup(
      createElement(Checkbox, { id: "test-chk", error: "Must accept" })
    );
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain("Must accept");
    expect(html).toContain('id="test-chk-error"');
    expect(html).toContain('aria-describedby="test-chk-error"');
  });
});

describe("RadioGroup", () => {
  it("renders options and group label", () => {
    const radio1 = createElement(Radio, { value: "a", label: "Option A", id: "opt-a" });
    const radio2 = createElement(Radio, { value: "b", label: "Option B", id: "opt-b" });
    const html = renderToStaticMarkup(
      createElement(RadioGroup, { label: "Pick one" }, radio1, radio2)
    );
    expect(html).toContain("Pick one");
    expect(html).toContain('value="a"');
    expect(html).toContain("Option A");
    expect(html).toContain('value="b"');
    expect(html).toContain("Option B");
  });
});

describe("Switch", () => {
  it("associates label and input", () => {
    const html = renderToStaticMarkup(
      createElement(Switch, { id: "test-sw", label: "Enable feature" })
    );
    expect(html).toContain('id="test-sw"');
    expect(html).toContain('for="test-sw"');
    expect(html).toContain("Enable feature");
  });
});

describe("DatePicker", () => {
  it("renders label and value/default value", () => {
    const html = renderToStaticMarkup(
      createElement(DatePicker, { id: "test-date", label: "Start Date", defaultValue: "2025-01-01" })
    );
    expect(html).toContain("Start Date");
    expect(html).toContain('id="test-date"');
    expect(html).toContain('for="test-date"');
    expect(html).toContain('value="2025-01-01"');
  });
});

describe("FieldGroup", () => {
  it("renders label, description, error, and children", () => {
    const html = renderToStaticMarkup(
      createElement(
        FieldGroup,
        { label: "Settings", description: "Desc text", error: "Group err" },
        createElement("div", { id: "child-div" }, "Child")
      )
    );
    expect(html).toContain("Settings");
    expect(html).toContain("Desc text");
    expect(html).toContain("Group err");
    expect(html).toContain('id="child-div"');
    expect(html).toContain("Child");
  });
});
