import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D4MTfTET.js";import{c as i}from"./src-CPawDvrJ.js";import{t as a}from"./src-CNUHIn0U.js";import{n as o,t as s}from"./src-B1WdJq_w.js";var c,l,u=e((()=>{c=`_grid_43v6v_1`,l={grid:c}}));function d(e,t){return(0,f.jsx)(o,{entityName:h,selectProps:{label:`Окружение`,items:m,size:e,...t},submitHandler:g,createLayoutProps:{title:`Создание окружения`,content:`Форма`}})}var f,p,m,h,g,_,v,y;e((()=>{a(),s(),r(),u(),f=t(),p=Object.values(i),m=[{id:`1`,content:{label:`Production`}},{id:`2`,content:{label:`Staging`}},{id:`3`,content:{label:`Development`}}],h={single:`Окружение`,plural:`Окружения`},g=()=>Promise.resolve(),_={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldSelectCreate`,id:`uikit-product-fieldspredefined-fieldselectcreate`,component:o,parameters:{layout:`padded`,controls:{disable:!0}}},v={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,f.jsx)(`div`,{className:l.grid,children:(0,f.jsx)(n,{sectionTitle:`size × state`,firstColumnHeader:`size`,columnHeaders:[`default`,`value`,`disabled`],rows:p.map(e=>({variantLabel:e,cells:[(0,f.jsx)(`div`,{children:d(e)},`${e}-default`),(0,f.jsx)(`div`,{children:d(e,{defaultValue:`1`})},`${e}-value`),(0,f.jsx)(`div`,{children:d(e,{disabled:!0})},`${e}-disabled`)]}))})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='size × state' firstColumnHeader='size' columnHeaders={['default', 'value', 'disabled']} rows={sizes.map(size => ({
      variantLabel: size,
      cells: [<div key={\`\${size}-default\`}>{makeField(size)}</div>, <div key={\`\${size}-value\`}>{makeField(size, {
          defaultValue: '1'
        })}</div>, <div key={\`\${size}-disabled\`}>{makeField(size, {
          disabled: true
        })}</div>]
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=FieldSelectCreate.VisualMatrix.stories-CQaVRRn0.js.map