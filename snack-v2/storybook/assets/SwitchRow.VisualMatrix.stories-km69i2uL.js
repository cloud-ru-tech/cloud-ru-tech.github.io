import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BLXw10_m.js";import{i,n as a,t as o}from"./src-g9-px9Pr.js";import{n as s,t as c}from"./styles.module-Cr-FuABY.js";var l,u,d,f,p,m,h;e((()=>{o(),r(),c(),l=t(),u={title:`Uikit Product/Inputs & Forms/SwitchRow`,id:`uikit-product-switchrow`,component:a,parameters:{layout:`padded`}},d=[i.Block,i.Line],f=[{key:`default`,extra:{}},{key:`checked`,extra:{defaultChecked:!0}},{key:`disabled`,extra:{disabled:!0}},{key:`disabledChecked`,extra:{disabled:!0,defaultChecked:!0}},{key:`loading`,extra:{loading:!0}}],p={title:`Уведомления`,description:`Раз в сутки будет приходить дайджест событий`},m={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:s.matrix,children:[(0,l.jsx)(n,{sectionTitle:`State × Type`,firstColumnHeader:`State`,columnHeaders:d.map(e=>e.toUpperCase()),rows:f.map(({key:e,extra:t})=>({variantLabel:e,cells:d.map(e=>(0,l.jsx)(`div`,{className:s.column,children:(0,l.jsx)(a,{...p,...t,type:e})},e))}))}),(0,l.jsx)(n,{sectionTitle:`Tip + truncation × Type`,firstColumnHeader:`Variant`,columnHeaders:d.map(e=>e.toUpperCase()),rows:[{variantLabel:`withTip`,cells:d.map(e=>(0,l.jsx)(`div`,{className:s.column,children:(0,l.jsx)(a,{...p,type:e,tip:`Подсказка`})},e))},{variantLabel:`disableTruncate`,cells:d.map(e=>(0,l.jsx)(`div`,{className:s.column,children:(0,l.jsx)(a,{...p,type:e,title:`Очень длинный заголовок, который должен помещаться целиком без обрезания хвоста`,disableTitleTruncate:!0})},e))}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State × Type' firstColumnHeader='State' columnHeaders={keyTypes.map(t => t.toUpperCase())} rows={states.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: keyTypes.map(type => <div key={type} className={styles.column}>
              <SwitchRow {...baseProps} {...extra} type={type} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Tip + truncation × Type' firstColumnHeader='Variant' columnHeaders={keyTypes.map(t => t.toUpperCase())} rows={[{
      variantLabel: 'withTip',
      cells: keyTypes.map(type => <div key={type} className={styles.column}>
                <SwitchRow {...baseProps} type={type} tip='Подсказка' />
              </div>)
    }, {
      variantLabel: 'disableTruncate',
      cells: keyTypes.map(type => <div key={type} className={styles.column}>
                <SwitchRow {...baseProps} type={type} title='Очень длинный заголовок, который должен помещаться целиком без обрезания хвоста' disableTitleTruncate />
              </div>)
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,u as default};
//# sourceMappingURL=SwitchRow.VisualMatrix.stories-km69i2uL.js.map