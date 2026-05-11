import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@erp-ui-platform/primitives";
import type { ResolvedWorkflowAction } from "@erp-ui-platform/workflow-actions";

export const variantMap: Record<
  string,
  "default" | "secondary" | "destructive" | "ghost"
> = {
  primary: "default",
  secondary: "secondary",
  danger: "destructive",
  ghost: "ghost",
  link: "ghost",
};

export const ActionButton = ({
  action,
  density = "compact",
}: {
  action: ResolvedWorkflowAction;
  density?: "compact" | "comfortable" | "touch";
}) => {
  const btn = (
    <Button
      variant={variantMap[action.variant] ?? "secondary"}
      density={density}
      disabled={action.disabled}
    >
      {action.label}
    </Button>
  );

  if (action.disabled && action.reason) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex" style={{ pointerEvents: "all" }}>
            {btn}
          </span>
        </TooltipTrigger>
        <TooltipContent>{action.reason.message}</TooltipContent>
      </Tooltip>
    );
  }

  return btn;
};

export const ActionBar = ({
  actions,
}: {
  actions: readonly ResolvedWorkflowAction[];
}) => (
  <>
    {actions.map((a) => (
      <ActionButton key={a.id} action={a} />
    ))}
  </>
);
