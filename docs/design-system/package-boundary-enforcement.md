# Package Boundary Enforcement

## Purpose

Package boundaries are enforced with ESLint using file-scoped `no-restricted-imports` rules.

Run:

```sh
pnpm lint
```

`pnpm check` runs lint and tests together.

## Enforced Rules

- `packages/tokens` cannot import from other internal packages.
- Shared packages must not import from `apps/*`.
- Platform UI packages must not import from client app folders.
- `capability-contracts` cannot import UI packages.
- Platform/core/runtime packages must not import UI packages.
- `desktop-patterns` must not import `mobile-patterns` directly.
- `mobile-patterns` must not import `desktop-patterns` directly.
- Apps must not import from other apps.
- Shared packages must not import from apps.

## Why

The shared UI/UX platform must keep a clean dependency direction:

```txt
tokens
  -> primitives
  -> app-components
  -> patterns
  -> shells/apps
```

Contract packages such as `capability-contracts` must remain UI-independent so API, authorization, and UI packages can all depend on the same capability shapes without pulling in rendering concerns.

## Fixtures

Boundary lint fixtures live in:

```txt
tools/lint-boundary-fixtures/
```

They are not part of normal lint targets because they intentionally contain invalid imports. The Vitest fixture test runs ESLint programmatically and verifies that those invalid imports are rejected.
