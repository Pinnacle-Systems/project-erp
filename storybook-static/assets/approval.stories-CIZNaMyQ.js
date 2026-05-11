import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./iframe-CtfhfrVN.js";import"./preload-helper-C1FmrZbK.js";const f=e=>a.createElement("p",{"data-slot":"approval-status","data-status":e},e),q=e=>a.createElement("li",{key:e.id,"data-step-id":e.id,"data-status":e.status},a.createElement("span",null,e.label),e.actor?a.createElement("small",{"data-slot":"approval-step-actor"},e.actor.displayName):null),h=e=>a.createElement("li",{key:e.id,"data-comment-id":e.id,"data-decision":e.decision},a.createElement("strong",null,e.actor.displayName),a.createElement("p",null,e.message)),g=({status:e,steps:y,comments:s=[],allowedActions:i=[],onDecision:l,attachments:d,summary:o,readonly:p=!1,shell:b,renderAction:u})=>a.createElement("section",{"data-component":"ApprovalPanel","data-status":e,"data-shell":b,"data-readonly":String(p)},o?a.createElement("div",{"data-slot":"approval-summary"},o):null,f(e),a.createElement("ol",{"data-slot":"approval-steps"},y.map(q)),s.length>0?a.createElement("ul",{"data-slot":"approval-comments"},s.map(h)):null,d?a.createElement("div",{"data-slot":"approval-attachments"},d):null,p||i.length===0?null:a.createElement("div",{"data-slot":"approval-actions"},i.map(n=>a.createElement("span",{key:n.id,"data-action-wrapper":n.id},u?u(n):a.createElement("button",{type:"button",disabled:n.disabled,title:n.reason,"data-action-id":n.id,"data-decision":n.decision,onClick:()=>{n.disabled||l==null||l(n)}},n.label)))));g.__docgenInfo={description:"",methods:[],displayName:"ApprovalPanel",props:{status:{required:!0,tsType:{name:"union",raw:`| "not_started"
| "pending"
| "approved"
| "rejected"
| "changes_requested"
| "cancelled"`,elements:[{name:"literal",value:'"not_started"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"approved"'},{name:"literal",value:'"rejected"'},{name:"literal",value:'"changes_requested"'},{name:"literal",value:'"cancelled"'}]},description:""},steps:{required:!0,tsType:{name:"unknown"},description:""},comments:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},allowedActions:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},onDecision:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: ApprovalAction) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  decision: ApprovalDecision;
  label: string;
  disabled?: boolean;
  reason?: string;
  requiresComment?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"decision",value:{name:"union",raw:'"approve" | "reject" | "request_changes"',elements:[{name:"literal",value:'"approve"'},{name:"literal",value:'"reject"'},{name:"literal",value:'"request_changes"'}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"reason",value:{name:"string",required:!1}},{key:"requiresComment",value:{name:"boolean",required:!1}}]}},name:"action"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},attachments:{required:!1,tsType:{name:"ReactNode"},description:""},summary:{required:!1,tsType:{name:"ReactNode"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shell:{required:!0,tsType:{name:"ShellType"},description:""},renderAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: ApprovalAction) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  decision: ApprovalDecision;
  label: string;
  disabled?: boolean;
  reason?: string;
  requiresComment?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"decision",value:{name:"union",raw:'"approve" | "reject" | "request_changes"',elements:[{name:"literal",value:'"approve"'},{name:"literal",value:'"reject"'},{name:"literal",value:'"request_changes"'}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"reason",value:{name:"string",required:!1}},{key:"requiresComment",value:{name:"boolean",required:!1}}]}},name:"action"}],return:{name:"ReactNode"}}},description:""}}};const A={title:"Patterns/Approval"},r={render:()=>t.jsx("div",{style:{maxWidth:420},children:t.jsx(g,{status:"pending",shell:"mobile",summary:t.jsxs("div",{className:"erp-demo-panel",children:[t.jsx("strong",{children:"SI-1001"}),t.jsx("p",{children:"Northwind Retail - 1,520.00"})]}),attachments:t.jsx("div",{className:"erp-demo-panel",children:"Receipt.pdf, PO.pdf"}),steps:[{id:"manager",label:"Manager review",status:"approved",actor:{id:"u1",displayName:"M. Rao"}},{id:"finance",label:"Finance review",status:"pending",actor:{id:"u2",displayName:"F. Chen"}}],comments:[{id:"c1",actor:{id:"u3",displayName:"Requester"},message:"Please approve for dispatch.",createdAt:"2026-05-11T00:00:00.000Z"}],allowedActions:[{id:"approve",decision:"approve",label:"Approve"},{id:"reject",decision:"reject",label:"Reject",requiresComment:!0},{id:"post",decision:"approve",label:"Post",disabled:!0,reason:"Posting is desktop-only."}]})})};var m,c,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 420
  }}>
      <ApprovalPanel status="pending" shell="mobile" summary={<div className="erp-demo-panel"><strong>SI-1001</strong><p>Northwind Retail - 1,520.00</p></div>} attachments={<div className="erp-demo-panel">Receipt.pdf, PO.pdf</div>} steps={[{
      id: "manager",
      label: "Manager review",
      status: "approved",
      actor: {
        id: "u1",
        displayName: "M. Rao"
      }
    }, {
      id: "finance",
      label: "Finance review",
      status: "pending",
      actor: {
        id: "u2",
        displayName: "F. Chen"
      }
    }]} comments={[{
      id: "c1",
      actor: {
        id: "u3",
        displayName: "Requester"
      },
      message: "Please approve for dispatch.",
      createdAt: "2026-05-11T00:00:00.000Z"
    }]} allowedActions={[{
      id: "approve",
      decision: "approve",
      label: "Approve"
    }, {
      id: "reject",
      decision: "reject",
      label: "Reject",
      requiresComment: true
    }, {
      id: "post",
      decision: "approve",
      label: "Post",
      disabled: true,
      reason: "Posting is desktop-only."
    }]} />
    </div>
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const N=["MobileApprovalCard"];export{r as MobileApprovalCard,N as __namedExportsOrder,A as default};
