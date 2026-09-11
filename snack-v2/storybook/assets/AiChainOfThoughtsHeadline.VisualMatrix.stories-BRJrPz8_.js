import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BA2s2ydY.js";import{a as i,l as a,n as o,o as s,t as c}from"./presets-YGncAxqz.js";import{n as l,t as u}from"./styles.module-C3ZWmwUh.js";var d,f,p,m,h,g;e((()=>{s(),r(),i(),u(),d=t(),f={title:`AI/Process & motion/AiChainOfThoughts/AiChainOfThoughtsHeadline`,id:`ai-aichainofthoughts-aichainofthoughtsheadline`,component:a,parameters:{layout:`padded`}},p=[{label:`inProgress`,inProgress:!0},{label:`done`,inProgress:!1}],m=()=>{},h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.grid,children:[(0,d.jsx)(n,{sectionTitle:`InProgress × Chevron`,firstColumnHeader:`Progress`,columnHeaders:[`NO CHEVRON`,`CHEVRON`],rows:p.map(({label:e,inProgress:t})=>({variantLabel:e,cells:[!1,!0].map(e=>(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(a,{inProgress:t,duration:c,collapsible:e,onOpenChange:m})},String(e)))}))}),(0,d.jsx)(n,{sectionTitle:`Shimmer × Icon (inProgress)`,firstColumnHeader:`Shimmer`,columnHeaders:o.map(({label:e})=>e),rows:[!0,!1].map(e=>({variantLabel:String(e),cells:o.map(({label:t,icon:n})=>(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(a,{duration:c,shimmer:e,icon:n,collapsible:!0,onOpenChange:m})},t))}))}),(0,d.jsx)(n,{sectionTitle:`Broken`,firstColumnHeader:`State`,columnHeaders:[`BROKEN`],rows:[{variantLabel:`broken`,cells:[(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(a,{broken:!0})},`broken`)]}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='InProgress × Chevron' firstColumnHeader='Progress' columnHeaders={['NO CHEVRON', 'CHEVRON']} rows={progressCases.map(({
      label,
      inProgress
    }) => ({
      variantLabel: label,
      cells: [false, true].map(collapsible => <div key={String(collapsible)} className={styles.cell}>
              <AiChainOfThoughtsHeadline inProgress={inProgress} duration={CHAIN_DURATION} collapsible={collapsible} onOpenChange={noop} />
            </div>)
    }))} />
      <StoryTable sectionTitle='Shimmer × Icon (inProgress)' firstColumnHeader='Shimmer' columnHeaders={HEADLINE_ICON_CASES.map(({
      label
    }) => label)} rows={[true, false].map(shimmer => ({
      variantLabel: String(shimmer),
      cells: HEADLINE_ICON_CASES.map(({
        label,
        icon
      }) => <div key={label} className={styles.cell}>
              <AiChainOfThoughtsHeadline duration={CHAIN_DURATION} shimmer={shimmer} icon={icon} collapsible onOpenChange={noop} />
            </div>)
    }))} />
      <StoryTable sectionTitle='Broken' firstColumnHeader='State' columnHeaders={['BROKEN']} rows={[{
      variantLabel: 'broken',
      cells: [<div key='broken' className={styles.cell}>
                <AiChainOfThoughtsHeadline broken />
              </div>]
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,f as default};
//# sourceMappingURL=AiChainOfThoughtsHeadline.VisualMatrix.stories-BRJrPz8_.js.map