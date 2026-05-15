# Screen Implementation Checklist

Quick reference for product-screen implementers and Codex prompts before building new ERP screens.

---

## Desktop Screens

### Surface layering
- [ ] Outer app shell uses `--erp-color-app-bg` (or `--erp-surface-panel`).
- [ ] Page/workspace content area uses `--erp-color-page-bg` (or `--erp-surface-page`).
- [ ] Cards, forms, and tables use `--erp-color-surface` / `--erp-color-surface-raised` (or `--erp-surface-card` / `--erp-surface-raised`).
- [ ] Table headers, filter bars, and subdued panels use `--erp-color-surface-muted`.

### Components before custom styling
- [ ] Use platform card/panel primitives before writing `rounded border bg-…` by hand.
- [ ] Use `<Button>` with the correct `variant` and `density` rather than styled `<div>` click targets.
- [ ] Use `<StatusBadge>` with `tone` for all document/workflow states; never hardcode green, yellow, red, or blue.
- [ ] Use `<PageHeader>` for document title, subtitle, and status badge placement.

### Token discipline
- [ ] No raw Tailwind palette classes (`bg-white`, `text-neutral-900`, `bg-blue-600`, `text-red-600`, etc.) in reusable components. Use semantic `--erp-*` variables instead.
- [ ] Status-tone surfaces use `--erp-status-{tone}-bg`, `--erp-status-{tone}-fg`, `--erp-status-{tone}-border`.
- [ ] Focus and disabled states use `--erp-focus-ring`, `--erp-focus-ring-width`, `--erp-focus-ring-offset`, `--erp-disabled-opacity`.

### KPI cards
- [ ] Every KPI card has: a short label (`--erp-text-subtle` / `text-xs uppercase`), a hero value (`--erp-text-primary` / `text-2xl+`), optional helper or trend text (`--erp-text-muted`), and an optional soft icon chip (`--erp-color-primary-soft` background).

### Tables
- [ ] Table lives inside a card container with `--erp-shadow-card` elevation.
- [ ] Header row uses `--erp-surface-muted` background with `--erp-text-subtle` column labels.
- [ ] Row dividers use `--erp-border-muted` (soft separator, not `--erp-border-default`).
- [ ] State columns use `<StatusBadge>`, not plain text.

### Density

- [ ] Desktop ERP screens default to `compact` density. This covers data-entry forms, editable grids, transaction lines, approval queues, reconciliation screens, and operational dashboards.
- [ ] Use `comfortable` only for exceptions where readability outweighs throughput: low-density overview pages, onboarding or help screens, demos, and marketing-facing views.
- [ ] Use `touch` only for mobile/tablet-first workflows (see Mobile Screens below).
- [ ] Density is set on `<ThemeProvider>` or a nested `<ThemeProvider density="…">` — not via ad-hoc padding overrides on individual elements.
- [ ] Density must not control permissions, workflow behavior, field visibility, or route availability.

### Separation of concerns
- [ ] Business behavior (workflow transitions, permissions, validation, field visibility) is not encoded in theme tokens or visual components.
- [ ] Theme and component changes remain in `packages/` — product logic stays in the app.

---

## Mobile Screens

### Starting point
- [ ] Before building, browse **Storybook → Patterns/Mobile** for canonical screen anatomy and composition rules.

### Shell
- [ ] Every task screen is wrapped in `<MobileTaskShell>` (title, subtitle, backLabel, status badge, bottomBar slot).
- [ ] One task per screen — do not collapse multi-tab desktop workflows into a single scrolling form.

### Summary cards
- [ ] Use `<MobileApprovalSummaryCard>` for approval tasks: badge + doc type in the header row, doc number secondary, **amount as the visual hero** (`text-2xl font-bold`), requester as muted detail.
- [ ] Use `<MobileDocumentSummary>` for review/read-only tasks: context fields in the grid, the most operationally important number in the `totals` slot, individual items in the `lines` slot.
- [ ] The approver/reviewer must know what they are acting on before reaching the timeline or comments — no scrolling required.

### Timeline and comments
- [ ] Use `<MobileApprovalTimeline>` for approval-chain progress; never render step data as plain text rows.
- [ ] Use `<MobileApprovalCommentList>` for reviewer/requester notes; never render comments as a flat text stream inside the summary card.

### Device-native workflows
- [ ] Use `<ScannerCapturePlaceholder>` (or a real scanner integration built on the same shell) for document-capture tasks.
- [ ] Scanner tasks use `<MobileTaskShell>` directly without a `bottomBar` — the capture placeholder owns its own action area.

### Primary decisions
- [ ] All primary actions (Approve / Reject / Changes) are placed in `<MobileBottomActionBar>` via the `bottomBar` slot, not inline in the scrollable content area.
- [ ] `<MobileBottomActionBar>` applies touch density automatically — do not set `density="touch"` on individual buttons inside it.

### What not to do
- [ ] Do not compress desktop tables or multi-field forms into mobile screens.
- [ ] Do not use density to show or hide features, change workflow permissions, or alter business rules.
- [ ] Do not use raw Tailwind palette colors; use the same `--erp-*` semantic tokens as desktop.

---

## Polish without decoration

Polish comes from composition discipline, not one-off styling. Every visual refinement should be expressible as a reusable pattern that works across all three client themes.

### One visual hero per screen

- [ ] Every screen has one number, label, or state that the user must act on first — make it `text-2xl` or larger with `font-bold`. Keep everything else secondary.
- [ ] Use the document summary card header row (icon chip + doc type + badge) to establish identity before the hero value. The user should not need to scroll to understand what they are acting on.

### Icon chips for quick recognition

- [ ] Use `<IconChip>` from `@erp-ui-platform/app-components` alongside KPI values, section headers, empty states, and document summary cards.
- [ ] Choose `tone` to match the ERP state (`warning` for pending, `success` for approved, `danger` for overdue, `info` for informational, `neutral` for secondary context). Do not choose tone for decoration.
- [ ] `size="sm"` for inline use next to labels or in card header rows. `size="md"` for standalone KPI and section identity chips.

### Soft accents, not decoration

- [ ] Use `--erp-color-primary-soft`, `--erp-surface-selected`, and `--erp-status-*-bg` for accent surfaces that tie visual emphasis to document state. These adapt automatically across client themes.
- [ ] Do not apply accent backgrounds to elements whose state has not changed — accent surfaces are state indicators, not design decoration.

### Card composition before custom layouts

- [ ] Use the KPI card pattern (label → hero value → trend/helper) before writing a custom stat block.
- [ ] Use the document summary card pattern (chip + type + badge header / hero value / field grid / helper text) for any document identity surface on desktop.
- [ ] Use `<SectionHeader>` (title, optional label, optional description, optional action) before writing free-form heading markup.
- [ ] Use the dense table card pattern (card shell / muted header / `--erp-border-muted` row dividers / `<StatusBadge>` state column / footer total) for any tabular list on desktop.
- [ ] Use `<EmptyState>`, `<ErrorState>`, and `<LoadingState>` from `@erp-ui-platform/app-components` for all placeholder states. Never leave a loading or empty region unstyled.

### Motion clarifies, does not decorate

- [ ] Use `--erp-motion-fast` (120 ms) for hover and focus transitions on interactive elements (buttons, nav items, badge chips).
- [ ] Use `--erp-motion-base` (200 ms) for content transitions: dialogs appearing, panels sliding, cards expanding.
- [ ] Use `--erp-motion-slow` (350 ms) only for large surface transitions (page-level navigation, modal overlays).
- [ ] Do not animate dense tables, editable grids, or rapidly updating data values. Motion in data-dense areas creates visual noise and impairs scanning.
- [ ] Use `--erp-ease-standard` for most transitions. Use `--erp-ease-emphasized` only for deliberate deceleration (e.g., a confirmation dialog settling into place).

### Preserved constraints

- [ ] Desktop compact density is unchanged — polish is applied in the card layer (shadow, radius, accent surface), not by loosening spacing.
- [ ] Visual state (accent background on a total card, warning text on an overdue amount) uses semantic tokens only. Do not encode workflow permissions or field visibility in a token's value.
- [ ] All polish patterns work across `default`, `clientA`, and `clientB` themes without overrides.

See Storybook → **Patterns/Visual Polish** for live examples of all patterns above.

---

## Reference

| Resource | Location |
| --- | --- |
| Theme tokens and CSS variables | `packages/theme/src/theme.css` |
| Token vocabulary and naming rules | `docs/design-system/theming.md` |
| Mobile pattern governance | `docs/design-system/mobile-patterns.md` |
| Mobile Storybook stories | `apps/storybook/stories/mobile-patterns.stories.tsx` |
| Mobile composition grammar and rules | Storybook → **Patterns/Mobile → Composition Primer** |
| Mobile approval example | Storybook → **Patterns/Mobile → Approval Task** |
| Desktop approval example | Storybook → **Patterns/Approval** |
| Package boundary rules | `docs/design-system/package-boundaries.md` |
