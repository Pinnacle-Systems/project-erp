import{j as e,r as M}from"./iframe-CewInuWt.js";import{T as l,a as x}from"./select-field-BpVK6OAn.js";import{a as P,L as V}from"./confirm-dialog-BML_ndGp.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const X=(t={})=>({query:{searchText:"",...t.query},results:t.results??[],selectedResult:t.selectedResult,resolved:t.resolved,validation:t.validation,error:t.error,loading:t.loading??!1,resolvedAt:t.resolvedAt}),_=t=>!!(t.selectedResult&&t.resolved),v=(t,s)=>Object.entries(s).reduce((a,[n,D])=>({...a,[n]:t[D]}),{}),Q={title:"Patterns/Lookup"},p=[{id:"fab-001",label:"FAB-001 – Fabric roll",value:{itemId:"FAB-001",description:"Fabric roll",uom:"ROLL",unitRate:100}},{id:"fab-002",label:"FAB-002 – Denim fabric",value:{itemId:"FAB-002",description:"Denim fabric",uom:"ROLL",unitRate:130}},{id:"fab-003",label:"FAB-003 – Silk fabric",value:{itemId:"FAB-003",description:"Silk fabric",uom:"MTR",unitRate:280}}],K=({results:t,onSelect:s})=>e.jsx("div",{className:"absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-neutral-200 rounded-md shadow-md overflow-hidden",children:t.map(a=>e.jsxs("button",{type:"button",className:"w-full text-left px-3 py-2.5 text-xs hover:bg-neutral-50 border-b border-neutral-100 last:border-b-0 transition-colors",onClick:()=>s(a),children:[e.jsx("span",{className:"font-mono font-medium text-neutral-800",children:a.value.itemId}),e.jsx("span",{className:"text-neutral-500 ml-2",children:a.value.description}),e.jsxs("span",{className:"text-neutral-400 ml-2",children:[a.value.uom," · ₹",a.value.unitRate]})]},a.id))}),C=({values:t})=>e.jsxs("div",{className:"rounded-md bg-blue-50 border border-blue-200 p-2.5 text-xs",children:[e.jsx("p",{className:"font-semibold text-blue-700 mb-1.5",children:"Autofill preview"}),e.jsx("div",{className:"flex flex-col gap-0.5",children:Object.entries(t).map(([s,a])=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-neutral-400 w-24 shrink-0",children:s}),e.jsx("span",{className:"font-mono text-neutral-800",children:String(a)})]},s))})]}),r={render:()=>e.jsxs("div",{className:"max-w-sm flex flex-col gap-2",children:[e.jsx(l,{label:"Item",value:"FAB",density:"compact",readOnly:!0}),e.jsx(V,{variant:"inline",label:"Searching items..."})]})},i={render:()=>{const[t,s]=M.useState(null);return e.jsxs("div",{className:"max-w-sm flex flex-col gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(l,{label:"Item",value:t?t.label:"FAB",density:"compact",readOnly:!0}),!t&&e.jsx(K,{results:p,onSelect:s})]}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[e.jsx(x,{variant:"success",children:"Selected"}),e.jsxs("span",{className:"text-neutral-600",children:[t.value.itemId," · ",t.value.description]}),e.jsx("button",{className:"text-neutral-400 hover:text-neutral-600 ml-auto text-xs",onClick:()=>s(null),children:"Clear"})]})]})}},o={render:()=>{const t=p[0],s=X({query:{searchText:t.label},selectedResult:t});return e.jsxs("div",{className:"max-w-sm flex flex-col gap-2",children:[e.jsx(l,{label:"Item",value:s.query.searchText,density:"compact",readOnly:!0}),e.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[e.jsx(x,{variant:"success",children:"Selected"}),e.jsxs("span",{className:"text-neutral-600",children:[t.value.itemId," · ",t.value.description]})]})]})}},d={render:()=>{const t=p[0],s=t.value,a=v(s,{item:"itemId",description:"description",uom:"uom",unitRate:"unitRate"}),n=X({query:{searchText:t.label},selectedResult:t,resolved:s});return e.jsxs("div",{className:"max-w-sm flex flex-col gap-2",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(l,{label:"Item",value:String(a.item??""),density:"compact",readOnly:!0}),e.jsx(l,{label:"Description",value:String(a.description??""),density:"compact",readOnly:!0}),e.jsx(l,{label:"UOM",value:String(a.uom??""),density:"compact",readOnly:!0}),e.jsx(l,{label:"Unit Rate",value:String(a.unitRate??""),density:"compact",readOnly:!0})]}),_(n)&&e.jsx(x,{variant:"success",children:"Resolved"}),e.jsx(C,{values:a})]})}},c={render:()=>e.jsxs("div",{className:"max-w-sm flex flex-col gap-2",children:[e.jsx(l,{label:"Item",value:"XXX-999",error:!0,errorMessage:"Item not found or inactive.",density:"compact",readOnly:!0}),e.jsx(P,{title:"Lookup failed",description:"The item code could not be resolved. It may be inactive or not set up in this warehouse.",errorDetails:"HTTP 404 Not Found\\nGET /api/v1/items/XXX-999\\nRequest ID: req_a1b2c3d4",onRetry:()=>alert("Retrying lookup..."),retryLabel:"Retry lookup",className:"py-8"})]})},u={name:"Autofill Preview",render:()=>{const s=v({itemId:"FAB-001",description:"Fabric roll",unit:"ROLL",unitRate:100},{item:"itemId",description:"description",uom:"unit",rate:"unitRate"});return e.jsxs("div",{className:"max-w-sm flex flex-col gap-3",children:[e.jsxs("p",{className:"text-xs text-neutral-500",children:[e.jsx("code",{className:"font-mono bg-neutral-100 px-1 rounded",children:"mapAutofillValues"})," ","maps resolved fields to target form field names."]}),e.jsx(C,{values:s}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(s).map(([a,n])=>e.jsx(l,{label:a,value:String(n??""),density:"compact",readOnly:!0},a))})]})}},m={render:()=>{const s=p[2].value,a=v(s,{item:"itemId",uom:"uom",unitRate:"unitRate"});return e.jsxs("div",{className:"max-w-sm flex flex-col gap-2",children:[e.jsx(l,{label:"Item",value:String(a.item??""),density:"compact",readOnly:!0}),e.jsx(l,{label:"Unit Rate",value:String(a.unitRate??""),density:"compact",readOnly:!0}),e.jsxs("div",{className:"rounded-md bg-amber-50 border border-amber-200 p-2.5 text-xs flex items-start gap-2",children:[e.jsx(x,{variant:"warning",className:"mt-0.5 shrink-0",children:"Warning"}),e.jsxs("span",{className:"text-amber-700",children:["Unit rate ₹",a.unitRate," exceeds the approved purchase order rate. Review before saving."]})]})]})}};var g,f,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm flex flex-col gap-2">
      <TextField label="Item" value="FAB" density="compact" readOnly />
      <LoadingState variant="inline" label="Searching items..." />
    </div>
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var R,y,h;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ItemResult | null>(null);
    return <div className="max-w-sm flex flex-col gap-2">
        <div className="relative">
          <TextField label="Item" value={selected ? selected.label : "FAB"} density="compact" readOnly />
          {!selected && <ResultsDropdown results={MOCK_RESULTS} onSelect={setSelected} />}
        </div>
        {selected && <div className="flex items-center gap-2 text-xs">
            <Badge variant="success">Selected</Badge>
            <span className="text-neutral-600">
              {selected.value.itemId} · {selected.value.description}
            </span>
            <button className="text-neutral-400 hover:text-neutral-600 ml-auto text-xs" onClick={() => setSelected(null)}>
              Clear
            </button>
          </div>}
      </div>;
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,j,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const selected = MOCK_RESULTS[0];
    const state = createLookupState({
      query: {
        searchText: selected.label
      },
      selectedResult: selected
    });
    return <div className="max-w-sm flex flex-col gap-2">
        <TextField label="Item" value={state.query.searchText} density="compact" readOnly />
        <div className="flex items-center gap-2 text-xs">
          <Badge variant="success">Selected</Badge>
          <span className="text-neutral-600">
            {selected.value.itemId} · {selected.value.description}
          </span>
        </div>
      </div>;
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,w,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const selected = MOCK_RESULTS[0];
    const resolved = selected.value;
    const autofill = mapAutofillValues<ItemValue, {
      item: string;
      description: string;
      uom: string;
      unitRate: number;
    }>(resolved, {
      item: "itemId",
      description: "description",
      uom: "uom",
      unitRate: "unitRate"
    });
    const state = createLookupState({
      query: {
        searchText: selected.label
      },
      selectedResult: selected,
      resolved
    });
    return <div className="max-w-sm flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <TextField label="Item" value={String(autofill.item ?? "")} density="compact" readOnly />
          <TextField label="Description" value={String(autofill.description ?? "")} density="compact" readOnly />
          <TextField label="UOM" value={String(autofill.uom ?? "")} density="compact" readOnly />
          <TextField label="Unit Rate" value={String(autofill.unitRate ?? "")} density="compact" readOnly />
        </div>
        {isLookupResolved(state) && <Badge variant="success">Resolved</Badge>}
        <AutofillPreview values={autofill as Record<string, unknown>} />
      </div>;
  }
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var T,F,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm flex flex-col gap-2">
      <TextField label="Item" value="XXX-999" error errorMessage="Item not found or inactive." density="compact" readOnly />
      <ErrorState title="Lookup failed" description="The item code could not be resolved. It may be inactive or not set up in this warehouse." errorDetails="HTTP 404 Not Found\\nGET /api/v1/items/XXX-999\\nRequest ID: req_a1b2c3d4" onRetry={() => alert("Retrying lookup...")} retryLabel="Retry lookup" className="py-8" />
    </div>
}`,...(A=(F=c.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var L,k,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Autofill Preview",
  render: () => {
    const resolved = {
      itemId: "FAB-001",
      description: "Fabric roll",
      unit: "ROLL",
      unitRate: 100
    };
    const autofill = mapAutofillValues<typeof resolved, {
      item: string;
      description: string;
      uom: string;
      rate: number;
    }>(resolved, {
      item: "itemId",
      description: "description",
      uom: "unit",
      rate: "unitRate"
    });
    return <div className="max-w-sm flex flex-col gap-3">
        <p className="text-xs text-neutral-500">
          <code className="font-mono bg-neutral-100 px-1 rounded">
            mapAutofillValues
          </code>{" "}
          maps resolved fields to target form field names.
        </p>
        <AutofillPreview values={autofill as Record<string, unknown>} />
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(autofill).map(([k, v]) => <TextField key={k} label={k} value={String(v ?? "")} density="compact" readOnly />)}
        </div>
      </div>;
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var U,q,E;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const selected = MOCK_RESULTS[2];
    const resolved = selected.value;
    const autofill = mapAutofillValues<ItemValue, {
      item: string;
      uom: string;
      unitRate: number;
    }>(resolved, {
      item: "itemId",
      uom: "uom",
      unitRate: "unitRate"
    });
    return <div className="max-w-sm flex flex-col gap-2">
        <TextField label="Item" value={String(autofill.item ?? "")} density="compact" readOnly />
        <TextField label="Unit Rate" value={String(autofill.unitRate ?? "")} density="compact" readOnly />
        <div className="rounded-md bg-amber-50 border border-amber-200 p-2.5 text-xs flex items-start gap-2">
          <Badge variant="warning" className="mt-0.5 shrink-0">
            Warning
          </Badge>
          <span className="text-amber-700">
            Unit rate ₹{autofill.unitRate} exceeds the approved purchase order
            rate. Review before saving.
          </span>
        </div>
      </div>;
  }
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Y=["Searching","Results","Selected","Resolved","ResolveFailed","AutofillPreviewStory","ValidationWarning"];export{u as AutofillPreviewStory,c as ResolveFailed,d as Resolved,i as Results,r as Searching,o as Selected,m as ValidationWarning,Y as __namedExportsOrder,Q as default};
