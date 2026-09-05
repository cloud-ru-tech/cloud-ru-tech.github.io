import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C2bZDhP2.js";import{n as i,o as a,r as o,t as s}from"./testIds-_V9wpmGA.js";var c,l,u,d=e((()=>{c=`_grid_1wsfl_4`,l=`_widthDemoFrame_1wsfl_9`,u={grid:c,widthDemoFrame:l}})),f,p,m,h,g,_,v,y;e((()=>{r(),o(),i(),d(),f=t(),p={a:`Очень длинное значение поля A, чтобы было заметно поведение fixed и full ширины в матрице`,b:!1},m=[{label:`Field A`,accessorKey:`a`},{label:`Field B`,accessorKey:`b`}],h={title:`Uikit Product/Data display/InfoRow/InfoGroup`,id:`uikit-product-inforow-infogroup`,component:a,parameters:{layout:`padded`}},g=[`single`,`double`],_=[`fixed`,`full`],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:u.grid,children:_.map(e=>(0,f.jsx)(n,{sectionTitle:`width = ${e}`,firstColumnHeader:`columns`,columnHeaders:[`rendered`],rows:g.map(t=>({variantLabel:t,cells:[(0,f.jsx)(`div`,{className:u.widthDemoFrame,children:(0,f.jsx)(a,{data:p,items:m,columns:t,width:e,"data-test-id":s.infoGroup.matrix(t,e)})},`${t}-${e}`)]}))},e))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  // Каждый \`width\` — отдельная StoryTable с одной demo-колонкой. Демо-фрейм 920px нужен,
  // чтобы \`fixed\` (cap ≈900px) визуально отличался от \`full\`. Две такие колонки рядом дали
  // бы таблицу ~1900px, которая выходит за пределы кадра и обрезалась справа на снимке.
  render: () => <div className={styles.grid}>
      {widths.map(width => <StoryTable key={width} sectionTitle={\`width = \${width}\`} firstColumnHeader='columns' columnHeaders={['rendered']} rows={columnsOpts.map(columns => ({
      variantLabel: columns,
      cells: [<div key={\`\${columns}-\${width}\`} className={styles.widthDemoFrame}>
                <InfoGroup<Row> data={data} items={items} columns={columns} width={width} data-test-id={TEST_IDS.infoGroup.matrix(columns, width)} />
              </div>]
    }))} />)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,h as default};
//# sourceMappingURL=InfoGroup.VisualMatrix.stories-CXYqc5Np.js.map