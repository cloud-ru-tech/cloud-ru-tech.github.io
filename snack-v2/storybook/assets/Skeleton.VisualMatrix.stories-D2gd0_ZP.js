import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C2bZDhP2.js";import{f as i,t as a}from"./src-4AzQKHuc.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=t(),s={title:`Snack/Feedback/Skeleton/Skeleton`,id:`components-skeleton-skeleton`,component:i},c=[{label:`Rect (0px)`,borderRadius:0,isCircle:!1},{label:`Rounded (8px)`,borderRadius:8,isCircle:!1},{label:`Circle`,borderRadius:`50%`,isCircle:!0}],l=[{label:`S`,width:80,height:20,circleSize:24},{label:`M`,width:160,height:24,circleSize:40},{label:`L`,width:280,height:32,circleSize:56}],u={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,o.jsx)(n,{sectionTitle:`Shape × Size`,firstColumnHeader:`Shape`,columnHeaders:l.map(e=>e.label),rows:c.map(e=>({variantLabel:e.label,cells:l.map(t=>(0,o.jsx)(i,{loading:!0,width:e.isCircle?t.circleSize:t.width,height:e.isCircle?t.circleSize:t.height,borderRadius:e.borderRadius},t.label))}))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Shape × Size' firstColumnHeader='Shape' columnHeaders={sizes.map(s => s.label)} rows={shapes.map(shape => ({
    variantLabel: shape.label,
    cells: sizes.map(size => <Skeleton key={size.label} loading width={shape.isCircle ? size.circleSize : size.width} height={shape.isCircle ? size.circleSize : size.height} borderRadius={shape.borderRadius} />)
  }))} />
}`,...u.parameters?.docs?.source}}},d=[`VisualMatrix`]}))();export{u as VisualMatrix,d as __namedExportsOrder,s as default};
//# sourceMappingURL=Skeleton.VisualMatrix.stories-D2gd0_ZP.js.map