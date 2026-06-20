import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectField, SelectItem } from "@erp-ui-platform/primitives";

const meta = {
  title: "Primitives/SelectField",
} satisfies Meta;

export default meta;
type Story = StoryObj;

const CURRENCIES = ["USD", "EUR", "GBP", "AUD", "SGD", "INR"];
const STATUSES = ["Draft", "Submitted", "Pending approval", "Approved", "Posted"];

export const Default: Story = {
  render: () => (
    <div className="max-w-xs">
      <SelectField label="Currency" placeholder="Select currency…">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="max-w-xs">
      <SelectField label="Currency" defaultValue="USD">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="max-w-xs">
      <SelectField
        label="Approval status"
        error
        errorMessage="Status is required."
        placeholder="Select status…"
      >
        {STATUSES.map((s) => (
          <SelectItem key={s} value={s}>
            {s}
          </SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="max-w-xs">
      <SelectField label="Currency" defaultValue="USD" disabled>
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="max-w-xs">
      <SelectField label="Currency" defaultValue="USD" density="compact">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

export const Touch: Story = {
  render: () => (
    <div className="max-w-xs">
      <SelectField label="Currency" density="touch" placeholder="Select…">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-5 max-w-xs">
      <SelectField label="Currency (default)" defaultValue="USD">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>{c}</SelectItem>
        ))}
      </SelectField>

      <SelectField
        label="Status (error)"
        error
        errorMessage="Status is required."
        placeholder="Select status…"
      >
        {STATUSES.map((s) => (
          <SelectItem key={s} value={s}>{s}</SelectItem>
        ))}
      </SelectField>

      <SelectField label="Currency (disabled)" defaultValue="USD" disabled>
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>{c}</SelectItem>
        ))}
      </SelectField>

      <SelectField label="Compact" defaultValue="EUR" density="compact">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>{c}</SelectItem>
        ))}
      </SelectField>

      <SelectField label="Touch" density="touch" placeholder="Select…">
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>{c}</SelectItem>
        ))}
      </SelectField>
    </div>
  ),
};

const itemStateRows = [
  {
    label: "Default item",
    className: "text-foreground",
    indicator: "",
  },
  {
    label: "Hover item",
    className: "bg-[var(--erp-surface-hover)] text-foreground",
    indicator: "",
  },
  {
    label: "Selected item",
    className: "bg-[var(--erp-surface-selected)] text-foreground",
    indicator: "✓",
  },
  {
    label: "Selected + hover",
    className: "bg-[var(--erp-surface-selected-hover)] text-foreground",
    indicator: "✓",
  },
  {
    label: "Keyboard highlighted",
    className: "bg-[var(--erp-surface-hover)] text-foreground",
    indicator: "",
  },
  {
    label: "Selected + keyboard highlighted",
    className: "bg-[var(--erp-surface-selected-hover)] text-foreground",
    indicator: "✓",
  },
  {
    label: "Disabled item",
    className: "text-[var(--erp-text-disabled)] opacity-[var(--erp-disabled-opacity)]",
    indicator: "",
  },
];

const SelectStatePanel = ({ theme }: { theme: "light" | "dark" }) => (
  <div
    className={[
      theme === "dark" ? "dark" : "",
      "rounded-lg border border-border bg-background p-4 text-foreground",
    ].join(" ")}
  >
    <div className="mb-3">
      <p className="text-sm font-semibold">{theme === "dark" ? "Dark mode" : "Light mode"}</p>
      <p className="text-xs text-muted-foreground">Focused trigger and item states</p>
    </div>
    <button
      type="button"
      className="mb-3 flex h-control w-full items-center justify-between rounded-control border border-[var(--erp-form-field-focus-border)] bg-surface-raised px-[var(--erp-control-padding-x)] text-control text-foreground ring-[length:var(--erp-focus-ring-width)] ring-[var(--erp-focus-ring)] ring-offset-[var(--erp-focus-ring-offset)]"
    >
      Pending
      <span className="text-muted-foreground">⌄</span>
    </button>
    <div className="rounded-md border border-border bg-surface p-1 shadow-popover">
      {itemStateRows.map((item) => (
        <div
          key={item.label}
          className={[
            "relative flex w-full select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
            item.className,
          ].join(" ")}
        >
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            {item.indicator}
          </span>
          {item.label}
        </div>
      ))}
    </div>
  </div>
);

export const LightAndDarkStates: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      <SelectStatePanel theme="light" />
      <SelectStatePanel theme="dark" />
    </div>
  ),
};
