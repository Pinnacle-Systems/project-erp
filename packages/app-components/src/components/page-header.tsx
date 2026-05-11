import { type ReactNode } from "react";
import { cn } from "@erp-ui-platform/primitives";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface MetaItem {
  label: string;
  value: string;
}

export type PageHeaderDensity = "compact" | "comfortable" | "touch";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  status?: ReactNode;
  primaryAction?: ReactNode;
  secondaryActions?: ReactNode;
  meta?: MetaItem[];
  density?: PageHeaderDensity;
  className?: string;
}

export const PageHeader = ({
  title,
  subtitle,
  breadcrumbs,
  status,
  primaryAction,
  secondaryActions,
  meta,
  density = "comfortable",
  className,
}: PageHeaderProps) => (
  <div
    className={cn(
      "bg-white border-b border-neutral-200",
      density === "compact" && "px-4 py-2",
      density === "comfortable" && "px-6 py-4",
      density === "touch" && "px-5 py-5",
      className,
    )}
  >
    {breadcrumbs && breadcrumbs.length > 0 && (
      <nav aria-label="Breadcrumb" className="mb-1.5 flex items-center gap-1">
        {breadcrumbs.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && (
              <span className="text-neutral-300 text-xs select-none">/</span>
            )}
            {item.href || item.onClick ? (
              <a
                href={item.href}
                onClick={item.onClick}
                className="text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-xs text-neutral-400">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    )}

    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h1
            className={cn(
              "font-semibold text-neutral-900 leading-tight",
              density === "compact" && "text-sm",
              density === "comfortable" && "text-base",
              density === "touch" && "text-lg",
            )}
          >
            {title}
          </h1>
          {status && <div className="flex items-center shrink-0">{status}</div>}
        </div>
        {subtitle && (
          <p
            className={cn(
              "text-neutral-500 mt-0.5 truncate",
              density === "compact" ? "text-xs" : "text-sm",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {(secondaryActions || primaryAction) && (
        <div className="flex items-center gap-2 shrink-0 pt-0.5">
          {secondaryActions}
          {primaryAction}
        </div>
      )}
    </div>

    {meta && meta.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-0.5">
        {meta.map((item, i) => (
          <span key={i} className="text-xs text-neutral-500">
            <span className="font-medium text-neutral-600">{item.label}:</span>{" "}
            {item.value}
          </span>
        ))}
      </div>
    )}
  </div>
);

PageHeader.displayName = "PageHeader";
