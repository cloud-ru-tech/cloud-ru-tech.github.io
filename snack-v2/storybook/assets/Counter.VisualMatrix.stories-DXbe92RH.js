import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CvASAC9b.js";import{a as i,c as a,i as o,n as s,o as c,s as l,t as u}from"./src-x-icJSGb.js";var d,f,p=e((()=>{d=`_matrix_dr4j8_4`,f={matrix:d}})),m,h,g,_,v,y,b;e((()=>{u(),r(),p(),m=t(),h={title:`Snack/Data display/Counter`,id:`components-counter`,component:s,parameters:{layout:`padded`}},g=[l.XS,l.S],_=Object.values(o),v=[{label:a.Count,value:42},{label:a.CountPlus,value:15},{label:a.CountK,value:2500}],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(n,{sectionTitle:`Appearance × Size`,firstColumnHeader:`Appearance`,columnHeaders:g.map(e=>e.toUpperCase()),rows:_.map(e=>({variantLabel:e,cells:g.map(t=>(0,m.jsx)(s,{value:5,appearance:e,size:t},t))}))}),(0,m.jsx)(n,{sectionTitle:`Variant × Size`,firstColumnHeader:`Variant`,columnHeaders:g.map(e=>e.toUpperCase()),rows:v.map(({label:e,value:t})=>({variantLabel:e,cells:g.map(n=>(0,m.jsx)(s,{value:t,variant:e,size:n,plusLimit:10},n))}))}),(0,m.jsx)(n,{sectionTitle:`Edge values (variant per row, plusLimit=10, keyLimit=1000)`,firstColumnHeader:`value`,columnHeaders:g.map(e=>e.toUpperCase()),rows:[{label:`0`,value:0,variant:a.Count},{label:`10 (plusLimit)`,value:10,variant:a.CountPlus},{label:`11 (plusLimit+1)`,value:11,variant:a.CountPlus},{label:`${i} (keyLimit)`,value:i,variant:a.CountK}].map(({label:e,value:t,variant:n})=>({variantLabel:e,cells:g.map(e=>(0,m.jsx)(s,{value:t,size:e,variant:n,plusLimit:10},e))}))}),(0,m.jsx)(n,{sectionTitle:`Role appearance`,firstColumnHeader:`Role appearance`,columnHeaders:g.map(e=>e.toUpperCase()),rows:Object.values(c).map(e=>({variantLabel:e,cells:g.map(t=>(0,m.jsx)(s,{value:7,roleAppearance:e,size:t},t))}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Size' firstColumnHeader='Appearance' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <Counter key={size} value={5} appearance={appearance} size={size} />)
    }))} />
      <StoryTable sectionTitle='Variant × Size' firstColumnHeader='Variant' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={keyVariants.map(({
      label,
      value
    }) => ({
      variantLabel: label,
      cells: keySizes.map(size => <Counter key={size} value={value} variant={label} size={size} plusLimit={DEFAULT_PLUS_LIMIT} />)
    }))} />
      <StoryTable sectionTitle='Edge values (variant per row, plusLimit=10, keyLimit=1000)' firstColumnHeader='value' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={[{
      label: '0',
      value: 0,
      variant: VARIANT.Count
    }, {
      label: \`\${DEFAULT_PLUS_LIMIT} (plusLimit)\`,
      value: DEFAULT_PLUS_LIMIT,
      variant: VARIANT.CountPlus
    }, {
      label: \`\${DEFAULT_PLUS_LIMIT + 1} (plusLimit+1)\`,
      value: DEFAULT_PLUS_LIMIT + 1,
      variant: VARIANT.CountPlus
    }, {
      label: \`\${DEFAULT_KEY_LIMIT} (keyLimit)\`,
      value: DEFAULT_KEY_LIMIT,
      variant: VARIANT.CountK
    }].map(({
      label,
      value,
      variant
    }) => ({
      variantLabel: label,
      cells: keySizes.map(size => <Counter key={size} value={value} size={size} variant={variant} plusLimit={DEFAULT_PLUS_LIMIT} />)
    }))} />
      <StoryTable sectionTitle='Role appearance' firstColumnHeader='Role appearance' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={Object.values(ROLE_APPEARANCE).map(roleAppearance => ({
      variantLabel: roleAppearance,
      cells: keySizes.map(size => <Counter key={size} value={7} roleAppearance={roleAppearance} size={size} />)
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,h as default};
//# sourceMappingURL=Counter.VisualMatrix.stories-DXbe92RH.js.map