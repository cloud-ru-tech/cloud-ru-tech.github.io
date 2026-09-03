import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BPThJ53l.js";import{c as i,n as a,o,t as s}from"./src-BcNffwa4.js";var c,l,u=e((()=>{c=`_grid_uxmz0_4`,l={grid:c}})),d,f,p,m,h,g,_;e((()=>{s(),r(),u(),d=t(),f={title:`Snack/Inputs & Forms/ColorPicker`,id:`components-colorpicker`,component:a,parameters:{layout:`padded`}},p=[i.S,i.M,i.L],m=[o.Hex,o.Rgb,o.Hsv],h=[{key:o.Hex,available:[o.Hex]},{key:o.Rgb,available:[o.Rgb]},{key:o.Hsv,available:[o.Hsv]}],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.grid,children:[(0,d.jsx)(n,{sectionTitle:`Size × ColorModel (autoApply, withAlpha)`,firstColumnHeader:`ColorModel`,columnHeaders:p.map(e=>e.toUpperCase()),rows:h.map(({key:e,available:t})=>({variantLabel:e,cells:p.map(n=>(0,d.jsx)(a,{size:n,autoApply:!0,withAlpha:!0,value:`#ff0000`,availableModes:[...t]},`${e}-${n}`))}))}),(0,d.jsx)(n,{sectionTitle:`Size × Alpha (Hex, autoApply)`,firstColumnHeader:`Alpha`,columnHeaders:p.map(e=>e.toUpperCase()),rows:[{variantLabel:`withAlpha`,cells:p.map(e=>(0,d.jsx)(a,{size:e,autoApply:!0,withAlpha:!0,value:`#ff0000cc`,availableModes:[o.Hex]},`alpha-${e}`))},{variantLabel:`noAlpha`,cells:p.map(e=>(0,d.jsx)(a,{size:e,autoApply:!0,withAlpha:!1,value:`#ff0000`,availableModes:[o.Hex]},`noalpha-${e}`))}]}),(0,d.jsx)(n,{sectionTitle:`Footer (autoApply on/off, size m)`,firstColumnHeader:`Mode`,columnHeaders:[`Hex`],rows:[{variantLabel:`autoApply`,cells:[(0,d.jsx)(a,{size:`m`,autoApply:!0,value:`#ff0000`,availableModes:[o.Hex]},`auto`)]},{variantLabel:`manual`,cells:[(0,d.jsx)(a,{size:`m`,autoApply:!1,value:`#ff0000`,availableModes:[o.Hex]},`manual`)]}]}),(0,d.jsx)(n,{sectionTitle:`withColorArea (size m, Hex, autoApply)`,firstColumnHeader:`withColorArea`,columnHeaders:[`Layout`],rows:[{variantLabel:`true (2D area)`,cells:[(0,d.jsx)(a,{size:`m`,autoApply:!0,withColorArea:!0,value:`#ff0000`,availableModes:[o.Hex]},`with-area`)]},{variantLabel:`false (compact)`,cells:[(0,d.jsx)(a,{size:`m`,autoApply:!0,withColorArea:!1,value:`#ff0000`,availableModes:[o.Hex]},`no-area`)]}]}),(0,d.jsx)(n,{sectionTitle:`Full switcher (all modes, size × active mode)`,firstColumnHeader:`Active mode`,columnHeaders:p.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:p.map(t=>(0,d.jsx)(a,{size:t,autoApply:!0,withAlpha:!0,value:`#ff0000cc`,availableModes:[e,...m.filter(t=>t!==e)]},`full-${e}-${t}`))}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Size × ColorModel (autoApply, withAlpha)' firstColumnHeader='ColorModel' columnHeaders={sizes.map(s => s.toUpperCase())} rows={modes.map(({
      key,
      available
    }) => ({
      variantLabel: key,
      cells: sizes.map(size => <ColorPicker key={\`\${key}-\${size}\`} size={size} autoApply withAlpha value='#ff0000' availableModes={[...available]} />)
    }))} />

      <StoryTable sectionTitle='Size × Alpha (Hex, autoApply)' firstColumnHeader='Alpha' columnHeaders={sizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'withAlpha',
      cells: sizes.map(size => <ColorPicker key={\`alpha-\${size}\`} size={size} autoApply withAlpha value='#ff0000cc' availableModes={[COLOR_MODE.Hex]} />)
    }, {
      variantLabel: 'noAlpha',
      cells: sizes.map(size => <ColorPicker key={\`noalpha-\${size}\`} size={size} autoApply withAlpha={false} value='#ff0000' availableModes={[COLOR_MODE.Hex]} />)
    }]} />

      <StoryTable sectionTitle='Footer (autoApply on/off, size m)' firstColumnHeader='Mode' columnHeaders={['Hex']} rows={[{
      variantLabel: 'autoApply',
      cells: [<ColorPicker key='auto' size='m' autoApply value='#ff0000' availableModes={[COLOR_MODE.Hex]} />]
    }, {
      variantLabel: 'manual',
      cells: [<ColorPicker key='manual' size='m' autoApply={false} value='#ff0000' availableModes={[COLOR_MODE.Hex]} />]
    }]} />

      <StoryTable sectionTitle='withColorArea (size m, Hex, autoApply)' firstColumnHeader='withColorArea' columnHeaders={['Layout']} rows={[{
      variantLabel: 'true (2D area)',
      cells: [<ColorPicker key='with-area' size='m' autoApply withColorArea value='#ff0000' availableModes={[COLOR_MODE.Hex]} />]
    }, {
      variantLabel: 'false (compact)',
      cells: [<ColorPicker key='no-area' size='m' autoApply withColorArea={false} value='#ff0000' availableModes={[COLOR_MODE.Hex]} />]
    }]} />

      <StoryTable sectionTitle='Full switcher (all modes, size × active mode)' firstColumnHeader='Active mode' columnHeaders={sizes.map(s => s.toUpperCase())} rows={allModes.map(active => ({
      variantLabel: active,
      cells: sizes.map(size => <ColorPicker key={\`full-\${active}-\${size}\`} size={size} autoApply withAlpha value='#ff0000cc' availableModes={[active, ...allModes.filter(mode => mode !== active)]} />)
    }))} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,f as default};
//# sourceMappingURL=ColorPicker.VisualMatrix.stories-COjXejl_.js.map