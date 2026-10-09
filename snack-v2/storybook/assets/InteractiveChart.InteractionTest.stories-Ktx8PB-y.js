import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-oxFvG_Ov.js";import{f as s,m as c,o as l,t as u}from"./src-Drx8RFnP.js";import{n as d,t as f}from"./testIds-C-9pFCw_.js";import{o as p,u as m}from"./mockData-C7FM8FqB.js";import{n as h,t as g}from"./LayeredChart-Ybyy3_gY.js";var _,v,y,b,x,S,C,w;e((()=>{u(),o(),m(),d(),h(),_=t(),{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Uikit Product/Data display/Charts/InteractiveChart/Tests/Interaction`,id:`uikit-product-charts-interactivechart-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0},figma:{disable:!0}},args:{data:p,type:c.BoxPlot,drawStyle:s.Line,title:`Распределение по корзинам`,width:640,height:360,"data-test-id":f.interactiveChart.root}},C={tags:[`test`,`dev`],render:e=>(0,_.jsx)(r,{children:(0,_.jsxs)(a,{width:`fluid`,children:[(0,_.jsx)(i,{children:`InteractionTest`}),(0,_.jsx)(n,{children:`В box plot легенда uPlot работает как тултип: появляется при наведении и скрывается при уходе.`}),(0,_.jsx)(g,{...e})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e),r=await n.findByTestId(f.interactiveChart.overlay),i=n.getByTestId(f.interactiveChart.tooltip);await t(`initial: тултип скрыт`,async()=>{await v(i).not.toBeVisible()}),await t(`hover: тултип появляется`,async()=>{await y.hover(r),await b(()=>v(i).toBeVisible())}),await t(`unhover: тултип скрывается`,async()=>{await y.unhover(r),await b(()=>v(i).not.toBeVisible())})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          В box plot легенда uPlot работает как тултип: появляется при наведении и скрывается при уходе.
        </DemoHint>
        <LayeredChart {...args} />
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const overlay = await canvas.findByTestId(TEST_IDS.interactiveChart.overlay);
    const tooltip = canvas.getByTestId(TEST_IDS.interactiveChart.tooltip);
    await step('initial: тултип скрыт', async () => {
      await expect(tooltip).not.toBeVisible();
    });
    await step('hover: тултип появляется', async () => {
      await userEvent.hover(overlay);
      await waitFor(() => expect(tooltip).toBeVisible());
    });
    await step('unhover: тултип скрывается', async () => {
      await userEvent.unhover(overlay);
      await waitFor(() => expect(tooltip).not.toBeVisible());
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=InteractiveChart.InteractionTest.stories-Ktx8PB-y.js.map