import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as s}from"./index-Du8v9hNF.js";import"./iframe-CtfhfrVN.js";import"./preload-helper-C1FmrZbK.js";const c={title:"Shells/Desktop"},t={render:()=>e.jsxs("div",{className:"erp-demo-stack",children:[e.jsx("h1",{children:"Desktop Dense Transaction Page"}),e.jsx("p",{children:"Desktop grammar emphasizes dense review, keyboard workflows, and line-item editing."}),e.jsx(s,{title:"Sales Delivery",documentNumber:"SD-8821",status:"submitted",mode:"edit",density:"compact",header:e.jsxs("div",{className:"erp-demo-row",children:[e.jsx("input",{className:"erp-demo-input",defaultValue:"Northwind Retail","aria-label":"Customer"}),e.jsx("input",{className:"erp-demo-input",defaultValue:"Main Warehouse","aria-label":"Warehouse"}),e.jsx("input",{className:"erp-demo-input",defaultValue:"Truck-17","aria-label":"Dispatch route"})]}),lines:e.jsxs("table",{className:"erp-demo-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Ordered"}),e.jsx("th",{children:"Picked"}),e.jsx("th",{children:"Delivered"}),e.jsx("th",{children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"FAB-001"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"Ready"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ACC-220"}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"Variance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"BOX-010"}),e.jsx("td",{children:"20"}),e.jsx("td",{children:"20"}),e.jsx("td",{children:"20"}),e.jsx("td",{children:"Ready"})]})]})]}),totals:e.jsx("div",{className:"erp-demo-panel",children:"3 lines, 38 units"}),actions:[{id:"save",label:"Save",variant:"primary",placement:"primary"},{id:"submit",label:"Submit",variant:"secondary",placement:"primary"},{id:"post",label:"Post",variant:"danger",placement:"secondary",disabled:!0,reason:{code:"variance.open",message:"Resolve delivery variance before posting."}}],validationMessages:[{id:"variance",severity:"warning",scope:"line",lineIndex:1,message:"Picked quantity differs from ordered quantity."}]})]})};var a,d,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="erp-demo-stack">
      <h1>Desktop Dense Transaction Page</h1>
      <p>Desktop grammar emphasizes dense review, keyboard workflows, and line-item editing.</p>
      <TransactionShell title="Sales Delivery" documentNumber="SD-8821" status="submitted" mode="edit" density="compact" header={<div className="erp-demo-row">
            <input className="erp-demo-input" defaultValue="Northwind Retail" aria-label="Customer" />
            <input className="erp-demo-input" defaultValue="Main Warehouse" aria-label="Warehouse" />
            <input className="erp-demo-input" defaultValue="Truck-17" aria-label="Dispatch route" />
          </div>} lines={<table className="erp-demo-table">
            <thead>
              <tr><th>Item</th><th>Ordered</th><th>Picked</th><th>Delivered</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>FAB-001</td><td>12</td><td>12</td><td>12</td><td>Ready</td></tr>
              <tr><td>ACC-220</td><td>8</td><td>6</td><td>6</td><td>Variance</td></tr>
              <tr><td>BOX-010</td><td>20</td><td>20</td><td>20</td><td>Ready</td></tr>
            </tbody>
          </table>} totals={<div className="erp-demo-panel">3 lines, 38 units</div>} actions={[{
      id: "save",
      label: "Save",
      variant: "primary",
      placement: "primary"
    }, {
      id: "submit",
      label: "Submit",
      variant: "secondary",
      placement: "primary"
    }, {
      id: "post",
      label: "Post",
      variant: "danger",
      placement: "secondary",
      disabled: true,
      reason: {
        code: "variance.open",
        message: "Resolve delivery variance before posting."
      }
    }]} validationMessages={[{
      id: "variance",
      severity: "warning",
      scope: "line",
      lineIndex: 1,
      message: "Picked quantity differs from ordered quantity."
    }]} />
    </div>
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const m=["DenseTransactionPage"];export{t as DenseTransactionPage,m as __namedExportsOrder,c as default};
