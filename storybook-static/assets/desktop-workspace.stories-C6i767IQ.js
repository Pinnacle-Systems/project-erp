import{j as e,r as c}from"./vendor-react-QzJwS0Xl.js";import{M as G,W as h}from"./workspace-tabs-nCm-TRUF.js";import{B as x}from"./select-field-C9wJ5B38.js";import{P as J,S as K}from"./icon-chip-CEEhPAY1.js";import"./shells-VwrG7Aho.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const te={title:"Shells/Desktop Workspace"},o=[{id:"si-1024",title:"Sales Invoice SI-1024",subtitle:"ABC Traders",documentType:"Sales Invoice",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"invoices",label:"Invoices",href:"#"},{id:"si-1024",label:"SI-1024",current:!0}],status:"clean",closable:!0},{id:"sr-108",title:"Sales Return SR-108",subtitle:"ABC Traders",documentType:"Sales Return",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"returns",label:"Returns",href:"#"},{id:"sr-108",label:"SR-108",current:!0}],status:"dirty",closable:!0},{id:"customer-abc",title:"Customer ABC Traders",subtitle:"Customer master",documentType:"Customer",breadcrumbs:[{id:"customers",label:"Customers",href:"#"},{id:"abc-traders",label:"ABC Traders",current:!0}],status:"clean",closable:!0}],Q=[{...o[0],status:"saving"},{...o[1],status:"error"},o[2]],g=[{id:"si-1024",title:"Sales Invoice SI-1024",subtitle:"ABC Traders",documentType:"Sales Invoice",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"invoices",label:"Invoices",href:"#"},{id:"si-1024",label:"SI-1024",current:!0}],status:"dirty",closable:!0},{id:"sr-108",title:"Sales Return SR-108",subtitle:"ABC Traders",documentType:"Sales Return",breadcrumbs:[{id:"sales",label:"Sales",href:"#"},{id:"returns",label:"Returns",href:"#"},{id:"sr-108",label:"SR-108",current:!0}],status:"clean",closable:!0},{id:"customer-abc",title:"Customer ABC Traders",subtitle:"Customer master",documentType:"Customer",breadcrumbs:[{id:"masters",label:"Masters",href:"#"},{id:"customers",label:"Customers",href:"#"},{id:"abc-traders",label:"ABC Traders",current:!0}],status:"error",closable:!0}],u={render:()=>{const[r,t]=c.useState("si-1024");return e.jsx(h,{tabs:o,activeTabId:r,onTabChange:t,onTabClose:()=>{}})}},l={render:()=>{const[r,t]=c.useState("sr-108");return e.jsx(h,{tabs:o,activeTabId:r,onTabChange:t,onTabClose:()=>{}})}},b={render:()=>{const[r,t]=c.useState("si-1024");return e.jsx(h,{tabs:Q,activeTabId:r,onTabChange:t,onTabClose:()=>{}})}},m={render:()=>{const[r,t]=c.useState("si-1024"),a=g.find(n=>n.id===r)??g[0];return e.jsxs("div",{className:"overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)]",children:[e.jsx(h,{tabs:g,activeTabId:r,onTabChange:t,onTabClose:()=>{}}),e.jsxs("div",{className:"bg-[var(--erp-color-surface)]",children:[e.jsx(J,{title:a.title,subtitle:a.subtitle,breadcrumbs:a.breadcrumbs,density:"compact",status:e.jsx(K,{label:a.status??"clean",tone:U(a.status)}),primaryAction:e.jsx(x,{variant:"default",density:"compact",width:"hug",children:"Save"})}),e.jsx("div",{className:"grid gap-3 p-4 text-sm text-[var(--erp-color-muted-foreground)]",children:e.jsxs("div",{className:"rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)] p-4",children:[e.jsx("p",{className:"font-medium text-[var(--erp-color-foreground)]",children:a.title}),e.jsxs("p",{className:"mt-1",children:["Active document content for ",a.documentType,". Switching workspace tabs updates this header and breadcrumb trail to the active item only."]})]})})]})]})}},p={render:()=>e.jsx(L,{})},v={render:()=>e.jsx(L,{toolbar:e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:"text-xs text-[var(--erp-color-muted-foreground)]",children:"Desktop workspace switching"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{variant:"secondary",density:"compact",width:"hug",children:"Refresh"}),e.jsx(x,{variant:"default",density:"compact",width:"hug",children:"Save"})]})]})})},T={render:()=>e.jsx(G,{tabs:[],activeTabId:"",onTabChange:()=>{},emptyState:e.jsx("div",{className:"flex min-h-64 items-center justify-center text-sm text-[var(--erp-color-muted-foreground)]",children:"No open workspace items"}),children:e.jsx("div",{})})},L=({toolbar:r})=>{const[t,a]=c.useState(o),[n,S]=c.useState("si-1024"),s=t.find(i=>i.id===n)??t[0];return e.jsx("div",{className:"h-[28rem] overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)]",children:e.jsx(G,{tabs:t,activeTabId:n,onTabChange:S,onTabClose:i=>{if(a(d=>d.filter(f=>f.id!==i)),n===i){const d=t.find(f=>f.id!==i);d&&S(d.id)}},toolbar:r,emptyState:e.jsx("div",{className:"flex min-h-64 items-center justify-center text-sm text-[var(--erp-color-muted-foreground)]",children:"No open workspace items"}),children:s&&e.jsxs("div",{className:"min-h-full bg-[var(--erp-color-surface)]",children:[e.jsx(J,{title:s.title,subtitle:s.subtitle,breadcrumbs:s.breadcrumbs,density:"compact",status:e.jsx(K,{label:s.status??"clean",tone:"muted"})}),e.jsxs("div",{className:"p-4 text-sm text-[var(--erp-color-muted-foreground)]",children:["Active workspace content for ",s.title,"."]})]})})})},U=r=>r==="error"?"danger":r==="dirty"?"warning":r==="saving"?"info":"muted";var k,I,y;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");
    return <WorkspaceTabs tabs={baseTabs} activeTabId={activeTabId} onTabChange={setActiveTabId} onTabClose={() => undefined} />;
  }
}`,...(y=(I=u.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var j,C,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [activeTabId, setActiveTabId] = useState("sr-108");
    return <WorkspaceTabs tabs={baseTabs} activeTabId={activeTabId} onTabChange={setActiveTabId} onTabClose={() => undefined} />;
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var W,N,w;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");
    return <WorkspaceTabs tabs={savingAndErrorTabs} activeTabId={activeTabId} onTabChange={setActiveTabId} onTabClose={() => undefined} />;
  }
}`,...(w=(N=b.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var B,D,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [activeTabId, setActiveTabId] = useState("si-1024");
    const activeTab = activeBreadcrumbTabs.find(tab => tab.id === activeTabId) ?? activeBreadcrumbTabs[0];
    return <div className="overflow-hidden rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)]">
        <WorkspaceTabs tabs={activeBreadcrumbTabs} activeTabId={activeTabId} onTabChange={setActiveTabId} onTabClose={() => undefined} />
        <div className="bg-[var(--erp-color-surface)]">
          <PageHeader title={activeTab.title} subtitle={activeTab.subtitle} breadcrumbs={activeTab.breadcrumbs} density="compact" status={<StatusBadge label={activeTab.status ?? "clean"} tone={statusTone(activeTab.status)} />} primaryAction={<Button variant="default" density="compact" width="hug">
                Save
              </Button>} />
          <div className="grid gap-3 p-4 text-sm text-[var(--erp-color-muted-foreground)]">
            <div className="rounded-md border border-[var(--erp-color-border)] bg-[var(--erp-color-background)] p-4">
              <p className="font-medium text-[var(--erp-color-foreground)]">{activeTab.title}</p>
              <p className="mt-1">
                Active document content for {activeTab.documentType}. Switching workspace tabs updates this
                header and breadcrumb trail to the active item only.
              </p>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,E,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <WorkspaceDemo />
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var H,_,O;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <WorkspaceDemo toolbar={<div className="flex items-center justify-between gap-3">
          <span className="text-xs text-[var(--erp-color-muted-foreground)]">
            Desktop workspace switching
          </span>
          <div className="flex items-center gap-2">
            <Button variant="secondary" density="compact" width="hug">
              Refresh
            </Button>
            <Button variant="default" density="compact" width="hug">
              Save
            </Button>
          </div>
        </div>} />
}`,...(O=(_=v.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,z,F;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <MultiDocumentWorkspace tabs={[]} activeTabId="" onTabChange={() => undefined} emptyState={<div className="flex min-h-64 items-center justify-center text-sm text-[var(--erp-color-muted-foreground)]">
          No open workspace items
        </div>}>
      <div />
    </MultiDocumentWorkspace>
}`,...(F=(z=T.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const ae=["WorkspaceTabsDefault","WorkspaceTabsDirtyState","WorkspaceTabsSavingAndError","WorkspaceTabsWithActiveBreadcrumb","MultiDocumentWorkspaceDefault","MultiDocumentWorkspaceWithToolbar","MultiDocumentWorkspaceEmpty"];export{p as MultiDocumentWorkspaceDefault,T as MultiDocumentWorkspaceEmpty,v as MultiDocumentWorkspaceWithToolbar,u as WorkspaceTabsDefault,l as WorkspaceTabsDirtyState,b as WorkspaceTabsSavingAndError,m as WorkspaceTabsWithActiveBreadcrumb,ae as __namedExportsOrder,te as default};
