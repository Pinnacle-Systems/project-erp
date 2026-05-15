import{j as e}from"./vendor-react-QzJwS0Xl.js";import{T as C}from"./index-DLXQGlMO.js";import{f as A,A as p,c as n}from"./demoActions-CkfkQI6c.js";import{q as w,a as d,T as i}from"./select-field-C9wJ5B38.js";import{P as j,S as o}from"./icon-chip-CEEhPAY1.js";import{a as B,D,b as R,c as T}from"./workspace-tabs-nCm-TRUF.js";import{c as V}from"./demoValidation-BdoxO43p.js";import"./index-D2yg1nQ6.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";import"./shells-VwrG7Aho.js";const Q={title:"Shells/Desktop"},s={render:()=>{const t={canView:n("allowed"),canCreate:n("allowed"),canEdit:n("allowed"),canEditHeader:n("allowed"),canEditLines:n("allowed"),canDelete:n("hidden"),canSubmit:n("allowed"),canApprove:n("hidden"),canReject:n("hidden"),canPost:n("blocked","Resolve delivery variance on line 2 before posting."),canCancel:n("allowed"),canAttachDocuments:n("allowed"),canComment:n("allowed"),canScan:n("hidden"),canBulkOperate:n("hidden"),canExport:n("allowed")},c=A([{id:"cancel",label:"Cancel",variant:"ghost",placement:"primary",requiredCapability:"canCancel"},{id:"save",label:"Save",variant:"secondary",placement:"primary",requiredCapability:"canEdit"},{id:"submit",label:"Submit",variant:"primary",placement:"primary",requiredCapability:"canSubmit"},{id:"post",label:"Post",variant:"danger",placement:"secondary",requiredCapability:"canPost",requiresConfirmation:!0},{id:"export",label:"Export",variant:"ghost",placement:"overflow",requiredCapability:"canExport"}],t,"desktop"),S=c.filter(a=>a.placement==="primary"),u=c.filter(a=>a.placement==="secondary"),P=c.filter(a=>a.placement==="overflow");return e.jsx(w,{children:e.jsx("div",{className:"bg-neutral-50 min-h-screen p-4",children:e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm",children:[e.jsx(j,{title:"Sales Delivery",subtitle:"SD-8821 · Main Warehouse → Truck-17",density:"compact",status:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(o,{label:"Submitted",tone:"info"}),e.jsx(d,{variant:"warning",children:"1 variance"})]}),breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"deliveries",label:"Deliveries",href:"#"},{id:"sd-8821",label:"SD-8821",current:!0}],meta:[{label:"Customer",value:"Northwind Retail"},{label:"Lines",value:"3"},{label:"Units",value:"38"},{label:"Dispatch",value:"11 May 2025"}]}),e.jsx(C,{title:"Sales Delivery",documentNumber:"SD-8821",status:"submitted",mode:"edit",density:"compact",header:e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(i,{label:"Customer",defaultValue:"Northwind Retail",density:"compact"}),e.jsx(i,{label:"Warehouse",defaultValue:"Main Warehouse",density:"compact"}),e.jsx(i,{label:"Dispatch Route",defaultValue:"Truck-17",density:"compact"})]}),lines:e.jsxs("table",{className:"w-full text-xs mt-1",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-neutral-200",children:["Item","Description","Ordered","Picked","Delivered","Status"].map(a=>e.jsx("th",{className:"text-left py-1.5 px-2 text-neutral-500 font-medium",children:a},a))})}),e.jsx("tbody",{children:[{item:"FAB-001",desc:"Fabric roll",ord:12,pick:12,del:12,ok:!0},{item:"ACC-220",desc:"Accessory pack",ord:8,pick:6,del:6,ok:!1},{item:"BOX-010",desc:"Shipping box",ord:20,pick:20,del:20,ok:!0}].map(a=>e.jsxs("tr",{className:["border-b border-neutral-100",a.ok?"":"bg-amber-50"].join(" "),children:[e.jsx("td",{className:"py-1.5 px-2 font-mono text-neutral-800",children:a.item}),e.jsx("td",{className:"py-1.5 px-2 text-neutral-700",children:a.desc}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:a.ord}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:a.pick}),e.jsx("td",{className:"py-1.5 px-2 text-right text-neutral-800",children:a.del}),e.jsx("td",{className:"py-1.5 px-2",children:e.jsx(d,{variant:a.ok?"success":"warning",children:a.ok?"Ready":"Variance"})})]},a.item))})]}),totals:e.jsxs("div",{className:"flex justify-between items-center text-xs text-neutral-600 pt-1",children:[e.jsx("span",{children:"3 lines · 38 units total"}),e.jsx("div",{className:"flex items-center gap-2 text-neutral-400",children:e.jsx("span",{children:"2 ready · 1 variance"})})]}),validationMessages:[V],actions:e.jsxs(e.Fragment,{children:[P.map(a=>e.jsx(p,{action:a},a.id)),u.length>0&&e.jsx("div",{className:"w-px h-4 bg-neutral-200"}),u.map(a=>e.jsx(p,{action:a},a.id)),S.map(a=>e.jsx(p,{action:a},a.id))]})})]})})})})}},l={render:()=>e.jsx(w,{children:e.jsx(R,{title:"Sales Delivery",subtitle:"SD-8821 · Main Warehouse → Truck-17",navigationTitle:"Operations",navigationSubtitle:"Desktop authoring shell",activeNavigationItemId:"deliveries",navigationItems:[{id:"inbox",label:"Inbox",description:"Review queue",badge:8},{id:"deliveries",label:"Deliveries",description:"Author and review",badge:3},{id:"invoices",label:"Invoices",description:"Posting workbench"}],status:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(o,{label:"Submitted",tone:"info"}),e.jsx(d,{variant:"warning",children:"1 variance"})]}),meta:[{label:"Customer",value:"Northwind Retail"},{label:"Lines",value:"3"},{label:"Units",value:"38"},{label:"Dispatch",value:"11 May 2025"}],actions:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"erp-demo-button",type:"button",children:"Export"}),e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"Save"})]}),rightRail:e.jsxs("div",{className:"p-4 text-xs text-neutral-600",children:[e.jsx("p",{className:"font-semibold text-neutral-800",children:"Review notes"}),e.jsx("p",{className:"mt-2",children:"Line 2 has a picked quantity variance. Resolve before posting."})]}),children:e.jsxs(T,{title:"Authoring workspace",subtitle:"Dense header fields and editable line review stay on desktop.",status:e.jsx(o,{label:"Editing",tone:"warning"}),contentClassName:"p-0",footer:e.jsx(D,{left:"Desktop = authoring and review shell",secondary:e.jsx("button",{className:"erp-demo-button",type:"button",children:"Cancel"}),primary:e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"Submit"})}),children:[e.jsxs("div",{className:"grid grid-cols-3 gap-3 p-4",children:[e.jsx(i,{label:"Customer",defaultValue:"Northwind Retail",density:"compact"}),e.jsx(i,{label:"Warehouse",defaultValue:"Main Warehouse",density:"compact"}),e.jsx(i,{label:"Dispatch Route",defaultValue:"Truck-17",density:"compact"})]}),e.jsxs("table",{className:"w-full text-xs",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-y border-neutral-200 bg-neutral-50",children:["Item","Description","Ordered","Picked","Delivered","Status"].map(t=>e.jsx("th",{className:"px-3 py-2 text-left font-medium text-neutral-500",children:t},t))})}),e.jsx("tbody",{children:[{item:"FAB-001",desc:"Fabric roll",ord:12,pick:12,del:12,ok:!0},{item:"ACC-220",desc:"Accessory pack",ord:8,pick:6,del:6,ok:!1},{item:"BOX-010",desc:"Shipping box",ord:20,pick:20,del:20,ok:!0}].map(t=>e.jsxs("tr",{className:t.ok?"border-b border-neutral-100":"border-b border-neutral-100 bg-amber-50",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-neutral-800",children:t.item}),e.jsx("td",{className:"px-3 py-2 text-neutral-700",children:t.desc}),e.jsx("td",{className:"px-3 py-2 text-right",children:t.ord}),e.jsx("td",{className:"px-3 py-2 text-right",children:t.pick}),e.jsx("td",{className:"px-3 py-2 text-right",children:t.del}),e.jsx("td",{className:"px-3 py-2",children:e.jsx(d,{variant:t.ok?"success":"warning",children:t.ok?"Ready":"Variance"})})]},t.item))})]})]})})})},r={render:()=>e.jsx("div",{className:"bg-neutral-50 min-h-screen p-4",children:e.jsx(B,{list:e.jsx("div",{className:"divide-y divide-neutral-100",children:["PO-2024-0841","SI-1002","SD-8821"].map((t,m)=>e.jsxs("button",{className:"block w-full px-3 py-3 text-left hover:bg-neutral-50",children:[e.jsx("p",{className:"text-sm font-medium text-neutral-900",children:t}),e.jsx("p",{className:"text-xs text-neutral-500",children:m===0?"Pending approval":"Needs review"})]},t))}),detail:e.jsxs("div",{className:"p-4",children:[e.jsx(j,{title:"Purchase Order",subtitle:"PO-2024-0841 · Procurement",density:"compact",status:e.jsx(o,{label:"Pending",tone:"warning"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 p-4",children:[e.jsx(i,{label:"Vendor",defaultValue:"Acme Supplies",density:"compact"}),e.jsx(i,{label:"Amount",defaultValue:"₹1,24,500.00",density:"compact"}),e.jsx(i,{label:"Department",defaultValue:"Procurement",density:"compact"})]})]}),review:e.jsxs("div",{className:"p-4 text-xs text-neutral-600",children:[e.jsx("p",{className:"font-semibold text-neutral-800",children:"Approval context"}),e.jsx("p",{className:"mt-2",children:"Budget confirmed for Q2. Finance review is waiting on final approval."})]}),actions:e.jsx(D,{left:"Dense split-pane review",secondary:e.jsx("button",{className:"erp-demo-button",type:"button",children:"Request Changes"}),primary:e.jsx("button",{className:"erp-demo-button","data-variant":"primary",type:"button",children:"Approve"})})})})};var b,x,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
              id: "sales",
              label: "Sales",
              href: "#"
            }, {
              id: "deliveries",
              label: "Deliveries",
              href: "#"
            }, {
              id: "sd-8821",
              label: "SD-8821",
              current: true
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
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,y,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var N,f,k;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const _=["DenseTransactionPage","DesktopWorkspacePattern","DesktopSplitPaneReviewPattern"];export{s as DenseTransactionPage,r as DesktopSplitPaneReviewPattern,l as DesktopWorkspacePattern,_ as __namedExportsOrder,Q as default};
