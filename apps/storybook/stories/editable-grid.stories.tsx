import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  applyCellChange,
  createEmptyRow,
  markRowDeleted,
  type GridColumnDefinition,
  type GridRow,
} from "@erp-ui-platform/editable-grid";
import type { ValidationMessage } from "@erp-ui-platform/validation-ui";
import { Badge, TextField } from "@erp-ui-platform/primitives";
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
    <div className="flex gap-1 flex-wrap">
      {[...new Set(markers)].map((m) => (
        <Badge
          key={m}
          variant={
            m === "error" ? "danger" : m === "stale" ? "warning" : "info"
          }
        >
          {m}
        </Badge>
      ))}
    </div>
  );
};

const GridTable = ({ rows }: { rows: GridRow<Line>[] }) => (
  <div className="border border-neutral-200 rounded-md overflow-hidden text-xs">
    <table className="w-full">
      <thead>
        <tr className="bg-neutral-50 border-b border-neutral-200">
          <th className="text-left px-3 py-2 font-medium text-neutral-500 w-28">
            State
          </th>
          {columns.map((c) => (
            <th
              key={c.id}
              className="text-left px-3 py-2 font-medium text-neutral-500"
            >
              {c.header}
            </th>
          ))}
          <th className="text-left px-3 py-2 font-medium text-neutral-500 w-28">
            Markers
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.id}
            className={[
              "border-b border-neutral-100 last:border-b-0",
              row.state === "deleted"
                ? "bg-red-50 opacity-60"
                : row.state === "dirty"
                  ? "bg-amber-50"
                  : row.isPhantom
                    ? "bg-neutral-50/60"
                    : "",
            ].join(" ")}
          >
            <td className="px-3 py-2">
              <RowStateMarker row={row} />
            </td>
            {columns.map((col) => {
              const cell = row.cells[col.id];
              const val = row.data[col.field];
              const hasError =
                (cell?.validationMessages.length ?? 0) > 0;
              return (
                <td key={col.id} className="px-3 py-2">
                  {col.editable !== false && !row.isPhantom ? (
                    <TextField
                      value={String(val ?? "")}
                      error={hasError}
                      density="compact"
                      className={[
                        "w-full",
                        row.state === "deleted"
                          ? "line-through text-neutral-400"
                          : "",
                        cell?.isManualOverride
                          ? "border-blue-400 bg-blue-50"
                          : "",
                      ].join(" ")}
                      readOnly
                    />
                  ) : (
                    <span
                      className={[
                        "text-neutral-700",
                        row.isPhantom ? "text-neutral-400 italic" : "",
                        row.state === "deleted" ? "line-through text-neutral-400" : "",
                      ].join(" ")}
                    >
                      {row.isPhantom ? "—" : String(val ?? "")}
                    </span>
                  )}
                </td>
              );
            })}
            <td className="px-3 py-2">
              <CellMarkers row={row} />
            </td>
          </tr>
        ))}
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
            <button className="text-xs text-blue-600 hover:underline">
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
        <p className="text-xs text-neutral-500">
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
        <p className="text-xs text-neutral-500">
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
        <p className="text-xs text-red-600">
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
        <p className="text-xs text-neutral-500">
          Selecting an item via lookup auto-fills description and rate. The
          item cell is dirty; autofill fields are read-only until manually
          overridden.
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
        <p className="text-xs text-neutral-500">
          A manual override (blue border) prevents future autofill from
          overwriting the user-set value.
        </p>
        <GridTable rows={[change.nextRow]} />
        <p className="text-xs text-blue-600">
          Qty manually set to 14. Autofill will not overwrite this field.
        </p>
      </div>
    );
  },
};
