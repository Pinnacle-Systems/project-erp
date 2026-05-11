# Shared UI Platform Roadmap

## Purpose

This roadmap defines phased work for building the shared ERP UI/UX platform.

The platform should grow from governance and foundations into reusable ERP behavior, device shell patterns, runtime configuration, and multi-client consumption.

## Guiding Principles

- Build a reusable ERP UI behavior platform, not only a visual component library.
- Keep business truth in consuming client applications.
- Use slots, contracts, adapters, and extension points for customization.
- Avoid extracting overly broad abstractions before repeated use proves the need.
- Treat shell boundaries, capabilities, and versioning as governance concerns from the start.

## Phase 0: Governance and ADRs

### Goal

Establish the architecture and governance rules before building runtime packages.

### Deliverables

- Architecture ADRs.
- Package boundaries.
- Shell rules.
- Customization model.
- Versioning policy.
- Capability contract governance.
- BFF/API boundary rules.

### Done Criteria

- ADRs are accepted.
- Package boundaries are documented.
- Shell-specific ownership rules are documented.
- Client app customization layers are documented.
- Versioning and upgrade policy are documented.
- Mobile feature request checklist is available.

### Risks

- Governance becomes shelfware if not used in product review.
- Teams may continue adding client-specific logic to shared packages.
- Shell boundaries may be weakened by shared route or page composition shortcuts.

## Phase 1: Foundations

### Goal

Create the stable visual and primitive foundation used by all platform packages.

### Deliverables

- Tokens.
- Primitive wrappers.
- Theme provider.
- Density system.
- Storybook setup.
- Reference app skeleton.

### Done Criteria

- Tokens are defined without importing from other packages.
- Primitive wrappers consume tokens and approved accessibility foundations.
- Theme provider supports client branding inputs.
- Density system supports approved density modes.
- Storybook runs with foundational examples.
- Reference app skeleton can render themed primitives.

### Risks

- Primitive wrappers may leak raw third-party APIs.
- Token naming may become too client-specific.
- Density rules may be treated as visual polish instead of product behavior.
- Storybook may lag behind actual package usage.

## Phase 2: Application Components

### Goal

Build reusable business-neutral application components used across ERP screens.

### Deliverables

- Page header.
- Filter bar.
- Data table.
- Status badge.
- Empty, error, and loading states.
- Confirm dialog.
- Attachment panel.
- Audit timeline.

### Done Criteria

- Components use platform primitives and tokens.
- Components have Storybook coverage.
- Components avoid client-specific business rules.
- Accessibility behavior is reviewed.
- Components support required density and theme variants.

### Risks

- Components may become too generic to be useful.
- Data table scope may expand into editable grid behavior too early.
- Status badges may encode client-specific workflow states.
- Attachment and audit UI may assume a specific backend shape.

## Phase 3: ERP Patterns

### Goal

Create reusable ERP-specific patterns through slots, contracts, and adapters.

### Deliverables

- Transaction shell.
- Editable grid.
- Lookup field.
- Validation summary.
- Workflow action bar.
- Document summary card.
- Approval panel.

### Done Criteria

- Patterns expose business-neutral contracts.
- Client-specific rules are injected through adapters or slots.
- Editable grid keyboard behavior is documented.
- Lookup behavior supports provider interfaces.
- Validation summary supports field and document-level messages.
- Workflow action bar consumes capability-style inputs.
- Approval panel does not encode approval hierarchy.

### Risks

- Transaction shell may accidentally encode invoice-specific assumptions.
- Editable grid behavior may become difficult to version.
- Lookup providers may pull API assumptions into the platform.
- Approval UI may drift into client-specific approval policy.

## Phase 4: Device Shell Patterns

### Goal

Define reusable shell interaction patterns for desktop, mobile, and tablet without forcing shared page composition.

### Deliverables

- Desktop workspace shell.
- Mobile task flow shell.
- Mobile approval flow.
- Scanner capture flow.
- Tablet exception guidance.

### Done Criteria

- Desktop shell supports dense authoring patterns.
- Mobile shell supports focused companion workflows.
- Scanner capture flow supports task-focused capture without business-specific scan rules.
- Mobile approval flow consumes capability contracts.
- Tablet guidance documents when tablet becomes a separate grammar.
- Shell patterns do not define shared route trees.

### Risks

- Mobile may become a smaller desktop if page composition is reused.
- Shell patterns may import from each other without shared abstractions.
- Scanner UI may assume client-specific device or barcode rules.
- Tablet scope may expand without workflow evidence.

## Phase 5: Runtime/Configuration

### Goal

Introduce business-neutral runtime and configuration support after platform contracts are stable.

### Deliverables

- Screen definition runtime.
- Config merge rules.
- Capability-driven actions.
- Slot and adapters model.
- Validation adapter model.

### Done Criteria

- Runtime renders resolved screen definitions, not client business truth.
- Config merge rules are deterministic and documented.
- Capability-driven actions support visible, disabled, blocked, and unavailable reasons.
- Slots and adapters allow client-owned business behavior.
- Validation adapters preserve shared validation display contracts.

### Risks

- Runtime may become a premature universal ERP framework.
- Config may be overused for complex business logic.
- Client-specific rules may leak into shared runtime defaults.
- Capability evaluation may be confused with backend authorization.

## Phase 6: Multi-Client Consumption

### Goal

Support stable adoption of platform packages by multiple client application repositories.

### Deliverables

- Private npm publishing.
- Client integration guide.
- Reference client app.
- Upgrade policy.
- Migration process.

### Done Criteria

- Packages are published privately with semantic versions.
- Client apps pin platform package versions.
- Integration guide explains setup, theming, capabilities, adapters, and shell usage.
- Reference client app demonstrates realistic but fake modules.
- Major-version migration process is documented.
- Upgrade testing expectations are documented.

### Risks

- Clients may upgrade without testing workflow behavior.
- Package versions may drift across clients without visibility.
- Reference app may accidentally become client-specific.
- Migration guides may lag behind breaking behavior changes.

## Extraction Rule

Use this rule before moving behavior into the shared platform:

- First client: build in the client app.
- Second client: copy and adapt consciously.
- Third client: extract into the shared platform.

Start shared earlier only for obvious foundations such as tokens, primitives, shells, grids, lookup UX, validation display, approval UI, and capability contract shapes.
