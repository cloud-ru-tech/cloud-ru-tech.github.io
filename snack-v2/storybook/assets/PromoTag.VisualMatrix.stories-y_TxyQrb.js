import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DQTa2Tvz.js";import{U as i,t as a}from"./system-BeZ0nvWx.js";import{a as o,i as s,n as c,o as l,t as u}from"./src-DMS3AYBG.js";var d,f,p,m,h,g,_;e((()=>{a(),u(),r(),d=t(),f={[l.Xs]:16,[l.S]:16,[l.M]:24},p={title:`Snack/Data display/PromoTag`,id:`components-promotag`,component:c,parameters:{layout:`padded`}},m=Object.values(l),h=Object.values(s),g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{sectionTitle:`Appearance × Size with roleAppearance=accent`,firstColumnHeader:`Appearance`,columnHeaders:m.map(e=>e.toUpperCase()),rows:h.map(e=>({variantLabel:e,cells:m.map(t=>(0,d.jsx)(c,{label:`Promo`,appearance:e,size:t,roleAppearance:o.Accent},`${e}-${t}`))}))}),(0,d.jsx)(n,{sectionTitle:`Appearance × Size with roleAppearance=decor`,firstColumnHeader:`Appearance`,columnHeaders:m.map(e=>e.toUpperCase()),rows:h.map(e=>({variantLabel:e,cells:m.map(t=>(0,d.jsx)(c,{label:`Promo`,appearance:e,size:t,roleAppearance:o.Decor},`${e}-${t}`))}))}),(0,d.jsx)(n,{sectionTitle:`beforeContent / afterContent × Size (appearance=primary)`,firstColumnHeader:`Content`,columnHeaders:m.map(e=>e.toUpperCase()),rows:[{variantLabel:`before`,cells:m.map(e=>(0,d.jsx)(c,{label:`Promo`,appearance:s.Primary,size:e,beforeContent:(0,d.jsx)(i,{size:f[e]})},`before-${e}`))},{variantLabel:`after`,cells:m.map(e=>(0,d.jsx)(c,{label:`Promo`,appearance:s.Primary,size:e,afterContent:(0,d.jsx)(i,{size:f[e]})},`after-${e}`))},{variantLabel:`before + after`,cells:m.map(e=>(0,d.jsx)(c,{label:`Promo`,appearance:s.Primary,size:e,beforeContent:(0,d.jsx)(i,{size:f[e]}),afterContent:(0,d.jsx)(i,{size:f[e]})},`before-after-${e}`))}]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      cells: keySizes.map(size => <PromoTag key={\`before-\${size}\`} label='Promo' appearance={APPEARANCE.Primary} size={size} beforeContent={<PlaceholderSVG size={iconSizes[size]} />} />)
    }, {
      variantLabel: 'after',
      cells: keySizes.map(size => <PromoTag key={\`after-\${size}\`} label='Promo' appearance={APPEARANCE.Primary} size={size} afterContent={<PlaceholderSVG size={iconSizes[size]} />} />)
    }, {
      variantLabel: 'before + after',
      cells: keySizes.map(size => <PromoTag key={\`before-after-\${size}\`} label='Promo' appearance={APPEARANCE.Primary} size={size} beforeContent={<PlaceholderSVG size={iconSizes[size]} />} afterContent={<PlaceholderSVG size={iconSizes[size]} />} />)
    }]} />
    </>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,p as default};
//# sourceMappingURL=PromoTag.VisualMatrix.stories-y_TxyQrb.js.map