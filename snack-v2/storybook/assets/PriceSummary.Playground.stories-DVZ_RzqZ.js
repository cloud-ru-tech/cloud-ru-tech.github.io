import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{i as c,n as l,p as u,r as d,s as f,t as p,u as m}from"./testIds-DA2Id2qL.js";import{a as h,i as g}from"./constants-CokaOQx1.js";var _,v,y,b,x,S;e((()=>{f(),o(),h(),c(),p(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Data display/PriceSummary/PriceSummary`,id:`uikit-product-pricesummary-pricesummary`,component:m,parameters:{layout:`fullscreen`},args:{...g,"data-test-id":u.priceSummary},argTypes:{loading:{control:`boolean`},dataError:{control:`boolean`},invoiceExpandedDefault:{control:`boolean`},discount:{table:{disable:!0}},invoice:{table:{disable:!0}}}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:`Playground`}),(0,_.jsx)(i,{children:"Showcase по Figma `2909:5733`: promoTag, период, скидки, итог, подсказка, детализация заказа и ссылка."}),(0,_.jsx)(n,{align:`center`,children:(0,_.jsx)(l,{children:(0,_.jsx)(d,{...e})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(u.priceSummary)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Showcase по Figma \`2909:5733\`: promoTag, период, скидки, итог, подсказка, детализация заказа и ссылка.
        </DemoHint>
        <DemoActions align='center'>
          <PriceSummaryFigmaSurface>
            <PriceSummaryStory {...args} />
          </PriceSummaryFigmaSurface>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.priceSummary)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=PriceSummary.Playground.stories-DVZ_RzqZ.js.map