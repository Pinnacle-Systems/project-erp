import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface GridCellInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  numeric?: boolean;
}

/**
 * Minimal input for editable grid cells.
 * Renders flat/transparent at rest; shows border on hover and full focus ring on edit.
 * Use `numeric` for right-aligned tabular values (Qty, Rate, Amount).
 */
export const GridCellInput = forwardRef<HTMLInputElement, GridCellInputProps>(
  ({ className, error, numeric = false, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-6 w-full bg-transparent text-xs font-sans",
        "rounded-(--erp-radius-xs) border border-transparent px-1.5 py-0",
        "text-(--erp-color-foreground) placeholder:text-(--erp-color-foreground-subtle)",
        "transition-colors duration-(--erp-motion-fast)",
        "hover:border-(--erp-border-muted) hover:bg-(--erp-color-surface-muted)",
        "focus:outline-none focus:border-(--erp-form-field-focus-border) focus:bg-(--erp-grid-cell-editing-bg)",
        "focus:shadow-[inset_0_0_0_1px_var(--erp-focus-ring)]",
        "disabled:pointer-events-none disabled:opacity-(--erp-disabled-opacity)",
        "read-only:hover:border-transparent read-only:hover:bg-transparent read-only:cursor-default",
        error && "border-(--erp-form-field-error-border)",
        numeric && "text-right tabular-nums",
        className,
      )}
      {...props}
    />
  ),
);

GridCellInput.displayName = "GridCellInput";
