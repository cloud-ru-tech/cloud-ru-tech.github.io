import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CvASAC9b.js";import{c as i,l as a}from"./src-BSazwCyp.js";import{t as o,u as s}from"./src-CgSRkehH.js";var c,l,u,d=e((()=>{c=`_matrix_qm7cm_4`,l=`_stepper_qm7cm_9`,u={matrix:c,stepper:l}})),f,p,m,h,g,_,v,y;e((()=>{o(),r(),d(),f=t(),p={title:`Snack/Inputs & Forms/Fields/FieldStepper`,id:`components-fields-fieldstepper`,component:s},m=[i.S,i.M,i.L],h=[a.Default,a.Error,a.Warning,a.Success],g=[{key:`default`,extra:{defaultValue:5}},{key:`with postfix`,extra:{defaultValue:12,postfix:`шт`}},{key:`with prefix`,extra:{defaultValue:100,prefix:`₽`}},{key:`prefix + postfix`,extra:{defaultValue:100,prefix:`₽`,postfix:`шт`}},{key:`at min (− disabled)`,extra:{defaultValue:0,min:0,max:10}},{key:`at max (+ disabled)`,extra:{defaultValue:10,min:0,max:10}},{key:`fractional step`,extra:{defaultValue:1.5,step:.5}},{key:`background=false`,extra:{defaultValue:5,background:!1}}],_=[{key:`default`,extra:{}},{key:`readonly`,extra:{readonly:!0}},{key:`disabled`,extra:{disabled:!0}}],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:u.matrix,children:[(0,f.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:h.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(s,{className:u.stepper,size:e,validationState:t,label:`Quantity`,hint:t===a.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:5,postfix:`шт`},t))}))}),(0,f.jsx)(n,{sectionTitle:`Slots & numeric states (size=m)`,firstColumnHeader:`State`,columnHeaders:[`Render`],rows:g.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,f.jsx)(s,{className:u.stepper,size:i.M,validationState:a.Default,label:`Quantity`,...t},e)]}))}),(0,f.jsx)(n,{sectionTitle:`Size × Interactivity`,firstColumnHeader:`Size`,columnHeaders:_.map(e=>e.key.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:_.map(({key:t,extra:n})=>(0,f.jsx)(s,{className:u.stepper,size:e,validationState:a.Default,label:`Quantity`,defaultValue:5,postfix:`шт`,...n},t))}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <FieldStepper key={state} className={styles.stepper} size={size} validationState={state} label='Quantity' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue={5} postfix='шт' />)
    }))} />

      <StoryTable sectionTitle='Slots & numeric states (size=m)' firstColumnHeader='State' columnHeaders={['Render']} rows={slotsAndStates.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<FieldStepper key={key} className={styles.stepper} size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Quantity' {...extra} />]
    }))} />

      <StoryTable sectionTitle='Size × Interactivity' firstColumnHeader='Size' columnHeaders={interactivity.map(i => i.key.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: interactivity.map(({
        key,
        extra
      }) => <FieldStepper key={key} className={styles.stepper} size={size} validationState={VALIDATION_STATE.Default} label='Quantity' defaultValue={5} postfix='шт' {...extra} />)
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,p as default};
//# sourceMappingURL=FieldStepper.VisualMatrix.stories-BSwMLtJy.js.map