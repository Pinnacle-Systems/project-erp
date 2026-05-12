import { isValidElement, type ReactElement, type ReactNode } from "react";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { type WorkspaceTab } from "@erp-ui-platform/layout-shells";

import {
  MultiDocumentWorkspace,
  WorkspaceTabs,
  type MultiDocumentWorkspaceProps,
  type WorkspaceTabsProps,
} from "./index";

const tabs: WorkspaceTab[] = [
  { id: "si-1024", title: "Sales Invoice SI-1024", status: "clean", closable: true },
  { id: "sr-108", title: "Sales Return SR-108", status: "dirty", closable: true },
  { id: "customer-abc", title: "Customer ABC Traders", status: "saving", closable: false },
  { id: "approval-1", title: "Approval Detail", status: "error", closable: true },
];

describe("@erp-ui-platform/desktop-patterns workspace tabs", () => {
  it("exports workspace tab prop contracts", () => {
    expectTypeOf<WorkspaceTabsProps["tabs"]>().toEqualTypeOf<WorkspaceTab[]>();
    expectTypeOf<MultiDocumentWorkspaceProps["activeTabId"]>().toEqualTypeOf<string>();
  });

  it("renders all supplied tabs", () => {
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "si-1024",
      onTabChange: vi.fn(),
    });

    expect(element.props["data-component"]).toBe("WorkspaceTabs");
    expect(element.props.children).toHaveLength(tabs.length);
  });

  it("marks the active tab with state and aria selection", () => {
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "sr-108",
      onTabChange: vi.fn(),
    });

    const activeTab = getTabWrapper(element, 1);
    const activeButton = getTabButton(activeTab);

    expect(activeTab.props["data-state"]).toBe("active");
    expect(activeButton.props["aria-selected"]).toBe(true);
    expect(activeButton.props["data-state"]).toBe("active");
  });

  it("calls onTabChange when a non-active tab is clicked", () => {
    const onTabChange = vi.fn();
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "si-1024",
      onTabChange,
    });

    getTabButton(getTabWrapper(element, 1)).props.onClick?.();

    expect(onTabChange).toHaveBeenCalledWith("sr-108");
  });

  it("calls onTabClose when close is clicked", () => {
    const onTabClose = vi.fn();
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "si-1024",
      onTabChange: vi.fn(),
      onTabClose,
    });

    getCloseButton(getTabWrapper(element, 0))?.props.onClick?.(createClickEvent());

    expect(onTabClose).toHaveBeenCalledWith("si-1024");
  });

  it("does not trigger onTabChange when close is clicked", () => {
    const onTabChange = vi.fn();
    const onTabClose = vi.fn();
    const event = createClickEvent();
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "si-1024",
      onTabChange,
      onTabClose,
    });

    getCloseButton(getTabWrapper(element, 1))?.props.onClick?.(event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(onTabClose).toHaveBeenCalledWith("sr-108");
    expect(onTabChange).not.toHaveBeenCalled();
  });

  it("shows dirty, saving, and error indicators", () => {
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "si-1024",
      onTabChange: vi.fn(),
    });

    expect(findByProp(element, "status", "dirty")).toBeDefined();
    expect(findByProp(element, "status", "saving")).toBeDefined();
    expect(findByProp(element, "status", "error")).toBeDefined();
  });

  it("handles a non-closable tab without a close button", () => {
    const element = WorkspaceTabs({
      tabs,
      activeTabId: "customer-abc",
      onTabChange: vi.fn(),
      onTabClose: vi.fn(),
    });

    expect(getCloseButton(getTabWrapper(element, 2))).toBeUndefined();
  });

  it("renders empty state when no tabs are open", () => {
    const element = MultiDocumentWorkspace({
      tabs: [],
      activeTabId: "",
      onTabChange: vi.fn(),
      emptyState: "No open items",
      children: "Content",
    });

    expect(element.props["data-component"]).toBe("MultiDocumentWorkspace");
    expect(element.props.children).toBe("No open items");
  });

  it("renders children for active content when tabs exist", () => {
    const element = MultiDocumentWorkspace({
      tabs,
      activeTabId: "si-1024",
      onTabChange: vi.fn(),
      children: "Active content",
    });

    const content = findByClassPart(element, "overflow-auto");

    expect(content?.props.children).toBe("Active content");
  });
});

type TestElementProps = {
  children?: ReactNode;
  className?: string;
  onClick?: (event?: ReturnType<typeof createClickEvent>) => void;
  role?: string;
  [key: string]: unknown;
};

type TestElement = ReactElement<TestElementProps>;

const getTabWrapper = (element: TestElement, index: number): TestElement => {
  const children = element.props.children as TestElement[];
  return children[index];
};

const getTabButton = (tabWrapper: TestElement): TestElement => {
  const children = toElementArray(tabWrapper.props.children);
  return children.find((child) => child.props.role === "tab") as TestElement;
};

const getCloseButton = (tabWrapper: TestElement): TestElement | undefined => {
  const children = toElementArray(tabWrapper.props.children);
  return children.find((child) => child.props["aria-label"]?.toString().startsWith("Close "));
};

const createClickEvent = () => ({
  stopPropagation: vi.fn(),
});

const toElementArray = (children: ReactNode): TestElement[] =>
  (Array.isArray(children) ? children : [children]).filter(isValidElement) as TestElement[];

const findByProp = (
  node: ReactNode,
  propName: string,
  propValue: unknown,
): TestElement | undefined => {
  if (!isValidElement(node)) {
    return undefined;
  }

  const element = node as TestElement;
  if (element.props[propName] === propValue) {
    return element;
  }

  for (const child of toElementArray(element.props.children)) {
    const match = findByProp(child, propName, propValue);
    if (match) {
      return match;
    }
  }

  return undefined;
};

const findByClassPart = (
  node: ReactNode,
  classPart: string,
): TestElement | undefined => {
  if (!isValidElement(node)) {
    return undefined;
  }

  const element = node as TestElement;
  if (typeof element.props.className === "string" && element.props.className.includes(classPart)) {
    return element;
  }

  for (const child of toElementArray(element.props.children)) {
    const match = findByClassPart(child, classPart);
    if (match) {
      return match;
    }
  }

  return undefined;
};
