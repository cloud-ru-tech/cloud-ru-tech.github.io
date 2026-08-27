import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BRJzdrhE.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,t as d}from"./testIds-C89VNXw4.js";var f,p,m,h,g,_,v,y,b;e((()=>{i(),r(),u(),c(),f=t(),p={title:`Uikit Product/Feedback/ErrorPages`,id:`uikit-product-errorpages`,component:l,parameters:{layout:`fullscreen`}},m=[a.FrontendError,a.PageUnavailable,a.PageNotFound,a.Offline,a.Redirect,a.Custom],h=[s.Cloud,s.Custom,s.None],g=e=>(0,f.jsx)(`div`,{className:o.matrixCell,children:e}),_=e=>{let t=d.matrix(e,`cloud`);return e===a.Custom?g((0,f.jsx)(l,{"data-test-id":t,errorType:a.Custom,custom:{title:`Custom title`,description:`Custom text`,statusCode:418},logoVariant:s.Cloud})):g((0,f.jsx)(l,{"data-test-id":t,errorType:e,logoVariant:s.Cloud}))},v=e=>{let t=d.matrix(`frontend`,e.toLowerCase());return e===s.Custom?g((0,f.jsx)(l,{"data-test-id":t,logoVariant:s.Custom,logo:(0,f.jsx)(`span`,{children:`Custom logo`})})):g((0,f.jsx)(l,{"data-test-id":t,logoVariant:e}))},y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:o.grid,children:[(0,f.jsx)(n,{sectionTitle:`Error type (logo = Cloud)`,firstColumnHeader:`errorType`,columnHeaders:[`sample`],rows:m.map(e=>({variantLabel:e,cells:[_(e)]}))}),(0,f.jsx)(n,{sectionTitle:`Logo variant (errorType = FrontendError)`,firstColumnHeader:`logoVariant`,columnHeaders:[`sample`],rows:h.map(e=>({variantLabel:e,cells:[v(e)]}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Error type (logo = Cloud)' firstColumnHeader='errorType' columnHeaders={['sample']} rows={errorTypes.map(errorType => ({
      variantLabel: errorType,
      cells: [renderByErrorType(errorType)]
    }))} />
      <StoryTable sectionTitle='Logo variant (errorType = FrontendError)' firstColumnHeader='logoVariant' columnHeaders={['sample']} rows={logoVariants.map(logoVariant => ({
      variantLabel: logoVariant,
      cells: [renderByLogo(logoVariant)]
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,p as default};
//# sourceMappingURL=ErrorPage.VisualMatrix.stories-CO9cHbPs.js.map