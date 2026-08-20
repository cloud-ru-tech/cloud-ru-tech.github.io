import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{n as i,t as a}from"./src-on2BEXi_.js";import{n as o,t as s}from"./testIds-B-iD_E0_.js";function c(e,t){return(0,l.jsx)(i,{...e,"data-test-id":t})}var l,u,d,f,p,m;e((()=>{a(),r(),o(),l=t(),u={title:`AI/Primitives/ButtonChevron`,id:`ai-buttonchevron`,component:i,parameters:{layout:`padded`}},d=[!1,!0],f=[{key:`default`,extra:{}},{key:`disabled`,extra:{disabled:!0}}],p={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(n,{sectionTitle:`State × Opened`,firstColumnHeader:`State`,columnHeaders:d.map(e=>e?`OPENED`:`CLOSED`),rows:f.map(({key:e,extra:t})=>({variantLabel:e,cells:d.map(n=>c({...t,opened:n},`${s.root}-${e}-${n?`opened`:`closed`}`))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State × Opened' firstColumnHeader='State' columnHeaders={openedStates.map(o => o ? 'OPENED' : 'CLOSED')} rows={stateRows.map(({
    key,
    extra
  }) => ({
    variantLabel: key,
    cells: openedStates.map(opened => renderCell({
      ...extra,
      opened
    }, \`\${TEST_IDS.root}-\${key}-\${opened ? 'opened' : 'closed'}\`))
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,u as default};
//# sourceMappingURL=AiButtonChevron.VisualMatrix.stories-DC1PtYgO.js.map