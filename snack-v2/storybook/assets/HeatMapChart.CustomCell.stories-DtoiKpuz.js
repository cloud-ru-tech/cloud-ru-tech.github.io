import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-DqaIN90t.js";import{c as s,t as c}from"./src-D5aNXdQI.js";import{n as l,t as u}from"./testIds-B8HfAsjd.js";import{a as d,i as f,n as p,r as m,u as h}from"./mockData-C7FM8FqB.js";import{n as g,t as _}from"./styles.module-ee_G-nQ9.js";function v(e){return`${e}%`}function y(e,t,n){return(0,b.jsx)(`span`,{className:g.customCell,children:n>=w?`▲ ${v(n)}`:``})}var b,x,S,C,w,T,E;e((()=>{c(),o(),h(),l(),_(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Uikit Product/Data display/Charts/HeatMapChart/Examples/CustomCell`,id:`uikit-product-charts-heatmapchart-examples-customcell`,component:s,parameters:{layout:`fullscreen`,controls:{disable:!0},figma:{disable:!0}}},w=80,T={tags:[`dev`,`test`],render:()=>(0,b.jsx)(r,{children:(0,b.jsxs)(a,{width:`fluid`,children:[(0,b.jsx)(i,{children:`CustomCell`}),(0,b.jsx)(n,{children:"`cellRender` полностью заменяет содержимое ячейки: здесь подписаны только пиковые значения."}),(0,b.jsx)(`div`,{className:g.chart,children:(0,b.jsx)(s,{"data-test-id":u.heatMapChart.root,data:p,options:{title:`Пиковая нагрузка`,height:360,domain:m,cellRender:y,axes:{xAxis:{ticks:f},yAxis:{ticks:d}}}})})]})}),play:async({canvasElement:e})=>{let t=S(e).getAllByTestId(u.heatMapChart.cell);await x(t).toHaveLength(p.length*p[0].length)}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>CustomCell</DemoTitle>
        <DemoHint>\`cellRender\` полностью заменяет содержимое ячейки: здесь подписаны только пиковые значения.</DemoHint>
        <div className={styles.chart}>
          <HeatMapChart data-test-id={TEST_IDS.heatMapChart.root} data={HEAT_MAP_DATA} options={{
          title: 'Пиковая нагрузка',
          height: 360,
          domain: HEAT_MAP_DOMAIN,
          cellRender: renderCell,
          axes: {
            xAxis: {
              ticks: HEAT_MAP_X_TICKS
            },
            yAxis: {
              ticks: HEAT_MAP_Y_TICKS
            }
          }
        }} />
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const cells = within(canvasElement).getAllByTestId(TEST_IDS.heatMapChart.cell);
    await expect(cells).toHaveLength(HEAT_MAP_DATA.length * HEAT_MAP_DATA[0].length);
  }
}`,...T.parameters?.docs?.source}}},E=[`CustomCell`]}))();export{T as CustomCell,E as __namedExportsOrder,C as default};
//# sourceMappingURL=HeatMapChart.CustomCell.stories-DtoiKpuz.js.map