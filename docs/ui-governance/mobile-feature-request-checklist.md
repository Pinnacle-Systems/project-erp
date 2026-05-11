# Mobile Feature Request Review Checklist

## Purpose

Use this checklist to decide whether a workflow belongs in the mobile shell or should remain desktop-only.

This document is intended to be usable as a Jira or Linear issue template.

## Checklist

Complete each item with `Yes`, `No`, or `N/A`, and add notes where needed.

### Request Summary

- Workflow name:
- Module:
- Requesting client/team:
- Target shell: mobile
- Related desktop workflow:
- Owner:
- Date:

### Review Questions

1. Is this capture, review, approval, visibility, or lightweight update?
   - Answer:
   - Notes:

2. Does it require more than 5 manual line items?
   - Answer:
   - Notes:

3. Does it trigger pricing, tax, ledger, inventory, payroll, or allocation recalculation?
   - Answer:
   - Notes:

4. Does it require side-by-side comparison?
   - Answer:
   - Notes:

5. Does it require keyboard-first speed?
   - Answer:
   - Notes:

6. Does it require bulk operations?
   - Answer:
   - Notes:

7. Is the audit or financial risk high?
   - Answer:
   - Notes:

8. Can this be expressed as a reduced mobile-native contract?
   - Answer:
   - Notes:

9. Is there a clear handoff path back to desktop?
   - Answer:
   - Notes:

10. Is the capability blocked at the contract/API level, not only hidden in UI?
    - Answer:
    - Notes:

11. Does mobile need a task-specific BFF/read model?
    - Answer:
    - Notes:

12. Does the workflow still obey shared domain, workflow, validation, and permission semantics?
    - Answer:
    - Notes:

## Decision Rule

- If questions 2 through 7 are mostly yes, the workflow belongs to desktop by default.
- If mobile is still required, it must be designed as a separate mobile-native workflow.
- Mobile-native workflows must define reduced data contract, validation behavior, audit behavior, capability rules, and desktop handoff.

## Decision

- Approved for mobile:
- Desktop-only:
- Requires mobile-native workflow design:
- Requires architecture review:
- Follow-up issues:

## Required Approval

- Product owner:
- UX/design owner:
- Engineering owner:
- Architecture reviewer for high-risk workflows:
