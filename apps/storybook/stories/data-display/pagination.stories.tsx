import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "@erp-ui-platform/data-display";

const meta = {
  title: "Data Display/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 1,
    pageSize: 25,
    total: 240,
  },
};

export const MiddlePage: Story = {
  args: {
    page: 5,
    pageSize: 25,
    total: 240,
  },
};

export const LastPage: Story = {
  args: {
    page: 10,
    pageSize: 25,
    total: 240,
  },
};

export const Compact: Story = {
  args: {
    page: 1,
    pageSize: 25,
    total: 240,
    density: "compact",
  },
};

export const CustomPageSizes: Story = {
  args: {
    page: 1,
    pageSize: 50,
    total: 1000,
    pageSizeOptions: [50, 100, 200],
  },
};
