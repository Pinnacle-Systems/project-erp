# Capability Contracts

## Purpose

Capability contracts define which actions are available across desktop, mobile, and tablet shells.

Device boundaries must not rely only on hidden UI controls. Actions must be governed by role, shell, workflow state, document state, and risk level.

Capabilities drive:

- UI visibility.
- Disabled states.
- Blocked states.
- Action availability.
- User-facing unavailable reasons.
- Shell-specific workflow boundaries.

API and backend services must still enforce permissions, workflow transitions, and business validation. UI capability checks are not a security boundary by themselves.

## Capability Context

A capability resolver evaluates a `CapabilityContext` and returns action availability for a specific user, shell, module, document, and workflow state.

```ts
type Shell = "desktop" | "mobile" | "tablet";

type RiskLevel = "low" | "medium" | "high" | "critical";

type CapabilityContext = {
  userId: string;
  role: string;
  tenantId: string;
  shell: Shell;
  module: string;
  documentType: string;
  workflowState: string;
  documentStatus: string;
  riskLevel: RiskLevel;
  featureFlags: Record<string, boolean>;
};
```

## Capability Output

Capability output should describe action availability in a form the UI can render consistently.

```ts
type CapabilityResult = {
  available: boolean;
  visible: boolean;
  disabled: boolean;
  reason?: string;
  riskLevel?: RiskLevel;
};

type DocumentCapabilities = {
  canView: CapabilityResult;
  canCreate: CapabilityResult;
  canEditHeader: CapabilityResult;
  canEditLines: CapabilityResult;
  canDelete: CapabilityResult;
  canSubmit: CapabilityResult;
  canApprove: CapabilityResult;
  canReject: CapabilityResult;
  canPost: CapabilityResult;
  canCancel: CapabilityResult;
  canAttachDocuments: CapabilityResult;
  canComment: CapabilityResult;
  canScan: CapabilityResult;
  canBulkOperate: CapabilityResult;
  canExport: CapabilityResult;
};
```

The exact type names may evolve, but the model should preserve three ideas:

- Whether the action is available.
- Whether the action should be visible.
- Why an unavailable action is unavailable when the user needs to know.

## Standard Capability Examples

Common capabilities include:

- `canView`
- `canCreate`
- `canEditHeader`
- `canEditLines`
- `canDelete`
- `canSubmit`
- `canApprove`
- `canReject`
- `canPost`
- `canCancel`
- `canAttachDocuments`
- `canComment`
- `canScan`
- `canBulkOperate`
- `canExport`

Client apps may extend this list, but extensions should preserve the same availability model.

## Example 1: Sales Invoice Desktop Capabilities

Desktop is the authoring shell. It may expose full invoice authoring and posting actions when role, workflow state, and document status allow.

```ts
const salesInvoiceDesktopCapabilities = {
  canView: { available: true, visible: true, disabled: false },
  canCreate: { available: true, visible: true, disabled: false },
  canEditHeader: { available: true, visible: true, disabled: false },
  canEditLines: { available: true, visible: true, disabled: false },
  canDelete: {
    available: true,
    visible: true,
    disabled: false,
    riskLevel: "medium",
  },
  canSubmit: { available: true, visible: true, disabled: false },
  canApprove: { available: false, visible: true, disabled: true, reason: "Invoice is not pending approval." },
  canReject: { available: false, visible: true, disabled: true, reason: "Invoice is not pending approval." },
  canPost: {
    available: true,
    visible: true,
    disabled: false,
    riskLevel: "high",
  },
  canCancel: {
    available: true,
    visible: true,
    disabled: false,
    riskLevel: "medium",
  },
  canAttachDocuments: { available: true, visible: true, disabled: false },
  canComment: { available: true, visible: true, disabled: false },
  canScan: { available: false, visible: false, disabled: true },
  canBulkOperate: {
    available: true,
    visible: true,
    disabled: false,
    riskLevel: "high",
  },
  canExport: { available: true, visible: true, disabled: false },
};
```

## Example 2: Sales Invoice Mobile Capabilities

Mobile is the companion shell. It may support viewing, capture, comments, attachments, scanning, and approval response. It should not expose dense line editing, bulk operation, or posting by default.

```ts
const salesInvoiceMobileCapabilities = {
  canView: { available: true, visible: true, disabled: false },
  canCreate: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Full invoice creation is available on desktop.",
  },
  canEditHeader: {
    available: true,
    visible: true,
    disabled: false,
    reason: "Only bounded header fields may be edited on mobile.",
  },
  canEditLines: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Invoice line editing is available on desktop.",
  },
  canDelete: {
    available: false,
    visible: false,
    disabled: true,
    reason: "Delete is not available from the mobile shell.",
  },
  canSubmit: { available: true, visible: true, disabled: false },
  canApprove: { available: true, visible: true, disabled: false },
  canReject: { available: true, visible: true, disabled: false },
  canPost: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Posting is a desktop-only high-risk action.",
    riskLevel: "high",
  },
  canCancel: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Cancellation requires desktop review.",
  },
  canAttachDocuments: { available: true, visible: true, disabled: false },
  canComment: { available: true, visible: true, disabled: false },
  canScan: { available: true, visible: true, disabled: false },
  canBulkOperate: {
    available: false,
    visible: false,
    disabled: true,
    reason: "Bulk operations are not available on mobile.",
  },
  canExport: {
    available: false,
    visible: false,
    disabled: true,
  },
};
```

## Example 3: Journal Entry Mobile Restrictions

Journal entries are high-risk accounting documents. Mobile may support capture, attachment, comments, and approval response, but not full creation, line editing, posting, reconciliation, or validation override by default.

```ts
const journalEntryMobileCapabilities = {
  canView: { available: true, visible: true, disabled: false },
  canCreate: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Full journal entry creation is available on desktop.",
    riskLevel: "high",
  },
  canEditHeader: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Journal metadata changes require desktop review.",
  },
  canEditLines: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Debit and credit line editing is desktop-only.",
    riskLevel: "high",
  },
  canDelete: {
    available: false,
    visible: false,
    disabled: true,
  },
  canSubmit: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Journal submission requires desktop validation.",
  },
  canApprove: { available: true, visible: true, disabled: false },
  canReject: { available: true, visible: true, disabled: false },
  canPost: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Posting to the general ledger is desktop-only.",
    riskLevel: "critical",
  },
  canCancel: {
    available: false,
    visible: true,
    disabled: true,
    reason: "Cancellation requires desktop accounting review.",
    riskLevel: "high",
  },
  canAttachDocuments: { available: true, visible: true, disabled: false },
  canComment: { available: true, visible: true, disabled: false },
  canScan: { available: true, visible: true, disabled: false },
  canBulkOperate: {
    available: false,
    visible: false,
    disabled: true,
  },
  canExport: {
    available: false,
    visible: false,
    disabled: true,
  },
};
```

## Example 4: Leave Approval Mobile Capabilities

Leave approval is usually well suited to mobile because the decision surface is focused and bounded.

```ts
const leaveApprovalMobileCapabilities = {
  canView: { available: true, visible: true, disabled: false },
  canCreate: { available: true, visible: true, disabled: false },
  canEditHeader: {
    available: true,
    visible: true,
    disabled: false,
    reason: "Only draft leave request fields may be edited.",
  },
  canEditLines: {
    available: false,
    visible: false,
    disabled: true,
  },
  canDelete: {
    available: false,
    visible: false,
    disabled: true,
  },
  canSubmit: { available: true, visible: true, disabled: false },
  canApprove: { available: true, visible: true, disabled: false },
  canReject: { available: true, visible: true, disabled: false },
  canPost: {
    available: false,
    visible: false,
    disabled: true,
  },
  canCancel: { available: true, visible: true, disabled: false },
  canAttachDocuments: { available: true, visible: true, disabled: false },
  canComment: { available: true, visible: true, disabled: false },
  canScan: {
    available: false,
    visible: false,
    disabled: true,
  },
  canBulkOperate: {
    available: false,
    visible: false,
    disabled: true,
  },
  canExport: {
    available: false,
    visible: false,
    disabled: true,
  },
};
```

## Governance Rules

- Capabilities must be resolved from role, shell, workflow state, document state, risk level, and feature flags.
- Mobile restrictions are product governance boundaries and must be reflected in capability resolution.
- Capability results should include reasons when the user needs to understand why an action is unavailable.
- Client apps may map local permissions into capability contracts, but the backend remains the source of enforcement.
- API and backend layers must reject unauthorized or invalid actions even if a UI mistakenly enables them.
- Capability contracts should be shared across shells to prevent device-specific business drift.

