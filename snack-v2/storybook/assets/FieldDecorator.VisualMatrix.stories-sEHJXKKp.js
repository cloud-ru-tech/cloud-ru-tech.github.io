import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D4MTfTET.js";import{c as i,l as a,n as o,t as s}from"./src-CPawDvrJ.js";import{n as c,t as l}from"./styles.module-ButpTKmf.js";var u,d,f,p,m,h;e((()=>{s(),r(),l(),u=t(),d={title:`Snack/Inputs & Forms/FieldDecorator/FieldDecorator`,id:`components-fielddecorator-fielddecorator`,component:o,parameters:{layout:`fullscreen`}},f=Object.values(i),p=Object.values(a),m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:c.grid,children:[(0,u.jsx)(n,{sectionTitle:`ValidationState × Size`,firstColumnHeader:`ValidationState`,columnHeaders:f.map(e=>e.toUpperCase()),rows:p.map(e=>({variantLabel:e,cells:f.map(t=>(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{size:t,validationState:e,label:`Заголовок`,required:!0,caption:`Подпись`,labelTooltip:{tip:`Пояснение`},hint:`Текст подсказки`,showHintIcon:!0,length:{current:12,max:100},children:(0,u.jsx)(`input`,{className:c.input,placeholder:`Значение`})})},t))}))}),(0,u.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:f.map(e=>e.toUpperCase()),rows:[{variantLabel:`disabled`,cells:f.map(e=>(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{size:e,label:`Заголовок`,hint:`Подсказка`,length:{current:12,max:100},disabled:!0,children:(0,u.jsx)(`input`,{className:c.input,placeholder:`Значение`,disabled:!0})})},e))},{variantLabel:`readonly`,cells:f.map(e=>(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{size:e,label:`Заголовок`,validationState:a.Error,hint:`Подсказка`,showHintIcon:!0,readonly:!0,children:(0,u.jsx)(`input`,{className:c.input,placeholder:`Значение`,readOnly:!0})})},e))}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='ValidationState × Size' firstColumnHeader='ValidationState' columnHeaders={sizes.map(s => s.toUpperCase())} rows={validationStates.map(validationState => ({
      variantLabel: validationState,
      cells: sizes.map(size => <div key={size} className={styles.cell}>
              <FieldDecorator size={size} validationState={validationState} label='Заголовок' required caption='Подпись' labelTooltip={{
          tip: 'Пояснение'
        }} hint='Текст подсказки' showHintIcon length={{
          current: 12,
          max: 100
        }}>
                <input className={styles.input} placeholder='Значение' />
              </FieldDecorator>
            </div>)
    }))} />
      <StoryTable sectionTitle='State × Size' firstColumnHeader='State' columnHeaders={sizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'disabled',
      cells: sizes.map(size => <div key={size} className={styles.cell}>
                <FieldDecorator size={size} label='Заголовок' hint='Подсказка' length={{
          current: 12,
          max: 100
        }} disabled>
                  <input className={styles.input} placeholder='Значение' disabled />
                </FieldDecorator>
              </div>)
    }, {
      variantLabel: 'readonly',
      cells: sizes.map(size => <div key={size} className={styles.cell}>
                <FieldDecorator size={size} label='Заголовок' validationState={VALIDATION_STATE.Error} hint='Подсказка' showHintIcon readonly>
                  <input className={styles.input} placeholder='Значение' readOnly />
                </FieldDecorator>
              </div>)
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,d as default};
//# sourceMappingURL=FieldDecorator.VisualMatrix.stories-sEHJXKKp.js.map