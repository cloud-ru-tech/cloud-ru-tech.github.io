import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DyMJH5nk.js";import{a as i,i as a,n as o,o as s,s as c,t as l}from"./presets-D3qej5Rj.js";import{n as u,t as d}from"./styles.module-C3ZWmwUh.js";var f,p,m,h,g;e((()=>{s(),r(),d(),i(),f=t(),p={title:`AI/Process & motion/AiChainOfThoughts/AiChainOfThoughts`,id:`ai-aichainofthoughts-aichainofthoughts`,component:c,parameters:{layout:`padded`}},m=[{label:`inProgress`,inProgress:!0},{label:`done`,inProgress:!1}],h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:u.grid,children:[(0,f.jsx)(n,{sectionTitle:`InProgress × Open`,firstColumnHeader:`Progress`,columnHeaders:[`CLOSED`,`OPEN`],rows:m.map(({label:e,inProgress:t})=>({variantLabel:e,cells:[!1,!0].map(e=>(0,f.jsx)(`div`,{className:u.cell,children:(0,f.jsx)(c,{inProgress:t,duration:l,defaultOpen:e,children:a})},String(e)))}))}),(0,f.jsx)(n,{sectionTitle:`Shimmer × Icon`,firstColumnHeader:`Shimmer`,columnHeaders:o.map(({label:e})=>e),rows:[!0,!1].map(e=>({variantLabel:String(e),cells:o.map(({label:t,icon:n})=>(0,f.jsx)(`div`,{className:u.cell,children:(0,f.jsx)(c,{duration:l,shimmer:e,icon:n,children:a})},t))}))}),(0,f.jsx)(n,{sectionTitle:`Broken`,firstColumnHeader:`State`,columnHeaders:[`BROKEN`],rows:[{variantLabel:`broken`,cells:[(0,f.jsx)(`div`,{className:u.cell,children:(0,f.jsx)(c,{broken:!0,children:a})},`broken`)]}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='InProgress × Open' firstColumnHeader='Progress' columnHeaders={['CLOSED', 'OPEN']} rows={progressCases.map(({
      label,
      inProgress
    }) => ({
      variantLabel: label,
      cells: [false, true].map(open => <div key={String(open)} className={styles.cell}>
              <AiChainOfThoughts inProgress={inProgress} duration={CHAIN_DURATION} defaultOpen={open}>
                {chainContentPreset}
              </AiChainOfThoughts>
            </div>)
    }))} />
      <StoryTable sectionTitle='Shimmer × Icon' firstColumnHeader='Shimmer' columnHeaders={HEADLINE_ICON_CASES.map(({
      label
    }) => label)} rows={[true, false].map(shimmer => ({
      variantLabel: String(shimmer),
      cells: HEADLINE_ICON_CASES.map(({
        label,
        icon
      }) => <div key={label} className={styles.cell}>
              <AiChainOfThoughts duration={CHAIN_DURATION} shimmer={shimmer} icon={icon}>
                {chainContentPreset}
              </AiChainOfThoughts>
            </div>)
    }))} />
      <StoryTable sectionTitle='Broken' firstColumnHeader='State' columnHeaders={['BROKEN']} rows={[{
      variantLabel: 'broken',
      cells: [<div key='broken' className={styles.cell}>
                <AiChainOfThoughts broken>{chainContentPreset}</AiChainOfThoughts>
              </div>]
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,p as default};
//# sourceMappingURL=AiChainOfThoughts.VisualMatrix.stories-Cv8ecVGN.js.map