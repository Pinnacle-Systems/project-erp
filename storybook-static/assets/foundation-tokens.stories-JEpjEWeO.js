import{j as e}from"./iframe-CewInuWt.js";import{s as o,d as v,a as u,c as x,b as g,t as j,r as h,e as k,z as w}from"./index-Bp63ts54.js";import"./preload-helper-C1FmrZbK.js";const O={title:"Foundation/Tokens"},t=({label:s,value:a})=>e.jsxs("div",{className:"erp-demo-panel",style:{display:"grid",gap:8},children:[e.jsx("div",{style:{height:40,borderRadius:6,background:a,border:"1px solid #cbd5e1"}}),e.jsx("strong",{children:s}),e.jsx("code",{children:a})]}),i=({children:s})=>e.jsx("h2",{className:"text-sm font-semibold text-[var(--erp-fg)]",children:s}),d=({label:s,value:a,preview:n})=>e.jsxs("div",{className:"grid grid-cols-[minmax(8rem,1fr)_minmax(7rem,auto)_minmax(6rem,auto)] items-center gap-3 border-b border-[var(--erp-border)] px-3 py-2 text-xs last:border-0",children:[e.jsx("span",{className:"font-medium text-[var(--erp-fg)]",children:s}),e.jsx("code",{className:"text-[var(--erp-muted)]",children:String(a)}),e.jsx("div",{className:"flex justify-end",children:n})]}),N=({device:s,mode:a,tokens:n})=>e.jsxs("div",{className:"rounded-md border border-[var(--erp-border)] bg-[var(--erp-surface)] p-3",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("strong",{className:"text-sm text-[var(--erp-fg)]",children:s}),e.jsx("span",{className:"erp-demo-badge text-[var(--erp-muted)]",children:a})]}),e.jsx("div",{className:"grid gap-2",children:Object.entries(n).map(([r,l])=>e.jsx(d,{label:r,value:l,preview:r.toLowerCase().includes("height")||r.toLowerCase().includes("target")?e.jsx("div",{className:"w-20 rounded bg-[var(--erp-accent)]",style:{height:l}}):r.toLowerCase().includes("gap")||r.toLowerCase().includes("padding")?e.jsxs("div",{className:"flex h-5 items-center rounded bg-[var(--erp-accent-soft)] px-1",style:{gap:l},children:[e.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--erp-accent)]"}),e.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--erp-accent)]"})]}):null},r))})]}),T=({status:s,semantic:a,label:n})=>{const r=o[a];return e.jsxs("div",{className:"rounded-md border px-3 py-2",style:{background:r.background,borderColor:r.border,color:r.foreground},children:[e.jsx("strong",{className:"block text-xs",children:n}),e.jsx("code",{className:"text-[10px] opacity-80",children:s})]})},c={render:()=>e.jsxs("div",{className:"erp-demo-stack",children:[e.jsx("h1",{children:"Foundation Tokens"}),e.jsx("p",{children:"Tokens are UI-library agnostic and can be mapped into themes later."}),e.jsxs("section",{className:"erp-demo-row",children:[e.jsx(t,{label:"background.app",value:o.background.app}),e.jsx(t,{label:"info.accent",value:o.info.accent}),e.jsx(t,{label:"success.accent",value:o.success.accent}),e.jsx(t,{label:"warning.accent",value:o.warning.accent}),e.jsx(t,{label:"danger.accent",value:o.danger.accent})]}),e.jsxs("section",{className:"erp-demo-panel",children:[e.jsx(i,{children:"Density"}),e.jsx("div",{className:"mt-3 grid gap-3 md:grid-cols-2",children:Object.entries(v).flatMap(([s,a])=>Object.entries(a).map(([n,r])=>e.jsx(N,{device:s,mode:n,tokens:r},`${s}-${n}`)))})]}),e.jsxs("section",{className:"erp-demo-panel",children:[e.jsx(i,{children:"Status Tokens"}),e.jsx("div",{className:"mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5",children:Object.entries(u).map(([s,a])=>e.jsx(T,{status:s,label:a.label,semantic:a.semantic},s))})]}),e.jsxs("section",{className:"erp-demo-panel",children:[e.jsx(i,{children:"Scales"}),e.jsxs("div",{className:"mt-3 grid gap-4 lg:grid-cols-2",children:[e.jsx("div",{className:"rounded-md border border-[var(--erp-border)]",children:Object.entries(x.neutral).map(([s,a])=>e.jsx(d,{label:`neutral.${s}`,value:a,preview:e.jsx("div",{className:"h-5 w-16 rounded border border-[var(--erp-border)]",style:{background:a}})},s))}),e.jsx("div",{className:"rounded-md border border-[var(--erp-border)]",children:Object.entries(g).map(([s,a])=>e.jsx(d,{label:`space.${s}`,value:a,preview:e.jsx("div",{className:"h-3 rounded bg-[var(--erp-accent)]",style:{width:a}})},s))}),e.jsx("div",{className:"rounded-md border border-[var(--erp-border)]",children:Object.entries(j.fontSize).map(([s,a])=>e.jsx(d,{label:`font.${s}`,value:a,preview:e.jsx("span",{style:{fontSize:a},children:"Aa"})},s))}),e.jsxs("div",{className:"rounded-md border border-[var(--erp-border)]",children:[Object.entries(h).map(([s,a])=>e.jsx(d,{label:`radius.${s}`,value:a,preview:e.jsx("div",{className:"h-8 w-12 bg-[var(--erp-accent-soft)] border border-[var(--erp-accent-border)]",style:{borderRadius:a}})},s)),Object.entries(k).slice(1,5).map(([s,a])=>e.jsx(d,{label:`shadow.${s}`,value:s,preview:e.jsx("div",{className:"h-8 w-12 rounded bg-[var(--erp-surface)] border border-[var(--erp-border)]",style:{boxShadow:a}})},s)),Object.entries(w).map(([s,a])=>e.jsx(d,{label:`z.${s}`,value:a},s))]})]})]})]})};var p,m,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <SectionTitle>Density</SectionTitle>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {Object.entries(densityTokens).flatMap(([device, modes]) => Object.entries(modes).map(([mode, tokens]) => <DensityCard key={\`\${device}-\${mode}\`} device={device} mode={mode} tokens={tokens} />))}
        </div>
      </section>
      <section className="erp-demo-panel">
        <SectionTitle>Status Tokens</SectionTitle>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(statusTokens).map(([status, token]) => <StatusCard key={status} status={status} label={token.label} semantic={token.semantic} />)}
        </div>
      </section>
      <section className="erp-demo-panel">
        <SectionTitle>Scales</SectionTitle>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(colorTokens.neutral).map(([step, value]) => <TokenRow key={step} label={\`neutral.\${step}\`} value={value} preview={<div className="h-5 w-16 rounded border border-[var(--erp-border)]" style={{
            background: value
          }} />} />)}
          </div>
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(spacingTokens).map(([step, value]) => <TokenRow key={step} label={\`space.\${step}\`} value={value} preview={<div className="h-3 rounded bg-[var(--erp-accent)]" style={{
            width: value
          }} />} />)}
          </div>
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(typographyTokens.fontSize).map(([step, value]) => <TokenRow key={step} label={\`font.\${step}\`} value={value} preview={<span style={{
            fontSize: value
          }}>Aa</span>} />)}
          </div>
          <div className="rounded-md border border-[var(--erp-border)]">
            {Object.entries(radiusTokens).map(([step, value]) => <TokenRow key={step} label={\`radius.\${step}\`} value={value} preview={<div className="h-8 w-12 bg-[var(--erp-accent-soft)] border border-[var(--erp-accent-border)]" style={{
            borderRadius: value
          }} />} />)}
            {Object.entries(shadowTokens).slice(1, 5).map(([step, value]) => <TokenRow key={step} label={\`shadow.\${step}\`} value={step} preview={<div className="h-8 w-12 rounded bg-[var(--erp-surface)] border border-[var(--erp-border)]" style={{
            boxShadow: value
          }} />} />)}
            {Object.entries(zIndexTokens).map(([step, value]) => <TokenRow key={step} label={\`z.\${step}\`} value={value} />)}
          </div>
        </div>
      </section>
    </div>
}`,...(b=(m=c.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const $=["Overview"];export{c as Overview,$ as __namedExportsOrder,O as default};
