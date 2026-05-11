import{j as e}from"./jsx-runtime-BjG_zV1W.js";const u=(n,s)=>Object.entries(s).reduce((o,[a,d])=>({...o,[a]:n[d]}),{}),p={title:"Patterns/Lookup"},r={render:()=>{const n={itemId:"FAB-001",description:"Fabric roll",unit:"ROLL"},s=u(n,{item:"itemId",description:"description",uom:"unit"});return e.jsxs("div",{className:"erp-demo-stack",style:{maxWidth:520},children:[e.jsx("h1",{children:"Lookup Autofill Result"}),e.jsx("input",{className:"erp-demo-input",defaultValue:"FAB","aria-label":"Search item"}),e.jsxs("div",{className:"erp-demo-panel",children:[e.jsx("strong",{children:"Resolved result"}),e.jsx("pre",{children:JSON.stringify(n,null,2)})]}),e.jsxs("div",{className:"erp-demo-panel",children:[e.jsx("strong",{children:"Autofill preview"}),e.jsx("pre",{children:JSON.stringify(s,null,2)})]})]})}};var t,i,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const resolved = {
      itemId: "FAB-001",
      description: "Fabric roll",
      unit: "ROLL"
    };
    const autofill = mapAutofillValues<typeof resolved, {
      item: string;
      description: string;
      uom: string;
    }>(resolved, {
      item: "itemId",
      description: "description",
      uom: "unit"
    });
    return <div className="erp-demo-stack" style={{
      maxWidth: 520
    }}>
        <h1>Lookup Autofill Result</h1>
        <input className="erp-demo-input" defaultValue="FAB" aria-label="Search item" />
        <div className="erp-demo-panel">
          <strong>Resolved result</strong>
          <pre>{JSON.stringify(resolved, null, 2)}</pre>
        </div>
        <div className="erp-demo-panel">
          <strong>Autofill preview</strong>
          <pre>{JSON.stringify(autofill, null, 2)}</pre>
        </div>
      </div>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const m=["AutofillResult"];export{r as AutofillResult,m as __namedExportsOrder,p as default};
