import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bb1kR6xz.js";import{T as i,b as a,c as o,o as s,t as c,u as l}from"./src-CxEyCqkr.js";import{n as u,t as d}from"./testIds-B_yurbuP.js";var f,p,m=e((()=>{f=`_cell_qym4t_1`,p={cell:f}})),h,g,_,v,y;e((()=>{c(),r(),u(),m(),h=t(),g={title:`AI/Primitives/AiTool/Atoms/AiToolDetails`,id:`ai-aitool-atoms-aitooldetails`,component:a,parameters:{layout:`padded`}},_=Object.values(i),v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsx)(n,{sectionTitle:`State (контент наследует mono/error из контекста)`,firstColumnHeader:`—`,columnHeaders:_.map(e=>e.toUpperCase()),rows:[{variantLabel:`details`,cells:_.map(e=>(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsxs)(a,{label:`tool_name`,state:e,scroll:!1,"data-test-id":`${d.details}-${e}`,children:[(0,h.jsx)(l,{children:`TextBlock Text`}),(0,h.jsx)(o,{label:`region`,value:`ru-central1`}),(0,h.jsx)(s,{variant:`string`,name:`status`,value:`ok`})]})},e))}]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State (контент наследует mono/error из контекста)' firstColumnHeader='—' columnHeaders={states.map(s => s.toUpperCase())} rows={[{
    variantLabel: 'details',
    cells: states.map(state => <div key={state} className={styles.cell}>
              <AiToolDetails label='tool_name' state={state} scroll={false} data-test-id={\`\${TEST_IDS.details}-\${state}\`}>
                <AiToolText>TextBlock Text</AiToolText>
                <AiToolKeyValue label='region' value='ru-central1' />
                <AiToolObject variant='string' name='status' value='ok' />
              </AiToolDetails>
            </div>)
  }]} />
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,g as default};
//# sourceMappingURL=AiToolDetails.VisualMatrix.stories-0SodMoDD.js.map