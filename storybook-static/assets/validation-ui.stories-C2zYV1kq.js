import{j as e}from"./iframe-CewInuWt.js";import{a as b,b as A,c as C}from"./index-BlC6eqR6.js";import{B as u,a as x,T as c}from"./select-field-BpVK6OAn.js";import{a as p,v as g,b as h,d as I}from"./demoValidation-BdoxO43p.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const Q={title:"Patterns/Validation UI"},f={blocking:"danger",error:"danger",warning:"warning",info:"info"},m=({messages:t,title:n="Validation"})=>{const a=C(t);if(!a.messages.length)return null;const s=a.hasBlocking?"blocking":a.counts.warning>0?"warning":"info",W=s==="blocking"?"bg-red-50 border-red-200":s==="warning"?"bg-amber-50 border-amber-200":"bg-blue-50 border-blue-200";return e.jsxs("div",{className:`rounded-md border p-3 ${W}`,role:"alert",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("span",{className:"text-xs font-semibold text-neutral-700",children:n}),e.jsxs(x,{variant:f[s],children:[a.messages.length," issue",a.messages.length!==1?"s":""]})]}),e.jsx("ul",{className:"flex flex-col gap-1",children:a.messages.map(r=>e.jsxs("li",{className:"flex items-start gap-1.5 text-xs text-neutral-700",children:[e.jsx(x,{variant:f[r.severity],className:"mt-0.5 shrink-0 capitalize",children:r.severity}),e.jsx("span",{children:r.message})]},r.id))})]})},l={render:()=>e.jsxs("div",{className:"max-w-lg flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2",children:"Blocking + warnings + info"}),e.jsx(m,{messages:[p,g,h]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2",children:"Warnings only"}),e.jsx(m,{messages:[g,h],title:"Attention"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2",children:"No issues (no banner rendered)"}),e.jsx("div",{className:"h-8 rounded border border-dashed border-neutral-200 flex items-center px-3",children:e.jsx("span",{className:"text-xs text-neutral-400",children:"ValidationBanner renders nothing"})}),e.jsx(m,{messages:[]})]})]})},i={render:()=>{var a,s;const t=b([p],"header.customerId"),n=b([g],"header.taxCode");return e.jsxs("div",{className:"max-w-sm flex flex-col gap-3",children:[e.jsx(c,{label:"Customer",placeholder:"Search customer...",error:t.hasBlocking,errorMessage:(a=t.messages[0])==null?void 0:a.message,density:"compact"}),e.jsx(c,{label:"Tax Code",placeholder:"e.g. GST18",error:n.hasWarning,helpText:n.hasWarning?(s=n.messages[0])==null?void 0:s.message:"Applied to all lines",density:"compact"}),e.jsx(c,{label:"Payment Terms",defaultValue:"Net 30",helpText:h.message,density:"compact"})]})}},d={render:()=>{const t=A([I],{lineIndex:1});return e.jsxs("div",{className:"max-w-xl flex flex-col gap-2",children:[e.jsxs("table",{className:"w-full text-xs border border-neutral-200 rounded-md overflow-hidden",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-neutral-50 border-b border-neutral-200",children:[e.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500",children:"Item"}),e.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500",children:"Description"}),e.jsx("th",{className:"text-right px-3 py-2 font-medium text-neutral-500",children:"Qty"}),e.jsx("th",{className:"w-16 px-3 py-2"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-neutral-100",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-neutral-800",children:"FAB-001"}),e.jsx("td",{className:"px-3 py-2 text-neutral-700",children:"Fabric roll"}),e.jsx("td",{className:"px-3 py-2 text-right text-neutral-800",children:"12"}),e.jsx("td",{})]}),e.jsxs("tr",{className:"bg-red-50 border-b border-red-100",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-neutral-800",children:"ACC-220"}),e.jsx("td",{className:"px-3 py-2 text-neutral-700",children:"Accessory pack"}),e.jsx("td",{className:"px-3 py-2 text-right",children:e.jsx(c,{value:"0",error:t.hasError,density:"compact",className:"w-20 text-right",readOnly:!0})}),e.jsx("td",{className:"px-3 py-2",children:e.jsx(x,{variant:"danger",children:"Error"})})]}),e.jsxs("tr",{className:"border-neutral-100",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-neutral-400",children:"+"}),e.jsx("td",{className:"px-3 py-2 text-neutral-400 italic",colSpan:3,children:"Add line..."})]})]})]}),t.messages.length>0&&e.jsxs("p",{className:"text-xs text-red-600 flex items-center gap-1",children:[e.jsx("span",{className:"font-medium",children:"Line 2:"}),e.jsx("span",{children:t.messages[0].message})]})]})}},o={render:()=>e.jsxs("div",{className:"max-w-lg flex flex-col gap-3",children:[e.jsx(m,{messages:[p,g],title:"Cannot post"}),e.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[e.jsx(u,{variant:"ghost",density:"compact",children:"Discard"}),e.jsx(u,{variant:"secondary",density:"compact",children:"Save Draft"}),e.jsx(u,{variant:"default",density:"compact",disabled:!0,title:p.message,children:"Post Document"}),e.jsx(x,{variant:"danger",className:"ml-1",children:"Post blocked"})]})]})};var N,v,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          Blocking + warnings + info
        </p>
        <ValidationBanner messages={[validationBlocking, validationWarning, validationInfo]} />
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          Warnings only
        </p>
        <ValidationBanner messages={[validationWarning, validationInfo]} title="Attention" />
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          No issues (no banner rendered)
        </p>
        <div className="h-8 rounded border border-dashed border-neutral-200 flex items-center px-3">
          <span className="text-xs text-neutral-400">ValidationBanner renders nothing</span>
        </div>
        <ValidationBanner messages={[]} />
      </div>
    </div>
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,B,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const customerState = createFieldValidationState([validationBlocking], "header.customerId");
    const taxState = createFieldValidationState([validationWarning], "header.taxCode");
    return <div className="max-w-sm flex flex-col gap-3">
        <TextField label="Customer" placeholder="Search customer..." error={customerState.hasBlocking} errorMessage={customerState.messages[0]?.message} density="compact" />
        <TextField label="Tax Code" placeholder="e.g. GST18" error={taxState.hasWarning} helpText={taxState.hasWarning ? taxState.messages[0]?.message : "Applied to all lines"} density="compact" />
        <TextField label="Payment Terms" defaultValue="Net 30" helpText={validationInfo.message} density="compact" />
      </div>;
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,k,V;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const lineState = createLineValidationState([validationLineError], {
      lineIndex: 1
    });
    return <div className="max-w-xl flex flex-col gap-2">
        <table className="w-full text-xs border border-neutral-200 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200">
              <th className="text-left px-3 py-2 font-medium text-neutral-500">Item</th>
              <th className="text-left px-3 py-2 font-medium text-neutral-500">Description</th>
              <th className="text-right px-3 py-2 font-medium text-neutral-500">Qty</th>
              <th className="w-16 px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-100">
              <td className="px-3 py-2 font-mono text-neutral-800">FAB-001</td>
              <td className="px-3 py-2 text-neutral-700">Fabric roll</td>
              <td className="px-3 py-2 text-right text-neutral-800">12</td>
              <td></td>
            </tr>
            <tr className="bg-red-50 border-b border-red-100">
              <td className="px-3 py-2 font-mono text-neutral-800">ACC-220</td>
              <td className="px-3 py-2 text-neutral-700">Accessory pack</td>
              <td className="px-3 py-2 text-right">
                <TextField value="0" error={lineState.hasError} density="compact" className="w-20 text-right" readOnly />
              </td>
              <td className="px-3 py-2">
                <Badge variant="danger">Error</Badge>
              </td>
            </tr>
            <tr className="border-neutral-100">
              <td className="px-3 py-2 font-mono text-neutral-400">+</td>
              <td className="px-3 py-2 text-neutral-400 italic" colSpan={3}>
                Add line...
              </td>
            </tr>
          </tbody>
        </table>
        {lineState.messages.length > 0 && <p className="text-xs text-red-600 flex items-center gap-1">
            <span className="font-medium">Line 2:</span>
            <span>{lineState.messages[0].message}</span>
          </p>}
      </div>;
  }
}`,...(V=(k=d.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var T,E,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg flex flex-col gap-3">
      <ValidationBanner messages={[validationBlocking, validationWarning]} title="Cannot post" />
      <div className="flex items-center gap-2 pt-1">
        <Button variant="ghost" density="compact">
          Discard
        </Button>
        <Button variant="secondary" density="compact">
          Save Draft
        </Button>
        <Button variant="default" density="compact" disabled title={validationBlocking.message}>
          Post Document
        </Button>
        <Badge variant="danger" className="ml-1">
          Post blocked
        </Badge>
      </div>
    </div>
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const _=["ValidationSummary","FieldError","LineError","BlockingWorkflowError"];export{o as BlockingWorkflowError,i as FieldError,d as LineError,l as ValidationSummary,_ as __namedExportsOrder,Q as default};
