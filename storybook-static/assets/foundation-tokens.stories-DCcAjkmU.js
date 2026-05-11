import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as n,d as i,s as d,z as p,t as m,b as h,c as u}from"./index-Aev5Z0GN.js";const x={title:"Foundation/Tokens"},s=({label:t,value:c})=>e.jsxs("div",{className:"erp-demo-panel",style:{display:"grid",gap:8},children:[e.jsx("div",{style:{height:40,borderRadius:6,background:c,border:"1px solid #cbd5e1"}}),e.jsx("strong",{children:t}),e.jsx("code",{children:c})]}),a={render:()=>e.jsxs("div",{className:"erp-demo-stack",children:[e.jsx("h1",{children:"Foundation Tokens"}),e.jsx("p",{children:"Tokens are UI-library agnostic and can be mapped into themes later."}),e.jsxs("section",{className:"erp-demo-row",children:[e.jsx(s,{label:"background.app",value:n.background.app}),e.jsx(s,{label:"info.accent",value:n.info.accent}),e.jsx(s,{label:"success.accent",value:n.success.accent}),e.jsx(s,{label:"warning.accent",value:n.warning.accent}),e.jsx(s,{label:"danger.accent",value:n.danger.accent})]}),e.jsxs("section",{className:"erp-demo-panel",children:[e.jsx("h2",{children:"Density"}),e.jsx("pre",{children:JSON.stringify(i,null,2)})]}),e.jsxs("section",{className:"erp-demo-panel",children:[e.jsx("h2",{children:"Status Tokens"}),e.jsx("pre",{children:JSON.stringify(d,null,2)})]}),e.jsxs("section",{className:"erp-demo-panel",children:[e.jsx("h2",{children:"Scales"}),e.jsx("pre",{children:JSON.stringify({colorTokens:u.neutral,spacingTokens:h,typographyTokens:m,zIndexTokens:p},null,2)})]})]})};var o,r,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="erp-demo-stack">
      <h1>Foundation Tokens</h1>
      <p>Tokens are UI-library agnostic and can be mapped into themes later.</p>
      <section className="erp-demo-row">
        <Swatch label="background.app" value={semanticColorTokens.background.app} />
        <Swatch label="info.accent" value={semanticColorTokens.info.accent} />
        <Swatch label="success.accent" value={semanticColorTokens.success.accent} />
        <Swatch label="warning.accent" value={semanticColorTokens.warning.accent} />
        <Swatch label="danger.accent" value={semanticColorTokens.danger.accent} />
      </section>
      <section className="erp-demo-panel">
        <h2>Density</h2>
        <pre>{JSON.stringify(densityTokens, null, 2)}</pre>
      </section>
      <section className="erp-demo-panel">
        <h2>Status Tokens</h2>
        <pre>{JSON.stringify(statusTokens, null, 2)}</pre>
      </section>
      <section className="erp-demo-panel">
        <h2>Scales</h2>
        <pre>{JSON.stringify({
          colorTokens: colorTokens.neutral,
          spacingTokens,
          typographyTokens,
          zIndexTokens
        }, null, 2)}</pre>
      </section>
    </div>
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const T=["Overview"];export{a as Overview,T as __namedExportsOrder,x as default};
