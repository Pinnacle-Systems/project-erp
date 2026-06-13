import { forwardRef, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const loadingStateVariants = cva(
  "flex items-center justify-center w-full",
  {
    variants: {
      density: {
        compact: "p-4",
        comfortable: "p-8",
        touch: "p-12",
      },
    },
    defaultVariants: {
      density: "comfortable",
    },
  }
);

export interface LoadingStateProps extends VariantProps<typeof loadingStateVariants> {
  label?: ReactNode;
  variant?: "spinner" | "skeleton" | "rows";
  rows?: number;
  className?: string;
}

export const LoadingState = forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ className, density, label = "Loading...", variant = "spinner", rows = 3, ...props }, ref) => {
    if (variant === "skeleton" || variant === "rows") {
      return (
        <div ref={ref} className={cn("flex flex-col gap-3 w-full", className)} {...props}>
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="h-8 w-full animate-pulse rounded-[var(--erp-radius-md)] bg-[var(--erp-surface-muted)]" />
          ))}
          <span className="sr-only">{label}</span>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn(loadingStateVariants({ density }), className)} role="status" aria-label={typeof label === "string" ? label : "Loading"} {...props}>
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <svg className="h-6 w-6 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {label && <span className="text-sm font-medium">{label}</span>}
        </div>
      </div>
    );
  }
);
LoadingState.displayName = "LoadingState";
