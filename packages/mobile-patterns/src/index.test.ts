import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { MobileBottomActionBar } from "./index";

describe("@erp-ui-platform/mobile-patterns", () => {
  it("keeps bottom action bar buttons touch sized", () => {
    const html = renderToStaticMarkup(
      createElement(MobileBottomActionBar, {
        actions: [
          { id: "approve", label: "Approve", variant: "default" },
          { id: "reject", label: "Reject", variant: "destructive" },
        ],
      }),
    );

    expect(html).toContain('data-component="MobileBottomActionBar"');
    expect(html).toContain("h-11");
    expect(html).toContain("px-5");
    expect(html).toContain("text-base");
    expect(html).toContain("rounded-[var(--erp-radius-lg)]");
  });
});
