import{j as n}from"./iframe-CewInuWt.js";import{T as _,a as m}from"./select-field-BpVK6OAn.js";import{E as H}from"./confirm-dialog-BML_ndGp.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const i=({id:t,columns:e,defaults:r={},version:a=0,isPhantom:l=!0})=>{const d=e.reduce((c,o)=>(c[o.field]=r[o.field],c),{}),p=e.reduce((c,o)=>(c[o.id]={rowId:t,columnId:o.id,value:d[o.field],isDirty:!1,isEditing:!1,isManualOverride:!1,isStale:!1,validationMessages:[]},c),{});return{id:t,state:"new",data:d,cells:p,version:a,isPhantom:l}},J=t=>({...t,state:t.state==="clean"?"dirty":t.state}),K=t=>({...t,state:"deleted"}),b=(t,e,r,a={})=>{const l=t.data[e.field],d=a.expectedVersion!==void 0&&a.expectedVersion!==t.version,p=!!(a.stale||d),c=a.nextVersion??t.version+1,o={...t.data,[e.field]:r},j=t.cells[e.id],U={rowId:t.id,columnId:e.id,value:r,isDirty:!0,isEditing:!1,isManualOverride:!!a.manualOverride,isStale:p,validationMessages:(j==null?void 0:j.validationMessages)??[]},W={...J(t),data:o,cells:{...t.cells,[e.id]:U},version:c,isPhantom:!1};return{rowId:t.id,columnId:e.id,previousRow:t,nextRow:W,previousValue:l,nextValue:r,manualOverride:!!a.manualOverride,stale:p,concurrencyConflict:d}},re={title:"Patterns/Editable Grid"},s=[{id:"item",header:"Item",field:"item"},{id:"description",header:"Description",field:"description",editable:!1},{id:"quantity",header:"Qty",field:"quantity"},{id:"rate",header:"Rate",field:"rate",editable:!1}],X=({row:t})=>t.isPhantom?n.jsx(m,{variant:"muted",children:"phantom"}):t.state==="deleted"?n.jsx(m,{variant:"danger",children:"deleted"}):t.state==="dirty"?n.jsx(m,{variant:"warning",children:"dirty"}):n.jsx(m,{variant:"success",children:"clean"}),Y=({row:t})=>{const e=[];for(const r of Object.values(t.cells))r.isManualOverride&&e.push("manual"),r.isStale&&e.push("stale"),r.validationMessages.length>0&&e.push("error");return e.length?n.jsx("div",{className:"flex gap-1 flex-wrap",children:[...new Set(e)].map(r=>n.jsx(m,{variant:r==="error"?"danger":r==="stale"?"warning":"info",children:r},r))}):null},u=({rows:t})=>n.jsx("div",{className:"border border-neutral-200 rounded-md overflow-hidden text-xs",children:n.jsxs("table",{className:"w-full",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-neutral-50 border-b border-neutral-200",children:[n.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500 w-28",children:"State"}),s.map(e=>n.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500",children:e.header},e.id)),n.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500 w-28",children:"Markers"})]})}),n.jsx("tbody",{children:t.map(e=>n.jsxs("tr",{className:["border-b border-neutral-100 last:border-b-0",e.state==="deleted"?"bg-red-50 opacity-60":e.state==="dirty"?"bg-amber-50":e.isPhantom?"bg-neutral-50/60":""].join(" "),children:[n.jsx("td",{className:"px-3 py-2",children:n.jsx(X,{row:e})}),s.map(r=>{const a=e.cells[r.id],l=e.data[r.field],d=((a==null?void 0:a.validationMessages.length)??0)>0;return n.jsx("td",{className:"px-3 py-2",children:r.editable!==!1&&!e.isPhantom?n.jsx(_,{value:String(l??""),error:d,density:"compact",className:["w-full",e.state==="deleted"?"line-through text-neutral-400":"",a!=null&&a.isManualOverride?"border-blue-400 bg-blue-50":""].join(" "),readOnly:!0}):n.jsx("span",{className:["text-neutral-700",e.isPhantom?"text-neutral-400 italic":"",e.state==="deleted"?"line-through text-neutral-400":""].join(" "),children:e.isPhantom?"—":String(l??"")})},r.id)}),n.jsx("td",{className:"px-3 py-2",children:n.jsx(Y,{row:e})})]},e.id))})]})}),x={render:()=>{const t=i({id:"new",columns:s});return n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(u,{rows:[t]}),n.jsx(H,{title:"No lines added",description:"Add a line item to begin. Use the item lookup to auto-fill description and rate.",primaryAction:n.jsx("button",{className:"text-xs text-blue-600 hover:underline",children:"+ Add line"}),className:"py-8"})]})}},f={render:()=>{const e={...i({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),state:"clean"},r=i({id:"line-2",columns:s,defaults:{item:"ACC-220",description:"Accessory pack",quantity:8,rate:40},isPhantom:!1}),a=b(r,s[2],10,{expectedVersion:r.version}).nextRow,l=i({id:"new-line",columns:s});return n.jsx(u,{rows:[e,a,l]})}},h={render:()=>{const t=i({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),e=b(t,s[2],15,{expectedVersion:t.version}).nextRow;return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-neutral-500",children:"Qty changed from 12 → 15. Row transitions to dirty state."}),n.jsx(u,{rows:[e]})]})}},y={render:()=>{const t=i({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),e=K({...t,state:"clean"});return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-neutral-500",children:"Deleted rows are retained until save to support undo. Visual strikethrough signals pending removal."}),n.jsx(u,{rows:[e]})]})}},v={render:()=>{const t={id:"v-qty",severity:"error",scope:"line",lineIndex:0,fieldPath:"lines[0].quantity",message:"Quantity must be greater than zero."},e=i({id:"line-1",columns:s,defaults:{item:"ACC-220",description:"Accessory pack",quantity:0,rate:40},isPhantom:!1}),r={...e,state:"dirty",cells:{...e.cells,quantity:{...e.cells.quantity,validationMessages:[t]}}};return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx(u,{rows:[r]}),n.jsxs("p",{className:"text-xs text-red-600",children:["Line 1 · ",t.message]})]})}},g={render:()=>{const t=i({id:"line-1",columns:s}),e=b(t,s[0],"FAB-001",{expectedVersion:t.version}).nextRow,r={...e,data:{...e.data,description:"Fabric roll",rate:100}};return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-neutral-500",children:"Selecting an item via lookup auto-fills description and rate. The item cell is dirty; autofill fields are read-only until manually overridden."}),n.jsx(u,{rows:[r]})]})}},w={render:()=>{const t=i({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),e=b(t,s[2],14,{expectedVersion:t.version,manualOverride:!0});return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-neutral-500",children:"A manual override (blue border) prevents future autofill from overwriting the user-set value."}),n.jsx(u,{rows:[e.nextRow]}),n.jsx("p",{className:"text-xs text-blue-600",children:"Qty manually set to 14. Autofill will not overwrite this field."})]})}};var N,R,A;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const phantom = createEmptyRow<Line>({
      id: "new",
      columns
    });
    return <div className="flex flex-col gap-3">
        <GridTable rows={[phantom]} />
        <EmptyState title="No lines added" description="Add a line item to begin. Use the item lookup to auto-fill description and rate." primaryAction={<button className="text-xs text-blue-600 hover:underline">
              + Add line
            </button>} className="py-8" />
      </div>;
  }
}`,...(A=(R=x.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,k,q;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const row1 = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: {
        item: "FAB-001",
        description: "Fabric roll",
        quantity: 12,
        rate: 100
      },
      isPhantom: false
    });
    const clean = {
      ...row1,
      state: "clean" as const
    };
    const row2 = createEmptyRow<Line>({
      id: "line-2",
      columns,
      defaults: {
        item: "ACC-220",
        description: "Accessory pack",
        quantity: 8,
        rate: 40
      },
      isPhantom: false
    });
    const dirty = applyCellChange(row2, columns[2], 10, {
      expectedVersion: row2.version
    }).nextRow;
    const phantom = createEmptyRow<Line>({
      id: "new-line",
      columns
    });
    return <GridTable rows={[clean, dirty, phantom]} />;
  }
}`,...(q=(k=f.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,L,M;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: {
        item: "FAB-001",
        description: "Fabric roll",
        quantity: 12,
        rate: 100
      },
      isPhantom: false
    });
    const dirty = applyCellChange(row, columns[2], 15, {
      expectedVersion: row.version
    }).nextRow;
    return <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-500">
          Qty changed from 12 → 15. Row transitions to dirty state.
        </p>
        <GridTable rows={[dirty]} />
      </div>;
  }
}`,...(M=(L=h.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,S,C;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: {
        item: "FAB-001",
        description: "Fabric roll",
        quantity: 12,
        rate: 100
      },
      isPhantom: false
    });
    const deleted = markRowDeleted({
      ...row,
      state: "clean"
    });
    return <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-500">
          Deleted rows are retained until save to support undo. Visual strikethrough signals
          pending removal.
        </p>
        <GridTable rows={[deleted]} />
      </div>;
  }
}`,...(C=(S=y.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var V,B,O;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const errMsg: ValidationMessage = {
      id: "v-qty",
      severity: "error",
      scope: "line",
      lineIndex: 0,
      fieldPath: "lines[0].quantity",
      message: "Quantity must be greater than zero."
    };
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: {
        item: "ACC-220",
        description: "Accessory pack",
        quantity: 0,
        rate: 40
      },
      isPhantom: false
    });
    const withError: GridRow<Line> = {
      ...row,
      state: "dirty",
      cells: {
        ...row.cells,
        quantity: {
          ...row.cells["quantity"]!,
          validationMessages: [errMsg]
        }
      }
    };
    return <div className="flex flex-col gap-2">
        <GridTable rows={[withError]} />
        <p className="text-xs text-red-600">
          Line 1 · {errMsg.message}
        </p>
      </div>;
  }
}`,...(O=(B=v.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var D,G,T;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const empty = createEmptyRow<Line>({
      id: "line-1",
      columns
    });
    const afterLookup = applyCellChange(empty, columns[0], "FAB-001", {
      expectedVersion: empty.version
    }).nextRow;
    const withAutofill: GridRow<Line> = {
      ...afterLookup,
      data: {
        ...afterLookup.data,
        description: "Fabric roll",
        rate: 100
      }
    };
    return <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-500">
          Selecting an item via lookup auto-fills description and rate. The
          item cell is dirty; autofill fields are read-only until manually
          overridden.
        </p>
        <GridTable rows={[withAutofill]} />
      </div>;
  }
}`,...(T=(G=g.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var I,Q,z;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const row = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: {
        item: "FAB-001",
        description: "Fabric roll",
        quantity: 12,
        rate: 100
      },
      isPhantom: false
    });
    const change = applyCellChange(row, columns[2], 14, {
      expectedVersion: row.version,
      manualOverride: true
    });
    return <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-500">
          A manual override (blue border) prevents future autofill from
          overwriting the user-set value.
        </p>
        <GridTable rows={[change.nextRow]} />
        <p className="text-xs text-blue-600">
          Qty manually set to 14. Autofill will not overwrite this field.
        </p>
      </div>;
  }
}`,...(z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};const ae=["EmptyGrid","WithLines","DirtyRow","DeletedRow","ValidationErrors","LookupAutofillResult","StaleManualOverride"];export{y as DeletedRow,h as DirtyRow,x as EmptyGrid,g as LookupAutofillResult,w as StaleManualOverride,v as ValidationErrors,f as WithLines,ae as __namedExportsOrder,re as default};
