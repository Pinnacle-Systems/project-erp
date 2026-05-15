import{j as o}from"./vendor-react-QzJwS0Xl.js";import{q as p,r as i,s as t,B as r,t as e,a as d}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const h={title:"Primitives/Tooltip"},n={render:()=>o.jsx(p,{children:o.jsxs("div",{className:"flex flex-wrap gap-4",children:[o.jsxs(i,{children:[o.jsx(t,{asChild:!0,children:o.jsx(r,{variant:"secondary",disabled:!0,children:"Post"})}),o.jsx(e,{children:"Posting is blocked — document has validation errors."})]}),o.jsxs(i,{children:[o.jsx(t,{asChild:!0,children:o.jsx(r,{variant:"default",children:"Approve"})}),o.jsx(e,{children:"Approve this invoice and advance to the next workflow step."})]}),o.jsxs(i,{children:[o.jsx(t,{asChild:!0,children:o.jsx(d,{variant:"warning",children:"Pending approval"})}),o.jsx(e,{children:"Waiting for Level 2 approval from Finance Manager."})]})]})})};var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <div className="flex flex-wrap gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" disabled>
              Post
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Posting is blocked — document has validation errors.
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="default">Approve</Button>
          </TooltipTrigger>
          <TooltipContent>
            Approve this invoice and advance to the next workflow step.
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="warning">Pending approval</Badge>
          </TooltipTrigger>
          <TooltipContent>
            Waiting for Level 2 approval from Finance Manager.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const x=["BasicTooltip"];export{n as BasicTooltip,x as __namedExportsOrder,h as default};
