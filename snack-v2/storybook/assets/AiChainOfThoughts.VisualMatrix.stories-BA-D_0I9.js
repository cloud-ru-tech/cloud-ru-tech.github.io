import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{a as i,i as a,n as o,r as s,t as c}from"./presets-YVoNpCYe.js";import{n as l,t as u}from"./styles.module-C3ZWmwUh.js";var d,f,p,m,h;e((()=>{a(),r(),u(),s(),d=t(),f={title:`AI/Process & motion/AiChainOfThoughts/AiChainOfThoughts`,id:`ai-aichainofthoughts-aichainofthoughts`,component:i,parameters:{layout:`padded`}},p=[{label:`inProgress`,inProgress:!0},{label:`done`,inProgress:!1}],m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.grid,children:[(0,d.jsx)(n,{sectionTitle:`InProgress × Opened`,firstColumnHeader:`Progress`,columnHeaders:[`CLOSED`,`OPENED`],rows:p.map(({label:e,inProgress:t})=>({variantLabel:e,cells:[!1,!0].map(e=>(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{inProgress:t,duration:c,defaultOpened:e,children:o})},String(e)))}))}),(0,d.jsx)(n,{sectionTitle:`Broken`,firstColumnHeader:`State`,columnHeaders:[`BROKEN`],rows:[{variantLabel:`broken`,cells:[(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{broken:!0,children:o})},`broken`)]}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='InProgress × Opened' firstColumnHeader='Progress' columnHeaders={['CLOSED', 'OPENED']} rows={progressCases.map(({
      label,
      inProgress
    }) => ({
      variantLabel: label,
      cells: [false, true].map(opened => <div key={String(opened)} className={styles.cell}>
              <AiChainOfThoughts inProgress={inProgress} duration={CHAIN_DURATION} defaultOpened={opened}>
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
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,f as default};
//# sourceMappingURL=AiChainOfThoughts.VisualMatrix.stories-BA-D_0I9.js.map