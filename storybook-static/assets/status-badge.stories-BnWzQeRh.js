import{j as e}from"./iframe-CewInuWt.js";import{S as a}from"./confirm-dialog-BML_ndGp.js";import"./preload-helper-C1FmrZbK.js";import"./select-field-BpVK6OAn.js";import"./index-CQrbGu9B.js";const m={title:"Application/StatusBadge",component:a,argTypes:{tone:{control:"select",options:["default","success","warning","danger","info","muted"]}}},t={args:{label:"Draft",tone:"default"}},n={args:{label:"Draft"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Tones"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"Draft",tone:"default"}),e.jsx(a,{label:"Active",tone:"success"}),e.jsx(a,{label:"Pending",tone:"warning"}),e.jsx(a,{label:"Cancelled",tone:"danger"}),e.jsx(a,{label:"In Review",tone:"info"}),e.jsx(a,{label:"Archived",tone:"muted"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Generic workflow statuses"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"Open",tone:"default"}),e.jsx(a,{label:"Submitted",tone:"info"}),e.jsx(a,{label:"Pending Approval",tone:"warning"}),e.jsx(a,{label:"Approved",tone:"success"}),e.jsx(a,{label:"Rejected",tone:"danger"}),e.jsx(a,{label:"Closed",tone:"muted"}),e.jsx(a,{label:"On Hold",tone:"warning"}),e.jsx(a,{label:"Posted",tone:"success"})]})]})]})};var s,l,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Draft",
    tone: "default"
  }
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var r,d,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "Draft"
  },
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
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
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
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
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const b=["Default","AllStatuses"];export{n as AllStatuses,t as Default,b as __namedExportsOrder,m as default};
