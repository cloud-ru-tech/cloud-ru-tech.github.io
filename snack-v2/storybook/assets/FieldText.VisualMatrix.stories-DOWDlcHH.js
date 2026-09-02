import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D0mM8I4K.js";import{c as i,l as a}from"./src-BDPkmjAT.js";import{c as o,t as s}from"./src-BWRxLgfw.js";var c,l,u,d=e((()=>{c=`_matrix_1n9yp_4`,l=`_narrow_1n9yp_9`,u={matrix:c,narrow:l}})),f,p,m,h,g,_;e((()=>{s(),r(),d(),f=t(),p={title:`Snack/Inputs & Forms/Fields/FieldText`,id:`components-fields-fieldtext`,component:o,parameters:{layout:`fullscreen`}},m=[i.S,i.M,i.L],h=[a.Default,a.Error,a.Warning,a.Success],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:u.matrix,children:[(0,f.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:h.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(o,{size:e,validationState:t,label:`Label`,hint:t===a.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:`Value`},t))}))}),(0,f.jsx)(n,{sectionTitle:`State (size=m)`,firstColumnHeader:`State`,columnHeaders:[`Render`],rows:[{variantLabel:`placeholder`,cells:[(0,f.jsx)(o,{size:i.M,label:`Label`,placeholder:`Введите значение`},`ph`)]},{variantLabel:`readonly + copy`,cells:[(0,f.jsx)(o,{size:i.M,label:`Token`,readonly:!0,defaultValue:`sk-XXXXXXXX`},`ro`)]},{variantLabel:`disabled`,cells:[(0,f.jsx)(o,{size:i.M,label:`Label`,disabled:!0,defaultValue:`Value`},`dis`)]},{variantLabel:`required + caption`,cells:[(0,f.jsx)(o,{size:i.M,label:`Label`,required:!0,caption:`Caption`,hint:`Hint`},`req`)]},{variantLabel:`counter`,cells:[(0,f.jsx)(o,{size:i.M,label:`Label`,maxLength:40,defaultValue:`Value`},`cnt`)]}]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <FieldText key={state} size={size} validationState={state} label='Label' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue='Value' />)
    }))} />

      <StoryTable sectionTitle='State (size=m)' firstColumnHeader='State' columnHeaders={['Render']} rows={[{
      variantLabel: 'placeholder',
      cells: [<FieldText key='ph' size={SIZE.M} label='Label' placeholder='Введите значение' />]
    }, {
      variantLabel: 'readonly + copy',
      cells: [<FieldText key='ro' size={SIZE.M} label='Token' readonly defaultValue='sk-XXXXXXXX' />]
    }, {
      variantLabel: 'disabled',
      cells: [<FieldText key='dis' size={SIZE.M} label='Label' disabled defaultValue='Value' />]
    }, {
      variantLabel: 'required + caption',
      cells: [<FieldText key='req' size={SIZE.M} label='Label' required caption='Caption' hint='Hint' />]
    }, {
      variantLabel: 'counter',
      cells: [<FieldText key='cnt' size={SIZE.M} label='Label' maxLength={40} defaultValue='Value' />]
    }]} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,p as default};
//# sourceMappingURL=FieldText.VisualMatrix.stories-DOWDlcHH.js.map