import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorState } from "@erp-ui-platform/app-components";

const meta = {
  title: "Application/ErrorState",
  component: ErrorState,
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FailedLoad: Story = {
  args: {
    title: "Failed to load data",
    description:
      "The server returned an unexpected error. Please try again or contact support if the issue persists.",
    errorDetails:
      "HTTP 500 Internal Server Error\nGET /api/v1/ledger-entries?period=04&fy=2024\nRequest ID: req_8f9d2c1a4b\nTimestamp: 2025-05-11T08:14:02Z",
    onRetry: () => alert("Retrying..."),
    retryLabel: "Retry",
  },
};

export const NetworkError: Story = {
  args: {
    title: "Network unavailable",
    description:
      "Could not reach the server. Check your connection and try again.",
    onRetry: () => alert("Retrying..."),
  },
};

export const NoRetry: Story = {
  args: {
    title: "Access denied",
    description:
      "You do not have permission to view this resource. Contact your administrator.",
    errorDetails: "HTTP 403 Forbidden\nGET /api/v1/payroll-summary\nRole: viewer",
  },
};
