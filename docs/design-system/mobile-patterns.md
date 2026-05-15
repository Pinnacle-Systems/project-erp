# Mobile ERP Pattern Governance

ERP workflows on mobile are companion tasks: approve, review, capture, or comment. They are not feature-parity copies of desktop screens. Every mobile screen presents one focused task with the primary action always reachable in the thumb zone without scrolling.

**Storybook reference:** `apps/storybook/stories/mobile-patterns.stories.tsx` — `Patterns/Mobile`

Stories in that file:

| Story | What it demonstrates |
| --- | --- |
| `CompositionPrimer` | Six composition rules annotated with token and component names |
| `ApprovalTask` | Full approval screen: summary card → timeline → comments → bottom bar |
| `ScannerAssistedTask` | Device-native capture screen: task shell + scanner placeholder |
| `ReviewTask` | Read-only review: document summary with totals and line cards |
| `AllCompositions` | All three tasks side by side for cross-task comparison |

---

## Standard Mobile Screen Anatomy

Every task screen is assembled from four layers in this order:

```
MobileTaskShell (title, subtitle, backLabel, status badge slot)
  └── scrollable content
        ├── Summary card          — document identity and primary decision context
        ├── Task-specific content — timeline, scanner, review fields, or comment list
        └── (secondary detail)
  └── bottomBar slot
        └── MobileBottomActionBar — primary decisions (Approve / Reject / Changes)
```

### Layer 1 — MobileTaskShell

`MobileTaskShell` is the mandatory outer wrapper for every task screen. It owns:

- A fixed header with title, optional subtitle, back label, and optional status badge
- A scrollable content region
- A `bottomBar` slot that renders sticky and above the OS home indicator

Do not implement a custom shell. Do not add a second sticky region inside the scrollable area.

### Layer 2 — Summary card

The summary card must be the first thing inside the scrollable content region. The user must understand what they are acting on before reaching the timeline, comments, or any other detail — no scrolling required.

| Task type | Component |
| --- | --- |
| Approval task | `MobileApprovalSummaryCard` |
| Review / read-only task | `MobileDocumentSummary` |

**`MobileApprovalSummaryCard`** layout contract:

- Badge + document type in the header row
- Document number as secondary text
- **Amount as the visual hero** (`text-2xl font-bold`) — the approver must see the financial exposure immediately
- Requester name as muted detail below the amount

**`MobileDocumentSummary`** layout contract:

- Context fields in a grid
- Most operationally important value in the `totals` slot (`text-2xl font-bold`)
- Individual line items in the `lines` slot

### Layer 3 — Task-specific content

Use the canonical component for each content type:

| Content type | Component | When to use |
| --- | --- | --- |
| Approval chain progress | `MobileApprovalTimeline` | Any document in a multi-step approval workflow |
| Reviewer / requester notes | `MobileApprovalCommentList` | Any screen with comments, notes, or review history |
| Document capture | `ScannerCapturePlaceholder` (or real scanner integration built on the same shell) | Device-native capture tasks |
| Review fields | Field grid inside `MobileDocumentSummary` | Read-only document review |

Never render timeline step data as plain text rows. Never render comments as a flat text stream inside the summary card.

### Layer 4 — MobileBottomActionBar

All primary decisions (Approve, Reject, Request Changes, Submit, Confirm) belong in `MobileBottomActionBar` via the `bottomBar` slot — not inline inside the scrollable content area.

`MobileBottomActionBar` applies `touch` density automatically. Do not set `density="touch"` on individual buttons inside it.

Scanner capture screens use `MobileTaskShell` without a `bottomBar` — the capture placeholder owns its own action area.

---

## Governance Rules

### Task-first, not feature-parity

Mobile screens are task-first. Do not compress desktop tables, multi-field forms, or multi-tab workflows into a single scrolling mobile screen. One task per screen.

If a desktop screen covers multiple workflows (e.g., edit + approve + history), split them into separate mobile screens, each with its own `MobileTaskShell`.

### Summary cards provide decision context

The approver or reviewer must know what they are acting on before reading any supporting detail. Always place the summary card at the top of the content region. Never hide the document amount, status, or identity behind a tab or collapse.

### Timelines for approval and progress workflows

Use `MobileApprovalTimeline` whenever a document moves through a multi-step approval chain. The component enforces consistent visual state: approved steps use `success` tone, the current active step uses `info`/`primary` tone, and pending steps use a muted indicator.

### Comment cards for notes and review history

Use `MobileApprovalCommentList` for any screen with reviewer notes, requester notes, or comment history. Each note renders as a distinct card (author prominent, message in default text, timestamp muted).

### Scanner and device-native actions

Use `ScannerCapturePlaceholder` — or a real integration built on the same shell interface — for document capture, barcode scan, and receipt attachment workflows. Do not render a file input or a plain button in place of the scanner shell.

### Sticky bottom bar for primary decisions

Decision buttons must be in the thumb zone. If a user has to scroll to find the Approve or Reject button, the layout violates the task-first rule. Use `MobileBottomActionBar` exclusively.

### No desktop tables or multi-field forms inside mobile screens

Mobile screens may show line-item summaries using `MobileDocumentSummary`'s `lines` slot, but must not embed full editable grids, sortable tables, or complex desktop forms. If a workflow genuinely requires tabular editing on mobile, it requires a dedicated design review before implementation.

### Density controls touch rhythm, not workflow

`density="touch"` adjusts spacing and touch target sizes. It does not show or hide features, change workflow permissions, or alter field visibility. Never use density as a condition in business logic.

---

## Codex Guardrail

When creating a new mobile workflow:

1. Open `Patterns/Mobile → Composition Primer` in Storybook (`apps/storybook/stories/mobile-patterns.stories.tsx`) and identify the closest existing screen pattern.
2. Reuse `MobileTaskShell`, the appropriate summary card, task-specific components, and `MobileBottomActionBar` from `@erp-ui-platform/mobile-patterns`.
3. Do **not** create a new layout component until you can demonstrate that none of the existing mobile primitives fit the task. If a new primitive is needed, add it to `packages/mobile-patterns` and document it in a new Storybook story under `Patterns/Mobile`.
4. All visual tokens must use `--erp-*` semantic variables. No raw Tailwind palette classes on mobile screens.

---

## Reference

| Resource | Location |
| --- | --- |
| Mobile Storybook stories | `apps/storybook/stories/mobile-patterns.stories.tsx` |
| Mobile pattern components | `packages/mobile-patterns/src/mobile.tsx` |
| Theme tokens | `packages/theme/src/theme.css` |
| Token vocabulary | `docs/design-system/theming.md` |
| Screen implementation checklist | `docs/design-system/screen-implementation-checklist.md` |
