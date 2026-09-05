import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Coxm4alt.js";import{i,l as a,o,t as s}from"./src-CmgcKgi2.js";var c,l,u,d=e((()=>{c=`_col_40apw_4`,l=`_matrix_40apw_10`,u={col:c,matrix:l}})),f,p,m,h,g,_,v;e((()=>{s(),r(),d(),f=t(),p={title:`Snack/Navigation/Pagination/Pagination`,id:`components-pagination-pagination`,component:i,parameters:{layout:`padded`}},m=[o.S,o.M],h=[a.Button,a.Link],g=()=>{},_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:u.matrix,children:[(0,f.jsx)(n,{sectionTitle:`Size × Variant`,firstColumnHeader:`Size`,columnHeaders:h.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(i,{total:8,page:3,size:e,variant:t,onChange:g},`${e}-${t}`))}))}),(0,f.jsx)(n,{sectionTitle:`Page positions (size=s, total=10)`,firstColumnHeader:`Current page`,columnHeaders:[`Pagination`],rows:[1,5,10].map(e=>({variantLabel:String(e),cells:[(0,f.jsx)(i,{total:10,page:e,onChange:g},e)]}))}),(0,f.jsx)(n,{sectionTitle:`Truncated (maxLength=7, total=42)`,firstColumnHeader:`Current page`,columnHeaders:[`Pagination`],rows:[1,12,42].map(e=>({variantLabel:String(e),cells:[(0,f.jsx)(i,{total:42,page:e,maxLength:7,onChange:g},e)]}))}),(0,f.jsx)(n,{sectionTitle:`Variant × Truncation boundaries (maxLength=7, total=42)`,firstColumnHeader:`Variant`,columnHeaders:[`start (page 1)`,`middle (page 21)`,`end (page 42)`],rows:h.map(e=>({variantLabel:e,cells:[1,21,42].map(t=>(0,f.jsx)(i,{total:42,page:t,maxLength:7,variant:e,onChange:g},`${e}-${t}`))}))}),(0,f.jsx)(n,{sectionTitle:`Overflow (no truncation, total > maxLength)`,firstColumnHeader:`Total / maxLength`,columnHeaders:[`Pagination`],rows:[{variantLabel:`total=15 / maxLength=15`,cells:[(0,f.jsx)(i,{total:15,page:8,maxLength:15,onChange:g},`all`)]},{variantLabel:`total=20 / maxLength=20`,cells:[(0,f.jsx)(i,{total:20,page:10,maxLength:20,onChange:g},`wide`)]}]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × Variant' firstColumnHeader='Size' columnHeaders={variants.map(v => v.toUpperCase())} rows={sizes.map(size => ({
      variantLabel: size,
      cells: variants.map(variant => <Pagination key={\`\${size}-\${variant}\`} total={8} page={3} size={size} variant={variant} onChange={noop} />)
    }))} />

      <StoryTable sectionTitle='Page positions (size=s, total=10)' firstColumnHeader='Current page' columnHeaders={['Pagination']} rows={[1, 5, 10].map(page => ({
      variantLabel: String(page),
      cells: [<Pagination key={page} total={10} page={page} onChange={noop} />]
    }))} />

      <StoryTable sectionTitle='Truncated (maxLength=7, total=42)' firstColumnHeader='Current page' columnHeaders={['Pagination']} rows={[1, 12, 42].map(page => ({
      variantLabel: String(page),
      cells: [<Pagination key={page} total={42} page={page} maxLength={7} onChange={noop} />]
    }))} />

      <StoryTable sectionTitle='Variant × Truncation boundaries (maxLength=7, total=42)' firstColumnHeader='Variant' columnHeaders={['start (page 1)', 'middle (page 21)', 'end (page 42)']} rows={variants.map(variant => ({
      variantLabel: variant,
      cells: [1, 21, 42].map(page => <Pagination key={\`\${variant}-\${page}\`} total={42} page={page} maxLength={7} variant={variant} onChange={noop} />)
    }))} />

      <StoryTable sectionTitle='Overflow (no truncation, total > maxLength)' firstColumnHeader='Total / maxLength' columnHeaders={['Pagination']} rows={[{
      variantLabel: 'total=15 / maxLength=15',
      cells: [<Pagination key='all' total={15} page={8} maxLength={15} onChange={noop} />]
    }, {
      variantLabel: 'total=20 / maxLength=20',
      cells: [<Pagination key='wide' total={20} page={10} maxLength={20} onChange={noop} />]
    }]} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,p as default};
//# sourceMappingURL=Pagination.VisualMatrix.stories-9GAMrdnO.js.map