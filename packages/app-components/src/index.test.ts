import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, expectTypeOf, it } from "vitest";

import {
  Breadcrumbs,
  FilterBar,
  type BreadcrumbItem,
  type BreadcrumbsProps,
  AuditTrail,
  AttachmentList,
  ApprovalActionBar,
  TotalsPanel,
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

describe("@erp-ui-platform/app-components workflow components", () => {
  it("AuditTrail renders empty state", () => {
    const html = renderToStaticMarkup(createElement(AuditTrail, { items: [], emptyState: "No items" }));
    expect(html).toContain("No items");
  });

  it("AuditTrail renders items", () => {
    const html = renderToStaticMarkup(createElement(AuditTrail, { items: [{ id: "1", title: "Test Event" }] }));
    expect(html).toContain("Test Event");
  });

  it("AttachmentList renders file names", () => {
    const html = renderToStaticMarkup(createElement(AttachmentList, { items: [{ id: "1", name: "test-file.pdf" }] }));
    expect(html).toContain("test-file.pdf");
  });

  it("ApprovalActionBar renders actions", () => {
    const html = renderToStaticMarkup(createElement(ApprovalActionBar, { actions: [{ key: "app", label: "Approve" }] }));
    expect(html).toContain("Approve");
  });

  it("TotalsPanel renders labels and values", () => {
    const html = renderToStaticMarkup(createElement(TotalsPanel, { items: [{ label: "Tax", value: "100" }] }));
    expect(html).toContain("Tax");
    expect(html).toContain("100");
  });
});
