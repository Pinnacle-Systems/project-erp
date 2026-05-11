# @erp-ui-platform/capability-contracts

## Purpose

Defines shared type shapes for action availability, shell, role, workflow state, document state, and risk.

## What Belongs Here

- Capability context types, result types, shell identifiers, risk levels, availability states, and reason-code shapes.

## What Does Not Belong Here

- UI rendering.
- Client-specific permission evaluation.
- Business workflow engines.
- Client role mappings.

## Allowed Dependencies

- Type-only utility packages with no UI dependency, if approved in the future.

## Examples of Future Exports

- `CapabilityContext`
- `CapabilityResult`
- `DocumentCapabilities`
- `RiskLevel`
