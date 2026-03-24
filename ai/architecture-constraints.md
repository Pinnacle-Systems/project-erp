# ERP ARCHITECTURE CONSTRAINTS (MANDATORY)

## 1. Financial Integrity (Ledger Law)
- ALL physical resource state changes MUST produce a corresponding Ledger Entry.
- Ledger must be double-entry and append-only. NO balance updates.
- Inventory + Ledger updates MUST occur in a single ACID transaction (for synchronous flows).
- Ledger entries MUST include:
  - trace_id
  - tenant_id
  - reference_entity_id

## 2. Transaction & Consistency Model
- Core operations (Inventory + Ledger) are STRONGLY consistent.
- Cross-service communication MUST use the Outbox Pattern.
- No partial commits allowed.
- Eventual consistency is allowed ONLY for downstream consumers (analytics, notifications).

## 3. Idempotency & Retry Safety
- ALL write operations MUST include an `idempotency_key`.
- Duplicate requests MUST NOT create duplicate state changes or ledger entries.
- ALL event consumers MUST be idempotent.

## 4. Industry Abstraction (Steel Mill Test)
- NO industry-specific terms allowed in `/core` or `/domain`.
- All industry logic MUST reside in `/prisms`.
- Use abstract entities only:
  - Resource_Definition
  - Resource_Instance
  - Work_Center
  - Operation
- Prisms MUST NOT modify Core/Domain code directly.
- Prisms may only extend behavior via:
  - Interfaces
  - Event subscriptions
  - Metadata (Attributes / Config)
- Conditional logic based on industry type is FORBIDDEN in Core/Domain.

## 5. Resource Model Rules
- Resource MUST be split:
  - Resource_Definition (static)
  - Resource_Instance (dynamic)
- Resource_Instance MUST:
  - support Bulk / Lot / Serial modes
  - enforce optimistic locking
  - enforce valid state transitions
  - always belong to a tenant
  - always have a location

## 6. Data Integrity & Multi-Tenancy
- ALL queries MUST be scoped by `tenant_id` (DB-level enforcement).
- NO cross-tenant data access.
- AI must only access tools permitted by user RBAC.

## 7. UOM & Conversion Rules
- ALL unit conversions MUST go through `UOMConversionService`.
- NO inline arithmetic allowed.
- Conversions MUST be context-aware (e.g., GSM, density).
- Conversion factors MUST be versioned.

## 8. Workflow & State Enforcement
- ALL state transitions MUST go through defined state machines.
- Invalid transitions MUST be rejected.
- AI must respect workflow and resource state constraints.

## 9. Event Architecture
- EVERY state change MUST emit a domain event.
- Events MUST include:
  - trace_id
  - tenant_id
  - entity_id
  - version
- Event delivery is at-least-once → consumers MUST be idempotent.
- Dead-letter queue required.

## 10. Data Access Rules
- ALL DB access MUST go through repositories/services.
- NO raw SQL unless explicitly required.
- AI-generated code MUST NOT bypass domain logic.

## 11. AI Behavior Constraints
- AI is an Interpreter, NOT an executor.
- AI MUST:
  - generate structured intent
  - use curated Task-Tools only
  - NEVER access DB or low-level APIs directly
- ALL write actions REQUIRE human approval (HITL).

## 12. Audit & Traceability
- EVERY action must be traceable:
  - intent → event → ledger → state
- AI actions MUST log:
  - original intent
  - approval
  - resulting state change