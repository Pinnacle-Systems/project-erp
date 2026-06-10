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
        "h-(--erp-grid-cell-height) w-full bg-transparent text-(length:--erp-font-size-xs) leading-(--erp-line-height-dense) font-sans",
        "rounded-(--erp-radius-xs) border border-transparent px-(--erp-grid-cell-padding-x) py-0",
        "text-(--erp-text-secondary) placeholder:text-(--erp-color-foreground-subtle)",
        "transition-colors duration-150 ease-out",
        // inset bottom shadow = underline affordance; does not interfere with border or focus ring
        "shadow-[inset_0_-1px_0_var(--erp-border-muted)]",
        "hover:border-(--erp-border-muted) hover:bg-(--erp-surface-muted) hover:shadow-none",
        "focus:outline-none focus:border-(--erp-form-field-focus-border) focus:bg-(--erp-grid-cell-editing-bg)",
        "focus:shadow-[inset_0_0_0_1px_var(--erp-focus-ring)]",
        "disabled:pointer-events-none disabled:opacity-(--erp-disabled-opacity)",
        // readonly: no underline shadow, no hover affordance — cursor-default is the only signal
        "read-only:shadow-none read-only:hover:border-transparent read-only:hover:bg-transparent read-only:cursor-default",
        // override CSS vars locally: error ring stays red on focus, editing bg turns red-tinted
        error && "[--erp-focus-ring:rgb(185_28_28/0.40)] [--erp-grid-cell-editing-bg:var(--erp-grid-cell-error-bg)] border-(--erp-form-field-error-border)",
        numeric && "text-right tabular-nums",
        className,
      )}
      {...props}
    />
  ),
);

GridCellInput.displayName = "GridCellInput";
