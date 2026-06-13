import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

const validationMessageVariants = cva("text-sm", {
  variants: {
    tone: {
      default: "text-muted-foreground",
      error: "text-danger",
      warning: "text-amber-600 dark:text-amber-500",
      success: "text-green-600 dark:text-green-500",
      info: "text-blue-600 dark:text-blue-500",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

export interface ValidationMessageProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof validationMessageVariants> {}

export const ValidationMessage = forwardRef<HTMLParagraphElement, ValidationMessageProps>(
  ({ className, tone, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(validationMessageVariants({ tone }), className)}
        {...props}
      />
    );
  },
);
ValidationMessage.displayName = "ValidationMessage";
