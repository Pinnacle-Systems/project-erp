---
name: spec-check
description: Use this skill whenever a task changes domain logic, data models, workflows, services, repositories, migrations, or tests. Read the repo manifesto, architecture constraints, and relevant YAML specs before coding. Then summarize applicable rules, identify violations, and verify the final implementation against them. Do not use this skill for trivial copy edits or unrelated docs-only changes.
---

# Spec Check

## When to use
Use this skill before:
- implementing or modifying services
- changing entity schemas, migrations, repositories, or domain workflows
- reviewing generated code for architectural compliance
- writing tests for behavior governed by `/ai/architecture-constraints.md` or `/spec/*`

Do not use this skill for:
- trivial formatting changes
- typo fixes
- docs-only edits that do not affect behavior

## Required inputs
Before coding or reviewing, read:
1. `/ai/architecture-constraints.md`
2. `/docs/manifesto.md`
3. the relevant entity specs under `/spec/entities/`
4. the relevant workflow specs under `/spec/workflows/`

At minimum, always load:
- `/ai/architecture-constraints.md`
- `/docs/manifesto.md`

Then load only the task-relevant YAML files.

## Step 1: Extract the applicable rules
Before writing code, produce a short "applicable rules" summary with:
- financial constraints
- tenancy constraints
- state/workflow constraints
- entity invariants
- idempotency/concurrency constraints
- audit/event requirements

Use this exact format:

### Applicable Rules
- Constraint:
- Entity invariant:
- Workflow rule:
- Audit rule:
- Assumptions:

If something is missing from the specs, say so explicitly instead of guessing.

## Step 2: Map the task to the spec
State:
- which files govern this task
- which entities are affected
- which workflow steps are relevant
- which constraints are most likely to be violated

Use this exact format:

### Spec Mapping
- Governing files:
- Affected entities:
- Relevant workflow:
- High-risk constraints:

## Step 3: Implement or review
When implementing:
- follow the extracted rules
- do not bypass repositories/services
- do not invent behavior that contradicts the spec
- prefer explicit constraint enforcement in code

When reviewing:
- compare the code against the applicable rules summary
- look for architecture drift, not just syntax bugs

## Step 4: Run the compliance check
After implementation or review, produce this exact section:

### Compliance Check
- Tenant scoped:
- Ledger coupling preserved:
- UOM service used:
- Optimistic locking enforced:
- Workflow/state rules respected:
- Idempotency preserved:
- Events/audit preserved:
- Violations found:
- Follow-up needed:

## Hard-stop violations
Flag immediately if any of these occur:
- unscoped tenant access
- inline UOM conversion math
- inventory state change without ledger impact
- raw SQL that bypasses domain/repository rules without explicit approval
- missing optimistic locking where required
- invalid tracking-mode handling
- AI-generated code inventing behavior not grounded in `/spec`

## Repo-specific reminders
- `Resource_Instance.quantity_base` is always stored in `Definition.base_uom`
- `SERVICE` definitions do not create `Resource_Instance` rows
- tracking mode rules:
  - NONE => no batch_id, no serial_id
  - BATCH => batch_id required, serial_id forbidden
  - SERIAL => serial_id required, batch_id forbidden, quantity_base = 1
- audit truth lives in ledger + event history, not `last_trace_id`