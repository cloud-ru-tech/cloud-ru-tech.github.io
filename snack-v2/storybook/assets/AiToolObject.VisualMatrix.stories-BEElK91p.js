import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bb1kR6xz.js";import{O as i,c as a,o,t as s}from"./src-CxEyCqkr.js";import{n as c,t as l}from"./testIds-B_yurbuP.js";var u,d,f,p=e((()=>{u=`_cell_fqkus_1`,d=`_grid_fqkus_5`,f={cell:u,grid:d}})),m,h,g,_,v,y,b;e((()=>{s(),r(),c(),p(),m=t(),h={title:`AI/Primitives/AiTool/Content/AiToolObject`,id:`ai-aitool-content-aitoolobject`,component:o,parameters:{layout:`padded`}},g=[{label:`complex-closed`,node:(0,m.jsx)(o,{name:`Key[ObjectName]`,variant:i.Complex,open:!1,"data-test-id":`${l.object}-complex-closed`})},{label:`complex-open`,node:(0,m.jsxs)(o,{name:`Key[ObjectName]`,variant:i.Complex,open:!0,"data-test-id":`${l.object}-complex-open`,children:[(0,m.jsx)(a,{label:`region`,value:`ru-central1`}),(0,m.jsx)(a,{label:`status`,value:`ok`})]})},{label:`string`,node:(0,m.jsx)(o,{name:`Key`,value:`Value`,variant:i.String,"data-test-id":`${l.object}-string`})}],_=[!1,!0],v=[!1,!0],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.grid,children:[(0,m.jsx)(n,{sectionTitle:`Variant × Open`,firstColumnHeader:`—`,columnHeaders:g.map(e=>e.label.toUpperCase()),rows:[{variantLabel:`object`,cells:g.map(e=>(0,m.jsx)(`div`,{className:f.cell,children:e.node},e.label))}]}),(0,m.jsx)(n,{sectionTitle:`Error × Mono`,firstColumnHeader:`Error`,columnHeaders:_.map(e=>e?`MONO`:`LABEL`),rows:v.map(e=>({variantLabel:e?`error`:`default`,cells:_.map(t=>(0,m.jsx)(`div`,{className:f.cell,children:(0,m.jsx)(o,{name:`Key`,value:`Value`,variant:i.String,error:e,mono:t,"data-test-id":`${l.object}-${e?`error`:`default`}-${t?`mono`:`label`}`})},`${e}-${t}`))}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Variant × Open' firstColumnHeader='—' columnHeaders={cases.map(c => c.label.toUpperCase())} rows={[{
      variantLabel: 'object',
      cells: cases.map(c => <div key={c.label} className={styles.cell}>
                {c.node}
              </div>)
    }]} />
      <StoryTable sectionTitle='Error × Mono' firstColumnHeader='Error' columnHeaders={monoStates.map(m => m ? 'MONO' : 'LABEL')} rows={errorStates.map(error => ({
      variantLabel: error ? 'error' : 'default',
      cells: monoStates.map(mono => <div key={\`\${error}-\${mono}\`} className={styles.cell}>
              <AiToolObject name='Key' value='Value' variant={AI_TOOL_OBJECT_TYPE.String} error={error} mono={mono} data-test-id={\`\${TEST_IDS.object}-\${error ? 'error' : 'default'}-\${mono ? 'mono' : 'label'}\`} />
            </div>)
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,h as default};
//# sourceMappingURL=AiToolObject.VisualMatrix.stories-BEElK91p.js.map