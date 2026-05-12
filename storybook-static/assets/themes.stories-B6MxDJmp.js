import{j as e,T as t,r as be}from"./iframe-CewInuWt.js";import{B as l,T as o,S as N,b as n,a as i}from"./select-field-BpVK6OAn.js";import{L as ge,S as s,P as ce,C as ve}from"./confirm-dialog-BML_ndGp.js";import{T as he}from"./index-CxIOM7Yn.js";import{V as me,c as xe}from"./index-BlC6eqR6.js";import{M as fe,a as je}from"./mobile-BpOEizMb.js";import{A as Se,a as ye}from"./demoData-kevtlJoJ.js";import{v as pe,a as Ne,b as Te}from"./demoValidation-BdoxO43p.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";import"./index-BvAJUK7m.js";const Oe={title:"Foundation/Themes"},Ae=[{label:"Customer",value:"Northwind Retail"},{label:"Invoice Date",value:"11 May 2026"},{label:"Amount",value:"₹1,793.60"}],ue=xe([Ne,pe,Te]),Be=({density:a})=>{const[r,T]=be.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"secondary",density:a,onClick:()=>T(!0),children:"Open confirm dialog"}),e.jsx(ve,{open:r,onOpenChange:T,title:"Confirm post",description:"ConfirmDialog consumes the same surface, radius, focus, and action tokens as the rest of the platform.",confirmLabel:"Post invoice",onConfirm:()=>T(!1)})]})},d=({theme:a="default",density:r="comfortable"})=>e.jsx(t,{theme:a,density:r,className:"rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)]",children:e.jsxs("div",{className:"overflow-hidden rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] shadow-[var(--erp-shadow-sm)]",children:[e.jsx(ce,{title:"Sales Invoice",subtitle:"SI-1002 · Theme token sample",density:r,status:e.jsx(s,{label:"Pending",tone:"warning"}),primaryAction:e.jsx(l,{variant:"default",density:r,children:"Submit"}),secondaryActions:e.jsx(l,{variant:"secondary",density:r,children:"Save"}),meta:Ae}),e.jsxs("div",{className:"grid gap-[var(--erp-gap)] p-4 md:grid-cols-2",children:[e.jsx(o,{label:"Customer",defaultValue:"Northwind Retail",density:r}),e.jsxs(N,{label:"Payment Terms",defaultValue:"net30",density:r,children:[e.jsx(n,{value:"net30",children:"Net 30"}),e.jsx(n,{value:"net60",children:"Net 60"})]}),e.jsx(o,{label:"Tax Code",defaultValue:"Not set",errorMessage:"Tax code is required before posting.",density:r}),e.jsxs("div",{className:"flex items-end gap-2",children:[e.jsx(i,{children:"Draft"}),e.jsx(i,{variant:"info",children:"Submitted"}),e.jsx(i,{variant:"success",children:"Approved"}),e.jsx(i,{variant:"danger",children:"Blocked"})]})]}),e.jsx(me,{summary:ue,title:"Cannot post"}),e.jsx("div",{className:"p-4",children:e.jsx(Be,{density:r})})]})}),c={render:()=>e.jsx(d,{theme:"default"})},m={render:()=>e.jsx(d,{theme:"clientA"})},p={render:()=>e.jsx(d,{theme:"clientB"})},u={render:()=>e.jsx(d,{theme:"default",density:"compact"})},b={render:()=>e.jsx(d,{theme:"default",density:"comfortable"})},g={render:()=>e.jsx(d,{theme:"default",density:"touch"})},v={render:()=>e.jsx("div",{className:"grid gap-4 xl:grid-cols-3",children:["default","clientA","clientB"].map(a=>e.jsx(d,{theme:a,density:"compact"},a))})},h={render:()=>e.jsx("div",{className:"grid gap-4 xl:grid-cols-3",children:["default","clientA","clientB"].map(a=>e.jsxs(t,{theme:a,density:"comfortable",className:"rounded-lg border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4",children:[e.jsx("p",{className:"mb-3 text-sm font-semibold text-[var(--erp-fg)]",children:a}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{label:"Draft",tone:"default"}),e.jsx(s,{label:"Submitted",tone:"info"}),e.jsx(s,{label:"Approved",tone:"success"}),e.jsx(s,{label:"Warning",tone:"warning"}),e.jsx(s,{label:"Blocked",tone:"danger"}),e.jsx(s,{label:"Muted",tone:"muted"})]})]},a))})},x={render:()=>e.jsxs(t,{theme:"clientA",density:"comfortable",className:"grid gap-4 rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)] md:grid-cols-2",children:[e.jsxs("div",{className:"grid gap-3 rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4",children:[e.jsx("p",{className:"text-sm font-semibold text-[var(--erp-fg)]",children:"Focus tokens"}),e.jsx(l,{autoFocus:!0,children:"Focused button"}),e.jsx(o,{label:"Focused field",defaultValue:"Focus uses --erp-focus-ring"}),e.jsxs(N,{label:"Focused select",defaultValue:"posting",children:[e.jsx(n,{value:"posting",children:"Ready to post"}),e.jsx(n,{value:"hold",children:"Hold"})]})]}),e.jsxs("div",{className:"grid gap-3 rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4",children:[e.jsx("p",{className:"text-sm font-semibold text-[var(--erp-fg)]",children:"Disabled tokens"}),e.jsx(l,{disabled:!0,children:"Disabled button"}),e.jsx(o,{label:"Disabled field",defaultValue:"Read only",disabled:!0}),e.jsx(N,{label:"Disabled select",defaultValue:"posting",disabled:!0,children:e.jsx(n,{value:"posting",children:"Ready to post"})})]})]})},f={render:()=>e.jsxs(t,{theme:"clientB",density:"comfortable",className:"grid gap-4 rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)]",children:[e.jsx(d,{theme:"clientB",density:"comfortable"}),e.jsxs(t,{density:"compact",className:"rounded-lg border border-[var(--erp-border-strong)] bg-[var(--erp-surface)] p-4",children:[e.jsx("p",{className:"mb-3 text-sm font-semibold text-[var(--erp-fg)]",children:"Nested provider inherits clientB and only overrides density"}),e.jsxs("div",{className:"grid gap-[var(--erp-field-gap)] md:grid-cols-3",children:[e.jsx(o,{label:"Compact field",defaultValue:"Inherited brand"}),e.jsxs(N,{label:"Compact select",defaultValue:"approved",children:[e.jsx(n,{value:"approved",children:"Approved"}),e.jsx(n,{value:"posted",children:"Posted"})]}),e.jsx("div",{className:"flex items-end gap-2",children:e.jsx(l,{children:"Compact action"})})]})]})]})},j={render:()=>e.jsx("div",{className:"grid gap-4 xl:grid-cols-3",children:["default","clientA","clientB"].map(a=>e.jsxs(t,{theme:a,density:"compact",className:"overflow-hidden rounded-lg border border-[var(--erp-border)] bg-[var(--erp-surface)] shadow-[var(--erp-shadow-sm)]",children:[e.jsx(ce,{title:"Sales Invoice",subtitle:`${a} · SI-1002`,density:"compact",status:e.jsx(s,{label:"Draft",tone:"default"})}),e.jsx(he,{title:"Sales Invoice",status:"draft",mode:"edit",density:"compact",header:e.jsxs("div",{className:"grid gap-2",children:[e.jsx(o,{label:"Customer",defaultValue:"Northwind Retail",density:"compact"}),e.jsx(o,{label:"Invoice Date",defaultValue:"11 May 2026",density:"compact"})]}),lines:e.jsx("table",{className:"erp-demo-table text-xs",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"FAB-001"}),e.jsx("td",{children:"Fabric roll"}),e.jsx("td",{children:"12"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ACC-220"}),e.jsx("td",{children:"Accessory pack"}),e.jsx("td",{children:"8"})]})]})}),validationMessages:[pe],actions:e.jsx(l,{density:"compact",children:"Save"})})]},a))})},S={render:()=>e.jsx("div",{className:"grid gap-4 xl:grid-cols-3",children:["default","clientA","clientB"].map(a=>e.jsx(t,{theme:a,density:"touch",children:e.jsx(fe,{title:"Approval",subtitle:`${a} · PO-2024-0841`,backLabel:"Back",children:e.jsx(je,{status:"pending",statusLabel:"Pending",statusTone:"warning",steps:ye,comments:Se,actions:[{id:"approve",decision:"approve",label:"Approve"},{id:"changes",decision:"request_changes",label:"Changes"},{id:"reject",decision:"reject",label:"Reject"}],summary:e.jsxs("div",{className:"grid gap-1 text-sm text-[var(--erp-fg)]",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-[var(--erp-muted)]",children:"Requester"}),e.jsx("span",{children:"A. Sharma"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-[var(--erp-muted)]",children:"Amount"}),e.jsx("span",{children:"₹1,24,500.00"})]})]})})})},a))})},y={render:()=>e.jsx(t,{theme:"clientA",density:"comfortable",className:"rounded-lg bg-[var(--erp-surface)] p-4",children:e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsx(ge,{variant:"skeleton"}),e.jsx(me,{summary:ue,title:"Validation"})]})})};var A,B,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ThemeSample theme="default" />
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var C,F,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ThemeSample theme="clientA" />
}`,...(D=(F=m.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var V,k,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ThemeSample theme="clientB" />
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var I,M,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ThemeSample theme="default" density="compact" />
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var L,O,E;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ThemeSample theme="default" density="comfortable" />
}`,...(E=(O=b.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,q,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ThemeSample theme="default" density="touch" />
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var W,$,z;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map(theme => <ThemeSample key={theme} theme={theme} density="compact" />)}
    </div>
}`,...(z=($=v.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map(theme => <ThemeProvider key={theme} theme={theme} density="comfortable" className="rounded-lg border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
          <p className="mb-3 text-sm font-semibold text-[var(--erp-fg)]">{theme}</p>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label="Draft" tone="default" />
            <StatusBadge label="Submitted" tone="info" />
            <StatusBadge label="Approved" tone="success" />
            <StatusBadge label="Warning" tone="warning" />
            <StatusBadge label="Blocked" tone="danger" />
            <StatusBadge label="Muted" tone="muted" />
          </div>
        </ThemeProvider>)}
    </div>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme="clientA" density="comfortable" className="grid gap-4 rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)] md:grid-cols-2">
      <div className="grid gap-3 rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
        <p className="text-sm font-semibold text-[var(--erp-fg)]">Focus tokens</p>
        <Button autoFocus>Focused button</Button>
        <TextField label="Focused field" defaultValue="Focus uses --erp-focus-ring" />
        <SelectField label="Focused select" defaultValue="posting">
          <SelectItem value="posting">Ready to post</SelectItem>
          <SelectItem value="hold">Hold</SelectItem>
        </SelectField>
      </div>
      <div className="grid gap-3 rounded-[var(--erp-radius-panel)] border border-[var(--erp-border)] bg-[var(--erp-surface)] p-4">
        <p className="text-sm font-semibold text-[var(--erp-fg)]">Disabled tokens</p>
        <Button disabled>Disabled button</Button>
        <TextField label="Disabled field" defaultValue="Read only" disabled />
        <SelectField label="Disabled select" defaultValue="posting" disabled>
          <SelectItem value="posting">Ready to post</SelectItem>
        </SelectField>
      </div>
    </ThemeProvider>
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme="clientB" density="comfortable" className="grid gap-4 rounded-lg border border-[var(--erp-border)] bg-[var(--erp-bg)] p-[var(--erp-page-padding)]">
      <ThemeSample theme="clientB" density="comfortable" />
      <ThemeProvider density="compact" className="rounded-lg border border-[var(--erp-border-strong)] bg-[var(--erp-surface)] p-4">
        <p className="mb-3 text-sm font-semibold text-[var(--erp-fg)]">
          Nested provider inherits clientB and only overrides density
        </p>
        <div className="grid gap-[var(--erp-field-gap)] md:grid-cols-3">
          <TextField label="Compact field" defaultValue="Inherited brand" />
          <SelectField label="Compact select" defaultValue="approved">
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="posted">Posted</SelectItem>
          </SelectField>
          <div className="flex items-end gap-2">
            <Button>Compact action</Button>
          </div>
        </div>
      </ThemeProvider>
    </ThemeProvider>
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map(theme => <ThemeProvider key={theme} theme={theme} density="compact" className="overflow-hidden rounded-lg border border-[var(--erp-border)] bg-[var(--erp-surface)] shadow-[var(--erp-shadow-sm)]">
          <PageHeader title="Sales Invoice" subtitle={\`\${theme} · SI-1002\`} density="compact" status={<StatusBadge label="Draft" tone="default" />} />
          <TransactionShell title="Sales Invoice" status="draft" mode="edit" density="compact" header={<div className="grid gap-2">
                <TextField label="Customer" defaultValue="Northwind Retail" density="compact" />
                <TextField label="Invoice Date" defaultValue="11 May 2026" density="compact" />
              </div>} lines={<table className="erp-demo-table text-xs">
                <tbody>
                  <tr>
                    <td>FAB-001</td>
                    <td>Fabric roll</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>ACC-220</td>
                    <td>Accessory pack</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>} validationMessages={[validationWarning]} actions={<Button density="compact">Save</Button>} />
        </ThemeProvider>)}
    </div>
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,de,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 xl:grid-cols-3">
      {(["default", "clientA", "clientB"] as const).map(theme => <ThemeProvider key={theme} theme={theme} density="touch">
          <MobileTaskShell title="Approval" subtitle={\`\${theme} · PO-2024-0841\`} backLabel="Back">
            <MobileApprovalFlow status="pending" statusLabel="Pending" statusTone="warning" steps={APPROVAL_STEPS} comments={APPROVAL_COMMENTS} actions={[{
          id: "approve",
          decision: "approve",
          label: "Approve"
        }, {
          id: "changes",
          decision: "request_changes",
          label: "Changes"
        }, {
          id: "reject",
          decision: "reject",
          label: "Reject"
        }]} summary={<div className="grid gap-1 text-sm text-[var(--erp-fg)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--erp-muted)]">Requester</span>
                    <span>A. Sharma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--erp-muted)]">Amount</span>
                    <span>₹1,24,500.00</span>
                  </div>
                </div>} />
          </MobileTaskShell>
        </ThemeProvider>)}
    </div>
}`,...(ne=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var le,oe,ie;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme="clientA" density="comfortable" className="rounded-lg bg-[var(--erp-surface)] p-4">
      <div className="grid gap-4 md:grid-cols-2">
        <LoadingState variant="skeleton" />
        <ValidationSummaryPanel summary={validationSummary} title="Validation" />
      </div>
    </ThemeProvider>
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Ee=["DefaultTheme","ClientATheme","ClientBTheme","CompactDensity","ComfortableDensity","TouchDensity","ThemeComparison","StatusTonesByTheme","FocusAndDisabledStates","NestedDensityOverride","TransactionShellByTheme","MobileApprovalByTheme","LoadingAndValidationByTheme"];export{m as ClientATheme,p as ClientBTheme,b as ComfortableDensity,u as CompactDensity,c as DefaultTheme,x as FocusAndDisabledStates,y as LoadingAndValidationByTheme,S as MobileApprovalByTheme,f as NestedDensityOverride,h as StatusTonesByTheme,v as ThemeComparison,g as TouchDensity,j as TransactionShellByTheme,Ee as __namedExportsOrder,Oe as default};
