import{j as e}from"./vendor-react-QzJwS0Xl.js";import{T as a}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const W={title:"Primitives/TextField",component:a,argTypes:{density:{control:"select",options:["compact","comfortable","touch"]},error:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"}}},r={args:{placeholder:"Enter value…"}},t={args:{label:"Customer name",defaultValue:"Northwind Retail"}},s={args:{label:"Document number",defaultValue:"SI-1001",helpText:"Auto-generated on save.",readOnly:!0}},o={args:{label:"Customer",defaultValue:"",error:!0,errorMessage:"Customer is required."}},l={args:{label:"Posted status",defaultValue:"Posted",disabled:!0}},n={args:{label:"Quantity",defaultValue:"12",density:"compact"}},d={args:{label:"Comment",placeholder:"Add a note…",density:"touch"}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-5 max-w-sm",children:[e.jsx(a,{label:"Customer name",defaultValue:"Northwind Retail"}),e.jsx(a,{label:"Document number",defaultValue:"SI-1001",helpText:"Auto-generated on save.",readOnly:!0}),e.jsx(a,{label:"Customer",defaultValue:"",error:!0,errorMessage:"Customer is required."}),e.jsx(a,{label:"Posted status",defaultValue:"Posted",disabled:!0}),e.jsx(a,{label:"Compact field",placeholder:"Enter value…",density:"compact"}),e.jsx(a,{label:"Touch field",placeholder:"Add a note…",density:"touch"})]})};var c,m,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter value…"
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,b,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Customer name",
    defaultValue: "Northwind Retail"
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Document number",
    defaultValue: "SI-1001",
    helpText: "Auto-generated on save.",
    readOnly: true
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,C,V;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Customer",
    defaultValue: "",
    error: true,
    errorMessage: "Customer is required."
  }
}`,...(V=(C=o.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var y,S,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Posted status",
    defaultValue: "Posted",
    disabled: true
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var A,j,P;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Quantity",
    defaultValue: "12",
    density: "compact"
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var D,E,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Comment",
    placeholder: "Add a note…",
    density: "touch"
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var w,N,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-5 max-w-sm">
      <TextField label="Customer name" defaultValue="Northwind Retail" />
      <TextField label="Document number" defaultValue="SI-1001" helpText="Auto-generated on save." readOnly />
      <TextField label="Customer" defaultValue="" error errorMessage="Customer is required." />
      <TextField label="Posted status" defaultValue="Posted" disabled />
      <TextField label="Compact field" placeholder="Enter value…" density="compact" />
      <TextField label="Touch field" placeholder="Add a note…" density="touch" />
    </div>
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const H=["Default","WithLabel","WithHelpText","Error","Disabled","Compact","Touch","AllStates"];export{u as AllStates,n as Compact,r as Default,l as Disabled,o as Error,d as Touch,s as WithHelpText,t as WithLabel,H as __namedExportsOrder,W as default};
