import{j as t}from"./jsx-runtime-BjG_zV1W.js";const u=({id:e,columns:i,defaults:s={},version:n=0,isPhantom:d=!0})=>{const l=i.reduce((r,a)=>(r[a.field]=s[a.field],r),{}),c=i.reduce((r,a)=>(r[a.id]={rowId:e,columnId:a.id,value:l[a.field],isDirty:!1,isEditing:!1,isManualOverride:!1,isStale:!1,validationMessages:[]},r),{});return{id:e,state:"new",data:l,cells:c,version:n,isPhantom:d}},j=e=>({...e,state:e.state==="clean"?"dirty":e.state}),g=(e,i,s,n={})=>{const d=e.data[i.field],l=n.expectedVersion!==void 0&&n.expectedVersion!==e.version,c=!!(n.stale||l),r=n.nextVersion??e.version+1,a={...e.data,[i.field]:s},h=e.cells[i.id],v={rowId:e.id,columnId:i.id,value:s,isDirty:!0,isEditing:!1,isManualOverride:!!n.manualOverride,isStale:c,validationMessages:(h==null?void 0:h.validationMessages)??[]},y={...j(e),data:a,cells:{...e.cells,[i.id]:v},version:r,isPhantom:!1};return{rowId:e.id,columnId:i.id,previousRow:e,nextRow:y,previousValue:d,nextValue:s,manualOverride:!!n.manualOverride,stale:c,concurrencyConflict:l}},S={title:"Patterns/Editable Grid"},m=[{id:"item",header:"Item",field:"item"},{id:"description",header:"Description",field:"description",editable:!1},{id:"quantity",header:"Qty",field:"quantity"}],o={render:()=>{const e=u({id:"line-1",columns:m,defaults:{item:"FAB-001",description:"Fabric roll",quantity:12},isPhantom:!1}),i=g(e,m[2],14,{expectedVersion:e.version,manualOverride:!0}).nextRow,s=u({id:"new-line",columns:m});return t.jsxs("div",{className:"erp-demo-stack",children:[t.jsx("h1",{children:"Editable Grid States"}),t.jsxs("table",{className:"erp-demo-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"State"}),t.jsx("th",{children:"Item"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Qty"}),t.jsx("th",{children:"Markers"})]})}),t.jsx("tbody",{children:[i,s].map(n=>{var d;return t.jsxs("tr",{children:[t.jsx("td",{children:n.state}),t.jsx("td",{children:String(n.data.item??"")}),t.jsx("td",{children:String(n.data.description??"")}),t.jsx("td",{children:String(n.data.quantity??"")}),t.jsx("td",{children:n.isPhantom?"phantom row":(d=n.cells.quantity)!=null&&d.isManualOverride?"manual override":""})]},n.id)})})]})]})}};var p,x,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const first = createEmptyRow<Line>({
      id: "line-1",
      columns,
      defaults: {
        item: "FAB-001",
        description: "Fabric roll",
        quantity: 12
      },
      isPhantom: false
    });
    const changed = applyCellChange(first, columns[2], 14, {
      expectedVersion: first.version,
      manualOverride: true
    }).nextRow;
    const phantom = createEmptyRow<Line>({
      id: "new-line",
      columns
    });
    return <div className="erp-demo-stack">
        <h1>Editable Grid States</h1>
        <table className="erp-demo-table">
          <thead>
            <tr><th>State</th><th>Item</th><th>Description</th><th>Qty</th><th>Markers</th></tr>
          </thead>
          <tbody>
            {[changed, phantom].map(row => <tr key={row.id}>
                <td>{row.state}</td>
                <td>{String(row.data.item ?? "")}</td>
                <td>{String(row.data.description ?? "")}</td>
                <td>{String(row.data.quantity ?? "")}</td>
                <td>{row.isPhantom ? "phantom row" : row.cells.quantity?.isManualOverride ? "manual override" : ""}</td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const E=["WithLines"];export{o as WithLines,E as __namedExportsOrder,S as default};
