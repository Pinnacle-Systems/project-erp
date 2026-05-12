import{r as a,j as n}from"./iframe-CewInuWt.js";import{C as i}from"./confirm-dialog-BML_ndGp.js";import{B as f}from"./select-field-BpVK6OAn.js";import"./preload-helper-C1FmrZbK.js";import"./index-CQrbGu9B.js";const D={title:"Application/ConfirmDialog",component:i},t={args:{open:!1,onOpenChange:()=>{},title:"Submit for approval?",onConfirm:()=>{}},render:()=>{const[o,e]=a.useState(!1);return n.jsxs("div",{className:"p-4",children:[n.jsx(f,{variant:"secondary",onClick:()=>e(!0),children:"Submit for approval"}),n.jsx(i,{open:o,onOpenChange:e,title:"Submit for approval?",description:"Once submitted, this document will be sent for managerial review. You will not be able to edit it until the review is complete.",confirmLabel:"Submit",cancelLabel:"Cancel",onConfirm:()=>e(!1)})]})}},r={args:{open:!1,onOpenChange:()=>{},title:"Delete ledger entry?",onConfirm:()=>{},destructive:!0},render:()=>{const[o,e]=a.useState(!1),[g,s]=a.useState(!1),v=()=>{s(!0),setTimeout(()=>{s(!1),e(!1)},1500)};return n.jsxs("div",{className:"p-4",children:[n.jsx(f,{variant:"destructive",onClick:()=>e(!0),children:"Delete entry"}),n.jsx(i,{open:o,onOpenChange:e,title:"Delete ledger entry?",description:"This action cannot be undone. The entry will be permanently removed from the system and will not appear in any future reports.",confirmLabel:"Delete",cancelLabel:"Keep",destructive:!0,loading:g,onConfirm:v})]})}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    title: "Submit for approval?",
    onConfirm: () => {}
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-4">
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Submit for approval
        </Button>
        <ConfirmDialog open={open} onOpenChange={setOpen} title="Submit for approval?" description="Once submitted, this document will be sent for managerial review. You will not be able to edit it until the review is complete." confirmLabel="Submit" cancelLabel="Cancel" onConfirm={() => setOpen(false)} />
      </div>;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    title: "Delete ledger entry?",
    onConfirm: () => {},
    destructive: true
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 1500);
    };
    return <div className="p-4">
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete entry
        </Button>
        <ConfirmDialog open={open} onOpenChange={setOpen} title="Delete ledger entry?" description="This action cannot be undone. The entry will be permanently removed from the system and will not appear in any future reports." confirmLabel="Delete" cancelLabel="Keep" destructive loading={loading} onConfirm={handleConfirm} />
      </div>;
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const S=["Default","Destructive"];export{t as Default,r as Destructive,S as __namedExportsOrder,D as default};
