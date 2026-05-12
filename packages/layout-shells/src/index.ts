export const packageName = "@erp-ui-platform/layout-shells";

export type LayoutShellsPackageMarker = {
  packageName: typeof packageName;
};

export {
  AppFrame,
  ContentRegion,
  NavigationShell,
} from "./shells";
export type {
  AppFrameProps,
  ContentRegionProps,
  NavigationShellProps,
} from "./shells";
export type {
  BreadcrumbItem,
  NavigationItem,
  WorkspaceTab,
  WorkspaceTabStatus,
} from "./navigation";
