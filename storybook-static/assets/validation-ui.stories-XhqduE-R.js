import{j as e}from"./vendor-react-QzJwS0Xl.js";import{a as b,b as A,c as C}from"./index-D2yg1nQ6.js";import{B as v,a as m,T as c}from"./select-field-C9wJ5B38.js";import{a as p,v as g,b as h,d as I}from"./demoValidation-BdoxO43p.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const Q={title:"Patterns/Validation UI"},u={blocking:"danger",error:"danger",warning:"warning",info:"info"},x=({messages:r,title:s="Validation"})=>{const a=C(r);if(!a.messages.length)return null;const t=a.hasBlocking?"blocking":a.counts.warning>0?"warning":"info",W=t==="blocking"?"bg-[var(--erp-validation-blocking-bg)] border-[var(--erp-validation-blocking-border)]":t==="warning"?"bg-[var(--erp-validation-warning-bg)] border-[var(--erp-validation-warning-border)]":"bg-[var(--erp-validation-info-bg)] border-[var(--erp-validation-info-border)]";return e.jsxs("div",{className:`rounded-md border p-3 ${W}`,role:"alert",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("span",{className:"text-xs font-semibold text-[var(--erp-text-secondary)]",children:s}),e.jsxs(m,{variant:u[t],children:[a.messages.length," issue",a.messages.length!==1?"s":""]})]}),e.jsx("ul",{className:"flex flex-col gap-1",children:a.messages.map(n=>e.jsxs("li",{className:"flex items-start gap-1.5 text-xs text-[var(--erp-text-secondary)]",children:[e.jsx(m,{variant:u[n.severity],className:"mt-0.5 shrink-0 capitalize",children:n.severity}),e.jsx("span",{children:n.message})]},n.id))})]})},d={render:()=>e.jsxs("div",{className:"max-w-lg flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2",children:"Blocking + warnings + info"}),e.jsx(x,{messages:[p,g,h]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2",children:"Warnings only"}),e.jsx(x,{messages:[g,h],title:"Attention"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2",children:"No issues (no banner rendered)"}),e.jsx("div",{className:"h-8 rounded border border-dashed border-[var(--erp-border-default)] flex items-center px-3",children:e.jsx("span",{className:"text-xs text-[var(--erp-text-disabled)]",children:"ValidationBanner renders nothing"})}),e.jsx(x,{messages:[]})]})]})},i={render:()=>{var a,t;const r=b([p],"header.customerId"),s=b([g],"header.taxCode");return e.jsxs("div",{className:"max-w-sm flex flex-col gap-3",children:[e.jsx(c,{label:"Customer",placeholder:"Search customer...",error:r.hasBlocking,errorMessage:(a=r.messages[0])==null?void 0:a.message,density:"compact"}),e.jsx(c,{label:"Tax Code",placeholder:"e.g. GST18",error:s.hasWarning,helpText:s.hasWarning?(t=s.messages[0])==null?void 0:t.message:"Applied to all lines",density:"compact"}),e.jsx(c,{label:"Payment Terms",defaultValue:"Net 30",helpText:h.message,density:"compact"})]})}},o={render:()=>{const r=A([I],{lineIndex:1});return e.jsxs("div",{className:"max-w-xl flex flex-col gap-2",children:[e.jsxs("table",{className:"w-full text-xs border border-[var(--erp-grid-row-border)] rounded-md overflow-hidden",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-[var(--erp-grid-header-bg)] border-b border-[var(--erp-grid-header-border)]",children:[e.jsx("th",{className:"text-left px-3 py-2 font-medium text-[var(--erp-grid-header-text)]",children:"Item"}),e.jsx("th",{className:"text-left px-3 py-2 font-medium text-[var(--erp-grid-header-text)]",children:"Description"}),e.jsx("th",{className:"text-right px-3 py-2 font-medium text-[var(--erp-grid-header-text)]",children:"Qty"}),e.jsx("th",{className:"w-16 px-3 py-2"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[var(--erp-border-muted)]",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-[var(--erp-text-secondary)]",children:"FAB-001"}),e.jsx("td",{className:"px-3 py-2 text-[var(--erp-text-secondary)]",children:"Fabric roll"}),e.jsx("td",{className:"px-3 py-2 text-right text-[var(--erp-text-secondary)]",children:"12"}),e.jsx("td",{})]}),e.jsxs("tr",{className:"bg-[var(--erp-grid-row-error-bg)] border-b border-[var(--erp-validation-error-border)]",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-[var(--erp-text-secondary)]",children:"ACC-220"}),e.jsx("td",{className:"px-3 py-2 text-[var(--erp-text-secondary)]",children:"Accessory pack"}),e.jsx("td",{className:"px-3 py-2 text-right",children:e.jsx(c,{value:"0",error:r.hasError,density:"compact",width:"xs",className:"text-right",readOnly:!0})}),e.jsx("td",{className:"px-3 py-2",children:e.jsx(m,{variant:"danger",children:"Error"})})]}),e.jsxs("tr",{className:"border-[var(--erp-border-muted)]",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-[var(--erp-text-disabled)]",children:"+"}),e.jsx("td",{className:"px-3 py-2 text-[var(--erp-text-disabled)] italic",colSpan:3,children:"Add line..."})]})]})]}),r.messages.length>0&&e.jsxs("p",{className:"text-xs text-[var(--erp-validation-error-text)] flex items-center gap-1",children:[e.jsx("span",{className:"font-medium",children:"Line 2:"}),e.jsx("span",{children:r.messages[0].message})]})]})}},l={render:()=>e.jsxs("div",{className:"max-w-lg flex flex-col gap-3",children:[e.jsx(x,{messages:[p,g],title:"Cannot post"}),e.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[e.jsx(v,{variant:"ghost",density:"compact",children:"Discard"}),e.jsx(v,{variant:"secondary",density:"compact",children:"Save Draft"}),e.jsx(v,{variant:"default",density:"compact",disabled:!0,title:p.message,children:"Post Document"}),e.jsx(m,{variant:"danger",className:"ml-1",children:"Post blocked"})]})]})};var f,y,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2">
          Blocking + warnings + info
        </p>
        <ValidationBanner messages={[validationBlocking, validationWarning, validationInfo]} />
      </div>
      <div>
        <p className="text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2">
          Warnings only
        </p>
        <ValidationBanner messages={[validationWarning, validationInfo]} title="Attention" />
      </div>
      <div>
        <p className="text-xs font-semibold text-[var(--erp-text-muted)] uppercase tracking-wide mb-2">
          No issues (no banner rendered)
        </p>
        <div className="h-8 rounded border border-dashed border-[var(--erp-border-default)] flex items-center px-3">
          <span className="text-xs text-[var(--erp-text-disabled)]">ValidationBanner renders nothing</span>
        </div>
        <ValidationBanner messages={[]} />
      </div>
    </div>
}`,...(N=(y=d.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,w,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const customerState = createFieldValidationState([validationBlocking], "header.customerId");
    const taxState = createFieldValidationState([validationWarning], "header.taxCode");
    return <div className="max-w-sm flex flex-col gap-3">
        <TextField label="Customer" placeholder="Search customer..." error={customerState.hasBlocking} errorMessage={customerState.messages[0]?.message} density="compact" />
        <TextField label="Tax Code" placeholder="e.g. GST18" error={taxState.hasWarning} helpText={taxState.hasWarning ? taxState.messages[0]?.message : "Applied to all lines"} density="compact" />
        <TextField label="Payment Terms" defaultValue="Net 30" helpText={validationInfo.message} density="compact" />
      </div>;
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var S,k,V;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const lineState = createLineValidationState([validationLineError], {
      lineIndex: 1
    });
    return <div className="max-w-xl flex flex-col gap-2">
        <table className="w-full text-xs border border-[var(--erp-grid-row-border)] rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[var(--erp-grid-header-bg)] border-b border-[var(--erp-grid-header-border)]">
              <th className="text-left px-3 py-2 font-medium text-[var(--erp-grid-header-text)]">Item</th>
              <th className="text-left px-3 py-2 font-medium text-[var(--erp-grid-header-text)]">Description</th>
              <th className="text-right px-3 py-2 font-medium text-[var(--erp-grid-header-text)]">Qty</th>
              <th className="w-16 px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--erp-border-muted)]">
              <td className="px-3 py-2 font-mono text-[var(--erp-text-secondary)]">FAB-001</td>
              <td className="px-3 py-2 text-[var(--erp-text-secondary)]">Fabric roll</td>
              <td className="px-3 py-2 text-right text-[var(--erp-text-secondary)]">12</td>
              <td></td>
            </tr>
            <tr className="bg-[var(--erp-grid-row-error-bg)] border-b border-[var(--erp-validation-error-border)]">
              <td className="px-3 py-2 font-mono text-[var(--erp-text-secondary)]">ACC-220</td>
              <td className="px-3 py-2 text-[var(--erp-text-secondary)]">Accessory pack</td>
              <td className="px-3 py-2 text-right">
                <TextField value="0" error={lineState.hasError} density="compact" width="xs" className="text-right" readOnly />
              </td>
              <td className="px-3 py-2">
                <Badge variant="danger">Error</Badge>
              </td>
            </tr>
            <tr className="border-[var(--erp-border-muted)]">
              <td className="px-3 py-2 font-mono text-[var(--erp-text-disabled)]">+</td>
              <td className="px-3 py-2 text-[var(--erp-text-disabled)] italic" colSpan={3}>
                Add line...
              </td>
            </tr>
          </tbody>
        </table>
        {lineState.messages.length > 0 && <p className="text-xs text-[var(--erp-validation-error-text)] flex items-center gap-1">
            <span className="font-medium">Line 2:</span>
            <span>{lineState.messages[0].message}</span>
          </p>}
      </div>;
  }
}`,...(V=(k=o.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var T,E,F;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const _=["ValidationSummary","FieldError","LineError","BlockingWorkflowError"];export{l as BlockingWorkflowError,i as FieldError,o as LineError,d as ValidationSummary,_ as __namedExportsOrder,Q as default};
