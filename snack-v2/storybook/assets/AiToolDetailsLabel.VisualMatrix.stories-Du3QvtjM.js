import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BUDedHtH.js";import{S as i,T as a,t as o}from"./src-Bw8dIkoS.js";import{n as s,t as c}from"./testIds-DKEZKJxx.js";var l,u,d,f,p,m;e((()=>{o(),r(),s(),l=t(),u={title:`AI/Primitives/AiTool/Atoms/AiToolDetailsLabel`,id:`ai-aitool-atoms-aitooldetailslabel`,component:i,parameters:{layout:`padded`}},d=Object.values(a),f=[{key:`plain`,header:`PLAIN`,showSecret:!1,secretRevealed:!1},{key:`hidden`,header:`SECRET HIDDEN`,showSecret:!0,secretRevealed:!1},{key:`revealed`,header:`SECRET REVEALED`,showSecret:!0,secretRevealed:!0}],p={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(n,{sectionTitle:`State × Secret`,firstColumnHeader:`State`,columnHeaders:f.map(e=>e.header),rows:d.map(e=>({variantLabel:e,cells:f.map(t=>(0,l.jsx)(i,{label:`part_name`,state:e,showSecret:t.showSecret,secretRevealed:t.secretRevealed,"data-test-id":`${c.detailsLabel}-${e}-${t.key}`},`${e}-${t.key}`))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State × Secret' firstColumnHeader='State' columnHeaders={secretColumns.map(c => c.header)} rows={states.map(state => ({
    variantLabel: state,
    cells: secretColumns.map(col => <AiToolDetailsLabel key={\`\${state}-\${col.key}\`} label='part_name' state={state} showSecret={col.showSecret} secretRevealed={col.secretRevealed} data-test-id={\`\${TEST_IDS.detailsLabel}-\${state}-\${col.key}\`} />)
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,u as default};
//# sourceMappingURL=AiToolDetailsLabel.VisualMatrix.stories-Du3QvtjM.js.map