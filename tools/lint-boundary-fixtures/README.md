# Lint Boundary Fixtures

Boundary fixtures are tested with `ESLint.lintText` in `boundary-fixtures.test.ts`.

The test supplies package-like `filePath` values such as:

```txt
packages/tokens/src/invalid-boundary-fixture.ts
packages/mobile-patterns/src/invalid-boundary-fixture.ts
```

This lets the normal lint command stay green while still proving the file-scoped boundary rules reject invalid imports.
