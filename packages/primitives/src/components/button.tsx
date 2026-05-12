import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--erp-radius-control)] font-medium",
    "leading-none select-none transition-colors duration-100",
    "focus-visible:outline-none focus-visible:ring-[length:var(--erp-focus-ring-width)] focus-visible:ring-[var(--erp-focus-ring)] focus-visible:ring-offset-[var(--erp-focus-ring-offset)]",
    "disabled:pointer-events-none disabled:opacity-[var(--erp-disabled-opacity)]",
    "aria-busy:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-[var(--erp-color-primary)] text-[var(--erp-color-primary-foreground)] hover:bg-[var(--erp-accent-hover)] active:bg-[var(--erp-accent-active)]",
        secondary:
          "bg-[var(--erp-surface)] text-[var(--erp-fg)] border border-[var(--erp-border-strong)] hover:bg-[var(--erp-surface-muted)] active:bg-[var(--erp-border)]",
        ghost:
          "text-[var(--erp-muted)] hover:bg-[var(--erp-surface-muted)] hover:text-[var(--erp-fg)] active:bg-[var(--erp-border)]",
        destructive:
          "bg-[var(--erp-color-danger)] text-[var(--erp-color-danger-foreground)] hover:bg-[var(--erp-danger-hover)] active:bg-[var(--erp-danger-hover)]",
        link: "text-[var(--erp-color-primary)] underline-offset-4 hover:underline h-auto px-0 py-0",
      },
      density: {
        compact: "h-8 px-3 text-xs",
        comfortable:
          "h-[var(--erp-control-height)] px-[var(--erp-control-padding-x)] text-[length:var(--erp-control-font-size)]",
        touch: "h-11 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "secondary",
      density: "comfortable",
    },
  },
);

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
export type ButtonDensity = NonNullable<
  VariantProps<typeof buttonVariants>["density"]
>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      density,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, density }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 shrink-0 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
