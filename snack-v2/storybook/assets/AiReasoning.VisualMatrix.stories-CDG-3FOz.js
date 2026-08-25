import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BiKgHgfb.js";import{i,n as a,r as o,t as s}from"./testIds-CIpBrkRA.js";var c,l,u,d=e((()=>{c=`_matrix_7szv3_4`,l=`_cell_7szv3_9`,u={matrix:c,cell:l}}));function f(e,t){return(0,p.jsx)(`div`,{className:u.cell,children:(0,p.jsx)(i,{...e,"data-test-id":t})})}var p,m,h,g,_,v,y;e((()=>{o(),r(),d(),a(),p=t(),m={title:`AI/Process & motion/AiReasoning`,id:`ai-aireasoning`,component:i,parameters:{layout:`padded`}},h=[{key:`with-line`,label:`stepper line on`,stepperLine:!0},{key:`without-line`,label:`stepper line off`,stepperLine:!1}],g=[{key:`short`,label:`short text`,description:`reasoning in progress`},{key:`long`,label:`long text`,description:`reasoning is collecting intermediate details from tools and composing a final response for the user`}],_=[{key:`default-on`,label:`line=true, connector=auto`,props:{stepperLine:!0}},{key:`default-off`,label:`line=false, connector=auto`,props:{stepperLine:!1}},{key:`forced-on`,label:`line=false, connector=true`,props:{stepperLine:!1,connector:!0}},{key:`forced-off`,label:`line=true, connector=false`,props:{stepperLine:!0,connector:!1}}],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:u.matrix,children:[(0,p.jsx)(n,{sectionTitle:`Connector × Content`,firstColumnHeader:`Connector`,columnHeaders:g.map(e=>e.label.toUpperCase()),rows:h.map(e=>({variantLabel:e.label,cells:g.map(t=>f({stepperLine:e.stepperLine,description:t.description},`${s.root}-${e.key}-${t.key}`))}))}),(0,p.jsx)(n,{sectionTitle:`Explicit connector override`,firstColumnHeader:`Mode`,columnHeaders:[`PREVIEW`],rows:_.map(e=>({variantLabel:e.label,cells:[f({...e.props,description:`connector visibility sample`},`${s.root}-connector-override-${e.key}`)]}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Connector × Content' firstColumnHeader='Connector' columnHeaders={contentRows.map(row => row.label.toUpperCase())} rows={stepperRows.map(stepper => ({
      variantLabel: stepper.label,
      cells: contentRows.map(content => renderCell({
        stepperLine: stepper.stepperLine,
        description: content.description
      }, \`\${TEST_IDS.root}-\${stepper.key}-\${content.key}\`))
    }))} />

      <StoryTable sectionTitle='Explicit connector override' firstColumnHeader='Mode' columnHeaders={['PREVIEW']} rows={connectorOverrideRows.map(row => ({
      variantLabel: row.label,
      cells: [renderCell({
        ...row.props,
        description: 'connector visibility sample'
      }, \`\${TEST_IDS.root}-connector-override-\${row.key}\`)]
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=AiReasoning.VisualMatrix.stories-CDG-3FOz.js.map