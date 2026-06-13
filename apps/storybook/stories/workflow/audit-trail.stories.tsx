import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuditTrail } from "@erp-ui-platform/app-components";

const meta: Meta<typeof AuditTrail> = {
  title: "Workflow/AuditTrail",
  component: AuditTrail,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof AuditTrail>;

const defaultItems = [
  {
    id: "1",
    title: "Invoice created",
    actor: "System",
    timestamp: "2026-06-13 10:00 AM",
    tone: "default" as const,
  },
  {
    id: "2",
    title: "Invoice submitted",
    description: "Submitted for approval by Finance Team",
    actor: "Manoj Kumar",
    timestamp: "2026-06-13 10:30 AM",
    tone: "info" as const,
  },
  {
    id: "3",
    title: "Approved",
    description: "Looks good, proceeding with payment.",
    actor: "Finance Manager",
    timestamp: "2026-06-13 11:45 AM",
    tone: "success" as const,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const Compact: Story = {
  args: {
    items: defaultItems,
    density: "compact",
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const LongDescriptions: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Initial Draft Prepared",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        actor: "Jane Smith",
        timestamp: "Yesterday",
      },
      {
        id: "2",
        title: "Review Comments Addressed",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        actor: "John Doe",
        timestamp: "Today",
      }
    ],
  },
};

export const MixedTones: Story = {
  args: {
    items: [
      { id: "1", title: "Default Event", tone: "default" },
      { id: "2", title: "Info Event", tone: "info" },
      { id: "3", title: "Success Event", tone: "success" },
      { id: "4", title: "Warning Event", tone: "warning", description: "This is a warning." },
      { id: "5", title: "Danger Event", tone: "danger", description: "Critical error occurred." },
    ],
  },
};
