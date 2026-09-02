import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-n9OCAA8q.js";import{a as i,t as a}from"./src-DvQv5yPC.js";import{a as o,n as s,r as c,t as l}from"./src-DC1Egog0.js";var u,d,f=e((()=>{u=`_matrix_dr4j8_4`,d={matrix:u}})),p,m,h,g,_,v,y,b;e((()=>{a(),l(),r(),f(),p=t(),m={title:`Snack/Feedback/HotSpot`,id:`components-hotspot`,component:o},h=Object.values(s),g=[!0,!1],_=Object.values(c),v=[s.Primary,s.Red,s.Green],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:d.matrix,children:[(0,p.jsx)(n,{sectionTitle:`Appearance × Pulse`,firstColumnHeader:`Appearance`,columnHeaders:g.map(e=>e?`Pulse on`:`Pulse off`),rows:h.map(e=>({variantLabel:e,cells:g.map(t=>(0,p.jsx)(o,{appearance:e,pulse:t},`${e}-${t}`))}))}),(0,p.jsx)(n,{sectionTitle:`Placement × Appearance`,firstColumnHeader:`Placement`,columnHeaders:v.map(e=>e),rows:_.map(e=>({variantLabel:e,cells:v.map(t=>(0,p.jsx)(o,{placement:e,appearance:t,pulse:!1,children:(0,p.jsx)(i,{label:`Target`,view:`outline`})},`${e}-${t}`))}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Pulse' firstColumnHeader='Appearance' columnHeaders={pulseVariants.map(p => p ? 'Pulse on' : 'Pulse off')} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: pulseVariants.map(pulse => <HotSpot key={\`\${appearance}-\${pulse}\`} appearance={appearance} pulse={pulse} />)
    }))} />
      <StoryTable sectionTitle='Placement × Appearance' firstColumnHeader='Placement' columnHeaders={placementShowcaseAppearances.map(a => a)} rows={placements.map(placement => ({
      variantLabel: placement,
      cells: placementShowcaseAppearances.map(appearance => <HotSpot key={\`\${placement}-\${appearance}\`} placement={placement} appearance={appearance} pulse={false}>
              <Button label='Target' view='outline' />
            </HotSpot>)
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,m as default};
//# sourceMappingURL=HotSpot.VisualMatrix.stories-hTqiq13M.js.map