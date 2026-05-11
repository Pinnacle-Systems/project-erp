# Client Integration Guide

## Purpose

This guide explains how a consuming client app uses the shared ERP UI/UX platform.

The shared platform owns UI behavior and contracts. The client app owns business meaning, rules, integrations, branding, deployment, and client-specific workflow configuration.

## 1. Adding the Shared Platform with Git Subtree

Client apps should initially consume the shared platform from its separate Git repository using Git subtree.

Example:

```sh
git subtree add --prefix packages/erp-ui-platform <platform-git-url> main --squash
```

Then record the consumed platform version:

```txt
docs/platform-version.md
```

That file should include the platform Git remote, tag or commit, pull date, and migration notes.

Private npm packages are not required initially. They may be introduced later as a future option.

## 2. Configuring Local Path Aliases

Client apps import platform code through local path aliases.

```json
{
  "compilerOptions": {
    "paths": {
      "@erp-ui-platform/*": [
        "packages/erp-ui-platform/packages/*/src"
      ]
    }
  }
}
```

Keep imports pointed at package entrypoints where possible.

## 3. Setting Up Theme Provider

The platform should expose a theme provider through primitives or a future theme package. Client apps pass approved brand values into that provider.

```tsx
import { PlatformThemeProvider } from "@erp-ui-platform/primitives";

import { clientTheme } from "../client/branding/clientTheme";

export function AppProviders({ children }) {
  return (
    <PlatformThemeProvider theme={clientTheme}>
      {children}
    </PlatformThemeProvider>
  );
}
```

## 4. Applying Client Branding

Client branding belongs in the client app.

```ts
import { semanticColorTokens } from "@erp-ui-platform/tokens";

export const clientTheme = {
  logo: "/assets/client-logo.svg",
  colors: {
    brandPrimary: "#1455d9",
    background: semanticColorTokens.background.app,
    foreground: semanticColorTokens.foreground.default,
  },
  density: "comfortable",
  radius: "md",
};
```

Do not fork platform components to apply branding. Use theme mapping.

## 5. Creating Capability Adapter

Client apps map user roles, permissions, shell, workflow state, document status, risk, and feature flags into platform capability contracts.

```ts
import type {
  BaseCapabilities,
  CapabilityContext,
} from "@erp-ui-platform/capability-contracts";

export function resolveClientCapabilities(
  context: CapabilityContext,
): BaseCapabilities {
  return {
    canView: allowIf(context.permissions?.includes("invoice.view")),
    canCreate: allowIf(context.permissions?.includes("invoice.create")),
    canEdit: allowIf(context.permissions?.includes("invoice.edit")),
    canEditHeader: allowIf(context.permissions?.includes("invoice.edit")),
    canEditLines:
      context.shell === "desktop"
        ? allowIf(context.permissions?.includes("invoice.edit"))
        : block("Line editing is available on desktop."),
    canDelete: block("Delete requires desktop review."),
    canSubmit: allowIf(context.permissions?.includes("invoice.submit")),
    canApprove: allowIf(context.permissions?.includes("invoice.approve")),
    canReject: allowIf(context.permissions?.includes("invoice.reject")),
    canPost:
      context.shell === "desktop"
        ? allowIf(context.permissions?.includes("invoice.post"), "high")
        : block("Posting is a desktop-only high-risk action.", "high"),
    canCancel: allowIf(context.permissions?.includes("invoice.cancel")),
    canAttachDocuments: allowIf(context.permissions?.includes("invoice.attach")),
    canComment: allowIf(context.permissions?.includes("invoice.comment")),
    canScan: allowIf(context.shell === "mobile"),
    canBulkOperate:
      context.shell === "desktop"
        ? allowIf(context.permissions?.includes("invoice.bulk"), "high")
        : hide("Bulk operations are not available on mobile.", "high"),
    canExport: allowIf(context.permissions?.includes("invoice.export")),
  };
}
```

The backend or BFF must still enforce permissions and workflow transitions.

## 6. Creating Lookup Providers

The platform owns lookup contracts. The client app owns concrete providers and API integration.

```ts
import type { LookupProvider } from "@erp-ui-platform/lookup";

export const customerLookupProvider: LookupProvider = {
  async search(query) {
    return customerApi.searchCustomers({
      searchText: query.searchText,
      limit: query.limit,
    });
  },
  async resolve(result) {
    return customerApi.getCustomer(result.id);
  },
  async validate(customer) {
    return customerValidationAdapter.validate(customer);
  },
};
```

## 7. Injecting Business Rule Adapters

Business rules belong in the client app or backend. The platform receives validation messages, totals, capability results, and rendered slots.

```ts
export const salesInvoiceRuleAdapter = {
  validate(invoice) {
    return salesInvoiceRules.validate(invoice);
  },
  calculateTotals(invoice) {
    return salesInvoiceRules.calculateTotals(invoice);
  },
  resolveActions(context) {
    return resolveClientCapabilities(context);
  },
};
```

## 8. Assembling a Transaction Screen

The platform owns transaction layout. The client module owns invoice meaning.

```tsx
import { TransactionShell } from "@erp-ui-platform/transaction-shell";
import { filterActionsByCapabilities } from "@erp-ui-platform/workflow-actions";

export function SalesInvoiceScreen({ invoice, user, shell }) {
  const validationMessages = salesInvoiceRuleAdapter.validate(invoice);
  const totals = salesInvoiceRuleAdapter.calculateTotals(invoice);
  const capabilities = resolveClientCapabilities({
    userId: user.id,
    role: user.role,
    tenantId: user.tenantId,
    shell,
    module: "sales",
    documentType: "sales_invoice",
    workflowState: invoice.workflowState,
    documentStatus: invoice.status,
    riskLevel: "medium",
    featureFlags: user.featureFlags,
    permissions: user.permissions,
  });
  const actions = filterActionsByCapabilities(
    salesInvoiceActions,
    capabilities,
    shell,
  );

  return (
    <TransactionShell
      title="Sales Invoice"
      documentNumber={invoice.number}
      status={invoice.status}
      mode="edit"
      density="compact"
      header={<SalesInvoiceHeader invoice={invoice} />}
      lines={<SalesInvoiceLineGrid invoice={invoice} />}
      totals={<SalesInvoiceTotals totals={totals} />}
      actions={actions}
      validationMessages={validationMessages}
      attachments={<InvoiceAttachments invoiceId={invoice.id} />}
      audit={<InvoiceAuditTrail invoiceId={invoice.id} />}
      onAction={(action) => salesInvoiceApi.runAction(invoice.id, action.id)}
    />
  );
}
```

## 9. Assembling a Mobile Approval Screen

Mobile approval should be task-focused and capability-driven.

```tsx
import { ApprovalPanel } from "@erp-ui-platform/approval-ui";

export function MobileInvoiceApproval({ approvalTask }) {
  return (
    <ApprovalPanel
      status={approvalTask.status}
      shell="mobile"
      steps={approvalTask.steps}
      comments={approvalTask.comments}
      allowedActions={approvalTask.allowedActions}
      summary={<InvoiceApprovalSummary task={approvalTask} />}
      attachments={<ApprovalAttachments taskId={approvalTask.id} />}
      onDecision={(action) =>
        approvalApi.submitDecision({
          taskId: approvalTask.id,
          decision: action.decision,
        })
      }
    />
  );
}
```

Mobile approval must not create separate approval semantics. It should use the same workflow, permission, validation, and capability contracts as desktop.

## 10. Handling BFF/Read-Model Endpoints

Shell-specific BFF/read-model endpoints are allowed for payload shaping and performance.

Good uses:

- Mobile approval queue.
- Scanner-friendly item lookup.
- Task-focused document summary.
- Mobile dashboard summary.
- Offline read model with bounded sync.

Do not use shell-specific endpoints to redefine workflow state, bypass validation, weaken audit behavior, or introduce mobile-only business rules.

```ts
export async function loadMobileApprovalQueue(userId: string) {
  return approvalBff.getMobileQueue({
    userId,
    includeCapabilities: true,
    includeSummaryOnly: true,
  });
}
```

## 11. Upgrade and Versioning Process

Client apps should:

- Pull platform updates intentionally with Git subtree.
- Update `docs/platform-version.md`.
- Read release notes before upgrading.
- Review changelogs for behavior changes.
- Run platform and client tests.
- Review Storybook examples for changed components.
- Run visual regression where available.
- Follow migration guides for major versions.

Behavior changes can be breaking even when TypeScript APIs still compile.

Example update:

```sh
git subtree pull --prefix packages/erp-ui-platform <platform-git-url> v0.2.0 --squash
```

## Validation Message Generation

The platform standardizes validation message shape. The client app generates the messages.

```ts
import type { ValidationMessage } from "@erp-ui-platform/validation-ui";

export function validateSalesInvoice(invoice): ValidationMessage[] {
  const messages: ValidationMessage[] = [];

  if (!invoice.customerId) {
    messages.push({
      id: "invoice.customer.required",
      severity: "blocking",
      scope: "field",
      fieldPath: "header.customerId",
      message: "Customer is required.",
    });
  }

  return messages;
}
```

## Integration Rule

Use platform packages for consistent UI behavior and contracts. Keep business meaning and integrations in the client app.
