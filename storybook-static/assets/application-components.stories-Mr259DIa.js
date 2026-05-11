import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{s as m,a as g}from"./index-Aev5Z0GN.js";const h={title:"Application"},a=({status:u})=>{const r=m[u],n=g[r.semantic];return e.jsx("span",{className:"erp-demo-badge",style:{color:n.foreground,background:n.background},children:r.label})},s={render:()=>e.jsx("header",{className:"erp-demo-panel",children:e.jsxs("div",{className:"erp-demo-row",style:{justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Sales Invoices"}),e.jsx("p",{children:"Dense desktop list header with filters and capability-aware actions."})]}),e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"New invoice"})]})})},t={name:"StatusBadge",render:()=>e.jsxs("div",{className:"erp-demo-row",children:[e.jsx(a,{status:"draft"}),e.jsx(a,{status:"pendingApproval"}),e.jsx(a,{status:"approved"}),e.jsx(a,{status:"rejected"}),e.jsx(a,{status:"posted"})]})};var o,d,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <header className="erp-demo-panel">
      <div className="erp-demo-row" style={{
      justifyContent: "space-between"
    }}>
        <div>
          <h1>Sales Invoices</h1>
          <p>Dense desktop list header with filters and capability-aware actions.</p>
        </div>
        <button className="erp-demo-button" data-variant="primary" type="button">
          New invoice
        </button>
      </div>
    </header>
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "StatusBadge",
  render: () => <div className="erp-demo-row">
      <StatusBadge status="draft" />
      <StatusBadge status="pendingApproval" />
      <StatusBadge status="approved" />
      <StatusBadge status="rejected" />
      <StatusBadge status="posted" />
    </div>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const x=["PageHeader","StatusBadgeStory"];export{s as PageHeader,t as StatusBadgeStory,x as __namedExportsOrder,h as default};
