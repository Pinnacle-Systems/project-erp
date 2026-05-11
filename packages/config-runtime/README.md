# @erp-ui-platform/config-runtime

## Purpose

Provides business-neutral configuration loading, merging, validation, and resolution helpers.

The base platform definition is authoritative. Client config may only override explicitly permitted fields.

## What Belongs Here

- Config schema helpers, merge behavior, config validation errors, resolution helpers, and extension point registration contracts.
- Generic merge utilities for client customization.
- Override permission contracts.
- Safe default application.
- Warning collection for invalid client customization.

## What Does Not Belong Here

- Client configuration values.
- Client business rules.
- Client permissions mapping.
- Client-specific feature flag values.
- Deployment configuration.
- Business rule evaluation.

## Allowed Dependencies

- None currently.

## Current Exports

- `ConfigSource`
- `ConfigPatch`
- `ConfigMergeResult`
- `ConfigValidationIssue`
- `OverridePermission`
- `ConfigurableProperty`
- `mergeConfig`
- `validateConfigPatch`
- `collectConfigWarnings`
- `applySafeDefaults`

## Example

```ts
import { mergeConfig } from "@erp-ui-platform/config-runtime";

const result = mergeConfig(baseDefinition, clientPatch, [
  { path: "title", allowed: true, expectedType: "string" },
  { path: "fields.taxCode.required", allowed: false, invariant: true },
]);

console.log(result.config);
console.log(result.issues);
```

Invalid platform or base definitions should fail fast. Invalid client customization should fail gracefully where safe, preserving the authoritative base value and returning warnings.
