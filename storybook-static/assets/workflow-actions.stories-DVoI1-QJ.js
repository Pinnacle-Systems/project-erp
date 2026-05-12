import{j as e,r as g}from"./iframe-CewInuWt.js";import{f as b,a as o,v as V,c as a}from"./demoActions-zitnUCO4.js";import{q as v,a as h,B as M}from"./select-field-BpVK6OAn.js";import{S as f,C as I}from"./confirm-dialog-BML_ndGp.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const Q={title:"Patterns/Workflow Actions"},l={canView:a("allowed"),canCreate:a("allowed"),canEdit:a("allowed"),canEditHeader:a("allowed"),canEditLines:a("allowed"),canDelete:a("blocked","Delete requires supervisor approval."),canSubmit:a("allowed"),canApprove:a("disabled","Not in approval state."),canReject:a("disabled","Not in approval state."),canPost:a("blocked","Posting is blocked until all validation errors are resolved."),canCancel:a("allowed"),canAttachDocuments:a("allowed"),canComment:a("allowed"),canScan:a("hidden"),canBulkOperate:a("hidden"),canExport:a("allowed")},W=[{id:"save",label:"Save",variant:"primary",placement:"primary",requiredCapability:"canEdit"},{id:"submit",label:"Submit",variant:"secondary",placement:"primary",requiredCapability:"canSubmit"},{id:"post",label:"Post",variant:"danger",placement:"secondary",requiredCapability:"canPost",requiresConfirmation:!0},{id:"delete",label:"Delete",variant:"danger",placement:"overflow",requiredCapability:"canDelete"},{id:"export",label:"Export",variant:"ghost",placement:"overflow",requiredCapability:"canExport"}],d={render:()=>{const r=b(W,l,"desktop"),t=r.filter(s=>s.placement==="primary"),n=r.filter(s=>s.placement==="secondary"),i=r.filter(s=>s.placement==="overflow");return e.jsx(v,{children:e.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden",children:[e.jsxs("div",{className:"px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-neutral-800",children:"Sales Invoice SI-1001"}),e.jsx(f,{label:"Submitted",tone:"info"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[i.map(s=>e.jsx(o,{action:s},s.id)),e.jsx("div",{className:"w-px h-4 bg-neutral-200"}),n.map(s=>e.jsx(o,{action:s},s.id)),t.map(s=>e.jsx(o,{action:s},s.id))]})]}),e.jsx("div",{className:"px-4 py-10 text-center text-xs text-neutral-400",children:"Document body area"})]})})}},c={render:()=>{const r=[{id:"approve",label:"Approve",variant:"primary",placement:"primary",requiredCapability:"canApprove"},{id:"reject",label:"Reject",variant:"danger",placement:"primary",requiredCapability:"canReject"},{id:"comment",label:"Comment",variant:"ghost",placement:"primary",requiredCapability:"canComment"}],t={...l,canApprove:a("allowed"),canReject:a("allowed"),canComment:a("allowed")},n=b(r,t,"mobile");return e.jsxs("div",{className:"max-w-sm mx-auto bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 relative",style:{minHeight:360},children:[e.jsxs("div",{className:"px-4 py-3 border-b border-neutral-200 bg-white flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-neutral-800",children:"Purchase Order PO-0841"}),e.jsx(f,{label:"Pending",tone:"warning"})]}),e.jsx("div",{className:"px-4 py-4 text-xs text-neutral-400",children:"Document summary"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-white border-t border-neutral-200",children:n.map(i=>e.jsx(M,{variant:V[i.variant]??"secondary",density:"touch",disabled:i.disabled,className:"flex-1",children:i.label},i.id))})]})}},p={render:()=>{const r=b(W,l,"desktop");return e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2",children:"Hover over disabled buttons to see reason"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(t=>e.jsx(o,{action:t},t.id))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2",children:"Resolved states"}),e.jsxs("table",{className:"w-full text-xs border border-neutral-200 rounded-md overflow-hidden",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-neutral-50 border-b border-neutral-200",children:[e.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500",children:"Action"}),e.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500",children:"State"}),e.jsx("th",{className:"text-left px-3 py-2 font-medium text-neutral-500",children:"Reason"})]})}),e.jsx("tbody",{children:r.map(t=>{var n;return e.jsxs("tr",{className:"border-b border-neutral-50",children:[e.jsx("td",{className:"px-3 py-2 text-neutral-700",children:t.label}),e.jsx("td",{className:"px-3 py-2",children:e.jsx(h,{variant:t.disabled?"danger":"success",children:t.disabled?"disabled":"allowed"})}),e.jsx("td",{className:"px-3 py-2 text-neutral-500",children:((n=t.reason)==null?void 0:n.message)??"—"})]},t.id)})})]})]})]})})}},m={args:{open:!1},render:()=>{const[r,t]=g.useState(!1),[n,i]=g.useState(!1);return e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("p",{className:"text-xs text-neutral-500",children:['High-risk actions (riskLevel: "high",'," ","requiresConfirmation: true) show a confirmation dialog before executing."]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{variant:"destructive",density:"compact",onClick:()=>t(!0),children:"Post Document"}),e.jsx(h,{variant:"warning",children:"high-risk"})]}),e.jsx(I,{open:r,onOpenChange:t,title:"Post this document?",description:"Posting is irreversible. The document will be committed to the general ledger and locked for editing.",confirmLabel:"Post",cancelLabel:"Cancel",destructive:!0,loading:n,onConfirm:()=>{i(!0),setTimeout(()=>{i(!1),t(!1)},1500)}})]})})}},x={render:()=>{var n;const t=b([{id:"post",label:"Post",variant:"danger",placement:"primary",requiredCapability:"canPost",requiresConfirmation:!0}],l,"desktop");return e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-xs text-neutral-500",children:"The Post action is blocked by the capability system — validation must be resolved first."}),e.jsxs("div",{className:"flex items-center gap-2",children:[t.map(i=>e.jsx(o,{action:i},i.id)),e.jsx(h,{variant:"danger",children:"blocked"})]}),e.jsx("div",{className:"rounded-md bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700",children:(n=l.canPost.reason)==null?void 0:n.message})]})})}},u={render:()=>{const r=[{action:"View",decision:"allowed"},{action:"Edit",decision:"allowed"},{action:"Submit",decision:"allowed"},{action:"Approve",decision:"disabled",reason:"Not in approval state."},{action:"Post",decision:"blocked",reason:"Validation must be resolved."},{action:"Delete",decision:"blocked",reason:"Requires supervisor approval."},{action:"Scan (mobile)",decision:"blocked",reason:"Desktop only."},{action:"Bulk operate",decision:"hidden"}],t={allowed:"success",disabled:"warning",blocked:"danger",hidden:"muted"};return e.jsx("div",{className:"max-w-xl",children:e.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 overflow-hidden",children:[e.jsx("div",{className:"px-4 py-2.5 border-b border-neutral-200 bg-neutral-50",children:e.jsx("span",{className:"text-xs font-semibold text-neutral-600 uppercase tracking-wide",children:"Capability decisions"})}),e.jsxs("table",{className:"w-full text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-neutral-100",children:[e.jsx("th",{className:"text-left px-4 py-2 text-neutral-500 font-medium",children:"Action"}),e.jsx("th",{className:"text-left px-4 py-2 text-neutral-500 font-medium",children:"Decision"}),e.jsx("th",{className:"text-left px-4 py-2 text-neutral-500 font-medium",children:"Reason"})]})}),e.jsx("tbody",{children:r.map(n=>e.jsxs("tr",{className:"border-b border-neutral-50",children:[e.jsx("td",{className:"px-4 py-2.5 text-neutral-700",children:n.action}),e.jsx("td",{className:"px-4 py-2.5",children:e.jsx(f,{label:n.decision,tone:t[n.decision]})}),e.jsx("td",{className:"px-4 py-2.5 text-neutral-400",children:n.reason??"—"})]},n.action))})]})]})})}};var y,N,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const resolved = filterActionsByCapabilities(stdActions, stdCaps, "desktop");
    const primary = resolved.filter(a => a.placement === "primary");
    const secondary = resolved.filter(a => a.placement === "secondary");
    const overflow = resolved.filter(a => a.placement === "overflow");
    return <TooltipProvider>
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-neutral-800">
                Sales Invoice SI-1001
              </span>
              <StatusBadge label="Submitted" tone="info" />
            </div>
            <div className="flex items-center gap-2">
              {overflow.map(a => <ActionButton key={a.id} action={a} />)}
              <div className="w-px h-4 bg-neutral-200" />
              {secondary.map(a => <ActionButton key={a.id} action={a} />)}
              {primary.map(a => <ActionButton key={a.id} action={a} />)}
            </div>
          </div>
          <div className="px-4 py-10 text-center text-xs text-neutral-400">
            Document body area
          </div>
        </div>
      </TooltipProvider>;
  }
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,C,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const mobileActions: WorkflowAction[] = [{
      id: "approve",
      label: "Approve",
      variant: "primary",
      placement: "primary",
      requiredCapability: "canApprove"
    }, {
      id: "reject",
      label: "Reject",
      variant: "danger",
      placement: "primary",
      requiredCapability: "canReject"
    }, {
      id: "comment",
      label: "Comment",
      variant: "ghost",
      placement: "primary",
      requiredCapability: "canComment"
    }];
    const mobileCaps: BaseCapabilities = {
      ...stdCaps,
      canApprove: cap("allowed"),
      canReject: cap("allowed"),
      canComment: cap("allowed")
    };
    const resolved = filterActionsByCapabilities(mobileActions, mobileCaps, "mobile");
    return <div className="max-w-sm mx-auto bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 relative" style={{
      minHeight: 360
    }}>
        <div className="px-4 py-3 border-b border-neutral-200 bg-white flex items-center gap-2">
          <span className="text-sm font-semibold text-neutral-800">
            Purchase Order PO-0841
          </span>
          <StatusBadge label="Pending" tone="warning" />
        </div>
        <div className="px-4 py-4 text-xs text-neutral-400">
          Document summary
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-white border-t border-neutral-200">
          {resolved.map(a => <Button key={a.id} variant={variantMap[a.variant] ?? "secondary"} density="touch" disabled={a.disabled} className="flex-1">
              {a.label}
            </Button>)}
        </div>
      </div>;
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,B,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const resolved = filterActionsByCapabilities(stdActions, stdCaps, "desktop");
    return <TooltipProvider>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Hover over disabled buttons to see reason
            </p>
            <div className="flex flex-wrap gap-2">
              {resolved.map(a => <ActionButton key={a.id} action={a} />)}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Resolved states
            </p>
            <table className="w-full text-xs border border-neutral-200 rounded-md overflow-hidden">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left px-3 py-2 font-medium text-neutral-500">Action</th>
                  <th className="text-left px-3 py-2 font-medium text-neutral-500">State</th>
                  <th className="text-left px-3 py-2 font-medium text-neutral-500">Reason</th>
                </tr>
              </thead>
              <tbody>
                {resolved.map(a => <tr key={a.id} className="border-b border-neutral-50">
                    <td className="px-3 py-2 text-neutral-700">{a.label}</td>
                    <td className="px-3 py-2">
                      <Badge variant={a.disabled ? "danger" : "success"}>
                        {a.disabled ? "disabled" : "allowed"}
                      </Badge>
                    </td>
                    <td className="px-3 py-2 text-neutral-500">
                      {a.reason?.message ?? "—"}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </TooltipProvider>;
  }
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var S,q,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: false
  } as never,
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    return <TooltipProvider>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-500">
            High-risk actions (riskLevel: &quot;high&quot;,{" "}
            requiresConfirmation: true) show a confirmation dialog before
            executing.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="destructive" density="compact" onClick={() => setOpen(true)}>
              Post Document
            </Button>
            <Badge variant="warning">high-risk</Badge>
          </div>
          <ConfirmDialog open={open} onOpenChange={setOpen} title="Post this document?" description="Posting is irreversible. The document will be committed to the general ledger and locked for editing." confirmLabel="Post" cancelLabel="Cancel" destructive loading={loading} onConfirm={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setOpen(false);
          }, 1500);
        }} />
        </div>
      </TooltipProvider>;
  }
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var R,T,O;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const postAction: WorkflowAction[] = [{
      id: "post",
      label: "Post",
      variant: "danger",
      placement: "primary",
      requiredCapability: "canPost",
      requiresConfirmation: true
    }];
    const resolved = filterActionsByCapabilities(postAction, stdCaps, "desktop");
    return <TooltipProvider>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-500">
            The Post action is blocked by the capability system — validation
            must be resolved first.
          </p>
          <div className="flex items-center gap-2">
            {resolved.map(a => <ActionButton key={a.id} action={a} />)}
            <Badge variant="danger">blocked</Badge>
          </div>
          <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
            {stdCaps.canPost.reason?.message}
          </div>
        </div>
      </TooltipProvider>;
  }
}`,...(O=(T=x.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,L,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const rows: {
      action: string;
      decision: WorkflowActionCapability["decision"];
      reason?: string;
    }[] = [{
      action: "View",
      decision: "allowed"
    }, {
      action: "Edit",
      decision: "allowed"
    }, {
      action: "Submit",
      decision: "allowed"
    }, {
      action: "Approve",
      decision: "disabled",
      reason: "Not in approval state."
    }, {
      action: "Post",
      decision: "blocked",
      reason: "Validation must be resolved."
    }, {
      action: "Delete",
      decision: "blocked",
      reason: "Requires supervisor approval."
    }, {
      action: "Scan (mobile)",
      decision: "blocked",
      reason: "Desktop only."
    }, {
      action: "Bulk operate",
      decision: "hidden"
    }];
    const toneMap: Record<WorkflowActionCapability["decision"], "success" | "warning" | "danger" | "muted"> = {
      allowed: "success",
      disabled: "warning",
      blocked: "danger",
      hidden: "muted"
    };
    return <div className="max-w-xl">
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-neutral-200 bg-neutral-50">
            <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">
              Capability decisions
            </span>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="text-left px-4 py-2 text-neutral-500 font-medium">Action</th>
                <th className="text-left px-4 py-2 text-neutral-500 font-medium">Decision</th>
                <th className="text-left px-4 py-2 text-neutral-500 font-medium">Reason</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => <tr key={row.action} className="border-b border-neutral-50">
                  <td className="px-4 py-2.5 text-neutral-700">{row.action}</td>
                  <td className="px-4 py-2.5">
                    <StatusBadge label={row.decision} tone={toneMap[row.decision]} />
                  </td>
                  <td className="px-4 py-2.5 text-neutral-400">
                    {row.reason ?? "—"}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>;
  }
}`,...(H=(L=u.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const U=["DesktopActionBar","MobileBottomBar","DisabledWithReason","HighRiskConfirmation","PostBlockedByCapability","CapabilityStates"];export{u as CapabilityStates,d as DesktopActionBar,p as DisabledWithReason,m as HighRiskConfirmation,c as MobileBottomBar,x as PostBlockedByCapability,U as __namedExportsOrder,Q as default};
