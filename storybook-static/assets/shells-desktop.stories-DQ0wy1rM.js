import{j as e}from"./iframe-CewInuWt.js";import{T as M}from"./index-CxIOM7Yn.js";import{f as L,a as j,c as l}from"./demoActions-zitnUCO4.js";import{u as c,a as m,q as _,T as d}from"./select-field-BpVK6OAn.js";import{P as h,S as v}from"./confirm-dialog-BML_ndGp.js";import{c as H}from"./demoValidation-BdoxO43p.js";import"./preload-helper-C1FmrZbK.js";import"./index-BlC6eqR6.js";import"./index-CQrbGu9B.js";const w=({navigation:t,header:r,footer:n,children:i,density:s="comfortable",className:o,contentClassName:a})=>e.jsxs("div",{"data-component":"AppFrame","data-density":s,className:c("min-h-screen bg-[var(--erp-color-background)] text-[var(--erp-color-foreground)]","grid grid-cols-1",t&&"lg:grid-cols-[16rem_minmax(0,1fr)]",o),children:[t&&e.jsx("aside",{className:"hidden min-h-screen border-r border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] lg:block",children:t}),e.jsxs("div",{className:c("flex min-h-screen min-w-0 flex-col",a),children:[r&&e.jsx("header",{className:"shrink-0",children:r}),e.jsx("main",{className:"min-h-0 flex-1",children:i}),n&&e.jsx("footer",{className:"shrink-0",children:n})]})]});w.displayName="AppFrame";const T=({title:t,subtitle:r,items:n=[],activeItemId:i,footer:s,className:o})=>e.jsxs("nav",{"data-component":"NavigationShell","aria-label":t,className:c("flex h-full min-h-screen flex-col bg-[var(--erp-color-surface)]",o),children:[e.jsxs("div",{className:"border-b border-[var(--erp-color-border)] px-4 py-4",children:[e.jsx("p",{className:"text-sm font-semibold leading-tight text-[var(--erp-color-foreground)]",children:t}),r&&e.jsx("p",{className:"mt-1 text-xs text-[var(--erp-color-muted-foreground)]",children:r})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-2 py-3",children:n.map(a=>{const p=a.active??a.id===i;return e.jsxs("button",{type:"button",disabled:a.disabled,onClick:a.onSelect,className:c("mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left","text-sm text-[var(--erp-color-muted-foreground)] transition-colors","hover:bg-[var(--erp-color-surface-muted)] hover:text-[var(--erp-color-foreground)]","disabled:cursor-not-allowed disabled:opacity-[var(--erp-disabled-opacity)]",p&&"bg-[var(--erp-accent-soft)] text-[var(--erp-color-primary)] hover:bg-[var(--erp-accent-soft)] hover:text-[var(--erp-color-primary)]"),children:[a.icon&&e.jsx("span",{className:"shrink-0 text-[var(--erp-subtle)]",children:a.icon}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block truncate font-medium",children:a.label}),a.description&&e.jsx("span",{className:"block truncate text-xs text-[var(--erp-color-muted-foreground)]",children:a.description})]}),typeof a.badge=="string"||typeof a.badge=="number"?e.jsx(m,{variant:p?"info":"muted",children:a.badge}):a.badge]},a.id)})}),s&&e.jsx("div",{className:"border-t border-[var(--erp-color-border)] p-3",children:s})]});T.displayName="NavigationShell";const y=({header:t,children:r,aside:n,footer:i,variant:s="workspace",className:o,bodyClassName:a})=>e.jsxs("section",{"data-component":"ContentRegion","data-variant":s,className:c("flex h-full min-h-0 flex-col",s==="workspace"&&"bg-[var(--erp-color-background)]",s==="panel"&&"bg-[var(--erp-color-surface)]",o),children:[t&&e.jsx("div",{className:"shrink-0",children:t}),e.jsxs("div",{className:c("min-h-0 flex-1",n&&"grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_20rem]",a),children:[e.jsx("div",{className:"min-h-0 overflow-auto",children:r}),n&&e.jsx("aside",{className:"min-h-0 overflow-auto border-t border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] xl:border-l xl:border-t-0",children:n})]}),i&&e.jsx("div",{className:"shrink-0 border-t border-[var(--erp-color-border)] bg-[var(--erp-color-surface)]",children:i})]});y.displayName="ContentRegion";w.__docgenInfo={description:"",methods:[],displayName:"AppFrame",props:{navigation:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},density:{required:!1,tsType:{name:"union",raw:'"compact" | "comfortable" | "touch"',elements:[{name:"literal",value:'"compact"'},{name:"literal",value:'"comfortable"'},{name:"literal",value:'"touch"'}]},description:"",defaultValue:{value:'"comfortable"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"NavigationShell",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},items:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},activeItemId:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"ContentRegion",props:{header:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},aside:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"workspace" | "panel" | "plain"',elements:[{name:"literal",value:'"workspace"'},{name:"literal",value:'"panel"'},{name:"literal",value:'"plain"'}]},description:"",defaultValue:{value:'"workspace"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},bodyClassName:{required:!1,tsType:{name:"string"},description:""}}};const D=({title:t,subtitle:r,navigationTitle:n="Workspace",navigationSubtitle:i,navigationItems:s,activeNavigationItemId:o,status:a,actions:p,meta:g,children:N,rightRail:E,className:O})=>e.jsx(w,{density:"compact",navigation:e.jsx(T,{title:n,subtitle:i,items:s,activeItemId:o}),className:O,children:e.jsx(y,{header:e.jsx(h,{title:t,subtitle:r,status:a,secondaryActions:p,meta:g,density:"compact"}),aside:E,variant:"workspace",children:N})});D.displayName="DesktopWorkspaceShell";const S=({title:t,subtitle:r,status:n,actions:i,meta:s,children:o,sidePanel:a,footer:p,className:g,contentClassName:N})=>e.jsx(y,{className:g,header:e.jsx(h,{title:t,subtitle:r,status:n,secondaryActions:i,meta:s,density:"compact"}),aside:a,footer:p,children:e.jsx("div",{className:c("p-4",N),children:o})});S.displayName="DesktopDensePage";const f=({primary:t,secondary:r,overflow:n,left:i,className:s})=>e.jsxs("div",{"data-component":"DesktopActionBar",className:c("flex min-h-10 items-center justify-between gap-3 border-t border-neutral-200 bg-white px-4 py-2",s),children:[e.jsx("div",{className:"min-w-0 flex-1 text-xs text-neutral-500",children:i}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[n,r&&e.jsx("div",{className:"h-4 w-px bg-neutral-200"}),r,t]})]});f.displayName="DesktopActionBar";const q=({listTitle:t="Queue",list:r,detailTitle:n="Document",detail:i,reviewTitle:s="Review",review:o,actions:a,className:p})=>e.jsxs("div",{"data-component":"DesktopSplitPaneReview",className:c("grid h-full min-h-[34rem] grid-cols-[18rem_minmax(0,1fr)] overflow-hidden rounded-lg border border-neutral-200 bg-white",o&&"xl:grid-cols-[18rem_minmax(0,1fr)_20rem]",p),children:[e.jsxs("section",{className:"min-h-0 border-r border-neutral-200",children:[e.jsx(k,{children:t}),e.jsx("div",{className:"h-[calc(100%-2.5rem)] overflow-auto",children:r})]}),e.jsxs("section",{className:"flex min-h-0 flex-col",children:[e.jsx(k,{children:n}),e.jsx("div",{className:"min-h-0 flex-1 overflow-auto",children:i}),a]}),o&&e.jsxs("section",{className:"hidden min-h-0 border-l border-neutral-200 bg-neutral-50 xl:block",children:[e.jsx(k,{children:s}),e.jsx("div",{className:"h-[calc(100%-2.5rem)] overflow-auto",children:o})]})]});q.displayName="DesktopSplitPaneReview";const k=({children:t})=>e.jsx("div",{className:"flex h-10 items-center border-b border-neutral-200 bg-neutral-50 px-3 text-xs font-semibold uppercase tracking-wide text-neutral-500",children:t});D.__docgenInfo={description:"",methods:[],displayName:"DesktopWorkspaceShell",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},navigationTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Workspace"',computed:!1}},navigationSubtitle:{required:!1,tsType:{name:"string"},description:""},navigationItems:{required:!1,tsType:{name:"unknown"},description:""},activeNavigationItemId:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},meta:{required:!1,tsType:{name:"Array",elements:[{name:"MetaItem"}],raw:"MetaItem[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},rightRail:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"DesktopDensePage",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},meta:{required:!1,tsType:{name:"Array",elements:[{name:"MetaItem"}],raw:"MetaItem[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},sidePanel:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"DesktopActionBar",props:{primary:{required:!1,tsType:{name:"ReactNode"},description:""},secondary:{required:!1,tsType:{name:"ReactNode"},description:""},overflow:{required:!1,tsType:{name:"ReactNode"},description:""},left:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"DesktopSplitPaneReview",props:{listTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Queue"',computed:!1}},list:{required:!0,tsType:{name:"ReactNode"},description:""},detailTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Document"',computed:!1}},detail:{required:!0,tsType:{name:"ReactNode"},description:""},reviewTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Review"',computed:!1}},review:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Shells/Desktop"},u={render:()=>{const t={canView:l("allowed"),canCreate:l("allowed"),canEdit:l("allowed"),canEditHeader:l("allowed"),canEditLines:l("allowed"),canDelete:l("hidden"),canSubmit:l("allowed"),canApprove:l("hidden"),canReject:l("hidden"),canPost:l("blocked","Resolve delivery variance on line 2 before posting."),canCancel:l("allowed"),canAttachDocuments:l("allowed"),canComment:l("allowed"),canScan:l("hidden"),canBulkOperate:l("hidden"),canExport:l("allowed")},n=L([{id:"cancel",label:"Cancel",variant:"ghost",placement:"primary",requiredCapability:"canCancel"},{id:"save",label:"Save",variant:"secondary",placement:"primary",requiredCapability:"canEdit"},{id:"submit",label:"Submit",variant:"primary",placement:"primary",requiredCapability:"canSubmit"},{id:"post",label:"Post",variant:"danger",placement:"secondary",requiredCapability:"canPost",requiresConfirmation:!0},{id:"export",label:"Export",variant:"ghost",placement:"overflow",requiredCapability:"canExport"}],t,"desktop"),i=n.filter(a=>a.placement==="primary"),s=n.filter(a=>a.placement==="secondary"),o=n.filter(a=>a.placement==="overflow");return e.jsx(_,{children:e.jsx("div",{className:"bg-neutral-50 min-h-screen p-4",children:e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm",children:[e.jsx(h,{title:"Sales Delivery",subtitle:"SD-8821 · Main Warehouse → Truck-17",density:"compact",status:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(v,{label:"Submitted",tone:"info"}),e.jsx(m,{variant:"warning",children:"1 variance"})]}),breadcrumbs:[{label:"Sales",href:"#"},{label:"Deliveries",href:"#"},{label:"SD-8821"}],meta:[{label:"Customer",value:"Northwind Retail"},{label:"Lines",value:"3"},{label:"Units",value:"38"},{label:"Dispatch",value:"11 May 2025"}]}),e.jsx(M,{title:"Sales Delivery",documentNumber:"SD-8821",status:"submitted",mode:"edit",density:"compact",header:e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(d,{label:"Customer",defaultValue:"Northwind Retail",density:"compact"}),e.jsx(d,{label:"Warehouse",defaultValue:"Main Warehouse",density:"compact"}),e.jsx(d,{label:"Dispatch Route",defaultValue:"Truck-17",density:"compact"})]}),lines:e.jsxs("table",{className:"w-full text-xs mt-1",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-neutral-200",children:["Item","Description","Ordered","Picked","Delivered","Status"].map(a=>e.jsx("th",{className:"text-left py-1.5 px-2 text-neutral-500 font-medium",children:a},a))})}),e.jsx("tbody",{children:[{item:"FAB-001",desc:"Fabric roll",ord:12,pick:12,del:12,ok:!0},{item:"ACC-220",desc:"Accessory pack",ord:8,pick:6,del:6,ok:!1},{item:"BOX-010",desc:"Shipping box",ord:20,pick:20,del:20,ok:!0}].map(a=>e.jsxs("tr",{className:["border-b border-neutral-100",a.ok?"":"bg-amber-50"].join(" "),children:[e.jsx("td",{className:"py-1.5 px-2 font-mono text-neutral-800",children:a.item}),e.jsx("td",{className:"py-1.5 px-2 text-neutral-700",children:a.desc}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:a.ord}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:a.pick}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:a.del}),e.jsx("td",{className:"py-1.5 px-2",children:e.jsx(m,{variant:a.ok?"success":"warning",children:a.ok?"Ready":"Variance"})})]},a.item))})]}),totals:e.jsxs("div",{className:"flex justify-between items-center text-xs text-neutral-600 pt-1",children:[e.jsx("span",{children:"3 lines · 38 units total"}),e.jsx("div",{className:"flex items-center gap-2 text-neutral-400",children:e.jsx("span",{children:"2 ready · 1 variance"})})]}),validationMessages:[H],actions:e.jsxs(e.Fragment,{children:[o.map(a=>e.jsx(j,{action:a},a.id)),s.length>0&&e.jsx("div",{className:"w-px h-4 bg-neutral-200"}),s.map(a=>e.jsx(j,{action:a},a.id)),i.map(a=>e.jsx(j,{action:a},a.id))]})})]})})})})}},x={render:()=>e.jsx(_,{children:e.jsx(D,{title:"Sales Delivery",subtitle:"SD-8821 · Main Warehouse → Truck-17",navigationTitle:"Operations",navigationSubtitle:"Desktop authoring shell",activeNavigationItemId:"deliveries",navigationItems:[{id:"inbox",label:"Inbox",description:"Review queue",badge:8},{id:"deliveries",label:"Deliveries",description:"Author and review",badge:3},{id:"invoices",label:"Invoices",description:"Posting workbench"}],status:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(v,{label:"Submitted",tone:"info"}),e.jsx(m,{variant:"warning",children:"1 variance"})]}),meta:[{label:"Customer",value:"Northwind Retail"},{label:"Lines",value:"3"},{label:"Units",value:"38"},{label:"Dispatch",value:"11 May 2025"}],actions:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"erp-demo-button",type:"button",children:"Export"}),e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"Save"})]}),rightRail:e.jsxs("div",{className:"p-4 text-xs text-neutral-600",children:[e.jsx("p",{className:"font-semibold text-neutral-800",children:"Review notes"}),e.jsx("p",{className:"mt-2",children:"Line 2 has a picked quantity variance. Resolve before posting."})]}),children:e.jsxs(S,{title:"Authoring workspace",subtitle:"Dense header fields and editable line review stay on desktop.",status:e.jsx(v,{label:"Editing",tone:"warning"}),contentClassName:"p-0",footer:e.jsx(f,{left:"Desktop = authoring and review shell",secondary:e.jsx("button",{className:"erp-demo-button",type:"button",children:"Cancel"}),primary:e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"Submit"})}),children:[e.jsxs("div",{className:"grid grid-cols-3 gap-3 p-4",children:[e.jsx(d,{label:"Customer",defaultValue:"Northwind Retail",density:"compact"}),e.jsx(d,{label:"Warehouse",defaultValue:"Main Warehouse",density:"compact"}),e.jsx(d,{label:"Dispatch Route",defaultValue:"Truck-17",density:"compact"})]}),e.jsxs("table",{className:"w-full text-xs",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-y border-neutral-200 bg-neutral-50",children:["Item","Description","Ordered","Picked","Delivered","Status"].map(t=>e.jsx("th",{className:"px-3 py-2 text-left font-medium text-neutral-500",children:t},t))})}),e.jsx("tbody",{children:[{item:"FAB-001",desc:"Fabric roll",ord:12,pick:12,del:12,ok:!0},{item:"ACC-220",desc:"Accessory pack",ord:8,pick:6,del:6,ok:!1},{item:"BOX-010",desc:"Shipping box",ord:20,pick:20,del:20,ok:!0}].map(t=>e.jsxs("tr",{className:t.ok?"border-b border-neutral-100":"border-b border-neutral-100 bg-amber-50",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-neutral-800",children:t.item}),e.jsx("td",{className:"px-3 py-2 text-neutral-700",children:t.desc}),e.jsx("td",{className:"px-3 py-2 text-right",children:t.ord}),e.jsx("td",{className:"px-3 py-2 text-right",children:t.pick}),e.jsx("td",{className:"px-3 py-2 text-right",children:t.del}),e.jsx("td",{className:"px-3 py-2",children:e.jsx(m,{variant:t.ok?"success":"warning",children:t.ok?"Ready":"Variance"})})]},t.item))})]})]})})})},b={render:()=>e.jsx("div",{className:"bg-neutral-50 min-h-screen p-4",children:e.jsx(q,{list:e.jsx("div",{className:"divide-y divide-neutral-100",children:["PO-2024-0841","SI-1002","SD-8821"].map((t,r)=>e.jsxs("button",{className:"block w-full px-3 py-3 text-left hover:bg-neutral-50",children:[e.jsx("p",{className:"text-sm font-medium text-neutral-900",children:t}),e.jsx("p",{className:"text-xs text-neutral-500",children:r===0?"Pending approval":"Needs review"})]},t))}),detail:e.jsxs("div",{className:"p-4",children:[e.jsx(h,{title:"Purchase Order",subtitle:"PO-2024-0841 · Procurement",density:"compact",status:e.jsx(v,{label:"Pending",tone:"warning"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 p-4",children:[e.jsx(d,{label:"Vendor",defaultValue:"Acme Supplies",density:"compact"}),e.jsx(d,{label:"Amount",defaultValue:"₹1,24,500.00",density:"compact"}),e.jsx(d,{label:"Department",defaultValue:"Procurement",density:"compact"})]})]}),review:e.jsxs("div",{className:"p-4 text-xs text-neutral-600",children:[e.jsx("p",{className:"font-semibold text-neutral-800",children:"Approval context"}),e.jsx("p",{className:"mt-2",children:"Budget confirmed for Q2. Finance review is waiting on final approval."})]}),actions:e.jsx(f,{left:"Dense split-pane review",secondary:e.jsx("button",{className:"erp-demo-button",type:"button",children:"Request Changes"}),primary:e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"Approve"})})})})};var R,C,P;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const caps: BaseCapabilities = {
      canView: cap("allowed"),
      canCreate: cap("allowed"),
      canEdit: cap("allowed"),
      canEditHeader: cap("allowed"),
      canEditLines: cap("allowed"),
      canDelete: cap("hidden"),
      canSubmit: cap("allowed"),
      canApprove: cap("hidden"),
      canReject: cap("hidden"),
      canPost: cap("blocked", "Resolve delivery variance on line 2 before posting."),
      canCancel: cap("allowed"),
      canAttachDocuments: cap("allowed"),
      canComment: cap("allowed"),
      canScan: cap("hidden"),
      canBulkOperate: cap("hidden"),
      canExport: cap("allowed")
    };
    const actions: WorkflowAction[] = [{
      id: "cancel",
      label: "Cancel",
      variant: "ghost",
      placement: "primary",
      requiredCapability: "canCancel"
    }, {
      id: "save",
      label: "Save",
      variant: "secondary",
      placement: "primary",
      requiredCapability: "canEdit"
    }, {
      id: "submit",
      label: "Submit",
      variant: "primary",
      placement: "primary",
      requiredCapability: "canSubmit"
    }, {
      id: "post",
      label: "Post",
      variant: "danger",
      placement: "secondary",
      requiredCapability: "canPost",
      requiresConfirmation: true
    }, {
      id: "export",
      label: "Export",
      variant: "ghost",
      placement: "overflow",
      requiredCapability: "canExport"
    }];
    const resolved = filterActionsByCapabilities(actions, caps, "desktop");
    const primary = resolved.filter(a => a.placement === "primary");
    const secondary = resolved.filter(a => a.placement === "secondary");
    const overflow = resolved.filter(a => a.placement === "overflow");
    return <TooltipProvider>
        <div className="bg-neutral-50 min-h-screen p-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm">
              <PageHeader title="Sales Delivery" subtitle="SD-8821 · Main Warehouse → Truck-17" density="compact" status={<div className="flex items-center gap-1.5">
                    <StatusBadge label="Submitted" tone="info" />
                    <Badge variant="warning">1 variance</Badge>
                  </div>} breadcrumbs={[{
              label: "Sales",
              href: "#"
            }, {
              label: "Deliveries",
              href: "#"
            }, {
              label: "SD-8821"
            }]} meta={[{
              label: "Customer",
              value: "Northwind Retail"
            }, {
              label: "Lines",
              value: "3"
            }, {
              label: "Units",
              value: "38"
            }, {
              label: "Dispatch",
              value: "11 May 2025"
            }]} />

              <TransactionShell title="Sales Delivery" documentNumber="SD-8821" status="submitted" mode="edit" density="compact" header={<div className="grid grid-cols-3 gap-3">
                    <TextField label="Customer" defaultValue="Northwind Retail" density="compact" />
                    <TextField label="Warehouse" defaultValue="Main Warehouse" density="compact" />
                    <TextField label="Dispatch Route" defaultValue="Truck-17" density="compact" />
                  </div>} lines={<table className="w-full text-xs mt-1">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        {["Item", "Description", "Ordered", "Picked", "Delivered", "Status"].map(h => <th key={h} className="text-left py-1.5 px-2 text-neutral-500 font-medium">
                            {h}
                          </th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {[{
                  item: "FAB-001",
                  desc: "Fabric roll",
                  ord: 12,
                  pick: 12,
                  del: 12,
                  ok: true
                }, {
                  item: "ACC-220",
                  desc: "Accessory pack",
                  ord: 8,
                  pick: 6,
                  del: 6,
                  ok: false
                }, {
                  item: "BOX-010",
                  desc: "Shipping box",
                  ord: 20,
                  pick: 20,
                  del: 20,
                  ok: true
                }].map(row => <tr key={row.item} className={["border-b border-neutral-100", !row.ok ? "bg-amber-50" : ""].join(" ")}>
                          <td className="py-1.5 px-2 font-mono text-neutral-800">{row.item}</td>
                          <td className="py-1.5 px-2 text-neutral-700">{row.desc}</td>
                          <td className="py-1.5 px-2 text-right text-neutral-800">{row.ord}</td>
                          <td className="py-1.5 px-2 text-right text-neutral-800">{row.pick}</td>
                          <td className="py-1.5 px-2 text-right text-neutral-800">{row.del}</td>
                          <td className="py-1.5 px-2">
                            <Badge variant={row.ok ? "success" : "warning"}>
                              {row.ok ? "Ready" : "Variance"}
                            </Badge>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>} totals={<div className="flex justify-between items-center text-xs text-neutral-600 pt-1">
                    <span>3 lines · 38 units total</span>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span>2 ready · 1 variance</span>
                    </div>
                  </div>} validationMessages={[validationVariance]} actions={<>
                    {overflow.map(a => <ActionButton key={a.id} action={a} />)}
                    {secondary.length > 0 && <div className="w-px h-4 bg-neutral-200" />}
                    {secondary.map(a => <ActionButton key={a.id} action={a} />)}
                    {primary.map(a => <ActionButton key={a.id} action={a} />)}
                  </>} />
            </div>
          </div>
        </div>
      </TooltipProvider>;
  }
}`,...(P=(C=u.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var A,B,V;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <DesktopWorkspaceShell title="Sales Delivery" subtitle="SD-8821 · Main Warehouse → Truck-17" navigationTitle="Operations" navigationSubtitle="Desktop authoring shell" activeNavigationItemId="deliveries" navigationItems={[{
      id: "inbox",
      label: "Inbox",
      description: "Review queue",
      badge: 8
    }, {
      id: "deliveries",
      label: "Deliveries",
      description: "Author and review",
      badge: 3
    }, {
      id: "invoices",
      label: "Invoices",
      description: "Posting workbench"
    }]} status={<div className="flex items-center gap-1.5">
            <StatusBadge label="Submitted" tone="info" />
            <Badge variant="warning">1 variance</Badge>
          </div>} meta={[{
      label: "Customer",
      value: "Northwind Retail"
    }, {
      label: "Lines",
      value: "3"
    }, {
      label: "Units",
      value: "38"
    }, {
      label: "Dispatch",
      value: "11 May 2025"
    }]} actions={<>
            <button className="erp-demo-button" type="button">Export</button>
            <button className="erp-demo-button" data-variant="primary" type="button">Save</button>
          </>} rightRail={<div className="p-4 text-xs text-neutral-600">
            <p className="font-semibold text-neutral-800">Review notes</p>
            <p className="mt-2">Line 2 has a picked quantity variance. Resolve before posting.</p>
          </div>}>
        <DesktopDensePage title="Authoring workspace" subtitle="Dense header fields and editable line review stay on desktop." status={<StatusBadge label="Editing" tone="warning" />} contentClassName="p-0" footer={<DesktopActionBar left="Desktop = authoring and review shell" secondary={<button className="erp-demo-button" type="button">Cancel</button>} primary={<button className="erp-demo-button" data-variant="primary" type="button">Submit</button>} />}>
          <div className="grid grid-cols-3 gap-3 p-4">
            <TextField label="Customer" defaultValue="Northwind Retail" density="compact" />
            <TextField label="Warehouse" defaultValue="Main Warehouse" density="compact" />
            <TextField label="Dispatch Route" defaultValue="Truck-17" density="compact" />
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-y border-neutral-200 bg-neutral-50">
                {["Item", "Description", "Ordered", "Picked", "Delivered", "Status"].map(h => <th key={h} className="px-3 py-2 text-left font-medium text-neutral-500">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[{
              item: "FAB-001",
              desc: "Fabric roll",
              ord: 12,
              pick: 12,
              del: 12,
              ok: true
            }, {
              item: "ACC-220",
              desc: "Accessory pack",
              ord: 8,
              pick: 6,
              del: 6,
              ok: false
            }, {
              item: "BOX-010",
              desc: "Shipping box",
              ord: 20,
              pick: 20,
              del: 20,
              ok: true
            }].map(row => <tr key={row.item} className={row.ok ? "border-b border-neutral-100" : "border-b border-neutral-100 bg-amber-50"}>
                  <td className="px-3 py-2 font-mono text-neutral-800">{row.item}</td>
                  <td className="px-3 py-2 text-neutral-700">{row.desc}</td>
                  <td className="px-3 py-2 text-right">{row.ord}</td>
                  <td className="px-3 py-2 text-right">{row.pick}</td>
                  <td className="px-3 py-2 text-right">{row.del}</td>
                  <td className="px-3 py-2">
                    <Badge variant={row.ok ? "success" : "warning"}>{row.ok ? "Ready" : "Variance"}</Badge>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </DesktopDensePage>
      </DesktopWorkspaceShell>
    </TooltipProvider>
}`,...(V=(B=x.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var I,F,W;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="bg-neutral-50 min-h-screen p-4">
      <DesktopSplitPaneReview list={<div className="divide-y divide-neutral-100">
            {["PO-2024-0841", "SI-1002", "SD-8821"].map((doc, index) => <button key={doc} className="block w-full px-3 py-3 text-left hover:bg-neutral-50">
                <p className="text-sm font-medium text-neutral-900">{doc}</p>
                <p className="text-xs text-neutral-500">{index === 0 ? "Pending approval" : "Needs review"}</p>
              </button>)}
          </div>} detail={<div className="p-4">
            <PageHeader title="Purchase Order" subtitle="PO-2024-0841 · Procurement" density="compact" status={<StatusBadge label="Pending" tone="warning" />} />
            <div className="grid grid-cols-3 gap-3 p-4">
              <TextField label="Vendor" defaultValue="Acme Supplies" density="compact" />
              <TextField label="Amount" defaultValue="₹1,24,500.00" density="compact" />
              <TextField label="Department" defaultValue="Procurement" density="compact" />
            </div>
          </div>} review={<div className="p-4 text-xs text-neutral-600">
            <p className="font-semibold text-neutral-800">Approval context</p>
            <p className="mt-2">Budget confirmed for Q2. Finance review is waiting on final approval.</p>
          </div>} actions={<DesktopActionBar left="Dense split-pane review" secondary={<button className="erp-demo-button" type="button">Request Changes</button>} primary={<button className="erp-demo-button" data-variant="primary" type="button">Approve</button>} />} />
    </div>
}`,...(W=(F=b.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const ee=["DenseTransactionPage","DesktopWorkspacePattern","DesktopSplitPaneReviewPattern"];export{u as DenseTransactionPage,b as DesktopSplitPaneReviewPattern,x as DesktopWorkspacePattern,ee as __namedExportsOrder,$ as default};
