import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  createValidationSummary,
  createFieldValidationState,
  createLineValidationState,
  type ValidationMessage,
} from "@erp-ui-platform/validation-ui";
import { Badge, Button, TextField } from "@erp-ui-platform/primitives";
import {
  validationBlocking,
  validationWarning,
  validationInfo,
  validationLineError,
} from "../utils/demoValidation";

const meta = {
  title: "Patterns/Validation UI",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── helpers ──────────────────────────────────────────────────────────────────

const severityVariant = {
  blocking: "danger",
  error: "danger",
  warning: "warning",
  info: "info",
} as const satisfies Record<ValidationMessage["severity"], "danger" | "warning" | "info">;

const ValidationBanner = ({
  messages,
  title = "Validation",
}: {
  messages: readonly ValidationMessage[];
  title?: string;
}) => {
  const summary = createValidationSummary(messages);
  if (!summary.messages.length) return null;

  const top = summary.hasBlocking
    ? "blocking"
    : summary.counts.warning > 0
      ? "warning"
      : "info";

  const bg =
    top === "blocking"
      ? "bg-[var(--erp-validation-blocking-bg)] border-[var(--erp-validation-blocking-border)]"
      : top === "warning"
        ? "bg-[var(--erp-validation-warning-bg)] border-[var(--erp-validation-warning-border)]"
        : "bg-[var(--erp-validation-info-bg)] border-[var(--erp-validation-info-border)]";

  return (
    <div className={`rounded-md border p-3 ${bg}`} role="alert">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-xs font-semibold text-[var(--erp-text-secondary)]">{title}</span>
        <Badge variant={severityVariant[top]}>
          {summary.messages.length} issue{summary.messages.length !== 1 ? "s" : ""}
        </Badge>
      </div>
      <ul className="flex flex-col gap-1">
        {summary.messages.map((m) => (
          <li
            key={m.id}
            className="flex items-start gap-1.5 text-xs text-[var(--erp-text-secondary)]"
          >
            <Badge
              variant={severityVariant[m.severity]}
              className="mt-0.5 shrink-0 capitalize"
            >
              {m.severity}
            </Badge>
            <span>{m.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ── stories ───────────────────────────────────────────────────────────────────

export const ValidationSummary: Story = {
  render: () => (
    <div className="max-w-lg flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2">
          Blocking + warnings + info
        </p>
        <ValidationBanner messages={[validationBlocking, validationWarning, validationInfo]} />
      </div>
      <div>
        <p className="text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2">
          Warnings only
        </p>
        <ValidationBanner messages={[validationWarning, validationInfo]} title="Attention" />
      </div>
      <div>
        <p className="text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2">
          No issues (no banner rendered)
        </p>
        <div className="h-8 rounded border border-dashed border-[var(--erp-border-default)] flex items-center px-3">
          <span className="text-xs text-[var(--erp-text-disabled)]">ValidationBanner renders nothing</span>
        </div>
        <ValidationBanner messages={[]} />
      </div>
    </div>
  ),
};

export const FieldError: Story = {
  render: () => {
    const customerState = createFieldValidationState(
      [validationBlocking],
      "header.customerId",
    );
    const taxState = createFieldValidationState([validationWarning], "header.taxCode");

    return (
      <div className="max-w-sm flex flex-col gap-3">
        <TextField
          label="Customer"
          placeholder="Search customer..."
          error={customerState.hasBlocking}
          errorMessage={customerState.messages[0]?.message}
          density="compact"
        />
        <TextField
          label="Tax Code"
          placeholder="e.g. GST18"
          error={taxState.hasWarning}
          helpText={taxState.hasWarning ? taxState.messages[0]?.message : "Applied to all lines"}
          density="compact"
        />
        <TextField
          label="Payment Terms"
          defaultValue="Net 30"
          helpText={validationInfo.message}
          density="compact"
        />
      </div>
    );
  },
};

export const LineError: Story = {
  render: () => {
    const lineState = createLineValidationState([validationLineError], { lineIndex: 1 });

    return (
      <div className="max-w-xl flex flex-col gap-2">
        <table className="w-full text-xs border border-[var(--erp-grid-row-border)] rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[var(--erp-grid-header-bg)] border-b border-[var(--erp-grid-header-border)]">
              <th className="text-left px-3 py-2 font-medium text-[var(--erp-grid-header-text)]">Item</th>
              <th className="text-left px-3 py-2 font-medium text-[var(--erp-grid-header-text)]">Description</th>
              <th className="text-right px-3 py-2 font-medium text-[var(--erp-grid-header-text)]">Qty</th>
              <th className="w-16 px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--erp-border-muted)]">
              <td className="px-3 py-2 font-mono text-[var(--erp-text-secondary)]">FAB-001</td>
              <td className="px-3 py-2 text-[var(--erp-text-secondary)]">Fabric roll</td>
              <td className="px-3 py-2 text-right text-[var(--erp-text-secondary)]">12</td>
              <td></td>
            </tr>
            <tr className="bg-[var(--erp-grid-row-error-bg)] border-b border-[var(--erp-validation-error-border)]">
              <td className="px-3 py-2 font-mono text-[var(--erp-text-secondary)]">ACC-220</td>
              <td className="px-3 py-2 text-[var(--erp-text-secondary)]">Accessory pack</td>
              <td className="px-3 py-2 text-right">
                <TextField
                  value="0"
                  error={lineState.hasError}
                  density="compact"
                  width="xs"
                  className="text-right"
                  readOnly
                />
              </td>
              <td className="px-3 py-2">
                <Badge variant="danger">Error</Badge>
              </td>
            </tr>
            <tr className="border-[var(--erp-border-muted)]">
              <td className="px-3 py-2 font-mono text-[var(--erp-text-disabled)]">+</td>
              <td className="px-3 py-2 text-[var(--erp-text-disabled)] italic" colSpan={3}>
                Add line...
              </td>
            </tr>
          </tbody>
        </table>
        {lineState.messages.length > 0 && (
          <p className="text-xs text-[var(--erp-validation-error-text)] flex items-center gap-1">
            <span className="font-medium">Line 2:</span>
            <span>{lineState.messages[0].message}</span>
          </p>
        )}
      </div>
    );
  },
};

export const BlockingWorkflowError: Story = {
  render: () => (
    <div className="max-w-lg flex flex-col gap-3">
      <ValidationBanner messages={[validationBlocking, validationWarning]} title="Cannot post" />
      <div className="flex items-center gap-2 pt-1">
        <Button variant="ghost" density="compact">
          Discard
        </Button>
        <Button variant="secondary" density="compact">
          Save Draft
        </Button>
        <Button
          variant="default"
          density="compact"
          disabled
          title={validationBlocking.message}
        >
          Post Document
        </Button>
        <Badge variant="danger" className="ml-1">
          Post blocked
        </Badge>
      </div>
    </div>
  ),
};
