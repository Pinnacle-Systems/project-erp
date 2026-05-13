import type { Meta, StoryObj } from "@storybook/react-vite";
import { sizingTokens } from "@erp-ui-platform/tokens";
import {
  Badge,
  Button,
  SelectField,
  SelectItem,
  TextField,
} from "@erp-ui-platform/primitives";
import { DesktopActionBar } from "@erp-ui-platform/desktop-patterns";
import { MobileBottomActionBar } from "@erp-ui-platform/mobile-patterns";

const meta = {
  title: "Foundation/Sizing",
} satisfies Meta;

export default meta;

type Story = StoryObj;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-semibold text-[var(--erp-text-primary)]">{children}</h2>
);

const TokenRow = ({
  label,
  value,
  variable,
}: {
  label: string;
  value: string;
  variable: string;
}) => (
  <div className="grid grid-cols-[7rem_minmax(8rem,1fr)_minmax(8rem,auto)] items-center gap-3 border-b border-[var(--erp-border-default)] px-3 py-2 text-xs last:border-0">
    <span className="font-medium text-[var(--erp-text-primary)]">{label}</span>
    <code className="text-[var(--erp-text-muted)]">{variable}</code>
    <div className="flex justify-end">
      <span
        className="block h-5 rounded bg-[var(--erp-surface-selected)] ring-1 ring-[var(--erp-border-selected)]"
        style={{ width: value }}
      />
    </div>
  </div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <section className="rounded-md border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] p-4">
    {children}
  </section>
);

// ── Governance doc helpers ────────────────────────────────────────────────────

const Chip = ({
  tone,
  children,
}: {
  tone: "good" | "avoid" | "note" | "ok";
  children: React.ReactNode;
}) => {
  const styles = {
    good: "bg-green-50 text-green-700 border-green-200",
    avoid: "bg-red-50 text-red-700 border-red-200",
    note: "bg-blue-50 text-blue-700 border-blue-200",
    ok: "bg-amber-50 text-amber-700 border-amber-200",
  }[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
};

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="overflow-x-auto rounded border border-[var(--erp-border-default)] bg-[var(--erp-surface-page)] px-3 py-2.5 text-xs font-mono text-[var(--erp-text-secondary)] whitespace-pre">
    {children.trim()}
  </pre>
);

const ExBlock = ({
  tone,
  label,
  code,
  children,
}: {
  tone: "good" | "avoid" | "note" | "ok";
  label: string;
  code?: string;
  children?: React.ReactNode;
}) => (
  <div className="grid gap-1.5">
    <Chip tone={tone}>{label}</Chip>
    {children && (
      <div className="rounded border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] p-3">
        {children}
      </div>
    )}
    {code && <CodeBlock>{code}</CodeBlock>}
  </div>
);

const Rule = ({
  n,
  title,
  summary,
  children,
}: {
  n: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}) => (
  <section className="grid gap-3 rounded-md border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] p-4">
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-muted)]">
        Rule {n}
      </p>
      <h2 className="text-sm font-semibold text-[var(--erp-text-primary)]">{title}</h2>
      <p className="mt-0.5 text-xs text-[var(--erp-text-muted)]">{summary}</p>
    </div>
    <div className="grid gap-3">{children}</div>
  </section>
);

export const Overview: Story = {
  render: () => (
    <div className="grid gap-4 text-[var(--erp-text-primary)]">
      <div className="grid gap-1">
        <h1 className="text-base font-semibold">Sizing Intent</h1>
        <p className="max-w-3xl text-sm text-[var(--erp-text-muted)]">
          Atomic actions should hug by default, and form controls should use named
          control widths unless the layout explicitly asks them to fill. Layout
          primitives should decide when children fill available space. Mobile action
          areas may promote fill width for touch usability.
        </p>
      </div>

      <Panel>
        <SectionTitle>Sizing Intent Tokens</SectionTitle>
        <div className="mt-3 rounded-md border border-[var(--erp-border-default)]">
          {Object.entries(sizingTokens.intent).map(([key, value]) => (
            <TokenRow
              key={key}
              label={key}
              value={value}
              variable={`--erp-size-intent-${key}`}
            />
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionTitle>Control Width Tokens</SectionTitle>
        <div className="mt-3 rounded-md border border-[var(--erp-border-default)]">
          {Object.entries(sizingTokens.control).map(([key, value]) => (
            <TokenRow
              key={key}
              label={key}
              value={value}
              variable={`--erp-control-width-${key}`}
            />
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionTitle>Component Examples</SectionTitle>
        <div className="mt-3 grid gap-4">
          <div className="grid gap-2 rounded-md border border-[var(--erp-border-default)] p-3">
            <p className="text-xs font-semibold text-[var(--erp-text-muted)]">
              Button: hug vs fill
            </p>
            <div className="flex flex-col gap-2">
              <Button width="hug">Hug content</Button>
              <Button width="fill">Fill container</Button>
            </div>
          </div>

          <div className="grid gap-2 rounded-md border border-[var(--erp-border-default)] p-3">
            <p className="text-xs font-semibold text-[var(--erp-text-muted)]">
              TextField: fixed token width vs fill
            </p>
            <TextField width="md" label="Medium" placeholder="12rem" />
            <TextField width="fill" label="Fill" placeholder="100%" />
          </div>

          <div className="grid gap-2 rounded-md border border-[var(--erp-border-default)] p-3">
            <p className="text-xs font-semibold text-[var(--erp-text-muted)]">
              SelectField: fixed token width vs fill
            </p>
            <SelectField width="sm" label="Small" placeholder="Choose">
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="posted">Posted</SelectItem>
            </SelectField>
            <SelectField width="fill" label="Fill" placeholder="Choose">
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="posted">Posted</SelectItem>
            </SelectField>
          </div>
        </div>
      </Panel>

      <Panel>
        <SectionTitle>Layout Governance</SectionTitle>
        <div className="mt-3 grid gap-4">
          <div className="overflow-hidden rounded-md border border-[var(--erp-border-default)]">
            <DesktopActionBar
              left="Desktop action regions own expansion."
              secondary={<Button width="hug">Import</Button>}
              primary={<Button width="hug" variant="default">New</Button>}
            />
          </div>
          <div className="max-w-md overflow-hidden rounded-3xl border border-[var(--erp-border-default)]">
            <MobileBottomActionBar
              actions={[
                { id: "save", label: "Save", variant: "default" },
                { id: "review", label: "Review", variant: "secondary" },
              ]}
              helperText="Mobile action bars promote fill for touch targets."
            />
          </div>
        </div>
      </Panel>
    </div>
  ),
};

export const Governance: Story = {
  name: "Governance Rules",
  render: () => (
    <div className="grid max-w-3xl gap-6 text-[var(--erp-text-primary)]">
      <div className="grid gap-1">
        <h1 className="text-base font-semibold">Sizing Governance</h1>
        <p className="text-sm text-[var(--erp-text-muted)]">
          Rules for expressing sizing intent through the design system API instead of
          arbitrary wrapper classes or global CSS. Follow these rules to prevent
          regressions where controls get wrapped in one-off width containers.
        </p>
      </div>

      {/* ── Rule 1 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="1"
        title="Atomic controls hug by default"
        summary="Buttons, badges, chips, and compact actions should hug their content unless a layout context explicitly requires fill."
      >
        <ExBlock
          tone="good"
          label="Good"
          code={`<Button width="hug">Approve</Button>\n<Badge width="hug">Pending</Badge>`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Button width="hug">Approve</Button>
            <Badge width="hug">Pending</Badge>
          </div>
        </ExBlock>
        <ExBlock
          tone="avoid"
          label="Avoid"
          code={`<Button className="w-full">Approve</Button>`}
        />
        <ExBlock
          tone="note"
          label="Note"
          code={`// Button default is already width="hug" — the prop is explicit for clarity\n// in pattern components or when mixing intents in the same row.`}
        />
      </Rule>

      {/* ── Rule 2 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="2"
        title="Layout primitives decide when children fill"
        summary="Reusable controls should not assume they own all horizontal space. The container — not the control — owns the decision to stretch."
      >
        <ExBlock
          tone="good"
          label="Good — desktop: buttons hug, bar owns expansion"
          code={`<DesktopActionBar\n  left="3 selected"\n  secondary={<Button width="hug">Import</Button>}\n  primary={<Button width="hug">New</Button>}\n/>`}
        >
          <div className="overflow-hidden rounded border border-[var(--erp-border-default)]">
            <DesktopActionBar
              left="3 selected"
              secondary={<Button width="hug">Import</Button>}
              primary={<Button width="hug" variant="default">New</Button>}
            />
          </div>
        </ExBlock>
        <ExBlock
          tone="good"
          label="Good — mobile: fill + flex-1 for equal-width touch targets"
          code={`<MobileBottomActionBar\n  actions={[\n    { id: "cancel", label: "Cancel", variant: "secondary" },\n    { id: "save",   label: "Save",   variant: "default"   },\n  ]}\n/>`}
        >
          <div className="max-w-sm overflow-hidden rounded-3xl border border-[var(--erp-border-default)]">
            <MobileBottomActionBar
              actions={[
                { id: "cancel", label: "Cancel", variant: "secondary" },
                { id: "save", label: "Save", variant: "default" },
              ]}
            />
          </div>
        </ExBlock>
        <ExBlock
          tone="note"
          label="Note on flex-1"
          code={`// width="fill" expresses the button's sizing intent.\n// className="flex-1" is layout-owned: it drives equal-width distribution\n// inside a flex parent. Both may coexist — do not remove flex-1 just\n// because a width prop exists.\n<Button width="fill" className="flex-1">Save</Button>`}
        />
      </Rule>

      {/* ── Rule 3 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="3"
        title="Use named control widths for form controls"
        summary="Form controls prefer tokenized widths (xs → xl) over arbitrary one-off wrapper elements. fill remains appropriate for stacked forms and full-width regions."
      >
        <ExBlock
          tone="good"
          label="Good"
          code={`<TextField  width="md"   label="Customer" />\n<SelectField width="sm"   label="Status"   />\n<TextField  width="fill" label="Notes"    />`}
        >
          <div className="grid gap-2">
            <TextField width="md" label="Customer" placeholder="12 rem" />
            <SelectField width="sm" label="Status" placeholder="All statuses">
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="posted">Posted</SelectItem>
            </SelectField>
            <TextField width="fill" label="Notes" placeholder="100%" />
          </div>
        </ExBlock>
        <ExBlock
          tone="avoid"
          label="Avoid — wrapper div as a sizing shim"
          code={`<div className="w-36 shrink-0">\n  <SelectField label="Status" />\n</div>\n\n<div className="w-56 shrink-0">\n  <TextField label="Search" />\n</div>`}
        />
        <ExBlock
          tone="good"
          label="Replacement"
          code={`<SelectField width="sm"   label="Status" />\n<TextField  width="md"   label="Search" />`}
        />
        <ExBlock
          tone="note"
          label="Control width reference"
          code={`xs  = ${sizingTokens.control.xs}   (96 px)\nsm  = ${sizingTokens.control.sm}  (128 px)\nmd  = ${sizingTokens.control.md}  (192 px)\nlg  = ${sizingTokens.control.lg}  (256 px)\nxl  = ${sizingTokens.control.xl}  (384 px)`}
        />
      </Rule>

      {/* ── Rule 4 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="4"
        title="Desktop / tablet action buttons usually hug"
        summary="Action rows in desktop page headers, toolbars, and review bars should use intrinsic sizing. Avoid stretching desktop action buttons unless the design explicitly requires it."
      >
        <ExBlock
          tone="good"
          label="Good"
          code={`<PageHeader\n  title="Invoices"\n  primaryAction={\n    <Button width="hug">Create Invoice</Button>\n  }\n  secondaryActions={\n    <Button width="hug">Export</Button>\n  }\n/>`}
        />
        <ExBlock
          tone="avoid"
          label="Avoid"
          code={`// Do not stretch desktop actions to fill the header row.\n<Button className="w-full">Create Invoice</Button>`}
        />
      </Rule>

      {/* ── Rule 5 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="5"
        title="Mobile bottom actions may fill"
        summary="Mobile bottom bars and sheet actions may use full-width or equal-width buttons for touch usability. This is intentional — do not correct mobile fill to desktop-style hug."
      >
        <ExBlock
          tone="good"
          label="Good — bottom bar with fill buttons"
          code={`<MobileBottomActionBar\n  actions={[\n    { id: "cancel", label: "Cancel", variant: "secondary" },\n    { id: "save",   label: "Save",   variant: "default"   },\n  ]}\n/>\n\n// When rendering buttons manually inside a mobile bottom bar:\n<Button width="fill" className="flex-1">Cancel</Button>\n<Button width="fill" className="flex-1">Save</Button>`}
        >
          <div className="max-w-sm overflow-hidden rounded-3xl border border-[var(--erp-border-default)]">
            <MobileBottomActionBar
              actions={[
                { id: "cancel", label: "Cancel", variant: "secondary" },
                { id: "save", label: "Save", variant: "default" },
              ]}
              helperText="Mobile fill is intentional — do not change to hug."
            />
          </div>
        </ExBlock>
        <ExBlock
          tone="avoid"
          label="Avoid — applying desktop hug inside a mobile touch zone"
          code={`// Incorrect: hug buttons in a full-width mobile action bar\n// produce narrow, hard-to-tap targets.\n<Button width="hug">Save</Button>`}
        />
      </Rule>

      {/* ── Rule 6 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="6"
        title="Container sizing is separate from control sizing"
        summary="Layout containers use Tailwind layout utilities. These are not replaceable with component width props and must not be removed."
      >
        <ExBlock
          tone="ok"
          label="Acceptable — layout-owned"
          code={`// min-w-0 prevents flex overflow; flex-1 lets the container grow.\n// Do not replace with a component width prop.\n<div className="min-w-0 flex-1">\n  <ContentRegion />\n</div>\n\n// flex-1 on a Button is valid when the parent flex layout\n// needs equal-width distribution — keep it alongside width="fill".\n<Button width="fill" className="flex-1">Save</Button>`}
        />
        <ExBlock
          tone="avoid"
          label="Avoid — removing layout behavior thinking the width prop replaces it"
          code={`// Wrong: removing flex-1 breaks equal distribution in a flex row,\n// even when width="fill" is present.\n<Button width="fill">Save</Button>  {/* flex-1 removed — layout breaks */}`}
        />
      </Rule>

      {/* ── Rule 7 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="7"
        title="Global width CSS rules are forbidden"
        summary="Sizing must be expressed through component APIs, layout primitives, or deliberate container classes. Global rules that touch all buttons or inputs are prohibited."
      >
        <ExBlock
          tone="avoid"
          label="Never add"
          code={`/* Forbidden — affects every element */\n* { width: max-content; }\n\n/* Forbidden — overrides all buttons and inputs globally */\nbutton, input, select { width: max-content; }`}
        />
        <ExBlock
          tone="good"
          label="Instead, use the component API or a scoped container"
          code={`<Button width="hug">Save</Button>\n<TextField width="md" />\n\n{/* or scope via a container class when layout truly requires it */}\n<div className="w-full">\n  <Button width="fill">Continue</Button>\n</div>`}
        />
      </Rule>

      {/* ── Rule 8 ─────────────────────────────────────────────────────────── */}
      <Rule
        n="8"
        title="Grid / table sizing is out of scope"
        summary="Control sizing tokens govern atomic controls and form fields only. Data-density layouts have their own sizing systems."
      >
        <ExBlock
          tone="note"
          label="Out of scope — do not apply control sizing rules to:"
          code={`// Editable grid column widths\n// Table column sizing and scroll containers\n// Virtualized list regions\n// Shell / ContentRegion sizing\n// AppFrame layout proportions`}
        />
        <ExBlock
          tone="ok"
          label="Acceptable — control sizing inside a table cell action"
          code={`// A Button inside a table row action cell still hugs its content.\n<td>\n  <Button width="hug" density="compact">Edit</Button>\n</td>`}
        />
      </Rule>

      {/* ── Quick reference ─────────────────────────────────────────────────── */}
      <section className="rounded-md border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] p-4">
        <h2 className="text-sm font-semibold text-[var(--erp-text-primary)]">
          Quick Reference
        </h2>

        <div className="mt-3 grid gap-3">
          <ExBlock
            tone="good"
            label="Good"
            code={`<Button width="hug">Post Document</Button>\n<Button width="fill">Continue</Button>\n<TextField  width="md" />\n<SelectField width="sm" />\n<Badge width="hug">Ready</Badge>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Button width="hug">Post Document</Button>
              <Button width="fill">Continue</Button>
              <TextField width="md" label="Field" placeholder="md" />
              <SelectField width="sm" label="Status" placeholder="sm">
                <SelectItem value="draft">Draft</SelectItem>
              </SelectField>
              <Badge width="hug">Ready</Badge>
            </div>
          </ExBlock>

          <ExBlock
            tone="avoid"
            label="Avoid"
            code={`<div className="w-36">\n  <SelectField />\n</div>\n\n<Button className="w-full">Save</Button>\n\n<TextField className="w-56" />`}
          />

          <ExBlock
            tone="ok"
            label="Acceptable — layout-owned sizing"
            code={`// flex-1 drives equal-width distribution; keep it alongside width="fill"\n<Button width="fill" className="flex-1">Save</Button>\n\n// min-w-0 flex-1 is container layout, not control sizing\n<div className="min-w-0 flex-1">\n  <ContentRegion />\n</div>`}
          />
        </div>
      </section>
    </div>
  ),
};
