import type { GridFocusState, GridKeyboardMode } from "../index";

export type GridFocusAction =
  | { type: "SET_ACTIVE_CELL"; payload: { rowId: string; columnId: string } }
  | { type: "CLEAR_ACTIVE_CELL" }
  | { type: "SET_MODE"; payload: GridKeyboardMode };

export const initialGridFocusState: GridFocusState = {
  activeCell: null,
  mode: "navigate",
};

export function gridFocusReducer(
  state: GridFocusState = initialGridFocusState,
  action: GridFocusAction,
): GridFocusState {
  switch (action.type) {
    case "SET_ACTIVE_CELL":
      return {
        ...state,
        activeCell: action.payload,
      };
    case "CLEAR_ACTIVE_CELL":
      return {
        ...state,
        activeCell: null,
        mode: "navigate", // usually implies leaving focus altogether
      };
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
}
