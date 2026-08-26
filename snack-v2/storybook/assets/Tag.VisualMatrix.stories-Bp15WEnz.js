import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D1b9r8k6.js";import{i,o as a,s as o,t as s}from"./src-BeMiBOqn.js";var c,l,u,d,f,p,m=e((()=>{c=`_row_1mlta_4`,l=`_stack_1mlta_11`,u=`_rowContainer_1mlta_18`,d=`_rowNarrow_1mlta_23`,f=`_matrix_1mlta_27`,p={row:c,stack:l,rowContainer:u,rowNarrow:d,matrix:f}})),h,g,_,v,y,b,x;e((()=>{s(),r(),m(),h=t(),g={title:`Snack/Data display/Tag/Tag`,id:`components-tag-tag`,component:i,parameters:{layout:`padded`}},_=[o.Xs,o.S,o.M],v=[a.Neutral,a.Primary,a.Red,a.Orange,a.Yellow,a.Green,a.Blue,a.Violet,a.Pink],y=[{key:`plain`,render:(e,t)=>(0,h.jsx)(i,{size:e,appearance:t,label:`Tag`})},{key:`removable`,render:(e,t)=>(0,h.jsx)(i,{size:e,appearance:t,label:`Tag`,onDelete:()=>void 0})},{key:`link`,render:(e,t)=>(0,h.jsx)(i,{size:e,appearance:t,label:`Tag`,href:`#`})}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:p.matrix,children:[(0,h.jsx)(n,{sectionTitle:`Appearance × Size`,firstColumnHeader:`Appearance`,columnHeaders:_.map(e=>e.toUpperCase()),rows:v.map(e=>({variantLabel:e,cells:_.map(t=>(0,h.jsx)(i,{size:t,appearance:e,label:`Tag`},t))}))}),(0,h.jsx)(n,{sectionTitle:`Composition × Size (appearance=neutral)`,firstColumnHeader:`Composition`,columnHeaders:_.map(e=>e.toUpperCase()),rows:y.map(e=>({variantLabel:e.key,cells:_.map(t=>e.render(t,a.Neutral))}))})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Size' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <Tag key={size} size={size} appearance={appearance} label='Tag' />)
    }))} />

      <StoryTable sectionTitle='Composition × Size (appearance=neutral)' firstColumnHeader='Composition' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={compositions.map(c => ({
      variantLabel: c.key,
      cells: keySizes.map(size => c.render(size, APPEARANCE.Neutral))
    }))} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,g as default};
//# sourceMappingURL=Tag.VisualMatrix.stories-Bp15WEnz.js.map