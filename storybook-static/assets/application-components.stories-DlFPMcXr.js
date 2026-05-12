import{j as e}from"./iframe-CewInuWt.js";import{s as m,a as g}from"./index-Bp63ts54.js";import"./preload-helper-C1FmrZbK.js";const x={title:"Application"},a=({status:u})=>{const r=g[u],n=m[r.semantic];return e.jsx("span",{className:"erp-demo-badge",style:{color:n.foreground,background:n.background},children:r.label})},s={render:()=>e.jsx("header",{className:"erp-demo-panel",children:e.jsxs("div",{className:"erp-demo-row",style:{justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Sales Invoices"}),e.jsx("p",{children:"Dense desktop list header with filters and capability-aware actions."})]}),e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"New invoice"})]})})},t={name:"StatusBadge",render:()=>e.jsxs("div",{className:"erp-demo-row",children:[e.jsx(a,{status:"draft"}),e.jsx(a,{status:"pendingApproval"}),e.jsx(a,{status:"approved"}),e.jsx(a,{status:"rejected"}),e.jsx(a,{status:"posted"})]})};var o,d,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "StatusBadge",
  render: () => <div className="erp-demo-row">
      <StatusBadge status="draft" />
      <StatusBadge status="pendingApproval" />
      <StatusBadge status="approved" />
      <StatusBadge status="rejected" />
      <StatusBadge status="posted" />
    </div>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["PageHeader","StatusBadgeStory"];export{s as PageHeader,t as StatusBadgeStory,S as __namedExportsOrder,x as default};
