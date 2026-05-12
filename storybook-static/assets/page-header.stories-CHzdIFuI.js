import{j as e}from"./iframe-CewInuWt.js";import{P as b}from"./confirm-dialog-BML_ndGp.js";import{B as t,a as v}from"./select-field-BpVK6OAn.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const B={title:"Application/PageHeader",component:b,argTypes:{density:{control:"select",options:["compact","comfortable","touch"]}}},a={args:{title:"Vendor Bills",subtitle:"All vendor invoices and credit notes"}},n={args:{title:"Purchase Order #PO-2024-0841",subtitle:"Raised 12 Apr 2024 · Acme Supplies Ltd",status:e.jsx(v,{variant:"warning",children:"Pending Approval"}),breadcrumbs:[{label:"Procurement",href:"#"},{label:"Purchase Orders",href:"#"},{label:"PO-2024-0841"}],primaryAction:e.jsx(t,{variant:"default",density:"compact",children:"Approve"}),secondaryActions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",density:"compact",children:"Reject"}),e.jsx(t,{variant:"secondary",density:"compact",children:"Edit"})]}),meta:[{label:"Total",value:"₹1,24,500.00"},{label:"Items",value:"6"},{label:"Due",value:"30 Apr 2024"},{label:"Warehouse",value:"Mumbai Central"}]}},r={args:{title:"General Ledger",subtitle:"FY 2024–25 · Posting period 04",density:"compact",status:e.jsx(v,{variant:"success",children:"Active"}),primaryAction:e.jsx(t,{variant:"default",density:"compact",children:"Post Entries"}),secondaryActions:e.jsx(t,{variant:"secondary",density:"compact",children:"Export"}),meta:[{label:"Unposted",value:"14 entries"},{label:"Last posted",value:"09 May 2025, 14:32"}]}};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "Vendor Bills",
    subtitle: "All vendor invoices and credit notes"
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Purchase Order #PO-2024-0841",
    subtitle: "Raised 12 Apr 2024 · Acme Supplies Ltd",
    status: <Badge variant="warning">Pending Approval</Badge>,
    breadcrumbs: [{
      label: "Procurement",
      href: "#"
    }, {
      label: "Purchase Orders",
      href: "#"
    }, {
      label: "PO-2024-0841"
    }],
    primaryAction: <Button variant="default" density="compact">
        Approve
      </Button>,
    secondaryActions: <>
        <Button variant="ghost" density="compact">
          Reject
        </Button>
        <Button variant="secondary" density="compact">
          Edit
        </Button>
      </>,
    meta: [{
      label: "Total",
      value: "₹1,24,500.00"
    }, {
      label: "Items",
      value: "6"
    }, {
      label: "Due",
      value: "30 Apr 2024"
    }, {
      label: "Warehouse",
      value: "Mumbai Central"
    }]
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "General Ledger",
    subtitle: "FY 2024–25 · Posting period 04",
    density: "compact",
    status: <Badge variant="success">Active</Badge>,
    primaryAction: <Button variant="default" density="compact">
        Post Entries
      </Button>,
    secondaryActions: <Button variant="secondary" density="compact">
        Export
      </Button>,
    meta: [{
      label: "Unposted",
      value: "14 entries"
    }, {
      label: "Last posted",
      value: "09 May 2025, 14:32"
    }]
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const f=["Default","WithStatusAndActions","DenseERPHeader"];export{a as Default,r as DenseERPHeader,n as WithStatusAndActions,f as __namedExportsOrder,B as default};
