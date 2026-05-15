# Theming

The ERP UI platform theme controls visual identity and interaction comfort across reusable packages. It owns named brand themes, density, semantic CSS variables, status tones, focus tokens, shape, shadow, and typography variables.

Theme does not own business rules, permissions, workflow transitions, approval logic, field visibility, route availability, validation policy, or client-specific document meaning.

## Provider

Use `ThemeProvider` from `@erp-ui-platform/theme` near the app shell or Storybook preview.

```tsx
import { ThemeProvider } from "@erp-ui-platform/theme";
import "@erp-ui-platform/theme/theme.css";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme="clientA" density="comfortable" colorMode="light">
      {children}
    </ThemeProvider>
  );
}
```

Supported named themes are `default`, `clientA`, and `clientB`. Supported densities are `compact`, `comfortable`, and `touch`.

`colorMode` accepts `light`, `dark`, and `system` so app APIs can stabilize early. Only `light` is production-supported today. `dark` and `system` are deferred until the platform has audited contrast, charts, overlays, and client branding assets.

## CSS Variables

Components should use semantic variables rather than raw Tailwind colors:

- Use `bg-[var(--erp-color-app-bg)]` for the outer app shell.
- Use `bg-[var(--erp-color-page-bg)]` for page/workspace content.
- Use `bg-[var(--erp-color-surface)]`, `bg-[var(--erp-color-surface-raised)]`, `text-[var(--erp-color-foreground)]`, and `border-[var(--erp-color-border)]`.
- Use `bg-[var(--erp-color-primary)]` for primary actions.
- Use `--erp-status-*-bg`, `--erp-status-*-fg`, and `--erp-status-*-border` variables for generic document or workflow tones such as draft, submitted, approved, rejected, posted, cancelled, pending, warning, success, danger, and info.
- Use `--erp-focus-ring`, `--erp-focus-ring-width`, `--erp-focus-ring-offset`, and `--erp-disabled-opacity` for accessible interaction states.
- Keep existing short aliases like `--erp-bg`, `--erp-fg`, and `--erp-accent` only for compatibility while migrating.

Avoid hardcoded reusable component classes such as `bg-white`, `text-neutral-900`, `border-neutral-200`, `bg-blue-600`, or `text-red-600` unless the color is part of a non-theme visual asset.

## Component Token Vocabulary

Reusable platform components (packages under `packages/`) use a stable set of component-layer semantic tokens. These are defined in `theme.css` alongside the `--erp-color-*` design tokens and carry the same effective values. They are the correct names for component authoring — not temporary migration aliases.

### Surface backgrounds

| Token | Semantic meaning | Equivalent `--erp-color-*` |
| --- | --- | --- |
| `--erp-surface-page` | Page and workspace content area | `--erp-color-page-bg` |
| `--erp-surface-card` | Card, form, and table surface | `--erp-color-surface` |
| `--erp-surface-raised` | Elevated card surface (above page) | `--erp-color-surface-raised` |
| `--erp-surface-panel` | Sidebar, header, and panel surface | `--erp-color-surface` |
| `--erp-surface-muted` | Subdued surface: table headers, filter bars | `--erp-color-surface-muted` |
| `--erp-surface-inverse` | Inverse (dark) surface, e.g. status bar | — |
| `--erp-surface-selected` | Selected/highlighted row or item | `--erp-color-surface-accent` |

### Foreground / text

| Token | Semantic meaning | Equivalent `--erp-color-*` |
| --- | --- | --- |
| `--erp-text-primary` | Primary body text | `--erp-color-foreground` |
| `--erp-text-secondary` | Secondary, less prominent text | — |
| `--erp-text-muted` | Muted hint text and metadata | `--erp-color-foreground-muted` |
| `--erp-text-subtle` | Subtle field labels and captions | `--erp-color-foreground-subtle` |
| `--erp-text-inverse` | Text on inverse surfaces | `--erp-color-foreground-inverse` |
| `--erp-text-link` | Interactive link color | — |
| `--erp-text-danger` | Danger / error foreground | — |
| `--erp-text-warning` | Warning foreground | — |
| `--erp-text-success` | Success foreground | — |
| `--erp-text-info` | Info foreground | — |

### Borders

| Token | Semantic meaning | Equivalent `--erp-color-*` |
| --- | --- | --- |
| `--erp-border-default` | Standard border | `--erp-color-border` |
| `--erp-border-muted` | Soft separator | `--erp-color-border-muted` |
| `--erp-border-strong` | Emphasized border | `--erp-color-border-strong` |
| `--erp-border-focus` | Focus ring border | — |
| `--erp-border-selected` | Selected/active item border | — |

### Elevation and shape

| Token | Semantic meaning |
| --- | --- |
| `--erp-shadow-xs` | Minimal lift (inner borders, chips) |
| `--erp-shadow-sm` | Low elevation (dropdowns, tooltips) |
| `--erp-shadow-card` | Card elevation |
| `--erp-shadow-floating` | Overlay/modal elevation |
| `--erp-radius-card` | Card corner radius |
| `--erp-radius-control` | Input and button corner radius |
| `--erp-radius-panel` | Panel and sidebar corner radius |

Use `--erp-surface-*` and `--erp-text-*` tokens in reusable components. Use `--erp-color-*` names when authoring product screens or referencing the design token layer directly. Both sets are stable and defined in `packages/theme/src/theme.css`.

## Modern Light ERP Visual Language

Use layered surfaces instead of pure white everywhere. The outer shell should use `--erp-color-app-bg`; page and workspace content should use `--erp-color-page-bg`; cards, forms, and tables should use `--erp-color-surface` or `--erp-color-surface-raised`.

Use `--erp-color-surface-muted` for table headers, filter bars, subdued panels, and secondary containers. Use `--erp-color-surface-accent` and `--erp-color-primary-soft` sparingly for selected navigation, icon chips, KPI accents, and subtle highlights.

Use status tones only for state, not decoration. Reusable status badges should use the `--erp-status-*-bg`, `--erp-status-*-fg`, and `--erp-status-*-border` variables instead of hardcoded green, yellow, red, or blue classes.

Reusable components must not hardcode raw Tailwind palette colors when a semantic theme variable exists. Product screens should compose themed primitives and layout components instead of styling every surface directly.

Density changes rhythm, not meaning. Theme does not own workflow, permissions, validation policy, document semantics, field visibility, routes, or business rules.

## Density

Density changes interaction rhythm, not business behavior. The provider sets variables such as `--erp-control-height`, `--erp-control-padding-x`, `--erp-field-gap`, `--erp-page-padding`, `--erp-grid-row-height`, `--erp-toolbar-height`, and `--erp-mobile-bottom-bar-height`.

Use `compact` for desktop ERP screens (data-entry, editable grids, transaction lines, approval queues, dashboards). Use `comfortable` only for exceptions where readability outweighs throughput: overview pages, onboarding, help screens, and demos. Use `touch` for mobile or tablet-first screens.

## Nested Overrides

Nested providers inherit outer theme, density, and color mode by default. A local provider may override density without changing brand:

```tsx
<ThemeProvider theme="clientB" density="comfortable">
  <ThemeProvider density="compact">
    <InlineEditableGrid />
  </ThemeProvider>
</ThemeProvider>
```

Only override `theme` locally when a screen intentionally needs a separate visual identity. Do not use nested themes to express workflow state or permission state.

## Storybook

Storybook wraps all stories with the real `ThemeProvider` and imports `@erp-ui-platform/theme/theme.css`. The toolbar exposes client theme and density controls. The color mode toolbar currently exposes only `light`; dark and system modes remain documented deferred scope.

Use `Foundation/Themes` to compare named themes, densities, status tones, focus/disabled states, nested density overrides, transaction shells, and mobile approval surfaces.

Use `Patterns/Mobile` (`apps/storybook/stories/mobile-patterns.stories.tsx`) for mobile screen composition: approval tasks, scanner-assisted capture, and read-only review. See `docs/design-system/mobile-patterns.md` for the full governance rules.

## Client Branding

Client apps should choose one approved platform theme name and density preference at the application shell. If a client needs a new brand theme, add it to `packages/theme` as semantic tokens and keep business terminology out of token names.

Client apps still own logos, route structure, permissions, workflow configuration, API integration, and validation rules.

## Migration

When migrating platform components, replace obvious raw color classes with semantic variables first in primitives, app components, and shells. Keep changes scoped and test Storybook after each group. Prefer aliases only where a package has not yet moved to the full semantic variable names.
