import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CH0ThVYh.js";import{i,n as a,t as o}from"./src-CoNE8wWu.js";import{n as s,t as c}from"./testIds-FRBvZ4Vw.js";var l,u,d,f,p,m;e((()=>{o(),r(),s(),l=t(),u={title:`AI/Primitives/AiButtonClose`,id:`ai-aibuttonclose`,component:a,parameters:{layout:`padded`}},d=[{label:`OUTLINE XS`,props:{size:i.Xs,outline:!0}},{label:`OUTLINE S`,props:{size:i.S,outline:!0}},{label:`S`,props:{size:i.S}},{label:`M`,props:{size:i.M}}],f=[{key:`default`,disabled:!1},{key:`disabled`,disabled:!0}],p={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(n,{sectionTitle:`State × Variant`,firstColumnHeader:`State`,columnHeaders:d.map(({label:e})=>e),rows:f.map(({key:e,disabled:t})=>({variantLabel:e,cells:d.map(({label:n,props:r})=>(0,l.jsx)(a,{...r,disabled:t,"data-test-id":`${c.root}-${e}-${n.toLowerCase().replace(` `,`-`)}`},n))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='State × Variant' firstColumnHeader='State' columnHeaders={variants.map(({
    label
  }) => label)} rows={states.map(({
    key,
    disabled
  }) => ({
    variantLabel: key,
    cells: variants.map(({
      label,
      props
    }) => <AiButtonClose key={label} {...props} disabled={disabled} data-test-id={\`\${TEST_IDS.root}-\${key}-\${label.toLowerCase().replace(' ', '-')}\`} />)
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,u as default};
//# sourceMappingURL=AiButtonClose.VisualMatrix.stories-D6jvQ0FW.js.map