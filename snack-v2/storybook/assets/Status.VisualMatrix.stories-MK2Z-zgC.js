import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CSZ3Qkp5.js";import{c as i,n as a,o,t as s}from"./src-CXm8sOyi.js";var c,l,u=e((()=>{c=`_grid_uxmz0_4`,l={grid:c}})),d,f,p,m,h,g;e((()=>{s(),r(),u(),d=t(),f={title:`Snack/Data display/Status/Status`,id:`components-status-status`,component:a,parameters:{layout:`padded`}},p=Object.values(i).flatMap(e=>[[e,!0],[e,!1]]),m=Object.values(o),h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.grid,children:[(0,d.jsx)(n,{sectionTitle:`Appearance × Size`,firstColumnHeader:`Appearance`,columnHeaders:p.map(([e,t])=>`${e} ${t?`с фоном`:`без фона`}`),rows:m.map(e=>({variantLabel:e,cells:p.map(([t,n])=>(0,d.jsx)(a,{size:t,appearance:e,label:`Label text`,background:n},t))}))}),(0,d.jsx)(n,{sectionTitle:`Loading × Size`,firstColumnHeader:`State`,columnHeaders:p.map(([e,t])=>`${e} ${t?`с фоном`:`без фона`}`),rows:[{variantLabel:`loading`,cells:p.map(([e,t])=>(0,d.jsx)(a,{size:e,label:`Label text`,background:t,loading:!0},e))}]}),(0,d.jsx)(n,{sectionTitle:`Progress × Size`,firstColumnHeader:`Appearance`,columnHeaders:p.map(([e,t])=>`${e} ${t?`с фоном`:`без фона`}`),rows:m.map(e=>({variantLabel:e,cells:p.map(([t,n])=>(0,d.jsx)(a,{size:t,appearance:e,label:`Label text`,background:n,progress:60},t))}))})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Appearance × Size' firstColumnHeader='Appearance' columnHeaders={keySizesAndBackground.map(([size, background]) => \`\${size} \${background ? 'с фоном' : 'без фона'}\`)} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizesAndBackground.map(([size, background]) => <Status key={size} size={size} appearance={appearance} label='Label text' background={background} />)
    }))} />

      {/* Одна строка: \`loading\` принудительно переводит маркер в \`neutral\`,
          поэтому строки по appearance были бы неотличимы друг от друга. */}
      <StoryTable sectionTitle='Loading × Size' firstColumnHeader='State' columnHeaders={keySizesAndBackground.map(([size, background]) => \`\${size} \${background ? 'с фоном' : 'без фона'}\`)} rows={[{
      variantLabel: 'loading',
      cells: keySizesAndBackground.map(([size, background]) => <Status key={size} size={size} label='Label text' background={background} loading />)
    }]} />

      <StoryTable sectionTitle='Progress × Size' firstColumnHeader='Appearance' columnHeaders={keySizesAndBackground.map(([size, background]) => \`\${size} \${background ? 'с фоном' : 'без фона'}\`)} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizesAndBackground.map(([size, background]) => <Status key={size} size={size} appearance={appearance} label='Label text' background={background} progress={60} />)
    }))} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,f as default};
//# sourceMappingURL=Status.VisualMatrix.stories-MK2Z-zgC.js.map