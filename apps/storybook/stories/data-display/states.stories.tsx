import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState, LoadingState, ErrorState } from "@erp-ui-platform/data-display";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Data Display/States",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const DefaultEmptyState: Story = {
  render: () => (
    <div className="border border-border rounded-panel bg-surface max-w-2xl mx-auto">
      <EmptyState
        title="No customers found"
        description="Try adjusting your filters or create a new customer."
        action={<Button variant="default">New Customer</Button>}
      />
    </div>
  ),
};

export const LoadingSpinner: Story = {
  render: () => (
    <div className="border border-border rounded-panel bg-surface max-w-2xl mx-auto">
      <LoadingState label="Loading your transactions..." />
    </div>
  ),
};

export const LoadingSkeleton: Story = {
  render: () => (
    <div className="border border-border rounded-panel bg-surface max-w-2xl mx-auto">
      <LoadingState variant="skeleton" rows={5} />
    </div>
  ),
};

export const FailedErrorState: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <ErrorState
        title="Could not load invoices"
        description="We encountered an issue communicating with the server. Please retry or contact support if the issue continues."
        action={<Button variant="secondary">Retry Connection</Button>}
      />
    </div>
  ),
};
