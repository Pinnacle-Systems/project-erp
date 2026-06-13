import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@erp-ui-platform/primitives";
import { ThemeProvider } from "@erp-ui-platform/theme";

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
      options: [undefined, "compact", "comfortable", "touch"],
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
    <div className="flex flex-col gap-6 rounded-card bg-[var(--erp-color-page-bg)] p-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Explicit density
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

export const ThemeProviderDensity: Story = {
  render: () => (
    <div className="grid gap-4 rounded-card bg-[var(--erp-color-page-bg)] p-6 lg:grid-cols-3">
      {(["compact", "comfortable", "touch"] as const).map((density) => (
        <ThemeProvider
          key={density}
          density={density}
          className="rounded-card border border-border bg-surface p-4 shadow-card"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
            Provider: {density}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="default">Inherits</Button>
            <Button variant="secondary">Inherits</Button>
            <Button variant="ghost">Inherits</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border-subtle pt-4">
            <Button variant="default" density="compact">
              Compact override
            </Button>
            <Button variant="default" density="touch">
              Touch override
            </Button>
          </div>
        </ThemeProvider>
      ))}
    </div>
  ),
};
