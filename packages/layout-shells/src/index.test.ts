import { describe, expectTypeOf, it } from "vitest";

import type {
  BreadcrumbItem,
  NavigationItem,
  WorkspaceTab,
  WorkspaceTabStatus,
} from "./index";

describe("@erp-ui-platform/layout-shells navigation contracts", () => {
  it("exports generic breadcrumb items", () => {
    expectTypeOf<BreadcrumbItem>().toMatchTypeOf<{
      id: string;
      label: string;
      href?: string;
      onClick?: () => void;
      current?: boolean;
    }>();
  });

  it("exports generic navigation items", () => {
    expectTypeOf<NavigationItem>().toMatchTypeOf<{
      id: string;
      label: string;
      href?: string;
      children?: NavigationItem[];
      active?: boolean;
      disabled?: boolean;
      hidden?: boolean;
      reason?: string;
    }>();
  });

  it("exports generic workspace tabs", () => {
    expectTypeOf<WorkspaceTabStatus>().toEqualTypeOf<"clean" | "dirty" | "saving" | "error">();
    expectTypeOf<WorkspaceTab>().toMatchTypeOf<{
      id: string;
      title: string;
      subtitle?: string;
      documentType?: string;
      route?: string;
      breadcrumbs?: BreadcrumbItem[];
      status?: WorkspaceTabStatus;
      closable?: boolean;
    }>();
  });
});
