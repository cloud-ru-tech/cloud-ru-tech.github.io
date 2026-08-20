import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{r as i,t as a}from"./src-CCaBCq3s.js";import{a as o,i as s,n as c,t as l}from"./src-BCjQW9g22.js";import{n as u,t as d}from"./styles.module-B3HXEZm3.js";var f,p,m,h,g,_,v;e((()=>{l(),a(),r(),d(),f=t(),p={title:`Snack/Layout & containers/Block`,id:`components-block`,component:c},m=[s.S,s.M,s.L],h=Object.values(o),g=Object.values(i),_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:u.matrix,children:[(0,f.jsx)(`div`,{className:u.externalWrapper,children:(0,f.jsx)(n,{sectionTitle:`View × Size`,firstColumnHeader:`View`,columnHeaders:m.map(e=>e.toUpperCase()),rows:h.map(e=>({variantLabel:e,cells:m.map(t=>(0,f.jsx)(c,{view:e,size:t,children:(0,f.jsx)(`span`,{className:u.sampleContent,children:`# slot content`})},t))}))})}),(0,f.jsx)(`div`,{className:u.externalWrapper,children:(0,f.jsx)(n,{sectionTitle:`BackgroundPredefined × View`,firstColumnHeader:`BackgroundPredefined`,columnHeaders:h.map(e=>e.toUpperCase()),rows:g.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(c,{view:t,size:s.M,backgroundPredefined:e,children:(0,f.jsx)(`span`,{className:u.sampleContent,children:`# slot content`})},t))}))})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <div className={styles.externalWrapper}>
        <StoryTable sectionTitle='View × Size' firstColumnHeader='View' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyViews.map(view => ({
        variantLabel: view,
        cells: keySizes.map(size => <Block key={size} view={view} size={size}>
                <span className={styles.sampleContent}># slot content</span>
              </Block>)
      }))} />
      </div>

      <div className={styles.externalWrapper}>
        <StoryTable sectionTitle='BackgroundPredefined × View' firstColumnHeader='BackgroundPredefined' columnHeaders={keyViews.map(v => v.toUpperCase())} rows={keyFills.map(fill => ({
        variantLabel: fill,
        cells: keyViews.map(view => <Block key={view} view={view} size={SIZE.M} backgroundPredefined={fill}>
                <span className={styles.sampleContent}># slot content</span>
              </Block>)
      }))} />
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,p as default};
//# sourceMappingURL=Block.VisualMatrix.stories-C5BTcwIe.js.map