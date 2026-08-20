import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{V as i,t as a}from"./system-Cg9ynAJg.js";import{i as o,n as s,o as c,s as l,t as u}from"./src-DMKaC48Z.js";import{i as d,n as f,r as p,t as m}from"./testIds-BAUdaGw4.js";function h(e,t){return(0,g.jsx)(s,{...e,className:d.bannerCell,"data-test-id":t})}var g,_,v,y,b,x,S,C,w,T;e((()=>{u(),a(),r(),p(),f(),g=t(),_={title:`AI/Surfaces/AiFieldBanner`,id:`ai-aifieldbanner`,component:s,parameters:{layout:`padded`}},v=l,y=Object.values(o),b={description:`Description`,actionLabel:`Label text`,variant:c.Information},x=`This is a longer field hint that wraps across several lines within the banner width to show how multiline description text behaves alongside the icon and action.`,S=`This is longer additional content in the children slot that wraps across several lines within the banner width to show how multiline slot content behaves alongside the description and action.`,C={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(n,{sectionTitle:`Type × Size (desktop/mobile)`,firstColumnHeader:`Type`,columnHeaders:y.map(e=>e.toUpperCase()),rows:v.map(e=>({variantLabel:e,cells:y.map(t=>h({...b,variant:e,size:t,icon:(0,g.jsx)(i,{})},`${m.root}-type-${e}-size-${t}`))}))})},w={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(n,{sectionTitle:`Slots`,firstColumnHeader:`Configuration`,columnHeaders:[`Default`],rows:[{variantLabel:`description + action`,cells:[h({...b,icon:(0,g.jsx)(i,{})},`${m.root}-slots-full`)]},{variantLabel:`description only`,cells:[h({description:`Description`,actionLabel:void 0},`${m.root}-slots-description`)]},{variantLabel:`with additional slot`,cells:[h({...b,icon:(0,g.jsx)(i,{}),children:(0,g.jsx)(`span`,{children:`Additional content`})},`${m.root}-slots-additional`)]},{variantLabel:`long description`,cells:[h({...b,description:x,icon:(0,g.jsx)(i,{})},`${m.root}-slots-long-description`)]},{variantLabel:`description + children (long) + action`,cells:[h({...b,icon:(0,g.jsx)(i,{}),children:(0,g.jsx)(`span`,{children:S})},`${m.root}-slots-long-children`)]},{variantLabel:`no icon`,cells:[h({description:b.description,actionLabel:b.actionLabel},`${m.root}-slots-no-icon`)]}]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Type × Size (desktop/mobile)' firstColumnHeader='Type' columnHeaders={sizes.map(s => s.toUpperCase())} rows={types.map(type => ({
    variantLabel: type,
    cells: sizes.map(size => renderCell({
      ...defaultProps,
      variant: type,
      size,
      icon: <PlaceholderSVG />
    }, \`\${TEST_IDS.root}-type-\${type}-size-\${size}\`))
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
      description: 'Description',
      actionLabel: undefined
    }, \`\${TEST_IDS.root}-slots-description\`)]
  }, {
    variantLabel: 'with additional slot',
    cells: [renderCell({
      ...defaultProps,
      icon: <PlaceholderSVG />,
      children: <span>Additional content</span>
    }, \`\${TEST_IDS.root}-slots-additional\`)]
  }, {
    variantLabel: 'long description',
    cells: [renderCell({
      ...defaultProps,
      description: longDescription,
      icon: <PlaceholderSVG />
    }, \`\${TEST_IDS.root}-slots-long-description\`)]
  }, {
    variantLabel: 'description + children (long) + action',
    cells: [renderCell({
      ...defaultProps,
      icon: <PlaceholderSVG />,
      children: <span>{longAdditionalContent}</span>
    }, \`\${TEST_IDS.root}-slots-long-children\`)]
  }, {
    variantLabel: 'no icon',
    cells: [renderCell({
      description: defaultProps.description,
      actionLabel: defaultProps.actionLabel
    }, \`\${TEST_IDS.root}-slots-no-icon\`)]
  }]} />
}`,...w.parameters?.docs?.source}}},T=[`VisualMatrixTypeSize`,`VisualMatrixSlots`]}))();export{w as VisualMatrixSlots,C as VisualMatrixTypeSize,T as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiFieldBanner.VisualMatrix.stories-DsNeWpoo.js.map