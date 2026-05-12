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
  NavigationItem,
  NavigationShellProps,
} from "./shells";
