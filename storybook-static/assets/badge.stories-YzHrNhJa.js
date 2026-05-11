import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./select-field-r8OOORem.js";import"./iframe-CtfhfrVN.js";import"./preload-helper-C1FmrZbK.js";import"./index-ChXoQ18V.js";const L={title:"Primitives/Badge",component:a,argTypes:{variant:{control:"select",options:["default","success","warning","danger","info","muted"]}}},r={args:{children:"Draft",variant:"default"}},n={args:{children:"Approved",variant:"success"}},s={args:{children:"Pending approval",variant:"warning"}},t={args:{children:"Rejected",variant:"danger"}},d={args:{children:"Submitted",variant:"info"}},c={args:{children:"Cancelled",variant:"muted"}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Workflow status badges"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"muted",children:"Draft"}),e.jsx(a,{variant:"info",children:"Submitted"}),e.jsx(a,{variant:"warning",children:"Pending approval"}),e.jsx(a,{variant:"success",children:"Approved"}),e.jsx(a,{variant:"danger",children:"Rejected"}),e.jsx(a,{variant:"success",children:"Posted"}),e.jsx(a,{variant:"muted",children:"Cancelled"}),e.jsx(a,{variant:"default",children:"On hold"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"In context — document list row"}),e.jsx("div",{className:"rounded-md border border-neutral-200 bg-white overflow-hidden",children:[{doc:"SI-1004",customer:"Northwind Retail",badge:e.jsx(a,{variant:"warning",children:"Pending approval"})},{doc:"SI-1003",customer:"Contoso Ltd",badge:e.jsx(a,{variant:"success",children:"Posted"})},{doc:"SI-1002",customer:"Fabrikam Inc",badge:e.jsx(a,{variant:"danger",children:"Rejected"})},{doc:"SI-1001",customer:"Adventure Works",badge:e.jsx(a,{variant:"muted",children:"Draft"})}].map((i,y)=>e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-neutral-100 last:border-0 text-sm",children:[e.jsx("span",{className:"font-mono text-neutral-700",children:i.doc}),e.jsx("span",{className:"text-neutral-600",children:i.customer}),i.badge]},y))})]})]})};var l,m,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Draft",
    variant: "default"
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Approved",
    variant: "success"
  }
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Pending approval",
    variant: "warning"
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,j,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Rejected",
    variant: "danger"
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var B,S,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Submitted",
    variant: "info"
  }
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var I,k,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Cancelled",
    variant: "muted"
  }
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,R,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Workflow status badges
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="muted">Draft</Badge>
          <Badge variant="info">Submitted</Badge>
          <Badge variant="warning">Pending approval</Badge>
          <Badge variant="success">Approved</Badge>
          <Badge variant="danger">Rejected</Badge>
          <Badge variant="success">Posted</Badge>
          <Badge variant="muted">Cancelled</Badge>
          <Badge variant="default">On hold</Badge>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          In context — document list row
        </p>
        <div className="rounded-md border border-neutral-200 bg-white overflow-hidden">
          {[{
          doc: "SI-1004",
          customer: "Northwind Retail",
          badge: <Badge variant="warning">Pending approval</Badge>
        }, {
          doc: "SI-1003",
          customer: "Contoso Ltd",
          badge: <Badge variant="success">Posted</Badge>
        }, {
          doc: "SI-1002",
          customer: "Fabrikam Inc",
          badge: <Badge variant="danger">Rejected</Badge>
        }, {
          doc: "SI-1001",
          customer: "Adventure Works",
          badge: <Badge variant="muted">Draft</Badge>
        }].map((row, i) => <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-100 last:border-0 text-sm">
              <span className="font-mono text-neutral-700">{row.doc}</span>
              <span className="text-neutral-600">{row.customer}</span>
              {row.badge}
            </div>)}
        </div>
      </div>
    </div>
}`,...(A=(R=o.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const M=["Default","Success","Warning","Danger","Info","Muted","AllVariants"];export{o as AllVariants,t as Danger,r as Default,d as Info,c as Muted,n as Success,s as Warning,M as __namedExportsOrder,L as default};
