import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "ghost", "destructive", "link"],
    },
    density: {
      control: "select",
      options: ["compact", "comfortable", "touch"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Save", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Review", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Cancel", variant: "ghost" },
};

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
};

export const Disabled: Story = {
  args: { children: "Post blocked", variant: "default", disabled: true },
};

export const Loading: Story = {
  args: { children: "Saving…", variant: "default", loading: true },
};

export const Compact: Story = {
  args: { children: "Save", variant: "default", density: "compact" },
};

export const Touch: Story = {
  args: { children: "Approve", variant: "default", density: "touch" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Variants
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Save</Button>
          <Button variant="secondary">Review</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">View details</Button>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          States
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" disabled>
            Post blocked
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="default" loading>
            Saving…
          </Button>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Density
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="default" density="compact">
            Compact
          </Button>
          <Button variant="default" density="comfortable">
            Comfortable
          </Button>
          <Button variant="default" density="touch">
            Touch
          </Button>
        </div>
      </div>
    </div>
  ),
};
