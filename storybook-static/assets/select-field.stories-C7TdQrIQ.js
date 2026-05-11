import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{S as a,p as r}from"./select-field-r8OOORem.js";import"./iframe-CtfhfrVN.js";import"./preload-helper-C1FmrZbK.js";import"./index-ChXoQ18V.js";const G={title:"Primitives/SelectField"},c=["USD","EUR","GBP","AUD","SGD","INR"],k=["Draft","Submitted","Pending approval","Approved","Posted"],t={render:()=>l.jsx("div",{className:"max-w-xs",children:l.jsx(a,{label:"Currency",placeholder:"Select currency…",children:c.map(e=>l.jsx(r,{value:e,children:e},e))})})},s={render:()=>l.jsx("div",{className:"max-w-xs",children:l.jsx(a,{label:"Currency",defaultValue:"USD",children:c.map(e=>l.jsx(r,{value:e,children:e},e))})})},d={render:()=>l.jsx("div",{className:"max-w-xs",children:l.jsx(a,{label:"Approval status",error:!0,errorMessage:"Status is required.",placeholder:"Select status…",children:k.map(e=>l.jsx(r,{value:e,children:e},e))})})},n={render:()=>l.jsx("div",{className:"max-w-xs",children:l.jsx(a,{label:"Currency",defaultValue:"USD",disabled:!0,children:c.map(e=>l.jsx(r,{value:e,children:e},e))})})},i={render:()=>l.jsx("div",{className:"max-w-xs",children:l.jsx(a,{label:"Currency",defaultValue:"USD",density:"compact",children:c.map(e=>l.jsx(r,{value:e,children:e},e))})})},u={render:()=>l.jsx("div",{className:"max-w-xs",children:l.jsx(a,{label:"Currency",density:"touch",placeholder:"Select…",children:c.map(e=>l.jsx(r,{value:e,children:e},e))})})},m={render:()=>l.jsxs("div",{className:"flex flex-col gap-5 max-w-xs",children:[l.jsx(a,{label:"Currency (default)",defaultValue:"USD",children:c.map(e=>l.jsx(r,{value:e,children:e},e))}),l.jsx(a,{label:"Status (error)",error:!0,errorMessage:"Status is required.",placeholder:"Select status…",children:k.map(e=>l.jsx(r,{value:e,children:e},e))}),l.jsx(a,{label:"Currency (disabled)",defaultValue:"USD",disabled:!0,children:c.map(e=>l.jsx(r,{value:e,children:e},e))}),l.jsx(a,{label:"Compact",defaultValue:"EUR",density:"compact",children:c.map(e=>l.jsx(r,{value:e,children:e},e))}),l.jsx(a,{label:"Touch",density:"touch",placeholder:"Select…",children:c.map(e=>l.jsx(r,{value:e,children:e},e))})]})};var o,S,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <SelectField label="Currency" placeholder="Select currency…">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>
            {c}
          </SelectItem>)}
      </SelectField>
    </div>
}`,...(p=(S=t.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <SelectField label="Currency" defaultValue="USD">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>
            {c}
          </SelectItem>)}
      </SelectField>
    </div>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,y,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <SelectField label="Approval status" error errorMessage="Status is required." placeholder="Select status…">
        {STATUSES.map(s => <SelectItem key={s} value={s}>
            {s}
          </SelectItem>)}
      </SelectField>
    </div>
}`,...(I=(y=d.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var b,j,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <SelectField label="Currency" defaultValue="USD" disabled>
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>
            {c}
          </SelectItem>)}
      </SelectField>
    </div>
}`,...(E=(j=n.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var U,f,N;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <SelectField label="Currency" defaultValue="USD" density="compact">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>
            {c}
          </SelectItem>)}
      </SelectField>
    </div>
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var R,F,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <SelectField label="Currency" density="touch" placeholder="Select…">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>
            {c}
          </SelectItem>)}
      </SelectField>
    </div>
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var g,w,V;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-5 max-w-xs">
      <SelectField label="Currency (default)" defaultValue="USD">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
      </SelectField>

      <SelectField label="Status (error)" error errorMessage="Status is required." placeholder="Select status…">
        {STATUSES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
      </SelectField>

      <SelectField label="Currency (disabled)" defaultValue="USD" disabled>
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
      </SelectField>

      <SelectField label="Compact" defaultValue="EUR" density="compact">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
      </SelectField>

      <SelectField label="Touch" density="touch" placeholder="Select…">
        {CURRENCIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
      </SelectField>
    </div>
}`,...(V=(w=m.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const W=["Default","WithDefaultValue","Error","Disabled","Compact","Touch","AllStates"];export{m as AllStates,i as Compact,t as Default,n as Disabled,d as Error,u as Touch,s as WithDefaultValue,W as __namedExportsOrder,G as default};
