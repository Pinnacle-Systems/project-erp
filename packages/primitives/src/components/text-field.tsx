import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

const inputVariants = cva(
  [
    "w-full rounded-[var(--erp-radius-control)] border bg-[var(--erp-surface)] font-sans",
    "text-[var(--erp-fg)] placeholder:text-[var(--erp-subtle)]",
    "transition-colors duration-100",
    "focus:outline-none focus:ring-[length:var(--erp-focus-ring-width)] focus:ring-[var(--erp-focus-ring)] focus:ring-offset-[var(--erp-focus-ring-offset)]",
    "disabled:pointer-events-none disabled:opacity-[var(--erp-disabled-opacity)] disabled:bg-[var(--erp-surface-muted)] disabled:text-[var(--erp-subtle)] disabled:border-[var(--erp-border)]",
    "read-only:bg-[var(--erp-surface-muted)] read-only:text-[var(--erp-muted)]",
  ].join(" "),
  {
    variants: {
      state: {
        default:
          "border-[var(--erp-border-strong)] focus:border-[var(--erp-color-primary)]",
        error:
          "border-[var(--erp-danger)] focus:ring-[var(--erp-danger)] focus:border-[var(--erp-danger)]",
      },
      density: {
        compact: "h-8 px-3 text-xs",
        comfortable:
          "h-[var(--erp-control-height)] px-[var(--erp-control-padding-x)] text-[length:var(--erp-control-font-size)]",
        touch: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      state: "default",
      density: "comfortable",
    },
  },
);

export type TextFieldDensity = NonNullable<
  VariantProps<typeof inputVariants>["density"]
>;

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  errorMessage?: string;
  helpText?: string;
  density?: TextFieldDensity;
  error?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      errorMessage,
      helpText,
      error,
      density = "comfortable",
      id,
      ...props
    },
    ref,
  ) => {
    const inputId =
      id ?? (label ? `field-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
    const hasError = Boolean(error || errorMessage);
    const errorId = inputId ? `${inputId}-error` : undefined;
    const helpId = inputId ? `${inputId}-help` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--erp-fg)] select-none leading-none"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            inputVariants({ state: hasError ? "error" : "default", density }),
            className,
          )}
          aria-invalid={hasError || undefined}
          aria-describedby={
            errorMessage ? errorId : helpText ? helpId : undefined
          }
          {...props}
        />
        {errorMessage && (
          <p id={errorId} className="text-xs text-[var(--erp-danger)] leading-none" role="alert">
            {errorMessage}
          </p>
        )}
        {!errorMessage && helpText && (
          <p id={helpId} className="text-xs text-[var(--erp-muted)] leading-none">
            {helpText}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
