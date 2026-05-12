import { describe, expect, expectTypeOf, it } from "vitest";

import {
  Breadcrumbs,
  type BreadcrumbItem,
  type BreadcrumbsProps,
} from "./index";

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
