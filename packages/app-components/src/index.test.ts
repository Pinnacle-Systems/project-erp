import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, expectTypeOf, it } from "vitest";

import {
  Breadcrumbs,
  FilterBar,
  type BreadcrumbItem,
  type BreadcrumbsProps,
} from "./index";

describe("@erp-ui-platform/app-components FilterBar sizing", () => {
  it("gives the search field a fixed md width token", () => {
    const html = renderToStaticMarkup(
      createElement(FilterBar, { searchValue: "", onSearchChange: () => {} }),
    );

    expect(html).toContain('data-width="md"');
  });

  it("gives the status select a fixed sm width token", () => {
    const html = renderToStaticMarkup(
      createElement(FilterBar, {
        searchValue: "",
        onSearchChange: () => {},
        statusOptions: [{ label: "Draft", value: "draft" }],
        statusValue: "draft",
        onStatusChange: () => {},
      }),
    );

    expect(html).toContain('data-width="sm"');
  });

  it("gives the clear filters button hug width", () => {
    const html = renderToStaticMarkup(
      createElement(FilterBar, {
        searchValue: "x",
        onSearchChange: () => {},
        hasActiveFilters: true,
        onClearFilters: () => {},
      }),
    );

    expect(html).toContain('data-width="hug"');
  });
});

describe("@erp-ui-platform/app-components breadcrumbs", () => {
  it("exports the shared breadcrumb item shape", () => {
    expectTypeOf<BreadcrumbItem>().toMatchTypeOf<{
      id: string;
      label: string;
      href?: string;
      onClick?: () => void;
      current?: boolean;
    }>();
  });

  it("accepts navigation callbacks without route computation", () => {
    expectTypeOf<BreadcrumbsProps["onNavigate"]>().toEqualTypeOf<
      ((item: BreadcrumbItem) => void) | undefined
    >();
  });

  it("renders nothing for an empty breadcrumb trail", () => {
    expect(Breadcrumbs({ items: [] })).toBeNull();
  });
});
