import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{i as w,j as D,a as m,k as M,l as d,m as s,n as e,o as t}from"./select-field-r8OOORem.js";import"./iframe-CtfhfrVN.js";import"./preload-helper-C1FmrZbK.js";import"./index-ChXoQ18V.js";const v={title:"Primitives/DropdownMenu"},o={render:()=>n.jsxs(w,{children:[n.jsx(D,{asChild:!0,children:n.jsx(m,{variant:"secondary",children:"Actions ▾"})}),n.jsxs(M,{children:[n.jsx(d,{children:"Document"}),n.jsxs(s,{children:[n.jsx(e,{children:"Edit"}),n.jsx(e,{children:"Duplicate"}),n.jsx(e,{children:"Print preview"})]}),n.jsx(t,{}),n.jsx(d,{children:"Workflow"}),n.jsxs(s,{children:[n.jsx(e,{children:"Submit for approval"}),n.jsx(e,{disabled:!0,children:"Post to ledger"})]}),n.jsx(t,{}),n.jsx(e,{destructive:!0,children:"Delete"})]})]})},r={render:()=>n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm text-neutral-700 font-medium",children:"SI-1004"}),n.jsxs(w,{children:[n.jsx(D,{asChild:!0,children:n.jsx(m,{variant:"ghost",density:"compact","aria-label":"More actions",children:"···"})}),n.jsxs(M,{align:"end",children:[n.jsx(e,{children:"View"}),n.jsx(e,{children:"Download PDF"}),n.jsx(t,{}),n.jsx(e,{destructive:!0,children:"Cancel invoice"})]})]})]})};var a,i,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Actions ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Document</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Print preview</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Workflow</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Submit for approval</DropdownMenuItem>
          <DropdownMenuItem disabled>Post to ledger</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-700 font-medium">SI-1004</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" density="compact" aria-label="More actions">
            ···
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Download PDF</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem destructive>Cancel invoice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const f=["ActionMenu","OverflowMenu"];export{o as ActionMenu,r as OverflowMenu,f as __namedExportsOrder,v as default};
