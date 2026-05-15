import{j as e}from"./vendor-react-QzJwS0Xl.js";import{T as i}from"./index-DLXQGlMO.js";import{f as h,a as b,c as a}from"./demoActions-CkfkQI6c.js";import{q as l,a as J,T as u,S as K,b as f}from"./select-field-C9wJ5B38.js";import{P as c,S as r}from"./icon-chip-CEEhPAY1.js";import{I as C,b as X,c as Y,D as Z,d as ee}from"./demoData-kevtlJoJ.js";import"./index-D2yg1nQ6.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const oe={title:"Patterns/Transaction"},d=({readOnly:t=!1})=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(u,{label:"Customer",defaultValue:"Northwind Retail",readOnly:t,density:"compact"}),e.jsx(u,{label:"Invoice Date",type:"date",defaultValue:"2025-05-11",readOnly:t,density:"compact"}),e.jsxs(K,{label:"Payment Terms",density:"compact",defaultValue:"net30",children:[e.jsx(f,{value:"net30",children:"Net 30"}),e.jsx(f,{value:"net60",children:"Net 60"}),e.jsx(f,{value:"immediate",children:"Immediate"})]}),e.jsx(u,{label:"Reference No.",defaultValue:"PO-0841",readOnly:t,density:"compact"}),e.jsx(u,{label:"Currency",defaultValue:"INR",readOnly:t,density:"compact"})]}),o=({highlightLine:t}={})=>e.jsxs("table",{className:"w-full text-xs mt-1",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-neutral-200",children:["#","Item","Description","Qty","Rate","Amount"].map(n=>e.jsx("th",{className:"text-left py-1.5 px-2 text-neutral-500 font-medium first:pl-0",children:n},n))})}),e.jsx("tbody",{children:Y.map(n=>e.jsxs("tr",{className:["border-b border-neutral-100",t===n.n?"bg-amber-50":""].join(" "),children:[e.jsx("td",{className:"py-1.5 px-2 pl-0 text-neutral-400",children:n.n}),e.jsx("td",{className:"py-1.5 px-2 font-mono text-neutral-800",children:n.item}),e.jsx("td",{className:"py-1.5 px-2 text-neutral-700",children:n.desc}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:n.qty}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:n.rate}),e.jsx("td",{className:"py-1.5 px-2 text-right font-medium text-neutral-900",children:n.amt})]},n.n))})]}),p=()=>e.jsx("div",{className:"flex justify-end pt-1",children:e.jsxs("div",{className:"flex flex-col gap-1 min-w-44",children:[X.map(t=>e.jsxs("div",{className:"flex justify-between text-xs text-neutral-600",children:[e.jsx("span",{children:t.label}),e.jsx("span",{children:t.value})]},t.label)),e.jsxs("div",{className:"flex justify-between text-sm font-semibold text-neutral-900 pt-1 border-t border-neutral-200",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:C})]})]})}),P=()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-600",children:"Attachments"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Z.map(t=>e.jsxs("div",{className:"flex items-center gap-1.5 rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs text-neutral-700",children:[e.jsx("span",{children:"📎"}),e.jsx("span",{children:t})]},t))})]}),U=()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-600",children:"Audit Trail"}),e.jsx("div",{className:"flex flex-col gap-1",children:ee.map((t,n)=>e.jsxs("div",{className:"flex gap-3 text-xs text-neutral-600",children:[e.jsx("span",{className:"text-neutral-400 shrink-0 w-36",children:t.when}),e.jsx("span",{className:"text-neutral-500 shrink-0 w-20",children:t.who}),e.jsx("span",{children:t.what})]},n))})]}),m=({children:t})=>e.jsx("div",{className:"bg-neutral-50 min-h-screen p-4",children:e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsx("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm",children:t})})}),x={name:"Create Mode",render:()=>{const t={canView:a("allowed"),canCreate:a("allowed"),canEdit:a("allowed"),canEditHeader:a("allowed"),canEditLines:a("allowed"),canDelete:a("hidden"),canSubmit:a("allowed"),canApprove:a("hidden"),canReject:a("hidden"),canPost:a("hidden"),canCancel:a("allowed"),canAttachDocuments:a("allowed"),canComment:a("allowed"),canScan:a("hidden"),canBulkOperate:a("hidden"),canExport:a("hidden")},s=h([{id:"discard",label:"Discard",variant:"ghost",placement:"primary",requiredCapability:"canCancel"},{id:"save",label:"Save Draft",variant:"secondary",placement:"primary",requiredCapability:"canEdit"},{id:"submit",label:"Save & Submit",variant:"primary",placement:"primary",requiredCapability:"canSubmit"}],t,"desktop");return e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"New Sales Invoice",subtitle:"Create and submit for approval",status:e.jsx(r,{label:"Draft",tone:"default"}),density:"compact"}),e.jsx(i,{title:"New Sales Invoice",status:"draft",mode:"create",density:"compact",header:e.jsx(d,{}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),validationMessages:[],actions:e.jsx(b,{actions:s})})]})})}},v={name:"Edit Mode",render:()=>{const t={canView:a("allowed"),canCreate:a("allowed"),canEdit:a("allowed"),canEditHeader:a("allowed"),canEditLines:a("allowed"),canDelete:a("blocked","Delete requires supervisor review."),canSubmit:a("allowed"),canApprove:a("hidden"),canReject:a("hidden"),canPost:a("blocked","Post after approval."),canCancel:a("allowed"),canAttachDocuments:a("allowed"),canComment:a("allowed"),canScan:a("hidden"),canBulkOperate:a("hidden"),canExport:a("allowed")},s=h([{id:"cancel",label:"Cancel",variant:"ghost",placement:"primary",requiredCapability:"canCancel"},{id:"save",label:"Save",variant:"secondary",placement:"primary",requiredCapability:"canEdit"},{id:"submit",label:"Submit",variant:"primary",placement:"primary",requiredCapability:"canSubmit"},{id:"post",label:"Post",variant:"danger",placement:"secondary",requiredCapability:"canPost",requiresConfirmation:!0}],t,"desktop");return e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"Sales Invoice",subtitle:"SI-1001 · Northwind Retail",status:e.jsx(r,{label:"Submitted",tone:"info"}),density:"compact",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"invoices",label:"Invoices",href:"#"},{id:"si-1001",label:"SI-1001",current:!0}]}),e.jsx(i,{title:"Sales Invoice",documentNumber:"SI-1001",status:"submitted",mode:"edit",density:"compact",header:e.jsx(d,{}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),validationMessages:[],actions:e.jsx(b,{actions:s})})]})})}},S={name:"View Mode",render:()=>{const n=h([{id:"export",label:"Export PDF",variant:"secondary",placement:"primary"}],{canView:a("allowed"),canCreate:a("allowed"),canEdit:a("blocked","Document is posted."),canEditHeader:a("blocked","Document is posted."),canEditLines:a("blocked","Document is posted."),canDelete:a("hidden"),canSubmit:a("hidden"),canApprove:a("hidden"),canReject:a("hidden"),canPost:a("hidden"),canCancel:a("hidden"),canAttachDocuments:a("allowed"),canComment:a("allowed"),canScan:a("hidden"),canBulkOperate:a("hidden"),canExport:a("allowed")},"desktop");return e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"Sales Invoice",subtitle:"SI-1001 · 11 May 2025 · Northwind Retail",status:e.jsx(r,{label:"Posted",tone:"success"}),density:"compact",primaryAction:e.jsx(b,{actions:n}),meta:[{label:"Total",value:C},{label:"Posted by",value:"F. Chen"},{label:"Posted on",value:"11 May 2025, 08:00"}]}),e.jsx(i,{title:"Sales Invoice",documentNumber:"SI-1001",status:"posted",mode:"view",density:"compact",header:e.jsx(d,{readOnly:!0}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),actions:void 0,audit:e.jsx(U,{}),attachments:e.jsx(P,{})})]})})}},j={name:"Approval Mode",render:()=>{const t=[{id:"approve",label:"Approve",variant:"primary",placement:"primary"},{id:"request-changes",label:"Request Changes",variant:"secondary",placement:"primary"},{id:"reject",label:"Reject",variant:"danger",placement:"secondary"}],n=a("allowed"),s=h(t,{canView:n,canCreate:n,canEdit:n,canEditHeader:n,canEditLines:n,canDelete:a("hidden"),canSubmit:n,canApprove:n,canReject:n,canPost:a("hidden"),canCancel:n,canAttachDocuments:n,canComment:n,canScan:a("hidden"),canBulkOperate:a("hidden"),canExport:n},"desktop");return e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"Sales Invoice",subtitle:`SI-1001 · Northwind Retail · ${C}`,status:e.jsx(r,{label:"Pending Approval",tone:"warning"}),density:"compact",breadcrumbs:[{id:"approvals",label:"Approvals",href:"#"},{id:"si-1001",label:"SI-1001",current:!0}]}),e.jsx(i,{title:"Sales Invoice",documentNumber:"SI-1001",status:"pendingApproval",mode:"approval",density:"compact",header:e.jsx(d,{readOnly:!0}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),actions:e.jsx(b,{actions:s})})]})})}},y={name:"With Blocking Validation",render:()=>{const t=[{id:"v-customer",severity:"blocking",scope:"field",fieldPath:"header.customerId",message:"Customer is required before posting."},{id:"v-tax",severity:"warning",scope:"workflow",message:"Tax code not set. Default GST rate will be applied."}],n=[{id:"save",label:"Save",variant:"secondary",placement:"primary",requiredCapability:"canEdit"},{id:"post",label:"Post",variant:"danger",placement:"primary",requiredCapability:"canPost",requiresConfirmation:!0}],s={canView:a("allowed"),canCreate:a("allowed"),canEdit:a("allowed"),canEditHeader:a("allowed"),canEditLines:a("allowed"),canDelete:a("hidden"),canSubmit:a("hidden"),canApprove:a("hidden"),canReject:a("hidden"),canPost:a("blocked","Posting blocked until validation is resolved."),canCancel:a("allowed"),canAttachDocuments:a("allowed"),canComment:a("allowed"),canScan:a("hidden"),canBulkOperate:a("hidden"),canExport:a("allowed")},z=h(n,s,"desktop");return e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"Sales Invoice",subtitle:"SI-1002 · Draft",status:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(r,{label:"Draft",tone:"default"}),e.jsx(J,{variant:"danger",children:"2 issues"})]}),density:"compact"}),e.jsx(i,{title:"Sales Invoice",documentNumber:"SI-1002",status:"draft",mode:"edit",density:"compact",header:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(d,{}),e.jsx(u,{label:"Customer",placeholder:"Search customer…",error:!0,errorMessage:"Customer is required before posting.",density:"compact",className:"max-w-xs"})]}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),validationMessages:t,actions:e.jsx(b,{actions:z})})]})})}},w={name:"With Attachments",render:()=>e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"Sales Invoice",subtitle:"SI-1001 · Northwind Retail",status:e.jsx(r,{label:"Posted",tone:"success"}),density:"compact"}),e.jsx(i,{title:"Sales Invoice",documentNumber:"SI-1001",status:"posted",mode:"view",density:"compact",header:e.jsx(d,{readOnly:!0}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),attachments:e.jsx(P,{})})]})})},g={name:"With Audit",render:()=>e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(c,{title:"Sales Invoice",subtitle:"SI-1001 · Full audit trail",status:e.jsx(r,{label:"Posted",tone:"success"}),density:"compact"}),e.jsx(i,{title:"Sales Invoice",documentNumber:"SI-1001",status:"posted",mode:"view",density:"compact",header:e.jsx(d,{readOnly:!0}),lines:e.jsx(o,{}),totals:e.jsx(p,{}),attachments:e.jsx(P,{}),audit:e.jsx(U,{})})]})})};var A,I,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Create Mode",
  render: () => {
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("allowed"),
      canEditHeader: cap("allowed"),
      canEditLines: cap("allowed"),
      canDelete: cap("hidden"),
      canSubmit: cap("allowed"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("hidden"),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("hidden")
    };
    const actions: WorkflowAction[] = [{
      id: "discard",
      label: "Discard",
      variant: "ghost",
      placement: "primary",
      requiredCapability: "canCancel"
    }, {
      id: "save",
      label: "Save Draft",
      variant: "secondary",
      placement: "primary",
      requiredCapability: "canEdit"
    }, {
      id: "submit",
      label: "Save & Submit",
      variant: "primary",
      placement: "primary",
      requiredCapability: "canSubmit"
    }];
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");
    return <TooltipProvider>
        <Page>
          <PageHeader title="New Sales Invoice" subtitle="Create and submit for approval" status={<StatusBadge label="Draft" tone="default" />} density="compact" />
          <TransactionShell title="New Sales Invoice" status="draft" mode="create" density="compact" header={<HeaderForm />} lines={<LinesTable />} totals={<TotalsPanel />} validationMessages={[]} actions={<ActionBar actions={resolved} />} />
        </Page>
      </TooltipProvider>;
  }
}`,...(T=(I=x.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var N,E,D;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Edit Mode",
  render: () => {
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("allowed"),
      canEditHeader: cap("allowed"),
      canEditLines: cap("allowed"),
      canDelete: cap("blocked", "Delete requires supervisor review."),
      canSubmit: cap("allowed"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("blocked", "Post after approval."),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed")
    };
    const actions: WorkflowAction[] = [{
      id: "cancel",
      label: "Cancel",
      variant: "ghost",
      placement: "primary",
      requiredCapability: "canCancel"
    }, {
      id: "save",
      label: "Save",
      variant: "secondary",
      placement: "primary",
      requiredCapability: "canEdit"
    }, {
      id: "submit",
      label: "Submit",
      variant: "primary",
      placement: "primary",
      requiredCapability: "canSubmit"
    }, {
      id: "post",
      label: "Post",
      variant: "danger",
      placement: "secondary",
      requiredCapability: "canPost",
      requiresConfirmation: true
    }];
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");
    return <TooltipProvider>
        <Page>
          <PageHeader title="Sales Invoice" subtitle="SI-1001 · Northwind Retail" status={<StatusBadge label="Submitted" tone="info" />} density="compact" breadcrumbs={[{
          id: "sales",
          label: "Sales",
          href: "#"
        }, {
          id: "invoices",
          label: "Invoices",
          href: "#"
        }, {
          id: "si-1001",
          label: "SI-1001",
          current: true
        }]} />
          <TransactionShell title="Sales Invoice" documentNumber="SI-1001" status="submitted" mode="edit" density="compact" header={<HeaderForm />} lines={<LinesTable />} totals={<TotalsPanel />} validationMessages={[]} actions={<ActionBar actions={resolved} />} />
        </Page>
      </TooltipProvider>;
  }
}`,...(D=(E=v.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var k,B,M;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "View Mode",
  render: () => {
    const actions: WorkflowAction[] = [{
      id: "export",
      label: "Export PDF",
      variant: "secondary",
      placement: "primary"
    }];
    const resolved = filterActionsByCapabilities(actions, {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("blocked", "Document is posted."),
      canEditHeader: cap("blocked", "Document is posted."),
      canEditLines: cap("blocked", "Document is posted."),
      canDelete: cap("hidden"),
      canSubmit: cap("hidden"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("hidden"),
      canCancel: cap("hidden"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed")
    }, "desktop");
    return <TooltipProvider>
        <Page>
          <PageHeader title="Sales Invoice" subtitle="SI-1001 · 11 May 2025 · Northwind Retail" status={<StatusBadge label="Posted" tone="success" />} density="compact" primaryAction={<ActionBar actions={resolved} />} meta={[{
          label: "Total",
          value: INVOICE_TOTAL_FORMATTED
        }, {
          label: "Posted by",
          value: "F. Chen"
        }, {
          label: "Posted on",
          value: "11 May 2025, 08:00"
        }]} />
          <TransactionShell title="Sales Invoice" documentNumber="SI-1001" status="posted" mode="view" density="compact" header={<HeaderForm readOnly />} lines={<LinesTable />} totals={<TotalsPanel />} actions={undefined} audit={<AuditSlot />} attachments={<AttachmentsSlot />} />
        </Page>
      </TooltipProvider>;
  }
}`,...(M=(B=S.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var q,R,O;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Approval Mode",
  render: () => {
    const actions: WorkflowAction[] = [{
      id: "approve",
      label: "Approve",
      variant: "primary",
      placement: "primary"
    }, {
      id: "request-changes",
      label: "Request Changes",
      variant: "secondary",
      placement: "primary"
    }, {
      id: "reject",
      label: "Reject",
      variant: "danger",
      placement: "secondary"
    }];
    const allCap = cap("allowed");
    const resolved = filterActionsByCapabilities(actions, {
      canView: allCap,
      canCreate: allCap,
      canEdit: allCap,
      canEditHeader: allCap,
      canEditLines: allCap,
      canDelete: cap("hidden"),
      canSubmit: allCap,
      canApprove: allCap,
      canReject: allCap,
      canPost: cap("hidden"),
      canCancel: allCap,
      canAttachDocuments: allCap,
      canComment: allCap,
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: allCap
    }, "desktop");
    return <TooltipProvider>
        <Page>
          <PageHeader title="Sales Invoice" subtitle={\`SI-1001 · Northwind Retail · \${INVOICE_TOTAL_FORMATTED}\`} status={<StatusBadge label="Pending Approval" tone="warning" />} density="compact" breadcrumbs={[{
          id: "approvals",
          label: "Approvals",
          href: "#"
        }, {
          id: "si-1001",
          label: "SI-1001",
          current: true
        }]} />
          <TransactionShell title="Sales Invoice" documentNumber="SI-1001" status="pendingApproval" mode="approval" density="compact" header={<HeaderForm readOnly />} lines={<LinesTable />} totals={<TotalsPanel />} actions={<ActionBar actions={resolved} />} />
        </Page>
      </TooltipProvider>;
  }
}`,...(O=(R=j.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var V,H,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "With Blocking Validation",
  render: () => {
    const validationMessages: ValidationMessage[] = [{
      id: "v-customer",
      severity: "blocking",
      scope: "field",
      fieldPath: "header.customerId",
      message: "Customer is required before posting."
    }, {
      id: "v-tax",
      severity: "warning",
      scope: "workflow",
      message: "Tax code not set. Default GST rate will be applied."
    }];
    const actions: WorkflowAction[] = [{
      id: "save",
      label: "Save",
      variant: "secondary",
      placement: "primary",
      requiredCapability: "canEdit"
    }, {
      id: "post",
      label: "Post",
      variant: "danger",
      placement: "primary",
      requiredCapability: "canPost",
      requiresConfirmation: true
    }];
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("allowed"),
      canEditHeader: cap("allowed"),
      canEditLines: cap("allowed"),
      canDelete: cap("hidden"),
      canSubmit: cap("hidden"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("blocked", "Posting blocked until validation is resolved."),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed")
    };
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");
    return <TooltipProvider>
        <Page>
          <PageHeader title="Sales Invoice" subtitle="SI-1002 · Draft" status={<div className="flex items-center gap-1.5">
                <StatusBadge label="Draft" tone="default" />
                <Badge variant="danger">2 issues</Badge>
              </div>} density="compact" />
          <TransactionShell title="Sales Invoice" documentNumber="SI-1002" status="draft" mode="edit" density="compact" header={<div className="flex flex-col gap-3">
                <HeaderForm />
                <TextField label="Customer" placeholder="Search customer…" error errorMessage="Customer is required before posting." density="compact" className="max-w-xs" />
              </div>} lines={<LinesTable />} totals={<TotalsPanel />} validationMessages={validationMessages} actions={<ActionBar actions={resolved} />} />
        </Page>
      </TooltipProvider>;
  }
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var F,W,_;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With Attachments",
  render: () => <TooltipProvider>
      <Page>
        <PageHeader title="Sales Invoice" subtitle="SI-1001 · Northwind Retail" status={<StatusBadge label="Posted" tone="success" />} density="compact" />
        <TransactionShell title="Sales Invoice" documentNumber="SI-1001" status="posted" mode="view" density="compact" header={<HeaderForm readOnly />} lines={<LinesTable />} totals={<TotalsPanel />} attachments={<AttachmentsSlot />} />
      </Page>
    </TooltipProvider>
}`,...(_=(W=w.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var G,$,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "With Audit",
  render: () => <TooltipProvider>
      <Page>
        <PageHeader title="Sales Invoice" subtitle="SI-1001 · Full audit trail" status={<StatusBadge label="Posted" tone="success" />} density="compact" />
        <TransactionShell title="Sales Invoice" documentNumber="SI-1001" status="posted" mode="view" density="compact" header={<HeaderForm readOnly />} lines={<LinesTable />} totals={<TotalsPanel />} attachments={<AttachmentsSlot />} audit={<AuditSlot />} />
      </Page>
    </TooltipProvider>
}`,...(Q=($=g.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};const pe=["CreateMode","EditMode","ViewMode","ApprovalMode","WithBlockingValidation","WithAttachments","WithAudit"];export{j as ApprovalMode,x as CreateMode,v as EditMode,S as ViewMode,w as WithAttachments,g as WithAudit,y as WithBlockingValidation,pe as __namedExportsOrder,oe as default};
