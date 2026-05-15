import{r as P,j as e}from"./vendor-react-QzJwS0Xl.js";import{M as n,a as N,b as T,c as R,d as p,f as B,S as E}from"./mobile-Ciajz9-v.js";import{S as r}from"./icon-chip-CEEhPAY1.js";import{a as _,A as W}from"./demoData-kevtlJoJ.js";import"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const G={title:"Patterns/Mobile"},I=[{id:"task-first",number:"01",title:"Task-first, not desktop-compressed",body:"Each mobile screen presents one task. Do not collapse multi-tab desktop workflows into a single scrolling form. Use MobileTaskShell to enforce a single focused header, scrollable content, and a sticky action bar.",token:"MobileTaskShell"},{id:"summary-card",number:"02",title:"Summary cards for document identity",body:"MobileApprovalSummaryCard (or MobileDocumentSummary) provides the primary decision context at the top of the screen. The amount must be the most visually prominent number — the approver should know exactly what they are deciding on before reading the timeline or comments. Document type, number, and requester are secondary.",token:"MobileApprovalSummaryCard · MobileDocumentSummary"},{id:"timeline",number:"03",title:"Timelines for workflow progress",body:"MobileApprovalTimeline visualises where a document is in the approval chain. Approved steps use success tone, the current step uses info/primary tone, and pending steps use a muted indicator. Do not render step data as plain text rows.",token:"MobileApprovalTimeline"},{id:"comments",number:"04",title:"Comments as grouped cards",body:"MobileApprovalCommentList renders each reviewer or requester note as a distinct card: author name prominent, message in default text, timestamp in muted text. Do not render comments as a flat text stream or inside the summary card.",token:"MobileApprovalCommentList"},{id:"bottom-bar",number:"05",title:"Primary decisions in the bottom action bar",body:"MobileBottomActionBar places Approve, Reject, and Changes decisions in the thumb zone via MobileTaskShell's bottomBar slot. Primary actions must use touch density. Do not place decision buttons inline in the scrollable content area.",token:"MobileBottomActionBar"},{id:"density",number:"06",title:"Density controls rhythm, not capability",body:"Touch density increases spacing and touch target sizes. It does not show or hide features, change workflow permissions, or alter business rules. Use density='touch' on mobile screens; never use it to conditionally suppress actions.",token:'density="touch"'}],V=({number:t,title:a,body:s,token:O})=>e.jsxs("div",{className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-border-default)] bg-[var(--erp-surface-card)] p-4 shadow-[var(--erp-shadow-xs)]",children:[e.jsxs("div",{className:"mb-2 flex items-baseline gap-2",children:[e.jsx("span",{className:"text-[10px] font-bold tabular-nums text-[var(--erp-text-muted)]",children:t}),e.jsx("p",{className:"text-sm font-semibold text-[var(--erp-text-primary)]",children:a})]}),e.jsx("p",{className:"mb-3 text-xs leading-relaxed text-[var(--erp-text-secondary)]",children:s}),e.jsx("code",{className:"rounded bg-[var(--erp-surface-raised)] px-1.5 py-0.5 text-[10px] text-[var(--erp-text-muted)]",children:O})]}),L=_,C=W,D=[{label:"Customer",value:"ABC Traders"},{label:"Return date",value:"14 May 2026"},{label:"Warehouse",value:"Main Warehouse"},{label:"Reason",value:"Defective goods"}],i={render:()=>e.jsxs("div",{className:"mx-auto max-w-4xl space-y-6 p-6",style:{background:"var(--erp-surface-page)"},children:[e.jsxs("div",{className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-border-muted)] bg-[var(--erp-surface-raised)] p-5 shadow-[var(--erp-shadow-card)]",children:[e.jsx("p",{className:"mb-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-muted)]",children:"Patterns / Mobile"}),e.jsx("h1",{className:"mb-2 text-lg font-semibold text-[var(--erp-text-primary)]",children:"Mobile ERP Composition Grammar"}),e.jsx("p",{className:"text-sm leading-relaxed text-[var(--erp-text-secondary)]",children:"ERP workflows on mobile are companion tasks: approve, review, capture, or comment — not full document authoring. Each screen should present one task clearly, with the decision action always reachable without scrolling. The rules below govern how the reusable mobile pattern components compose into screens."})]}),e.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:I.map(t=>e.jsx(V,{...t},t.id))}),e.jsxs("div",{className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-border-muted)] bg-[var(--erp-surface-card)] p-4",children:[e.jsx("p",{className:"mb-2 text-xs font-semibold text-[var(--erp-text-secondary)]",children:"Canonical screen anatomy"}),e.jsx("div",{className:"mx-auto max-w-xs space-y-1.5",children:[{label:"MobileTaskShell header",bg:"var(--erp-surface-raised)",border:"var(--erp-border-default)"},{label:"MobileApprovalSummaryCard",bg:"var(--erp-surface-raised)",border:"var(--erp-color-primary-border)"},{label:"MobileApprovalTimeline",bg:"var(--erp-surface-card)",border:"var(--erp-border-muted)"},{label:"MobileApprovalCommentList",bg:"var(--erp-surface-card)",border:"var(--erp-border-muted)"},{label:"MobileBottomActionBar (sticky)",bg:"var(--erp-surface-raised)",border:"var(--erp-border-default)"}].map(({label:t,bg:a,border:s})=>e.jsx("div",{className:"rounded px-3 py-2 text-xs text-[var(--erp-text-secondary)]",style:{background:`var(${a}, ${a})`,border:`1px solid var(${s}, ${s})`},children:t},t))})]})]})},o={render:()=>e.jsx("div",{className:"flex justify-center py-6",style:{background:"var(--erp-surface-page)"},children:e.jsx(n,{title:"Approval",subtitle:"PO-2024-0841 · Purchase Order",backLabel:"‹ Back",status:e.jsx(r,{label:"Pending Approval",tone:"warning"}),bottomBar:e.jsx(p,{actions:[{id:"approve",label:"Approve",variant:"default"},{id:"changes",label:"Changes",variant:"secondary"},{id:"reject",label:"Reject",variant:"destructive"}]}),children:e.jsxs("div",{className:"space-y-3 p-4",children:[e.jsx(N,{statusLabel:"Pending Approval",statusTone:"warning",docType:"Purchase Order",docNumber:"PO-2024-0841",amount:"₹1,24,500.00",requester:"A. Sharma",helperText:"Awaiting Finance Review"}),e.jsx(T,{steps:L}),e.jsx(R,{comments:C})]})})})},l={render:()=>{const[t,a]=P.useState("ready");return e.jsx("div",{className:"flex justify-center py-6",style:{background:"var(--erp-surface-page)"},children:e.jsx(n,{title:"Scan Document",subtitle:"SD-8821 · Delivery receipt",backLabel:"‹ Back",children:e.jsx(E,{reference:"SD-8821",title:"Delivery note capture",description:"Position the delivery note inside the frame.",state:t,onScan:()=>{a("scanning"),setTimeout(()=>a("captured"),1600)},onReset:()=>a("ready"),onError:()=>a("error")})})})}},d={render:()=>e.jsx("div",{className:"flex justify-center py-6",style:{background:"var(--erp-surface-page)"},children:e.jsx(n,{title:"Review",subtitle:"SR-108 · Sales Return",backLabel:"‹ Back",status:e.jsx(r,{label:"Submitted",tone:"info"}),bottomBar:e.jsx(p,{actions:[{id:"approve",label:"Approve",variant:"default"},{id:"reject",label:"Reject",variant:"destructive"}],helperText:"Line editing is available from the desktop workspace."}),children:e.jsx("div",{className:"space-y-3 p-4",children:e.jsx(B,{fields:[...D],totals:e.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Items returned"}),e.jsx("p",{className:"text-2xl font-bold tabular-nums text-[var(--erp-text-primary)]",children:"2"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Pending credit"}),e.jsx("p",{className:"text-2xl font-bold tabular-nums text-[var(--erp-text-warning)]",children:"₹18,240"})]})]}),lines:[{id:"l1",title:"Widget A — 12 units",description:"Defective on arrival",meta:"₹9,600",status:e.jsx(r,{label:"Pending credit",tone:"warning"})},{id:"l2",title:"Widget B — 8 units",description:"Wrong specification",meta:"₹8,640",status:e.jsx(r,{label:"Pending credit",tone:"warning"})}],readOnlyLabel:"Mobile review",desktopEditMessage:"Quantity adjustments and line additions are available from the desktop workspace."})})})})},c={render:()=>{const[t,a]=P.useState("ready");return e.jsxs("div",{className:"grid gap-6 p-6 lg:grid-cols-3",style:{background:"var(--erp-color-app-bg)"},children:[e.jsx(n,{title:"Approval",subtitle:"PO-2024-0841 · Purchase Order",backLabel:"‹ Back",status:e.jsx(r,{label:"Pending Approval",tone:"warning"}),bottomBar:e.jsx(p,{actions:[{id:"approve",label:"Approve",variant:"default"},{id:"changes",label:"Changes",variant:"secondary"},{id:"reject",label:"Reject",variant:"destructive"}]}),children:e.jsxs("div",{className:"space-y-3 p-4",children:[e.jsx(N,{statusLabel:"Pending Approval",statusTone:"warning",docType:"Purchase Order",docNumber:"PO-2024-0841",amount:"₹1,24,500.00",requester:"A. Sharma",helperText:"Awaiting Finance Review"}),e.jsx(T,{steps:L}),e.jsx(R,{comments:C})]})}),e.jsx(n,{title:"Review",subtitle:"SR-108 · Sales Return",backLabel:"‹ Back",status:e.jsx(r,{label:"Submitted",tone:"info"}),bottomBar:e.jsx(p,{actions:[{id:"approve",label:"Approve",variant:"default"},{id:"reject",label:"Reject",variant:"destructive"}],helperText:"Line editing is available from the desktop workspace."}),children:e.jsx("div",{className:"space-y-3 p-4",children:e.jsx(B,{fields:[...D],totals:e.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Items returned"}),e.jsx("p",{className:"text-2xl font-bold tabular-nums text-[var(--erp-text-primary)]",children:"2"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Pending credit"}),e.jsx("p",{className:"text-2xl font-bold tabular-nums text-[var(--erp-text-warning)]",children:"₹18,240"})]})]}),lines:[{id:"l1",title:"Widget A — 12 units",description:"Defective on arrival",meta:"₹9,600",status:e.jsx(r,{label:"Pending credit",tone:"warning"})},{id:"l2",title:"Widget B — 8 units",description:"Wrong specification",meta:"₹8,640",status:e.jsx(r,{label:"Pending credit",tone:"warning"})}],readOnlyLabel:"Mobile review",desktopEditMessage:"Quantity adjustments and line additions are available from the desktop workspace."})})}),e.jsx(n,{title:"Scan Document",subtitle:"SD-8821 · Delivery receipt",backLabel:"‹ Back",children:e.jsx(E,{reference:"SD-8821",title:"Delivery note capture",description:"Position the delivery note inside the frame.",state:t,onScan:()=>{a("scanning"),setTimeout(()=>a("captured"),1600)},onReset:()=>a("ready"),onError:()=>a("error")})})]})}};var m,u,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-4xl space-y-6 p-6" style={{
    background: "var(--erp-surface-page)"
  }}>
      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-muted)] bg-[var(--erp-surface-raised)] p-5 shadow-[var(--erp-shadow-card)]">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-muted)]">
          Patterns / Mobile
        </p>
        <h1 className="mb-2 text-lg font-semibold text-[var(--erp-text-primary)]">
          Mobile ERP Composition Grammar
        </h1>
        <p className="text-sm leading-relaxed text-[var(--erp-text-secondary)]">
          ERP workflows on mobile are companion tasks: approve, review, capture, or comment — not
          full document authoring. Each screen should present one task clearly, with the decision
          action always reachable without scrolling. The rules below govern how the reusable mobile
          pattern components compose into screens.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RULES.map(rule => <RuleCard key={rule.id} {...rule} />)}
      </div>

      <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-border-muted)] bg-[var(--erp-surface-card)] p-4">
        <p className="mb-2 text-xs font-semibold text-[var(--erp-text-secondary)]">
          Canonical screen anatomy
        </p>
        <div className="mx-auto max-w-xs space-y-1.5">
          {[{
          label: "MobileTaskShell header",
          bg: "var(--erp-surface-raised)",
          border: "var(--erp-border-default)"
        }, {
          label: "MobileApprovalSummaryCard",
          bg: "var(--erp-surface-raised)",
          border: "var(--erp-color-primary-border)"
        }, {
          label: "MobileApprovalTimeline",
          bg: "var(--erp-surface-card)",
          border: "var(--erp-border-muted)"
        }, {
          label: "MobileApprovalCommentList",
          bg: "var(--erp-surface-card)",
          border: "var(--erp-border-muted)"
        }, {
          label: "MobileBottomActionBar (sticky)",
          bg: "var(--erp-surface-raised)",
          border: "var(--erp-border-default)"
        }].map(({
          label,
          bg,
          border
        }) => <div key={label} className="rounded px-3 py-2 text-xs text-[var(--erp-text-secondary)]" style={{
          background: \`var(\${bg}, \${bg})\`,
          border: \`1px solid var(\${border}, \${border})\`
        }}>
              {label}
            </div>)}
        </div>
      </div>
    </div>
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,x,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center py-6" style={{
    background: "var(--erp-surface-page)"
  }}>
      <MobileTaskShell title="Approval" subtitle="PO-2024-0841 · Purchase Order" backLabel="‹ Back" status={<StatusBadge label="Pending Approval" tone="warning" />} bottomBar={<MobileBottomActionBar actions={[{
      id: "approve",
      label: "Approve",
      variant: "default"
    }, {
      id: "changes",
      label: "Changes",
      variant: "secondary"
    }, {
      id: "reject",
      label: "Reject",
      variant: "destructive"
    }]} />}>
        <div className="space-y-3 p-4">
          {/*
           * Rule 02 — Summary card gives immediate document identity and decision context.
           * The approver sees what they are acting on before reading anything else.
           */}
          <MobileApprovalSummaryCard statusLabel="Pending Approval" statusTone="warning" docType="Purchase Order" docNumber="PO-2024-0841" amount="₹1,24,500.00" requester="A. Sharma" helperText="Awaiting Finance Review" />

          {/*
           * Rule 03 — Timeline shows approval chain progress with semantic tone per step.
           * approved → success (green), pending → info (blue), not_started → muted.
           */}
          <MobileApprovalTimeline steps={APPROVAL_STEPS_EXAMPLE} />

          {/*
           * Rule 04 — Each comment is a discrete card: author / message / timestamp.
           * Not a flat text stream, and never merged into the summary card.
           */}
          <MobileApprovalCommentList comments={APPROVAL_COMMENTS_EXAMPLE} />
        </div>
        {/*
         * Rule 05 — Actions are in the sticky bottom bar, always above the thumb line.
         * Approve uses primary variant, Changes uses secondary, Reject uses destructive.
         * Rule 06 — MobileBottomActionBar uses touch density automatically.
         */}
      </MobileTaskShell>
    </div>
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,y,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [scanState, setScanState] = useState<"ready" | "scanning" | "captured" | "error">("ready");
    return <div className="flex justify-center py-6" style={{
      background: "var(--erp-surface-page)"
    }}>
        <MobileTaskShell title="Scan Document" subtitle="SD-8821 · Delivery receipt" backLabel="‹ Back"
      /*
       * Rule 01 — Single focused task: capture a delivery note.
       * No inline form editing, no line items, no header fields.
       * ScannerCapturePlaceholder owns its own bottom action bar.
       */>
          <ScannerCapturePlaceholder reference="SD-8821" title="Delivery note capture" description="Position the delivery note inside the frame." state={scanState} onScan={() => {
          setScanState("scanning");
          setTimeout(() => setScanState("captured"), 1600);
        }} onReset={() => setScanState("ready")} onError={() => setScanState("error")} />
        </MobileTaskShell>
      </div>;
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,k,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center py-6" style={{
    background: "var(--erp-surface-page)"
  }}>
      <MobileTaskShell title="Review" subtitle="SR-108 · Sales Return" backLabel="‹ Back" status={<StatusBadge label="Submitted" tone="info" />} bottomBar={<MobileBottomActionBar actions={[{
      id: "approve",
      label: "Approve",
      variant: "default"
    }, {
      id: "reject",
      label: "Reject",
      variant: "destructive"
    }]} helperText="Line editing is available from the desktop workspace." />}>
        <div className="space-y-3 p-4">
          {/*
           * Rule 02 — MobileDocumentSummary provides document identity and field context.
           * totals carries the hero operational fact (items returned + pending credit).
           * lines render each returned item as a scannable card with a status badge.
           * desktopEditMessage is secondary — nudge without blocking the review flow.
           */}
          <MobileDocumentSummary fields={[...REVIEW_FIELDS]} totals={<div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                    Items returned
                  </p>
                  <p className="text-2xl font-bold tabular-nums text-[var(--erp-text-primary)]">2</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                    Pending credit
                  </p>
                  <p className="text-2xl font-bold tabular-nums text-[var(--erp-text-warning)]">
                    ₹18,240
                  </p>
                </div>
              </div>} lines={[{
          id: "l1",
          title: "Widget A — 12 units",
          description: "Defective on arrival",
          meta: "₹9,600",
          status: <StatusBadge label="Pending credit" tone="warning" />
        }, {
          id: "l2",
          title: "Widget B — 8 units",
          description: "Wrong specification",
          meta: "₹8,640",
          status: <StatusBadge label="Pending credit" tone="warning" />
        }]} readOnlyLabel="Mobile review" desktopEditMessage="Quantity adjustments and line additions are available from the desktop workspace." />
        </div>
      </MobileTaskShell>
    </div>
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,A,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [scanState, setScanState] = useState<"ready" | "scanning" | "captured" | "error">("ready");
    return <div className="grid gap-6 p-6 lg:grid-cols-3" style={{
      background: "var(--erp-color-app-bg)"
    }}>
        {/* Approval */}
        <MobileTaskShell title="Approval" subtitle="PO-2024-0841 · Purchase Order" backLabel="‹ Back" status={<StatusBadge label="Pending Approval" tone="warning" />} bottomBar={<MobileBottomActionBar actions={[{
        id: "approve",
        label: "Approve",
        variant: "default"
      }, {
        id: "changes",
        label: "Changes",
        variant: "secondary"
      }, {
        id: "reject",
        label: "Reject",
        variant: "destructive"
      }]} />}>
          <div className="space-y-3 p-4">
            <MobileApprovalSummaryCard statusLabel="Pending Approval" statusTone="warning" docType="Purchase Order" docNumber="PO-2024-0841" amount="₹1,24,500.00" requester="A. Sharma" helperText="Awaiting Finance Review" />
            <MobileApprovalTimeline steps={APPROVAL_STEPS_EXAMPLE} />
            <MobileApprovalCommentList comments={APPROVAL_COMMENTS_EXAMPLE} />
          </div>
        </MobileTaskShell>

        {/* Review */}
        <MobileTaskShell title="Review" subtitle="SR-108 · Sales Return" backLabel="‹ Back" status={<StatusBadge label="Submitted" tone="info" />} bottomBar={<MobileBottomActionBar actions={[{
        id: "approve",
        label: "Approve",
        variant: "default"
      }, {
        id: "reject",
        label: "Reject",
        variant: "destructive"
      }]} helperText="Line editing is available from the desktop workspace." />}>
          <div className="space-y-3 p-4">
            <MobileDocumentSummary fields={[...REVIEW_FIELDS]} totals={<div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                      Items returned
                    </p>
                    <p className="text-2xl font-bold tabular-nums text-[var(--erp-text-primary)]">2</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
                      Pending credit
                    </p>
                    <p className="text-2xl font-bold tabular-nums text-[var(--erp-text-warning)]">
                      ₹18,240
                    </p>
                  </div>
                </div>} lines={[{
            id: "l1",
            title: "Widget A — 12 units",
            description: "Defective on arrival",
            meta: "₹9,600",
            status: <StatusBadge label="Pending credit" tone="warning" />
          }, {
            id: "l2",
            title: "Widget B — 8 units",
            description: "Wrong specification",
            meta: "₹8,640",
            status: <StatusBadge label="Pending credit" tone="warning" />
          }]} readOnlyLabel="Mobile review" desktopEditMessage="Quantity adjustments and line additions are available from the desktop workspace." />
          </div>
        </MobileTaskShell>

        {/* Scanner */}
        <MobileTaskShell title="Scan Document" subtitle="SD-8821 · Delivery receipt" backLabel="‹ Back">
          <ScannerCapturePlaceholder reference="SD-8821" title="Delivery note capture" description="Position the delivery note inside the frame." state={scanState} onScan={() => {
          setScanState("scanning");
          setTimeout(() => setScanState("captured"), 1600);
        }} onReset={() => setScanState("ready")} onError={() => setScanState("error")} />
        </MobileTaskShell>
      </div>;
  }
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const H=["CompositionPrimer","ApprovalTask","ScannerAssistedTask","ReviewTask","AllCompositions"];export{c as AllCompositions,o as ApprovalTask,i as CompositionPrimer,d as ReviewTask,l as ScannerAssistedTask,H as __namedExportsOrder,G as default};
