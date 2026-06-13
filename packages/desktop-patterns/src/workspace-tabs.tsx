import { type ReactNode } from "react";
import { type WorkspaceTab } from "@erp-ui-platform/layout-shells";
import { cn } from "@erp-ui-platform/primitives";

export interface WorkspaceTabsProps {
  tabs: WorkspaceTab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
  className?: string;
}

export const WorkspaceTabs = ({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
  className,
}: WorkspaceTabsProps) => (
  <div
    data-component="WorkspaceTabs"
    className={cn(
      "flex h-[var(--erp-shell-workspace-tabs-height)] items-end overflow-x-auto border-b border-border-subtle bg-surface px-2",
      className,
    )}
    role="tablist"
    aria-label="Open workspace items"
  >
    {tabs.map((tab) => {
      const active = tab.id === activeTabId;
      return (
        <div
          key={tab.id}
          data-state={active ? "active" : "inactive"}
          className={cn(
            "group relative flex h-10 max-w-64 shrink-0 items-center border-x border-t text-xs transition-colors",
            "border-transparent text-muted-foreground hover:bg-surface-muted hover:text-foreground",
            active && "border-border bg-[var(--erp-color-page-bg)] text-foreground",
          )}
        >
          <button
            type="button"
            role="tab"
            aria-selected={active}
            data-state={active ? "active" : "inactive"}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex h-full min-w-0 flex-1 items-center gap-2 bg-transparent px-3 text-left outline-none",
              "focus-visible:ring-2 focus-visible:ring-[var(--erp-focus-ring)] focus-visible:ring-offset-[var(--erp-focus-ring-offset)]",
            )}
          >
            {tab.icon && <span className="shrink-0 text-muted-foreground">{tab.icon}</span>}
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="flex min-w-0 items-center gap-1.5">
                <TabStatusMarker status={tab.status} />
                <span className="truncate font-medium">{tab.title}</span>
              </span>
              {(tab.subtitle || tab.documentType) && (
                <span className="truncate text-[0.6875rem] leading-3 text-muted-foreground">
                  {tab.subtitle ?? tab.documentType}
                </span>
              )}
            </span>
          </button>
          {tab.closable && onTabClose && (
            <button
              type="button"
              aria-label={`Close ${tab.title}`}
              onClick={(event) => {
                event.stopPropagation();
                onTabClose(tab.id);
              }}
              className={cn(
                "mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors",
                "hover:bg-surface-muted hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--erp-focus-ring)]",
              )}
            >
              x
            </button>
          )}
        </div>
      );
    })}
  </div>
);

WorkspaceTabs.displayName = "WorkspaceTabs";

export interface MultiDocumentWorkspaceProps {
  tabs: WorkspaceTab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
  toolbar?: ReactNode;
  emptyState?: ReactNode;
  children: ReactNode;
}

export const MultiDocumentWorkspace = ({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
  toolbar,
  emptyState,
  children,
}: MultiDocumentWorkspaceProps) => {
  if (tabs.length === 0) {
    return (
      <div
        data-component="MultiDocumentWorkspace"
        className="flex min-h-64 flex-col bg-[var(--erp-color-page-bg)]"
      >
        {emptyState}
      </div>
    );
  }

  return (
    <div
      data-component="MultiDocumentWorkspace"
      className="flex min-h-0 flex-1 flex-col bg-[var(--erp-color-page-bg)]"
    >
      <WorkspaceTabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={onTabChange}
        onTabClose={onTabClose}
      />
      {toolbar && (
        <div className="shrink-0 border-b border-border-subtle bg-surface-muted px-3 py-2">
          {toolbar}
        </div>
      )}
      <div className="min-h-0 flex-1 overflow-auto">{children}</div>
    </div>
  );
};

MultiDocumentWorkspace.displayName = "MultiDocumentWorkspace";

const TabStatusMarker = ({ status }: { status: WorkspaceTab["status"] }) => {
  if (!status || status === "clean") {
    return null;
  }

  const labelByStatus = {
    dirty: "Unsaved changes",
    saving: "Saving",
    error: "Error",
  } as const;

  return (
    <span
      data-status={status}
      aria-label={labelByStatus[status]}
      title={labelByStatus[status]}
      className={cn(
        "h-1.5 w-1.5 shrink-0 rounded-full",
        status === "dirty" && "bg-[var(--erp-text-warning)]",
        status === "saving" && "motion-safe:animate-pulse bg-[var(--erp-text-info)]",
        status === "error" && "bg-[var(--erp-text-danger)]",
      )}
    />
  );
};
