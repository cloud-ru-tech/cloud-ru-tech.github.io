import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CqCwb0Nr.js";import{t as i,u as a}from"./src-ynngvk4r.js";import{n as o,t as s}from"./testIds-LK6ktlZW.js";var c,l,u,d,f,p;e((()=>{i(),r(),o(),c=t(),l={title:`AI/Primitives/AiTool/Content/AiToolText`,id:`ai-aitool-content-aitooltext`,component:a,parameters:{layout:`padded`}},u=[!1,!0],d=[!1,!0],f={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(n,{sectionTitle:`Error × Mono`,firstColumnHeader:`Error`,columnHeaders:u.map(e=>e?`MONO`:`LABEL`),rows:d.map(e=>({variantLabel:e?`error`:`default`,cells:u.map(t=>(0,c.jsx)(a,{error:e,mono:t,"data-test-id":`${s.text}-${e?`error`:`default`}-${t?`mono`:`label`}`,children:`TextBlock Text`},`${e}-${t}`))}))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Error × Mono' firstColumnHeader='Error' columnHeaders={monoStates.map(m => m ? 'MONO' : 'LABEL')} rows={errorStates.map(error => ({
    variantLabel: error ? 'error' : 'default',
    cells: monoStates.map(mono => <AiToolText key={\`\${error}-\${mono}\`} error={error} mono={mono} data-test-id={\`\${TEST_IDS.text}-\${error ? 'error' : 'default'}-\${mono ? 'mono' : 'label'}\`}>
            TextBlock Text
          </AiToolText>)
  }))} />
}`,...f.parameters?.docs?.source}}},p=[`VisualMatrix`]}))();export{f as VisualMatrix,p as __namedExportsOrder,l as default};
//# sourceMappingURL=AiToolText.VisualMatrix.stories-D9Rm71tM.js.map