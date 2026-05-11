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
- `BaseCapabilities`
- `WorkflowActionCapability`
- `CapabilityResolver`
- `CapabilityDecision`
- `CapabilityReason`
- `RiskLevel`

## Current Exports

- `ShellType`
- `RiskLevel`
- `CapabilityContext`
- `BaseCapabilities`
- `WorkflowActionCapability`
- `CapabilityResolver`
- `CapabilityDecision`
- `CapabilityReason`
- `CapabilityResult`
- `Shell`

## Example Resolvers

This package includes generic example resolvers to demonstrate intended shell behavior:

- `resolveSalesInvoiceCapabilities`
- `resolveJournalEntryCapabilities`
- `resolveLeaveApprovalCapabilities`

These are examples only. They do not implement client-specific business rules, approval hierarchy, permission mapping, or backend authorization.

## Usage Example

```ts
import {
  resolveSalesInvoiceCapabilities,
  type CapabilityContext,
} from "@erp-ui-platform/capability-contracts";

const context: CapabilityContext = {
  userId: "user-1",
  role: "finance-user",
  tenantId: "tenant-1",
  shell: "mobile",
  module: "sales",
  documentType: "salesInvoice",
  workflowState: "pendingApproval",
  documentStatus: "submitted",
  riskLevel: "medium",
  featureFlags: {},
  permissions: ["view", "approve", "reject", "comment", "attach"],
};

const capabilities = resolveSalesInvoiceCapabilities(context);

if (capabilities.canPost.decision === "blocked") {
  console.log(capabilities.canPost.reason?.message);
}
```

## Governance Notes

- Desktop may allow dense authoring where the user is permitted.
- Mobile blocks high-risk posting and line editing by default in the generic examples.
- Mobile allows approval, rejection, comments, and attachments where permitted.
- API and backend layers must still enforce permissions and workflow transitions.
- UI capability checks are not a security boundary by themselves.
