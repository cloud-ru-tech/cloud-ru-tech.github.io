import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{fn as n,gn as r,i,nt as a,t as o}from"./iframe-Du0zU9lI.js";import{n as s,t as c}from"./src-ZmL3WLIa.js";var l,u,d,f,p=e((()=>{l=`_grid_171tq_2`,u=`_cellDesktop_171tq_8`,d=`_cellMobile_171tq_12`,f={grid:l,cellDesktop:u,cellMobile:d}})),m,h,g,_,v;e((()=>{a(),o(),c(),p(),m=t(),h={title:`Uikit Product/Layout/Layout/NoAccess`,id:`uikit-product-layout-noaccess`,component:s,parameters:{layout:`fullscreen`}},g=[{layoutType:r.Desktop,label:`desktop (wide)`,cellClass:f.cellDesktop},{layoutType:r.Mobile,label:`mobile (narrow)`,cellClass:f.cellMobile}],_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{className:f.grid,children:(0,m.jsx)(i,{sectionTitle:`Layout × ServiceName`,firstColumnHeader:`layoutType`,columnHeaders:[`without serviceName`,`with serviceName`],rows:g.map(({layoutType:e,label:t,cellClass:r})=>({variantLabel:t,cells:[void 0,`Название сервиса`].map(i=>(0,m.jsx)(n,{layoutType:e,children:(0,m.jsx)(`div`,{className:r,children:(0,m.jsx)(s,{serviceName:i})})},`${t}-${i??`none`}`))}))})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Layout × ServiceName' firstColumnHeader='layoutType' columnHeaders={['without serviceName', 'with serviceName']} rows={adaptiveLayouts.map(({
      layoutType,
      label,
      cellClass
    }) => ({
      variantLabel: label,
      cells: [undefined, 'Название сервиса'].map(serviceName => <AdaptiveProvider key={\`\${label}-\${serviceName ?? 'none'}\`} layoutType={layoutType}>
              <div className={cellClass}>
                <NoAccess serviceName={serviceName} />
              </div>
            </AdaptiveProvider>)
    }))} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,h as default};
//# sourceMappingURL=NoAccess.VisualMatrix.stories-Cm3fmwOV.js.map