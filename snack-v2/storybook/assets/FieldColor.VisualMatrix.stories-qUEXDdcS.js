import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BiKgHgfb.js";import{c as i,l as a}from"./src-D9XoAzol.js";import{t as o,w as s}from"./src-CAvT0rqJ.js";var c,l,u=e((()=>{c=`_matrix_dr4j8_4`,l={matrix:c}})),d,f,p,m,h,g,_;e((()=>{o(),r(),u(),d=t(),f={title:`Snack/Inputs & Forms/Fields/FieldColor`,id:`components-fields-fieldcolor`,component:s},p=[i.S,i.M,i.L],m=[a.Default,a.Error,a.Warning,a.Success],h=[{key:`empty`,extra:{defaultValue:``}},{key:`filled`,extra:{defaultValue:`#ff5722`}},{key:`alpha`,extra:{defaultValue:`rgba(33,150,243,0.5)`}},{key:`disabled`,extra:{defaultValue:`#4caf50`,disabled:!0}},{key:`readonly`,extra:{defaultValue:`#9c27b0`,readonly:!0}}],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.matrix,children:[(0,d.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:m.map(e=>e.toUpperCase()),rows:p.map(e=>({variantLabel:e,cells:m.map(t=>(0,d.jsx)(s,{size:e,validationState:t,label:`Color`,hint:t===a.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:`#1976d2`},t))}))}),(0,d.jsx)(n,{sectionTitle:`State (size=m)`,firstColumnHeader:`State`,columnHeaders:[`Render`],rows:h.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,d.jsx)(s,{size:i.M,validationState:a.Default,label:`Color`,...t},e)]}))}),(0,d.jsx)(n,{sectionTitle:`Background (size=m)`,firstColumnHeader:`Background`,columnHeaders:[`Render`],rows:[{variantLabel:`true (acrylic shell)`,cells:[(0,d.jsx)(s,{size:i.M,validationState:a.Default,label:`Color`,background:!0,defaultValue:`#1976d2`},`bg-on`)]},{variantLabel:`false (no acrylic)`,cells:[(0,d.jsx)(s,{size:i.M,validationState:a.Default,label:`Color`,background:!1,defaultValue:`#1976d2`},`bg-off`)]}]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <FieldColor key={state} size={size} validationState={state} label='Color' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue='#1976d2' />)
    }))} />

      <StoryTable sectionTitle='State (size=m)' firstColumnHeader='State' columnHeaders={['Render']} rows={stateExtras.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<FieldColor key={key} size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Color' {...extra} />]
    }))} />

      <StoryTable sectionTitle='Background (size=m)' firstColumnHeader='Background' columnHeaders={['Render']} rows={[{
      variantLabel: 'true (acrylic shell)',
      cells: [<FieldColor key='bg-on' size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Color' background defaultValue='#1976d2' />]
    }, {
      variantLabel: 'false (no acrylic)',
      cells: [<FieldColor key='bg-off' size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Color' background={false} defaultValue='#1976d2' />]
    }]} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,f as default};
//# sourceMappingURL=FieldColor.VisualMatrix.stories-qUEXDdcS.js.map