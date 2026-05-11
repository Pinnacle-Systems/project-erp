# ERP UI Platform

This repository contains a reusable ERP UI/UX behavior platform.

It provides shared interaction contracts, layout patterns, shell rules, workflow action behavior, validation display behavior, lookup behavior, editable grid behavior, and transaction/approval patterns for ERP-style applications.

The key boundary:

> This is a reusable ERP UI behavior platform, not a client business-rule repository.

## What This Repo Is

This repo is the shared front-end platform used by consuming client applications.

It owns:

- Design tokens.
- Primitive wrappers.
- Application components.
- ERP interaction patterns.
- Desktop, mobile, and tablet shell grammar.
- Transaction shell behavior.
- Editable grid behavior.
- Lookup/autofill contracts.
- Validation UI contracts and helpers.
- Workflow action contracts.
- Approval UI contracts and basic components.
- Capability contract shapes.
- Screen/config runtime helpers.
- Storybook, playground, and reference app foundations.

## What This Repo Is Not

This repo is not where client business truth lives.

It must not contain:

- GST posting rules.
- Pricing or tax calculations.
- Discount logic.
- Leave policy rules.
- Inventory allocation policy.
- Approval hierarchy.
- Client-specific fields.
- Client-specific workflows.
- Client-specific API integrations.
- Branding for a real client.
- Deployment configuration for a real client.

## Why It Exists

We build custom apps for multiple clients. Those apps need consistent ERP UX behavior, but each client has different business rules, workflows, integrations, permissions, and branding.

This platform lets client apps reuse proven UI behavior without forcing all clients into the same business model.

## Architecture Principles

- Build one product system, one domain model, one API layer, but device-specific experience shells.
- Optimize for workflow fitness, not feature parity.
- Share UI/UX behavior, contracts, and interaction grammar.
- Keep business rules in consuming client apps.
- Use slots, adapters, and contracts instead of hardcoded business logic.
- Enforce device boundaries through capability contracts, not hidden buttons alone.
- Avoid shared route definitions across shells.
- Treat UI behavior changes as versioned API changes.

## Shared Platform vs Client App

Shared platform:

```tsx
<TransactionShell />
<EditableGrid />
<LookupField />
<ApprovalPanel />
```

Client app:

```txt
sales invoice rules
pricing/tax calculations
approval hierarchy
API integration
branding
deployment
```

The platform owns how ERP screens behave. The client app owns what the business means.

## Package Structure

```txt
packages/
  tokens/
  primitives/
  app-components/
  layout-shells/
  desktop-patterns/
  mobile-patterns/
  transaction-shell/
  editable-grid/
  lookup/
  validation-ui/
  workflow-actions/
  approval-ui/
  document-ui/
  capability-contracts/
  screen-runtime/
  config-runtime/

apps/
  storybook/
  playground/
  reference-app/

docs/
  adr/
  design-system/
  ui-governance/
  implementation-plans/
```

## Device Shell Strategy

Desktop, mobile, and tablet are separate interaction grammars.

Desktop is the authoring shell:

- Dense authoring.
- Full transaction entry.
- Bulk operations.
- Reconciliation.
- Posting.
- Admin configuration.
- Keyboard-first workflows.
- Complex grids.

Mobile is the companion shell:

- Capture.
- Approval/rejection.
- Comments.
- Attachments.
- Scanner flows.
- Quick visibility.
- Lightweight bounded edits.
- Notifications.
- Status updates.

Tablet starts from mobile grammar and selectively borrows desktop density only when a workflow proves the need.

## Client App Consumption

Client apps consume platform packages as private npm packages with pinned versions.

Example:

```json
{
  "@erp-ui-platform/tokens": "0.1.0",
  "@erp-ui-platform/transaction-shell": "0.1.0",
  "@erp-ui-platform/editable-grid": "0.1.0",
  "@erp-ui-platform/approval-ui": "0.1.0"
}
```

Client apps provide:

- Business rules.
- Workflow customization.
- API/BFF integrations.
- Lookup providers.
- Capability adapters.
- Branding.
- Feature flags.
- Deployment.

See [Client Integration Guide](./docs/design-system/client-integration-guide.md).

## Running Locally

Install dependencies:

```sh
pnpm install
```

Run tests:

```sh
pnpm test
```

Run lint:

```sh
pnpm lint
```

Run all checks:

```sh
pnpm check
```

Storybook and reference app folders exist, but runnable app scripts are not implemented yet. See [Storybook and Reference App Plan](./docs/implementation-plans/storybook-reference-app-plan.md).

## Versioning Policy

Shared packages use semantic versioning.

- Patch: bug fix, no intentional API or behavior change.
- Minor: new optional component, prop, token, or pattern.
- Major: breaking API, visual contract, behavior, keyboard flow, layout contract, or accessibility behavior.

UI behavior changes can be breaking even when TypeScript APIs do not change.

See [Versioning Policy](./docs/design-system/versioning-policy.md).

## Contribution Rules

- Keep business rules out of shared packages.
- Prefer slots, contracts, adapters, and extension points.
- Do not add client-specific modules or API assumptions.
- Do not add shared route definitions to shared core.
- Add or update tests for package behavior.
- Add or update Storybook/reference examples when visible behavior changes.
- Update docs when architecture boundaries change.
- Run `pnpm check` before submitting changes.

## Boundary Rules

Package boundaries are enforced with ESLint.

Important rules:

- `tokens` cannot import from other internal packages.
- Shared packages cannot import from apps.
- `capability-contracts` cannot import UI packages.
- Runtime/core packages cannot import UI packages.
- Desktop and mobile pattern packages cannot import each other directly.
- Apps cannot import from other apps.

See [Package Boundary Enforcement](./docs/design-system/package-boundary-enforcement.md).

## ADRs

- [ADR 001: Multi-Device Front-End Architecture](./docs/adr/001-multi-device-front-end-architecture.md)
- [ADR 002: Design System Foundation Strategy](./docs/adr/002-design-system-foundation-strategy.md)
- [ADR 003: Shared UI Platform and Client Consumption Model](./docs/adr/003-shared-ui-platform-and-client-consumption-model.md)

## More Docs

- [Package Boundaries](./docs/design-system/package-boundaries.md)
- [Client App Structure](./docs/design-system/client-app-structure.md)
- [Customization Model](./docs/design-system/customization-model.md)
- [Capability Contracts](./docs/ui-governance/capability-contracts.md)
- [Shell Boundary Rules](./docs/ui-governance/shell-boundary-rules.md)
- [BFF and API Boundary Rules](./docs/ui-governance/bff-and-api-boundary-rules.md)
- [Shared UI Platform Roadmap](./docs/implementation-plans/shared-ui-platform-roadmap.md)
- [Sales Invoice Approval Vertical Slice](./docs/implementation-plans/sales-invoice-approval-vertical-slice.md)

