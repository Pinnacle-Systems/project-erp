import { type ReactNode } from "react";
import { cn } from "@erp-ui-platform/primitives";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  className?: string;
}

export const EmptyState = ({
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  className,
}: EmptyStateProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center gap-3 py-16 px-6 text-center",
      className,
    )}
  >
    {icon && (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--erp-surface-hover)] text-[var(--erp-text-subtle)]">
        {icon}
      </div>
    )}
    <div className="flex flex-col gap-1">
      <p className="text-sm font-semibold text-[var(--erp-text-primary)]">{title}</p>
      {description && (
        <p className="text-sm text-[var(--erp-text-muted)] max-w-sm">{description}</p>
      )}
    </div>
    {(primaryAction || secondaryAction) && (
      <div className="flex items-center gap-2 mt-1">
        {primaryAction}
        {secondaryAction}
      </div>
    )}
  </div>
);

EmptyState.displayName = "EmptyState";
