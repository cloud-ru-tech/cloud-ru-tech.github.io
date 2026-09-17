import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-B1vKEkYA.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,t as d}from"./testIds-FOatM8ym.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{i(),r(),u(),c(),f=t(),p={title:`Uikit Product/Feedback/ErrorPages`,id:`uikit-product-errorpages`,component:l,parameters:{layout:`fullscreen`}},m=[a.FrontendError,a.PageUnavailable,a.PageNotFound,a.Offline,a.Redirect,a.Custom],h=[s.Cloud,s.Custom,s.None],g=e=>(0,f.jsx)(`div`,{className:o.matrixCell,children:e}),_=[{label:`desktop / 1248`,className:o.matrixCell},{label:`tablet / 834`,className:o.matrixCellTablet},{label:`mobile / 360`,className:o.matrixCellMobile}],v=({label:e,className:t})=>(0,f.jsx)(`div`,{className:t,children:(0,f.jsx)(l,{"data-test-id":d.matrix(`frontend`,e.split(` `)[0]),logoVariant:s.Cloud})}),y=e=>{let t=d.matrix(e,`cloud`);return e===a.Custom?g((0,f.jsx)(l,{"data-test-id":t,errorType:a.Custom,custom:{title:`Custom title`,description:`Custom text`,statusCode:418},logoVariant:s.Cloud})):g((0,f.jsx)(l,{"data-test-id":t,errorType:e,logoVariant:s.Cloud}))},b=e=>{let t=d.matrix(`frontend`,e.toLowerCase());return e===s.Custom?g((0,f.jsx)(l,{"data-test-id":t,logoVariant:s.Custom,logo:(0,f.jsx)(`span`,{children:`Custom logo`})})):g((0,f.jsx)(l,{"data-test-id":t,logoVariant:e}))},x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:o.grid,children:[(0,f.jsx)(n,{sectionTitle:`Error type (logo = Cloud)`,firstColumnHeader:`errorType`,columnHeaders:[`sample`],rows:m.map(e=>({variantLabel:e,cells:[y(e)]}))}),(0,f.jsx)(n,{sectionTitle:`Logo variant (errorType = FrontendError)`,firstColumnHeader:`logoVariant`,columnHeaders:[`sample`],rows:h.map(e=>({variantLabel:e,cells:[b(e)]}))}),(0,f.jsx)(n,{sectionTitle:`Container width (errorType = FrontendError, logo = Cloud)`,firstColumnHeader:`ширина контейнера`,columnHeaders:[`sample`],rows:_.map(e=>({variantLabel:e.label,cells:[v(e)]}))})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      <StoryTable sectionTitle='Container width (errorType = FrontendError, logo = Cloud)' firstColumnHeader='ширина контейнера' columnHeaders={['sample']} rows={containerWidths.map(width => ({
      variantLabel: width.label,
      cells: [renderByContainerWidth(width)]
    }))} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,p as default};
//# sourceMappingURL=ErrorPage.VisualMatrix.stories-S3z-P08U.js.map