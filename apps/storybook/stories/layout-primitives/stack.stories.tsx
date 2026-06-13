import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@erp-ui-platform/layout";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Layout Primitives/Stack",
  component: Stack,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalStack: Story = {
  args: {
    direction: "vertical",
    gap: "md",
  },
  render: (args) => (
    <Stack {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  ),
};

export const HorizontalStack: Story = {
  args: {
    direction: "horizontal",
    gap: "md",
  },
  render: (args) => (
    <Stack {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <Stack direction="vertical" gap="xl">
      <Stack direction="horizontal" gap="sm">
        <Button density="compact">Small Gap 1</Button>
        <Button density="compact">Small Gap 2</Button>
      </Stack>
      <Stack direction="horizontal" gap="lg">
        <Button>Large Gap 1</Button>
        <Button>Large Gap 2</Button>
      </Stack>
    </Stack>
  ),
};

export const WrapBehavior: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md" wrap className="w-64 border border-border p-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <Button key={i} variant="secondary">Item {i + 1}</Button>
      ))}
    </Stack>
  ),
};
