import{j as e}from"./vendor-react-QzJwS0Xl.js";import{E as g}from"./icon-chip-CEEhPAY1.js";import{B as n}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const N={title:"Application/EmptyState",component:g},h=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"})]}),y=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r={args:{title:"No records found",description:"There are no entries matching the current filters. Try adjusting your search or clearing the active filters.",icon:e.jsx(h,{}),primaryAction:e.jsx(n,{variant:"default",density:"compact",children:"Create record"}),secondaryAction:e.jsx(n,{variant:"ghost",density:"compact",children:"Clear filters"})}},t={args:{title:'No results for "INV-2024"',description:"Try a different search term or remove filters.",icon:e.jsx(y,{}),secondaryAction:e.jsx(n,{variant:"secondary",density:"compact",children:"Clear search"})}},o={args:{title:"You're all caught up",description:"There are no items pending your action at this time.",icon:e.jsx(h,{})}};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "No records found",
    description: "There are no entries matching the current filters. Try adjusting your search or clearing the active filters.",
    icon: <InboxIcon />,
    primaryAction: <Button variant="default" density="compact">
        Create record
      </Button>,
    secondaryAction: <Button variant="ghost" density="compact">
        Clear filters
      </Button>
  }
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'No results for "INV-2024"',
    description: "Try a different search term or remove filters.",
    icon: <SearchIcon />,
    secondaryAction: <Button variant="secondary" density="compact">
        Clear search
      </Button>
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "You're all caught up",
    description: "There are no items pending your action at this time.",
    icon: <InboxIcon />
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["NoRecords","NoSearchResults","NoActionsRequired"];export{o as NoActionsRequired,r as NoRecords,t as NoSearchResults,A as __namedExportsOrder,N as default};
