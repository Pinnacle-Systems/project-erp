import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  DataTable,
  Pagination,
  FilterBar,
  EmptyState,
  LoadingState,
  ErrorState,
} from "./index";

describe("DataTable", () => {
  const columns = [{ key: "id", header: "ID", accessor: "id" }];
  const data = [{ id: 1 }, { id: 2 }];

  it("renders headers and rows", () => {
    const html = renderToStaticMarkup(
      createElement(DataTable as any, { columns, data })
    );
    expect(html).toContain("ID");
    expect(html).toContain("1");
    expect(html).toContain("2");
  });

  it("renders empty state when data is empty", () => {
    const html = renderToStaticMarkup(
      createElement(DataTable as any, { columns, data: [], emptyState: "No items" })
    );
    expect(html).toContain("No items");
  });

  it("renders loading state when loading is true", () => {
    const html = renderToStaticMarkup(
      createElement(DataTable as any, { columns, data: [], loading: true, loadingState: "Loading items" })
    );
    expect(html).toContain("Loading items");
  });

  it("renders error state when error is provided", () => {
    const html = renderToStaticMarkup(
      createElement(DataTable as any, { columns, data: [], error: "Error occurred" })
    );
    expect(html).toContain("Error occurred");
  });
});

describe("Pagination", () => {
  it("disables previous controls on first page", () => {
    const html = renderToStaticMarkup(
      createElement(Pagination, { page: 1, pageSize: 10, total: 50 })
    );
    expect(html).toContain("1");
    expect(html).toContain("10");
    expect(html).toContain("disabled"); // At least the previous buttons will have disabled
  });

  it("disables next controls on last page", () => {
    const html = renderToStaticMarkup(
      createElement(Pagination, { page: 5, pageSize: 10, total: 50 })
    );
    expect(html).toContain("41");
    expect(html).toContain("50");
    // Next buttons disabled
  });
});

describe("FilterBar", () => {
  it("renders search input", () => {
    const html = renderToStaticMarkup(
      createElement(FilterBar, { searchValue: "test search" })
    );
    expect(html).toContain("test search");
    expect(html).toContain("type=\"search\"");
  });
});

describe("States", () => {
  it("EmptyState renders title", () => {
    const html = renderToStaticMarkup(
      createElement(EmptyState, { title: "No data" })
    );
    expect(html).toContain("No data");
  });

  it("LoadingState renders label", () => {
    const html = renderToStaticMarkup(
      createElement(LoadingState, { label: "Please wait" })
    );
    expect(html).toContain("Please wait");
  });

  it("ErrorState renders title", () => {
    const html = renderToStaticMarkup(
      createElement(ErrorState, { title: "Failed to load" })
    );
    expect(html).toContain("Failed to load");
  });
});
