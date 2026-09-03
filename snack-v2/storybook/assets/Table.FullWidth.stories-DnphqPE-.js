import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{l as n,t as r}from"./iframe-Bl-uTAel.js";import{i,t as a}from"./src-BND_BdqL.js";import{r as o,t as s}from"./decorators-CgTM46gO.js";import{n as c,o as l,r as u}from"./presetFixtures-BADETfg7.js";import{n as d,r as f}from"./testIds-CI7Zd4iR.js";import{n as p,t as m}from"./styles.module-s2CWiWjM.js";var h,g,_,v,y,b,x;e((()=>{a(),r(),s(),u(),f(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Data display/Table/Table/Examples/FullWidth`,id:`components-table-table-examples-fullwidth`,component:i,parameters:{layout:`padded`},decorators:[o]},y={data:c.slice(0,5),columns:l,pageSize:5,getRowId:e=>e.id,outline:!0},b={tags:[`dev`,`test`],render:()=>(0,h.jsxs)(`div`,{className:p.fullWidthDemo,children:[(0,h.jsxs)(n,{children:[`В широком контейнере: `,(0,h.jsx)(`code`,{children:`fullWidth=true`}),` (дефолт) растягивает таблицу; `,(0,h.jsx)(`code`,{children:`fullWidth=false`}),` — по сумме колонок.`]}),(0,h.jsxs)(`div`,{className:p.fullWidthDemoRow,children:[(0,h.jsx)(i,{...y,fullWidth:!0,"data-test-id":`${d.table.root}-full`}),(0,h.jsx)(i,{...y,fullWidth:!1,"data-test-id":`${d.table.root}-fit`})]})]}),play:async({canvasElement:e})=>{let t=_(e);await g(t.getByTestId(`${d.table.root}-full`)).toBeVisible(),await g(t.getByTestId(`${d.table.root}-fit`)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <div className={styles.fullWidthDemo}>
      <DemoHint>
        В широком контейнере: <code>fullWidth=true</code> (дефолт) растягивает таблицу; <code>fullWidth=false</code> —
        по сумме колонок.
      </DemoHint>
      <div className={styles.fullWidthDemoRow}>
        <SimpleTable {...baseProps} fullWidth data-test-id={\`\${TEST_IDS.table.root}-full\`} />
        <SimpleTable {...baseProps} fullWidth={false} data-test-id={\`\${TEST_IDS.table.root}-fit\`} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(\`\${TEST_IDS.table.root}-full\`)).toBeVisible();
    await expect(canvas.getByTestId(\`\${TEST_IDS.table.root}-fit\`)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`FullWidth`]}))();export{b as FullWidth,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Table.FullWidth.stories-DnphqPE-.js.map