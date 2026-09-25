import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-qs8RgOhH.js";import{U as i,t as a}from"./system-BjOKAueR.js";import{a as o,i as s,n as c,o as l,t as u}from"./src-Cel6Iebj.js";var d,f,p,m,h,g;e((()=>{a(),u(),r(),d=t(),f={title:`Snack/Data display/PromoTag`,id:`components-promotag`,component:c,parameters:{layout:`padded`}},p=Object.values(l),m=Object.values(s),h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{sectionTitle:`Appearance × Size with roleAppearance=accent`,firstColumnHeader:`Appearance`,columnHeaders:p.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:p.map(t=>(0,d.jsx)(c,{label:`Promo`,appearance:e,size:t,roleAppearance:o.Accent},`${e}-${t}`))}))}),(0,d.jsx)(n,{sectionTitle:`Appearance × Size with roleAppearance=decor`,firstColumnHeader:`Appearance`,columnHeaders:p.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:p.map(t=>(0,d.jsx)(c,{label:`Promo`,appearance:e,size:t,roleAppearance:o.Decor},`${e}-${t}`))}))}),(0,d.jsx)(n,{sectionTitle:`beforeContent / afterContent × Size (appearance=primary)`,firstColumnHeader:`Content`,columnHeaders:p.map(e=>e.toUpperCase()),rows:[{variantLabel:`before`,cells:p.map(e=>(0,d.jsx)(c,{label:`Promo`,appearance:s.Primary,size:e,beforeContent:(0,d.jsx)(i,{})},`before-${e}`))},{variantLabel:`after`,cells:p.map(e=>(0,d.jsx)(c,{label:`Promo`,appearance:s.Primary,size:e,afterContent:(0,d.jsx)(i,{})},`after-${e}`))},{variantLabel:`before + after`,cells:p.map(e=>(0,d.jsx)(c,{label:`Promo`,appearance:s.Primary,size:e,beforeContent:(0,d.jsx)(i,{}),afterContent:(0,d.jsx)(i,{})},`before-after-${e}`))}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='Appearance × Size with roleAppearance=accent' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <PromoTag key={\`\${appearance}-\${size}\`} label='Promo' appearance={appearance} size={size} roleAppearance={ROLE_APPEARANCE.Accent} />)
    }))} />
      <StoryTable sectionTitle='Appearance × Size with roleAppearance=decor' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <PromoTag key={\`\${appearance}-\${size}\`} label='Promo' appearance={appearance} size={size} roleAppearance={ROLE_APPEARANCE.Decor} />)
    }))} />
      <StoryTable sectionTitle='beforeContent / afterContent × Size (appearance=primary)' firstColumnHeader='Content' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'before',
      cells: keySizes.map(size => <PromoTag key={\`before-\${size}\`} label='Promo' appearance={APPEARANCE.Primary} size={size} beforeContent={<PlaceholderSVG />} />)
    }, {
      variantLabel: 'after',
      cells: keySizes.map(size => <PromoTag key={\`after-\${size}\`} label='Promo' appearance={APPEARANCE.Primary} size={size} afterContent={<PlaceholderSVG />} />)
    }, {
      variantLabel: 'before + after',
      cells: keySizes.map(size => <PromoTag key={\`before-after-\${size}\`} label='Promo' appearance={APPEARANCE.Primary} size={size} beforeContent={<PlaceholderSVG />} afterContent={<PlaceholderSVG />} />)
    }]} />
    </>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,f as default};
//# sourceMappingURL=PromoTag.VisualMatrix.stories-BrbwNtWV.js.map