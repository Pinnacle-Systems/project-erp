export const packageName = "@erp-ui-platform/desktop-patterns";

export type DesktopPatternsPackageMarker = {
  packageName: typeof packageName;
};

export {
  DesktopActionBar,
  DesktopDensePage,
  DesktopSplitPaneReview,
  DesktopWorkspaceShell,
} from "./desktop";
export type {
  DesktopActionBarProps,
  DesktopDensePageProps,
  DesktopSplitPaneReviewProps,
  DesktopWorkspaceShellProps,
} from "./desktop";
