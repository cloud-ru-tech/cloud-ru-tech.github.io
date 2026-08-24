import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-d1MamqAX.js";import{c as i,i as a,t as o}from"./src-B07fK4k5.js";import{n as s,t as c}from"./testIds-WQTVFTwp.js";var l,u,d,f=e((()=>{l=`_cell_fqkus_1`,u=`_grid_fqkus_5`,d={cell:l,grid:u}})),p,m,h,g,_,v,y;e((()=>{o(),r(),s(),f(),p=t(),m={title:`AI/Primitives/AiTool/Content/AiToolArray`,id:`ai-aitool-content-aitoolarray`,component:a,parameters:{layout:`padded`}},h=[!1,!0],g=[!1,!0],_=[!1,!0],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:d.grid,children:[(0,p.jsx)(n,{sectionTitle:`State × Opened`,firstColumnHeader:`—`,columnHeaders:h.map(e=>e?`OPENED`:`CLOSED`),rows:[{variantLabel:`array`,cells:h.map(e=>(0,p.jsx)(`div`,{className:d.cell,children:(0,p.jsxs)(a,{name:`Key[ArrayName]`,count:2,unit:`шт.`,opened:e,"data-test-id":`${c.array}-${e?`opened`:`closed`}`,children:[(0,p.jsx)(i,{label:`0`,value:`alpha`}),(0,p.jsx)(i,{label:`1`,value:`beta`})]})},String(e)))}]}),(0,p.jsx)(n,{sectionTitle:`Error × Mono`,firstColumnHeader:`Error`,columnHeaders:g.map(e=>e?`MONO`:`LABEL`),rows:_.map(e=>({variantLabel:e?`error`:`default`,cells:g.map(t=>(0,p.jsx)(`div`,{className:d.cell,children:(0,p.jsx)(a,{name:`Key[ArrayName]`,count:2,unit:`шт.`,error:e,mono:t,"data-test-id":`${c.array}-${e?`error`:`default`}-${t?`mono`:`label`}`})},`${e}-${t}`))}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='State × Opened' firstColumnHeader='—' columnHeaders={openedStates.map(o => o ? 'OPENED' : 'CLOSED')} rows={[{
      variantLabel: 'array',
      cells: openedStates.map(opened => <div key={String(opened)} className={styles.cell}>
                <AiToolArray name='Key[ArrayName]' count={2} unit='шт.' opened={opened} data-test-id={\`\${TEST_IDS.array}-\${opened ? 'opened' : 'closed'}\`}>
                  <AiToolKeyValue label='0' value='alpha' />
                  <AiToolKeyValue label='1' value='beta' />
                </AiToolArray>
              </div>)
    }]} />
      <StoryTable sectionTitle='Error × Mono' firstColumnHeader='Error' columnHeaders={monoStates.map(m => m ? 'MONO' : 'LABEL')} rows={errorStates.map(error => ({
      variantLabel: error ? 'error' : 'default',
      cells: monoStates.map(mono => <div key={\`\${error}-\${mono}\`} className={styles.cell}>
              <AiToolArray name='Key[ArrayName]' count={2} unit='шт.' error={error} mono={mono} data-test-id={\`\${TEST_IDS.array}-\${error ? 'error' : 'default'}-\${mono ? 'mono' : 'label'}\`} />
            </div>)
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=AiToolArray.VisualMatrix.stories-DU6v_AmB.js.map