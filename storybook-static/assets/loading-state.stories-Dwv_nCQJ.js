import{j as e}from"./vendor-react-QzJwS0Xl.js";import{L as o}from"./icon-chip-CEEhPAY1.js";import"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const S={title:"Application/LoadingState",component:o,argTypes:{variant:{control:"select",options:["page","inline","skeleton"]}}},r={args:{variant:"page",label:"Loading ledger entries..."}},a={args:{variant:"inline",label:"Fetching records..."}},n={args:{variant:"skeleton",rows:6,label:"Loading..."}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Page (full-height)"}),e.jsx("div",{className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]",children:e.jsx(o,{variant:"page",label:"Loading transactions..."})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Inline"}),e.jsx("div",{className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4",children:e.jsx(o,{variant:"inline",label:"Saving draft..."})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Skeleton"}),e.jsx("div",{className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]",children:e.jsx(o,{variant:"skeleton",rows:5})})]})]})};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "page",
    label: "Loading ledger entries..."
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    label: "Fetching records..."
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,g,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "skeleton",
    rows: 6,
    label: "Loading..."
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,u,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Page (full-height)
        </p>
        <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]">
          <LoadingState variant="page" label="Loading transactions..." />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Inline
        </p>
        <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4">
          <LoadingState variant="inline" label="Saving draft..." />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Skeleton
        </p>
        <div className="rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]">
          <LoadingState variant="skeleton" rows={5} />
        </div>
      </div>
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const N=["PageLoading","InlineLoading","SkeletonLoading","AllVariants"];export{s as AllVariants,a as InlineLoading,r as PageLoading,n as SkeletonLoading,N as __namedExportsOrder,S as default};
