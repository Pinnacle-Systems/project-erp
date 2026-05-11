# ADR 002: Design System Foundation Strategy

**Status:** Accepted  
**Date:** 2026-05-11  
**Tags:** Design System, UI Platform, Tokens, Components

## 1. Context

We are building custom ERP and business applications for multiple clients. These applications need consistent UI/UX behavior, but they must allow client-specific business rules, workflows, integrations, permissions, and branding.

A traditional design system made only of visual components is not enough. We want reusable UI/UX behavior, not just reusable visual components.

The shared platform must define how ERP interfaces behave:

- How dense screens are arranged.
- How transaction pages behave.
- How editable grids handle focus, validation, and keyboard movement.
- How lookup and autofill work.
- How approvals are presented.
- How validation and errors are displayed.
- How desktop, mobile, and tablet shells differ.

At the same time, building every low-level primitive and accessibility behavior from scratch would be expensive and unnecessary.

## 2. Decision

We will not build all UI primitives from scratch.

We will use an existing component or accessibility foundation where useful, then build our own ERP-specific UI/UX platform on top.

This ADR is library-neutral. Candidate foundations may include Radix UI, React Aria, Headless UI, shadcn/ui, MUI, Ant Design, or equivalent libraries.

External libraries may provide primitives, accessibility behavior, state machines, and implementation leverage. Our internal platform owns the ERP product grammar, shared behavior, and governance layer.

Client apps must not consume raw third-party primitives directly everywhere. They should consume our platform wrappers and patterns.

Prefer:

```tsx
<AppButton />
<AppTextField />
<TransactionShell />
```

Avoid direct uncontrolled usage of third-party `Button`, `Input`, or `Table` components across client apps.

## 3. What We Reuse from External Foundations

External foundations may provide:

- Accessible primitive behavior.
- Keyboard interaction patterns.
- Focus management.
- Dialog, menu, popover, tab, tooltip, select, and combobox mechanics.
- State machines for common controls.
- Low-level component composition models.
- Table or grid foundations where appropriate.
- Proven cross-browser behavior.
- Community-tested implementation patterns.

These foundations are implementation inputs, not the product design system itself.

## 4. What We Own Internally

Our internal ERP UI/UX platform owns:

- Design tokens.
- Density rules.
- Layout grammar.
- Desktop, mobile, and tablet shell interaction rules.
- Transaction patterns.
- Editable grid behavior.
- Lookup and autofill behavior.
- Validation display behavior.
- Approval UX.
- Workflow action presentation.
- Status badge language.
- Report filter layout.
- Dashboard layout patterns.
- Capability-aware action rendering.
- Platform wrappers around primitives.

Internal platform components and patterns should expose stable contracts to client apps. Underlying third-party libraries may change over time, but client application code should remain anchored to our platform API.

## 5. Why Not Build Everything from Scratch

Building all primitives from scratch would require owning a large amount of complex behavior:

- Accessibility semantics.
- Keyboard navigation.
- Focus trapping.
- Screen reader behavior.
- Popover positioning.
- Menu behavior.
- Combobox behavior.
- Cross-browser interaction bugs.
- Mobile interaction edge cases.

These are important, but they are not the primary differentiator of the ERP platform. We should spend internal effort on ERP-specific behavior, governance, and workflow patterns rather than recreating mature primitive foundations.

## 6. Why Not Use a Public Design System As-Is

Public design systems and component libraries are not ERP product architecture.

They may provide useful controls, but they do not define our:

- Device-specific shell boundaries.
- ERP density model.
- Transaction shell behavior.
- Editable grid grammar.
- Lookup and autofill model.
- Validation presentation rules.
- Approval UX.
- Capability-aware action states.
- Client customization model.
- Governance rules for mobile vs desktop workflows.

Using a public design system as-is would also make it easier for client apps to diverge through uncontrolled direct usage. The shared platform must provide a consistent wrapper and pattern layer.

## 7. Consequences

### Positives

- Reduces time spent recreating mature primitive behavior.
- Gives the platform stronger accessibility foundations.
- Keeps client app usage consistent through internal wrappers.
- Allows the internal team to focus on ERP-specific behavior.
- Preserves the ability to change underlying libraries later.

### Tradeoffs

- The platform must maintain wrapper components and pattern APIs.
- Underlying library upgrades may still require careful testing.
- Some third-party assumptions may conflict with ERP density or shell needs.
- Governance is required to prevent raw primitive usage from spreading through client apps.

## 8. Non-Goals

This ADR does not decide:

- The final third-party foundation library.
- The full component API.
- The final visual design language.
- The complete package structure.
- The table or grid implementation library.
- The styling engine.
- The release process for platform packages.
