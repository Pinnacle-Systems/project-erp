import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ConfirmDialog } from "@erp-ui-platform/app-components";
import { Button } from "@erp-ui-platform/primitives";

const meta = {
  title: "Application/ConfirmDialog",
  component: ConfirmDialog,
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    title: "Submit for approval?",
    onConfirm: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-4">
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Submit for approval
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Submit for approval?"
          description="Once submitted, this document will be sent for managerial review. You will not be able to edit it until the review is complete."
          confirmLabel="Submit"
          cancelLabel="Cancel"
          onConfirm={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const Destructive: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    title: "Delete ledger entry?",
    onConfirm: () => {},
    destructive: true,
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 1500);
    };

    return (
      <div className="p-4">
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete entry
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete ledger entry?"
          description="This action cannot be undone. The entry will be permanently removed from the system and will not appear in any future reports."
          confirmLabel="Delete"
          cancelLabel="Keep"
          destructive
          loading={loading}
          onConfirm={handleConfirm}
        />
      </div>
    );
  },
};
