import { describe, expect, it } from "vitest";

import {
  borderTokens,
  densityTokens,
  formTokens,
  gridTokens,
  semanticColorTokens,
  shellTokens,
  sizingTokens,
  stateTokens,
  statusTokens,
  surfaceTokens,
  textTokens,
  validationTokens,
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

  it("exposes batch 1 semantic and ERP state token families", () => {
    expect(surfaceTokens.page).toBeDefined();
    expect(surfaceTokens.selected).toBeDefined();
    expect(textTokens.primary).toBeDefined();
    expect(textTokens.link).toBeDefined();
    expect(borderTokens.focus).toBeDefined();
    expect(borderTokens.danger).toBeDefined();
    expect(stateTokens.dirty).toBeDefined();
    expect(stateTokens.dirtyBorder).toBeDefined();
    expect(stateTokens.saving).toBeDefined();
  });

  it("keeps validation severity tokens separate from document statuses", () => {
    expect(validationTokens.error.bg).toBeDefined();
    expect(validationTokens.blocking.icon).toBeDefined();
    expect(validationTokens).not.toHaveProperty("approved");
    expect(statusTokens.approved).toBeDefined();
  });

  it("exposes ERP grid and table token families", () => {
    expect(gridTokens.header.bg).toBeDefined();
    expect(gridTokens.row.dirtyBg).toBeDefined();
    expect(gridTokens.row.deletedBg).toBeDefined();
    expect(gridTokens.cell.focusRing).toBeDefined();
    expect(gridTokens.selectionHandle).toBeDefined();
  });

  it("separates hover, alt-row, and cell-editing backgrounds", () => {
    // hover must use a primary tint, not the same neutral as the alt-row stripe
    expect(gridTokens.row.hoverBg).not.toBe(gridTokens.row.altBg);
    // editing/focus must be visually stronger than hover
    expect(gridTokens.cell.editingBg).not.toBe(gridTokens.row.hoverBg);
    // alt-row and editing must not collide either
    expect(gridTokens.cell.editingBg).not.toBe(gridTokens.row.altBg);
  });

  it("exposes shell and form layout token families", () => {
    expect(shellTokens.topbar.height).toBeDefined();
    expect(shellTokens.workspaceTabs.height).toBeDefined();
    expect(shellTokens.splitPane.dividerWidth).toBeDefined();
    expect(formTokens.label.width).toBeDefined();
    expect(formTokens.field.focusBorder).toBeDefined();
    expect(formTokens.requiredMarker.color).toBeDefined();
  });

  it("exposes sizing intent and control width tokens", () => {
    expect(Object.keys(sizingTokens.intent)).toEqual(["hug", "fill", "fit"]);
    expect(Object.keys(sizingTokens.control)).toEqual(["xs", "sm", "md", "lg", "xl"]);
    expect(sizingTokens.intent.hug).toBe("max-content");
    expect(sizingTokens.intent.fill).toBe("100%");
    expect(sizingTokens.control.md).toBe("12rem");
  });

  it("defines layered z-index tokens", () => {
    expect(zIndexTokens.modal).toBeGreaterThan(zIndexTokens.overlay);
    expect(zIndexTokens.tooltip).toBeGreaterThan(zIndexTokens.modal);
  });
});
