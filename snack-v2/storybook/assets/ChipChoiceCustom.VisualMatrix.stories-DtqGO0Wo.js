import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CqCwb0Nr.js";import{o as i,t as a}from"./src-CoKVgEkq.js";import{d as o,i as s,l as c,n as l,r as u,t as d}from"./visualMatrix.helpers-Dnu8rVzB.js";import{n as f,t as p}from"./styles.module-B5TQqo6I.js";var m,h,g,_,v,y;e((()=>{a(),r(),o(),p(),m=t(),h={title:`Snack/Inputs & Forms/Chips/ChipChoice/Custom`,id:`components-chips-chipchoice-custom`,component:i.Custom,parameters:{layout:`padded`}},g=[`Alpha`,`Beta`,`Gamma`],_={content:()=>(0,m.jsx)(`div`,{className:f.customContent,children:g.map(e=>(0,m.jsx)(`button`,{type:`button`,className:f.customOption,children:e},e))}),valueRender:e=>e??null},v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(n,{sectionTitle:`Value × Size`,firstColumnHeader:`Value`,columnHeaders:s,rows:[{variantLabel:`no value`,cells:c.map(e=>(0,m.jsx)(i.Custom,{label:`Custom`,size:e,..._},e))},{variantLabel:`no value + icon`,cells:c.map(e=>(0,m.jsx)(i.Custom,{label:`Custom`,size:e,icon:d,..._},e))},{variantLabel:`value set + icon + clear`,cells:c.map(e=>(0,m.jsx)(i.Custom,{label:`Custom`,size:e,value:`Alpha`,icon:d,..._,...u},e))}]}),(0,m.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:s,rows:l.map(({key:e,extra:t})=>({variantLabel:e,cells:c.map(e=>(0,m.jsx)(i.Custom,{label:`Custom`,size:e,..._,...t},e))}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Value × Size' firstColumnHeader='Value' columnHeaders={COLUMN_HEADERS} rows={[{
      variantLabel: 'no value',
      cells: SIZES.map(size => <ChipChoice.Custom key={size} label='Custom' size={size} {...customProps} />)
    }, {
      variantLabel: 'no value + icon',
      cells: SIZES.map(size => <ChipChoice.Custom key={size} label='Custom' size={size} icon={CHIP_CHOICE_ICON} {...customProps} />)
    }, {
      variantLabel: 'value set + icon + clear',
      cells: SIZES.map(size => <ChipChoice.Custom key={size} label='Custom' size={size} value='Alpha' icon={CHIP_CHOICE_ICON} {...customProps} {...CLEAR_BUTTON_PROPS} />)
    }]} />

      <StoryTable sectionTitle='State × Size' firstColumnHeader='State' columnHeaders={COLUMN_HEADERS} rows={CHIP_CHOICE_STATE_ROWS.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: SIZES.map(size => <ChipChoice.Custom key={size} label='Custom' size={size} {...customProps} {...extra} />)
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,h as default};
//# sourceMappingURL=ChipChoiceCustom.VisualMatrix.stories-DtqGO0Wo.js.map