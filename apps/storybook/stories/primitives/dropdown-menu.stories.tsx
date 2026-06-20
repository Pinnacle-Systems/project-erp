import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@erp-ui-platform/primitives";

const meta = {
  title: "Primitives/DropdownMenu",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ActionMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Actions ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Document</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Print preview</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Workflow</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Submit for approval</DropdownMenuItem>
          <DropdownMenuItem disabled>Post to ledger</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const OverflowMenu: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm text-foreground font-medium">SI-1004</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" density="compact" aria-label="More actions">
            ···
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Download PDF</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem destructive>Cancel invoice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};

const menuStateRows = [
  {
    label: "Default item",
    className: "text-foreground",
  },
  {
    label: "Hover item",
    className: "bg-[var(--erp-surface-hover)] text-foreground",
  },
  {
    label: "Selected item",
    className: "bg-[var(--erp-surface-selected)] text-foreground",
  },
  {
    label: "Selected + hover",
    className: "bg-[var(--erp-surface-selected-hover)] text-foreground",
  },
  {
    label: "Keyboard highlighted",
    className: "bg-[var(--erp-surface-hover)] text-foreground",
  },
  {
    label: "Selected + keyboard highlighted",
    className: "bg-[var(--erp-surface-selected-hover)] text-foreground",
  },
  {
    label: "Disabled item",
    className: "text-[var(--erp-text-disabled)] opacity-[var(--erp-disabled-opacity)]",
  },
];

const DropdownStatePanel = ({ theme }: { theme: "light" | "dark" }) => (
  <div
    className={[
      theme === "dark" ? "dark" : "",
      "rounded-lg border border-border bg-background p-4 text-foreground",
    ].join(" ")}
  >
    <div className="mb-3 flex items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold">{theme === "dark" ? "Dark mode" : "Light mode"}</p>
        <p className="text-xs text-muted-foreground">Focused trigger and menu item states</p>
      </div>
      <Button
        variant="secondary"
        density="compact"
        className="border-[var(--erp-form-field-focus-border)] ring-[length:var(--erp-focus-ring-width)] ring-[var(--erp-focus-ring)] ring-offset-[var(--erp-focus-ring-offset)]"
      >
        Actions ▾
      </Button>
    </div>
    <div className="rounded-md border border-border bg-surface p-1 shadow-popover">
      <div className="px-2 py-1 text-xs font-semibold text-muted-foreground select-none">
        Workflow
      </div>
      {menuStateRows.map((item) => (
        <div
          key={item.label}
          className={[
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
            item.className,
          ].join(" ")}
        >
          {item.label}
        </div>
      ))}
      <div className="-mx-1 my-1 h-px bg-[var(--erp-border-default)]" />
      <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-[var(--erp-text-danger)]">
        Destructive item
      </div>
    </div>
  </div>
);

export const LightAndDarkStates: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      <DropdownStatePanel theme="light" />
      <DropdownStatePanel theme="dark" />
    </div>
  ),
};
