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
export {
  MultiDocumentWorkspace,
  WorkspaceTabs,
} from "./workspace-tabs";
export type {
  DesktopActionBarProps,
  DesktopDensePageProps,
  DesktopSplitPaneReviewProps,
  DesktopWorkspaceShellProps,
} from "./desktop";
export type {
  MultiDocumentWorkspaceProps,
  WorkspaceTabsProps,
} from "./workspace-tabs";
