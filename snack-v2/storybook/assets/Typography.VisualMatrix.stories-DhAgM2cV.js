import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CqCwb0Nr.js";import{c as i,l as a,n as o,s,t as c}from"./src-DJPfffhs.js";var l,u,d,f,p,m,h,g;e((()=>{c(),r(),l=t(),u={title:`Snack/Typography/Typography`,id:`components-typography`,component:o},d=Object.values(i),f=Object.values(s),p=Object.values(a),m=e=>e.charAt(0).toUpperCase()+e.slice(1),h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsx)(l.Fragment,{children:p.map(e=>(0,l.jsx)(n,{sectionTitle:`${m(e)} Weight`,firstColumnHeader:`Variant`,columnHeaders:f.map(e=>e.toUpperCase()),rows:d.map(t=>({variantLabel:t,cells:f.map(n=>(0,l.jsxs)(o,{variant:t,size:n,weight:e,children:[m(t),` `,n.toUpperCase()]},n))}))},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      {weights.map(weight => <StoryTable key={weight} sectionTitle={\`\${capitalize(weight)} Weight\`} firstColumnHeader='Variant' columnHeaders={sizes.map(s => s.toUpperCase())} rows={variants.map(variant => ({
      variantLabel: variant,
      cells: sizes.map(size => <Typography key={size} variant={variant} size={size} weight={weight}>
                {capitalize(variant)} {size.toUpperCase()}
              </Typography>)
    }))} />)}
    </>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,u as default};
//# sourceMappingURL=Typography.VisualMatrix.stories-DhAgM2cV.js.map