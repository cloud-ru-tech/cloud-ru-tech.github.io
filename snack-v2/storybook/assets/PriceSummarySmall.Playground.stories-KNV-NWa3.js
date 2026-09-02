import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DQTa2Tvz.js";import{c,i as l,n as u,p as d,s as f,t as p}from"./testIds-Bdye6JJ0.js";import{n as m,t as h}from"./constants-CKetCIYo.js";var g,_,v,y,b,x;e((()=>{f(),o(),l(),p(),m(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Data display/PriceSummary/PriceSummarySmall`,id:`uikit-product-pricesummary-pricesummarysmall`,component:c,parameters:{layout:`fullscreen`},args:{...h,"data-test-id":d.priceSummarySmall},argTypes:{loading:{control:`boolean`},dataError:{control:`boolean`}}},b={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:"Showcase по Figma `2909:8947`: метка «Итого», сумма и ссылка «Подробнее о стоимости»."}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(u,{children:(0,g.jsx)(c,{...e})})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(d.priceSummarySmall)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Showcase по Figma \`2909:8947\`: метка «Итого», сумма и ссылка «Подробнее о стоимости».</DemoHint>
        <DemoActions align='center'>
          <PriceSummaryFigmaSurface>
            <PriceSummarySmall {...args} />
          </PriceSummaryFigmaSurface>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.priceSummarySmall)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=PriceSummarySmall.Playground.stories-KNV-NWa3.js.map