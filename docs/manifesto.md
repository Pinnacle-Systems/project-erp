# ERP MANIFESTO

## Core Principle
This system is a **Deterministic Core with a Probabilistic Interface**.

- AI interprets intent
- Policy enforces rules
- APIs execute logic
- Humans approve critical actions

---

## 1. Financial Integrity First
Every physical movement MUST have a corresponding financial representation in the ledger.

---

## 2. Separation of Concerns
- Core = invariants (finance, auth, tenancy)
- Domain = workflows
- Prism = industry semantics

---

## 3. State + Event Model
- Database = current truth
- Event log = historical truth
- Events must support replay and audit

---

## 4. Resource-Centric Design
Everything is a Resource:
- Material
- Machine
- Labor

---

## 5. UOM Consistency
All unit conversions must be:
- centralized
- context-aware
- versioned

---

## 6. AI as Controlled Interface
AI must:
- interpret intent, not execute state changes directly
- never bypass policy or domain rules
- always explain actions before execution

---

## 7. Auditability by Design
Every action must be traceable end-to-end.

---

## 8. Extensibility via Prisms
Industry differences are configuration, not code changes.

---

## 9. Multi-Tenancy as a Law of Physics

Data isolation is absolute and pervasive.

- Every entity, query, and operation MUST be scoped by `tenant_id`.
- No data access is valid without an explicit tenant context.
- Cross-tenant access is forbidden unless explicitly authorized at the system boundary.
- Multi-tenancy is enforced at the database level, not just application logic.