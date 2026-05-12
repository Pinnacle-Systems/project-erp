import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium leading-none select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--erp-surface-muted)] text-[var(--erp-fg)] border-[var(--erp-border)]",
        success:
          "bg-[var(--erp-status-approved-soft)] text-[var(--erp-status-approved)] border-[var(--erp-status-approved-border)]",
        warning:
          "bg-[var(--erp-warning-soft)] text-[var(--erp-color-warning)] border-[var(--erp-warning-border)]",
        danger:
          "bg-[var(--erp-status-rejected-soft)] text-[var(--erp-status-rejected)] border-[var(--erp-status-rejected-border)]",
        info:
          "bg-[var(--erp-status-submitted-soft)] text-[var(--erp-status-submitted)] border-[var(--erp-status-submitted-border)]",
        muted:
          "bg-[var(--erp-surface-muted)] text-[var(--erp-muted)] border-[var(--erp-border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeVariant = NonNullable<
  VariantProps<typeof badgeVariants>["variant"]
>;

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props} />
);

Badge.displayName = "Badge";
