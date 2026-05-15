import type { Meta, StoryObj } from "@storybook/react-vite";
import { type ReactNode } from "react";
import {
  applyCellChange,
  createEmptyRow,
  markRowDeleted,
  type GridColumnDefinition,
  type GridRow,
} from "@erp-ui-platform/editable-grid";
import type { ValidationMessage } from "@erp-ui-platform/validation-ui";
import { Badge, cn, GridCellInput } from "@erp-ui-platform/primitives";
import { EmptyState } from "@erp-ui-platform/app-components";

const meta = {
  title: "Patterns/Editable Grid",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── types & columns ───────────────────────────────────────────────────────────

type Line = {
  item?: string;
  description?: string;
  quantity?: number;
  rate?: number;
};

const columns: GridColumnDefinition<Line>[] = [
  { id: "item", header: "Item", field: "item" },
  { id: "description", header: "Description", field: "description", editable: false },
  { id: "quantity", header: "Qty", field: "quantity" },
  { id: "rate", header: "Rate", field: "rate", editable: false },
];

// Columns whose values are numeric — right-align and use tabular nums
const NUMERIC_COLS = new Set(["quantity", "rate"]);

// ── helpers ───────────────────────────────────────────────────────────────────

const GridHeaderCell = ({
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
      "h-(--erp-grid-header-height) px-(--erp-grid-cell-padding-x) text-(length:--erp-font-size-xs) leading-(--erp-line-height-dense) font-semibold uppercase tracking-(--erp-tracking-caps) text-(--erp-grid-header-text) border-r border-(--erp-grid-header-border) last:border-r-0",
      align === "right" ? "text-right" : "text-left",
      className,
    )}
  >
    {children}
  </th>
);

const GridDataCell = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => (
  <td className={cn("align-middle px-(--erp-grid-cell-padding-x) py-(--erp-grid-cell-padding-y) border-r border-(--erp-grid-row-border) last:border-r-0", className)}>
    {children}
  </td>
);

const RowStateMarker = ({ row }: { row: GridRow<Line> }) => {
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

const CellMarkers = ({ row }: { row: GridRow<Line> }) => {
  const cells = Object.values(row.cells);
  // Error is listed first so it visually outranks secondary state markers
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

// Cell text shown when a cell is not editable or the row is phantom/deleted
const CellText = ({
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
      "flex items-center h-(--erp-grid-cell-height) w-full px-(--erp-grid-cell-padding-x) text-(length:--erp-font-size-xs) leading-(--erp-line-height-dense)",
      numeric ? "text-right tabular-nums" : "",
      phantom ? "italic text-(--erp-text-disabled)" : "text-(--erp-text-secondary)",
      deleted ? "line-through text-(--erp-text-disabled)" : "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {phantom ? "—" : value}
  </span>
);

const GridTable = ({ rows }: { rows: GridRow<Line>[] }) => (
  <div className="max-w-full overflow-x-auto">
    <div className="w-fit overflow-hidden rounded-(--erp-radius-card) border border-(--erp-grid-row-border)">
      <table className="border-collapse text-(length:--erp-font-size-xs)">
        <thead>
          <tr className="border-b border-(--erp-grid-header-border) bg-(--erp-grid-header-bg)">
            {/* State */}
            <GridHeaderCell className="w-18">State</GridHeaderCell>
            {/* Data columns */}
            {columns.map((c) => (
              <GridHeaderCell
                key={c.id}
                align={NUMERIC_COLS.has(c.id) ? "right" : "left"}
                className={cn(
                  c.id === "quantity" && "w-14",
                  c.id === "rate" && "w-16",
                  c.id === "item" && "w-28",
                )}
              >
                {c.header}
              </GridHeaderCell>
            ))}
            {/* Markers */}
            <GridHeaderCell className="w-18">Markers</GridHeaderCell>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isDeleted = row.state === "deleted";
            const isDirty = row.state === "dirty";
            const isPhantom = row.isPhantom;
            const hasRowErrors = Object.values(row.cells).some(
              (c) => c.validationMessages.length > 0,
            );

            return (
              <tr
                key={row.id}
                className={[
                  "border-b border-(--erp-grid-row-border) last:border-b-0",
                  isDeleted
                    ? "bg-(--erp-grid-row-deleted-bg)"
                    : isDirty
                      ? "bg-(--erp-grid-row-dirty-bg)"
                      : isPhantom
                        ? "bg-(--erp-grid-row-readonly-bg)"
                        : "group bg-(--erp-grid-row-bg) even:bg-(--erp-grid-row-alt-bg) hover:bg-(--erp-grid-row-hover-bg)",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* State badge cell — left accent stripe when row has errors */}
                <GridDataCell
                  className={cn(
                    isDirty && hasRowErrors
                      ? "border-l-2 border-(--erp-grid-row-error-accent)"
                      : "group-hover:shadow-[inset_3px_0_0_var(--erp-grid-row-hover-accent)]",
                  )}
                >
                  <RowStateMarker row={row} />
                </GridDataCell>

                {/* Data cells */}
                {columns.map((col) => {
                  const cell = row.cells[col.id];
                  const val = row.data[col.field];
                  const hasError = (cell?.validationMessages.length ?? 0) > 0;
                  const numeric = NUMERIC_COLS.has(col.id);
                  const isEditable = col.editable !== false && !isPhantom && !isDeleted;
                  const hasManualOverride = Boolean(cell?.isManualOverride);
                  const hasStale = Boolean(cell?.isStale);

                  return (
                    <td key={col.id} className="px-0 py-(--erp-grid-cell-padding-y) border-r border-(--erp-grid-row-border) last:border-r-0">
                      {isEditable ? (
                        <GridCellInput
                          value={String(val ?? "")}
                          aria-label={`${col.header} for row ${row.id}`}
                          error={hasError}
                          numeric={numeric}
                          readOnly
                          className={
                            hasManualOverride
                              ? "border-(--erp-grid-cell-manual-border) bg-(--erp-grid-cell-manual-bg)"
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

                {/* Marker badge cell */}
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

// ── stories ───────────────────────────────────────────────────────────────────

export const EmptyGrid: Story = {
  render: () => {
    const phantom = createEmptyRow<Line>({ id: "new", columns });
    return (
      <div className="flex flex-col gap-3">
        <GridTable rows={[phantom]} />
        <EmptyState
          title="No lines added"
          description="Add a line item to begin. Use the item lookup to auto-fill description and rate."
          primaryAction={
            <button className="text-xs text-(--erp-text-link) hover:underline">
              + Add line
            </button>
          }
          className="py-8"
        />
      </div>
    );
  },
};

export const WithLines: Story = {
  render: () => {
    const row1 = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
      isPhantom: false,
    });
    const clean = { ...row1, state: "clean" as const };

    const row2 = {
      ...createEmptyRow<Line>({
        id: "line-2",
        columns,
        defaults: { item: "ACC-220", description: "Accessory pack", quantity: 8, rate: 40 },
        isPhantom: false,
      }),
      state: "clean" as const,
    };
    const dirty = applyCellChange(row2, columns[2], 10, {
      expectedVersion: row2.version,
    }).nextRow;

    const phantom = createEmptyRow<Line>({ id: "new-line", columns });

    return <GridTable rows={[clean, dirty, phantom]} />;
  },
};

export const DirtyRow: Story = {
  render: () => {
    const row = {
      ...createEmptyRow<Line>({
        id: "line-1",
        columns,
        defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
        isPhantom: false,
      }),
      state: "clean" as const,
    };
    const dirty = applyCellChange(row, columns[2], 15, {
      expectedVersion: row.version,
    }).nextRow;

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          Qty changed from 12 → 15. Row transitions to dirty state.
        </p>
        <GridTable rows={[dirty]} />
      </div>
    );
  },
};

export const DeletedRow: Story = {
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
      isPhantom: false,
    });
    const deleted = markRowDeleted({ ...row, state: "clean" });

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          Deleted rows are retained until save to support undo. Visual strikethrough signals
          pending removal.
        </p>
        <GridTable rows={[deleted]} />
      </div>
    );
  },
};

export const ValidationErrors: Story = {
  render: () => {
    const errMsg: ValidationMessage = {
      id: "v-qty",
      severity: "error",
      scope: "line",
      lineIndex: 0,
      fieldPath: "lines[0].quantity",
      message: "Quantity must be greater than zero.",
    };
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: { item: "ACC-220", description: "Accessory pack", quantity: 0, rate: 40 },
      isPhantom: false,
    });
    const withError: GridRow<Line> = {
      ...row,
      state: "dirty",
      cells: {
        ...row.cells,
        quantity: { ...row.cells["quantity"]!, validationMessages: [errMsg] },
      },
    };

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          Dirty row (amber) with a blocking validation error. The red left stripe and
          error-first badge order make error outrank dirty — three independent signals:
          color, structure, text.
        </p>
        <GridTable rows={[withError]} />
        <p className="text-xs text-(--erp-validation-error-text)">
          Line 1 · {errMsg.message}
        </p>
      </div>
    );
  },
};

export const LookupAutofillResult: Story = {
  render: () => {
    const empty = {
      ...createEmptyRow<Line>({ id: "line-1", columns }),
      state: "clean" as const,
    };
    const afterLookup = applyCellChange(empty, columns[0], "FAB-001", {
      expectedVersion: empty.version,
    }).nextRow;
    const withAutofill: GridRow<Line> = {
      ...afterLookup,
      data: {
        ...afterLookup.data,
        description: "Fabric roll",
        rate: 100,
      },
    };

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          Selecting an item via lookup auto-fills description and rate. The item cell is dirty;
          autofill fields are read-only until manually overridden.
        </p>
        <GridTable rows={[withAutofill]} />
      </div>
    );
  },
};

export const StaleCells: Story = {
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
      isPhantom: false,
    });
    // Simulate an upstream data refresh that marked the autofilled fields as stale
    const withStale: GridRow<Line> = {
      ...row,
      state: "dirty",
      cells: {
        ...row.cells,
        description: { ...row.cells["description"]!, isStale: true },
        rate: { ...row.cells["rate"]!, isStale: true },
      },
    };

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          Stale cells (violet tint) hold a value that may have been superseded by an upstream
          change. They are distinct from active editing (blue) and from dirty rows (amber).
          Stale badges confirm the marker without relying on color alone.
        </p>
        <GridTable rows={[withStale]} />
      </div>
    );
  },
};

export const FocusedErrorCell: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-(--erp-text-muted)">
        Click into either cell to focus it. The error cell (Qty) keeps its red ring on focus;
        the valid cell (Rate) shows the standard blue ring.
      </p>
      <div className="max-w-full overflow-x-auto">
        <div className="w-fit overflow-hidden rounded-(--erp-radius-card) border border-(--erp-grid-row-border)">
          <table className="border-collapse text-(length:--erp-font-size-xs)">
            <thead>
              <tr className="border-b border-(--erp-grid-header-border) bg-(--erp-grid-header-bg)">
                <GridHeaderCell className="w-28">Field</GridHeaderCell>
                <GridHeaderCell align="right" className="w-14">Qty</GridHeaderCell>
                <GridHeaderCell align="right" className="w-16">Rate</GridHeaderCell>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-(--erp-grid-row-dirty-bg)">
                <td className="px-(--erp-grid-cell-padding-x) py-(--erp-grid-cell-padding-y) text-(--erp-text-secondary) border-r border-(--erp-grid-row-border)">ACC-220</td>
                <td className="px-0 py-(--erp-grid-cell-padding-y) border-r border-(--erp-grid-row-border)">
                  <GridCellInput
                    defaultValue="0"
                    aria-label="Qty"
                    error
                    numeric
                  />
                </td>
                <td className="px-0 py-(--erp-grid-cell-padding-y)">
                  <GridCellInput
                    defaultValue="40"
                    aria-label="Rate"
                    numeric
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-(--erp-validation-error-text)">
        Line 1 · Quantity must be greater than zero.
      </p>
    </div>
  ),
};

export const AllRowStates: Story = {
  render: () => {
    // ── row 1: clean, odd position → normal white bg ──────────────────────────
    const r1base = createEmptyRow<Line>({
      id: "r1", columns,
      defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
      isPhantom: false,
    });
    const row1: GridRow<Line> = { ...r1base, state: "clean" };

    // ── row 2: clean, even position → alternating tint ────────────────────────
    const r2base = createEmptyRow<Line>({
      id: "r2", columns,
      defaults: { item: "ACC-220", description: "Accessory pack", quantity: 8, rate: 40 },
      isPhantom: false,
    });
    const row2: GridRow<Line> = { ...r2base, state: "clean" };

    // ── row 3: dirty (qty changed, no error) ──────────────────────────────────
    const r3base = {
      ...createEmptyRow<Line>({
        id: "r3", columns,
        defaults: { item: "THR-305", description: "Thread spool", quantity: 5, rate: 18 },
        isPhantom: false,
      }),
      state: "clean" as const,
    };
    const row3 = applyCellChange(r3base, columns[2], 7, {
      expectedVersion: r3base.version,
    }).nextRow;

    // ── row 4: dirty + validation error on qty ────────────────────────────────
    const errMsg: ValidationMessage = {
      id: "v-r4-qty",
      severity: "error",
      scope: "line",
      lineIndex: 3,
      fieldPath: "lines[3].quantity",
      message: "Quantity must be greater than zero.",
    };
    const r4base = createEmptyRow<Line>({
      id: "r4", columns,
      defaults: { item: "BTN-112", description: "Button set", quantity: 0, rate: 5 },
      isPhantom: false,
    });
    const row4: GridRow<Line> = {
      ...r4base,
      state: "dirty",
      cells: {
        ...r4base.cells,
        quantity: { ...r4base.cells["quantity"]!, validationMessages: [errMsg] },
      },
    };

    // ── row 5: dirty + stale qty cell ─────────────────────────────────────────
    const r5base = createEmptyRow<Line>({
      id: "r5", columns,
      defaults: { item: "ZPR-044", description: "Zipper 30cm", quantity: 24, rate: 3 },
      isPhantom: false,
    });
    const row5: GridRow<Line> = {
      ...r5base,
      state: "dirty",
      cells: {
        ...r5base.cells,
        quantity: { ...r5base.cells["quantity"]!, isStale: true },
      },
    };

    // ── row 6: dirty + manual override on qty ─────────────────────────────────
    const r6base = {
      ...createEmptyRow<Line>({
        id: "r6", columns,
        defaults: { item: "RIB-088", description: "Ribbon roll", quantity: 10, rate: 8 },
        isPhantom: false,
      }),
      state: "clean" as const,
    };
    const row6 = applyCellChange(r6base, columns[2], 20, {
      expectedVersion: r6base.version,
      manualOverride: true,
    }).nextRow;

    // ── row 7: clean, odd position → normal white bg ──────────────────────────
    const r7base = createEmptyRow<Line>({
      id: "r7", columns,
      defaults: { item: "FLN-021", description: "Flannel fabric", quantity: 30, rate: 75 },
      isPhantom: false,
    });
    const row7: GridRow<Line> = { ...r7base, state: "clean" };

    // ── row 8: clean, even position → alternating tint ────────────────────────
    const r8base = createEmptyRow<Line>({
      id: "r8", columns,
      defaults: { item: "ELS-007", description: "Elastic band", quantity: 50, rate: 12 },
      isPhantom: false,
    });
    const row8: GridRow<Line> = { ...r8base, state: "clean" };

    // ── row 9: deleted ────────────────────────────────────────────────────────
    const r9base = createEmptyRow<Line>({
      id: "r9", columns,
      defaults: { item: "VLV-033", description: "Velvet strip", quantity: 4, rate: 85 },
      isPhantom: false,
    });
    const row9 = markRowDeleted({ ...r9base, state: "clean" });

    // ── row 10: phantom (add-new slot) ────────────────────────────────────────
    const row10 = createEmptyRow<Line>({ id: "r10", columns });

    return (
      <div className="flex flex-col gap-3">
        <div className="space-y-1 text-xs text-(--erp-text-muted)">
          <p>
            <span className="font-medium text-(--erp-text-primary)">State hierarchy: </span>
            error › dirty › stale › hover › alternating row › normal
          </p>
          <p>
            Row backgrounds belong to the row. Cell backgrounds only paint for true cell-level
            states: editing, error, manual override, stale. Transparent cell backgrounds let
            row state show through — hover a clean row to confirm.
          </p>
        </div>
        <GridTable
          rows={[row1, row2, row3, row4, row5, row6, row7, row8, row9, row10]}
        />
        <p className="text-xs text-(--erp-validation-error-text)">
          Row 4 (BTN-112) · {errMsg.message}
        </p>
      </div>
    );
  },
};

export const StaleManualOverride: Story = {
  render: () => {
    const row = {
      ...createEmptyRow<Line>({
        id: "line-1",
        columns,
        defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
        isPhantom: false,
      }),
      state: "clean" as const,
    };
    const change = applyCellChange(row, columns[2], 14, {
      expectedVersion: row.version,
      manualOverride: true,
    });

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          A manual override (soft blue border) prevents future autofill from overwriting the
          user-set value. Click into the cell to see the stronger active-editing state.
        </p>
        <GridTable rows={[change.nextRow]} />
        <p className="text-xs text-(--erp-text-link)">
          Qty manually set to 14. Autofill will not overwrite this field.
        </p>
      </div>
    );
  },
};
