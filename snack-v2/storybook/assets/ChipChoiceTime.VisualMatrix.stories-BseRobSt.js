import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D4MTfTET.js";import{o as i,t as a}from"./src-CPBXY9Tq.js";import{d as o,i as s,l as c,n as l,r as u,t as d,u as f}from"./visualMatrix.helpers-C7pO4tSW.js";import{n as p,t as m}from"./styles.module-B5TQqo6I.js";var h,g,_,v;e((()=>{a(),r(),o(),m(),h=t(),g={title:`Snack/Inputs & Forms/Chips/ChipChoice/Time`,id:`components-chips-chipchoice-time`,component:i.Time,parameters:{layout:`padded`}},_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:p.matrix,children:[(0,h.jsx)(n,{sectionTitle:`Value × Size`,firstColumnHeader:`Value`,columnHeaders:s,rows:[{variantLabel:`no value`,cells:c.map(e=>(0,h.jsx)(i.Time,{label:`Time`,size:e},e))},{variantLabel:`no value + icon`,cells:c.map(e=>(0,h.jsx)(i.Time,{label:`Time`,size:e,icon:d},e))},{variantLabel:`value set + icon + clear`,cells:c.map(e=>(0,h.jsx)(i.Time,{label:`Time`,size:e,defaultValue:f,icon:d,...u},e))}]}),(0,h.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:s,rows:l.map(({key:e,extra:t})=>({variantLabel:e,cells:c.map(e=>(0,h.jsx)(i.Time,{label:`Time`,size:e,...t},e))}))})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Value × Size' firstColumnHeader='Value' columnHeaders={COLUMN_HEADERS} rows={[{
      variantLabel: 'no value',
      cells: SIZES.map(size => <ChipChoice.Time key={size} label='Time' size={size} />)
    }, {
      variantLabel: 'no value + icon',
      cells: SIZES.map(size => <ChipChoice.Time key={size} label='Time' size={size} icon={CHIP_CHOICE_ICON} />)
    }, {
      variantLabel: 'value set + icon + clear',
      cells: SIZES.map(size => <ChipChoice.Time key={size} label='Time' size={size} defaultValue={TIME_VALUE} icon={CHIP_CHOICE_ICON} {...CLEAR_BUTTON_PROPS} />)
    }]} />

      <StoryTable sectionTitle='State × Size' firstColumnHeader='State' columnHeaders={COLUMN_HEADERS} rows={CHIP_CHOICE_STATE_ROWS.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: SIZES.map(size => <ChipChoice.Time key={size} label='Time' size={size} {...extra} />)
    }))} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,g as default};
//# sourceMappingURL=ChipChoiceTime.VisualMatrix.stories-BseRobSt.js.map