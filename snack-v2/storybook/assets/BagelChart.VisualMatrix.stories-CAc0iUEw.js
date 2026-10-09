import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-9PX31bxi.js";import{t as i,u as a}from"./src-0KELxT6M.js";import{n as o,t as s}from"./styles.module-COAuPOk6.js";var c,l,u,d,f,p,m;e((()=>{i(),r(),s(),c=t(),l={title:`Uikit Product/Data display/Charts/BagelChart`,id:`uikit-product-charts-bagelchart`,component:a,parameters:{layout:`padded`,controls:{disable:!0},figma:{disable:!0}}},u=200,d=[{label:`low (≤50%)`,value:60},{label:`medium (50–75%)`,value:130},{label:`high (>75%)`,value:184},{label:`large numbers`,value:75e5,total:1e7}],f=[{label:`with title`,title:`RAM, GB`},{label:`without title`,title:void 0}],p={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,c.jsx)(n,{sectionTitle:`Level × title`,firstColumnHeader:`level`,columnHeaders:f.map(({label:e})=>e),rows:d.map(e=>({variantLabel:e.label,cells:f.map(({label:t,title:n})=>(0,c.jsx)(`div`,{className:o.chart,children:(0,c.jsx)(a,{value:e.value,total:`total`in e?e.total:u,title:n})},t))}))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <StoryTable sectionTitle='Level × title' firstColumnHeader='level' columnHeaders={TITLES.map(({
    label
  }) => label)} rows={LEVELS.map(level => ({
    variantLabel: level.label,
    cells: TITLES.map(({
      label,
      title
    }) => <div key={label} className={styles.chart}>
            <BagelChart value={level.value} total={'total' in level ? level.total : TOTAL} title={title} />
          </div>)
  }))} />
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,l as default};
//# sourceMappingURL=BagelChart.VisualMatrix.stories-CAc0iUEw.js.map