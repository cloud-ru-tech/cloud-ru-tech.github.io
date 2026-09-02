import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-n9OCAA8q.js";import{U as i,t as a}from"./system-5G2b80c5.js";import{i as o,n as s,o as c,s as l,t as u}from"./src-CRU-fQkN.js";import{i as d,n as f,r as p,t as m}from"./testIds-vQbHRla4.js";function h(e,t){return(0,g.jsx)(s,{...e,className:d.bannerCell,"data-test-id":t})}var g,_,v,y,b,x,S,C,w,T;e((()=>{u(),a(),r(),p(),f(),g=t(),_={title:`AI/Surfaces/AiFieldBanner`,id:`ai-aifieldbanner`,component:s,parameters:{layout:`padded`}},v=l,y=Object.values(o),b={content:`Description`,actionLabel:`Label text`,variant:c.Information},x=`This is a longer field hint that wraps across several lines within the banner width to show how multiline description text behaves alongside the icon and action.`,S=`This is longer additional content in the bottomContent slot that wraps across several lines within the banner width to show how multiline slot content behaves alongside the description and action.`,C={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(n,{sectionTitle:`Variant × Size (desktop/mobile)`,firstColumnHeader:`Variant`,columnHeaders:y.map(e=>e.toUpperCase()),rows:v.map(e=>({variantLabel:e,cells:y.map(t=>h({...b,variant:e,size:t,icon:(0,g.jsx)(i,{})},`${m.root}-variant-${e}-size-${t}`))}))})},w={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(n,{sectionTitle:`Slots`,firstColumnHeader:`Configuration`,columnHeaders:[`Default`],rows:[{variantLabel:`description + action`,cells:[h({...b,icon:(0,g.jsx)(i,{})},`${m.root}-slots-full`)]},{variantLabel:`description only`,cells:[h({content:`Description`,actionLabel:void 0},`${m.root}-slots-description`)]},{variantLabel:`with bottom content`,cells:[h({...b,icon:(0,g.jsx)(i,{}),bottomContent:(0,g.jsx)(`span`,{children:`Additional content`})},`${m.root}-slots-bottom-content`)]},{variantLabel:`long description`,cells:[h({...b,content:x,icon:(0,g.jsx)(i,{})},`${m.root}-slots-long-description`)]},{variantLabel:`content + bottomContent (long) + action`,cells:[h({...b,icon:(0,g.jsx)(i,{}),bottomContent:(0,g.jsx)(`span`,{children:S})},`${m.root}-slots-long-bottom-content`)]},{variantLabel:`no icon`,cells:[h({content:b.content,actionLabel:b.actionLabel},`${m.root}-slots-no-icon`)]}]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Variant × Size (desktop/mobile)' firstColumnHeader='Variant' columnHeaders={sizes.map(s => s.toUpperCase())} rows={variants.map(variant => ({
    variantLabel: variant,
    cells: sizes.map(size => renderCell({
      ...defaultProps,
      variant,
      size,
      icon: <PlaceholderSVG />
    }, \`\${TEST_IDS.root}-variant-\${variant}-size-\${size}\`))
  }))} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Slots' firstColumnHeader='Configuration' columnHeaders={['Default']} rows={[{
    variantLabel: 'description + action',
    cells: [renderCell({
      ...defaultProps,
      icon: <PlaceholderSVG />
    }, \`\${TEST_IDS.root}-slots-full\`)]
  }, {
    variantLabel: 'description only',
    cells: [renderCell({
      content: 'Description',
      actionLabel: undefined
    }, \`\${TEST_IDS.root}-slots-description\`)]
  }, {
    variantLabel: 'with bottom content',
    cells: [renderCell({
      ...defaultProps,
      icon: <PlaceholderSVG />,
      bottomContent: <span>Additional content</span>
    }, \`\${TEST_IDS.root}-slots-bottom-content\`)]
  }, {
    variantLabel: 'long description',
    cells: [renderCell({
      ...defaultProps,
      content: longDescription,
      icon: <PlaceholderSVG />
    }, \`\${TEST_IDS.root}-slots-long-description\`)]
  }, {
    variantLabel: 'content + bottomContent (long) + action',
    cells: [renderCell({
      ...defaultProps,
      icon: <PlaceholderSVG />,
      bottomContent: <span>{longBottomContent}</span>
    }, \`\${TEST_IDS.root}-slots-long-bottom-content\`)]
  }, {
    variantLabel: 'no icon',
    cells: [renderCell({
      content: defaultProps.content,
      actionLabel: defaultProps.actionLabel
    }, \`\${TEST_IDS.root}-slots-no-icon\`)]
  }]} />
}`,...w.parameters?.docs?.source}}},T=[`VisualMatrixVariantSize`,`VisualMatrixSlots`]}))();export{w as VisualMatrixSlots,C as VisualMatrixVariantSize,T as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiFieldBanner.VisualMatrix.stories-AQiAgxPN.js.map