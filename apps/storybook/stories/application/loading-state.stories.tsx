import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingState } from "@erp-ui-platform/app-components";
import {
  Skeleton,
  SkeletonSubtle,
  SkeletonTextRow,
  SkeletonTableRow,
  SkeletonCard,
} from "@erp-ui-platform/primitives";

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

// ─── Light / dark comparison panel helpers ────────────────────────────────────

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--erp-text-subtle)]">
    {children}
  </p>
);

const SurfacePanel = ({
  dark,
  label,
  children,
}: {
  dark?: boolean;
  label: string;
  children: React.ReactNode;
}) => (
  <div className={dark ? "dark" : undefined}>
    <div
      className="rounded-md border p-5"
      style={{
        background: "var(--erp-color-surface)",
        borderColor: "var(--erp-color-border)",
      }}
    >
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--erp-text-subtle)" }}
      >
        {label}
      </p>
      {children}
    </div>
  </div>
);

// ─── Stories ─────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-background">
      {/* Default skeleton (text rows) */}
      <div>
        <Label>Default — text rows</Label>
        <div className="rounded-md border border-border bg-surface">
          <LoadingState variant="skeleton" rows={5} />
        </div>
      </div>

      {/* Inline spinner */}
      <div>
        <Label>Inline spinner</Label>
        <div className="rounded-md border border-border bg-surface p-4">
          <LoadingState variant="inline" label="Saving draft..." />
        </div>
      </div>

      {/* Page full-height */}
      <div>
        <Label>Page (full-height)</Label>
        <div className="rounded-md border border-border bg-surface">
          <LoadingState variant="page" label="Loading transactions..." />
        </div>
      </div>
    </div>
  ),
};

export const TextSkeleton: Story = {
  name: "Skeleton — text",
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-8">
      <SurfacePanel label="Light">
        <div className="flex flex-col gap-3">
          <SkeletonTextRow primaryWidth="80%" subtleWidth="55%" />
          <SkeletonTextRow primaryWidth="65%" subtleWidth="40%" />
          <SkeletonTextRow primaryWidth="72%" subtleWidth="50%" />
        </div>
      </SurfacePanel>
      <SurfacePanel dark label="Dark">
        <div className="flex flex-col gap-3">
          <SkeletonTextRow primaryWidth="80%" subtleWidth="55%" />
          <SkeletonTextRow primaryWidth="65%" subtleWidth="40%" />
          <SkeletonTextRow primaryWidth="72%" subtleWidth="50%" />
        </div>
      </SurfacePanel>
    </div>
  ),
};

export const TableListSkeleton: Story = {
  name: "Skeleton — table / list rows",
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-8">
      <SurfacePanel label="Light">
        <div className="flex flex-col gap-2.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTableRow key={i} columns={4} rowIndex={i} />
          ))}
        </div>
      </SurfacePanel>
      <SurfacePanel dark label="Dark">
        <div className="flex flex-col gap-2.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTableRow key={i} columns={4} rowIndex={i} />
          ))}
        </div>
      </SurfacePanel>
    </div>
  ),
};

export const CardContentSkeleton: Story = {
  name: "Skeleton — card / content block",
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-8">
      <SurfacePanel label="Light">
        <SkeletonCard rows={4} />
      </SurfacePanel>
      <SurfacePanel dark label="Dark">
        <SkeletonCard rows={4} />
      </SurfacePanel>
    </div>
  ),
};

export const LightDarkComparison: Story = {
  name: "Light vs Dark — all variants",
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-8 bg-background">
      {/* Light */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--erp-text-subtle)]">
          Light mode
        </p>

        <SurfacePanel label="Text skeleton">
          <SkeletonCard rows={3} />
        </SurfacePanel>

        <SurfacePanel label="Table rows">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonTableRow key={i} columns={3} rowIndex={i} />
            ))}
          </div>
        </SurfacePanel>

        <SurfacePanel label="Single bars">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-2 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-5 w-7/12" />
            <SkeletonSubtle className="h-2 w-1/2" />
            <SkeletonSubtle className="h-3 w-2/5" />
          </div>
        </SurfacePanel>
      </div>

      {/* Dark */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--erp-text-subtle)]">
          Dark mode
        </p>

        <SurfacePanel dark label="Text skeleton">
          <SkeletonCard rows={3} />
        </SurfacePanel>

        <SurfacePanel dark label="Table rows">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonTableRow key={i} columns={3} rowIndex={i} />
            ))}
          </div>
        </SurfacePanel>

        <SurfacePanel dark label="Single bars">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-2 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-5 w-7/12" />
            <SkeletonSubtle className="h-2 w-1/2" />
            <SkeletonSubtle className="h-3 w-2/5" />
          </div>
        </SurfacePanel>
      </div>
    </div>
  ),
};
