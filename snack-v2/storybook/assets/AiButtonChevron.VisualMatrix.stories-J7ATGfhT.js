import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CRw8NhXI.js";import{n as i,t as a}from"./src-DqJRW8512.js";import{n as o,t as s}from"./testIds-Ck0oKLRq.js";function c(e,t){return(0,l.jsx)(i,{...e,"data-test-id":t})}var l,u,d,f,p,m;e((()=>{a(),r(),o(),l=t(),u={title:`AI/Primitives/ButtonChevron`,id:`ai-buttonchevron`,component:i,parameters:{layout:`padded`}},d=[!1,!0],f=[{key:`default`,extra:{}},{key:`disabled`,extra:{disabled:!0}}],p={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(n,{sectionTitle:`State × Open`,firstColumnHeader:`State`,columnHeaders:d.map(e=>e?`OPEN`:`CLOSED`),rows:f.map(({key:e,extra:t})=>({variantLabel:e,cells:d.map(n=>c({...t,open:n},`${s.root}-${e}-${n?`open`:`closed`}`))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State × Open' firstColumnHeader='State' columnHeaders={openStates.map(o => o ? 'OPEN' : 'CLOSED')} rows={stateRows.map(({
    key,
    extra
  }) => ({
    variantLabel: key,
    cells: openStates.map(open => renderCell({
      ...extra,
      open
    }, \`\${TEST_IDS.root}-\${key}-\${open ? 'open' : 'closed'}\`))
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,u as default};
//# sourceMappingURL=AiButtonChevron.VisualMatrix.stories-J7ATGfhT.js.map