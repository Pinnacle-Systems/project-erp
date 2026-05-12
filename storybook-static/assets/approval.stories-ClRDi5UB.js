import{j as e}from"./iframe-CewInuWt.js";import{A as V}from"./index-BvAJUK7m.js";import{B as L}from"./select-field-BpVK6OAn.js";import{P as Z,S as I}from"./confirm-dialog-BML_ndGp.js";import{A as S,a as O}from"./demoData-kevtlJoJ.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const Q={title:"Patterns/Approval"},W={not_started:"muted",pending:"warning",approved:"success",rejected:"danger",changes_requested:"warning",cancelled:"muted"},k={not_started:"Not Started",pending:"Pending Approval",approved:"Approved",rejected:"Rejected",changes_requested:"Changes Requested",cancelled:"Cancelled"},B=a=>e.jsx(L,{variant:a.decision==="reject"?"destructive":a.decision==="request_changes"?"secondary":"default",density:"comfortable",disabled:a.disabled,title:a.reason,children:a.label}),s=({title:a,docNumber:p,status:c,steps:_,comments:F,allowedActions:M,attachments:T,shell:E="desktop"})=>e.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden",children:[e.jsx(Z,{title:a??"Document",subtitle:p,status:e.jsx(I,{label:k[c],tone:W[c]}),density:"compact"}),e.jsx(V,{status:c,steps:_,comments:F,allowedActions:M,shell:E,renderAction:B,summary:e.jsxs("div",{className:"text-xs text-neutral-600",children:[e.jsx("span",{className:"font-medium",children:p})," · ",e.jsx("span",{className:"text-neutral-500",children:"₹1,24,500.00"})]}),attachments:T})]}),n={render:()=>e.jsx(s,{title:"Purchase Order",docNumber:"PO-2024-0841",status:"pending",steps:O,comments:S,allowedActions:[{id:"approve",decision:"approve",label:"Approve"},{id:"request-changes",decision:"request_changes",label:"Request Changes",requiresComment:!0},{id:"reject",decision:"reject",label:"Reject",requiresComment:!0}]})},t={render:()=>e.jsx(s,{title:"Purchase Order",docNumber:"PO-2024-0841",status:"approved",steps:[{id:"dept-head",label:"Department Head",status:"approved",actor:{id:"u1",displayName:"M. Rao"}},{id:"finance",label:"Finance Review",status:"approved",actor:{id:"u2",displayName:"F. Chen"}},{id:"cfo",label:"CFO Sign-off",status:"approved",actor:{id:"u3",displayName:"A. Sharma"}}],allowedActions:[]})},r={render:()=>e.jsx(s,{title:"Expense Claim",docNumber:"EXP-2025-0312",status:"rejected",steps:[{id:"manager",label:"Manager Review",status:"approved",actor:{id:"u1",displayName:"P. Verma"}},{id:"finance",label:"Finance Review",status:"rejected",actor:{id:"u2",displayName:"F. Chen"}}],comments:[{id:"c1",actor:{id:"u2",displayName:"F. Chen"},message:"Receipts missing for items over ₹5,000. Resubmit with documentation.",createdAt:"2025-05-10T14:30:00Z",decision:"reject"}],allowedActions:[]})},d={render:()=>e.jsx(s,{title:"Leave Request",docNumber:"LV-2025-0089",status:"changes_requested",steps:[{id:"manager",label:"Manager Review",status:"changes_requested",actor:{id:"u1",displayName:"S. Nair"}}],comments:[{id:"c1",actor:{id:"u1",displayName:"S. Nair"},message:"Please split this into two separate requests — medical and personal.",createdAt:"2025-05-10T11:00:00Z",decision:"request_changes"}],allowedActions:[]})},i={render:()=>e.jsx(s,{title:"Purchase Order",docNumber:"PO-2024-0841",status:"pending",steps:O,comments:[...S,{id:"c3",actor:{id:"u2",displayName:"F. Chen"},message:"Vendor rate is higher than the last approved order by 8%. Flagging for review.",createdAt:"2025-05-10T09:00:00Z"}],allowedActions:[{id:"approve",decision:"approve",label:"Approve"},{id:"reject",decision:"reject",label:"Reject",requiresComment:!0}]})},o={render:()=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(s,{title:"Sales Invoice",docNumber:"SI-2025-1001",status:"pending",steps:[{id:"manager",label:"Manager review",status:"approved",actor:{id:"u1",displayName:"M. Rao"}},{id:"finance",label:"Finance review",status:"pending",actor:{id:"u2",displayName:"F. Chen"}}],comments:[{id:"c1",actor:{id:"u3",displayName:"Requester"},message:"Please approve for dispatch.",createdAt:"2025-05-11T00:00:00Z"}],allowedActions:[{id:"approve",decision:"approve",label:"Approve"},{id:"reject",decision:"reject",label:"Reject",requiresComment:!0},{id:"post",decision:"approve",label:"Post",disabled:!0,reason:"Posting is desktop-only."}],attachments:e.jsx("div",{className:"text-xs text-neutral-600",children:"2 attachments: Receipt.pdf, PO.pdf"}),shell:"mobile"})})};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,A,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(A=r.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var j,P,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var C,w,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,f,q;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 420
  }}>
      <ApprovalCard title="Sales Invoice" docNumber="SI-2025-1001" status="pending" steps={[{
      id: "manager",
      label: "Manager review",
      status: "approved",
      actor: {
        id: "u1",
        displayName: "M. Rao"
      }
    }, {
      id: "finance",
      label: "Finance review",
      status: "pending",
      actor: {
        id: "u2",
        displayName: "F. Chen"
      }
    }]} comments={[{
      id: "c1",
      actor: {
        id: "u3",
        displayName: "Requester"
      },
      message: "Please approve for dispatch.",
      createdAt: "2025-05-11T00:00:00Z"
    }]} allowedActions={[{
      id: "approve",
      decision: "approve",
      label: "Approve"
    }, {
      id: "reject",
      decision: "reject",
      label: "Reject",
      requiresComment: true
    }, {
      id: "post",
      decision: "approve",
      label: "Post",
      disabled: true,
      reason: "Posting is desktop-only."
    }]} attachments={<div className="text-xs text-neutral-600">
            2 attachments: Receipt.pdf, PO.pdf
          </div>} shell="mobile" />
    </div>
}`,...(q=(f=o.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};const U=["PendingApproval","Approved","Rejected","RequestChanges","WithComments","MobileApprovalCard"];export{t as Approved,o as MobileApprovalCard,n as PendingApproval,r as Rejected,d as RequestChanges,i as WithComments,U as __namedExportsOrder,Q as default};
