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
      <span className="text-sm text-neutral-700 font-medium">SI-1004</span>
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
