import{j as e}from"./iframe-CewInuWt.js";import{L as s}from"./confirm-dialog-BML_ndGp.js";import"./preload-helper-C1FmrZbK.js";import"./select-field-BpVK6OAn.js";import"./index-CQrbGu9B.js";const k={title:"Application/LoadingState",component:s,argTypes:{variant:{control:"select",options:["page","inline","skeleton"]}}},a={args:{variant:"page",label:"Loading ledger entries..."}},n={args:{variant:"inline",label:"Fetching records..."}},r={args:{variant:"skeleton",rows:6,label:"Loading..."}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Page (full-height)"}),e.jsx("div",{className:"border border-neutral-200 rounded-md bg-white",children:e.jsx(s,{variant:"page",label:"Loading transactions..."})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Inline"}),e.jsx("div",{className:"border border-neutral-200 rounded-md bg-white p-4",children:e.jsx(s,{variant:"inline",label:"Saving draft..."})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Skeleton"}),e.jsx("div",{className:"border border-neutral-200 rounded-md bg-white",children:e.jsx(s,{variant:"skeleton",rows:5})})]})]})};var i,o,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "page",
    label: "Loading ledger entries..."
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,c,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    label: "Fetching records..."
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "skeleton",
    rows: 6,
    label: "Loading..."
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,x,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Page (full-height)
        </p>
        <div className="border border-neutral-200 rounded-md bg-white">
          <LoadingState variant="page" label="Loading transactions..." />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Inline
        </p>
        <div className="border border-neutral-200 rounded-md bg-white p-4">
          <LoadingState variant="inline" label="Saving draft..." />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Skeleton
        </p>
        <div className="border border-neutral-200 rounded-md bg-white">
          <LoadingState variant="skeleton" rows={5} />
        </div>
      </div>
    </div>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const S=["PageLoading","InlineLoading","SkeletonLoading","AllVariants"];export{t as AllVariants,n as InlineLoading,a as PageLoading,r as SkeletonLoading,S as __namedExportsOrder,k as default};
