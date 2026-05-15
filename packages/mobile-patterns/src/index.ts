export const packageName = "@erp-ui-platform/mobile-patterns";

export type MobilePatternsPackageMarker = {
  packageName: typeof packageName;
};

export {
  MobileApprovalCommentList,
  MobileApprovalFlow,
  MobileApprovalSummaryCard,
  MobileApprovalTimeline,
  MobileBottomActionBar,
  MobileDocumentSummary,
  MobileTaskShell,
  ScannerCapturePlaceholder,
} from "./mobile";
export type {
  MobileActionItem,
  MobileApprovalCommentListProps,
  MobileApprovalFlowProps,
  MobileApprovalSummaryCardProps,
  MobileApprovalTimelineProps,
  MobileBottomActionBarProps,
  MobileDocumentField,
  MobileDocumentLine,
  MobileDocumentSummaryProps,
  MobileTaskShellProps,
  ScannerCapturePlaceholderProps,
} from "./mobile";
