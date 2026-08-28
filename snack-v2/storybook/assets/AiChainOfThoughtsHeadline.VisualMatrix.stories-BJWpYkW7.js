import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-SlIP-akt.js";import{i,r as a,s as o,t as s}from"./presets-Cw1RSq6Z.js";import{n as c,t as l}from"./styles.module-C3ZWmwUh.js";var u,d,f,p,m,h;e((()=>{i(),r(),a(),l(),u=t(),d={title:`AI/Process & motion/AiChainOfThoughts/AiChainOfThoughtsHeadline`,id:`ai-aichainofthoughts-aichainofthoughtsheadline`,component:o,parameters:{layout:`padded`}},f=[{label:`inProgress`,inProgress:!0},{label:`done`,inProgress:!1}],p=()=>{},m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:c.grid,children:[(0,u.jsx)(n,{sectionTitle:`InProgress × Chevron`,firstColumnHeader:`Progress`,columnHeaders:[`NO CHEVRON`,`CHEVRON`],rows:f.map(({label:e,inProgress:t})=>({variantLabel:e,cells:[!1,!0].map(e=>(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{inProgress:t,duration:s,collapsible:e,onOpenChange:p})},String(e)))}))}),(0,u.jsx)(n,{sectionTitle:`Broken`,firstColumnHeader:`State`,columnHeaders:[`BROKEN`],rows:[{variantLabel:`broken`,cells:[(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{broken:!0})},`broken`)]}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      <StoryTable sectionTitle='Broken' firstColumnHeader='State' columnHeaders={['BROKEN']} rows={[{
      variantLabel: 'broken',
      cells: [<div key='broken' className={styles.cell}>
                <AiChainOfThoughtsHeadline broken />
              </div>]
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,d as default};
//# sourceMappingURL=AiChainOfThoughtsHeadline.VisualMatrix.stories-BJWpYkW7.js.map