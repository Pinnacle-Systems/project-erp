import{r as a,j as e}from"./vendor-react-QzJwS0Xl.js";import{F as o}from"./icon-chip-CEEhPAY1.js";import{B as f}from"./select-field-C9wJ5B38.js";import"./vendor-radix-CAWb8ntQ.js";import"./vendor-react-dom-CQaxX8-L.js";const N={title:"Application/FilterBar",component:o},T=[{label:"Draft",value:"draft"},{label:"Pending",value:"pending"},{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"},{label:"Closed",value:"closed"}],r={render:()=>{const[t,s]=a.useState("");return e.jsxs("div",{className:"bg-neutral-50 min-h-40 rounded",children:[e.jsx(o,{searchValue:t,onSearchChange:s,searchPlaceholder:"Search records..."}),e.jsxs("p",{className:"text-xs text-neutral-400 px-4 pt-3",children:['Search value: "',t,'"']})]})}},n={render:()=>{const[t,s]=a.useState(""),[c,l]=a.useState(""),[u,h]=a.useState(""),[i,d]=a.useState(""),p=!!(t||c||u||i);return e.jsxs("div",{className:"bg-neutral-50 min-h-40 rounded",children:[e.jsx(o,{searchValue:t,onSearchChange:s,searchPlaceholder:"Search by ref or party...",statusOptions:T,statusValue:c,onStatusChange:l,dateFrom:u,onDateFromChange:h,dateTo:i,onDateToChange:d,hasActiveFilters:p,onClearFilters:()=>{s(""),l(""),h(""),d("")},actions:e.jsx(f,{variant:"default",density:"compact",width:"hug",children:"Export"})}),e.jsxs("p",{className:"text-xs text-neutral-400 px-4 pt-3",children:["Active filters: ",p?"yes":"none"]})]})}};var m,S,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    return <div className="bg-neutral-50 min-h-40 rounded">
        <FilterBar searchValue={search} onSearchChange={setSearch} searchPlaceholder="Search records..." />
        <p className="text-xs text-neutral-400 px-4 pt-3">
          Search value: "{search}"
        </p>
      </div>;
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,F,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const hasFilters = Boolean(search || status || from || to);
    return <div className="bg-neutral-50 min-h-40 rounded">
        <FilterBar searchValue={search} onSearchChange={setSearch} searchPlaceholder="Search by ref or party..." statusOptions={STATUS_OPTIONS} statusValue={status} onStatusChange={setStatus} dateFrom={from} onDateFromChange={setFrom} dateTo={to} onDateToChange={setTo} hasActiveFilters={hasFilters} onClearFilters={() => {
        setSearch("");
        setStatus("");
        setFrom("");
        setTo("");
      }} actions={<Button variant="default" density="compact" width="hug">
              Export
            </Button>} />
        <p className="text-xs text-neutral-400 px-4 pt-3">
          Active filters: {hasFilters ? "yes" : "none"}
        </p>
      </div>;
  }
}`,...(g=(F=n.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const y=["Basic","WithStatusAndDate"];export{r as Basic,n as WithStatusAndDate,y as __namedExportsOrder,N as default};
