# BFF and API Boundary Rules

## Purpose

This document clarifies when shell-specific BFF or read-model endpoints are allowed.

Shell-specific endpoints are sometimes useful for mobile, tablet, scanner, approval, or dashboard workflows. They are allowed when they optimize payload shape, performance, or task focus. They are not allowed to create separate business truth.

## Core Rule

Do not ban mobile-specific or shell-specific endpoints.

Ban shell-specific business truth.

Shell-specific APIs may change how data is delivered. They must not change what the business state means.

## Allowed Shell-Specific Endpoint Uses

Shell-specific BFF and read-model endpoints may be used for:

- Payload shaping.
- Summary cards.
- Approval queues.
- Scanner-friendly lookup endpoints.
- Mobile dashboard summaries.
- Bandwidth-optimized responses.
- Offline read models.
- Task-focused document summaries.

These endpoints should optimize the shell experience while preserving shared domain, workflow, validation, and capability semantics.

## Not Allowed

Shell-specific endpoints must not:

- Redefine workflow states.
- Bypass capability contracts.
- Duplicate validation logic inconsistently.
- Introduce mobile-only business rules.
- Weaken audit or permission behavior.
- Create separate posting or approval semantics.
- Make desktop and mobile disagree about document truth.

## Boundary Model

```txt
Shared Domain/API
  source of business truth, workflow semantics, validation contract, capability contract

Shell-Specific BFF/Read Model
  payload shaping, summaries, queues, scanner flows, offline read models

Device Shell
  shell-specific UI, navigation, task flow, action presentation
```

## Enforcement Rules

The backend or authoritative API must enforce:

- Permissions.
- Capability availability.
- Workflow transitions.
- Document state.
- Validation contract.
- Audit behavior.
- Posting and approval semantics.

The BFF may adapt, summarize, cache, or compose data for a shell. It must not become a separate workflow engine.

## Examples

### 1. Allowed: Mobile Approval Queue BFF

A mobile approval queue endpoint is allowed when it returns a task-focused list such as:

- Document title.
- Amount or key summary.
- Requester.
- Age.
- Current status.
- Available approve/reject/comment capabilities.
- Compact validation or risk indicators.

This endpoint may reduce payload size and avoid loading full desktop document detail. It must still use the same workflow state, capability contract, permission model, and approval semantics as desktop.

### 2. Allowed: Scanner Item Lookup Endpoint

A scanner-friendly lookup endpoint is allowed when it supports fast mobile capture, such as:

- Barcode lookup.
- Item summary.
- Unit of measure.
- Location suggestions.
- Recent scan context.
- Lightweight warnings.

This endpoint may be optimized for speed and low bandwidth. It must not invent inventory rules or bypass allocation, receiving, or posting validation.

### 3. Not Allowed: Mobile-Only Invoice Posting Rule

A mobile endpoint must not allow invoice posting under rules that differ from desktop, such as:

- Allowing mobile posting before required approval.
- Skipping tax validation on mobile.
- Posting with a different workflow state transition.
- Allowing a role to post on mobile when that role cannot post through the shared capability contract.

Posting semantics must remain shared.

### 4. Not Allowed: Mobile-Specific Validation Bypass

A mobile endpoint must not bypass validation because the mobile form has fewer fields.

For example, mobile must not:

- Ignore required tax fields.
- Skip ledger validation.
- Accept invalid inventory locations.
- Ignore payroll policy checks.
- Convert blocking validation errors into warnings only for mobile.

Mobile may use a reduced data contract only when that reduced contract has explicit validation behavior and a defined desktop handoff.

### 5. Allowed: Offline Read Model with Bounded Sync

An offline read model is allowed when a shell needs limited offline access for field work.

Allowed characteristics:

- Read-only or bounded write scope.
- Explicit sync boundary.
- Clear conflict handling.
- Capability-aware offline actions.
- Audit trail for queued actions.
- Server-side revalidation during sync.

Offline support must not create permanent disagreement between desktop and mobile. The authoritative backend remains the source of document truth.

## Closing Rule

Same domain model.  
Same workflow semantics.  
Same validation contract.  
Same capability contract.  
Different payload shape when justified.
