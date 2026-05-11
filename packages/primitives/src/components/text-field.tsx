import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

const inputVariants = cva(
  [
    "w-full rounded-md border bg-white font-sans",
    "text-neutral-900 placeholder:text-neutral-400",
    "transition-colors duration-100",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    "disabled:pointer-events-none disabled:bg-neutral-50 disabled:text-neutral-400 disabled:border-neutral-200",
    "read-only:bg-neutral-50 read-only:text-neutral-600",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-neutral-300 focus:ring-blue-600 focus:border-blue-600",
        error:
          "border-red-500 focus:ring-red-500 focus:border-red-500",
      },
      density: {
        compact: "h-8 px-3 text-xs",
        comfortable: "h-9 px-3 text-sm",
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
            className="text-sm font-medium text-neutral-700 select-none leading-none"
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
          <p id={errorId} className="text-xs text-red-600 leading-none" role="alert">
            {errorMessage}
          </p>
        )}
        {!errorMessage && helpText && (
          <p id={helpId} className="text-xs text-neutral-500 leading-none">
            {helpText}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
