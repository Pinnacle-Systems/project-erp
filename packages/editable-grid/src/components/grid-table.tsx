import { useState, type ReactNode } from "react";
import { Badge, cn, GridCellInput } from "@erp-ui-platform/primitives";
import type { GridRow, GridColumnDefinition } from "../index";

export type GridTableProps<TRowData extends Record<string, unknown>> = {
  rows: GridRow<TRowData>[];
  columns: GridColumnDefinition<TRowData>[];
  forceHoverId?: string;
  numericCols?: Set<string>;
};

export const GridHeaderCell = ({
  align = "left",
  className,
  children,
}: {
  align?: "left" | "right";
  className?: string;
  children?: ReactNode;
}) => (
  <th
    className={cn(
      "h-(--erp-grid-header-height) px-(--erp-grid-cell-padding-x) text-xs leading-(--erp-line-height-dense) font-semibold uppercase tracking-wide text-muted-foreground border-b border-r border-border-subtle last:border-r-0 bg-surface-muted align-middle",
      align === "right" ? "text-right" : "text-left",
      className,
    )}
  >
    {children}
  </th>
);

export const GridDataCell = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => (
  <td className={cn("align-middle px-(--erp-grid-cell-padding-x) py-(--erp-grid-cell-padding-y) border-r border-border-subtle last:border-r-0", className)}>
    {children}
  </td>
);

export const RowStateMarker = <TRowData extends Record<string, unknown>>({ row }: { row: GridRow<TRowData> }) => {
  if (row.isPhantom) {
    return <Badge variant="muted">phantom</Badge>;
  }
  if (row.state === "deleted") {
    return <Badge variant="danger">deleted</Badge>;
  }
  if (row.state === "dirty") {
    return <Badge variant="warning">dirty</Badge>;
  }
  return <Badge variant="success">clean</Badge>;
};

export const CellMarkers = <TRowData extends Record<string, unknown>>({ row }: { row: GridRow<TRowData> }) => {
  const cells = Object.values(row.cells);
  const markers = [
    cells.some((c) => c.validationMessages.length > 0) && "error",
    cells.some((c) => c.isManualOverride) && "manual",
    cells.some((c) => c.isStale) && "stale",
  ].filter(Boolean) as string[];

  if (!markers.length) return null;
  return (
    <div className="flex flex-wrap gap-0.5">
      {markers.map((m) => (
        <Badge
          key={m}
          variant={m === "error" ? "danger" : m === "stale" ? "warning" : "info"}
        >
          {m}
        </Badge>
      ))}
    </div>
  );
};

export const CellText = ({
  value,
  numeric = false,
  phantom = false,
  deleted = false,
}: {
  value: string;
  numeric?: boolean;
  phantom?: boolean;
  deleted?: boolean;
}) => (
  <span
    className={[
      "flex items-center h-(--erp-grid-cell-height) w-full px-(--erp-grid-cell-padding-x) text-xs leading-(--erp-line-height-dense)",
      numeric ? "text-right tabular-nums" : "",
      phantom ? "italic text-muted-foreground" : "text-foreground",
      deleted ? "line-through text-muted-foreground opacity-50" : "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {phantom ? "—" : value}
  </span>
);

export const GridTable = <TRowData extends Record<string, unknown>>({
  rows,
  columns,
  forceHoverId,
  numericCols = new Set(),
  activeCell,
  keyboardMode = "navigate",
}: GridTableProps<TRowData> & {
  activeCell?: { rowId: string; columnId: string } | null;
  keyboardMode?: "navigate" | "edit";
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="w-fit overflow-hidden rounded-control border border-border-subtle shadow-sm">
        <table className="border-collapse text-xs bg-surface">
          <thead>
            <tr>
              <GridHeaderCell className="w-18">State</GridHeaderCell>
              {columns.map((c) => (
                <GridHeaderCell
                  key={c.id}
                  align={numericCols.has(c.id) ? "right" : "left"}
                  className={cn(
                    c.id === "quantity" && "w-14",
                    c.id === "rate" && "w-16",
                    c.id === "item" && "w-28",
                  )}
                >
                  {c.header}
                </GridHeaderCell>
              ))}
              <GridHeaderCell className="w-18">Markers</GridHeaderCell>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const isDeleted = row.state === "deleted";
              const isDirty = row.state === "dirty";
              const isPhantom = row.isPhantom;
              const isHovered = row.id === forceHoverId || row.id === hoveredId;
              const isAltRow = idx % 2 === 1;
              const hasRowErrors = Object.values(row.cells).some(
                (c) => c.validationMessages.length > 0,
              );

              // Maintain meaningful colors for row states but use subtle semantic equivalents where possible.
              // Phantom/Readonly -> bg-surface-muted
              // Dirty -> bg-warning/10 or custom var if preferred. The instruction allows preserving semantic meaning.
              const rowBg = isDeleted
                ? "bg-(--erp-grid-row-deleted-bg)"
                : isDirty
                  ? "bg-warning/10"
                  : isPhantom
                    ? "bg-surface-muted"
                    : isHovered
                      ? "bg-primary/5"
                      : isAltRow
                        ? "bg-surface-muted"
                        : "bg-surface";

              return (
                <tr
                  key={row.id}
                  onMouseEnter={() => setHoveredId(row.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={[
                    "group border-b border-border-subtle last:border-b-0",
                    rowBg,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <GridDataCell
                    className={cn(
                      isDirty && hasRowErrors
                        ? "border-l-2 border-danger"
                        : isHovered && "border-l-2 border-primary",
                    )}
                  >
                    <RowStateMarker row={row} />
                  </GridDataCell>

                  {columns.map((col) => {
                    const cell = row.cells[col.id];
                    const val = row.data[col.field];
                    const hasError = (cell?.validationMessages.length ?? 0) > 0;
                    const numeric = numericCols.has(col.id);
                    const isEditable = col.editable !== false && !isPhantom && !isDeleted;
                    const hasManualOverride = Boolean(cell?.isManualOverride);
                    const hasStale = Boolean(cell?.isStale);

                    const isActive = activeCell?.rowId === row.id && activeCell?.columnId === col.id;

                    return (
                      <td
                        key={col.id}
                        data-row-id={row.id}
                        data-col-id={col.id}
                        data-grid-cell="true"
                        className={cn(
                          "px-0 py-(--erp-grid-cell-padding-y) border-r border-border-subtle last:border-r-0 relative",
                          isActive && keyboardMode === "navigate" && "shadow-[inset_0_0_0_2px_var(--erp-focus-ring)] z-10",
                        )}
                      >
                        {isEditable ? (
                          <GridCellInput
                            value={String(val ?? "")}
                            aria-label={`${col.header} for row ${row.id}`}
                            error={hasError}
                            numeric={numeric}
                            readOnly
                            className={
                              hasManualOverride
                                ? "border-info bg-info/5"
                                : hasStale
                                  ? "bg-(--erp-grid-cell-stale-bg)"
                                  : undefined
                            }
                          />
                        ) : (
                          <CellText
                            value={String(val ?? "")}
                            numeric={numeric}
                            phantom={isPhantom}
                            deleted={isDeleted}
                          />
                        )}
                      </td>
                    );
                  })}

                  <GridDataCell>
                    <CellMarkers row={row} />
                  </GridDataCell>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
