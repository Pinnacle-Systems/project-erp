import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingState } from "@erp-ui-platform/app-components";

const meta = {
  title: "Application/LoadingState",
  component: LoadingState,
  argTypes: {
    variant: {
      control: "select",
      options: ["page", "inline", "skeleton"],
    },
  },
} satisfies Meta<typeof LoadingState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLoading: Story = {
  args: {
    variant: "page",
    label: "Loading ledger entries...",
  },
};

export const InlineLoading: Story = {
  args: {
    variant: "inline",
    label: "Fetching records...",
  },
};

export const SkeletonLoading: Story = {
  args: {
    variant: "skeleton",
    rows: 6,
    label: "Loading...",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Page (full-height)
        </p>
        <div className="border border-neutral-200 rounded-md bg-white">
          <LoadingState variant="page" label="Loading transactions..." />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Inline
        </p>
        <div className="border border-neutral-200 rounded-md bg-white p-4">
          <LoadingState variant="inline" label="Saving draft..." />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Skeleton
        </p>
        <div className="border border-neutral-200 rounded-md bg-white">
          <LoadingState variant="skeleton" rows={5} />
        </div>
      </div>
    </div>
  ),
};
