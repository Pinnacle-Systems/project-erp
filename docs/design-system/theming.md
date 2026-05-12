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

- Use `bg-[var(--erp-color-surface)]`, `text-[var(--erp-color-foreground)]`, `border-[var(--erp-color-border)]`.
- Use `bg-[var(--erp-color-primary)]` for primary actions.
- Use `--erp-status-*` variables for generic document or workflow tones such as draft, submitted, approved, rejected, posted, and cancelled.
- Use `--erp-focus-ring`, `--erp-focus-ring-width`, `--erp-focus-ring-offset`, and `--erp-disabled-opacity` for accessible interaction states.
- Keep existing short aliases like `--erp-bg`, `--erp-fg`, and `--erp-accent` only for compatibility while migrating.

Avoid hardcoded reusable component classes such as `bg-white`, `text-neutral-900`, `border-neutral-200`, `bg-blue-600`, or `text-red-600` unless the color is part of a non-theme visual asset.

## Density

Density changes interaction rhythm, not business behavior. The provider sets variables such as `--erp-control-height`, `--erp-control-padding-x`, `--erp-field-gap`, `--erp-page-padding`, `--erp-grid-row-height`, `--erp-toolbar-height`, and `--erp-mobile-bottom-bar-height`.

Use `compact` for dense desktop workflows, `comfortable` as the default, and `touch` for mobile or tablet-first screens.

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

## Client Branding

Client apps should choose one approved platform theme name and density preference at the application shell. If a client needs a new brand theme, add it to `packages/theme` as semantic tokens and keep business terminology out of token names.

Client apps still own logos, route structure, permissions, workflow configuration, API integration, and validation rules.

## Migration

When migrating platform components, replace obvious raw color classes with semantic variables first in primitives, app components, and shells. Keep changes scoped and test Storybook after each group. Prefer aliases only where a package has not yet moved to the full semantic variable names.
