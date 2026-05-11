import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "@erp-ui-platform/app-components";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Application/EmptyState",
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

const InboxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const NoRecords: Story = {
  args: {
    title: "No records found",
    description:
      "There are no entries matching the current filters. Try adjusting your search or clearing the active filters.",
    icon: <InboxIcon />,
    primaryAction: (
      <Button variant="default" density="compact">
        Create record
      </Button>
    ),
    secondaryAction: (
      <Button variant="ghost" density="compact">
        Clear filters
      </Button>
    ),
  },
};

export const NoSearchResults: Story = {
  args: {
    title: 'No results for "INV-2024"',
    description: "Try a different search term or remove filters.",
    icon: <SearchIcon />,
    secondaryAction: (
      <Button variant="secondary" density="compact">
        Clear search
      </Button>
    ),
  },
};

export const NoActionsRequired: Story = {
  args: {
    title: "You're all caught up",
    description: "There are no items pending your action at this time.",
    icon: <InboxIcon />,
  },
};
