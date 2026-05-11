# @erp-ui-platform/config-runtime

## Purpose

Provides business-neutral configuration loading, merging, validation, and resolution helpers.

## What Belongs Here

- Config schema helpers, merge behavior, config validation errors, resolution helpers, and extension point registration contracts.

## What Does Not Belong Here

- Client configuration values.
- Client business rules.
- Client permissions mapping.
- Client-specific feature flag values.
- Deployment configuration.

## Allowed Dependencies

- `@erp-ui-platform/capability-contracts`
- Type-only utility packages or schema validation libraries if approved in the future.

## Examples of Future Exports

- `ConfigSchema`
- `mergeConfig`
- `ConfigValidationError`
- `ExtensionRegistry`
