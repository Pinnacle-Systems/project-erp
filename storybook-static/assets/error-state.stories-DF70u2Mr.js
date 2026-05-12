import{a as u}from"./confirm-dialog-BML_ndGp.js";import"./iframe-CewInuWt.js";import"./preload-helper-C1FmrZbK.js";import"./select-field-BpVK6OAn.js";import"./index-CQrbGu9B.js";const R={title:"Application/ErrorState",component:u},e={args:{title:"Failed to load data",description:"The server returned an unexpected error. Please try again or contact support if the issue persists.",errorDetails:`HTTP 500 Internal Server Error
GET /api/v1/ledger-entries?period=04&fy=2024
Request ID: req_8f9d2c1a4b
Timestamp: 2025-05-11T08:14:02Z`,onRetry:()=>alert("Retrying..."),retryLabel:"Retry"}},r={args:{title:"Network unavailable",description:"Could not reach the server. Check your connection and try again.",onRetry:()=>alert("Retrying...")}},t={args:{title:"Access denied",description:"You do not have permission to view this resource. Contact your administrator.",errorDetails:`HTTP 403 Forbidden
GET /api/v1/payroll-summary
Role: viewer`}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Failed to load data",
    description: "The server returned an unexpected error. Please try again or contact support if the issue persists.",
    errorDetails: "HTTP 500 Internal Server Error\\nGET /api/v1/ledger-entries?period=04&fy=2024\\nRequest ID: req_8f9d2c1a4b\\nTimestamp: 2025-05-11T08:14:02Z",
    onRetry: () => alert("Retrying..."),
    retryLabel: "Retry"
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "Network unavailable",
    description: "Could not reach the server. Check your connection and try again.",
    onRetry: () => alert("Retrying...")
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Access denied",
    description: "You do not have permission to view this resource. Contact your administrator.",
    errorDetails: "HTTP 403 Forbidden\\nGET /api/v1/payroll-summary\\nRole: viewer"
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["FailedLoad","NetworkError","NoRetry"];export{e as FailedLoad,r as NetworkError,t as NoRetry,h as __namedExportsOrder,R as default};
