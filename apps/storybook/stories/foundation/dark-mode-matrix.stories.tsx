import type { Meta } from "@storybook/react-vite";
import { Button, TextField, SelectField, SelectItem, Checkbox, Switch, TooltipProvider } from "@erp-ui-platform/primitives";
import { Card, Panel } from "@erp-ui-platform/layout";
import { FilterBar } from "@erp-ui-platform/app-components";
import { DataTable } from "@erp-ui-platform/data-display";
import { GridTable } from "@erp-ui-platform/editable-grid";
import { ApprovalPanel } from "@erp-ui-platform/approval-ui";
import { TotalsPanel } from "@erp-ui-platform/app-components";
import { MobileApprovalFlow } from "@erp-ui-platform/mobile-patterns";

const meta = {
  title: "Foundation/Dark Mode Matrix",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

export const ComponentMatrix = () => {
  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <h1 className="text-2xl font-bold text-foreground">Dark Mode Component Matrix</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Primitives">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="default" disabled>Disabled</Button>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <TextField label="Text Field" placeholder="Placeholder..." />
              <TextField label="Date Field" type="date" />
              <SelectField label="Select Field" defaultValue="1">
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectField>
              <div className="flex items-center gap-4 mt-2">
                <Checkbox id="chk1" label="Checkbox" defaultChecked />
                <Switch id="sw1" label="Switch" defaultChecked />
              </div>
            </div>
          </div>
        </Card>

        <Card title="Layout & App Components">
          <div className="flex flex-col gap-4">
            <Panel className="p-4 border border-border bg-surface-muted">
              <p className="text-sm text-foreground">Panel inside Card</p>
            </Panel>
            
            <div className="border border-border rounded-md overflow-hidden">
              <FilterBar 
                searchValue="" 
                searchPlaceholder="FilterBar..."
                hasActiveFilters={false}
              />
            </div>
            
            <div className="border border-border rounded-md p-4">
              <TotalsPanel 
                items={[
                  { label: "Subtotal", value: "$100.00" },
                  { label: "Tax", value: "$10.00", emphasis: "muted" },
                  { label: "Total", value: "$110.00", emphasis: "strong", dividerBefore: true }
                ]}
              />
            </div>
          </div>
        </Card>
      </div>

      <Card title="Data Display">
        <DataTable
          columns={[
            { key: "id", header: "ID", accessor: "id" },
            { key: "name", header: "Name", accessor: "name" },
            { key: "status", header: "Status", accessor: "status" },
          ]}
          data={[
            { id: "1", name: "Alpha", status: "Active" },
            { id: "2", name: "Beta", status: "Inactive" },
          ]}
          rowKey="id"
          selectedRowKey="1"
        />
      </Card>

      <Card title="Editable Grid (Visual states)">
        <GridTable
          columns={[
            { id: "item", header: "Item", field: "item" },
            { id: "qty", header: "Quantity", field: "qty" },
          ]}
          rows={[
            { id: "r1", state: "clean", version: 1, isPhantom: false, data: { item: "Row Normal", qty: 1 }, cells: {} },
            { id: "r2", state: "dirty", version: 1, isPhantom: false, data: { item: "Row Dirty", qty: 2 }, cells: {} },
            { id: "r3", state: "new", version: 1, isPhantom: false, data: { item: "Row New", qty: 3 }, cells: {} },
            { id: "r4", state: "deleted", version: 1, isPhantom: false, data: { item: "Row Deleted", qty: 0 }, cells: {} },
            { id: "r5", state: "clean", version: 1, isPhantom: false, data: { item: "Row Error", qty: -1 }, cells: { qty: { isDirty: false, isStale: false, isEditing: false, isManualOverride: false, rowId: "r5", columnId: "qty", value: -1, validationMessages: [{ id: "v1", severity: "error", message: "Invalid", fieldPath: "qty", scope: "field" }]} } as any },
          ]}
        />
      </Card>

      <Card title="Workflow">
        <TooltipProvider>
          <ApprovalPanel
            shell="desktop"
            status="pending"
            steps={[]}
            allowedActions={[
              { id: "approve", decision: "approve", label: "Approve" },
              { id: "reject", decision: "reject", label: "Reject" },
            ]}
            renderAction={(action) => <Button variant={action.decision === "reject" ? "destructive" : "default"}>{action.label}</Button>}
          />
        </TooltipProvider>
      </Card>

      <Card title="Mobile Approval Pattern">
        <div className="max-w-[390px] border border-border rounded-3xl overflow-hidden relative" style={{ height: 600 }}>
          <MobileApprovalFlow
            status="pending"
            statusLabel="Pending"
            steps={[
              { id: "1", label: "Review", status: "approved", actor: { id: "a1", displayName: "Bob" } },
              { id: "2", label: "Finance", status: "pending" },
            ]}
            actions={[
              { id: "approve", decision: "approve", label: "Approve" },
              { id: "reject", decision: "reject", label: "Reject" },
            ]}
          />
        </div>
      </Card>
    </div>
  );
};
