import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-9PX31bxi.js";import{s as i,t as a}from"./src-B80iX_S3.js";import{n as o,t as s}from"./src-0KELxT6M.js";import{c,s as l,u}from"./mockData-C7FM8FqB.js";import{n as d,t as f}from"./styles.module-B19Ea-6M.js";var p,m,h,g,_,v,y,b;e((()=>{a(),s(),r(),u(),f(),p=t(),m={title:`Uikit Product/Data display/Charts/PieChart`,id:`uikit-product-charts-piechart`,component:o,parameters:{layout:`padded`,controls:{disable:!0},figma:{disable:!0}}},h=Object.values(i),g=[{label:`legend`,legendTitle:void 0},{label:`legendTitle`,legendTitle:`Сервисы`}],_=`Расходы по сервисам`,v={title:`Группы`,data:l},y={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,p.jsxs)(`div`,{className:d.grid,children:[(0,p.jsx)(n,{sectionTitle:`typographySize`,firstColumnHeader:`typographySize`,cellAlign:`start`,columnHeaders:[`legendTitle + aggregatedLegend`],rows:h.map(e=>({variantLabel:`typographySize=${e}`,cells:[(0,p.jsx)(`div`,{className:d.chart,children:(0,p.jsx)(o,{data:c,options:{title:_,legendTitle:`Сервисы`,typographySize:e},aggregatedLegend:v})},e)]}))}),(0,p.jsx)(n,{sectionTitle:`Legend (typographySize=l)`,firstColumnHeader:`aggregatedLegend`,cellAlign:`start`,columnHeaders:g.map(({label:e})=>e),rows:[{variantLabel:`none`,cells:g.map(({label:e,legendTitle:t})=>(0,p.jsx)(`div`,{className:d.chartCompact,children:(0,p.jsx)(o,{data:c,options:{title:_,legendTitle:t}})},e))}]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='typographySize' firstColumnHeader='typographySize' cellAlign='start' columnHeaders={['legendTitle + aggregatedLegend']} rows={SIZES.map(size => ({
      variantLabel: \`typographySize=\${size}\`,
      cells: [<div key={size} className={styles.chart}>
              <PieChart data={PIE_DATA} options={{
          title: TITLE,
          legendTitle: 'Сервисы',
          typographySize: size
        }} aggregatedLegend={AGGREGATED_LEGEND} />
            </div>]
    }))} />
      <StoryTable sectionTitle='Legend (typographySize=l)' firstColumnHeader='aggregatedLegend' cellAlign='start' columnHeaders={LEGENDS.map(({
      label
    }) => label)} rows={[{
      variantLabel: 'none',
      cells: LEGENDS.map(({
        label,
        legendTitle
      }) => <div key={label} className={styles.chartCompact}>
                <PieChart data={PIE_DATA} options={{
          title: TITLE,
          legendTitle
        }} />
              </div>)
    }]} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,m as default};
//# sourceMappingURL=PieChart.VisualMatrix.stories-D61BPJZr.js.map