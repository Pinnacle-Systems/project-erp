import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  AppFrame,
  ContentRegion,
  NavigationShell,
  type NavigationItem,
  type WorkspaceTab,
} from "@erp-ui-platform/layout-shells";
import { WorkspaceTabs } from "@erp-ui-platform/desktop-patterns";
import { PageHeader, StatusBadge } from "@erp-ui-platform/app-components";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Shells/App Shell",
} satisfies Meta;

export default meta;
type Story = StoryObj;

const navigationItems: NavigationItem[] = [
  { id: "sales", label: "Sales", description: "Orders, invoices, returns" },
  { id: "purchase", label: "Purchase", description: "Procurement workflows" },
  { id: "inventory", label: "Inventory", description: "Stock and transfers" },
  { id: "finance", label: "Finance", description: "Ledgers and posting" },
  { id: "hrms", label: "HRMS", description: "People operations" },
];

const workspaceTabs: WorkspaceTab[] = [
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

export const DesktopAppFrameWithWorkspaceTabsAndBreadcrumbs: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");
    const activeTab = workspaceTabs.find((tab) => tab.id === activeTabId) ?? workspaceTabs[0];
    const actions = actionsForTab(activeTab);

    return (
      <AppFrame
        density="compact"
        navigation={
          <NavigationShell
            title="ERP"
            subtitle="Modules"
            items={navigationItems}
          />
        }
        header={<TopBar />}
        className="min-h-[42rem]"
        contentClassName="min-h-[42rem]"
      >
        <ContentRegion
          variant="workspace"
          header={
            <>
              <WorkspaceTabs
                tabs={workspaceTabs}
                activeTabId={activeTabId}
                onTabChange={setActiveTabId}
                onTabClose={() => undefined}
              />
              <PageHeader
                title={activeTab.title}
                subtitle={activeTab.subtitle}
                breadcrumbs={activeTab.breadcrumbs}
                density="compact"
                status={<StatusBadge label={activeTab.status ?? "clean"} tone={statusTone(activeTab.status)} />}
                primaryAction={actions.primary}
                secondaryActions={actions.secondary}
                meta={[
                  { label: "Document type", value: activeTab.documentType ?? "Workspace item" },
                  { label: "Open tabs", value: String(workspaceTabs.length) },
                ]}
              />
            </>
          }
        >
          <div className="grid min-h-full gap-4 bg-background p-4">
            <section className="rounded-md border border-border bg-surface p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {activeTab.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--erp-color-muted-foreground)]">
                    This content area represents the active document. The workspace tabs above are
                    open work items; the breadcrumb in the PageHeader is only the active item hierarchy.
                  </p>
                </div>
                <StatusBadge label={activeTab.status ?? "clean"} tone={statusTone(activeTab.status)} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <PlaceholderMetric label="Current item" value={activeTab.documentType ?? "Document"} />
                <PlaceholderMetric label="Workspace tab" value={activeTab.title} />
                <PlaceholderMetric label="Breadcrumb scope" value="Active item only" />
              </div>
            </section>
          </div>
        </ContentRegion>
      </AppFrame>
    );
  },
};

const TopBar = () => (
  <div className="flex h-12 items-center justify-between border-b border-border bg-surface px-4">
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-foreground">ERP Desktop</span>
      <span className="text-xs text-[var(--erp-color-muted-foreground)]">Dense workspace shell</span>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="ghost" density="compact" width="hug">
        Search
      </Button>
      <Button variant="secondary" density="compact" width="hug">
        Help
      </Button>
    </div>
  </div>
);

const PlaceholderMetric = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-md border border-border bg-background px-3 py-2">
    <p className="text-[0.6875rem] font-medium uppercase text-[var(--erp-color-muted-foreground)]">
      {label}
    </p>
    <p className="mt-1 truncate text-sm text-foreground">{value}</p>
  </div>
);

const actionsForTab = (tab: WorkspaceTab) => {
  if (tab.id === "customer-abc") {
    return {
      primary: (
        <Button variant="default" density="compact" width="hug">
          Review
        </Button>
      ),
      secondary: (
        <Button variant="secondary" density="compact" width="hug">
          Merge Check
        </Button>
      ),
    };
  }

  if (tab.status === "dirty") {
    return {
      primary: (
        <Button variant="default" density="compact" width="hug">
          Save
        </Button>
      ),
      secondary: (
        <Button variant="secondary" density="compact" width="hug">
          Submit
        </Button>
      ),
    };
  }

  return {
    primary: (
      <Button variant="default" density="compact" width="hug">
        Open
      </Button>
    ),
    secondary: (
      <Button variant="secondary" density="compact" width="hug">
        Export
      </Button>
    ),
  };
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
