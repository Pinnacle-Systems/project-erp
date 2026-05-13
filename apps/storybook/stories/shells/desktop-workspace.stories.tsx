import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  MultiDocumentWorkspace,
  WorkspaceTabs,
} from "@erp-ui-platform/desktop-patterns";
import { Button } from "@erp-ui-platform/primitives";
import { PageHeader, StatusBadge } from "@erp-ui-platform/app-components";
import type { WorkspaceTab } from "@erp-ui-platform/layout-shells";

const meta = {
  title: "Shells/Desktop Workspace",
} satisfies Meta;

export default meta;
type Story = StoryObj;

const baseTabs: WorkspaceTab[] = [
  {
    id: "si-1024",
    title: "Sales Invoice SI-1024",
    subtitle: "ABC Traders",
    documentType: "Sales Invoice",
    breadcrumbs: [
      { id: "sales", label: "Sales", href: "#" },
      { id: "invoices", label: "Invoices", href: "#" },
      { id: "si-1024", label: "SI-1024", current: true },
    ],
    status: "clean",
    closable: true,
  },
  {
    id: "sr-108",
    title: "Sales Return SR-108",
    subtitle: "ABC Traders",
    documentType: "Sales Return",
    breadcrumbs: [
      { id: "sales", label: "Sales", href: "#" },
      { id: "returns", label: "Returns", href: "#" },
      { id: "sr-108", label: "SR-108", current: true },
    ],
    status: "dirty",
    closable: true,
  },
  {
    id: "customer-abc",
    title: "Customer ABC Traders",
    subtitle: "Customer master",
    documentType: "Customer",
    breadcrumbs: [
      { id: "customers", label: "Customers", href: "#" },
      { id: "abc-traders", label: "ABC Traders", current: true },
    ],
    status: "clean",
    closable: true,
  },
];

const savingAndErrorTabs: WorkspaceTab[] = [
  { ...baseTabs[0], status: "saving" },
  { ...baseTabs[1], status: "error" },
  baseTabs[2],
];

const activeBreadcrumbTabs: WorkspaceTab[] = [
  {
    id: "si-1024",
    title: "Sales Invoice SI-1024",
    subtitle: "ABC Traders",
    documentType: "Sales Invoice",
    breadcrumbs: [
      { id: "sales", label: "Sales", href: "#" },
      { id: "invoices", label: "Invoices", href: "#" },
      { id: "si-1024", label: "SI-1024", current: true },
    ],
    status: "dirty",
    closable: true,
  },
  {
    id: "sr-108",
    title: "Sales Return SR-108",
    subtitle: "ABC Traders",
    documentType: "Sales Return",
    breadcrumbs: [
      { id: "sales", label: "Sales", href: "#" },
      { id: "returns", label: "Returns", href: "#" },
      { id: "sr-108", label: "SR-108", current: true },
    ],
    status: "clean",
    closable: true,
  },
  {
    id: "customer-abc",
    title: "Customer ABC Traders",
    subtitle: "Customer master",
    documentType: "Customer",
    breadcrumbs: [
      { id: "masters", label: "Masters", href: "#" },
      { id: "customers", label: "Customers", href: "#" },
      { id: "abc-traders", label: "ABC Traders", current: true },
    ],
    status: "error",
    closable: true,
  },
];

export const WorkspaceTabsDefault: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");

    return (
      <WorkspaceTabs
        tabs={baseTabs}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
        onTabClose={() => undefined}
      />
    );
  },
};

export const WorkspaceTabsDirtyState: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState("sr-108");

    return (
      <WorkspaceTabs
        tabs={baseTabs}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
        onTabClose={() => undefined}
      />
    );
  },
};

export const WorkspaceTabsSavingAndError: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");

    return (
      <WorkspaceTabs
        tabs={savingAndErrorTabs}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
        onTabClose={() => undefined}
      />
    );
  },
};

export const WorkspaceTabsWithActiveBreadcrumb: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");
    const activeTab = activeBreadcrumbTabs.find((tab) => tab.id === activeTabId) ?? activeBreadcrumbTabs[0];

    return (
      <div className="overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)]">
        <WorkspaceTabs
          tabs={activeBreadcrumbTabs}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
          onTabClose={() => undefined}
        />
        <div className="bg-[var(--erp-color-surface)]">
          <PageHeader
            title={activeTab.title}
            subtitle={activeTab.subtitle}
            breadcrumbs={activeTab.breadcrumbs}
            density="compact"
            status={<StatusBadge label={activeTab.status ?? "clean"} tone={statusTone(activeTab.status)} />}
            primaryAction={
              <Button variant="default" density="compact" width="hug">
                Save
              </Button>
            }
          />
          <div className="grid gap-3 p-4 text-sm text-[var(--erp-color-muted-foreground)]">
            <div className="rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)] p-4">
              <p className="font-medium text-[var(--erp-color-foreground)]">{activeTab.title}</p>
              <p className="mt-1">
                Active document content for {activeTab.documentType}. Switching workspace tabs updates this
                header and breadcrumb trail to the active item only.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const MultiDocumentWorkspaceDefault: Story = {
  render: () => <WorkspaceDemo />,
};

export const MultiDocumentWorkspaceWithToolbar: Story = {
  render: () => (
    <WorkspaceDemo
      toolbar={
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-[var(--erp-color-muted-foreground)]">
            Desktop workspace switching
          </span>
          <div className="flex items-center gap-2">
            <Button variant="secondary" density="compact" width="hug">
              Refresh
            </Button>
            <Button variant="default" density="compact" width="hug">
              Save
            </Button>
          </div>
        </div>
      }
    />
  ),
};

export const MultiDocumentWorkspaceEmpty: Story = {
  render: () => (
    <MultiDocumentWorkspace
      tabs={[]}
      activeTabId=""
      onTabChange={() => undefined}
      emptyState={
        <div className="flex min-h-64 items-center justify-center text-sm text-[var(--erp-color-muted-foreground)]">
          No open workspace items
        </div>
      }
    >
      <div />
    </MultiDocumentWorkspace>
  ),
};

const WorkspaceDemo = ({ toolbar }: { toolbar?: React.ReactNode }) => {
  const [tabs, setTabs] = useState(baseTabs);
  const [activeTabId, setActiveTabId] = useState("si-1024");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  return (
    <div className="h-[28rem] overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)]">
      <MultiDocumentWorkspace
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
        onTabClose={(tabId) => {
          setTabs((currentTabs) => currentTabs.filter((tab) => tab.id !== tabId));
          if (activeTabId === tabId) {
            const nextTab = tabs.find((tab) => tab.id !== tabId);
            if (nextTab) {
              setActiveTabId(nextTab.id);
            }
          }
        }}
        toolbar={toolbar}
        emptyState={
          <div className="flex min-h-64 items-center justify-center text-sm text-[var(--erp-color-muted-foreground)]">
            No open workspace items
          </div>
        }
      >
        {activeTab && (
          <div className="min-h-full bg-[var(--erp-color-surface)]">
            <PageHeader
              title={activeTab.title}
              subtitle={activeTab.subtitle}
              breadcrumbs={activeTab.breadcrumbs}
              density="compact"
              status={<StatusBadge label={activeTab.status ?? "clean"} tone="muted" />}
            />
            <div className="p-4 text-sm text-[var(--erp-color-muted-foreground)]">
              Active workspace content for {activeTab.title}.
            </div>
          </div>
        )}
      </MultiDocumentWorkspace>
    </div>
  );
};

const statusTone = (status: WorkspaceTab["status"]) => {
  if (status === "error") {
    return "danger";
  }

  if (status === "dirty") {
    return "warning";
  }

  if (status === "saving") {
    return "info";
  }

  return "muted";
};
