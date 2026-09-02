import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-D4MTfTET.js";import{a as o,i as s,n as c,s as l,t as u}from"./src-D3-d4AY2.js";import{n as d,t as f}from"./styles.module-BmYlXWN8.js";var p,m,h,g,_,v,y,b;t((()=>{u(),p=e(r(),1),a(),f(),m=n(),h={title:`Snack/Layout & containers/Divider`,id:`components-divider`,component:c,parameters:{layout:`padded`}},g=Object.values(s),_=Object.values(l),v=Object.values(o),y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:d.grid,children:[(0,m.jsx)(i,{sectionTitle:`Variant × Orientation`,firstColumnHeader:`Variant`,columnHeaders:v.map(e=>e.charAt(0).toUpperCase()+e.slice(1)),rows:_.map(e=>({variantLabel:e,cells:v.map(t=>(0,m.jsx)(`div`,{className:t===o.Vertical?d.matrixCellVertical:d.matrixCellHorizontal,children:(0,m.jsx)(c,{variant:e,orientation:t})},t))}))}),(0,m.jsx)(i,{sectionTitle:`Appearance × Variant`,firstColumnHeader:`Appearance`,columnHeaders:_.map(e=>e.charAt(0).toUpperCase()+e.slice(1)),rows:g.map(e=>({variantLabel:e,cells:_.map(t=>(0,m.jsx)(`div`,{className:(0,p.default)(d.matrixCellHorizontal,{[d.matrixCellInverted]:e===s.InvertNeutral}),children:(0,m.jsx)(c,{appearance:e,variant:t})},t))}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Variant × Orientation' firstColumnHeader='Variant' columnHeaders={orientations.map(o => o.charAt(0).toUpperCase() + o.slice(1))} rows={variants.map(variant => ({
      variantLabel: variant,
      cells: orientations.map(orientation => <div key={orientation} className={orientation === ORIENTATION.Vertical ? styles.matrixCellVertical : styles.matrixCellHorizontal}>
              <Divider variant={variant} orientation={orientation} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Appearance × Variant' firstColumnHeader='Appearance' columnHeaders={variants.map(v => v.charAt(0).toUpperCase() + v.slice(1))} rows={appearances.map(appearance => ({
      variantLabel: appearance,
      cells: variants.map(variant => <div key={variant} className={cn(styles.matrixCellHorizontal, {
        [styles.matrixCellInverted]: appearance === APPEARANCE.InvertNeutral
      })}>
              <Divider appearance={appearance} variant={variant} />
            </div>)
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,h as default};
//# sourceMappingURL=Divider.VisualMatrix.stories-DOFv0TD_.js.map