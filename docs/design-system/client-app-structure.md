# Client App Structure

## Purpose

This document defines the recommended repository structure for consuming client applications.

Client apps consume shared packages from the ERP UI/UX platform. They own the actual product assembly for a client: modules, business rules, API integrations, workflows, branding, deployment configuration, capability resolution, module-level configuration, and feature flags.

## Recommended Structure

```txt
client-app/
  src/
    app/
      routes/
      providers/
      auth/
      shell-selection/
    modules/
      sales/
        screens/
        definitions/
        rules/
        api/
        adapters/
      purchase/
      inventory/
      finance/
      hrms/
    client/
      branding/
      permissions/
      feature-flags/
      workflow-config/
      integrations/
      reports/
    platform/
      api-client/
      auth-adapter/
      capability-adapter/
      telemetry/
    main.tsx
```

## Folder Responsibilities

### app

Owns application assembly and runtime wiring.

Belongs here:

- App routes.
- App-level providers.
- Authentication wiring.
- Shell selection logic.
- Client app bootstrapping.

Must not belong here:

- Shared UI platform components.
- Reusable platform package code.
- Low-level business calculations that belong inside modules.

### app/routes

Owns the client app route tree.

Routes are client-app responsibility because each shell owns its own route structure, navigation model, and screen composition. Shared platform packages must not define client route trees.

### app/providers

Owns top-level providers for theme, auth, query clients, telemetry, feature flags, and platform configuration.

### app/auth

Owns client-specific authentication wiring, session handling, identity provider integration, and user context mapping.

### app/shell-selection

Owns selection between desktop, mobile, and tablet shells for this client app.

Shell selection may consider device, route, user role, feature flags, and workflow availability. It should not redefine capability contracts or workflow rules.

## modules

Owns client application modules and module assembly.

Examples:

- `sales`
- `purchase`
- `inventory`
- `finance`
- `hrms`

Each module may contain screens, definitions, rules, API integration, and adapters.

### modules/*/screens

Owns module screens composed from shared platform packages and module-specific components.

Screens may consume platform components such as:

- `TransactionShell`
- `EditableGrid`
- `Lookup`
- `ValidationSummary`
- `WorkflowActions`
- `ApprovalPanel`

### modules/*/definitions

Owns module-level configuration and screen definitions.

Belongs here:

- Field definitions.
- Line grid column definitions.
- Screen configuration.
- Lookup provider mapping.
- Workflow action declarations.
- Shell-specific screen availability.

### modules/*/rules

Owns module-specific business rules.

Belongs here:

- Pricing rules.
- Tax rules.
- Discount rules.
- Posting rules.
- Validation rules.
- Allocation rules.
- Leave policy rules for HR modules.

These rules must not be moved into the shared UI platform.

### modules/*/api

Owns module-specific API calls and data access adapters.

Belongs here:

- Sales API calls.
- Purchase API calls.
- Inventory API calls.
- Finance API calls.
- HRMS API calls.
- BFF endpoint clients.
- Payload mapping for module workflows.

### modules/*/adapters

Owns adapters that connect module-specific business behavior to shared platform contracts.

Belongs here:

- Validation adapters.
- Lookup adapters.
- Business rule adapters.
- Workflow action resolvers.
- Capability mappers.
- Data-to-screen mapping.

## client

Owns client-level customization and configuration.

### client/branding

Owns branding overrides and theme inputs.

Belongs here:

- Logo.
- Brand colors.
- Font choices.
- Density configuration.
- Border radius choices.
- Client theme token overrides.

### client/permissions

Owns client-specific permission mapping.

Belongs here:

- Role-to-permission mapping.
- Permission-to-capability mapping inputs.
- Client-specific role names.

Business authorization must still be enforced by the backend or BFF. The client app may resolve UI capability presentation, but it is not the source of business authority.

### client/feature-flags

Owns client-specific feature flags and rollout configuration.

### client/workflow-config

Owns client workflow configuration.

Belongs here:

- Document status mapping.
- Approval steps.
- Allowed transitions.
- Shell-specific workflow availability.
- Client workflow labels.

### client/integrations

Owns client-specific integration wiring.

Belongs here:

- Legacy system adapters.
- External service configuration.
- Integration-specific mapping.
- Client environment configuration.

### client/reports

Owns custom reports and report configuration for the client.

## platform

Owns client-side integration adapters between the app and the shared UI platform.

This folder does not contain shared platform source code. It contains app-local glue code.

### platform/api-client

Owns the configured API client for this client app, including base URLs, interceptors, error mapping, and environment-specific configuration.

### platform/auth-adapter

Maps client auth/session data into the shape expected by platform-facing contracts.

### platform/capability-adapter

Resolves client permissions, workflow state, shell, and feature flags into capability contract values consumed by platform UI.

### platform/telemetry

Owns client-specific telemetry wiring, event sinks, and analytics adapters.

### main.tsx

Bootstraps the client app.

Belongs here:

- App root rendering.
- Top-level provider composition.
- Client configuration loading.
- Shell selection initialization.

## Example: Sales Invoice Screen

The sales module owns invoice meaning. The shared platform owns transaction layout and behavior.

```tsx
import { TransactionShell } from "@your-org/transaction-shell";
import { WorkflowActions } from "@your-org/workflow-actions";
import { ValidationSummary } from "@your-org/validation-ui";

import { InvoiceHeaderForm } from "./InvoiceHeaderForm";
import { InvoiceLineGrid } from "./InvoiceLineGrid";
import { InvoiceTotalsPanel } from "./InvoiceTotalsPanel";
import { salesInvoiceRules } from "../rules/salesInvoiceRules";
import { salesInvoiceApi } from "../api/salesInvoiceApi";
import { resolveInvoiceCapabilities } from "../adapters/resolveInvoiceCapabilities";

export function SalesInvoiceScreen({ invoice, user, shell }) {
  const validationMessages = salesInvoiceRules.validate(invoice);
  const capabilities = resolveInvoiceCapabilities({ invoice, user, shell });

  return (
    <TransactionShell
      title="Sales Invoice"
      status={invoice.status}
      header={<InvoiceHeaderForm invoice={invoice} />}
      lines={<InvoiceLineGrid invoice={invoice} />}
      totals={<InvoiceTotalsPanel invoice={invoice} />}
      validationMessages={validationMessages}
      actions={
        <WorkflowActions
          capabilities={capabilities}
          onAction={(action) => salesInvoiceApi.runAction(invoice.id, action)}
        />
      }
    />
  );
}
```

In this example:

- `TransactionShell`, `WorkflowActions`, and `ValidationSummary` come from the shared platform.
- `salesInvoiceRules` belongs to the client app.
- `salesInvoiceApi` belongs to the client app.
- `resolveInvoiceCapabilities` belongs to the client app.
- The platform renders behavior consistently, but it does not own invoice business rules.

## Example: Client Rules Injected Through Adapters

```ts
export const salesInvoiceRuleAdapter = {
  validateHeader(input) {
    return salesInvoiceRules.validateHeader(input);
  },
  validateLine(input) {
    return salesInvoiceRules.validateLine(input);
  },
  calculateTotals(input) {
    return salesInvoiceRules.calculateTotals(input);
  },
  resolveActions(context) {
    return resolveInvoiceCapabilities(context);
  },
};
```

The adapter connects client-owned rules to platform-facing contracts. The rules remain in the client app.

## Example: Capability Mapping Passed Into UI Actions

```ts
export function resolveInvoiceCapabilities({ invoice, user, shell }) {
  return {
    submit: {
      available: user.permissions.includes("invoice.submit"),
      shell,
      reason: null,
      risk: "medium",
    },
    post: {
      available:
        shell === "desktop" &&
        user.permissions.includes("invoice.post") &&
        invoice.status === "approved",
      shell,
      reason: shell === "desktop" ? null : "Posting is available on desktop only.",
      risk: "high",
    },
  };
}
```

The UI can render available, disabled, or blocked actions consistently. The backend or BFF must still enforce the final authorization and workflow transition.

## Example: Branding Tokens Through Theme Provider

```tsx
import { PlatformThemeProvider } from "@your-org/primitives";
import { clientTheme } from "../client/branding/clientTheme";

export function AppProviders({ children }) {
  return (
    <PlatformThemeProvider theme={clientTheme}>
      {children}
    </PlatformThemeProvider>
  );
}
```

Branding is applied through documented theme inputs. Client apps should not fork shared components to apply branding.

## Boundary Rules

- Client apps consume shared packages from the UI platform.
- Client apps own actual module assembly.
- Client apps own business rules and workflow customizations.
- Client apps own API integrations and deployment configuration.
- Client apps own client-specific branding and feature flags.
- Client apps own capability resolution for that client.
- Shared UI platform packages must not import client app code.
- Client apps should not copy shared platform source into local modules.
- Client apps should use platform extension points instead of modifying platform internals.

