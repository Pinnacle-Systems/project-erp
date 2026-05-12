import{j as e}from"./iframe-CewInuWt.js";import{B as a}from"./select-field-BpVK6OAn.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const H={title:"Primitives/Button",component:a,argTypes:{variant:{control:"select",options:["default","secondary","ghost","destructive","link"]},density:{control:"select",options:["compact","comfortable","touch"]},loading:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{children:"Save",variant:"default"}},n={args:{children:"Review",variant:"secondary"}},r={args:{children:"Cancel",variant:"ghost"}},s={args:{children:"Delete",variant:"destructive"}},i={args:{children:"Post blocked",variant:"default",disabled:!0}},o={args:{children:"Saving…",variant:"default",loading:!0}},c={args:{children:"Save",variant:"default",density:"compact"}},d={args:{children:"Approve",variant:"default",density:"touch"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",children:"Save"}),e.jsx(a,{variant:"secondary",children:"Review"}),e.jsx(a,{variant:"ghost",children:"Cancel"}),e.jsx(a,{variant:"destructive",children:"Delete"}),e.jsx(a,{variant:"link",children:"View details"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",disabled:!0,children:"Post blocked"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Disabled"}),e.jsx(a,{variant:"default",loading:!0,children:"Saving…"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3",children:"Density"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(a,{variant:"default",density:"compact",children:"Compact"}),e.jsx(a,{variant:"default",density:"comfortable",children:"Comfortable"}),e.jsx(a,{variant:"default",density:"touch",children:"Touch"})]})]})]})};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Save",
    variant: "default"
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,x,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Review",
    variant: "secondary"
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Cancel",
    variant: "ghost"
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,j,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Delete",
    variant: "destructive"
  }
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,w,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Post blocked",
    variant: "default",
    disabled: true
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,k,C;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Saving…",
    variant: "default",
    loading: true
  }
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var V,P,R;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Save",
    variant: "default",
    density: "compact"
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,A,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: "Approve",
    variant: "default",
    density: "touch"
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,L,_;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Variants
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Save</Button>
          <Button variant="secondary">Review</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">View details</Button>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          States
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" disabled>
            Post blocked
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="default" loading>
            Saving…
          </Button>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Density
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="default" density="compact">
            Compact
          </Button>
          <Button variant="default" density="comfortable">
            Comfortable
          </Button>
          <Button variant="default" density="touch">
            Touch
          </Button>
        </div>
      </div>
    </div>
}`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const I=["Default","Secondary","Ghost","Destructive","Disabled","Loading","Compact","Touch","AllVariants"];export{l as AllVariants,c as Compact,t as Default,s as Destructive,i as Disabled,r as Ghost,o as Loading,n as Secondary,d as Touch,I as __namedExportsOrder,H as default};
