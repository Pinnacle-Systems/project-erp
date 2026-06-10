import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  borderTokens,
  colorTokens,
  densityTokens,
  formTokens,
  gridTokens,
  platformDensityTokens,
  radiusTokens,
  semanticColorTokens,
  shadowTokens,
  shellTokens,
  spacingTokens,
  stateTokens,
  statusTokens,
  surfaceTokens,
  textTokens,
  typographyTokens,
  validationTokens,
  zIndexTokens,
} from "@erp-ui-platform/tokens";

const meta = {
  title: "Foundation/Tokens",
} satisfies Meta;

export default meta;

type Story = StoryObj;

const Swatch = ({ label, value }: { label: string; value: string }) => (
  <div className="erp-demo-panel" style={{ display: "grid", gap: 8 }}>
    <div style={{ height: 40, borderRadius: 6, background: value, border: "1px solid #cbd5e1" }} />
    <strong>{label}</strong>
    <code>{value}</code>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-semibold text-[var(--erp-fg)]">{children}</h2>
);

const TokenRow = ({
  label,
  value,
  preview,
}: {
  label: string;
  value: string | number;
  preview?: React.ReactNode;
}) => (
  <div className="grid grid-cols-[minmax(8rem,1fr)_minmax(7rem,auto)_minmax(6rem,auto)] items-center gap-3 border-b border-[var(--erp-border)] px-3 py-2 text-xs last:border-0">
    <span className="font-medium text-[var(--erp-fg)]">{label}</span>
    <code className="text-[var(--erp-muted)]">{String(value)}</code>
    <div className="flex justify-end">{preview}</div>
  </div>
);

const DensityCard = ({
  device,
  mode,
  tokens,
}: {
  device: string;
  mode: string;
  tokens: Record<string, string>;
}) => (
  <div className="rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface)] p-3">
    <div className="mb-3 flex items-center justify-between">
      <strong className="text-sm text-[var(--erp-fg)]">{device}</strong>
      <span className="erp-demo-badge text-[var(--erp-muted)]">{mode}</span>
    </div>
    <div className="grid gap-2">
      {Object.entries(tokens).map(([key, value]) => (
        <TokenRow
          key={key}
          label={key}
          value={value}
          preview={
            key.toLowerCase().includes("height") || key.toLowerCase().includes("target") ? (
              <div className="w-20 rounded bg-[var(--erp-accent)]" style={{ height: value }} />
            ) : key.toLowerCase().includes("gap") || key.toLowerCase().includes("padding") ? (
              <div className="flex h-5 items-center rounded bg-[var(--erp-accent-soft)] px-1" style={{ gap: value }}>
                <span className="h-2 w-2 rounded-full bg-[var(--erp-accent)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--erp-accent)]" />
              </div>
            ) : null
          }
        />
      ))}
    </div>
  </div>
);

const StatusCard = ({
  status,
  semantic,
  label,
}: {
  status: string;
  semantic: keyof Pick<
    typeof semanticColorTokens,
    "muted" | "info" | "success" | "warning" | "danger"
  >;
  label: string;
}) => {
  const tone = semanticColorTokens[semantic];
  return (
    <div
      className="rounded-md border px-3 py-2"
      style={{
        background: tone.background,
        borderColor: tone.border,
        color: tone.foreground,
      }}
    >
      <strong className="block text-xs">{label}</strong>
      <code className="text-xs text-slate-400 font-mono">{status}</code>
    </div>
  );
};

const ColorTokenCard = ({
  label,
  value,
  cssVariable,
}: {
  label: string;
  value: string;
  cssVariable: string;
}) => {
  const canPreviewAsColor =
    value === "transparent" ||
    value === "currentColor" ||
    value.startsWith("#") ||
    value.startsWith("rgb");

  return (
    <div
      className="rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface)] p-3"
    >
      <div
        className="mb-2 h-8 overflow-hidden rounded border border-[var(--erp-border)] bg-[var(--erp-surface-muted)]"
      >
        <div
          className="h-full rounded-sm"
          style={
            canPreviewAsColor
              ? { background: value }
              : {
                  width: value,
                  maxWidth: "100%",
                  minWidth: "0.25rem",
                  background: "var(--erp-accent)",
                }
          }
        />
      </div>
      <p className="text-xs font-semibold text-[var(--erp-fg)]">{label}</p>
      <code className="block text-xs text-slate-400 font-mono">{cssVariable}</code>
      <code className="block text-xs text-slate-400 font-mono">{value}</code>
    </div>
  );
};

const TokenFamily = ({
  title,
  tokens,
  cssPrefix,
}: {
  title: string;
  tokens: Record<string, string>;
  cssPrefix: string;
}) => (
  <section className="erp-demo-panel">
    <SectionTitle>{title}</SectionTitle>
    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(tokens).map(([key, value]) => (
        <ColorTokenCard
          key={key}
          label={key}
          value={value}
          cssVariable={`${cssPrefix}-${kebabCase(key)}`}
        />
      ))}
    </div>
  </section>
);

const flattenTokens = (
  tokens: Record<string, unknown>,
  prefix = "",
): Record<string, string> =>
  Object.entries(tokens).reduce<Record<string, string>>((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string" || typeof value === "number") {
      acc[path] = String(value);
      return acc;
    }

    if (value && typeof value === "object") {
      Object.assign(acc, flattenTokens(value as Record<string, unknown>, path));
    }

    return acc;
  }, {});

const NestedTokenFamily = ({
  title,
  tokens,
  cssPrefix,
}: {
  title: string;
  tokens: Record<string, unknown>;
  cssPrefix: string;
}) => (
  <TokenFamily title={title} tokens={flattenTokens(tokens)} cssPrefix={cssPrefix} />
);

const ValidationTokenFamily = () => (
  <section className="erp-demo-panel">
    <SectionTitle>Validation Severity Tokens</SectionTitle>
    <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {Object.entries(validationTokens).map(([severity, token]) => (
        <div
          key={severity}
          className="rounded-md border p-3"
          style={{
            background: token.bg,
            borderColor: token.border,
            color: token.text,
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: token.icon }}
            />
            <strong className="text-xs capitalize">{severity}</strong>
          </div>
          <div className="grid gap-1 text-xs text-slate-400 font-mono">
            <code>{`--erp-validation-${severity}-bg`}</code>
            <code>{`--erp-validation-${severity}-text`}</code>
            <code>{`--erp-validation-${severity}-border`}</code>
            <code>{`--erp-validation-${severity}-icon`}</code>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const zIndexExamples: Record<keyof typeof zIndexTokens, string> = {
  base: "Page content",
  raised: "Raised panel",
  sticky: "Sticky toolbar",
  header: "App header",
  overlay: "Backdrop",
  popover: "Dropdown",
  toast: "Toast",
  modal: "Dialog",
  tooltip: "Tooltip",
};

const ZIndexStackPreview = () => {
  const frontToBack = Object.entries(zIndexTokens).sort(
    ([, left], [, right]) => right - left,
  ) as [keyof typeof zIndexTokens, number][];
  const backToFront = [...frontToBack].reverse();

  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-[var(--erp-fg)]">Exploded Layer Stack</h3>
            <p className="text-xs text-[var(--erp-text-muted)]">
              Every card is pulled apart so the front-to-back order is visible.
            </p>
          </div>
          <div className="rounded-full bg-[var(--erp-surface-inverse)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-inverse)]">
            Front
          </div>
        </div>
        <div className="relative min-h-[34rem] overflow-hidden rounded-md border border-[var(--erp-border)] bg-[linear-gradient(135deg,var(--erp-surface-muted),var(--erp-surface-card))] p-5">
          <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-[var(--erp-border-strong)]" />
          <div className="absolute left-3 top-4 rounded bg-[var(--erp-surface-card)] px-1 text-[10px] font-semibold text-[var(--erp-fg)]">
            front
          </div>
          <div className="absolute bottom-4 left-3 rounded bg-[var(--erp-surface-card)] px-1 text-[10px] font-semibold text-[var(--erp-text-muted)]">
            back
          </div>
          {frontToBack.map(([layer, value], index) => {
            const top = 24 + index * 50;
            const left = 32 + index * 18;
            const width = 72 - index * 4;

            return (
              <div
                key={layer}
                className="absolute rounded-md border border-[var(--erp-border-strong)] bg-[var(--erp-surface-card)] px-3 py-2 shadow-md"
                style={{
                  top,
                  left,
                  width: `${width}%`,
                  zIndex: value,
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-sm text-[var(--erp-fg)]">z.{layer}</strong>
                  <code className="rounded bg-[var(--erp-surface-muted)] px-1.5 py-0.5 text-xs text-[var(--erp-fg)]">
                    {value}
                  </code>
                </div>
                <p className="mt-1 text-xs text-[var(--erp-text-muted)]">
                  {zIndexExamples[layer]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
          <h3 className="text-sm font-semibold text-[var(--erp-fg)]">Collision Example</h3>
          <p className="mt-1 text-xs text-[var(--erp-text-muted)]">
            When surfaces overlap, the higher token wins.
          </p>
          <div className="relative mt-4 h-64 overflow-hidden rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface-muted)]">
            <div
              className="absolute inset-x-4 top-4 h-10 rounded border border-[var(--erp-border)] bg-[var(--erp-surface-card)] px-3 py-2 text-xs font-semibold text-[var(--erp-fg)]"
              style={{ zIndex: zIndexTokens.header }}
            >
              header · 200
            </div>
            <div
              className="absolute left-5 top-20 h-32 w-48 rounded border border-[var(--erp-border)] bg-[var(--erp-surface-card)] p-3 text-xs text-[var(--erp-text-muted)]"
              style={{ zIndex: zIndexTokens.base }}
            >
              base · 0
            </div>
            <div
              className="absolute inset-0 bg-[var(--erp-surface-overlay)]"
              style={{ zIndex: zIndexTokens.overlay }}
            />
            <div
              className="absolute left-9 top-28 rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface-card)] px-3 py-2 text-xs shadow-md"
              style={{ zIndex: zIndexTokens.popover }}
            >
              popover · 500
            </div>
            <div
              className="absolute left-[44%] top-[58%] w-52 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[var(--erp-border-strong)] bg-[var(--erp-surface-card)] p-4 shadow-md"
              style={{ zIndex: zIndexTokens.modal }}
            >
              <strong className="block text-sm text-[var(--erp-fg)]">modal · 700</strong>
              <p className="mt-1 text-xs text-[var(--erp-text-muted)]">Above overlay and popover.</p>
            </div>
            <div
              className="absolute right-5 top-20 rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface-card)] px-3 py-2 text-xs font-medium text-[var(--erp-fg)] shadow-md"
              style={{ zIndex: zIndexTokens.toast }}
            >
              toast · 600
            </div>
            <div
              className="absolute left-[calc(44%-4rem)] top-[calc(58%-3.25rem)] rounded bg-[var(--erp-surface-inverse)] px-2 py-1 text-[10px] font-semibold text-[var(--erp-text-inverse)]"
              style={{ zIndex: zIndexTokens.tooltip }}
            >
              tooltip · 800
            </div>
          </div>
        </div>

        <div className="rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface)] p-3">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--erp-fg)]">Back</span>
            <span className="font-semibold text-[var(--erp-fg)]">Front</span>
          </div>
          <div className="grid gap-1.5">
          {backToFront.map(([layer, value]) => (
            <div
              key={layer}
              className="grid grid-cols-[4.75rem_2.5rem_minmax(0,1fr)] items-center gap-2 rounded border border-[var(--erp-border)] bg-[var(--erp-surface-muted)] px-2 py-1.5 text-[10px]"
            >
              <strong className="text-[var(--erp-fg)]">z.{layer}</strong>
              <code className="text-[var(--erp-muted)]">{value}</code>
              <span className="truncate text-[var(--erp-text-muted)]">{zIndexExamples[layer]}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const kebabCase = (value: string) =>
  value
    .replace(/\./g, "-")
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

export const Overview: Story = {
  render: () => (
    <div className="erp-demo-stack">
      <h1>Foundation Tokens</h1>
      <p>Tokens are UI-library agnostic and can be mapped into themes later.</p>
      <section className="erp-demo-row">
        <Swatch label="background.app" value={semanticColorTokens.background.app} />
        <Swatch label="info.accent" value={semanticColorTokens.info.accent} />
        <Swatch label="success.accent" value={semanticColorTokens.success.accent} />
        <Swatch label="warning.accent" value={semanticColorTokens.warning.accent} />
        <Swatch label="danger.accent" value={semanticColorTokens.danger.accent} />
      </section>
      <section className="erp-demo-panel">
        <SectionTitle>Density</SectionTitle>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {Object.entries(densityTokens).flatMap(([device, modes]) =>
            Object.entries(modes).map(([mode, tokens]) => (
              <DensityCard
                key={`${device}-${mode}`}
                device={device}
                mode={mode}
                tokens={tokens}
              />
            )),
          )}
        </div>
      </section>
      <section className="erp-demo-panel">
        <SectionTitle>Status Tokens</SectionTitle>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(statusTokens).map(([status, token]) => (
            <StatusCard
              key={status}
              status={status}
              label={token.label}
              semantic={token.semantic}
            />
          ))}
        </div>
      </section>
      <TokenFamily title="Surface Tokens" tokens={surfaceTokens} cssPrefix="--erp-surface" />
      <TokenFamily title="Text Tokens" tokens={textTokens} cssPrefix="--erp-text" />
      <TokenFamily title="Border Tokens" tokens={borderTokens} cssPrefix="--erp-border" />
      <TokenFamily title="Interactive And ERP State Tokens" tokens={stateTokens} cssPrefix="--erp-state" />
      <ValidationTokenFamily />
      <NestedTokenFamily title="Grid And Table Tokens" tokens={gridTokens} cssPrefix="--erp-grid" />
      <NestedTokenFamily title="Shell Layout Tokens" tokens={shellTokens} cssPrefix="--erp-shell" />
      <NestedTokenFamily title="Form Layout Tokens" tokens={formTokens} cssPrefix="--erp-form" />
      <section className="erp-demo-panel">
        <SectionTitle>Scales</SectionTitle>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(colorTokens.neutral).map(([step, value]) => (
              <TokenRow
                key={step}
                label={`neutral.${step}`}
                value={value}
                preview={<div className="h-5 w-16 rounded border border-[var(--erp-border)]" style={{ background: value }} />}
              />
            ))}
          </div>
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(spacingTokens).map(([step, value]) => (
              <TokenRow
                key={step}
                label={`space.${step}`}
                value={value}
                preview={<div className="h-3 rounded bg-[var(--erp-accent)]" style={{ width: value }} />}
              />
            ))}
          </div>
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(typographyTokens.fontSize).map(([step, value]) => (
              <TokenRow
                key={step}
                label={`font.${step}`}
                value={value}
                preview={<span style={{ fontSize: value }}>Aa</span>}
              />
            ))}
          </div>
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(radiusTokens).map(([step, value]) => (
              <TokenRow
                key={step}
                label={`radius.${step}`}
                value={value}
                preview={<div className="h-8 w-12 bg-[var(--erp-accent-soft)] border border-[var(--erp-accent-border)]" style={{ borderRadius: value }} />}
              />
            ))}
            {Object.entries(shadowTokens).slice(1, 5).map(([step, value]) => (
              <TokenRow
                key={step}
                label={`shadow.${step}`}
                value={step}
                preview={<div className="h-8 w-12 rounded bg-[var(--erp-surface)] border border-[var(--erp-border)]" style={{ boxShadow: value }} />}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <SectionTitle>Z-Index Stacking Order</SectionTitle>
          <p className="mt-1 text-xs text-[var(--erp-text-muted)]">
            Higher layers render in front of lower layers. Use the named layer
            that matches the component role instead of inventing one-off values.
          </p>
          <div className="mt-3">
            <ZIndexStackPreview />
          </div>
        </div>
      </section>
    </div>
  ),
};

// Density comparison row used inside DenseTypographyGovernance
const DensityCompareRow = ({
  label,
  compact,
  comfortable,
  touch,
}: {
  label: string;
  compact: string;
  comfortable: string;
  touch: string;
}) => (
  <div className="grid grid-cols-[minmax(13rem,1fr)_4rem_5rem_4rem] items-center border-b border-(--erp-border) px-3 py-1.5 text-xs last:border-0">
    <code className="text-(--erp-text-muted)">{label}</code>
    <code className="text-center text-(--erp-text-primary)">{compact}</code>
    <code className="text-center text-(--erp-text-primary)">{comfortable}</code>
    <code className="text-center text-(--erp-text-primary)">{touch}</code>
  </div>
);

export const DenseTypographyGovernance: Story = {
  render: () => (
    <div className="erp-demo-stack" style={{ maxWidth: "44rem" }}>
      <h1>Dense Grid / Table Typography</h1>
      <p className="text-xs text-(--erp-text-muted)">
        Rules for grid, table, and editable-grid typography. Compact density is achieved
        through row height, padding, and borders — not by shrinking text below legible defaults.
      </p>

      <section className="erp-demo-panel">
        <SectionTitle>Token Reference</SectionTitle>
        <p className="mt-1 text-xs text-(--erp-text-muted)">Sizing tokens are density-aware. Values shown are for the default (comfortable) density.</p>
        <div className="mt-3 overflow-hidden rounded-md border border-(--erp-border)">
          <div className="border-b border-(--erp-border) bg-(--erp-surface-muted) px-3 py-1.5 text-[10px] font-semibold uppercase tracking-(--erp-tracking-caps) text-(--erp-text-subtle)">Typography</div>
          <TokenRow label="--erp-font-size-xs" value="0.75rem (12px)" preview={<span style={{ fontSize: "0.75rem" }}>Aa</span>} />
          <TokenRow label="--erp-line-height-dense" value="1.25" preview={<span className="text-xs leading-(--erp-line-height-dense)">Line↕</span>} />
          <TokenRow label="--erp-tracking-caps" value="0.02em" preview={<span className="text-xs uppercase tracking-(--erp-tracking-caps)">CAPS</span>} />
          <div className="border-b border-(--erp-border) bg-(--erp-surface-muted) px-3 py-1.5 text-[10px] font-semibold uppercase tracking-(--erp-tracking-caps) text-(--erp-text-subtle)">Grid density — editable surfaces</div>
          <TokenRow label="--erp-grid-cell-height" value="28px" preview={<div className="w-10 rounded bg-(--erp-accent)" style={{ height: "28px" }} />} />
          <TokenRow label="--erp-grid-header-height" value="32px" preview={<div className="w-10 rounded border border-(--erp-accent-border) bg-(--erp-accent-soft)" style={{ height: "32px" }} />} />
          <TokenRow label="--erp-grid-cell-padding-x" value="6px" />
          <TokenRow label="--erp-grid-cell-padding-y" value="2px" />
          <div className="border-b border-(--erp-border) bg-(--erp-surface-muted) px-3 py-1.5 text-[10px] font-semibold uppercase tracking-(--erp-tracking-caps) text-(--erp-text-subtle)">Table density — read-only surfaces</div>
          <TokenRow label="--erp-table-cell-padding-x" value="16px" />
          <TokenRow label="--erp-table-cell-padding-y" value="10px" />
          <TokenRow label="--erp-table-header-padding-y" value="8px" />
        </div>
      </section>

      <section className="erp-demo-panel">
        <SectionTitle>Grid vs Table Density</SectionTitle>
        <p className="mt-1.5 text-xs text-(--erp-text-muted)">
          <strong className="text-(--erp-text-secondary)">Grid density</strong> is for editable spreadsheet interaction surfaces (EditableGrid).
          {" "}<strong className="text-(--erp-text-secondary)">Table density</strong> is for read-only dense data display (DenseTableCard and similar).
          Both track the platform density setting, but they are intentionally different — do not unify the padding values.
        </p>
        <div className="mt-3 overflow-hidden rounded-md border border-(--erp-border)">
          <div className="grid grid-cols-[minmax(13rem,1fr)_4rem_5rem_4rem] border-b border-(--erp-border) bg-(--erp-surface-muted) px-3 py-1.5 text-[10px] font-semibold uppercase tracking-(--erp-tracking-caps) text-(--erp-text-subtle)">
            <span>Variable</span>
            <span className="text-center">compact</span>
            <span className="text-center">comfortable</span>
            <span className="text-center">touch</span>
          </div>
          <div className="border-b border-(--erp-border) bg-(--erp-surface-muted) px-3 py-1 text-[10px] font-medium text-(--erp-text-muted)">Grid (editable)</div>
          {(Object.entries({
            "--erp-grid-cell-height":    { compact: platformDensityTokens.compact.grid.cellHeight,    comfortable: platformDensityTokens.comfortable.grid.cellHeight,    touch: platformDensityTokens.touch.grid.cellHeight    },
            "--erp-grid-header-height":  { compact: platformDensityTokens.compact.grid.headerHeight,  comfortable: platformDensityTokens.comfortable.grid.headerHeight,  touch: platformDensityTokens.touch.grid.headerHeight  },
            "--erp-grid-cell-padding-x": { compact: platformDensityTokens.compact.grid.cellPaddingX,  comfortable: platformDensityTokens.comfortable.grid.cellPaddingX,  touch: platformDensityTokens.touch.grid.cellPaddingX  },
            "--erp-grid-cell-padding-y": { compact: platformDensityTokens.compact.grid.cellPaddingY,  comfortable: platformDensityTokens.comfortable.grid.cellPaddingY,  touch: platformDensityTokens.touch.grid.cellPaddingY  },
          }) as [string, { compact: string; comfortable: string; touch: string }][]).map(([label, vals]) => (
            <DensityCompareRow key={label} label={label} {...vals} />
          ))}
          <div className="border-b border-(--erp-border) bg-(--erp-surface-muted) px-3 py-1 text-[10px] font-medium text-(--erp-text-muted)">Table (read-only)</div>
          {(Object.entries({
            "--erp-table-cell-padding-x":   { compact: platformDensityTokens.compact.table.cellPaddingX,   comfortable: platformDensityTokens.comfortable.table.cellPaddingX,   touch: platformDensityTokens.touch.table.cellPaddingX   },
            "--erp-table-cell-padding-y":   { compact: platformDensityTokens.compact.table.cellPaddingY,   comfortable: platformDensityTokens.comfortable.table.cellPaddingY,   touch: platformDensityTokens.touch.table.cellPaddingY   },
            "--erp-table-header-padding-y": { compact: platformDensityTokens.compact.table.headerPaddingY, comfortable: platformDensityTokens.comfortable.table.headerPaddingY, touch: platformDensityTokens.touch.table.headerPaddingY },
          }) as [string, { compact: string; comfortable: string; touch: string }][]).map(([label, vals]) => (
            <DensityCompareRow key={label} label={label} {...vals} />
          ))}
        </div>
      </section>

      <section className="erp-demo-panel">
        <SectionTitle>Rules</SectionTitle>
        <div className="mt-3 space-y-3 text-xs text-(--erp-text-secondary)">
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">1.</span>
            <p><strong className="text-(--erp-text-primary)">Minimum body text size is xs (12px).</strong> Grid and table body cells must not go below <code>--erp-font-size-xs</code>. Use <code>text-(length:--erp-font-size-xs)</code>.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">2.</span>
            <p><strong className="text-(--erp-text-primary)">Headers must not be smaller than body text.</strong> Column headers default to <code>--erp-font-size-xs</code> — the same scale as body cells. Reducing headers below body size inverts visual hierarchy.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">3.</span>
            <p><strong className="text-(--erp-text-primary)">Use dense line-height explicitly.</strong> Add <code>leading-(--erp-line-height-dense)</code> to grid headers and inputs. Do not rely on browser defaults (≈1.15), which cause uneven row rhythm.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">4.</span>
            <p><strong className="text-(--erp-text-primary)">Uppercase labels use token tracking.</strong> Caps headers and labels use <code>tracking-(--erp-tracking-caps)</code> (0.02em). Do not hardcode <code>tracking-wide</code> or other arbitrary values.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">5.</span>
            <p><strong className="text-(--erp-text-primary)">Editable inputs match static cell typography.</strong> <code>GridCellInput</code> uses <code>--erp-font-size-xs</code>, <code>--erp-line-height-dense</code>, and <code>--erp-text-secondary</code> — the same as <code>CellText</code> — to prevent a color/size jump on edit entry.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">6.</span>
            <p><strong className="text-(--erp-text-primary)"><code>text-[10px]</code> is not allowed for data or headers.</strong> Only permitted for decorative micro-annotations (icon catalog labels, purely visual captions) and must carry an explanatory comment.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">7.</span>
            <p><strong className="text-(--erp-text-primary)">No global font-smoothing hacks.</strong> Do not use <code>-webkit-font-smoothing: antialiased</code> as a fix for jagged text. Jagged rendering is a size or line-height problem; fix it at the component level with tokens.</p>
          </div>
        </div>
      </section>

      <section className="erp-demo-panel">
        <SectionTitle>Tailwind Patterns</SectionTitle>
        <div className="mt-3 rounded-md border border-(--erp-border)">
          <TokenRow label="Table/grid header" value="text-(length:--erp-font-size-xs) leading-(--erp-line-height-dense) font-semibold uppercase tracking-(--erp-tracking-caps)" />
          <TokenRow label="Table/grid body cell" value="text-(length:--erp-font-size-xs)" />
          <TokenRow label="Numeric body cell" value="text-(length:--erp-font-size-xs) tabular-nums text-right" />
          <TokenRow label="GridCellInput (editable)" value="text-(length:--erp-font-size-xs) leading-(--erp-line-height-dense) text-(--erp-text-secondary)" />
        </div>
      </section>
    </div>
  ),
};

const Swatch2 = ({ token }: { token: string }) => (
  <span
    style={{
      display: "inline-block",
      width: 16,
      height: 16,
      borderRadius: 3,
      background: `var(${token})`,
      border: "1px solid #cbd5e1",
      verticalAlign: "middle",
    }}
  />
);

export const EditableGridStateGovernance: Story = {
  render: () => (
    <div className="erp-demo-stack" style={{ maxWidth: "44rem" }}>
      <h1>Editable Grid Interaction-State Governance</h1>
      <p className="text-xs text-(--erp-text-muted)">
        Rules for assigning tokens to grid states. Mixing active-editing tokens into persistent
        states (stale, manual override) creates ambiguity that breaks the state hierarchy.
      </p>

      <section className="erp-demo-panel">
        <SectionTitle>State Hierarchy (highest urgency first)</SectionTitle>
        <div className="mt-3 rounded-md border border-(--erp-border)">
          <TokenRow
            label="Error"
            value="--erp-grid-row-error-accent / --erp-grid-cell-error-bg"
            preview={<Swatch2 token="--erp-grid-cell-error-bg" />}
          />
          <TokenRow
            label="Editing / focus"
            value="--erp-grid-cell-editing-bg  (cell-level only)"
            preview={<Swatch2 token="--erp-grid-cell-editing-bg" />}
          />
          <TokenRow
            label="Manual override"
            value="--erp-grid-cell-manual-bg + --erp-grid-cell-manual-border"
            preview={<Swatch2 token="--erp-grid-cell-manual-bg" />}
          />
          <TokenRow
            label="Dirty"
            value="--erp-grid-row-dirty-bg  (row-level)"
            preview={<Swatch2 token="--erp-grid-row-dirty-bg" />}
          />
          <TokenRow
            label="Stale"
            value="--erp-grid-cell-stale-bg / --erp-grid-row-stale-bg"
            preview={<Swatch2 token="--erp-grid-cell-stale-bg" />}
          />
          <TokenRow
            label="Read-only"
            value="--erp-grid-cell-readonly-bg  (transparent — row bg shows through; no hover/focus affordance)"
            preview={<Swatch2 token="--erp-grid-cell-readonly-bg" />}
          />
          <TokenRow
            label="Deleted"
            value="--erp-grid-row-deleted-bg + strikethrough text"
            preview={<Swatch2 token="--erp-grid-row-deleted-bg" />}
          />
          <TokenRow
            label="Phantom"
            value="--erp-grid-row-readonly-bg + italic/em-dash text"
            preview={<Swatch2 token="--erp-grid-row-readonly-bg" />}
          />
        </div>
      </section>

      <section className="erp-demo-panel">
        <SectionTitle>Active vs Persistent Tokens</SectionTitle>
        <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-md border border-(--erp-border) p-3">
            <p className="mb-2 font-semibold text-(--erp-text-primary)">Active (ephemeral)</p>
            <p className="mb-2 text-(--erp-text-muted)">Tied to live user interaction. Must not be reused for data states that persist after focus leaves.</p>
            <ul className="space-y-1 text-(--erp-text-secondary)">
              <li><code>--erp-grid-cell-editing-bg</code></li>
              <li><code>--erp-grid-row-selected-bg</code></li>
              <li><code>--erp-grid-row-hover-bg</code></li>
            </ul>
          </div>
          <div className="rounded-md border border-(--erp-border) p-3">
            <p className="mb-2 font-semibold text-(--erp-text-primary)">Persistent (data state)</p>
            <p className="mb-2 text-(--erp-text-muted)">Reflect document state, not interaction state. Survive focus changes and page reloads.</p>
            <ul className="space-y-1 text-(--erp-text-secondary)">
              <li><code>--erp-grid-row-dirty-bg</code></li>
              <li><code>--erp-grid-cell-stale-bg</code></li>
              <li><code>--erp-grid-cell-manual-bg</code></li>
              <li><code>--erp-grid-row-deleted-bg</code></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="erp-demo-panel">
        <SectionTitle>Rules</SectionTitle>
        <div className="mt-3 space-y-3 text-xs text-(--erp-text-secondary)">
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">1.</span>
            <p><strong className="text-(--erp-text-primary)">Never reuse active-editing tokens for persistent states.</strong> <code>--erp-grid-cell-editing-bg</code> and <code>--erp-grid-row-selected-bg</code> are reserved for active focus and row selection. Using them for stale or manual-override data makes those states visually indistinguishable from editing.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">2.</span>
            <p><strong className="text-(--erp-text-primary)">Error outranks dirty.</strong> A dirty row with a validation error shows a red left-edge stripe (<code>--erp-grid-row-error-accent</code>) and error-first badge order. Dirty amber background is preserved but visually demoted.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">3.</span>
            <p><strong className="text-(--erp-text-primary)">Manual override must not look like editing.</strong> Use <code>--erp-grid-cell-manual-bg</code> (blue-50) and <code>--erp-grid-cell-manual-border</code> (blue-300). The editing bg is a deeper blue and is reserved for the focused input state.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">4.</span>
            <p><strong className="text-(--erp-text-primary)">Stale uses a distinct hue (violet), not the editing blue.</strong> <code>--erp-grid-cell-stale-bg</code> is <code>#faf5ff</code> across all theme variants so stale is never confused with selected or editing regardless of accent color.</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">5.</span>
            <p><strong className="text-(--erp-text-primary)">All states require a non-color redundant signal.</strong> Color alone fails for colorblind users and in high-contrast mode. Each state must have at least one of: badge text, border style, strikethrough, italic text, or structural marker (stripe, icon).</p>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <span className="font-semibold text-(--erp-text-primary)">6.</span>
            <p><strong className="text-(--erp-text-primary)">Rows own row-level backgrounds. Cells only paint true cell-level states.</strong> <code>--erp-grid-cell-readonly-bg</code> is <code>transparent</code> so read-only cells never mask alternating-row, hover, dirty, deleted, or phantom backgrounds. Read-only is discovered through suppressed interaction affordances — <code>cursor-default</code>, no hover border, no focus ring — not through an opaque fill.</p>
          </div>
        </div>
      </section>
    </div>
  ),
};
