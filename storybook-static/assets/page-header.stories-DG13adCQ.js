import{j as e}from"./vendor-react-QzJwS0Xl.js";import{P}from"./icon-chip-CEEhPAY1.js";import{B as t,a as c}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const M={title:"Application/PageHeader",component:P,argTypes:{density:{control:"select",options:["compact","comfortable","touch"]}}},T=[{id:"sales",label:"Sales",href:"#"},{id:"invoices",label:"Invoices",href:"#"},{id:"si-1024",label:"SI-1024",current:!0}],E=[{id:"sales",label:"Sales",href:"#"},{id:"returns",label:"Returns",href:"#"},{id:"sr-108",label:"SR-108",current:!0}],n={args:{title:"Vendor Bills",subtitle:"All vendor invoices and credit notes"}},r={args:{title:"Sales Invoice SI-1024",subtitle:"ABC Traders",breadcrumbs:T}},a={args:{title:"Sales Return SR-108",subtitle:"ABC Traders",status:e.jsx(c,{variant:"warning",children:"Pending Approval"}),breadcrumbs:E,primaryAction:e.jsx(t,{variant:"default",density:"compact",width:"hug",children:"Approve"}),secondaryActions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",density:"compact",width:"hug",children:"Reject"}),e.jsx(t,{variant:"secondary",density:"compact",width:"hug",children:"Edit"})]}),meta:[{label:"Status",value:"Awaiting review"},{label:"Lines",value:"6"},{label:"Updated",value:"30 Apr 2024"}]}},s=a,i={args:{title:"General Ledger",subtitle:"FY 2024–25 · Posting period 04",density:"compact",status:e.jsx(c,{variant:"success",children:"Active"}),primaryAction:e.jsx(t,{variant:"default",density:"compact",width:"hug",children:"Post Entries"}),secondaryActions:e.jsx(t,{variant:"secondary",density:"compact",width:"hug",children:"Export"}),meta:[{label:"Unposted",value:"14 entries"},{label:"Last posted",value:"09 May 2025, 14:32"}]}},o={args:{title:"Inventory Transfer TR-771",subtitle:"Main Warehouse to North Dock",density:"compact",breadcrumbs:[{id:"inventory",label:"Inventory",href:"#"},{id:"transfers",label:"Transfers",href:"#"},{id:"tr-771",label:"TR-771",current:!0}],status:e.jsx(c,{variant:"info",children:"In Review"}),primaryAction:e.jsx(t,{variant:"default",density:"compact",width:"hug",children:"Save"}),secondaryActions:e.jsx(t,{variant:"secondary",density:"compact",width:"hug",children:"Submit"}),meta:[{label:"Lines",value:"14"},{label:"Updated",value:"09 May 2025, 14:32"}]}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Vendor Bills",
    subtitle: "All vendor invoices and credit notes"
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Sales Invoice SI-1024",
    subtitle: "ABC Traders",
    breadcrumbs: invoiceBreadcrumbs
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,v,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Sales Return SR-108",
    subtitle: "ABC Traders",
    status: <Badge variant="warning">Pending Approval</Badge>,
    breadcrumbs: returnBreadcrumbs,
    primaryAction: <Button variant="default" density="compact" width="hug">
        Approve
      </Button>,
    secondaryActions: <>
        <Button variant="ghost" density="compact" width="hug">
          Reject
        </Button>
        <Button variant="secondary" density="compact" width="hug">
          Edit
        </Button>
      </>,
    meta: [{
      label: "Status",
      value: "Awaiting review"
    }, {
      label: "Lines",
      value: "6"
    }, {
      label: "Updated",
      value: "30 Apr 2024"
    }]
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,B,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"WithBreadcrumbsStatusAndActions",...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var f,S,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "General Ledger",
    subtitle: "FY 2024–25 · Posting period 04",
    density: "compact",
    status: <Badge variant="success">Active</Badge>,
    primaryAction: <Button variant="default" density="compact" width="hug">
        Post Entries
      </Button>,
    secondaryActions: <Button variant="secondary" density="compact" width="hug">
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
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var R,x,j;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Inventory Transfer TR-771",
    subtitle: "Main Warehouse to North Dock",
    density: "compact",
    breadcrumbs: [{
      id: "inventory",
      label: "Inventory",
      href: "#"
    }, {
      id: "transfers",
      label: "Transfers",
      href: "#"
    }, {
      id: "tr-771",
      label: "TR-771",
      current: true
    }],
    status: <Badge variant="info">In Review</Badge>,
    primaryAction: <Button variant="default" density="compact" width="hug">
        Save
      </Button>,
    secondaryActions: <Button variant="secondary" density="compact" width="hug">
        Submit
      </Button>,
    meta: [{
      label: "Lines",
      value: "14"
    }, {
      label: "Updated",
      value: "09 May 2025, 14:32"
    }]
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const U=["Default","WithBreadcrumbs","WithBreadcrumbsStatusAndActions","WithStatusAndActions","DenseERPHeader","DenseERPHeaderWithBreadcrumbs"];export{n as Default,i as DenseERPHeader,o as DenseERPHeaderWithBreadcrumbs,r as WithBreadcrumbs,a as WithBreadcrumbsStatusAndActions,s as WithStatusAndActions,U as __namedExportsOrder,M as default};
