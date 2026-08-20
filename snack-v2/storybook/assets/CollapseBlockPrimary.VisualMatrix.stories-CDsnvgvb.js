import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{r as i,t as a}from"./src-CCaBCq3s.js";import{c as o,i as s,n as c,s as l,t as u}from"./src-Cf6I9Jm7.js";function d({id:e,view:t,backgroundPredefined:n,chevronPosition:r=s.After,showChevron:i}){return(0,f.jsx)(c,{children:(0,f.jsx)(c.CollapseBlockPrimary,{id:e,title:`Title`,subTitle:`Subtitle`,view:t,backgroundPredefined:n,chevronPosition:r,showChevron:i,children:`Content`})})}var f,p,m,h,g,_,v;e((()=>{a(),r(),u(),o(),f=t(),p={title:`Snack/Layout & containers/Accordion/CollapseBlockPrimary`,id:`components-accordion-collapseblockprimary`,component:c.CollapseBlockPrimary,parameters:{controls:{disable:!0}}},m=Object.values(l),h=Object.values(s),g=Object.values(i),_={tags:[`test`,`dev`],render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{sectionTitle:`backgroundPredefined × View`,firstColumnHeader:`Fill`,columnHeaders:[...m],rows:g.map(e=>({variantLabel:e,cells:m.map(t=>(0,f.jsx)(d,{id:`vm-${e}-${t}`,view:t,backgroundPredefined:e},`${e}-${t}`))}))}),(0,f.jsx)(n,{sectionTitle:`Chevron position`,firstColumnHeader:`Variant`,columnHeaders:h.map(e=>e),rows:[{variantLabel:`Default`,cells:h.map(e=>(0,f.jsx)(d,{id:`vm-chevron-${e}`,view:l.Simple,backgroundPredefined:i.NeutralBackground1Level,chevronPosition:e},e))}]}),(0,f.jsx)(n,{sectionTitle:`Chevron visibility`,firstColumnHeader:`Variant`,columnHeaders:[`showChevron=true`,`showChevron=false`],rows:[{variantLabel:`Default`,cells:[!0,!1].map(e=>(0,f.jsx)(d,{id:`vm-show-chevron-${e}`,view:l.Simple,backgroundPredefined:i.NeutralBackground1Level,showChevron:e},String(e)))}]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <>
      <StoryTable sectionTitle='backgroundPredefined × View' firstColumnHeader='Fill' columnHeaders={[...views]} rows={matrixBackgroundFills.map(fill => ({
      variantLabel: fill,
      cells: views.map(view => <CollapseBlockMatrixCell key={\`\${fill}-\${view}\`} id={\`vm-\${fill}-\${view}\`} view={view} backgroundPredefined={fill} />)
    }))} />

      <StoryTable sectionTitle='Chevron position' firstColumnHeader='Variant' columnHeaders={chevronPositions.map(c => c)} rows={[{
      variantLabel: 'Default',
      cells: chevronPositions.map(chevronPosition => <CollapseBlockMatrixCell key={chevronPosition} id={\`vm-chevron-\${chevronPosition}\`} view={VIEW.Simple} backgroundPredefined={BACKGROUND_PREDEFINED_FILL.NeutralBackground1Level} chevronPosition={chevronPosition} />)
    }]} />

      <StoryTable sectionTitle='Chevron visibility' firstColumnHeader='Variant' columnHeaders={['showChevron=true', 'showChevron=false']} rows={[{
      variantLabel: 'Default',
      cells: [true, false].map(showChevron => <CollapseBlockMatrixCell key={String(showChevron)} id={\`vm-show-chevron-\${showChevron}\`} view={VIEW.Simple} backgroundPredefined={BACKGROUND_PREDEFINED_FILL.NeutralBackground1Level} showChevron={showChevron} />)
    }]} />
    </>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,p as default};
//# sourceMappingURL=CollapseBlockPrimary.VisualMatrix.stories-CDsnvgvb.js.map