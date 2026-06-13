import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@erp-ui-platform/layout";

const meta = {
  title: "Layout Primitives/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a default card.",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "This is a subtle card without shadow.",
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: "This is an elevated card with more shadow.",
  },
};

export const CompactDensity: Story = {
  args: {
    density: "compact",
    children: "This card has compact density.",
  },
};

export const DashboardStyleCard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card variant="elevated" padding="lg">
        <h3 className="text-lg font-bold text-foreground">Total Sales</h3>
        <p className="mt-2 text-3xl font-semibold text-foreground">$12,340</p>
      </Card>
      <Card variant="elevated" padding="lg">
        <h3 className="text-lg font-bold text-foreground">Active Orders</h3>
        <p className="mt-2 text-3xl font-semibold text-foreground">56</p>
      </Card>
      <Card variant="elevated" padding="lg">
        <h3 className="text-lg font-bold text-foreground">New Customers</h3>
        <p className="mt-2 text-3xl font-semibold text-foreground">12</p>
      </Card>
    </div>
  ),
};
