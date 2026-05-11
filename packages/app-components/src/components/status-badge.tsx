import { Badge } from "@erp-ui-platform/primitives";
import type { BadgeVariant } from "@erp-ui-platform/primitives";

export type StatusBadgeTone = BadgeVariant;

export interface StatusBadgeProps {
  label: string;
  tone?: StatusBadgeTone;
  status?: string;
  className?: string;
}

export const StatusBadge = ({ label, tone = "default", className }: StatusBadgeProps) => (
  <Badge variant={tone} className={className}>
    {label}
  </Badge>
);

StatusBadge.displayName = "StatusBadge";
