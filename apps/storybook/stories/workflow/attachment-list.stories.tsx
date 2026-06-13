import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttachmentList } from "@erp-ui-platform/app-components";

const meta: Meta<typeof AttachmentList> = {
  title: "Workflow/AttachmentList",
  component: AttachmentList,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof AttachmentList>;

const defaultItems = [
  {
    id: "1",
    name: "invoice-copy.pdf",
    size: "248 KB",
    type: "PDF",
    uploadedBy: "Karthikeyan",
    uploadedAt: "2026-06-13 09:30 AM",
  },
  {
    id: "2",
    name: "supporting-doc.docx",
    size: "1.2 MB",
    type: "Word Document",
    uploadedBy: "Manoj Kumar",
    uploadedAt: "2026-06-13 10:15 AM",
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    onView: (item: any) => console.log("View", item),
    onDownload: (item: any) => console.log("Download", item),
    onRemove: (item: any) => console.log("Remove", item),
  },
};

export const Compact: Story = {
  args: {
    items: defaultItems,
    density: "compact",
    onView: (item: any) => console.log("View", item),
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const FailedUploadState: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        id: "3",
        name: "corrupted-file.pdf",
        status: "failed" as const,
      },
      {
        id: "4",
        name: "large-video.mp4",
        size: "2.5 GB",
        status: "pending" as const,
      }
    ],
    onView: (item: any) => console.log("View", item),
    onRemove: (item: any) => console.log("Remove", item),
  },
};

export const LongFileNames: Story = {
  args: {
    items: [
      {
        id: "1",
        name: "this-is-a-very-long-file-name-that-might-overflow-the-container-if-we-are-not-careful-about-text-truncation-and-flex-layouts.pdf",
        size: "500 KB",
      }
    ],
    onView: (item: any) => console.log("View", item),
  },
};
