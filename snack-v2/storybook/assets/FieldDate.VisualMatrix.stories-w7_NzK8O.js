import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C96OK3Oq.js";import{c as i,l as a}from"./src-DDlhtxHr.js";import{b as o,t as s,v as c}from"./src-D5iCeaF_.js";var l,u,d,f=e((()=>{l=`_matrix_14g3q_1`,u=`_narrow_14g3q_6`,d={matrix:l,narrow:u}})),p,m,h,g,_,v,y,b,x,S;e((()=>{s(),r(),f(),p=t(),m={title:`Snack/Inputs & Forms/Fields/FieldDate`,id:`components-fields-fielddate`,component:c,parameters:{controls:{disable:!0}}},h=[i.S,i.M,i.L],g=[a.Default,a.Error,a.Warning,a.Success],_=new Date(2026,4,17),v=new Date(2026,4,24),y=new Date(2026,4,17,14,30,45),b=[{key:`empty (date)`,extra:{}},{key:`filled (date)`,extra:{defaultValue:_}},{key:`empty (date-time)`,extra:{mode:o.DateTime}},{key:`filled (date-time)`,extra:{mode:o.DateTime,defaultValue:y}},{key:`filled (date-time, showSeconds=false)`,extra:{mode:o.DateTime,showSeconds:!1,defaultValue:y}},{key:`empty (date-range)`,extra:{mode:o.DateRange}},{key:`filled (date-range)`,extra:{mode:o.DateRange,defaultValue:[_,v]}},{key:`filled (date-range, partial [from, —])`,extra:{mode:o.DateRange,defaultValue:[_,void 0]}},{key:`disabled`,extra:{defaultValue:_,disabled:!0}},{key:`readonly`,extra:{defaultValue:_,readonly:!0}}],x={tags:[`test`,`dev`],render:()=>(0,p.jsxs)(`div`,{className:d.matrix,children:[(0,p.jsx)(n,{sectionTitle:`Size × ValidationState (date, filled 17.05.2026)`,firstColumnHeader:`Size`,columnHeaders:g.map(e=>e.toUpperCase()),rows:h.map(e=>({variantLabel:e,cells:g.map(t=>(0,p.jsx)(`div`,{className:d.narrow,children:(0,p.jsx)(c,{size:e,validationState:t,label:`Label`,hint:t===a.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:_})},t))}))}),(0,p.jsx)(n,{sectionTitle:`Mode & state (size=m)`,firstColumnHeader:`Variant`,columnHeaders:[`Render`],cellAlign:`start`,rows:b.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,p.jsx)(c,{size:i.M,label:`Label`,...t},e)]}))})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState (date, filled 17.05.2026)' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <div key={state} className={styles.narrow}>
              <FieldDate size={size} validationState={state} label='Label' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue={fixedDate} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Mode & state (size=m)' firstColumnHeader='Variant' columnHeaders={['Render']} cellAlign='start' rows={modes.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      // Без .narrow: поле занимает всю ширину ячейки — показывает full-width-раскладку
      // (\`fieldWrapper\` тянется на 100% контейнера формы).
      cells: [<FieldDate key={key} size={SIZE.M} label='Label' {...extra as FieldDateProps} />]
    }))} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,m as default};
//# sourceMappingURL=FieldDate.VisualMatrix.stories-w7_NzK8O.js.map