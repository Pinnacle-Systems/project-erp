import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@erp-ui-platform/primitives";

const meta = {
  title: "Primitives/Tooltip",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const BasicTooltip: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" disabled>
              Post
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Posting is blocked — document has validation errors.
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="default">Approve</Button>
          </TooltipTrigger>
          <TooltipContent>
            Approve this invoice and advance to the next workflow step.
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="warning">Pending approval</Badge>
          </TooltipTrigger>
          <TooltipContent>
            Waiting for Level 2 approval from Finance Manager.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};
