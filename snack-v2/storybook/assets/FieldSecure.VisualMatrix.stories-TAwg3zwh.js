import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BPThJ53l.js";import{c as i,l as a}from"./src-CHC-h6tZ.js";import{g as o,t as s}from"./src-Dsqmj84t.js";var c,l,u=e((()=>{c=`_matrix_dr4j8_4`,l={matrix:c}})),d,f,p,m,h,g,_,v;e((()=>{s(),r(),u(),d=t(),f={title:`Snack/Inputs & Forms/Fields/FieldSecure`,id:`components-fields-fieldsecure`,component:o,parameters:{layout:`fullscreen`}},p=[i.S,i.M,i.L],m=[a.Default,a.Error,a.Warning,a.Success],h=`sup3r-secret`,g=[{key:`empty`,extra:{defaultValue:``,placeholder:`••••••••`}},{key:`hidden value`,extra:{defaultValue:h,defaultHidden:!0}},{key:`visible value`,extra:{defaultValue:h,defaultHidden:!1}},{key:`readonly + copy`,extra:{defaultValue:h,readonly:!0,defaultHidden:!0}},{key:`readonly empty`,extra:{defaultValue:``,readonly:!0}},{key:`no hide button`,extra:{defaultValue:h,showHideButton:!1}},{key:`copy button hidden`,extra:{defaultValue:h,readonly:!0,showCopyButton:!1}},{key:`no background`,extra:{defaultValue:h,background:!1}},{key:`disabled`,extra:{defaultValue:h,disabled:!0}},{key:`error message`,extra:{defaultValue:h,error:`Wrong password`}}],_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.matrix,children:[(0,d.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:m.map(e=>e.toUpperCase()),rows:p.map(e=>({variantLabel:e,cells:m.map(t=>(0,d.jsx)(o,{size:e,validationState:t,label:`Password`,hint:t===a.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:h,defaultHidden:!0},t))}))}),(0,d.jsx)(n,{sectionTitle:`State (size=m)`,firstColumnHeader:`State`,columnHeaders:[`Render`],rows:g.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,d.jsx)(o,{size:i.M,validationState:a.Default,label:`Password`,...t},e)]}))})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <FieldSecure key={state} size={size} validationState={state} label='Password' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue={SECRET} defaultHidden />)
    }))} />

      <StoryTable sectionTitle='State (size=m)' firstColumnHeader='State' columnHeaders={['Render']} rows={stateExtras.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<FieldSecure key={key} size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Password' {...extra} />]
    }))} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,f as default};
//# sourceMappingURL=FieldSecure.VisualMatrix.stories-TAwg3zwh.js.map