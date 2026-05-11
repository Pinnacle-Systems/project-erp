# Versioning Policy

## Purpose

This document defines how the shared ERP UI/UX platform should be versioned and upgraded across multiple consuming client apps.

Client apps must be able to adopt platform improvements without being forced into unexpected behavior changes.

The initial consumption model is Git-based, not registry-based. Client apps consume the shared platform repository with Git subtree under `packages/erp-ui-platform`, import through local path aliases, and track the platform version with Git tags plus `docs/platform-version.md`.

## Versioning Standard

Use semantic versioning for shared packages.

```txt
MAJOR.MINOR.PATCH
```

## Patch Versions

Use patch versions for:

- Bug fixes with no intentional API or behavior change.
- Accessibility fixes that preserve expected behavior.
- Internal refactors.
- Documentation fixes.
- Minor visual corrections with no compatibility impact.

Example patch changes:

- Fixing a focus trap bug.
- Fixing an incorrect disabled state.
- Correcting a token typo without changing intended output.
- Fixing a validation message rendering bug.

## Minor Versions

Use minor versions for:

- New optional components.
- New optional props.
- New optional tokens.
- New optional patterns.
- Backward-compatible behavior additions.
- Feature flags for upcoming behavior.

Example minor changes:

- Adding an optional compact density token.
- Adding a new optional `description` prop.
- Adding a new approval comment pattern without changing existing approval behavior.
- Changing button padding when visual compatibility remains acceptable and documented.

## Major Versions

Use major versions for:

- Breaking API changes.
- Breaking visual contract changes.
- Breaking behavior changes.
- Breaking keyboard flow changes.
- Breaking layout contract changes.
- Breaking accessibility behavior changes.
- Removed props, tokens, or components.
- Changed default behavior.
- Changed shell rules.
- Changed validation placement.
- Changed editable-grid navigation behavior.
- Changed workflow action semantics.
- Changed theming contracts.

Example major changes:

- Removing a prop.
- Changing grid tab navigation behavior.
- Moving validation messages from inline placement to footer placement.
- Changing approval confirmation behavior in a way that affects user flow.
- Changing layout slot behavior in `TransactionShell`.
- Changing accessibility behavior that screen reader or keyboard users rely on.

## Behavior Changes

UI behavior changes can be breaking even when TypeScript APIs do not change.

Examples:

- Changing grid tab navigation may be major.
- Moving validation messages from inline to footer may be major.
- Changing button padding may be minor only if the visual impact is acceptable and documented.
- Fixing a focus trap bug is patch.
- Adding an optional compact density token is minor.
- Removing a prop is major.

Treat interaction behavior, keyboard flow, focus behavior, validation placement, shell layout, and accessibility behavior as part of the public contract.

## Git-Based Consumption

Shared UI/UX platform code is consumed from Git initially.

Client app example:

```txt
client-app/
  packages/
    erp-ui-platform/
  docs/
    platform-version.md
```

`docs/platform-version.md` should record:

- Shared platform Git remote.
- Git tag or commit consumed.
- Date pulled.
- Person/team responsible.
- Client-side migration notes.

## Client App Consumption

Client apps must track shared platform versions and upgrade intentionally.

Use TypeScript path aliases to import from the subtree.

```json
{
  "compilerOptions": {
    "paths": {
      "@erp-ui-platform/*": [
        "packages/erp-ui-platform/packages/*/src"
      ]
    }
  }
}
```

Avoid ad hoc imports into internal files that bypass package entrypoints.

## Future Package Registry Option

Private npm packages may be introduced later when the team can afford and operate a private package registry.

Moving to a registry may be appropriate when:

- Many client apps consume the platform.
- Release automation is mature.
- Package-level versioning is needed.
- Registry cost and access management are acceptable.

Until then, Git subtree is the preferred strategy.

## Release Notes Requirement

Every release should document:

- Added features.
- Fixed issues.
- Behavior changes.
- Migration steps.
- Known risks.
- Screens or packages affected.

Release notes must call out any changes to:

- Keyboard behavior.
- Focus behavior.
- Validation placement.
- Layout contracts.
- Accessibility behavior.
- Shell-specific interaction rules.
- Visual contracts.

## Changelog Requirement

Every package must maintain a changelog.

The changelog should include:

- Version number.
- Release date.
- Change type: patch, minor, or major.
- Package names affected.
- Notable behavior changes.
- Migration links when applicable.

## Migration Guide Requirement

Major versions require a migration guide.

The migration guide should include:

- What changed.
- Why it changed.
- Who is affected.
- Required code changes.
- Required visual or UX review.
- Testing recommendations.
- Rollback considerations.

## Upgrade Testing Policy

Client apps should test upgrades before adoption.

At minimum, test:

- Affected screens.
- Desktop and mobile shell behavior.
- Keyboard navigation.
- Focus management.
- Validation display.
- Workflow actions.
- Approval flows.
- Editable grids.
- Lookup behavior.
- Capability-driven disabled or blocked actions.

High-risk upgrades should be tested in at least one reference app and one consuming client app before broader rollout.

## Visual Regression Recommendation

Use visual regression testing for shared platform package changes when practical.

Visual regression is especially recommended for:

- Tokens.
- Primitives.
- Layout shells.
- Transaction shell.
- Editable grid.
- Validation UI.
- Approval UI.
- Mobile and desktop pattern packages.

## Storybook Review Requirement

Platform package changes should include Storybook coverage or updated Storybook examples when they affect visible UI or interaction behavior.

Storybook review should cover:

- Default state.
- Disabled and blocked states.
- Error and validation states.
- Keyboard and focus behavior where applicable.
- Desktop and mobile variants where applicable.
- Density and theme variants where applicable.
