import { describe, expect, it } from "vitest";

import {
  applyCellChange,
  createEmptyRow,
  getNextEditableCell,
  isRowEditable,
  markRowDeleted,
  markRowDirty,
  type GridColumnDefinition,
} from "./index";

type LineData = {
  itemId?: string;
  description?: string;
  quantity?: number;
};

const columns: GridColumnDefinition<LineData>[] = [
  { id: "item", header: "Item", field: "itemId", editable: true },
  { id: "description", header: "Description", field: "description", editable: false },
  { id: "quantity", header: "Quantity", field: "quantity", editable: true },
];

describe("@erp-ui-platform/editable-grid", () => {
  it("creates a phantom empty row from column definitions", () => {
    const row = createEmptyRow<LineData>({
      id: "row-1",
      columns,
      defaults: { quantity: 1 },
    });

    expect(row.state).toBe("new");
    expect(row.isPhantom).toBe(true);
    expect(row.data.quantity).toBe(1);
    expect(row.cells.quantity?.value).toBe(1);
  });

  it("marks clean rows dirty and preserves new rows as new", () => {
    const cleanRow = {
      ...createEmptyRow<LineData>({ id: "row-1", columns }),
      state: "clean" as const,
      isPhantom: false,
    };
    const newRow = createEmptyRow<LineData>({ id: "row-2", columns });

    expect(markRowDirty(cleanRow).state).toBe("dirty");
    expect(markRowDirty(newRow).state).toBe("new");
  });

  it("marks rows deleted and makes them non-editable", () => {
    const row = createEmptyRow<LineData>({ id: "row-1", columns });
    const deletedRow = markRowDeleted(row);

    expect(deletedRow.state).toBe("deleted");
    expect(isRowEditable(deletedRow)).toBe(false);
  });

  it("applies cell changes immutably with manual override and stale markers", () => {
    const row = createEmptyRow<LineData>({
      id: "row-1",
      columns,
      version: 2,
    });
    const event = applyCellChange(row, columns[2] as GridColumnDefinition<LineData>, 5, {
      expectedVersion: 1,
      manualOverride: true,
    });

    expect(event.previousRow).toBe(row);
    expect(event.nextRow).not.toBe(row);
    expect(event.nextRow.data.quantity).toBe(5);
    expect(event.nextRow.cells.quantity?.isManualOverride).toBe(true);
    expect(event.nextRow.cells.quantity?.isStale).toBe(true);
    expect(event.concurrencyConflict).toBe(true);
  });

  it("finds the next editable cell while skipping readonly columns and deleted rows", () => {
    const row1 = createEmptyRow<LineData>({ id: "row-1", columns });
    const row2 = markRowDeleted(createEmptyRow<LineData>({ id: "row-2", columns }));
    const row3 = createEmptyRow<LineData>({ id: "row-3", columns });

    expect(
      getNextEditableCell([row1, row2, row3], columns, {
        rowId: "row-1",
        columnId: "item",
      }, "tab"),
    ).toEqual({ rowId: "row-1", columnId: "quantity" });

    expect(
      getNextEditableCell([row1, row2, row3], columns, {
        rowId: "row-1",
        columnId: "quantity",
      }, "tab"),
    ).toEqual({ rowId: "row-3", columnId: "item" });
  });
});
