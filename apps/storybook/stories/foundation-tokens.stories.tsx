import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  colorTokens,
  densityTokens,
  semanticColorTokens,
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
        <h2>Density</h2>
        <pre>{JSON.stringify(densityTokens, null, 2)}</pre>
      </section>
      <section className="erp-demo-panel">
        <h2>Status Tokens</h2>
        <pre>{JSON.stringify(statusTokens, null, 2)}</pre>
      </section>
      <section className="erp-demo-panel">
        <h2>Scales</h2>
        <pre>{JSON.stringify({ colorTokens: colorTokens.neutral, spacingTokens, typographyTokens, zIndexTokens }, null, 2)}</pre>
      </section>
    </div>
  ),
};
