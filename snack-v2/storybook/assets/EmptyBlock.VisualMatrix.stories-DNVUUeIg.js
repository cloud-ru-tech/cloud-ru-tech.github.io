import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{fn as n,gn as r,i,nt as a,t as o}from"./iframe-CvASAC9b.js";import{V as s,t as c}from"./system-DqAC22Yn.js";import{r as l,t as u}from"./src-DT3LEk4S.js";import{i as d,t as f}from"./src-Bd6hSrrZ.js";var p,m,h,g,_=e((()=>{p=`_grid_846sy_2`,m=`_cellDesktop_846sy_8`,h=`_cellMobile_846sy_12`,g={grid:p,cellDesktop:m,cellMobile:h}})),v,y,b,x,S,C;e((()=>{a(),u(),c(),o(),f(),_(),v=t(),y={title:`Uikit Product/Layout/Layout/EmptyBlock`,id:`uikit-product-layout-emptyblock`,component:d,parameters:{layout:`fullscreen`}},b=(0,v.jsx)(l,{primaryAction:{label:`Label text`},secondaryAction:{label:`Label text`}}),x=[{layoutType:r.Desktop,label:`desktop (horizontal)`,cellClass:g.cellDesktop},{layoutType:r.Mobile,label:`mobile (vertical)`,cellClass:g.cellMobile}],S={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,v.jsx)(`div`,{className:g.grid,children:(0,v.jsx)(i,{sectionTitle:`Layout × Footer`,firstColumnHeader:`layoutType`,columnHeaders:[`without footer`,`with footer`],rows:x.map(({layoutType:e,label:t,cellClass:r})=>({variantLabel:t,cells:[!1,!0].map(i=>(0,v.jsx)(n,{layoutType:e,children:(0,v.jsx)(`div`,{className:r,children:(0,v.jsx)(d,{title:`Title text`,content:`Body text`,icon:{icon:s},footer:i?b:void 0})})},`${t}-${i}`))}))})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Layout × Footer' firstColumnHeader='layoutType' columnHeaders={['without footer', 'with footer']} rows={adaptiveLayouts.map(({
      layoutType,
      label,
      cellClass
    }) => ({
      variantLabel: label,
      cells: [false, true].map(withFooter => <AdaptiveProvider key={\`\${label}-\${withFooter}\`} layoutType={layoutType}>
              <div className={cellClass}>
                <EmptyBlock title='Title text' content='Body text' icon={{
            icon: PlaceholderSVG
          }} footer={withFooter ? footer : undefined} />
              </div>
            </AdaptiveProvider>)
    }))} />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`VisualMatrix`]}))();export{S as VisualMatrix,C as __namedExportsOrder,y as default};
//# sourceMappingURL=EmptyBlock.VisualMatrix.stories-DNVUUeIg.js.map