import { describe, expect, it } from "vitest";

import {
  densityTokens,
  semanticColorTokens,
  statusTokens,
  zIndexTokens,
} from "./index";

describe("@erp-ui-platform/tokens", () => {
  it("exposes semantic colors required by platform UI", () => {
    expect(semanticColorTokens.success.accent).toBeDefined();
    expect(semanticColorTokens.warning.accent).toBeDefined();
    expect(semanticColorTokens.danger.accent).toBeDefined();
    expect(semanticColorTokens.info.accent).toBeDefined();
    expect(semanticColorTokens.muted.background).toBeDefined();
    expect(semanticColorTokens.border.default).toBeDefined();
    expect(semanticColorTokens.background.app).toBeDefined();
    expect(semanticColorTokens.foreground.default).toBeDefined();
  });

  it("keeps desktop and mobile density concepts distinct", () => {
    expect(densityTokens.desktop.compact.gridRowHeight).toBeDefined();
    expect(densityTokens.mobile.compact.touchTarget).toBeDefined();
    expect(densityTokens.mobile.compact.touchTarget).not.toEqual(
      densityTokens.desktop.compact.gridRowHeight,
    );
  });

  it("defines generic workflow status tokens without client-specific statuses", () => {
    expect(statusTokens.pendingApproval.semantic).toBe("warning");
    expect(statusTokens.approved.semantic).toBe("success");
    expect(statusTokens.rejected.semantic).toBe("danger");
    expect(statusTokens).not.toHaveProperty("gstPosted");
  });

  it("defines layered z-index tokens", () => {
    expect(zIndexTokens.modal).toBeGreaterThan(zIndexTokens.overlay);
    expect(zIndexTokens.tooltip).toBeGreaterThan(zIndexTokens.modal);
  });
});
