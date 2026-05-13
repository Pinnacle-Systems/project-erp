import {
  createContext,
  type CSSProperties,
  type ReactNode,
  useContext,
  useMemo,
} from "react";

export type ThemeName = "default" | "clientA" | "clientB";
export type Density = "compact" | "comfortable" | "touch";
export type ColorMode = "light" | "dark" | "system";

export type ThemeTokens = {
  name: ThemeName;
  fontFamilySans: string;
  fontFamilyMono: string;
  colors: {
    bg: string;
    fg: string;
    surface: string;
    surfaceMuted: string;
    border: string;
    borderStrong: string;
    muted: string;
    subtle: string;
    accent: string;
    accentHover: string;
    accentActive: string;
    accentSoft: string;
    accentBorder: string;
    focusRing: string;
    danger: string;
    dangerHover: string;
    dangerSoft: string;
    dangerBorder: string;
    warning: string;
    warningSoft: string;
    warningBorder: string;
    success: string;
    successSoft: string;
    successBorder: string;
    info: string;
    infoSoft: string;
    infoBorder: string;
  };
  radius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    control: string;
    panel: string;
  };
  shadow: {
    xs: string;
    sm: string;
    md: string;
    focus: string;
    focusError: string;
  };
};

export type DensityTokens = {
  name: Density;
  pagePadding: string;
  gap: string;
  sectionGap: string;
  controlHeight: string;
  controlPaddingX: string;
  controlGap: string;
  controlFontSize: string;
  fieldGap: string;
  gridRowHeight: string;
  toolbarHeight: string;
  mobileBottomBarHeight: string;
  iconSize: string;
  touchTarget: string;
};

export const defaultTheme: ThemeTokens = {
  name: "default",
  fontFamilySans:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
  fontFamilyMono:
    "\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, monospace",
  colors: {
    bg: "#f8fafc",
    fg: "#0f172a",
    surface: "#ffffff",
    surfaceMuted: "#f8fafc",
    border: "#e2e8f0",
    borderStrong: "#cbd5e1",
    muted: "#64748b",
    subtle: "#94a3b8",
    accent: "#2563eb",
    accentHover: "#1d4ed8",
    accentActive: "#1e40af",
    accentSoft: "#eff6ff",
    accentBorder: "#bfdbfe",
    focusRing: "rgb(37 99 235 / 0.28)",
    danger: "#b91c1c",
    dangerHover: "#b91c1c",
    dangerSoft: "#fef2f2",
    dangerBorder: "#fecaca",
    warning: "#92400e",
    warningSoft: "#fffbeb",
    warningBorder: "#fde68a",
    success: "#166534",
    successSoft: "#f0fdf4",
    successBorder: "#bbf7d0",
    info: "#2563eb",
    infoSoft: "#eff6ff",
    infoBorder: "#bfdbfe",
  },
  radius: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    control: "0.375rem",
    panel: "0.5rem",
  },
  shadow: {
    xs: "0 1px 2px rgb(15 23 42 / 0.06)",
    sm: "0 1px 3px rgb(15 23 42 / 0.12), 0 1px 2px rgb(15 23 42 / 0.08)",
    md: "0 10px 25px rgb(15 23 42 / 0.12)",
    focus: "0 0 0 3px rgb(37 99 235 / 0.28)",
    focusError: "0 0 0 3px rgb(185 28 28 / 0.20)",
  },
};

export const clientATheme: ThemeTokens = {
  ...defaultTheme,
  name: "clientA",
  colors: {
    ...defaultTheme.colors,
    bg: "#f7f9ff",
    accent: "#1455d9",
    accentHover: "#0f47bd",
    accentActive: "#0b3a99",
    accentSoft: "#edf4ff",
    accentBorder: "#c7dcff",
    focusRing: "rgb(20 85 217 / 0.30)",
    info: "#1455d9",
    infoSoft: "#edf4ff",
    infoBorder: "#c7dcff",
  },
};

export const clientBTheme: ThemeTokens = {
  ...defaultTheme,
  name: "clientB",
  colors: {
    ...defaultTheme.colors,
    bg: "#f6fbf9",
    accent: "#0f766e",
    accentHover: "#0d625c",
    accentActive: "#115e59",
    accentSoft: "#ecfdf5",
    accentBorder: "#a7f3d0",
    focusRing: "rgb(15 118 110 / 0.30)",
    info: "#0f766e",
    infoSoft: "#ecfdf5",
    infoBorder: "#a7f3d0",
  },
  radius: {
    ...defaultTheme.radius,
    control: "0.25rem",
    panel: "0.375rem",
  },
};

export const densityTokens: Record<Density, DensityTokens> = {
  compact: {
    name: "compact",
    pagePadding: "16px",
    gap: "8px",
    sectionGap: "12px",
    controlHeight: "32px",
    controlPaddingX: "12px",
    controlGap: "6px",
    controlFontSize: "0.75rem",
    fieldGap: "6px",
    gridRowHeight: "32px",
    toolbarHeight: "40px",
    mobileBottomBarHeight: "56px",
    iconSize: "16px",
    touchTarget: "32px",
  },
  comfortable: {
    name: "comfortable",
    pagePadding: "24px",
    gap: "12px",
    sectionGap: "16px",
    controlHeight: "36px",
    controlPaddingX: "14px",
    controlGap: "8px",
    controlFontSize: "0.875rem",
    fieldGap: "8px",
    gridRowHeight: "40px",
    toolbarHeight: "48px",
    mobileBottomBarHeight: "64px",
    iconSize: "18px",
    touchTarget: "36px",
  },
  touch: {
    name: "touch",
    pagePadding: "20px",
    gap: "16px",
    sectionGap: "20px",
    controlHeight: "44px",
    controlPaddingX: "18px",
    controlGap: "10px",
    controlFontSize: "1rem",
    fieldGap: "10px",
    gridRowHeight: "48px",
    toolbarHeight: "56px",
    mobileBottomBarHeight: "72px",
    iconSize: "20px",
    touchTarget: "44px",
  },
};

export const themes: Record<ThemeName, ThemeTokens> = {
  default: defaultTheme,
  clientA: clientATheme,
  clientB: clientBTheme,
};

export const getTheme = (theme: ThemeName | ThemeTokens = "default"): ThemeTokens =>
  typeof theme === "string" ? themes[theme] : theme;

export const getDensity = (density: Density = "comfortable"): DensityTokens =>
  densityTokens[density];

export const supportedThemeNames = Object.keys(themes) as ThemeName[];
export const supportedDensities = Object.keys(densityTokens) as Density[];
export const supportedColorModes = ["light", "dark", "system"] as const satisfies readonly ColorMode[];
export const productionColorMode: ColorMode = "light";

export const requiredThemeVariables = [
  "--erp-color-background",
  "--erp-color-foreground",
  "--erp-color-surface",
  "--erp-color-surface-muted",
  "--erp-color-border",
  "--erp-color-border-strong",
  "--erp-color-primary",
  "--erp-color-primary-foreground",
  "--erp-color-secondary",
  "--erp-color-secondary-foreground",
  "--erp-color-muted",
  "--erp-color-muted-foreground",
  "--erp-color-danger",
  "--erp-color-danger-foreground",
  "--erp-color-warning",
  "--erp-color-warning-foreground",
  "--erp-color-success",
  "--erp-color-success-foreground",
  "--erp-color-info",
  "--erp-color-info-foreground",
  "--erp-surface-page",
  "--erp-surface-panel",
  "--erp-surface-card",
  "--erp-surface-raised",
  "--erp-surface-sunken",
  "--erp-surface-overlay",
  "--erp-surface-hover",
  "--erp-surface-selected",
  "--erp-surface-active",
  "--erp-surface-disabled",
  "--erp-surface-inverse",
  "--erp-text-primary",
  "--erp-text-secondary",
  "--erp-text-muted",
  "--erp-text-subtle",
  "--erp-text-disabled",
  "--erp-text-inverse",
  "--erp-text-link",
  "--erp-text-danger",
  "--erp-text-warning",
  "--erp-text-success",
  "--erp-text-info",
  "--erp-border-default",
  "--erp-border-muted",
  "--erp-border-strong",
  "--erp-border-focus",
  "--erp-border-danger",
  "--erp-border-warning",
  "--erp-border-success",
  "--erp-border-selected",
  "--erp-border-disabled",
  "--erp-state-hover",
  "--erp-state-active",
  "--erp-state-selected",
  "--erp-state-focus",
  "--erp-state-disabled",
  "--erp-state-readonly",
  "--erp-state-loading",
  "--erp-state-dragging",
  "--erp-state-blocked",
  "--erp-state-locked",
  "--erp-state-new",
  "--erp-state-dirty",
  "--erp-state-deleted",
  "--erp-state-stale",
  "--erp-state-error",
  "--erp-state-warning",
  "--erp-state-saving",
  "--erp-state-dirty-border",
  "--erp-state-deleted-border",
  "--erp-state-error-border",
  "--erp-state-warning-border",
  "--erp-state-stale-border",
  "--erp-validation-info-bg",
  "--erp-validation-info-text",
  "--erp-validation-info-border",
  "--erp-validation-info-icon",
  "--erp-validation-warning-bg",
  "--erp-validation-warning-text",
  "--erp-validation-warning-border",
  "--erp-validation-warning-icon",
  "--erp-validation-error-bg",
  "--erp-validation-error-text",
  "--erp-validation-error-border",
  "--erp-validation-error-icon",
  "--erp-validation-blocking-bg",
  "--erp-validation-blocking-text",
  "--erp-validation-blocking-border",
  "--erp-validation-blocking-icon",
  "--erp-grid-header-bg",
  "--erp-grid-header-text",
  "--erp-grid-header-border",
  "--erp-grid-row-bg",
  "--erp-grid-row-alt-bg",
  "--erp-grid-row-hover-bg",
  "--erp-grid-row-selected-bg",
  "--erp-grid-row-new-bg",
  "--erp-grid-row-dirty-bg",
  "--erp-grid-row-deleted-bg",
  "--erp-grid-row-error-bg",
  "--erp-grid-row-warning-bg",
  "--erp-grid-row-stale-bg",
  "--erp-grid-row-readonly-bg",
  "--erp-grid-row-border",
  "--erp-grid-cell-bg",
  "--erp-grid-cell-editing-bg",
  "--erp-grid-cell-focus-ring",
  "--erp-grid-cell-readonly-bg",
  "--erp-grid-cell-error-bg",
  "--erp-grid-cell-warning-bg",
  "--erp-grid-cell-stale-bg",
  "--erp-grid-cell-pinned-bg",
  "--erp-grid-footer-bg",
  "--erp-grid-footer-text",
  "--erp-grid-total-row-bg",
  "--erp-grid-group-row-bg",
  "--erp-grid-resize-handle",
  "--erp-grid-selection-handle",
  "--erp-shell-topbar-height",
  "--erp-shell-sidebar-width",
  "--erp-shell-sidebar-collapsed-width",
  "--erp-shell-footer-height",
  "--erp-shell-mobile-header-height",
  "--erp-shell-mobile-bottom-nav-height",
  "--erp-shell-mobile-bottom-bar-height",
  "--erp-shell-workspace-tabs-height",
  "--erp-shell-content-max-width",
  "--erp-shell-content-padding",
  "--erp-shell-content-gap",
  "--erp-shell-panel-padding",
  "--erp-shell-panel-gap",
  "--erp-shell-split-pane-min-width",
  "--erp-shell-split-pane-divider-width",
  "--erp-form-label-width",
  "--erp-form-label-gap",
  "--erp-form-label-color",
  "--erp-form-label-required-color",
  "--erp-form-field-gap",
  "--erp-form-field-inline-gap",
  "--erp-form-field-help-text-color",
  "--erp-form-field-error-text-color",
  "--erp-form-field-disabled-bg",
  "--erp-form-field-readonly-bg",
  "--erp-form-field-border",
  "--erp-form-field-error-border",
  "--erp-form-field-focus-border",
  "--erp-form-section-gap",
  "--erp-form-section-padding",
  "--erp-form-section-border",
  "--erp-form-error-gap",
  "--erp-form-required-marker-color",
  "--erp-size-intent-hug",
  "--erp-size-intent-fill",
  "--erp-size-intent-fit",
  "--erp-control-width-xs",
  "--erp-control-width-sm",
  "--erp-control-width-md",
  "--erp-control-width-lg",
  "--erp-control-width-xl",
  "--erp-status-draft",
  "--erp-status-submitted",
  "--erp-status-approved",
  "--erp-status-rejected",
  "--erp-status-posted",
  "--erp-status-cancelled",
  "--erp-focus-ring",
  "--erp-focus-ring-width",
  "--erp-focus-ring-offset",
  "--erp-disabled-opacity",
  "--erp-radius-sm",
  "--erp-radius-md",
  "--erp-radius-lg",
  "--erp-shadow-sm",
  "--erp-shadow-md",
  "--erp-control-height",
  "--erp-control-padding-x",
  "--erp-control-gap",
  "--erp-field-gap",
  "--erp-page-padding",
  "--erp-section-gap",
  "--erp-grid-row-height",
  "--erp-toolbar-height",
  "--erp-mobile-bottom-bar-height",
  "--erp-icon-size",
  "--erp-font-sans",
  "--erp-font-mono",
  "--erp-font-size-xs",
  "--erp-font-size-sm",
  "--erp-font-size-md",
  "--erp-font-size-lg",
] as const;

export type ThemeVariableName = (typeof requiredThemeVariables)[number] | `--erp-${string}`;
export type ThemeVariableMap = Record<ThemeVariableName, string>;

export type ThemeOptions = {
  theme?: ThemeName | ThemeTokens;
  density?: Density;
  colorMode?: ColorMode;
};

export const getThemeVariables = (
  theme: ThemeName | ThemeTokens = "default",
  density: Density = "comfortable",
  colorMode: ColorMode = productionColorMode,
): ThemeVariableMap => {
  const t = getTheme(theme);
  const d = getDensity(density);

  return {
    "--erp-font-sans": t.fontFamilySans,
    "--erp-font-mono": t.fontFamilyMono,
    "--erp-font-family-sans": t.fontFamilySans,
    "--erp-font-family-mono": t.fontFamilyMono,
    "--erp-font-size-xs": "0.75rem",
    "--erp-font-size-sm": "0.875rem",
    "--erp-font-size-md": "1rem",
    "--erp-font-size-lg": "1.125rem",
    "--erp-color-background": t.colors.bg,
    "--erp-color-foreground": t.colors.fg,
    "--erp-color-surface": t.colors.surface,
    "--erp-color-surface-muted": t.colors.surfaceMuted,
    "--erp-color-border": t.colors.border,
    "--erp-color-border-strong": t.colors.borderStrong,
    "--erp-color-primary": t.colors.accent,
    "--erp-color-primary-foreground": "#ffffff",
    "--erp-color-secondary": t.colors.surface,
    "--erp-color-secondary-foreground": t.colors.fg,
    "--erp-color-muted": t.colors.surfaceMuted,
    "--erp-color-muted-foreground": t.colors.muted,
    "--erp-color-danger": t.colors.danger,
    "--erp-color-danger-foreground": "#ffffff",
    "--erp-color-warning": t.colors.warning,
    "--erp-color-warning-foreground": "#ffffff",
    "--erp-color-success": t.colors.success,
    "--erp-color-success-foreground": "#ffffff",
    "--erp-color-info": t.colors.info,
    "--erp-color-info-foreground": "#ffffff",
    "--erp-surface-page": t.colors.bg,
    "--erp-surface-panel": t.colors.surface,
    "--erp-surface-card": t.colors.surface,
    "--erp-surface-raised": t.colors.surface,
    "--erp-surface-sunken": t.colors.surfaceMuted,
    "--erp-surface-overlay": "rgb(15 23 42 / 0.55)",
    "--erp-surface-hover": t.colors.surfaceMuted,
    "--erp-surface-selected": t.colors.accentSoft,
    "--erp-surface-active": t.colors.accentBorder,
    "--erp-surface-disabled": t.colors.surfaceMuted,
    "--erp-surface-inverse": t.colors.fg,
    "--erp-text-primary": t.colors.fg,
    "--erp-text-secondary": "#334155",
    "--erp-text-muted": t.colors.muted,
    "--erp-text-subtle": t.colors.subtle,
    "--erp-text-disabled": t.colors.subtle,
    "--erp-text-inverse": "#ffffff",
    "--erp-text-link": t.colors.accentHover,
    "--erp-text-danger": t.colors.danger,
    "--erp-text-warning": t.colors.warning,
    "--erp-text-success": t.colors.success,
    "--erp-text-info": t.colors.info,
    "--erp-border-default": t.colors.border,
    "--erp-border-muted": t.colors.surfaceMuted,
    "--erp-border-focus": t.colors.accent,
    "--erp-border-danger": t.colors.dangerBorder,
    "--erp-border-warning": t.colors.warningBorder,
    "--erp-border-success": t.colors.successBorder,
    "--erp-border-selected": t.colors.accentBorder,
    "--erp-border-disabled": t.colors.border,
    "--erp-state-hover": t.colors.surfaceMuted,
    "--erp-state-active": t.colors.accentBorder,
    "--erp-state-selected": t.colors.accentSoft,
    "--erp-state-focus": t.colors.focusRing,
    "--erp-state-disabled": t.colors.surfaceMuted,
    "--erp-state-readonly": t.colors.surfaceMuted,
    "--erp-state-loading": t.colors.infoSoft,
    "--erp-state-dragging": t.colors.accentSoft,
    "--erp-state-blocked": t.colors.dangerSoft,
    "--erp-state-locked": t.colors.surfaceMuted,
    "--erp-state-new": t.colors.successSoft,
    "--erp-state-dirty": t.colors.warningSoft,
    "--erp-state-deleted": t.colors.dangerSoft,
    "--erp-state-stale": t.colors.infoSoft,
    "--erp-state-error": t.colors.dangerSoft,
    "--erp-state-warning": t.colors.warningSoft,
    "--erp-state-saving": t.colors.infoSoft,
    "--erp-state-dirty-border": t.colors.warningBorder,
    "--erp-state-deleted-border": t.colors.dangerBorder,
    "--erp-state-error-border": t.colors.dangerBorder,
    "--erp-state-warning-border": t.colors.warningBorder,
    "--erp-state-stale-border": t.colors.infoBorder,
    "--erp-validation-info-bg": t.colors.infoSoft,
    "--erp-validation-info-text": t.colors.info,
    "--erp-validation-info-border": t.colors.infoBorder,
    "--erp-validation-info-icon": t.colors.info,
    "--erp-validation-warning-bg": t.colors.warningSoft,
    "--erp-validation-warning-text": t.colors.warning,
    "--erp-validation-warning-border": t.colors.warningBorder,
    "--erp-validation-warning-icon": t.colors.warning,
    "--erp-validation-error-bg": t.colors.dangerSoft,
    "--erp-validation-error-text": t.colors.danger,
    "--erp-validation-error-border": t.colors.dangerBorder,
    "--erp-validation-error-icon": t.colors.danger,
    "--erp-validation-blocking-bg": t.colors.dangerSoft,
    "--erp-validation-blocking-text": t.colors.danger,
    "--erp-validation-blocking-border": t.colors.dangerBorder,
    "--erp-validation-blocking-icon": t.colors.danger,
    "--erp-grid-header-bg": t.colors.surfaceMuted,
    "--erp-grid-header-text": t.colors.muted,
    "--erp-grid-header-border": t.colors.border,
    "--erp-grid-row-bg": t.colors.surface,
    "--erp-grid-row-alt-bg": t.colors.surfaceMuted,
    "--erp-grid-row-hover-bg": t.colors.surfaceMuted,
    "--erp-grid-row-selected-bg": t.colors.accentSoft,
    "--erp-grid-row-new-bg": t.colors.successSoft,
    "--erp-grid-row-dirty-bg": t.colors.warningSoft,
    "--erp-grid-row-deleted-bg": t.colors.dangerSoft,
    "--erp-grid-row-error-bg": t.colors.dangerSoft,
    "--erp-grid-row-warning-bg": t.colors.warningSoft,
    "--erp-grid-row-stale-bg": t.colors.infoSoft,
    "--erp-grid-row-readonly-bg": t.colors.surfaceMuted,
    "--erp-grid-row-border": t.colors.border,
    "--erp-grid-cell-bg": t.colors.surface,
    "--erp-grid-cell-editing-bg": t.colors.accentSoft,
    "--erp-grid-cell-focus-ring": t.colors.focusRing,
    "--erp-grid-cell-readonly-bg": t.colors.surfaceMuted,
    "--erp-grid-cell-error-bg": t.colors.dangerSoft,
    "--erp-grid-cell-warning-bg": t.colors.warningSoft,
    "--erp-grid-cell-stale-bg": t.colors.infoSoft,
    "--erp-grid-cell-pinned-bg": t.colors.surfaceMuted,
    "--erp-grid-footer-bg": t.colors.surfaceMuted,
    "--erp-grid-footer-text": t.colors.fg,
    "--erp-grid-total-row-bg": t.colors.surfaceMuted,
    "--erp-grid-group-row-bg": t.colors.surfaceMuted,
    "--erp-grid-resize-handle": t.colors.borderStrong,
    "--erp-grid-selection-handle": t.colors.accent,
    "--erp-shell-topbar-height": d.toolbarHeight,
    "--erp-shell-sidebar-width": "16rem",
    "--erp-shell-sidebar-collapsed-width": "4rem",
    "--erp-shell-footer-height": d.toolbarHeight,
    "--erp-shell-mobile-header-height": d.toolbarHeight,
    "--erp-shell-mobile-bottom-nav-height": d.mobileBottomBarHeight,
    "--erp-shell-mobile-bottom-bar-height": d.mobileBottomBarHeight,
    "--erp-shell-workspace-tabs-height": d.toolbarHeight,
    "--erp-shell-content-max-width": "80rem",
    "--erp-shell-content-padding": d.pagePadding,
    "--erp-shell-content-gap": d.gap,
    "--erp-shell-panel-padding": d.pagePadding,
    "--erp-shell-panel-gap": d.sectionGap,
    "--erp-shell-split-pane-min-width": "18rem",
    "--erp-shell-split-pane-divider-width": "1px",
    "--erp-form-label-width": "10rem",
    "--erp-form-label-gap": d.controlGap,
    "--erp-form-label-color": t.colors.fg,
    "--erp-form-label-required-color": t.colors.danger,
    "--erp-form-field-gap": d.fieldGap,
    "--erp-form-field-inline-gap": d.gap,
    "--erp-form-field-help-text-color": t.colors.muted,
    "--erp-form-field-error-text-color": t.colors.danger,
    "--erp-form-field-disabled-bg": t.colors.surfaceMuted,
    "--erp-form-field-readonly-bg": t.colors.surfaceMuted,
    "--erp-form-field-border": t.colors.borderStrong,
    "--erp-form-field-error-border": t.colors.dangerBorder,
    "--erp-form-field-focus-border": t.colors.accent,
    "--erp-form-section-gap": d.sectionGap,
    "--erp-form-section-padding": d.pagePadding,
    "--erp-form-section-border": t.colors.border,
    "--erp-form-error-gap": "0.25rem",
    "--erp-form-required-marker-color": t.colors.danger,
    "--erp-size-intent-hug": "max-content",
    "--erp-size-intent-fill": "100%",
    "--erp-size-intent-fit": "fit-content",
    "--erp-control-width-xs": "6rem",
    "--erp-control-width-sm": "8rem",
    "--erp-control-width-md": "12rem",
    "--erp-control-width-lg": "16rem",
    "--erp-control-width-xl": "24rem",
    "--erp-status-draft": t.colors.muted,
    "--erp-status-draft-foreground": "#ffffff",
    "--erp-status-draft-soft": t.colors.surfaceMuted,
    "--erp-status-draft-border": t.colors.borderStrong,
    "--erp-status-submitted": t.colors.info,
    "--erp-status-submitted-foreground": "#ffffff",
    "--erp-status-submitted-soft": t.colors.infoSoft,
    "--erp-status-submitted-border": t.colors.infoBorder,
    "--erp-status-approved": t.colors.success,
    "--erp-status-approved-foreground": "#ffffff",
    "--erp-status-approved-soft": t.colors.successSoft,
    "--erp-status-approved-border": t.colors.successBorder,
    "--erp-status-rejected": t.colors.danger,
    "--erp-status-rejected-foreground": "#ffffff",
    "--erp-status-rejected-soft": t.colors.dangerSoft,
    "--erp-status-rejected-border": t.colors.dangerBorder,
    "--erp-status-posted": "#4338ca",
    "--erp-status-posted-foreground": "#ffffff",
    "--erp-status-posted-soft": "#eef2ff",
    "--erp-status-posted-border": "#c7d2fe",
    "--erp-status-cancelled": "#475569",
    "--erp-status-cancelled-foreground": "#ffffff",
    "--erp-status-cancelled-soft": "#f1f5f9",
    "--erp-status-cancelled-border": "#cbd5e1",
    "--erp-bg": t.colors.bg,
    "--erp-fg": t.colors.fg,
    "--erp-surface": t.colors.surface,
    "--erp-surface-muted": t.colors.surfaceMuted,
    "--erp-border": t.colors.border,
    "--erp-border-strong": t.colors.borderStrong,
    "--erp-muted": t.colors.muted,
    "--erp-subtle": t.colors.subtle,
    "--erp-accent": t.colors.accent,
    "--erp-accent-hover": t.colors.accentHover,
    "--erp-accent-active": t.colors.accentActive,
    "--erp-accent-soft": t.colors.accentSoft,
    "--erp-accent-border": t.colors.accentBorder,
    "--erp-focus-ring": t.colors.focusRing,
    "--erp-danger": t.colors.danger,
    "--erp-danger-hover": t.colors.dangerHover,
    "--erp-danger-soft": t.colors.dangerSoft,
    "--erp-danger-border": t.colors.dangerBorder,
    "--erp-warning": t.colors.warning,
    "--erp-warning-soft": t.colors.warningSoft,
    "--erp-warning-border": t.colors.warningBorder,
    "--erp-success": t.colors.success,
    "--erp-success-soft": t.colors.successSoft,
    "--erp-success-border": t.colors.successBorder,
    "--erp-info": t.colors.info,
    "--erp-info-soft": t.colors.infoSoft,
    "--erp-info-border": t.colors.infoBorder,
    "--erp-radius-xs": t.radius.xs,
    "--erp-radius-sm": t.radius.sm,
    "--erp-radius-md": t.radius.md,
    "--erp-radius-lg": t.radius.lg,
    "--erp-radius-xl": t.radius.xl,
    "--erp-radius-control": t.radius.control,
    "--erp-radius-panel": t.radius.panel,
    "--erp-shadow-xs": t.shadow.xs,
    "--erp-shadow-sm": t.shadow.sm,
    "--erp-shadow-md": t.shadow.md,
    "--erp-shadow-focus": t.shadow.focus,
    "--erp-shadow-focus-error": t.shadow.focusError,
    "--erp-focus-ring-width": "2px",
    "--erp-focus-ring-offset": "1px",
    "--erp-disabled-opacity": "0.5",
    "--erp-page-padding": d.pagePadding,
    "--erp-gap": d.gap,
    "--erp-control-height": d.controlHeight,
    "--erp-control-padding-x": d.controlPaddingX,
    "--erp-control-gap": d.controlGap,
    "--erp-control-font-size": d.controlFontSize,
    "--erp-field-gap": d.fieldGap,
    "--erp-section-gap": d.sectionGap,
    "--erp-grid-row-height": d.gridRowHeight,
    "--erp-toolbar-height": d.toolbarHeight,
    "--erp-mobile-bottom-bar-height": d.mobileBottomBarHeight,
    "--erp-icon-size": d.iconSize,
    "--erp-touch-target": d.touchTarget,
    "--erp-color-mode": colorMode,
  };
};

export const createThemeStyle = (
  theme: ThemeName | ThemeTokens = "default",
  density: Density = "comfortable",
  colorMode: ColorMode = productionColorMode,
): CSSProperties => getThemeVariables(theme, density, colorMode) as CSSProperties;

export function applyTheme(
  element: HTMLElement,
  options?: ThemeOptions,
): () => void;
export function applyTheme(
  theme?: ThemeName | ThemeTokens,
  density?: Density,
  colorMode?: ColorMode,
): CSSProperties;
export function applyTheme(
  elementOrTheme: HTMLElement | ThemeName | ThemeTokens = "default",
  optionsOrDensity: ThemeOptions | Density = "comfortable",
  colorMode: ColorMode = productionColorMode,
): CSSProperties | (() => void) {
  if (typeof HTMLElement !== "undefined" && elementOrTheme instanceof HTMLElement) {
    const element = elementOrTheme;
    const options =
      typeof optionsOrDensity === "object" ? optionsOrDensity : { density: optionsOrDensity };
    const themeTokens = getTheme(options.theme);
    const densityName = options.density ?? "comfortable";
    const resolvedColorMode = options.colorMode ?? productionColorMode;
    const variables = getThemeVariables(themeTokens, densityName, resolvedColorMode);
    const previousTheme = element.getAttribute("data-theme");
    const previousDensity = element.getAttribute("data-density");
    const previousColorMode = element.getAttribute("data-color-mode");
    const previousValues = Object.keys(variables).map((name) => [
      name,
      element.style.getPropertyValue(name),
    ] as const);

    element.setAttribute("data-theme", themeTokens.name);
    element.setAttribute("data-density", densityName);
    element.setAttribute("data-color-mode", resolvedColorMode);

    for (const [name, value] of Object.entries(variables)) {
      element.style.setProperty(name, value);
    }

    return () => {
      restoreAttribute(element, "data-theme", previousTheme);
      restoreAttribute(element, "data-density", previousDensity);
      restoreAttribute(element, "data-color-mode", previousColorMode);

      for (const [name, value] of previousValues) {
        if (value) {
          element.style.setProperty(name, value);
        } else {
          element.style.removeProperty(name);
        }
      }
    };
  }

  return createThemeStyle(
    elementOrTheme as ThemeName | ThemeTokens,
    optionsOrDensity as Density,
    colorMode,
  );
}

const restoreAttribute = (
  element: HTMLElement,
  name: string,
  previousValue: string | null,
) => {
  if (previousValue) {
    element.setAttribute(name, previousValue);
  } else {
    element.removeAttribute(name);
  }
};

export type ThemeContextValue = {
  theme: ThemeTokens;
  density: DensityTokens;
  themeName: ThemeName;
  densityName: Density;
  colorMode: ColorMode;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  density: densityTokens.comfortable,
  themeName: "default",
  densityName: "comfortable",
  colorMode: productionColorMode,
});

export interface ThemeProviderProps {
  theme?: ThemeName;
  density?: Density;
  colorMode?: ColorMode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const ThemeProvider = ({
  theme,
  density,
  colorMode,
  children,
  className,
  style,
}: ThemeProviderProps) => {
  const parentTheme = useTheme();
  const themeName = theme ?? parentTheme.themeName;
  const densityName = density ?? parentTheme.densityName;
  const resolvedColorMode = colorMode ?? parentTheme.colorMode;
  const themeTokens = getTheme(themeName);
  const densityToken = getDensity(densityName);
  const themeStyle = useMemo(
    () => ({ ...createThemeStyle(themeTokens, densityName, resolvedColorMode), ...style }),
    [themeTokens, densityName, resolvedColorMode, style],
  );

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: themeTokens,
      density: densityToken,
      themeName,
      densityName,
      colorMode: resolvedColorMode,
    }),
    [themeTokens, densityToken, themeName, densityName, resolvedColorMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        data-theme={themeName}
        data-density={densityName}
        data-color-mode={resolvedColorMode}
        className={className}
        style={themeStyle}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export const useTheme = () => useContext(ThemeContext);
