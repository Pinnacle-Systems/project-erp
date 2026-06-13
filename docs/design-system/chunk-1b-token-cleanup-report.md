# Chunk 1B — Token Cleanup Report

## Theme Mappings Reviewed
- **Colors:** Core ERP colors are consistently mapped in `theme.css` via native Tailwind v4 `@theme` mappings (e.g., `--color-primary`, `--color-surface`, `--color-background`, `--color-border-subtle`). 
- **Radius & Shadows:** Evaluated semantics to ensure components fall logically into `control`, `card`, `panel`, and `popover` namespaces rather than raw CSS bracket values.
- **Typography & Sizing:** Ensured sizes like `text-control` and `h-control` accurately mirror the design system expectations while functioning seamlessly as Tailwind utilities.

## Tailwind-Merge Findings
- **Issue:** The `text-control` custom font size was initially being overridden by standard text color classes (e.g. `text-slate-900`) because `tailwind-merge` categorizes `text-*` as color values unless explicitly configured otherwise.
- **Resolution:** Updated `packages/primitives/src/lib/utils.ts` with `extendTailwindMerge` to properly register custom sizes (`text-control`, `text-label`, `text-data`) under the `font-size` classGroup. Shadows (`shadow-control`, etc.) and radiuses were also explicitly added to avoid collision stripping.

## Remaining Bracket Variable Classes
The following token classes retain the raw bracket syntax, deliberately deferred because they are hyper-specific, component-internal states or relate to architectural layouts that will be refactored in Chunk 2:

### Acceptable Deferred / Component-Specific Tokens
- **Statuses / Badges:** `bg-[var(--erp-status-draft-bg)]`, `text-[var(--erp-status-success-fg)]`, etc. These permutations are vast and apply solely to status-driven subcomponents.
- **Form Controls:** `border-[var(--erp-form-field-border)]`, `text-[var(--erp-form-field-help-text-color)]`, `bg-[var(--erp-validation-error-bg)]`.
- **Layout & Sizing Intents:** `w-[var(--erp-size-intent-hug)]`, `w-[var(--erp-size-intent-fill)]`, `w-[var(--erp-control-width-md)]`. These are intentionally deferred until the creation of `packages/layout` in Chunk 2.
- **App Shell Parameters:** `h-[var(--erp-shell-workspace-tabs-height)]`.

### Tokens Cleaned / Handled
- Generic surface definitions (`bg-[var(--erp-color-surface)]`, `border-[var(--erp-border-default)]`) were safely migrated to `bg-surface` and `border-border` respectively in primitive boundaries.

## Visual Risks
No visual risks are introduced. Component states, interactions, and base visual design are preserved by pointing standard Tailwind utilities directly to the baseline CSS variables defined by the design system.

## Validation
- `pnpm check`: Passed successfully.
- `pnpm build-storybook`: Passed successfully.

**Recommendation:** It is safe to proceed to Chunk 2 — Layout Primitives Package.
