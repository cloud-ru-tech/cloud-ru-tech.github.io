import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bb1kR6xz.js";import{o as i,t as a}from"./src-DOiKYMdn.js";import{c as o,d as s,i as c,l,n as u,r as d,t as f}from"./visualMatrix.helpers-CaNHFrNx.js";import{n as p,t as m}from"./styles.module-B5TQqo6I.js";var h,g,_,v;e((()=>{a(),r(),s(),m(),h=t(),g={title:`Snack/Inputs & Forms/Chips/ChipChoice/Multiple`,id:`components-chips-chipchoice-multiple`,component:i.Multiple,parameters:{layout:`padded`}},_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:p.matrix,children:[(0,h.jsx)(n,{sectionTitle:`Value × Size`,firstColumnHeader:`Value`,columnHeaders:c,rows:[{variantLabel:`no value`,cells:l.map(e=>(0,h.jsx)(i.Multiple,{label:`Filter`,size:e,options:o},e))},{variantLabel:`no value + icon`,cells:l.map(e=>(0,h.jsx)(i.Multiple,{label:`Filter`,size:e,options:o,icon:f},e))},{variantLabel:`value set + icon + clear`,cells:l.map(e=>(0,h.jsx)(i.Multiple,{label:`Filter`,size:e,options:o,defaultValue:[`opt1`,`opt2`],icon:f,...d},e))}]}),(0,h.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:c,rows:u.map(({key:e,extra:t})=>({variantLabel:e,cells:l.map(e=>(0,h.jsx)(i.Multiple,{label:`Filter`,size:e,options:o,...t},e))}))})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Value × Size' firstColumnHeader='Value' columnHeaders={COLUMN_HEADERS} rows={[{
      variantLabel: 'no value',
      cells: SIZES.map(size => <ChipChoice.Multiple key={size} label='Filter' size={size} options={OPTIONS} />)
    }, {
      variantLabel: 'no value + icon',
      cells: SIZES.map(size => <ChipChoice.Multiple key={size} label='Filter' size={size} options={OPTIONS} icon={CHIP_CHOICE_ICON} />)
    }, {
      variantLabel: 'value set + icon + clear',
      cells: SIZES.map(size => <ChipChoice.Multiple key={size} label='Filter' size={size} options={OPTIONS}
      // Две опции, а не одна: при одной значение выводится подписью опции и матрица
      // повторяет Single. Форма \`N/total\` — то, чем Multiple отличается (в мастере \`2/5\`).
      defaultValue={['opt1', 'opt2']} icon={CHIP_CHOICE_ICON} {...CLEAR_BUTTON_PROPS} />)
    }]} />

      <StoryTable sectionTitle='State × Size' firstColumnHeader='State' columnHeaders={COLUMN_HEADERS} rows={CHIP_CHOICE_STATE_ROWS.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: SIZES.map(size => <ChipChoice.Multiple key={size} label='Filter' size={size} options={OPTIONS} {...extra} />)
    }))} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,g as default};
//# sourceMappingURL=ChipChoiceMultiple.VisualMatrix.stories-KOmBzkFT.js.map