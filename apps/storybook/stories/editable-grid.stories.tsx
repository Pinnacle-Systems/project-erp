import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  applyCellChange,
  createEmptyRow,
  markRowDeleted,
  type GridColumnDefinition,
  type GridRow,
} from "@erp-ui-platform/editable-grid";
import type { ValidationMessage } from "@erp-ui-platform/validation-ui";
import { Badge, GridCellInput } from "@erp-ui-platform/primitives";
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
  const markers: string[] = [];
  for (const cell of Object.values(row.cells)) {
    if (cell.isManualOverride) markers.push("manual");
    if (cell.isStale) markers.push("stale");
    if (cell.validationMessages.length > 0) markers.push("error");
  }
  if (!markers.length) return null;
  return (
    <div className="flex flex-wrap gap-0.5">
      {[...new Set(markers)].map((m) => (
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
      "block h-6 w-full px-1.5 text-xs leading-6",
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
  <div className="overflow-hidden rounded-(--erp-radius-card) border border-(--erp-grid-row-border)">
    <table className="w-full border-collapse text-xs">
      <thead>
        <tr className="border-b border-(--erp-grid-header-border) bg-(--erp-grid-header-bg)">
          {/* State */}
          <th className="h-7 w-18 px-1.5 text-left text-[11px] font-semibold uppercase tracking-wide text-(--erp-grid-header-text)">
            State
          </th>
          {/* Data columns */}
          {columns.map((c) => (
            <th
              key={c.id}
              className={[
                "h-7 px-1.5 text-[11px] font-semibold uppercase tracking-wide text-(--erp-grid-header-text)",
                c.id === "quantity" ? "w-14" : "",
                c.id === "rate" ? "w-16" : "",
                c.id === "item" ? "w-28" : "",
                NUMERIC_COLS.has(c.id) ? "text-right" : "text-left",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {c.header}
            </th>
          ))}
          {/* Markers */}
          <th className="h-7 w-18 px-1.5 text-left text-[11px] font-semibold uppercase tracking-wide text-(--erp-grid-header-text)">
            Markers
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const isDeleted = row.state === "deleted";
          const isDirty = row.state === "dirty";
          const isPhantom = row.isPhantom;

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
                      : "bg-(--erp-grid-row-bg)",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* State badge cell */}
              <td className="px-1.5 py-0.5">
                <RowStateMarker row={row} />
              </td>

              {/* Data cells */}
              {columns.map((col) => {
                const cell = row.cells[col.id];
                const val = row.data[col.field];
                const hasError = (cell?.validationMessages.length ?? 0) > 0;
                const numeric = NUMERIC_COLS.has(col.id);
                const isEditable = col.editable !== false && !isPhantom && !isDeleted;
                const hasManualOverride = Boolean(cell?.isManualOverride);

                return (
                  <td key={col.id} className="px-0 py-0.5">
                    {isEditable ? (
                      <GridCellInput
                        value={String(val ?? "")}
                        aria-label={`${col.header} for row ${row.id}`}
                        error={hasError}
                        numeric={numeric}
                        readOnly
                        className={
                          hasManualOverride
                            ? "border-(--erp-grid-selection-handle) bg-(--erp-grid-cell-editing-bg)"
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
              <td className="px-1.5 py-0.5">
                <CellMarkers row={row} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
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

    const row2 = createEmptyRow<Line>({
      id: "line-2",
      columns,
      defaults: { item: "ACC-220", description: "Accessory pack", quantity: 8, rate: 40 },
      isPhantom: false,
    });
    const dirty = applyCellChange(row2, columns[2], 10, {
      expectedVersion: row2.version,
    }).nextRow;

    const phantom = createEmptyRow<Line>({ id: "new-line", columns });

    return <GridTable rows={[clean, dirty, phantom]} />;
  },
};

export const DirtyRow: Story = {
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
      isPhantom: false,
    });
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
    const empty = createEmptyRow<Line>({ id: "line-1", columns });
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

export const StaleManualOverride: Story = {
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: { item: "FAB-001", description: "Fabric roll", quantity: 12, rate: 100 },
      isPhantom: false,
    });
    const change = applyCellChange(row, columns[2], 14, {
      expectedVersion: row.version,
      manualOverride: true,
    });

    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-(--erp-text-muted)">
          A manual override (blue border) prevents future autofill from overwriting the
          user-set value.
        </p>
        <GridTable rows={[change.nextRow]} />
        <p className="text-xs text-(--erp-text-link)">
          Qty manually set to 14. Autofill will not overwrite this field.
        </p>
      </div>
    );
  },
};
