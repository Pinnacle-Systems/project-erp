import{j as e}from"./vendor-react-QzJwS0Xl.js";import{a as r}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const F={title:"Primitives/Badge",component:r,argTypes:{variant:{control:"select",options:["default","success","warning","danger","info","muted"]}}},a={args:{children:"Draft",variant:"default"}},n={args:{children:"Approved",variant:"success"}},s={args:{children:"Pending approval",variant:"warning"}},t={args:{children:"Rejected",variant:"danger"}},d={args:{children:"Submitted",variant:"info"}},o={args:{children:"Cancelled",variant:"muted"}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Workflow status badges"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"muted",children:"Draft"}),e.jsx(r,{variant:"info",children:"Submitted"}),e.jsx(r,{variant:"warning",children:"Pending approval"}),e.jsx(r,{variant:"success",children:"Approved"}),e.jsx(r,{variant:"danger",children:"Rejected"}),e.jsx(r,{variant:"success",children:"Posted"}),e.jsx(r,{variant:"muted",children:"Cancelled"}),e.jsx(r,{variant:"default",children:"On hold"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"In context — document list row"}),e.jsx("div",{className:"overflow-hidden rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]",children:[{doc:"SI-1004",customer:"Northwind Retail",badge:e.jsx(r,{variant:"warning",children:"Pending approval"})},{doc:"SI-1003",customer:"Contoso Ltd",badge:e.jsx(r,{variant:"success",children:"Posted"})},{doc:"SI-1002",customer:"Fabrikam Inc",badge:e.jsx(r,{variant:"danger",children:"Rejected"})},{doc:"SI-1001",customer:"Adventure Works",badge:e.jsx(r,{variant:"muted",children:"Draft"})}].map((i,y)=>e.jsxs("div",{className:"flex items-center justify-between border-b border-[var(--erp-color-border-muted)] px-4 py-2.5 text-sm last:border-0",children:[e.jsx("span",{className:"font-mono text-[var(--erp-color-foreground)]",children:i.doc}),e.jsx("span",{className:"text-[var(--erp-color-foreground-muted)]",children:i.customer}),i.badge]},y))})]})]})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Draft",
    variant: "default"
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Approved",
    variant: "success"
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Pending approval",
    variant: "warning"
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,j,B;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Rejected",
    variant: "danger"
  }
}`,...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var w,S,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Submitted",
    variant: "info"
  }
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var I,k,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Cancelled",
    variant: "muted"
  }
}`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,R,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          In context — document list row
        </p>
        <div className="overflow-hidden rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]">
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
        }].map((row, i) => <div key={i} className="flex items-center justify-between border-b border-[var(--erp-color-border-muted)] px-4 py-2.5 text-sm last:border-0">
              <span className="font-mono text-[var(--erp-color-foreground)]">{row.doc}</span>
              <span className="text-[var(--erp-color-foreground-muted)]">{row.customer}</span>
              {row.badge}
            </div>)}
        </div>
      </div>
    </div>
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const L=["Default","Success","Warning","Danger","Info","Muted","AllVariants"];export{c as AllVariants,t as Danger,a as Default,d as Info,o as Muted,n as Success,s as Warning,L as __namedExportsOrder,F as default};
