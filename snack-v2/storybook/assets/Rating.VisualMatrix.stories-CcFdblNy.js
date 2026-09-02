import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DQTa2Tvz.js";import{a as i,i as a,n as o,t as s}from"./src-D9kKxKv3.js";var c,l,u,d,f,p,m;e((()=>{s(),r(),c=t(),l={title:`Snack/Inputs & Forms/Rating`,id:`components-rating`,component:o,parameters:{layout:`padded`}},u=Object.values(i),d=Object.values(a),f=[0,1,2.5,4,5],p={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{sectionTitle:`Appearance × Size (defaultValue=3)`,firstColumnHeader:`Appearance`,columnHeaders:u.map(e=>e.toUpperCase()),rows:d.map(e=>({variantLabel:e,cells:u.map(t=>(0,c.jsx)(o,{appearance:e,size:t,count:5,defaultValue:3,allowHalf:!1,allowClear:!1,readonly:!1},`${e}-${t}`))}))}),(0,c.jsx)(n,{sectionTitle:`Value × Size (allowHalf, appearance=yellow)`,firstColumnHeader:`Value`,columnHeaders:u.map(e=>e.toUpperCase()),rows:f.map(e=>({variantLabel:String(e),cells:u.map(t=>(0,c.jsx)(o,{appearance:a.Yellow,size:t,count:5,defaultValue:e,allowHalf:!0,allowClear:!1,readonly:!1},`${e}-${t}`))}))}),(0,c.jsx)(n,{sectionTitle:`State × Size (readonly, defaultValue=2)`,firstColumnHeader:`State`,columnHeaders:u.map(e=>e.toUpperCase()),rows:[{variantLabel:`default`,cells:u.map(e=>(0,c.jsx)(o,{appearance:a.Yellow,size:e,count:5,defaultValue:2,allowHalf:!1,allowClear:!1,readonly:!1},`d-${e}`))},{variantLabel:`readonly`,cells:u.map(e=>(0,c.jsx)(o,{appearance:a.Yellow,size:e,count:5,defaultValue:2,allowHalf:!1,allowClear:!1,readonly:!0},`ro-${e}`))}]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='Appearance × Size (defaultValue=3)' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <Rating key={\`\${appearance}-\${size}\`} appearance={appearance} size={size} count={5} defaultValue={3} allowHalf={false} allowClear={false} readonly={false} />)
    }))} />
      <StoryTable sectionTitle='Value × Size (allowHalf, appearance=yellow)' firstColumnHeader='Value' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyValues.map(value => ({
      variantLabel: String(value),
      cells: keySizes.map(size => <Rating key={\`\${value}-\${size}\`} appearance={APPEARANCE.Yellow} size={size} count={5} defaultValue={value} allowHalf allowClear={false} readonly={false} />)
    }))} />
      <StoryTable sectionTitle='State × Size (readonly, defaultValue=2)' firstColumnHeader='State' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'default',
      cells: keySizes.map(size => <Rating key={\`d-\${size}\`} appearance={APPEARANCE.Yellow} size={size} count={5} defaultValue={2} allowHalf={false} allowClear={false} readonly={false} />)
    }, {
      variantLabel: 'readonly',
      cells: keySizes.map(size => <Rating key={\`ro-\${size}\`} appearance={APPEARANCE.Yellow} size={size} count={5} defaultValue={2} allowHalf={false} allowClear={false} readonly />)
    }]} />
    </>
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,l as default};
//# sourceMappingURL=Rating.VisualMatrix.stories-CcFdblNy.js.map