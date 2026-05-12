export const packageName = "@erp-ui-platform/mobile-patterns";

export type MobilePatternsPackageMarker = {
  packageName: typeof packageName;
};

export {
  MobileApprovalFlow,
  MobileBottomActionBar,
  MobileDocumentSummary,
  MobileTaskShell,
  ScannerCapturePlaceholder,
} from "./mobile";
export type {
  MobileActionItem,
  MobileApprovalFlowProps,
  MobileBottomActionBarProps,
  MobileDocumentField,
  MobileDocumentLine,
  MobileDocumentSummaryProps,
  MobileTaskShellProps,
  ScannerCapturePlaceholderProps,
} from "./mobile";
