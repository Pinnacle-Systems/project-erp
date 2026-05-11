# ADR 003: Shared UI Platform and Client Consumption Model

**Status:** Accepted  
**Date:** 2026-05-11  
**Tags:** Architecture, Repository Strategy, Platform, Client Apps

## 1. Context

We build custom ERP and business applications for multiple clients. These applications need consistent UI/UX behavior, interaction grammar, shell rules, and reusable ERP patterns. At the same time, each client needs its own business rules, workflow customizations, integrations, deployment model, and branding.

The shared platform must not become a dumping ground for client-specific logic. It should provide reusable behavior through slots, contracts, adapters, and extension points while leaving business truth in consuming client applications.

## 2. Decision

We will maintain a shared UI/UX platform repository consumed by separate client application repositories.

The shared platform repository owns reusable UI behavior and interaction grammar.

Client application repositories own business rules, workflow customizations, integrations, deployment, and client-specific branding.

## 3. Repository Model

The repository model separates stable platform behavior from client-specific application work.

```txt
erp-ui-platform/
  packages/
    tokens/
    primitive-wrappers/
    app-components/
    erp-patterns/
    shell-grammar/
    editable-grid/
    lookup/
    validation-ui/
    workflow-actions/
    approval-ui/
    scanner-capture/
    capability-contracts/

  apps/
    storybook/
    reference-app/
    playground/

client-a-app/
  src/
    modules/
    business-rules/
    integrations/
    branding/
    permissions/
    feature-flags/

client-b-app/
  src/
    modules/
    business-rules/
    integrations/
    branding/
    permissions/
    feature-flags/
```

The shared platform is consumed from a separate Git repository. Initially, client apps should vendor the shared platform with Git subtree under `packages/erp-ui-platform` and import it through local path aliases.

Git submodules may be used as an alternative where a team has strong submodule discipline, but Git subtree is the preferred initial model because it keeps client repositories self-contained after checkout.

## 4. Shared Platform Responsibilities

The shared platform owns:

- Design tokens.
- Primitive wrappers.
- Application components.
- ERP patterns.
- Desktop, mobile, and tablet shell grammar.
- Editable grid behavior.
- Lookup behavior.
- Validation UI.
- Workflow action UI.
- Approval UI.
- Scanner and capture UI patterns.
- Capability contract shapes.
- Storybook and reference app.

The shared platform should expose:

- Slots.
- Contracts.
- Adapters.
- Extension points.
- Theming hooks.
- Capability-aware UI patterns.
- Business-neutral runtime helpers where justified.

The shared platform must not contain client-specific rules such as:

- GST posting logic.
- Leave policy rules.
- Inventory allocation policy.
- Approval hierarchy.
- Pricing or discount calculations.
- Client-specific validation logic.
- Client-specific API assumptions.

## 5. Client App Responsibilities

Client applications own:

- Business rules.
- Client-specific workflows.
- API integrations.
- Module definitions.
- Branding overrides.
- Permissions mapping.
- Feature flags.
- Custom reports.
- Deployment configuration.

Client apps provide business meaning to platform contracts. For example, the platform may provide a transaction shell, editable grid, approval UI, and workflow action presentation. A client module decides which fields exist, which rules apply, which API is called, which approvals are required, and which actions are available.

## 6. Customization Layers

Customization should be explicit and layered.

### Theme Customization

Client apps may customize approved brand inputs such as logo, color tokens, typography, density, radius, and brand assets.

### Layout Customization

Client apps may customize navigation, dashboard composition, module visibility, and shell entry points.

### Field and Module Customization

Client apps own module definitions, field visibility, labels, required states, field order, defaults, and read-only rules.

### Workflow Customization

Client apps own workflow status mapping, approval steps, transitions, permissions mapping, feature flags, and shell-specific action availability.

### Business Rule Customization

Client apps own calculations, validation rules, posting rules, pricing, discounts, tax behavior, leave policy, inventory allocation, and other client-specific business decisions.

Business rule customization should live in client-owned code, adapters, BFF/API services, or domain packages, not in the shared UI platform.

## Boundary Principle

The shared platform provides slots, contracts, and reusable behavior. Client apps provide business meaning.

The shared platform should know how a transaction shell behaves. It should not know what a sales invoice means for a specific client.

Example platform contract:

```ts
type TransactionShellProps = {
  title: string;
  status: DocumentStatus;
  header: React.ReactNode;
  lines: React.ReactNode;
  totals?: React.ReactNode;
  actions: WorkflowAction[];
  validationMessages: ValidationMessage[];
  auditTrail?: React.ReactNode;
};
```

The platform owns layout and behavior. The consuming module owns fields, rules, calculations, lookups, and workflow decisions.

## 7. Dependency and Versioning Strategy

We will not require private npm package publishing initially.

Preferred initial strategy:

- The shared UI/UX platform lives in a separate Git repository.
- Each client app consumes it using Git subtree under `packages/erp-ui-platform`.
- Client apps import shared platform code through local TypeScript path aliases.
- Shared platform versions are tracked using Git tags.
- Each client repo records the consumed platform version in `docs/platform-version.md`.
- No npm publishing is required initially.

Example client app layout:

```txt
client-a-app/
  packages/
    erp-ui-platform/
      packages/
        tokens/
        transaction-shell/
        editable-grid/
        approval-ui/
  docs/
    platform-version.md
```

Use semantic versioning:

- Patch: bug fixes with no expected visual or behavior break.
- Minor: new optional capabilities, props, components, or patterns.
- Major: breaking API changes or behavior changes that affect user workflows.

UI behavior changes must be treated carefully. A change to editable-grid keyboard navigation, validation placement, approval confirmation behavior, or shell boundary rules may require a major version even when the code still compiles.

Client apps should upgrade the subtree intentionally, test affected workflows, and update `docs/platform-version.md` with the Git tag or commit consumed.

Private npm packages may be introduced later when the team can afford and operate a package registry. They are a future option, not the initial dependency strategy.

## 8. Non-Goals

This ADR does not decide:

- The final package manager or monorepo tooling.
- The final package registry strategy.
- The complete package list.
- The final component API.
- The final module manifest format.
- The deployment topology for every client app.
- The specific third-party component foundation.
- The full release automation process.

## 9. Consequences

### Positives

- Allows client apps to release independently.
- Keeps business rules close to client domains.
- Lets shared UX behavior improve over time.
- Reduces duplication without forcing a single application architecture.
- Creates a clear governance boundary between platform behavior and client business truth.
- Gives client apps stable wrappers, patterns, and contracts instead of raw implementation details.

### Tradeoffs

- Requires versioning discipline.
- Requires strong package boundaries.
- Requires integration guides and reference examples.
- Requires clear review rules to prevent client-specific logic from entering the platform.
- Requires client apps to adapt business needs through approved extension points.
- Requires testing across multiple consuming apps when platform behavior changes.
