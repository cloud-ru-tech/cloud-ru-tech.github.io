import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BRJzdrhE.js";import{l as i,r as a,t as o}from"./src-CqxI6u0w.js";var s,c,l,u=e((()=>{s=`_narrow_1n2mu_4`,c=`_matrix_1n2mu_8`,l={narrow:s,matrix:c}})),d,f,p,m,h,g,_,v,y;e((()=>{o(),r(),u(),d=t(),f={title:`Snack/Actions/Button/ButtonGroup`,id:`components-button-buttongroup`,component:a,parameters:{layout:`padded`}},p=[i.S,i.M,i.L],m={label:`Сохранить`,appearance:`primary`,view:`filled`},h={label:`Отмена`,appearance:`neutral`,view:`outline`},g=[{key:`primaryOnly`,props:{primaryAction:m}},{key:`primarySecondary`,props:{primaryAction:m,secondaryAction:h}},{key:`allThree`,props:{primaryAction:m,secondaryAction:h,tertiaryAction:{label:`Помощь`,appearance:`neutral`,view:`simple`}}}],_=[{key:`default`,props:{}},{key:`centered`,props:{centered:!0}},{key:`break`,props:{break:!0}},{key:`filled`,props:{filled:!0}},{key:`vertical`,props:{vertical:!0}}],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.matrix,children:[(0,d.jsx)(n,{sectionTitle:`Composition × Size`,firstColumnHeader:`Composition`,columnHeaders:p.map(e=>e.toUpperCase()),rows:g.map(({key:e,props:t})=>({variantLabel:e,cells:p.map(e=>(0,d.jsx)(`div`,{className:l.narrow,children:(0,d.jsx)(a,{size:e,...t})},e))}))}),(0,d.jsx)(n,{sectionTitle:`Modifier × Composition (size=m)`,firstColumnHeader:`Modifier`,columnHeaders:g.map(e=>e.key),rows:_.map(({key:e,props:t})=>({variantLabel:e,cells:g.map(e=>(0,d.jsx)(`div`,{className:l.narrow,children:(0,d.jsx)(a,{...e.props,...t})},e.key))}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Composition × Size' firstColumnHeader='Composition' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={compositions.map(({
      key,
      props
    }) => ({
      variantLabel: key,
      cells: keySizes.map(size => <div key={size} className={styles.narrow}>
              <ButtonGroup size={size} {...props} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Modifier × Composition (size=m)' firstColumnHeader='Modifier' columnHeaders={compositions.map(c => c.key)} rows={modifiers.map(({
      key,
      props
    }) => ({
      variantLabel: key,
      cells: compositions.map(c => <div key={c.key} className={styles.narrow}>
              <ButtonGroup {...c.props} {...props} />
            </div>)
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,f as default};
//# sourceMappingURL=ButtonGroup.VisualMatrix.stories-C-R0-UNz.js.map