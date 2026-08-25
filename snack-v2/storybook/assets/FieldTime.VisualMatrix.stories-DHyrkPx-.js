import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BUDedHtH.js";import{c as i,l as a}from"./src-hToqxYip.js";import{n as o,t as s}from"./src-BEoLLotU.js";var c,l,u,d=e((()=>{c=`_matrix_dgp3m_4`,l=`_narrow_dgp3m_9`,u={matrix:c,narrow:l}})),f,p,m,h,g,_,v,y,b;e((()=>{s(),r(),d(),f=t(),p={title:`Snack/Inputs & Forms/Fields/FieldTime`,id:`components-fields-fieldtime`,component:o,parameters:{controls:{disable:!0}}},m=[i.S,i.M,i.L],h=[a.Default,a.Error,a.Warning,a.Success],g={hours:14,minutes:25,seconds:36},_=[{key:`empty`,extra:{}},{key:`filled`,extra:{defaultValue:g}},{key:`disabled`,extra:{defaultValue:g,disabled:!0}},{key:`readonly`,extra:{defaultValue:g,readonly:!0}}],v=[{key:`showSeconds=true (чч:мм:сс)`,extra:{showSeconds:!0}},{key:`showSeconds=false (чч:мм)`,extra:{showSeconds:!1}}],y={tags:[`test`,`dev`],render:()=>(0,f.jsxs)(`div`,{className:u.matrix,children:[(0,f.jsx)(n,{sectionTitle:`Size × ValidationState (filled 14:25:36)`,firstColumnHeader:`Size`,columnHeaders:h.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(`div`,{className:u.narrow,children:(0,f.jsx)(o,{size:e,validationState:t,label:`Время`,hint:t===a.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:g})},t))}))}),(0,f.jsx)(n,{sectionTitle:`State (size=m)`,firstColumnHeader:`State`,columnHeaders:[`Render`],cellAlign:`start`,rows:_.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,f.jsx)(o,{size:i.M,validationState:a.Default,label:`Время`,...t},e)]}))}),(0,f.jsx)(n,{sectionTitle:`Mask: seconds on/off (size=m)`,firstColumnHeader:`Mask`,columnHeaders:[`Empty`,`Filled`],rows:v.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,f.jsx)(`div`,{className:u.narrow,children:(0,f.jsx)(o,{size:i.M,label:`Время`,...t})},`${e}-empty`),(0,f.jsx)(`div`,{className:u.narrow,children:(0,f.jsx)(o,{size:i.M,label:`Время`,defaultValue:g,...t})},`${e}-filled`)]}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState (filled 14:25:36)' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <div key={state} className={styles.narrow}>
              <FieldTime size={size} validationState={state} label='Время' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue={sample} />
            </div>)
    }))} />

      <StoryTable sectionTitle='State (size=m)' firstColumnHeader='State' columnHeaders={['Render']} cellAlign='start' rows={stateExtras.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      // Без .narrow: поле на всю ширину ячейки — показывает full-width-раскладку
      // (\`fieldWrapper\` тянется на 100% контейнера формы).
      cells: [<FieldTime key={key} size={SIZE.M} validationState={VALIDATION_STATE.Default} label='Время' {...extra} />]
    }))} />

      <StoryTable sectionTitle='Mask: seconds on/off (size=m)' firstColumnHeader='Mask' columnHeaders={['Empty', 'Filled']} rows={maskRows.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<div key={\`\${key}-empty\`} className={styles.narrow}>
              <FieldTime size={SIZE.M} label='Время' {...extra} />
            </div>, <div key={\`\${key}-filled\`} className={styles.narrow}>
              <FieldTime size={SIZE.M} label='Время' defaultValue={sample} {...extra} />
            </div>]
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,p as default};
//# sourceMappingURL=FieldTime.VisualMatrix.stories-DHyrkPx-.js.map