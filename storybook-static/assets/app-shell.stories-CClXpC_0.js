import{r as v,j as e}from"./vendor-react-QzJwS0Xl.js";import{A as h,C as g,N as x}from"./shells-VwrG7Aho.js";import{W as T}from"./workspace-tabs-nCm-TRUF.js";import{S as l,P as y}from"./icon-chip-CEEhPAY1.js";import{B as r}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const P={title:"Shells/App Shell"},f=[{id:"sales",label:"Sales",description:"Orders, invoices, returns"},{id:"purchase",label:"Purchase",description:"Procurement workflows"},{id:"inventory",label:"Inventory",description:"Stock and transfers"},{id:"finance",label:"Finance",description:"Ledgers and posting"},{id:"hrms",label:"HRMS",description:"People operations"}],s=[{id:"si-1024",title:"Sales Invoice SI-1024",subtitle:"ABC Traders",documentType:"Sales Invoice",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"invoices",label:"Invoices",href:"#"},{id:"si-1024",label:"SI-1024",current:!0}],status:"dirty",closable:!0},{id:"sr-108",title:"Sales Return SR-108",subtitle:"ABC Traders",documentType:"Sales Return",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"returns",label:"Returns",href:"#"},{id:"sr-108",label:"SR-108",current:!0}],status:"clean",closable:!0},{id:"customer-abc",title:"Customer ABC Traders",subtitle:"Customer master",documentType:"Customer",breadcrumbs:[{id:"masters",label:"Masters",href:"#"},{id:"customers",label:"Customers",href:"#"},{id:"abc-traders",label:"ABC Traders",current:!0}],status:"error",closable:!0}],n={render:()=>{const[a,i]=v.useState("si-1024"),t=s.find(b=>b.id===a)??s[0],c=k(t);return e.jsx(h,{density:"compact",navigation:e.jsx(x,{title:"ERP",subtitle:"Modules",items:f}),header:e.jsx(j,{}),className:"min-h-[42rem]",contentClassName:"min-h-[42rem]",children:e.jsx(g,{variant:"workspace",header:e.jsxs(e.Fragment,{children:[e.jsx(T,{tabs:s,activeTabId:a,onTabChange:i,onTabClose:()=>{}}),e.jsx(y,{title:t.title,subtitle:t.subtitle,breadcrumbs:t.breadcrumbs,density:"compact",status:e.jsx(l,{label:t.status??"clean",tone:d(t.status)}),primaryAction:c.primary,secondaryActions:c.secondary,meta:[{label:"Document type",value:t.documentType??"Workspace item"},{label:"Open tabs",value:String(s.length)}]})]}),children:e.jsx("div",{className:"grid min-h-full gap-4 bg-[var(--erp-color-background)] p-4",children:e.jsxs("section",{className:"rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-[var(--erp-color-foreground)]",children:t.title}),e.jsx("p",{className:"mt-1 text-sm text-[var(--erp-color-muted-foreground)]",children:"This content area represents the active document. The workspace tabs above are open work items; the breadcrumb in the PageHeader is only the active item hierarchy."})]}),e.jsx(l,{label:t.status??"clean",tone:d(t.status)})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-3 text-xs",children:[e.jsx(o,{label:"Current item",value:t.documentType??"Document"}),e.jsx(o,{label:"Workspace tab",value:t.title}),e.jsx(o,{label:"Breadcrumb scope",value:"Active item only"})]})]})})})})}},j=()=>e.jsxs("div",{className:"flex h-12 items-center justify-between border-b border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] px-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm font-semibold text-[var(--erp-color-foreground)]",children:"ERP Desktop"}),e.jsx("span",{className:"text-xs text-[var(--erp-color-muted-foreground)]",children:"Dense workspace shell"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{variant:"ghost",density:"compact",width:"hug",children:"Search"}),e.jsx(r,{variant:"secondary",density:"compact",width:"hug",children:"Help"})]})]}),o=({label:a,value:i})=>e.jsxs("div",{className:"rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)] px-3 py-2",children:[e.jsx("p",{className:"text-[0.6875rem] font-medium uppercase text-[var(--erp-color-muted-foreground)]",children:a}),e.jsx("p",{className:"mt-1 truncate text-sm text-[var(--erp-color-foreground)]",children:i})]}),k=a=>a.id==="customer-abc"?{primary:e.jsx(r,{variant:"default",density:"compact",width:"hug",children:"Review"}),secondary:e.jsx(r,{variant:"secondary",density:"compact",width:"hug",children:"Merge Check"})}:a.status==="dirty"?{primary:e.jsx(r,{variant:"default",density:"compact",width:"hug",children:"Save"}),secondary:e.jsx(r,{variant:"secondary",density:"compact",width:"hug",children:"Submit"})}:{primary:e.jsx(r,{variant:"default",density:"compact",width:"hug",children:"Open"}),secondary:e.jsx(r,{variant:"secondary",density:"compact",width:"hug",children:"Export"})},d=a=>a==="error"?"danger":a==="dirty"?"warning":a==="saving"?"info":"muted";var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");
    const activeTab = workspaceTabs.find(tab => tab.id === activeTabId) ?? workspaceTabs[0];
    const actions = actionsForTab(activeTab);
    return <AppFrame density="compact" navigation={<NavigationShell title="ERP" subtitle="Modules" items={navigationItems} />} header={<TopBar />} className="min-h-[42rem]" contentClassName="min-h-[42rem]">
        <ContentRegion variant="workspace" header={<>
              <WorkspaceTabs tabs={workspaceTabs} activeTabId={activeTabId} onTabChange={setActiveTabId} onTabClose={() => undefined} />
              <PageHeader title={activeTab.title} subtitle={activeTab.subtitle} breadcrumbs={activeTab.breadcrumbs} density="compact" status={<StatusBadge label={activeTab.status ?? "clean"} tone={statusTone(activeTab.status)} />} primaryAction={actions.primary} secondaryActions={actions.secondary} meta={[{
          label: "Document type",
          value: activeTab.documentType ?? "Workspace item"
        }, {
          label: "Open tabs",
          value: String(workspaceTabs.length)
        }]} />
            </>}>
          <div className="grid min-h-full gap-4 bg-[var(--erp-color-background)] p-4">
            <section className="rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-surface)] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--erp-color-foreground)]">
                    {activeTab.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--erp-color-muted-foreground)]">
                    This content area represents the active document. The workspace tabs above are
                    open work items; the breadcrumb in the PageHeader is only the active item hierarchy.
                  </p>
                </div>
                <StatusBadge label={activeTab.status ?? "clean"} tone={statusTone(activeTab.status)} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <PlaceholderMetric label="Current item" value={activeTab.documentType ?? "Document"} />
                <PlaceholderMetric label="Workspace tab" value={activeTab.title} />
                <PlaceholderMetric label="Breadcrumb scope" value="Active item only" />
              </div>
            </section>
          </div>
        </ContentRegion>
      </AppFrame>;
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const R=["DesktopAppFrameWithWorkspaceTabsAndBreadcrumbs"];export{n as DesktopAppFrameWithWorkspaceTabsAndBreadcrumbs,R as __namedExportsOrder,P as default};
