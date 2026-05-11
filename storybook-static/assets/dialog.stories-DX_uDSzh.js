import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as c,b as g,a as n,c as D,d as h,e as u,f as m,g as p,h as C}from"./select-field-r8OOORem.js";import"./iframe-CtfhfrVN.js";import"./preload-helper-C1FmrZbK.js";import"./index-ChXoQ18V.js";const y={title:"Primitives/Dialog"},i={render:()=>e.jsxs(c,{children:[e.jsx(g,{asChild:!0,children:e.jsx(n,{variant:"destructive",children:"Delete document"})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(u,{children:"Delete sales invoice SI-1004?"}),e.jsx(m,{children:"This action cannot be undone. The invoice and all associated line items will be permanently removed."})]}),e.jsxs(p,{children:[e.jsx(C,{asChild:!0,children:e.jsx(n,{variant:"secondary",children:"Cancel"})}),e.jsx(n,{variant:"destructive",children:"Delete"})]})]})]})},o={render:()=>e.jsxs(c,{children:[e.jsx(g,{asChild:!0,children:e.jsx(n,{variant:"secondary",children:"View posting details"})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(u,{children:"Posting summary"}),e.jsx(m,{children:"Invoice SI-1003 was posted to the general ledger on 10 May 2026 by Finance Controller. All journal entries have been confirmed."})]}),e.jsx(p,{children:e.jsx(C,{asChild:!0,children:e.jsx(n,{variant:"default",children:"Close"})})})]})]})};var a,r,t;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete document</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete sales invoice SI-1004?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. The invoice and all associated line
            items will be permanently removed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(t=(r=i.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var l,s,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View posting details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Posting summary</DialogTitle>
          <DialogDescription>
            Invoice SI-1003 was posted to the general ledger on 10 May 2026 by
            Finance Controller. All journal entries have been confirmed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="default">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const B=["ConfirmDialog","InfoDialog"];export{i as ConfirmDialog,o as InfoDialog,B as __namedExportsOrder,y as default};
