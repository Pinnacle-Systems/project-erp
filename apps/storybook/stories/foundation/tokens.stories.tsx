import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  borderTokens,
  colorTokens,
  densityTokens,
  formTokens,
  gridTokens,
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
      <code className="text-[10px] font-medium">{status}</code>
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
      <code className="block text-[10px] font-medium text-[var(--erp-muted)]">{cssVariable}</code>
      <code className="block text-[10px] text-[var(--erp-text-muted)]">{value}</code>
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
          <div className="grid gap-1 text-[10px] font-medium">
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
