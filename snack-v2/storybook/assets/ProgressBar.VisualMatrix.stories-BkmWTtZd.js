import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CRw8NhXI.js";import{c as i,o as a,t as o,u as s}from"./src-CscHbUKL.js";var c,l,u=e((()=>{c=`_bar_102ot_1`,l={bar:c}})),d,f,p,m,h,g,_;e((()=>{o(),r(),u(),d=t(),f={title:`Snack/Feedback/ProgressBar/ProgressBar`,id:`components-progressbar-progressbar`,component:a},p=Object.values(s),m=Object.values(i),h=[0,25,50,75,100],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{sectionTitle:`Appearance × Size (progress=60)`,firstColumnHeader:`Appearance`,columnHeaders:p.map(e=>e.toUpperCase()),rows:m.map(e=>({variantLabel:e,cells:p.map(t=>(0,d.jsx)(`div`,{className:l.bar,children:(0,d.jsx)(a,{progress:60,size:t,appearance:e})},t))}))}),(0,d.jsx)(n,{sectionTitle:`Progress × Size (appearance=primary)`,firstColumnHeader:`progress`,columnHeaders:p.map(e=>e.toUpperCase()),rows:h.map(e=>({variantLabel:`${e}%`,cells:p.map(t=>(0,d.jsx)(`div`,{className:l.bar,children:(0,d.jsx)(a,{progress:e,size:t,appearance:i.Primary})},t))}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='Appearance × Size (progress=60)' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <div key={size} className={styles.bar}>
              <ProgressBar progress={60} size={size} appearance={appearance} />
            </div>)
    }))} />
      <StoryTable sectionTitle='Progress × Size (appearance=primary)' firstColumnHeader='progress' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyProgressValues.map(progress => ({
      variantLabel: \`\${progress}%\`,
      cells: keySizes.map(size => <div key={size} className={styles.bar}>
              <ProgressBar progress={progress} size={size} appearance={APPEARANCE.Primary} />
            </div>)
    }))} />
    </>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,f as default};
//# sourceMappingURL=ProgressBar.VisualMatrix.stories-BkmWTtZd.js.map