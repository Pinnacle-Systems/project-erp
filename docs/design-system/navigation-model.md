# Navigation Model

## Purpose

This document defines how the ERP UI platform uses side navigation, workspace tabs, breadcrumbs, and page headers across dense desktop workflows.

The platform supports users keeping multiple work items open at once, such as a sales invoice, a sales return, a customer master, or an approval detail. Workspace tabs and breadcrumbs must answer different questions:

- Workspace tabs answer: "What am I currently working on?"
- Breadcrumbs answer: "Where does the active work item belong?"

Breadcrumbs are always scoped to the active workspace tab. They must not represent all open tabs, and they must not represent navigation history.

## Concepts

### Side Navigation

Side navigation represents app and module areas.

Examples:

- Sales
- Purchase
- Inventory
- Finance
- HRMS

Side navigation is the user's entry point into major product areas. It is module hierarchy, not a list of currently open work.

### Workspace Tabs

Workspace tabs represent open work items.

Examples:

- Sales Invoice `SI-1024`
- Sales Return `SR-108`
- Customer `ABC Traders`
- Approval Detail `AP-331`

Workspace tabs support desktop workspace switching. They are not route hierarchy, module hierarchy, or navigation history.

### Breadcrumbs

Breadcrumbs represent the hierarchy or location of the active workspace tab.

Breadcrumbs must be derived from the active work item. When the active tab changes, the breadcrumb changes with it.

Breadcrumbs must not:

- Show all open workspace tabs.
- Show the user's navigation history.
- Duplicate workspace tab behavior.
- Replace side navigation or module hierarchy.

### PageHeader

The page header represents the active item identity and its actions.

It may include:

- Compact breadcrumb for the active item.
- Active item title.
- Document or workflow status.
- Primary and secondary actions.
- Context actions for the active item.

The page header should render information for the active work item only.

## Recommended Desktop Layout

Desktop ERP workflows should use this layout order:

```txt
TopBar
SideNav
WorkspaceTabs
PageHeader with compact breadcrumb
Content
```

Responsibilities:

- `TopBar` provides global application controls.
- `SideNav` provides app and module navigation.
- `WorkspaceTabs` provides switching between open work items.
- `PageHeader` identifies the active work item and renders its compact breadcrumb.
- `Content` renders the active work item surface.

## Example

Open workspace tabs:

- Sales Invoice `SI-1024`
- Sales Return `SR-108`
- Customer `ABC Traders`

When the active tab is Sales Return `SR-108`, the breadcrumb is:

```txt
Sales > Returns > SR-108
```

When the active tab changes to Sales Invoice `SI-1024`, the breadcrumb is:

```txt
Sales > Invoices > SI-1024
```

The breadcrumb changes because the active tab changed. The breadcrumb does not list the other open tabs.

## Anti-Patterns

Do not use breadcrumbs to show all open tabs.

Incorrect:

```txt
Sales Invoice SI-1024 > Sales Return SR-108 > Customer ABC Traders
```

Do not use breadcrumbs to show navigation history.

Incorrect:

```txt
Dashboard > Sales List > Customer ABC Traders > Sales Return SR-108
```

Do not render duplicate breadcrumb rows above and below workspace tabs.

Do not use workspace tabs as a substitute for module hierarchy. Module hierarchy belongs in side navigation and route structure owned by the client app.

Do not show full desktop workspace tabs on mobile by default.

## Mobile Rule

Mobile should generally use:

- Back button.
- Screen title.
- Document status.
- Optional module label.

Mobile does not use multi-document workspace tabs by default.

Mobile also should not rely on full desktop breadcrumbs by default. Mobile screens should prioritize the current task, clear return navigation, and compact identity/status presentation.

## Component Responsibility

`WorkspaceTabs` receives tabs and `activeTabId`.

`Breadcrumbs` receives the breadcrumbs for the active tab.

`PageHeader` renders breadcrumbs for the active item.

The client or reference app owns:

- Route state.
- Tab state.
- Active tab selection.
- Mapping active work items to breadcrumb data.
- Deciding which tabs are open.

The shared platform owns:

- Visual rendering.
- Interaction pattern.
- Accessibility behavior.
- Consistent desktop and mobile presentation rules.

## Deferred Features

The following features are intentionally deferred from this navigation model:

- Persisted workspace tabs.
- Restore tabs after reload.
- Dirty-tab close confirmation.
- Route-driven tab manager.
- Tab overflow management.
- Keyboard shortcuts for tab switching.
