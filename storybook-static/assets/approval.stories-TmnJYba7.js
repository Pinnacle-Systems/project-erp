import{j as e}from"./vendor-react-QzJwS0Xl.js";import{M as B,a as I,b as V,c as k,d as Z,A as D}from"./mobile-Ciajz9-v.js";import{B as H}from"./select-field-C9wJ5B38.js";import{S as f,P as W}from"./icon-chip-CEEhPAY1.js";import{A as O,a as q}from"./demoData-kevtlJoJ.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const se={title:"Patterns/Approval"},X={not_started:"muted",pending:"warning",approved:"success",rejected:"danger",changes_requested:"warning",cancelled:"muted"},z={not_started:"Not Started",pending:"Pending Approval",approved:"Approved",rejected:"Rejected",changes_requested:"Changes Requested",cancelled:"Cancelled"},G=a=>e.jsx(H,{variant:a.decision==="reject"?"destructive":a.decision==="request_changes"?"secondary":"default",density:"comfortable",width:"hug",disabled:a.disabled,title:a.reason,children:a.label}),t=({title:a,docNumber:l,status:c,steps:T,comments:_,allowedActions:L,attachments:E,shell:F="desktop"})=>e.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden",children:[e.jsx(W,{title:a??"Document",subtitle:l,status:e.jsx(f,{label:z[c],tone:X[c]}),density:"compact"}),e.jsx(D,{status:c,steps:T,comments:_,allowedActions:L,shell:F,renderAction:G,summary:e.jsxs("div",{className:"text-xs text-neutral-600",children:[e.jsx("span",{className:"font-medium",children:l})," · ",e.jsx("span",{className:"text-neutral-500",children:"₹1,24,500.00"})]}),attachments:E})]}),s={render:()=>e.jsx(t,{title:"Purchase Order",docNumber:"PO-2024-0841",status:"pending",steps:q,comments:O,allowedActions:[{id:"approve",decision:"approve",label:"Approve"},{id:"request-changes",decision:"request_changes",label:"Request Changes",requiresComment:!0},{id:"reject",decision:"reject",label:"Reject",requiresComment:!0}]})},r={render:()=>e.jsx(t,{title:"Purchase Order",docNumber:"PO-2024-0841",status:"approved",steps:[{id:"dept-head",label:"Department Head",status:"approved",actor:{id:"u1",displayName:"M. Rao"}},{id:"finance",label:"Finance Review",status:"approved",actor:{id:"u2",displayName:"F. Chen"}},{id:"cfo",label:"CFO Sign-off",status:"approved",actor:{id:"u3",displayName:"A. Sharma"}}],allowedActions:[]})},n={render:()=>e.jsx(t,{title:"Expense Claim",docNumber:"EXP-2025-0312",status:"rejected",steps:[{id:"manager",label:"Manager Review",status:"approved",actor:{id:"u1",displayName:"P. Verma"}},{id:"finance",label:"Finance Review",status:"rejected",actor:{id:"u2",displayName:"F. Chen"}}],comments:[{id:"c1",actor:{id:"u2",displayName:"F. Chen"},message:"Receipts missing for items over ₹5,000. Resubmit with documentation.",createdAt:"2025-05-10T14:30:00Z",decision:"reject"}],allowedActions:[]})},i={render:()=>e.jsx(t,{title:"Leave Request",docNumber:"LV-2025-0089",status:"changes_requested",steps:[{id:"manager",label:"Manager Review",status:"changes_requested",actor:{id:"u1",displayName:"S. Nair"}}],comments:[{id:"c1",actor:{id:"u1",displayName:"S. Nair"},message:"Please split this into two separate requests — medical and personal.",createdAt:"2025-05-10T11:00:00Z",decision:"request_changes"}],allowedActions:[]})},o={render:()=>e.jsx(t,{title:"Purchase Order",docNumber:"PO-2024-0841",status:"pending",steps:q,comments:[...O,{id:"c3",actor:{id:"u2",displayName:"F. Chen"},message:"Vendor rate is higher than the last approved order by 8%. Flagging for review.",createdAt:"2025-05-10T09:00:00Z"}],allowedActions:[{id:"approve",decision:"approve",label:"Approve"},{id:"reject",decision:"reject",label:"Reject",requiresComment:!0}]})},J=[{id:"manager",label:"Manager review",status:"approved",actor:{id:"u1",displayName:"M. Rao"}},{id:"finance",label:"Finance review",status:"pending",actor:{id:"u2",displayName:"F. Chen"}}],K=[{id:"c1",actor:{id:"u3",displayName:"Requester"},message:"Please approve for dispatch.",createdAt:"2025-05-11T00:00:00Z"}],d={render:()=>e.jsx(B,{title:"Approval",subtitle:"SI-2025-1001 · Sales Invoice",backLabel:"‹ Back",status:e.jsx(f,{label:"Pending Approval",tone:"warning"}),bottomBar:e.jsx(Z,{actions:[{id:"approve",label:"Approve",variant:"default"},{id:"changes",label:"Changes",variant:"secondary"},{id:"reject",label:"Reject",variant:"destructive"}]}),children:e.jsxs("div",{className:"space-y-3 p-4",children:[e.jsx(I,{statusLabel:"Pending Approval",statusTone:"warning",docType:"Sales Invoice",docNumber:"SI-2025-1001",amount:"₹1,24,500.00",requester:"A. Sharma",helperText:"Awaiting Finance Review"}),e.jsx(V,{steps:J}),e.jsx(k,{comments:K}),e.jsx("p",{className:"px-1 text-xs text-[var(--erp-text-muted)]",children:"2 attachments: Receipt.pdf, PO.pdf"})]})})};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ApprovalCard title="Purchase Order" docNumber="PO-2024-0841" status="pending" steps={APPROVAL_STEPS} comments={APPROVAL_COMMENTS} allowedActions={[{
    id: "approve",
    decision: "approve",
    label: "Approve"
  }, {
    id: "request-changes",
    decision: "request_changes",
    label: "Request Changes",
    requiresComment: true
  }, {
    id: "reject",
    decision: "reject",
    label: "Reject",
    requiresComment: true
  }]} />
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ApprovalCard title="Purchase Order" docNumber="PO-2024-0841" status="approved" steps={[{
    id: "dept-head",
    label: "Department Head",
    status: "approved",
    actor: {
      id: "u1",
      displayName: "M. Rao"
    }
  }, {
    id: "finance",
    label: "Finance Review",
    status: "approved",
    actor: {
      id: "u2",
      displayName: "F. Chen"
    }
  }, {
    id: "cfo",
    label: "CFO Sign-off",
    status: "approved",
    actor: {
      id: "u3",
      displayName: "A. Sharma"
    }
  }]} allowedActions={[]} />
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,A,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ApprovalCard title="Expense Claim" docNumber="EXP-2025-0312" status="rejected" steps={[{
    id: "manager",
    label: "Manager Review",
    status: "approved",
    actor: {
      id: "u1",
      displayName: "P. Verma"
    }
  }, {
    id: "finance",
    label: "Finance Review",
    status: "rejected",
    actor: {
      id: "u2",
      displayName: "F. Chen"
    }
  }]} comments={[{
    id: "c1",
    actor: {
      id: "u2",
      displayName: "F. Chen"
    },
    message: "Receipts missing for items over ₹5,000. Resubmit with documentation.",
    createdAt: "2025-05-10T14:30:00Z",
    decision: "reject"
  }]} allowedActions={[]} />
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var N,P,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ApprovalCard title="Leave Request" docNumber="LV-2025-0089" status="changes_requested" steps={[{
    id: "manager",
    label: "Manager Review",
    status: "changes_requested",
    actor: {
      id: "u1",
      displayName: "S. Nair"
    }
  }]} comments={[{
    id: "c1",
    actor: {
      id: "u1",
      displayName: "S. Nair"
    },
    message: "Please split this into two separate requests — medical and personal.",
    createdAt: "2025-05-10T11:00:00Z",
    decision: "request_changes"
  }]} allowedActions={[]} />
}`,...(S=(P=i.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var C,x,R;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ApprovalCard title="Purchase Order" docNumber="PO-2024-0841" status="pending" steps={APPROVAL_STEPS} comments={[...APPROVAL_COMMENTS, {
    id: "c3",
    actor: {
      id: "u2",
      displayName: "F. Chen"
    },
    message: "Vendor rate is higher than the last approved order by 8%. Flagging for review.",
    createdAt: "2025-05-10T09:00:00Z"
  }]} allowedActions={[{
    id: "approve",
    decision: "approve",
    label: "Approve"
  }, {
    id: "reject",
    decision: "reject",
    label: "Reject",
    requiresComment: true
  }]} />
}`,...(R=(x=o.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var w,M,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <MobileTaskShell title="Approval" subtitle="SI-2025-1001 · Sales Invoice" backLabel="‹ Back" status={<StatusBadge label="Pending Approval" tone="warning" />} bottomBar={<MobileBottomActionBar actions={[{
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
        <MobileApprovalSummaryCard statusLabel="Pending Approval" statusTone="warning" docType="Sales Invoice" docNumber="SI-2025-1001" amount="₹1,24,500.00" requester="A. Sharma" helperText="Awaiting Finance Review" />
        <MobileApprovalTimeline steps={MOBILE_STEPS} />
        <MobileApprovalCommentList comments={MOBILE_COMMENTS} />
        <p className="px-1 text-xs text-[var(--erp-text-muted)]">
          2 attachments: Receipt.pdf, PO.pdf
        </p>
      </div>
    </MobileTaskShell>
}`,...(y=(M=d.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};const re=["PendingApproval","Approved","Rejected","RequestChanges","WithComments","MobileApprovalCard"];export{r as Approved,d as MobileApprovalCard,s as PendingApproval,n as Rejected,i as RequestChanges,o as WithComments,re as __namedExportsOrder,se as default};
