import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-oxFvG_Ov.js";import{f as i,m as a,o,p as s,t as c}from"./src-Drx8RFnP.js";import{l,u}from"./mockData-C7FM8FqB.js";import{n as d,t as f}from"./LayeredChart-Ybyy3_gY.js";var p,m,h,g,_,v,y;e((()=>{c(),r(),u(),d(),p=t(),m={title:`Uikit Product/Data display/Charts/InteractiveChart`,id:`uikit-product-charts-interactivechart`,component:o,parameters:{layout:`padded`,controls:{disable:!0},figma:{disable:!0}}},h={width:360,height:220,data:l},g=[{label:`line / linear`,props:{drawStyle:i.Line,lineInterpolation:s.Linear}},{label:`line / spline`,props:{drawStyle:i.Line,lineInterpolation:s.Spline}},{label:`line / stepAfter`,props:{drawStyle:i.Line,lineInterpolation:s.StepAfter}},{label:`line / stepBefore`,props:{drawStyle:i.Line,lineInterpolation:s.StepBefore}},{label:`bars`,props:{drawStyle:i.Bars}},{label:`barsLeft`,props:{drawStyle:i.BarsLeft}},{label:`barsRight`,props:{drawStyle:i.BarsRight}},{label:`points`,props:{drawStyle:i.Points}}],_=[{label:`with title`,title:`Запросы к API`},{label:`without title`,title:void 0}],v={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{sectionTitle:`type=default: drawStyle / lineInterpolation`,firstColumnHeader:`drawStyle`,cellAlign:`start`,columnHeaders:[`chart`],rows:g.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,p.jsx)(f,{type:a.Default,...h,...t},e)]}))}),(0,p.jsx)(n,{sectionTitle:`type=boxPlot × title`,firstColumnHeader:`type`,cellAlign:`start`,columnHeaders:_.map(({label:e})=>e),rows:[{variantLabel:a.BoxPlot,cells:_.map(({label:e,title:t})=>(0,p.jsx)(f,{type:a.BoxPlot,drawStyle:i.Line,title:t,...h},e))}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <>
      <StoryTable sectionTitle='type=default: drawStyle / lineInterpolation' firstColumnHeader='drawStyle' cellAlign='start' columnHeaders={['chart']} rows={DRAW_VARIANTS.map(({
      label,
      props
    }) => ({
      variantLabel: label,
      cells: [<LayeredChart key={label} type={PLOT_TYPES.Default} {...BASE} {...props} />]
    }))} />
      <StoryTable sectionTitle='type=boxPlot × title' firstColumnHeader='type' cellAlign='start' columnHeaders={TITLES.map(({
      label
    }) => label)} rows={[{
      variantLabel: PLOT_TYPES.BoxPlot,
      cells: TITLES.map(({
        label,
        title
      }) => <LayeredChart key={label} type={PLOT_TYPES.BoxPlot} drawStyle={DRAW_STYLES.Line} title={title} {...BASE} />)
    }]} />
    </>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=InteractiveChart.VisualMatrix.stories-DqFzohhX.js.map