import { type ReactNode } from "react";
import {
  AppFrame,
  ContentRegion,
  NavigationShell,
  type NavigationItem,
} from "@erp-ui-platform/layout-shells";
import { cn } from "@erp-ui-platform/primitives";
import { PageHeader, type MetaItem } from "@erp-ui-platform/app-components";

export interface DesktopWorkspaceShellProps {
  title: string;
  subtitle?: string;
  navigationTitle?: string;
  navigationSubtitle?: string;
  navigationItems?: readonly NavigationItem[];
  activeNavigationItemId?: string;
  status?: ReactNode;
  actions?: ReactNode;
  meta?: MetaItem[];
  children: ReactNode;
  rightRail?: ReactNode;
  className?: string;
}

export const DesktopWorkspaceShell = ({
  title,
  subtitle,
  navigationTitle = "Workspace",
  navigationSubtitle,
  navigationItems,
  activeNavigationItemId,
  status,
  actions,
  meta,
  children,
  rightRail,
  className,
}: DesktopWorkspaceShellProps) => (
  <AppFrame
    density="compact"
    navigation={
      <NavigationShell
        title={navigationTitle}
        subtitle={navigationSubtitle}
        items={navigationItems}
        activeItemId={activeNavigationItemId}
      />
    }
    className={className}
  >
    <ContentRegion
      header={
        <PageHeader
          title={title}
          subtitle={subtitle}
          status={status}
          secondaryActions={actions}
          meta={meta}
          density="compact"
        />
      }
      aside={rightRail}
      variant="workspace"
    >
      {children}
    </ContentRegion>
  </AppFrame>
);

DesktopWorkspaceShell.displayName = "DesktopWorkspaceShell";

export interface DesktopDensePageProps {
  title: string;
  subtitle?: string;
  status?: ReactNode;
  actions?: ReactNode;
  meta?: MetaItem[];
  children: ReactNode;
  sidePanel?: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const DesktopDensePage = ({
  title,
  subtitle,
  status,
  actions,
  meta,
  children,
  sidePanel,
  footer,
  className,
  contentClassName,
}: DesktopDensePageProps) => (
  <ContentRegion
    className={className}
    header={
      <PageHeader
        title={title}
        subtitle={subtitle}
        status={status}
        secondaryActions={actions}
        meta={meta}
        density="compact"
      />
    }
    aside={sidePanel}
    footer={footer}
  >
    <div className={cn("p-4", contentClassName)}>{children}</div>
  </ContentRegion>
);

DesktopDensePage.displayName = "DesktopDensePage";

export interface DesktopActionBarProps {
  primary?: ReactNode;
  secondary?: ReactNode;
  overflow?: ReactNode;
  left?: ReactNode;
  className?: string;
}

export const DesktopActionBar = ({
  primary,
  secondary,
  overflow,
  left,
  className,
}: DesktopActionBarProps) => (
  <div
    data-component="DesktopActionBar"
    className={cn(
      "flex min-h-10 items-center justify-between gap-3 border-t border-neutral-200 bg-white px-4 py-2",
      className,
    )}
  >
    <div className="min-w-0 flex-1 text-xs text-neutral-500">{left}</div>
    <div className="flex shrink-0 items-center gap-2">
      {overflow}
      {secondary && <div className="h-4 w-px bg-neutral-200" />}
      {secondary}
      {primary}
    </div>
  </div>
);

DesktopActionBar.displayName = "DesktopActionBar";

export interface DesktopSplitPaneReviewProps {
  listTitle?: string;
  list: ReactNode;
  detailTitle?: string;
  detail: ReactNode;
  reviewTitle?: string;
  review?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export const DesktopSplitPaneReview = ({
  listTitle = "Queue",
  list,
  detailTitle = "Document",
  detail,
  reviewTitle = "Review",
  review,
  actions,
  className,
}: DesktopSplitPaneReviewProps) => (
  <div
    data-component="DesktopSplitPaneReview"
    className={cn(
      "grid h-full min-h-[34rem] grid-cols-[18rem_minmax(0,1fr)] overflow-hidden rounded-lg border border-neutral-200 bg-white",
      review && "xl:grid-cols-[18rem_minmax(0,1fr)_20rem]",
      className,
    )}
  >
    <section className="min-h-0 border-r border-neutral-200">
      <PaneHeader>{listTitle}</PaneHeader>
      <div className="h-[calc(100%-2.5rem)] overflow-auto">{list}</div>
    </section>
    <section className="flex min-h-0 flex-col">
      <PaneHeader>{detailTitle}</PaneHeader>
      <div className="min-h-0 flex-1 overflow-auto">{detail}</div>
      {actions}
    </section>
    {review && (
      <section className="hidden min-h-0 border-l border-neutral-200 bg-neutral-50 xl:block">
        <PaneHeader>{reviewTitle}</PaneHeader>
        <div className="h-[calc(100%-2.5rem)] overflow-auto">{review}</div>
      </section>
    )}
  </div>
);

DesktopSplitPaneReview.displayName = "DesktopSplitPaneReview";

const PaneHeader = ({ children }: { children: ReactNode }) => (
  <div className="flex h-10 items-center border-b border-neutral-200 bg-neutral-50 px-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
    {children}
  </div>
);
