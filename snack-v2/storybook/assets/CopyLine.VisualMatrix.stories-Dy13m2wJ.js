import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-d1MamqAX.js";import{i,o as a,t as o}from"./src-Bai7ZD2B.js";var s,c,l=e((()=>{s=`_truncatedCell_l8bot_1`,c={truncatedCell:s}})),u,d,f,p,m,h;e((()=>{o(),r(),l(),u=t(),d={title:`Uikit Product/Actions/Copy/CopyLine`,id:`uikit-product-copy-copyline`,component:i,parameters:{layout:`padded`}},f=[a.Never,a.Hover],p=[{label:`Short`,content:`copy-me-42`,truncated:!1},{label:`Long`,content:`very-long-identifier-that-should-be-truncated-1234567890-abcdefghij`,truncated:!0},{label:`Number`,content:1234567890,truncated:!1}],m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(n,{cellAlign:`start`,sectionTitle:`CopyButtonHideStrategy × Content`,firstColumnHeader:`Strategy`,columnHeaders:p.map(e=>e.label),rows:f.map(e=>({variantLabel:e,cells:p.map(t=>(0,u.jsx)(`div`,{className:t.truncated?c.truncatedCell:void 0,children:(0,u.jsx)(i,{copyButtonHideStrategy:e,content:t.content})},`${e}-${t.label}`))}))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable cellAlign='start' sectionTitle='CopyButtonHideStrategy × Content' firstColumnHeader='Strategy' columnHeaders={contentVariants.map(v => v.label)} rows={strategies.map(strategy => ({
    variantLabel: strategy,
    cells: contentVariants.map(v => <div key={\`\${strategy}-\${v.label}\`} className={v.truncated ? styles.truncatedCell : undefined}>
            <CopyLine copyButtonHideStrategy={strategy} content={v.content} />
          </div>)
  }))} />
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,d as default};
//# sourceMappingURL=CopyLine.VisualMatrix.stories-Dy13m2wJ.js.map