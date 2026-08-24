import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-d1MamqAX.js";import{D as i,c as a,t as o}from"./src-B07fK4k5.js";import{n as s,t as c}from"./testIds-WQTVFTwp.js";var l,u,d,f=e((()=>{l=`_cell_riah4_1`,u=`_grid_riah4_5`,d={cell:l,grid:u}})),p,m,h,g,_,v,y;e((()=>{o(),r(),s(),f(),p=t(),m={title:`AI/Primitives/AiTool/Content/AiToolKeyValue`,id:`ai-aitool-content-aitoolkeyvalue`,component:a,parameters:{layout:`padded`}},h=Object.values(i),g=[!1,!0],_=[!1,!0],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:d.grid,children:[(0,p.jsx)(n,{sectionTitle:`Variant`,firstColumnHeader:`—`,columnHeaders:h.map(e=>e.toUpperCase()),rows:[{variantLabel:`key-value`,cells:h.map(e=>(0,p.jsx)(`div`,{className:d.cell,children:(0,p.jsx)(a,{label:`Key`,value:`Value`,variant:e,"data-test-id":`${c.keyValue}-${e}`})},e))}]}),(0,p.jsx)(n,{sectionTitle:`Error × Mono`,firstColumnHeader:`Error`,columnHeaders:g.map(e=>e?`MONO`:`LABEL`),rows:_.map(e=>({variantLabel:e?`error`:`default`,cells:g.map(t=>(0,p.jsx)(`div`,{className:d.cell,children:(0,p.jsx)(a,{label:`Key`,value:`Value`,error:e,mono:t,"data-test-id":`${c.keyValue}-${e?`error`:`default`}-${t?`mono`:`label`}`})},`${e}-${t}`))}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Variant' firstColumnHeader='—' columnHeaders={types.map(t => t.toUpperCase())} rows={[{
      variantLabel: 'key-value',
      cells: types.map(type => <div key={type} className={styles.cell}>
                <AiToolKeyValue label='Key' value='Value' variant={type} data-test-id={\`\${TEST_IDS.keyValue}-\${type}\`} />
              </div>)
    }]} />
      <StoryTable sectionTitle='Error × Mono' firstColumnHeader='Error' columnHeaders={monoStates.map(m => m ? 'MONO' : 'LABEL')} rows={errorStates.map(error => ({
      variantLabel: error ? 'error' : 'default',
      cells: monoStates.map(mono => <div key={\`\${error}-\${mono}\`} className={styles.cell}>
              <AiToolKeyValue label='Key' value='Value' error={error} mono={mono} data-test-id={\`\${TEST_IDS.keyValue}-\${error ? 'error' : 'default'}-\${mono ? 'mono' : 'label'}\`} />
            </div>)
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=AiToolKeyValue.VisualMatrix.stories-7-CEGUGW.js.map