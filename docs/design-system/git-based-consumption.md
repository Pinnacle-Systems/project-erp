# Git-Based Consumption

## Purpose

This document explains how client applications consume the shared ERP UI/UX platform without private npm packages.

Initial strategy:

- The shared UI/UX platform lives in a separate Git repository.
- Each client app consumes it using Git subtree under `packages/erp-ui-platform`.
- Client apps import shared platform code through local path aliases.
- Shared platform versions are tracked using Git tags and `docs/platform-version.md` in each client repo.
- No npm publishing is required initially.

Git submodule is documented as an alternative, but Git subtree is the primary recommendation.

## 1. Why Git Subtree Is Preferred Initially

Git subtree is preferred because:

- It does not require a private npm registry.
- It keeps each client repository self-contained after checkout.
- It avoids submodule initialization problems for less Git-heavy teams.
- It lets client apps pin a known platform snapshot in their own history.
- It supports pulling updates from the shared platform repository.
- It supports pushing reusable improvements back upstream.

This fits the current constraint: we cannot afford private npm packages.

## 2. How Git Subtree Works

Git subtree copies another Git repository into a subdirectory of the consuming repository while preserving a relationship to the upstream repository.

In a client app:

```txt
client-app/
  packages/
    erp-ui-platform/
      packages/
        tokens/
        transaction-shell/
        editable-grid/
        approval-ui/
```

The client app commits the subtree contents into its own repository. Developers do not need to run special submodule commands after cloning.

## 3. Add the Shared Platform to a Client App

From the client app repository:

```sh
git remote add erp-ui-platform <platform-git-url>
git fetch erp-ui-platform
git subtree add --prefix packages/erp-ui-platform erp-ui-platform main --squash
```

To consume a specific tag:

```sh
git fetch erp-ui-platform --tags
git subtree add --prefix packages/erp-ui-platform erp-ui-platform v0.1.0 --squash
```

Create or update:

```txt
docs/platform-version.md
```

Example:

```md
# Platform Version

- Platform remote: git@example.com:your-org/erp-ui-platform.git
- Consumed version: v0.1.0
- Consumed commit: abc1234
- Pulled on: 2026-05-11
- Pulled by: Frontend Platform Team
- Notes: Initial subtree import.
```

## 4. Pull Platform Updates Into a Client App

Fetch tags and pull the desired version:

```sh
git fetch erp-ui-platform --tags
git subtree pull --prefix packages/erp-ui-platform erp-ui-platform v0.2.0 --squash
```

After pulling:

- Update `docs/platform-version.md`.
- Run client app tests.
- Review affected workflows.
- Review migration notes.
- Commit the subtree update and platform-version update together.

## 5. Push Reusable Improvements Back

If a client app improves reusable platform code inside `packages/erp-ui-platform`, push those changes back to the shared platform repo.

From the client app repository:

```sh
git subtree push --prefix packages/erp-ui-platform erp-ui-platform client-improvement-branch
```

Then open a pull request in the shared platform repository.

Rules:

- Only reusable platform improvements should be pushed upstream.
- Client-specific business rules must not be pushed to the shared platform.
- Improvements should include tests and docs where appropriate.
- Platform maintainers review and tag releases from the shared platform repo.

## 6. Track Platform Versions with Git Tags

The shared platform repository should tag stable versions:

```sh
git tag v0.1.0
git push origin v0.1.0
```

Tags should follow semantic versioning:

- Patch: bug fix, no intentional API or behavior change.
- Minor: new optional component, prop, token, helper, or pattern.
- Major: breaking API, visual contract, behavior, keyboard flow, layout contract, or accessibility behavior.

Client repositories should record the consumed tag or commit in `docs/platform-version.md`.

## 7. Configure TypeScript Path Aliases

Client apps should import from local path aliases that point to the subtree.

Example `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@erp-ui-platform/*": [
        "packages/erp-ui-platform/packages/*/src"
      ]
    }
  }
}
```

Example import:

```ts
import { TransactionShell } from "@erp-ui-platform/transaction-shell";
import { filterActionsByCapabilities } from "@erp-ui-platform/workflow-actions";
```

Prefer package entrypoints. Avoid importing deep internal files unless the platform explicitly documents them.

## 8. Tradeoffs Compared to Private npm Packages

### Benefits

- No private registry cost.
- Client repos are self-contained.
- Easy to inspect and patch platform code locally.
- Works before release automation is mature.
- Good fit for early platform development.

### Tradeoffs

- Subtree updates require Git discipline.
- Package-level versioning is less granular.
- Client repos include a copy of platform source.
- Dependency deduplication is less automatic than package manager installs.
- Teams need a process for pushing reusable fixes upstream.

## 9. When to Move to a Private Package Registry Later

Private npm packages may become useful later when:

- The platform has many consuming client apps.
- Package APIs are stable.
- The team can afford private registry hosting.
- Release automation is mature.
- Package-level versioning matters.
- Dependency installation speed and deduplication become important.
- Access control and audit requirements justify registry operations.

When that happens, Git subtree can be replaced or supplemented with published private packages. Until then, Git subtree is the recommended consumption model.

