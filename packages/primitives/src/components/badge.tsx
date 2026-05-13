import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium leading-none select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--erp-surface-panel)] text-[var(--erp-text-primary)] border-[var(--erp-border-default)]",
        success:
          "bg-[var(--erp-status-approved-soft)] text-[var(--erp-status-approved)] border-[var(--erp-status-approved-border)]",
        warning:
          "bg-[var(--erp-validation-warning-bg)] text-[var(--erp-validation-warning-text)] border-[var(--erp-validation-warning-border)]",
        danger:
          "bg-[var(--erp-status-rejected-soft)] text-[var(--erp-status-rejected)] border-[var(--erp-status-rejected-border)]",
        info:
          "bg-[var(--erp-status-submitted-soft)] text-[var(--erp-status-submitted)] border-[var(--erp-status-submitted-border)]",
        muted:
          "bg-[var(--erp-surface-panel)] text-[var(--erp-text-muted)] border-[var(--erp-border-default)]",
      },
      width: {
        hug: "w-[var(--erp-size-intent-hug)] max-w-full",
        fill: "w-[var(--erp-size-intent-fill)]",
        fit: "w-[var(--erp-size-intent-fit)] max-w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      width: "hug",
    },
  },
);

export type BadgeVariant = NonNullable<
  VariantProps<typeof badgeVariants>["variant"]
>;
export type BadgeWidth = NonNullable<VariantProps<typeof badgeVariants>["width"]>;

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, width = "hug", ...props }: BadgeProps) => (
  <span
    data-width={width}
    className={cn(badgeVariants({ variant, width }), className)}
    {...props}
  />
);

Badge.displayName = "Badge";
