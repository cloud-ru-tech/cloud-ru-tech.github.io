import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BiKgHgfb.js";import{_n as i,dt as a,lt as o,t as s,tt as c,yn as l}from"./system-CK__Birm.js";import{a as u,t as d}from"./src-Bm0LqAUs.js";import{c as f,l as p}from"./src-D9XoAzol.js";import{i as m,t as h}from"./src-CAvT0rqJ.js";var g,_,v=e((()=>{g=`_matrix_dr4j8_4`,_={matrix:g}})),y,b,x,S,C,w,T;e((()=>{d(),h(),s(),r(),v(),y=t(),b={title:`Snack/Inputs & Forms/Fields/FieldTextArea`,id:`components-fields-fieldtextarea`,component:m},x=Object.values(f),S=Object.values(p),C=[{key:`empty`,extra:{defaultValue:``,placeholder:`Type your message`}},{key:`filled`,extra:{defaultValue:`Sample multi-line
content in textarea.`}},{key:`with length`,extra:{defaultValue:`Hello world`,maxLength:80}},{key:`limit exceeded`,extra:{defaultValue:`Far beyond the cap`,maxLength:10,allowMoreThanMaxLength:!0}},{key:`maxRows reached`,extra:{defaultValue:[`Line one of a long message`,`Line two extends the content`,`Line three forces overflow`,`Line four hits the scroll`,`Line five keeps going further`].join(`
`),minRows:1,maxRows:3}},{key:`resizable`,extra:{defaultValue:`Drag bottom-right to resize.`,resizable:!0}},{key:`with footer`,extra:{defaultValue:`Filled value above footer.`,footer:(0,y.jsx)(u,{size:`s`,label:`Отправить`})}},{key:`with header`,extra:{defaultValue:`Value below a header toolbar.`,header:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(l,{})}),(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(i,{})}),(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(o,{})})]})}},{key:`before + after toolbars`,extra:{defaultValue:`Toolbars above and below the value.`,header:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(l,{})}),(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(i,{})}),(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(o,{})})]}),footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(c,{})}),(0,y.jsx)(u,{size:`s`,view:`function`,appearance:`neutral`,icon:(0,y.jsx)(a,{})})]})}},{key:`no background`,extra:{defaultValue:`No acrylic background.`,background:!1}},{key:`readonly`,extra:{defaultValue:`Read-only multi-line value.`,readonly:!0}},{key:`disabled`,extra:{defaultValue:`Disabled value.`,disabled:!0}},{key:`error overrides success`,extra:{defaultValue:`Resolved with an error.`,validationState:p.Success,error:`Server rejected the comment`}}],w={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,y.jsxs)(`div`,{className:_.matrix,children:[(0,y.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:S.map(e=>e.toUpperCase()),rows:x.map(e=>({variantLabel:e,cells:S.map(t=>(0,y.jsx)(m,{size:e,validationState:t,label:`Comment`,hint:t===p.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:`Multi-line value
second line
third line`,minRows:2},t))}))}),(0,y.jsx)(n,{sectionTitle:`State (size=m)`,firstColumnHeader:`State`,columnHeaders:[`Render`],rows:C.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,y.jsx)(m,{size:f.M,validationState:p.Default,label:`Comment`,minRows:2,...t},e)]}))})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <FieldTextArea key={state} size={size} validationState={state} label='Comment' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue={'Multi-line value\\nsecond line\\nthird line'} minRows={2} />)
    }))} />

      <StoryTable sectionTitle='State (size=m)' firstColumnHeader='State' columnHeaders={['Render']} rows={stateRows.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<FieldTextArea key={key} size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Comment' minRows={2} {...extra} />]
    }))} />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`VisualMatrix`]}))();export{w as VisualMatrix,T as __namedExportsOrder,b as default};
//# sourceMappingURL=FieldTextArea.VisualMatrix.stories-JWC80QI1.js.map