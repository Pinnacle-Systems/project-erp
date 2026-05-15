import{j as r}from"./vendor-react-QzJwS0Xl.js";import{B as j,P as A,S as T}from"./icon-chip-CEEhPAY1.js";import{B as c}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const N={title:"Application/Navigation",component:j},o=[{id:"sales",label:"Sales",href:"#"},{id:"sales-invoices",label:"Invoices",href:"#"},{id:"si-1024",label:"SI-1024",current:!0}],C=[{id:"sales",label:"Sales",href:"#"},{id:"sales-returns",label:"Returns",href:"#"},{id:"sr-108",label:"SR-108",current:!0}],I=[{id:"inventory",label:"Inventory",href:"#"},{id:"inventory-operations",label:"Operations",href:"#"},{id:"inventory-transfers",label:"Transfers",href:"#"},{id:"inventory-transfer-review",label:"Transfer Review",href:"#"},{id:"tr-771",label:"TR-771",current:!0}],e={args:{items:o}},a={args:{items:C,compact:!0}},s={args:{items:I}},t={args:{items:I,maxItems:3}},n={args:{items:o},render:()=>r.jsx("div",{className:"overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]",children:r.jsx(A,{title:"Sales Invoice SI-1024",subtitle:"ABC Traders",breadcrumbs:o,status:r.jsx(T,{label:"Draft",tone:"default"}),primaryAction:r.jsx(c,{variant:"default",density:"compact",children:"Save"}),secondaryActions:r.jsx(c,{variant:"secondary",density:"compact",children:"Submit"})})})};var d,i,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: invoiceBreadcrumbs
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,l,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: returnBreadcrumbs,
    compact: true
  }
}`,...(b=(l=a.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var p,f,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: transferBreadcrumbs
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var B,g,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: transferBreadcrumbs,
    maxItems: 3
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,y,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: invoiceBreadcrumbs
  },
  render: () => <div className="overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]">
      <PageHeader title="Sales Invoice SI-1024" subtitle="ABC Traders" breadcrumbs={invoiceBreadcrumbs} status={<StatusBadge label="Draft" tone="default" />} primaryAction={<Button variant="default" density="compact">
            Save
          </Button>} secondaryActions={<Button variant="secondary" density="compact">
            Submit
          </Button>} />
    </div>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const E=["BreadcrumbsDefault","BreadcrumbsCompact","BreadcrumbsWithCurrentDocument","BreadcrumbsTruncated","BreadcrumbsInsidePageHeader"];export{a as BreadcrumbsCompact,e as BreadcrumbsDefault,n as BreadcrumbsInsidePageHeader,t as BreadcrumbsTruncated,s as BreadcrumbsWithCurrentDocument,E as __namedExportsOrder,N as default};
