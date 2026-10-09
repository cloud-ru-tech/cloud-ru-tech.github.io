import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-oxFvG_Ov.js";import{_ as i,c as a,t as o}from"./src-Drx8RFnP.js";import{a as s,i as c,n as l,r as u,u as d}from"./mockData-C7FM8FqB.js";import{n as f,t as p}from"./styles.module-ee_G-nQ9.js";function m(e,t,n){return(0,g.jsxs)(`strong`,{className:f.customCell,children:[n,`%`]})}function h(e,t){let n=e!==1;return{xAxis:{ticks:c,position:t,label:n?`Время`:void 0},yAxis:{ticks:s,label:n?`День`:void 0}}}var g,_,v,y,b,x;e((()=>{o(),r(),d(),p(),g=t(),_={title:`Uikit Product/Data display/Charts/HeatMapChart`,id:`uikit-product-charts-heatmapchart`,component:a,parameters:{layout:`padded`,controls:{disable:!0},figma:{disable:!0}}},v=Object.values(i),y=[{label:`axes + legend`,options:{title:`Загрузка CPU, %`,height:420}},{label:`no axis labels`,options:{title:`Загрузка CPU, %`,height:420}},{label:`no title, no legend`,options:{height:280,legend:{show:!1}}},{label:`cellRender`,options:{height:280,legend:{show:!1},cellRender:m}}],b={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,g.jsx)(n,{sectionTitle:`Variant × xAxis.position`,firstColumnHeader:`variant`,cellAlign:`start`,columnHeaders:v,rows:y.map(({label:e,options:t},n)=>({variantLabel:e,cells:v.map(e=>(0,g.jsx)(`div`,{className:f.chartCompact,children:(0,g.jsx)(a,{data:l,options:{...t,domain:u,axes:h(n,e)}})},e))}))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <StoryTable sectionTitle='Variant × xAxis.position' firstColumnHeader='variant' cellAlign='start' columnHeaders={POSITIONS} rows={VARIANTS.map(({
    label,
    options
  }, variantIndex) => ({
    variantLabel: label,
    cells: POSITIONS.map(position => <div key={position} className={styles.chartCompact}>
            <HeatMapChart data={HEAT_MAP_DATA} options={{
        ...options,
        domain: HEAT_MAP_DOMAIN,
        axes: getAxes(variantIndex, position)
      }} />
          </div>)
  }))} />
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=HeatMapChart.VisualMatrix.stories-DlZ28u10.js.map