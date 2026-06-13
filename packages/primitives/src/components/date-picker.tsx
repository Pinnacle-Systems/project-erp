import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ValidationMessage } from "./validation-message";

const datePickerVariants = cva(
  [
    "flex w-full rounded-control border bg-surface text-control ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[length:var(--erp-focus-ring-width)] focus-visible:ring-[var(--erp-focus-ring)] focus-visible:ring-offset-[var(--erp-focus-ring-offset)] disabled:cursor-not-allowed disabled:opacity-[var(--erp-disabled-opacity)] transition duration-150 ease-out",
  ].join(" "),
  {
    variants: {
      density: {
        compact: "h-7 px-2.5 text-xs rounded-[var(--erp-radius-sm)]",
        comfortable: "h-control px-[var(--erp-control-padding-x)] text-control rounded-control",
        touch: "h-11 px-5 text-base rounded-[var(--erp-radius-lg)]",
      },
      error: {
        true: "border-[var(--erp-color-danger)] focus-visible:ring-[var(--erp-color-danger)]",
        false: "border-border focus-visible:border-[var(--erp-color-primary)]",
      },
    },
    defaultVariants: {
      density: "comfortable",
      error: false,
    },
  }
);

export interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange">,
    Omit<VariantProps<typeof datePickerVariants>, "error"> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  value?: string | Date;
  defaultValue?: string | Date;
  onValueChange?: (value: string | undefined) => void;
}

function formatDateForInput(date: string | Date | undefined): string | undefined {
  if (!date) return undefined;
  if (typeof date === "string") return date;
  return date.toISOString().split("T")[0];
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      className,
      density,
      error,
      label,
      description,
      id,
      required,
      value,
      defaultValue,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const errorId = error && id ? `${id}-error` : undefined;
    const descId = description && id ? `${id}-description` : undefined;
    const ariaDescribedBy = [errorId, descId, props["aria-describedby"]].filter(Boolean).join(" ") || undefined;

    const dateInput = (
      <input
        type="date"
        ref={ref}
        id={id}
        value={formatDateForInput(value)}
        defaultValue={formatDateForInput(defaultValue)}
        onChange={(e) => onValueChange?.(e.target.value)}
        required={required}
        aria-describedby={ariaDescribedBy}
        aria-invalid={!!error}
        className={cn(datePickerVariants({ density, error: !!error }), className)}
        {...props}
      />
    );

    if (!label && !description && !error) {
      return dateInput;
    }

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-foreground">
            {label}
            {required && <span className="ml-1 text-danger" aria-hidden="true">*</span>}
          </label>
        )}
        {description && (
          <p id={descId} className="text-sm text-muted-foreground">{description}</p>
        )}
        {dateInput}
        {error && (
          <ValidationMessage id={errorId} tone="error">{error}</ValidationMessage>
        )}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
