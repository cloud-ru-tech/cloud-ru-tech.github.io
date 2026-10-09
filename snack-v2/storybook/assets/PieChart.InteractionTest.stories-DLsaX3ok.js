import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-Ckcblt1a.js";import{n as s,t as c}from"./src-CQJqR30O.js";import{n as l,t as u}from"./testIds-CYgKL79G.js";import{c as d,s as f,u as p}from"./mockData-C7FM8FqB.js";import{n as m,t as h}from"./styles.module-B19Ea-6M.js";var g,_,v,y,b,x,S,C,w;e((()=>{c(),o(),p(),l(),h(),g=t(),{expect:_,fn:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x=v(),S={title:`Uikit Product/Data display/Charts/PieChart/Tests/Interaction`,id:`uikit-product-charts-piechart-tests-interaction`,component:s,parameters:{layout:`fullscreen`,controls:{disable:!0},figma:{disable:!0}},args:{data:d,options:{title:`Расходы по сервисам`,legendTitle:`Сервисы`},aggregatedLegend:{title:`Группы`,data:f,onAggregatedLegendItemClick:x},onPieSegmentClick:v(),onLegendItemClick:v(),"data-test-id":u.pieChart.root}},C={tags:[`test`,`dev`],render:e=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{width:`fluid`,children:[(0,g.jsx)(i,{children:`InteractionTest`}),(0,g.jsx)(n,{children:`Клик по сегменту и пунктам обеих легенд вызывает колбэки с данными пункта.`}),(0,g.jsx)(`div`,{className:m.chart,children:(0,g.jsx)(s,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=b(t);await n(`hover: сегмент увеличивается`,async()=>{let[e]=r.getAllByTestId(u.pieChart.segment);await y.hover(e),await _(e).toHaveAttribute(`data-hovered`,`true`),await y.unhover(e),await _(e).not.toHaveAttribute(`data-hovered`)}),await n(`click: сегмент → onPieSegmentClick`,async()=>{let t=r.getAllByTestId(u.pieChart.segment);await y.pointer({keys:`[MouseLeft>]`,target:t[1]}),await y.pointer({keys:`[/MouseLeft]`,target:t[1]}),await _(e.onPieSegmentClick).toHaveBeenCalledWith(d[1])}),await n(`click: пункт легенды → onLegendItemClick`,async()=>{let[t]=b(r.getByTestId(u.pieChart.legend)).getAllByTestId(u.pieChart.legendItem);await y.click(b(t).getByTestId(u.pieChart.legendLink)),await _(e.onLegendItemClick).toHaveBeenCalledWith(_.objectContaining({id:d[0].id}))}),await n(`click: пункт агрегированной легенды → onAggregatedLegendItemClick`,async()=>{let[e]=b(r.getByTestId(u.pieChart.aggregatedLegend)).getAllByTestId(u.pieChart.aggregatedLegendItem);await y.click(b(e).getByTestId(u.pieChart.legendLink)),await _(x).toHaveBeenCalledWith(f[0])})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по сегменту и пунктам обеих легенд вызывает колбэки с данными пункта.</DemoHint>
        <div className={styles.chart}>
          <PieChart {...args} />
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('hover: сегмент увеличивается', async () => {
      const [segment] = canvas.getAllByTestId(TEST_IDS.pieChart.segment);
      await userEvent.hover(segment);
      await expect(segment).toHaveAttribute('data-hovered', 'true');
      await userEvent.unhover(segment);
      await expect(segment).not.toHaveAttribute('data-hovered');
    });
    await step('click: сегмент → onPieSegmentClick', async () => {
      const segments = canvas.getAllByTestId(TEST_IDS.pieChart.segment);
      await userEvent.pointer({
        keys: '[MouseLeft>]',
        target: segments[1]
      });
      await userEvent.pointer({
        keys: '[/MouseLeft]',
        target: segments[1]
      });
      await expect(args.onPieSegmentClick).toHaveBeenCalledWith(PIE_DATA[1]);
    });
    await step('click: пункт легенды → onLegendItemClick', async () => {
      const legend = within(canvas.getByTestId(TEST_IDS.pieChart.legend));
      const [firstItem] = legend.getAllByTestId(TEST_IDS.pieChart.legendItem);
      await userEvent.click(within(firstItem).getByTestId(TEST_IDS.pieChart.legendLink));
      await expect(args.onLegendItemClick).toHaveBeenCalledWith(expect.objectContaining({
        id: PIE_DATA[0].id
      }));
    });
    await step('click: пункт агрегированной легенды → onAggregatedLegendItemClick', async () => {
      const legend = within(canvas.getByTestId(TEST_IDS.pieChart.aggregatedLegend));
      const [firstItem] = legend.getAllByTestId(TEST_IDS.pieChart.aggregatedLegendItem);
      await userEvent.click(within(firstItem).getByTestId(TEST_IDS.pieChart.legendLink));
      await expect(onAggregatedLegendItemClick).toHaveBeenCalledWith(PIE_AGGREGATED_LEGEND[0]);
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=PieChart.InteractionTest.stories-DLsaX3ok.js.map