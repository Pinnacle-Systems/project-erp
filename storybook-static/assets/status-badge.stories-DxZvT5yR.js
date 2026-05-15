import{j as e}from"./vendor-react-QzJwS0Xl.js";import{S as a}from"./icon-chip-CEEhPAY1.js";import"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const b={title:"Application/StatusBadge",component:a,argTypes:{tone:{control:"select",options:["default","success","warning","danger","info","muted"]}}},t={args:{label:"Draft",tone:"default"}},s={args:{label:"Draft"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Tones"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"Draft",tone:"default"}),e.jsx(a,{label:"Active",tone:"success"}),e.jsx(a,{label:"Pending",tone:"warning"}),e.jsx(a,{label:"Cancelled",tone:"danger"}),e.jsx(a,{label:"In Review",tone:"info"}),e.jsx(a,{label:"Archived",tone:"muted"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Generic workflow statuses"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"Open",tone:"default"}),e.jsx(a,{label:"Submitted",tone:"info"}),e.jsx(a,{label:"Pending Approval",tone:"warning"}),e.jsx(a,{label:"Approved",tone:"success"}),e.jsx(a,{label:"Rejected",tone:"danger"}),e.jsx(a,{label:"Closed",tone:"muted"}),e.jsx(a,{label:"On Hold",tone:"warning"}),e.jsx(a,{label:"Posted",tone:"success"})]})]})]})};var n,l,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Draft",
    tone: "default"
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var o,d,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Draft"
  },
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Tones
        </p>
        <div className="flex flex-wrap gap-2">
          <StatusBadge label="Draft" tone="default" />
          <StatusBadge label="Active" tone="success" />
          <StatusBadge label="Pending" tone="warning" />
          <StatusBadge label="Cancelled" tone="danger" />
          <StatusBadge label="In Review" tone="info" />
          <StatusBadge label="Archived" tone="muted" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Generic workflow statuses
        </p>
        <div className="flex flex-wrap gap-2">
          <StatusBadge label="Open" tone="default" />
          <StatusBadge label="Submitted" tone="info" />
          <StatusBadge label="Pending Approval" tone="warning" />
          <StatusBadge label="Approved" tone="success" />
          <StatusBadge label="Rejected" tone="danger" />
          <StatusBadge label="Closed" tone="muted" />
          <StatusBadge label="On Hold" tone="warning" />
          <StatusBadge label="Posted" tone="success" />
        </div>
      </div>
    </div>
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const m=["Default","AllStatuses"];export{s as AllStatuses,t as Default,m as __namedExportsOrder,b as default};
