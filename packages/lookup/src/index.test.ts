import { describe, expect, it } from "vitest";

import {
  createLookupState,
  isLookupResolved,
  mapAutofillValues,
  type LookupProvider,
  type LookupQuery,
  type LookupResult,
} from "./index";

type ItemResult = LookupResult<{ itemId: string }>;

type ResolvedItem = {
  itemId: string;
  description: string;
  unit: string;
};

const provider: LookupProvider<LookupQuery, ItemResult, ResolvedItem> = {
  async search(query) {
    return [
      {
        id: "item-1",
        label: query.searchText,
        value: { itemId: "item-1" },
      },
    ];
  },
  async resolve(result) {
    return {
      itemId: result.value.itemId,
      description: "Generic item",
      unit: "EA",
    };
  },
  async validate(resolved) {
    return {
      valid: resolved.unit === "EA",
      messages: [],
    };
  },
};

describe("@erp-ui-platform/lookup", () => {
  it("creates an initial lookup state", () => {
    const state = createLookupState();

    expect(state.query.searchText).toBe("");
    expect(state.results).toEqual([]);
    expect(state.loading).toBe(false);
    expect(isLookupResolved(state)).toBe(false);
  });

  it("detects resolved lookup state", () => {
    const selectedResult: ItemResult = {
      id: "item-1",
      label: "Item 1",
      value: { itemId: "item-1" },
    };
    const state = createLookupState<ItemResult, ResolvedItem>({
      selectedResult,
      resolved: {
        itemId: "item-1",
        description: "Generic item",
        unit: "EA",
      },
    });

    expect(isLookupResolved(state)).toBe(true);
  });

  it("maps autofill values from resolved lookup data", () => {
    const values = mapAutofillValues<
      ResolvedItem,
      { itemId: string; description: string; uom: string }
    >(
      {
        itemId: "item-1",
        description: "Generic item",
        unit: "EA",
      },
      {
        itemId: "itemId",
        description: "description",
        uom: "unit",
      },
    );

    expect(values).toEqual({
      itemId: "item-1",
      description: "Generic item",
      uom: "EA",
    });
  });

  it("supports async provider lifecycle", async () => {
    const results = await provider.search({ searchText: "item" });
    const resolved = await provider.resolve(results[0] as ItemResult);
    const validation = await provider.validate?.(resolved);

    expect(results).toHaveLength(1);
    expect(resolved.description).toBe("Generic item");
    expect(validation?.valid).toBe(true);
  });
});
