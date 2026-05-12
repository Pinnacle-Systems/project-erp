import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  colorTokens,
  densityTokens,
  radiusTokens,
  semanticColorTokens,
  shadowTokens,
  spacingTokens,
  statusTokens,
  typographyTokens,
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
      <code className="text-[10px] opacity-80">{status}</code>
    </div>
  );
};

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
            {Object.entries(zIndexTokens).map(([step, value]) => (
              <TokenRow key={step} label={`z.${step}`} value={value} />
            ))}
          </div>
        </div>
      </section>
    </div>
  ),
};
