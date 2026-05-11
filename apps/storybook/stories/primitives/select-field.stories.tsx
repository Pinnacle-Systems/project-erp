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
