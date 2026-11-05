import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CH0ThVYh.js";import{i,n as a,t as o}from"./src-9qcDQsfb.js";import{n as s,t as c}from"./testIds-C4NQJCZ2.js";var l,u,d,f,p,m;e((()=>{o(),r(),s(),l=t(),u={title:`AI/Primitives/AiButtonControls`,id:`ai-aibuttoncontrols`,component:a,parameters:{layout:`padded`}},d=Object.values(i),f=[{key:`default`,disabled:!1},{key:`disabled`,disabled:!0}],p={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(n,{sectionTitle:`State × Direction`,firstColumnHeader:`State`,columnHeaders:d.map(e=>e.toUpperCase()),rows:f.map(({key:e,disabled:t})=>({variantLabel:e,cells:d.map(n=>(0,l.jsx)(a,{direction:n,disabled:t,"data-test-id":`${c.root}-${e}-${n}`},n))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State × Direction' firstColumnHeader='State' columnHeaders={directions.map(direction => direction.toUpperCase())} rows={states.map(({
    key,
    disabled
  }) => ({
    variantLabel: key,
    cells: directions.map(direction => <AiButtonControls key={direction} direction={direction} disabled={disabled} data-test-id={\`\${TEST_IDS.root}-\${key}-\${direction}\`} />)
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,u as default};
//# sourceMappingURL=AiButtonControls.VisualMatrix.stories-DBu4Eh86.js.map