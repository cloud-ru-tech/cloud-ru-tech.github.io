import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BdtyM0cx.js";import{c as i,n as a,t as o,u as s}from"./src-C8vrY36S.js";var c,l,u,d,f,p,m;e((()=>{o(),r(),c=t(),l={title:`Snack/Feedback/ProgressBar/ProgressBarCircle`,id:`components-progressbar-progressbarcircle`,component:a},u=Object.values(s),d=Object.values(i),f=[0,60,100],p={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{sectionTitle:`Appearance × Size (progress=60)`,firstColumnHeader:`Appearance`,columnHeaders:u.map(e=>e.toUpperCase()),rows:d.map(e=>({variantLabel:e,cells:u.map(t=>(0,c.jsx)(a,{progress:60,size:t,appearance:e},t))}))}),(0,c.jsx)(n,{sectionTitle:`Progress edge values × Size (appearance=primary)`,firstColumnHeader:`progress`,columnHeaders:u.map(e=>e.toUpperCase()),rows:f.map(e=>({variantLabel:String(e),cells:u.map(t=>(0,c.jsx)(a,{progress:e,size:t,appearance:i.Primary},t))}))})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='Appearance × Size (progress=60)' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <ProgressBarCircle key={size} progress={60} size={size} appearance={appearance} />)
    }))} />
      <StoryTable sectionTitle='Progress edge values × Size (appearance=primary)' firstColumnHeader='progress' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyProgressValues.map(progress => ({
      variantLabel: String(progress),
      cells: keySizes.map(size => <ProgressBarCircle key={size} progress={progress} size={size} appearance={APPEARANCE.Primary} />)
    }))} />
    </>
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,l as default};
//# sourceMappingURL=ProgressBarCircle.VisualMatrix.stories-DzWOUjez.js.map