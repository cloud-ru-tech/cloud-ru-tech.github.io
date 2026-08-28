import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CSZ3Qkp5.js";import{n as i,t as a}from"./src-Bw0YgCGK.js";var o,s,c,l,u=e((()=>{o=`_matrix_dylx2_4`,s=`_column_dylx2_9`,c=`_columnNarrow_dylx2_16`,l={matrix:o,column:s,columnNarrow:c}})),d,f,p,m,h,g;e((()=>{a(),r(),u(),d=t(),f={title:`Uikit Product/Inputs & Forms/ConfigSelector`,id:`uikit-product-configselector`,component:i,parameters:{layout:`padded`}},p={label:`Конфигурация`,checked:!1,onChange:()=>{}},m=[{key:`default`,extra:{}},{key:`available`,extra:{available:!0}},{key:`checked`,extra:{checked:!0}},{key:`availableChecked`,extra:{available:!0,checked:!0}},{key:`disabled`,extra:{disabled:!0}},{key:`disabledChecked`,extra:{disabled:!0,checked:!0}},{key:`availableDisabled`,extra:{available:!0,disabled:!0}},{key:`availableDisabledChecked`,extra:{available:!0,disabled:!0,checked:!0}}],h={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.matrix,children:[(0,d.jsx)(n,{sectionTitle:`Состояния`,firstColumnHeader:`State`,columnHeaders:[`Chip`],rows:m.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,d.jsx)(`div`,{className:l.column,children:(0,d.jsx)(i,{...p,...t})},e)]}))}),(0,d.jsx)(n,{sectionTitle:`Truncation`,firstColumnHeader:`Variant`,columnHeaders:[`Chip`],rows:[{variantLabel:`longLabel`,cells:[(0,d.jsx)(`div`,{className:l.columnNarrow,children:(0,d.jsx)(i,{...p,label:`Очень длинная конфигурация, которая не помещается целиком`})},`longLabel`)]}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // no-a11y: статичная матрица без интерактивного фокуса; a11y проверяется на Playground/InteractionTest.
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Состояния' firstColumnHeader='State' columnHeaders={['Chip']} rows={states.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<div key={key} className={styles.column}>
              <ConfigSelector {...baseProps} {...extra} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Truncation' firstColumnHeader='Variant' columnHeaders={['Chip']} rows={[{
      variantLabel: 'longLabel',
      cells: [<div key='longLabel' className={styles.columnNarrow}>
                <ConfigSelector {...baseProps} label='Очень длинная конфигурация, которая не помещается целиком' />
              </div>]
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,f as default};
//# sourceMappingURL=ConfigSelector.VisualMatrix.stories-BQLzkPIi.js.map