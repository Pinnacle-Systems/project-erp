import { type ReactNode } from "react";
import {
  TextField,
  Button,
  SelectField,
  SelectItem,
  cn,
} from "@erp-ui-platform/primitives";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  statusOptions?: FilterOption[];
  statusValue?: string;
  onStatusChange?: (value: string) => void;
  dateFrom?: string;
  onDateFromChange?: (value: string) => void;
  dateTo?: string;
  onDateToChange?: (value: string) => void;
  actions?: ReactNode;
  onClearFilters?: () => void;
  hasActiveFilters?: boolean;
  className?: string;
}

export const FilterBar = ({
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  statusOptions,
  statusValue,
  onStatusChange,
  dateFrom,
  onDateFromChange,
  dateTo,
  onDateToChange,
  actions,
  onClearFilters,
  hasActiveFilters,
  className,
}: FilterBarProps) => {
  const showDateFrom = onDateFromChange !== undefined || dateFrom !== undefined;
  const showDateTo = onDateToChange !== undefined || dateTo !== undefined;

  return (
    <div
      className={cn(
        "flex flex-wrap items-end gap-2 px-4 py-2.5 bg-[var(--erp-surface)] border-b border-[var(--erp-border)]",
        className,
      )}
    >
      <div className="w-56 shrink-0">
        <TextField
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder={searchPlaceholder}
          density="compact"
          aria-label="Search"
        />
      </div>

      {statusOptions && statusOptions.length > 0 && (
        <div className="w-36 shrink-0">
          <SelectField
            value={statusValue}
            onValueChange={onStatusChange}
            placeholder="All statuses"
            density="compact"
          >
            {statusOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectField>
        </div>
      )}

      {showDateFrom && (
        <div className="w-32 shrink-0">
          <TextField
            type="date"
            value={dateFrom ?? ""}
            onChange={(e) => onDateFromChange?.(e.target.value)}
            density="compact"
            aria-label="From date"
          />
        </div>
      )}

      {showDateTo && (
        <div className="w-32 shrink-0">
          <TextField
            type="date"
            value={dateTo ?? ""}
            onChange={(e) => onDateToChange?.(e.target.value)}
            density="compact"
            aria-label="To date"
          />
        </div>
      )}

      <div className="flex items-center gap-2 ml-auto">
        {hasActiveFilters && onClearFilters && (
          <Button
            variant="ghost"
            density="compact"
            onClick={onClearFilters}
            type="button"
          >
            Clear filters
          </Button>
        )}
        {actions}
      </div>
    </div>
  );
};

FilterBar.displayName = "FilterBar";
