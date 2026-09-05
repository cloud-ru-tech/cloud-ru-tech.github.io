import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Coxm4alt.js";import{E as i,S as a,t as o}from"./src-DLmIrK-q.js";import{n as s,t as c}from"./testIds-7t_1p-OA.js";var l,u,d,f,p,m;e((()=>{o(),r(),s(),l=t(),u={title:`AI/Primitives/AiTool/Atoms/AiToolDetailsLabel`,id:`ai-aitool-atoms-aitooldetailslabel`,component:a,parameters:{layout:`padded`}},d=Object.values(i),f=[{key:`plain`,header:`COPY HIDDEN`,copyValue:`TextBlock Text`,showCopyButton:!1,showEyeButton:!1,secretRevealed:!1},{key:`copy`,header:`COPY`,copyValue:`TextBlock Text`,showCopyButton:!0,showEyeButton:!1,secretRevealed:!1},{key:`copy-empty`,header:`COPY VALUE EMPTY`,copyValue:``,showCopyButton:!0,showEyeButton:!1,secretRevealed:!1},{key:`hidden`,header:`SECRET HIDDEN`,copyValue:void 0,showCopyButton:!1,showEyeButton:!0,secretRevealed:!1},{key:`revealed`,header:`SECRET REVEALED`,copyValue:void 0,showCopyButton:!1,showEyeButton:!0,secretRevealed:!0}],p={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(n,{sectionTitle:`State × Secret`,firstColumnHeader:`State`,columnHeaders:f.map(e=>e.header),rows:d.map(e=>({variantLabel:e,cells:f.map(t=>(0,l.jsx)(a,{label:`part_name`,state:e,copyValue:t.copyValue,showCopyButton:t.showCopyButton,showEyeButton:t.showEyeButton,secretRevealed:t.secretRevealed,"data-test-id":`${c.detailsLabel}-${e}-${t.key}`},`${e}-${t.key}`))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State × Secret' firstColumnHeader='State' columnHeaders={secretColumns.map(c => c.header)} rows={states.map(state => ({
    variantLabel: state,
    cells: secretColumns.map(col => <AiToolDetailsLabel key={\`\${state}-\${col.key}\`} label='part_name' state={state} copyValue={col.copyValue} showCopyButton={col.showCopyButton} showEyeButton={col.showEyeButton} secretRevealed={col.secretRevealed} data-test-id={\`\${TEST_IDS.detailsLabel}-\${state}-\${col.key}\`} />)
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,u as default};
//# sourceMappingURL=AiToolDetailsLabel.VisualMatrix.stories-BSjMw_gi.js.map