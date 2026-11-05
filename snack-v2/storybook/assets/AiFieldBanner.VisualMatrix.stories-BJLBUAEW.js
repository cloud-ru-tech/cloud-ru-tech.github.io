import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CH0ThVYh.js";import{G as i,t as a}from"./system-YERBpVbf.js";import{c as o,l as s,n as c,o as l,t as u}from"./src-DTonsfx-.js";import{i as d,n as f,r as p,t as m}from"./testIds-eDf46PPI.js";function h(e,t){return(0,g.jsx)(c,{...e,className:d.bannerCell,"data-test-id":t})}var g,_,v,y,b,x,S,C,w,T,E;e((()=>{u(),a(),r(),p(),f(),g=t(),_={title:`AI/Surfaces/AiFieldBanner`,id:`ai-aifieldbanner`,component:c,parameters:{layout:`padded`}},v=s,y=Object.values(l),b=()=>void 0,x={content:`Description`,actionLabel:`Label text`,variant:o.Information,onClose:b},S=`This is a longer field hint that wraps across several lines within the banner width to show how multiline description text behaves alongside the icon and action.`,C=`This is longer additional content in the bottomContent slot that wraps across several lines within the banner width to show how multiline slot content behaves alongside the description and action.`,w={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(n,{sectionTitle:`Variant × Size (desktop/mobile)`,firstColumnHeader:`Variant`,columnHeaders:y.map(e=>e.toUpperCase()),rows:v.map(e=>({variantLabel:e,cells:y.map(t=>h({...x,variant:e,size:t,icon:(0,g.jsx)(i,{})},`${m.root}-variant-${e}-size-${t}`))}))})},T={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(n,{sectionTitle:`Slots`,firstColumnHeader:`Configuration`,columnHeaders:[`Default`],rows:[{variantLabel:`description + action`,cells:[h({...x,icon:(0,g.jsx)(i,{})},`${m.root}-slots-full`)]},{variantLabel:`description only`,cells:[h({content:`Description`,actionLabel:void 0},`${m.root}-slots-description`)]},{variantLabel:`with bottom content`,cells:[h({...x,icon:(0,g.jsx)(i,{}),bottomContent:(0,g.jsx)(`span`,{children:`Additional content`})},`${m.root}-slots-bottom-content`)]},{variantLabel:`long description`,cells:[h({...x,content:S,icon:(0,g.jsx)(i,{})},`${m.root}-slots-long-description`)]},{variantLabel:`content + bottomContent (long) + action`,cells:[h({...x,icon:(0,g.jsx)(i,{}),bottomContent:(0,g.jsx)(`span`,{children:C})},`${m.root}-slots-long-bottom-content`)]},{variantLabel:`no icon`,cells:[h({content:x.content,actionLabel:x.actionLabel},`${m.root}-slots-no-icon`)]}]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`VisualMatrixVariantSize`,`VisualMatrixSlots`]}))();export{T as VisualMatrixSlots,w as VisualMatrixVariantSize,E as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiFieldBanner.VisualMatrix.stories-BJLBUAEW.js.map