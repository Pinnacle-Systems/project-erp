# @erp-ui-platform/layout-shells

## Purpose

Defines shared shell layout abstractions for application frames, content regions, navigation contracts, and workspace contracts.

## What Belongs Here

- App frame primitives, navigation region contracts, content regions, workspace tab contracts, toolbar placement, and shared shell abstractions.

## What Does Not Belong Here

- Client route definitions.
- Module route trees.
- Client navigation configuration.
- Business workflow decisions.
- Route computation logic.

## Shared Contracts

The package exports generic navigation and workspace types:

- `BreadcrumbItem`: hierarchy or location for the active work item.
- `NavigationItem`: side navigation and module navigation entries.
- `WorkspaceTabStatus`: generic tab status values, `clean`, `dirty`, `saving`, and `error`.
- `WorkspaceTab`: open desktop work item metadata.

These contracts are business-neutral. They do not encode invoice-specific behavior, module-specific rules, or route computation.

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
