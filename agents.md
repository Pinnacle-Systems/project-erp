# Working agreement for this repo

Before implementing any code change:

1. Read `/ai/architecture-constraints.md`
2. Read relevant `/spec/entities/*.yaml`
3. Read relevant `/spec/workflows/*.yaml`
4. Summarize applicable constraints and invariants
5. Use the `spec-check` skill
6. Only then propose or write code

Mandatory:
- You MUST use the `spec-check` skill for all non-trivial changes

Hard violations (never allowed):
- Unscoped tenant data access
- Inventory mutation without ledger impact
- Inline UOM conversions

Before finalizing:
- Explain which constraints were applied
- List assumptions
- Run relevant tests