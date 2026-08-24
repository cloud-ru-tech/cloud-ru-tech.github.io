import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-d1MamqAX.js";import{c,i as l,n as u,p as d,s as f,t as p}from"./testIds-DmNbIkuA.js";var m,h,g,_,v,y,b,x,S;e((()=>{f(),o(),l(),p(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Data display/PriceSummary/PriceSummarySmall/Tests/Interaction`,id:`uikit-product-pricesummary-pricesummarysmall-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},b=g(),x={tags:[`test`,`dev`],render:()=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Retry при dataError.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(u,{children:(0,m.jsx)(c,{value:9999999.99,dataError:!0,onRetry:b,"data-test-id":d.priceSummarySmall})})})]})}),play:async({canvasElement:e,step:t})=>{b.mockClear();let n=v(e).getByTestId(d.priceSummarySmall);await t(`retry button calls onRetry`,async()=>{await _.click(v(n).getByTestId(d.contentBlockRetry)),await h(b).toHaveBeenCalledTimes(1)})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Retry при dataError.</DemoHint>
        <DemoActions align='center'>
          <PriceSummaryFigmaSurface>
            <PriceSummarySmall value={9_999_999.99} dataError onRetry={onRetry} data-test-id={TEST_IDS.priceSummarySmall} />
          </PriceSummaryFigmaSurface>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onRetry.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.priceSummarySmall);
    await step('retry button calls onRetry', async () => {
      await userEvent.click(within(root).getByTestId(TEST_IDS.contentBlockRetry));
      await expect(onRetry).toHaveBeenCalledTimes(1);
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,y as default};
//# sourceMappingURL=PriceSummarySmall.InteractionTest.stories-QhkJRZMq.js.map