# @erp-ui-platform/layout-shells

## Purpose

Defines shared shell layout abstractions for application frames and content regions.

## What Belongs Here

- App frame primitives, navigation region contracts, content regions, toolbar placement, and shared shell abstractions.

## What Does Not Belong Here

- Client route definitions.
- Module route trees.
- Client navigation configuration.
- Business workflow decisions.

## Allowed Dependencies

- `@erp-ui-platform/app-components`
- `@erp-ui-platform/primitives`
- `@erp-ui-platform/tokens`
- `@erp-ui-platform/capability-contracts` where needed.

## Examples of Future Exports

- `AppFrame`
- `ShellContentRegion`
- `NavigationRegion`
- `ShellLayoutSlots`
