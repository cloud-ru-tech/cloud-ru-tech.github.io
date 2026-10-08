import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-DqaIN90t.js";import{n as s,t as c}from"./src-D5aNXdQI.js";import{n as l,t as u}from"./testIds-B8HfAsjd.js";import{c as d,s as f,u as p}from"./mockData-C7FM8FqB.js";import{n as m,t as h}from"./styles.module-B19Ea-6M.js";var g,_,v,y,b,x;e((()=>{c(),o(),p(),l(),h(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Data display/Charts/PieChart`,id:`uikit-product-charts-piechart`,component:s,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{data:d,options:{title:`Расходы по сервисам`,legendTitle:`Сервисы`,typographySize:`l`},showAggregatedLegend:!0,"data-test-id":u.pieChart.root},argTypes:{showAggregatedLegend:{name:`[Stories]: showAggregatedLegend`,control:`boolean`},aggregatedLegend:{table:{disable:!0}}}},b={tags:[`dev`,`test`],render:({showAggregatedLegend:e,...t})=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{width:`fluid`,children:[(0,g.jsx)(i,{children:`Playground`}),(0,g.jsx)(n,{children:`Наведите на сегмент, чтобы увидеть подпись и значение в центре диаграммы.`}),(0,g.jsx)(`div`,{className:m.chart,children:(0,g.jsx)(s,{...t,aggregatedLegend:e?{title:`Группы`,data:f}:t.aggregatedLegend})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(u.pieChart.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showAggregatedLegend,
    ...args
  }) => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Наведите на сегмент, чтобы увидеть подпись и значение в центре диаграммы.</DemoHint>
        <div className={styles.chart}>
          <PieChart {...args} aggregatedLegend={showAggregatedLegend ? {
          title: 'Группы',
          data: PIE_AGGREGATED_LEGEND
        } : args.aggregatedLegend} />
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pieChart.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=PieChart.Playground.stories--ZmlELnA.js.map