import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bl-uTAel.js";import{c as i,l as a,o,t as s}from"./src-Cc8YYHyl.js";import{n as c,t as l}from"./styles.module-ButpTKmf.js";var u,d,f,p,m,h;e((()=>{s(),r(),l(),u=t(),d={title:`Snack/Inputs & Forms/FieldDecorator/Hint`,id:`components-fielddecorator-hint`,component:o,parameters:{layout:`fullscreen`}},f=Object.values(i),p=Object.values(a),m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:c.grid,children:[(0,u.jsx)(n,{sectionTitle:`ValidationState × Size`,firstColumnHeader:`ValidationState`,columnHeaders:f.map(e=>e.toUpperCase()),rows:p.map(e=>({variantLabel:e,cells:f.map(t=>(0,u.jsx)(o,{size:t,validationState:e,showHintIcon:!0,hint:`Текст подсказки`},t))}))}),(0,u.jsx)(n,{sectionTitle:`Counter × Size`,firstColumnHeader:`Counter`,columnHeaders:f.map(e=>e.toUpperCase()),rows:[{variantLabel:`within limit`,cells:f.map(e=>(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{size:e,hint:`Подсказка`,length:{current:12,max:100}})},e))},{variantLabel:`limit exceeded`,cells:f.map(e=>(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{size:e,hint:`Подсказка`,length:{current:120,max:100}})},e))}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='ValidationState × Size' firstColumnHeader='ValidationState' columnHeaders={sizes.map(s => s.toUpperCase())} rows={validationStates.map(validationState => ({
      variantLabel: validationState,
      cells: sizes.map(size => <Hint key={size} size={size} validationState={validationState} showHintIcon hint='Текст подсказки' />)
    }))} />
      <StoryTable sectionTitle='Counter × Size' firstColumnHeader='Counter' columnHeaders={sizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'within limit',
      cells: sizes.map(size => <div key={size} className={styles.cell}>
                <Hint size={size} hint='Подсказка' length={{
          current: 12,
          max: 100
        }} />
              </div>)
    }, {
      variantLabel: 'limit exceeded',
      cells: sizes.map(size => <div key={size} className={styles.cell}>
                <Hint size={size} hint='Подсказка' length={{
          current: 120,
          max: 100
        }} />
              </div>)
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,d as default};
//# sourceMappingURL=Hint.VisualMatrix.stories-Dp7VxfsR.js.map