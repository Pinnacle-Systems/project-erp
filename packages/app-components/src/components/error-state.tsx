import { Button, cn } from "@erp-ui-platform/primitives";

export interface ErrorStateProps {
  title?: string;
  description?: string;
  errorDetails?: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

const AlertCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const ErrorState = ({
  title = "Something went wrong",
  description = "An error occurred while loading this content.",
  errorDetails,
  onRetry,
  retryLabel = "Try again",
  className,
}: ErrorStateProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center gap-3 py-16 px-6 text-center",
      className,
    )}
    role="alert"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
      <AlertCircleIcon />
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-sm font-semibold text-neutral-700">{title}</p>
      {description && (
        <p className="text-sm text-neutral-500 max-w-sm">{description}</p>
      )}
    </div>
    {errorDetails && (
      <details className="text-left max-w-sm w-full">
        <summary className="text-xs text-neutral-400 cursor-pointer select-none hover:text-neutral-600 transition-colors">
          Error details
        </summary>
        <pre className="mt-1.5 rounded-md bg-neutral-100 p-2.5 text-xs text-neutral-600 overflow-auto whitespace-pre-wrap break-all leading-relaxed">
          {errorDetails}
        </pre>
      </details>
    )}
    {onRetry && (
      <Button
        variant="secondary"
        density="compact"
        onClick={onRetry}
        type="button"
      >
        {retryLabel}
      </Button>
    )}
  </div>
);

ErrorState.displayName = "ErrorState";
