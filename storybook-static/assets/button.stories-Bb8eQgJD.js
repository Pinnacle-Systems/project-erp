import{j as e}from"./vendor-react-QzJwS0Xl.js";import{B as r}from"./select-field-C9wJ5B38.js";import{T as H}from"./iframe-B7sf29sK.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";import"./storybook-docs-addon-CcVm6pEQ.js";import"./storybook-a11y-DXFAwPOQ.js";const Y={title:"Primitives/Button",component:r,argTypes:{variant:{control:"select",options:["default","secondary","ghost","destructive","link"]},density:{control:"select",options:[void 0,"compact","comfortable","touch"]},loading:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{children:"Save",variant:"default"}},t={args:{children:"Review",variant:"secondary"}},n={args:{children:"Cancel",variant:"ghost"}},s={args:{children:"Delete",variant:"destructive"}},o={args:{children:"Post blocked",variant:"default",disabled:!0}},i={args:{children:"Saving…",variant:"default",loading:!0}},d={args:{children:"Save",variant:"default",density:"compact"}},c={args:{children:"Approve",variant:"default",density:"touch"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 rounded-[var(--erp-radius-card)] bg-[var(--erp-color-page-bg)] p-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Save"}),e.jsx(r,{variant:"secondary",children:"Review"}),e.jsx(r,{variant:"ghost",children:"Cancel"}),e.jsx(r,{variant:"destructive",children:"Delete"}),e.jsx(r,{variant:"link",children:"View details"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",disabled:!0,children:"Post blocked"}),e.jsx(r,{variant:"secondary",disabled:!0,children:"Disabled"}),e.jsx(r,{variant:"default",loading:!0,children:"Saving…"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:"Explicit density"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{variant:"default",density:"compact",children:"Compact"}),e.jsx(r,{variant:"default",density:"comfortable",children:"Comfortable"}),e.jsx(r,{variant:"default",density:"touch",children:"Touch"})]})]})]})},p={render:()=>e.jsx("div",{className:"grid gap-4 rounded-[var(--erp-radius-card)] bg-[var(--erp-color-page-bg)] p-6 lg:grid-cols-3",children:["compact","comfortable","touch"].map(u=>e.jsxs(H,{density:u,className:"rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4 shadow-[var(--erp-shadow-card)]",children:[e.jsxs("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]",children:["Provider: ",u]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{variant:"default",children:"Inherits"}),e.jsx(r,{variant:"secondary",children:"Inherits"}),e.jsx(r,{variant:"ghost",children:"Inherits"})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--erp-color-border-muted)] pt-4",children:[e.jsx(r,{variant:"default",density:"compact",children:"Compact override"}),e.jsx(r,{variant:"default",density:"touch",children:"Touch override"})]})]},u))})};var v,m,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Save",
    variant: "default"
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Review",
    variant: "secondary"
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,y,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Cancel",
    variant: "ghost"
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var j,w,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Delete",
    variant: "destructive"
  }
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,k,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Post blocked",
    variant: "default",
    disabled: true
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var T,C,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: "Saving…",
    variant: "default",
    loading: true
  }
}`,...(P=(C=i.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var I,V,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Save",
    variant: "default",
    density: "compact"
  }
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var A,E,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Approve",
    variant: "default",
    density: "touch"
  }
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var L,_,O;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 rounded-[var(--erp-radius-card)] bg-[var(--erp-color-page-bg)] p-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
          Explicit density
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
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,z,F;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 rounded-[var(--erp-radius-card)] bg-[var(--erp-color-page-bg)] p-6 lg:grid-cols-3">
      {(["compact", "comfortable", "touch"] as const).map(density => <ThemeProvider key={density} density={density} className="rounded-[var(--erp-radius-card)] border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4 shadow-[var(--erp-shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--erp-text-subtle)]">
            Provider: {density}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="default">Inherits</Button>
            <Button variant="secondary">Inherits</Button>
            <Button variant="ghost">Inherits</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--erp-color-border-muted)] pt-4">
            <Button variant="default" density="compact">
              Compact override
            </Button>
            <Button variant="default" density="touch">
              Touch override
            </Button>
          </div>
        </ThemeProvider>)}
    </div>
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const Z=["Default","Secondary","Ghost","Destructive","Disabled","Loading","Compact","Touch","AllVariants","ThemeProviderDensity"];export{l as AllVariants,d as Compact,a as Default,s as Destructive,o as Disabled,n as Ghost,i as Loading,t as Secondary,p as ThemeProviderDensity,c as Touch,Z as __namedExportsOrder,Y as default};
