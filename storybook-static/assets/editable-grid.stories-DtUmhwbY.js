import{j as n}from"./vendor-react-QzJwS0Xl.js";import{G as $,a as x}from"./select-field-C9wJ5B38.js";import{E as H}from"./icon-chip-CEEhPAY1.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const p=({id:t,columns:e,defaults:r={},version:a=0,isPhantom:c=!0})=>{const i=e.reduce((o,d)=>(o[d.field]=r[d.field],o),{}),l=e.reduce((o,d)=>(o[d.id]={rowId:t,columnId:d.id,value:i[d.field],isDirty:!1,isEditing:!1,isManualOverride:!1,isStale:!1,validationMessages:[]},o),{});return{id:t,state:"new",data:i,cells:l,version:a,isPhantom:c}},J=t=>({...t,state:t.state==="clean"?"dirty":t.state}),K=t=>({...t,state:"deleted"}),j=(t,e,r,a={})=>{const c=t.data[e.field],i=a.expectedVersion!==void 0&&a.expectedVersion!==t.version,l=!!(a.stale||i),o=a.nextVersion??t.version+1,d={...t.data,[e.field]:r},m=t.cells[e.id],N={rowId:t.id,columnId:e.id,value:r,isDirty:!0,isEditing:!1,isManualOverride:!!a.manualOverride,isStale:l,validationMessages:(m==null?void 0:m.validationMessages)??[]},R={...J(t),data:d,cells:{...t.cells,[e.id]:N},version:o,isPhantom:!1};return{rowId:t.id,columnId:e.id,previousRow:t,nextRow:R,previousValue:c,nextValue:r,manualOverride:!!a.manualOverride,stale:l,concurrencyConflict:i}},ae={title:"Patterns/Editable Grid"},s=[{id:"item",header:"Item",field:"item"},{id:"description",header:"Description",field:"description",editable:!1},{id:"quantity",header:"Qty",field:"quantity"},{id:"rate",header:"Rate",field:"rate",editable:!1}],A=new Set(["quantity","rate"]),X=({row:t})=>t.isPhantom?n.jsx(x,{variant:"muted",children:"phantom"}):t.state==="deleted"?n.jsx(x,{variant:"danger",children:"deleted"}):t.state==="dirty"?n.jsx(x,{variant:"warning",children:"dirty"}):n.jsx(x,{variant:"success",children:"clean"}),Y=({row:t})=>{const e=[];for(const r of Object.values(t.cells))r.isManualOverride&&e.push("manual"),r.isStale&&e.push("stale"),r.validationMessages.length>0&&e.push("error");return e.length?n.jsx("div",{className:"flex flex-wrap gap-0.5",children:[...new Set(e)].map(r=>n.jsx(x,{variant:r==="error"?"danger":r==="stale"?"warning":"info",children:r},r))}):null},Z=({value:t,numeric:e=!1,phantom:r=!1,deleted:a=!1})=>n.jsx("span",{className:["block h-6 w-full px-1.5 text-xs leading-6",e?"text-right tabular-nums":"",r?"italic text-(--erp-text-disabled)":"text-(--erp-text-secondary)",a?"line-through text-(--erp-text-disabled)":""].filter(Boolean).join(" "),children:r?"—":t}),u=({rows:t})=>n.jsx("div",{className:"overflow-hidden rounded-(--erp-radius-card) border border-(--erp-grid-row-border)",children:n.jsxs("table",{className:"w-full border-collapse text-xs",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-(--erp-grid-header-border) bg-(--erp-grid-header-bg)",children:[n.jsx("th",{className:"h-7 w-18 px-1.5 text-left text-[11px] font-semibold uppercase tracking-wide text-(--erp-grid-header-text)",children:"State"}),s.map(e=>n.jsx("th",{className:["h-7 px-1.5 text-[11px] font-semibold uppercase tracking-wide text-(--erp-grid-header-text)",e.id==="quantity"?"w-14":"",e.id==="rate"?"w-16":"",e.id==="item"?"w-28":"",A.has(e.id)?"text-right":"text-left"].filter(Boolean).join(" "),children:e.header},e.id)),n.jsx("th",{className:"h-7 w-18 px-1.5 text-left text-[11px] font-semibold uppercase tracking-wide text-(--erp-grid-header-text)",children:"Markers"})]})}),n.jsx("tbody",{children:t.map(e=>{const r=e.state==="deleted",a=e.state==="dirty",c=e.isPhantom;return n.jsxs("tr",{className:["border-b border-(--erp-grid-row-border) last:border-b-0",r?"bg-(--erp-grid-row-deleted-bg)":a?"bg-(--erp-grid-row-dirty-bg)":c?"bg-(--erp-grid-row-readonly-bg)":"bg-(--erp-grid-row-bg)"].filter(Boolean).join(" "),children:[n.jsx("td",{className:"px-1.5 py-0.5",children:n.jsx(X,{row:e})}),s.map(i=>{const l=e.cells[i.id],o=e.data[i.field],d=((l==null?void 0:l.validationMessages.length)??0)>0,m=A.has(i.id),N=i.editable!==!1&&!c&&!r,R=!!(l!=null&&l.isManualOverride);return n.jsx("td",{className:"px-0 py-0.5",children:N?n.jsx($,{value:String(o??""),"aria-label":`${i.header} for row ${e.id}`,error:d,numeric:m,readOnly:!0,className:R?"border-(--erp-grid-selection-handle) bg-(--erp-grid-cell-editing-bg)":void 0}):n.jsx(Z,{value:String(o??""),numeric:m,phantom:c,deleted:r})},i.id)}),n.jsx("td",{className:"px-1.5 py-0.5",children:n.jsx(Y,{row:e})})]},e.id)})})]})}),f={render:()=>{const t=p({id:"new",columns:s});return n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(u,{rows:[t]}),n.jsx(H,{title:"No lines added",description:"Add a line item to begin. Use the item lookup to auto-fill description and rate.",primaryAction:n.jsx("button",{className:"text-xs text-(--erp-text-link) hover:underline",children:"+ Add line"}),className:"py-8"})]})}},h={render:()=>{const e={...p({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),state:"clean"},r=p({id:"line-2",columns:s,defaults:{item:"ACC-220",description:"Accessory pack",quantity:8,rate:40},isPhantom:!1}),a=j(r,s[2],10,{expectedVersion:r.version}).nextRow,c=p({id:"new-line",columns:s});return n.jsx(u,{rows:[e,a,c]})}},g={render:()=>{const t=p({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),e=j(t,s[2],15,{expectedVersion:t.version}).nextRow;return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-(--erp-text-muted)",children:"Qty changed from 12 → 15. Row transitions to dirty state."}),n.jsx(u,{rows:[e]})]})}},y={render:()=>{const t=p({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),e=K({...t,state:"clean"});return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-(--erp-text-muted)",children:"Deleted rows are retained until save to support undo. Visual strikethrough signals pending removal."}),n.jsx(u,{rows:[e]})]})}},w={render:()=>{const t={id:"v-qty",severity:"error",scope:"line",lineIndex:0,fieldPath:"lines[0].quantity",message:"Quantity must be greater than zero."},e=p({id:"line-1",columns:s,defaults:{item:"ACC-220",description:"Accessory pack",quantity:0,rate:40},isPhantom:!1}),r={...e,state:"dirty",cells:{...e.cells,quantity:{...e.cells.quantity,validationMessages:[t]}}};return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx(u,{rows:[r]}),n.jsxs("p",{className:"text-xs text-(--erp-validation-error-text)",children:["Line 1 · ",t.message]})]})}},v={render:()=>{const t=p({id:"line-1",columns:s}),e=j(t,s[0],"FAB-001",{expectedVersion:t.version}).nextRow,r={...e,data:{...e.data,description:"Fabric roll",rate:100}};return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-(--erp-text-muted)",children:"Selecting an item via lookup auto-fills description and rate. The item cell is dirty; autofill fields are read-only until manually overridden."}),n.jsx(u,{rows:[r]})]})}},b={render:()=>{const t=p({id:"line-1",columns:s,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12,rate:100},isPhantom:!1}),e=j(t,s[2],14,{expectedVersion:t.version,manualOverride:!0});return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("p",{className:"text-xs text-(--erp-text-muted)",children:"A manual override (blue border) prevents future autofill from overwriting the user-set value."}),n.jsx(u,{rows:[e.nextRow]}),n.jsx("p",{className:"text-xs text-(--erp-text-link)",children:"Qty manually set to 14. Autofill will not overwrite this field."})]})}};var k,E,q;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const phantom = createEmptyRow<Line>({
      id: "new",
      columns
    });
    return <div className="flex flex-col gap-3">
        <GridTable rows={[phantom]} />
        <EmptyState title="No lines added" description="Add a line item to begin. Use the item lookup to auto-fill description and rate." primaryAction={<button className="text-xs text-(--erp-text-link) hover:underline">
              + Add line
            </button>} className="py-8" />
      </div>;
  }
}`,...(q=(E=f.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var C,M,S;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(M=h.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var L,F,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <p className="text-xs text-(--erp-text-muted)">
          Qty changed from 12 → 15. Row transitions to dirty state.
        </p>
        <GridTable rows={[dirty]} />
      </div>;
  }
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var B,O,V;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        <p className="text-xs text-(--erp-text-muted)">
          Deleted rows are retained until save to support undo. Visual strikethrough signals
          pending removal.
        </p>
        <GridTable rows={[deleted]} />
      </div>;
  }
}`,...(V=(O=y.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var D,G,I;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <p className="text-xs text-(--erp-validation-error-text)">
          Line 1 · {errMsg.message}
        </p>
      </div>;
  }
}`,...(I=(G=w.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var T,Q,U;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <p className="text-xs text-(--erp-text-muted)">
          Selecting an item via lookup auto-fills description and rate. The item cell is dirty;
          autofill fields are read-only until manually overridden.
        </p>
        <GridTable rows={[withAutofill]} />
      </div>;
  }
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var _,z,W;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        <p className="text-xs text-(--erp-text-muted)">
          A manual override (blue border) prevents future autofill from overwriting the
          user-set value.
        </p>
        <GridTable rows={[change.nextRow]} />
        <p className="text-xs text-(--erp-text-link)">
          Qty manually set to 14. Autofill will not overwrite this field.
        </p>
      </div>;
  }
}`,...(W=(z=b.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const ie=["EmptyGrid","WithLines","DirtyRow","DeletedRow","ValidationErrors","LookupAutofillResult","StaleManualOverride"];export{y as DeletedRow,g as DirtyRow,f as EmptyGrid,v as LookupAutofillResult,b as StaleManualOverride,w as ValidationErrors,h as WithLines,ie as __namedExportsOrder,ae as default};
