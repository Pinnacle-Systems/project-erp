import type { ValidationMessage } from "@erp-ui-platform/validation-ui";

export type GridRowState = "clean" | "new" | "dirty" | "deleted";

export type GridKeyboardCommand =
  | "tab"
  | "shiftTab"
  | "enter"
  | "arrowUp"
  | "arrowDown"
  | "arrowLeft"
  | "arrowRight";

export type GridLookupConfig = {
  providerKey: string;
  searchFields?: readonly string[];
  displayField?: string;
  valueField?: string;
  minSearchLength?: number;
  autofillFields?: Record<string, string>;
};

export type GridColumnDefinition<TRowData extends Record<string, unknown> = Record<string, unknown>> = {
  id: string;
  header: string;
  field: keyof TRowData & string;
  editable?: boolean;
  required?: boolean;
  width?: number | string;
  lookup?: GridLookupConfig;
};

export type GridCell = {
  rowId: string;
  columnId: string;
  value: unknown;
  isDirty: boolean;
  isEditing: boolean;
  isManualOverride: boolean;
  isStale: boolean;
  validationMessages: readonly ValidationMessage[];
};

export type GridRow<TRowData extends Record<string, unknown> = Record<string, unknown>> = {
  id: string;
  state: GridRowState;
  data: TRowData;
  cells: Record<string, GridCell>;
  version: number;
  isPhantom: boolean;
};

export type GridEditState = {
  activeRowId?: string;
  activeColumnId?: string;
  editingRowId?: string;
  editingColumnId?: string;
  keyboardCommand?: GridKeyboardCommand;
};

export type GridKeyboardMode = "navigate" | "edit";

export interface GridActiveCell {
  rowId: string;
  columnId: string;
}

export interface GridFocusState {
  activeCell: GridActiveCell | null;
  mode: GridKeyboardMode;
}


export type GridValidationState = {
  messages: readonly ValidationMessage[];
  rowMessages: Record<string, readonly ValidationMessage[]>;
  cellMessages: Record<string, readonly ValidationMessage[]>;
  hasBlocking: boolean;
};

export type GridAutofillResult<TRowData extends Record<string, unknown> = Record<string, unknown>> = {
  values: Partial<TRowData>;
  sourceColumnId: string;
  isManualOverride: boolean;
  staleFields?: readonly string[];
};

export type GridChangeEvent<TRowData extends Record<string, unknown> = Record<string, unknown>> = {
  rowId: string;
  columnId: string;
  previousRow: GridRow<TRowData>;
  nextRow: GridRow<TRowData>;
  previousValue: unknown;
  nextValue: unknown;
  manualOverride: boolean;
  stale: boolean;
  concurrencyConflict: boolean;
};

export type CreateEmptyRowOptions<TRowData extends Record<string, unknown>> = {
  id: string;
  columns: readonly GridColumnDefinition<TRowData>[];
  defaults?: Partial<TRowData>;
  version?: number;
  isPhantom?: boolean;
};

export type ApplyCellChangeOptions = {
  expectedVersion?: number;
  nextVersion?: number;
  manualOverride?: boolean;
  stale?: boolean;
};

export const createEmptyRow = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>({
  id,
  columns,
  defaults = {},
  version = 0,
  isPhantom = true,
}: CreateEmptyRowOptions<TRowData>): GridRow<TRowData> => {
  const data = columns.reduce<Record<string, unknown>>((values, column) => {
    values[column.field] = defaults[column.field];
    return values;
  }, {}) as TRowData;

  const cells = columns.reduce<Record<string, GridCell>>((gridCells, column) => {
    gridCells[column.id] = {
      rowId: id,
      columnId: column.id,
      value: data[column.field],
      isDirty: false,
      isEditing: false,
      isManualOverride: false,
      isStale: false,
      validationMessages: [],
    };
    return gridCells;
  }, {});

  return {
    id,
    state: "new",
    data,
    cells,
    version,
    isPhantom,
  };
};

export const markRowDirty = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>(
  row: GridRow<TRowData>,
): GridRow<TRowData> => ({
  ...row,
  state: row.state === "clean" ? "dirty" : row.state,
});

export const markRowDeleted = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>(
  row: GridRow<TRowData>,
): GridRow<TRowData> => ({
  ...row,
  state: "deleted",
});

export const isRowEditable = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>(
  row: GridRow<TRowData>,
): boolean => row.state !== "deleted";

export const applyCellChange = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>(
  row: GridRow<TRowData>,
  column: GridColumnDefinition<TRowData>,
  nextValue: unknown,
  options: ApplyCellChangeOptions = {},
): GridChangeEvent<TRowData> => {
  const previousValue = row.data[column.field];
  const concurrencyConflict =
    options.expectedVersion !== undefined && options.expectedVersion !== row.version;
  const stale = Boolean(options.stale || concurrencyConflict);
  const nextVersion = options.nextVersion ?? row.version + 1;
  const nextData = {
    ...row.data,
    [column.field]: nextValue,
  } as TRowData;
  const previousCell = row.cells[column.id];
  const nextCell: GridCell = {
    rowId: row.id,
    columnId: column.id,
    value: nextValue,
    isDirty: true,
    isEditing: false,
    isManualOverride: Boolean(options.manualOverride),
    isStale: stale,
    validationMessages: previousCell?.validationMessages ?? [],
  };
  const nextRow: GridRow<TRowData> = {
    ...markRowDirty(row),
    data: nextData,
    cells: {
      ...row.cells,
      [column.id]: nextCell,
    },
    version: nextVersion,
    isPhantom: false,
  };

  return {
    rowId: row.id,
    columnId: column.id,
    previousRow: row,
    nextRow,
    previousValue,
    nextValue,
    manualOverride: Boolean(options.manualOverride),
    stale,
    concurrencyConflict,
  };
};

const isColumnEditable = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>(
  column: GridColumnDefinition<TRowData>,
): boolean => column.editable !== false;

export const getNextEditableCell = <
  TRowData extends Record<string, unknown> = Record<string, unknown>,
>(
  rows: readonly GridRow<TRowData>[],
  columns: readonly GridColumnDefinition<TRowData>[],
  current: { rowId: string; columnId: string },
  command: GridKeyboardCommand,
): { rowId: string; columnId: string } | undefined => {
  const editableColumns = columns.filter(isColumnEditable);
  const editableRows = rows.filter(isRowEditable);
  const currentRowIndex = editableRows.findIndex((row) => row.id === current.rowId);
  const currentColumnIndex = editableColumns.findIndex(
    (column) => column.id === current.columnId,
  );

  if (currentRowIndex < 0 || currentColumnIndex < 0) {
    return undefined;
  }

  if (command === "arrowUp") {
    const row = editableRows[currentRowIndex - 1];
    return row ? { rowId: row.id, columnId: current.columnId } : undefined;
  }

  if (command === "arrowDown" || command === "enter") {
    const row = editableRows[currentRowIndex + 1];
    return row ? { rowId: row.id, columnId: current.columnId } : undefined;
  }

  const direction =
    command === "shiftTab" || command === "arrowLeft" ? -1 : 1;
  const flatIndex = currentRowIndex * editableColumns.length + currentColumnIndex;
  const nextFlatIndex = flatIndex + direction;

  if (nextFlatIndex < 0) {
    return undefined;
  }

  const nextRowIndex = Math.floor(nextFlatIndex / editableColumns.length);
  const nextColumnIndex = nextFlatIndex % editableColumns.length;
  const nextRow = editableRows[nextRowIndex];
  const nextColumn = editableColumns[nextColumnIndex];

  if (!nextRow || !nextColumn) {
    return undefined;
  }

  return {
    rowId: nextRow.id,
    columnId: nextColumn.id,
  };
};

export * from "./components/grid-table";
export * from "./hooks/use-grid-focus-state";
