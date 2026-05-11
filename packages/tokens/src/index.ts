export const colorTokens = {
  transparent: "transparent",
  current: "currentColor",
  white: "#ffffff",
  black: "#000000",
  neutral: {
    0: "#ffffff",
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
  },
} as const;

export const semanticColorTokens = {
  background: {
    app: colorTokens.neutral[50],
    surface: colorTokens.white,
    raised: colorTokens.white,
    inverse: colorTokens.neutral[900],
  },
  foreground: {
    default: colorTokens.neutral[900],
    subtle: colorTokens.neutral[600],
    muted: colorTokens.neutral[500],
    inverse: colorTokens.white,
  },
  border: {
    default: colorTokens.neutral[200],
    strong: colorTokens.neutral[300],
    focus: colorTokens.blue[600],
  },
  muted: {
    background: colorTokens.neutral[100],
    foreground: colorTokens.neutral[600],
    border: colorTokens.neutral[200],
  },
  info: {
    background: colorTokens.blue[50],
    foreground: colorTokens.blue[700],
    border: colorTokens.blue[100],
    accent: colorTokens.blue[600],
  },
  success: {
    background: colorTokens.green[50],
    foreground: colorTokens.green[700],
    border: colorTokens.green[100],
    accent: colorTokens.green[600],
  },
  warning: {
    background: colorTokens.amber[50],
    foreground: colorTokens.amber[700],
    border: colorTokens.amber[100],
    accent: colorTokens.amber[600],
  },
  danger: {
    background: colorTokens.red[50],
    foreground: colorTokens.red[700],
    border: colorTokens.red[100],
    accent: colorTokens.red[600],
  },
} as const;

export const typographyTokens = {
  fontFamily: {
    sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
    mono: "\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.65",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
} as const;

export const spacingTokens = {
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
} as const;

export const radiusTokens = {
  none: "0",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
} as const;

export const shadowTokens = {
  none: "none",
  xs: "0 1px 2px rgb(15 23 42 / 0.06)",
  sm: "0 1px 3px rgb(15 23 42 / 0.12), 0 1px 2px rgb(15 23 42 / 0.08)",
  md: "0 4px 12px rgb(15 23 42 / 0.12)",
  lg: "0 12px 24px rgb(15 23 42 / 0.14)",
  focus: "0 0 0 3px rgb(37 99 235 / 0.28)",
} as const;

export const densityTokens = {
  desktop: {
    compact: {
      controlHeight: "2rem",
      gridRowHeight: "2rem",
      pagePadding: spacingTokens[4],
      sectionGap: spacingTokens[3],
    },
    comfortable: {
      controlHeight: "2.25rem",
      gridRowHeight: "2.25rem",
      pagePadding: spacingTokens[6],
      sectionGap: spacingTokens[4],
    },
  },
  mobile: {
    compact: {
      controlHeight: "2.5rem",
      touchTarget: "2.75rem",
      pagePadding: spacingTokens[4],
      sectionGap: spacingTokens[4],
    },
    comfortable: {
      controlHeight: "2.75rem",
      touchTarget: "3rem",
      pagePadding: spacingTokens[5],
      sectionGap: spacingTokens[5],
    },
  },
} as const;

export const statusTokens = {
  draft: {
    semantic: "muted",
    label: "Draft",
  },
  submitted: {
    semantic: "info",
    label: "Submitted",
  },
  pendingApproval: {
    semantic: "warning",
    label: "Pending approval",
  },
  approved: {
    semantic: "success",
    label: "Approved",
  },
  rejected: {
    semantic: "danger",
    label: "Rejected",
  },
  posted: {
    semantic: "success",
    label: "Posted",
  },
  cancelled: {
    semantic: "muted",
    label: "Cancelled",
  },
  completed: {
    semantic: "success",
    label: "Completed",
  },
  onHold: {
    semantic: "warning",
    label: "On hold",
  },
  failed: {
    semantic: "danger",
    label: "Failed",
  },
} as const satisfies Record<
  string,
  {
    semantic: keyof Pick<
      typeof semanticColorTokens,
      "muted" | "info" | "success" | "warning" | "danger"
    >;
    label: string;
  }
>;

export const zIndexTokens = {
  base: 0,
  raised: 10,
  sticky: 100,
  header: 200,
  overlay: 400,
  popover: 500,
  toast: 600,
  modal: 700,
  tooltip: 800,
} as const;

export type ColorTokens = typeof colorTokens;
export type SemanticColorTokens = typeof semanticColorTokens;
export type TypographyTokens = typeof typographyTokens;
export type SpacingTokens = typeof spacingTokens;
export type RadiusTokens = typeof radiusTokens;
export type ShadowTokens = typeof shadowTokens;
export type DensityTokens = typeof densityTokens;
export type StatusTokens = typeof statusTokens;
export type ZIndexTokens = typeof zIndexTokens;

export type SemanticColorName = keyof SemanticColorTokens;
export type WorkflowStatusName = keyof StatusTokens;
export type ShellDensityName = keyof DensityTokens;
