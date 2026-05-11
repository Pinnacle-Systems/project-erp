import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
} from "react";
import { cn } from "../lib/utils";

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const triggerVariants = cva(
  [
    "flex w-full items-center justify-between gap-2 rounded-md border bg-white",
    "text-neutral-900 font-sans",
    "transition-colors duration-100",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    "disabled:pointer-events-none disabled:bg-neutral-50 disabled:text-neutral-400 disabled:border-neutral-200",
    "data-placeholder:text-neutral-400",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-neutral-300 focus:ring-blue-600 focus:border-blue-600",
        error: "border-red-500 focus:ring-red-500 focus:border-red-500",
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

export type SelectFieldDensity = NonNullable<
  VariantProps<typeof triggerVariants>["density"]
>;

// Low-level Radix parts — consumers can compose these directly
export const SelectRoot = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
    VariantProps<typeof triggerVariants>
>(({ className, children, state, density, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(triggerVariants({ state, density }), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <span className="text-neutral-500 shrink-0">
        <ChevronDown />
      </span>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md",
        position === "popper" &&
          "w-[--radix-select-trigger-width] max-h-[--radix-select-content-available-height]",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm",
      "py-1.5 pl-8 pr-2 text-sm text-neutral-700 outline-none",
      "focus:bg-neutral-100 focus:text-neutral-900",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckMark />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1 text-xs font-semibold text-neutral-500", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-neutral-200", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// Compound convenience wrapper: SelectField = label + trigger + content + error
export interface SelectFieldProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  label?: string;
  errorMessage?: string;
  helpText?: string;
  density?: SelectFieldDensity;
  error?: boolean;
  id?: string;
  className?: string;
  placeholder?: string;
  children: ReactNode;
}

export const SelectField = ({
  label,
  errorMessage,
  helpText,
  density = "comfortable",
  error,
  id,
  className,
  placeholder,
  children,
  ...rootProps
}: SelectFieldProps) => {
  const fieldId =
    id ?? (label ? `select-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
  const hasError = Boolean(error || errorMessage);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-medium text-neutral-700 select-none leading-none"
        >
          {label}
        </label>
      )}
      <SelectRoot {...rootProps}>
        <SelectTrigger
          id={fieldId}
          state={hasError ? "error" : "default"}
          density={density}
          aria-invalid={hasError || undefined}
        >
          <SelectValue placeholder={placeholder ?? "Select..."} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </SelectRoot>
      {errorMessage && (
        <p className="text-xs text-red-600 leading-none" role="alert">
          {errorMessage}
        </p>
      )}
      {!errorMessage && helpText && (
        <p className="text-xs text-neutral-500 leading-none">{helpText}</p>
      )}
    </div>
  );
};

SelectField.displayName = "SelectField";
