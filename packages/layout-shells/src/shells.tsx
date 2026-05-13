import { type ReactNode } from "react";
import { Badge, cn } from "@erp-ui-platform/primitives";
import { type NavigationItem } from "./navigation";

export interface AppFrameProps {
  navigation?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  density?: "compact" | "comfortable" | "touch";
  className?: string;
  contentClassName?: string;
}

export const AppFrame = ({
  navigation,
  header,
  footer,
  children,
  density = "comfortable",
  className,
  contentClassName,
}: AppFrameProps) => (
  <div
    data-component="AppFrame"
    data-density={density}
    className={cn(
      "min-h-screen bg-[var(--erp-surface-page)] text-[var(--erp-text-primary)]",
      "grid grid-cols-1",
      navigation && "lg:grid-cols-[var(--erp-shell-sidebar-width)_minmax(0,1fr)]",
      className,
    )}
  >
    {navigation && (
      <aside className="hidden min-h-screen border-r border-[var(--erp-border-default)] bg-[var(--erp-surface-panel)] lg:block">
        {navigation}
      </aside>
    )}
    <div className={cn("flex min-h-screen min-w-0 flex-col", contentClassName)}>
      {header && <header className="shrink-0">{header}</header>}
      <main className="min-h-0 flex-1">{children}</main>
      {footer && <footer className="shrink-0">{footer}</footer>}
    </div>
  </div>
);

AppFrame.displayName = "AppFrame";

export interface NavigationShellProps {
  title: string;
  subtitle?: string;
  items?: readonly NavigationItem[];
  activeItemId?: string;
  footer?: ReactNode;
  className?: string;
}

export const NavigationShell = ({
  title,
  subtitle,
  items = [],
  activeItemId,
  footer,
  className,
}: NavigationShellProps) => (
  <nav
    data-component="NavigationShell"
    aria-label={title}
    className={cn("flex h-full min-h-screen flex-col bg-[var(--erp-surface-panel)]", className)}
  >
    <div className="border-b border-[var(--erp-border-default)] px-4 py-4">
      <p className="text-sm font-semibold leading-tight text-[var(--erp-text-primary)]">{title}</p>
      {subtitle && <p className="mt-1 text-xs text-[var(--erp-text-muted)]">{subtitle}</p>}
    </div>
    <div className="flex-1 overflow-y-auto px-2 py-3">
      {items.filter((item) => !item.hidden).map((item) => {
        const active = item.active ?? item.id === activeItemId;
        return (
          <button
            key={item.id}
            type="button"
            disabled={item.disabled}
            onClick={item.onSelect}
            title={item.reason}
            className={cn(
              "mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left",
              "text-sm text-[var(--erp-text-muted)] transition-colors",
              "hover:bg-[var(--erp-surface-hover)] hover:text-[var(--erp-text-primary)]",
              "disabled:cursor-not-allowed disabled:opacity-[var(--erp-disabled-opacity)]",
              active && "bg-[var(--erp-surface-selected)] text-[var(--erp-text-link)] hover:bg-[var(--erp-surface-selected)] hover:text-[var(--erp-text-link)]",
            )}
          >
            {item.icon && <span className="shrink-0 text-[var(--erp-text-subtle)]">{item.icon}</span>}
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium">{item.label}</span>
              {item.description && (
                <span className="block truncate text-xs text-[var(--erp-text-muted)]">
                  {item.description}
                </span>
              )}
            </span>
            {typeof item.badge === "string" || typeof item.badge === "number" ? (
              <Badge variant={active ? "info" : "muted"}>{item.badge}</Badge>
            ) : (
              item.badge
            )}
          </button>
        );
      })}
    </div>
    {footer && <div className="border-t border-[var(--erp-border-default)] p-3">{footer}</div>}
  </nav>
);

NavigationShell.displayName = "NavigationShell";

export interface ContentRegionProps {
  header?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  footer?: ReactNode;
  variant?: "workspace" | "panel" | "plain";
  className?: string;
  bodyClassName?: string;
}

export const ContentRegion = ({
  header,
  children,
  aside,
  footer,
  variant = "workspace",
  className,
  bodyClassName,
}: ContentRegionProps) => (
  <section
    data-component="ContentRegion"
    data-variant={variant}
    className={cn(
      "flex h-full min-h-0 flex-col",
      variant === "workspace" && "bg-[var(--erp-surface-page)]",
      variant === "panel" && "bg-[var(--erp-surface-panel)]",
      className,
    )}
  >
    {header && <div className="shrink-0">{header}</div>}
    <div
      className={cn(
        "min-h-0 flex-1",
        aside && "grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_var(--erp-shell-split-pane-min-width)]",
        bodyClassName,
      )}
    >
      <div className="min-h-0 overflow-auto">{children}</div>
      {aside && (
        <aside className="min-h-0 overflow-auto border-t border-[var(--erp-border-default)] bg-[var(--erp-surface-panel)] xl:border-l xl:border-t-0">
          {aside}
        </aside>
      )}
    </div>
    {footer && <div className="shrink-0 border-t border-[var(--erp-border-default)] bg-[var(--erp-surface-panel)]">{footer}</div>}
  </section>
);

ContentRegion.displayName = "ContentRegion";
