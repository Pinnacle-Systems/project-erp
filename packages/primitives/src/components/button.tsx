import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "h-[var(--erp-control-height)] px-[var(--erp-control-padding-x)] text-[length:var(--erp-control-font-size)] rounded-[var(--erp-radius-md)]",
    "leading-none select-none transition duration-[var(--erp-motion-fast)] ease-[var(--erp-ease-standard)]",
    "focus-visible:outline-none focus-visible:ring-[length:var(--erp-focus-ring-width)] focus-visible:ring-[var(--erp-focus-ring)] focus-visible:ring-offset-[var(--erp-focus-ring-offset)]",
    "disabled:pointer-events-none disabled:opacity-[var(--erp-disabled-opacity)]",
    "aria-busy:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border border-[var(--erp-color-primary)] bg-[var(--erp-color-primary)] text-[var(--erp-text-inverse)] shadow-[var(--erp-shadow-sm)] hover:border-[var(--erp-color-primary-hover)] hover:bg-[var(--erp-color-primary-hover)] hover:shadow-[var(--erp-shadow-button-hover)] active:bg-[var(--erp-accent-active)] active:border-[var(--erp-accent-active)] active:shadow-[var(--erp-shadow-xs)] active:translate-y-px",
        secondary:
          "border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] text-[var(--erp-color-foreground)] shadow-[var(--erp-shadow-xs)] hover:bg-[var(--erp-color-surface-muted)] hover:shadow-[var(--erp-shadow-button-hover)] active:bg-[var(--erp-color-primary-soft)] active:shadow-[var(--erp-shadow-xs)] active:translate-y-px",
        ghost:
          "text-[var(--erp-color-foreground-muted)] hover:bg-[var(--erp-color-surface-muted)] hover:text-[var(--erp-color-foreground)] active:bg-[var(--erp-color-primary-soft)] active:translate-y-px",
        destructive:
          "border border-[var(--erp-color-danger)] bg-[var(--erp-color-danger)] text-[var(--erp-text-inverse)] shadow-[var(--erp-shadow-sm)] hover:border-[var(--erp-danger-hover)] hover:bg-[var(--erp-danger-hover)] hover:shadow-[var(--erp-shadow-button-destructive-hover)] active:shadow-[var(--erp-shadow-xs)] active:translate-y-px",
        link: "text-[var(--erp-text-link)] underline-offset-4 hover:underline h-auto px-0 py-0",
      },
      density: {
        compact: "h-7 px-2.5 text-xs rounded-[var(--erp-radius-sm)]",
        comfortable:
          "h-[var(--erp-control-height)] px-[var(--erp-control-padding-x)] text-[length:var(--erp-control-font-size)] rounded-[var(--erp-radius-md)]",
        touch: "h-11 px-5 text-base rounded-[var(--erp-radius-lg)]",
      },
      width: {
        hug: "w-[var(--erp-size-intent-hug)] max-w-full",
        fill: "w-[var(--erp-size-intent-fill)]",
        fit: "w-[var(--erp-size-intent-fit)] max-w-full",
      },
    },
    defaultVariants: {
      variant: "secondary",
      width: "hug",
    },
  },
);

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
export type ButtonDensity = NonNullable<
  VariantProps<typeof buttonVariants>["density"]
>;
export type ButtonWidth = NonNullable<
  VariantProps<typeof buttonVariants>["width"]
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
      width = "hug",
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
        data-width={width}
        className={cn(buttonVariants({ variant, density, width }), className)}
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
