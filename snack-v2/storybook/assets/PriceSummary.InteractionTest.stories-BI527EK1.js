import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bb1kR6xz.js";import{o as c,t as l}from"./src-nZhlwu6k.js";import{f as u,i as d,n as f,p,r as m,s as h,t as g,u as _}from"./testIds-CgDilUXt.js";import{a as v,i as y,n as b}from"./constants-qgGV5crC.js";var x,S,C,w,T,E,D,O,k,A;e((()=>{l(),h(),o(),v(),d(),g(),x=t(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Uikit Product/Data display/PriceSummary/PriceSummary/Tests/Interaction`,id:`uikit-product-pricesummary-pricesummary-tests-interaction`,component:_,parameters:{layout:`fullscreen`,controls:{disable:!0}}},O=C(),k={tags:[`test`,`dev`],render:()=>(0,x.jsx)(s,{children:(0,x.jsxs)(r,{children:[(0,x.jsx)(a,{children:`InteractionTest`}),(0,x.jsx)(i,{children:`Аккордеон деталей заказа и смена периода.`}),(0,x.jsx)(n,{align:`center`,children:(0,x.jsx)(f,{children:(0,x.jsx)(m,{...y,invoice:b,invoiceExpandedDefault:!1,period:u.Month,periodOptions:[u.Month,u.Year],onPeriodChanged:O,"data-test-id":p.priceSummary})})})]})}),play:async({canvasElement:e,step:t})=>{O.mockClear();let n=E(e),r=E(document.body);await t(`accordion: expand order details`,async()=>{let e=n.getByTestId(p.priceSummary),t=E(e).getByTestId(p.orderDetails);await w.click(E(t).getByTestId(c.title)),await T(()=>S(E(e).getByTestId(p.orderDetailsContent)).toBeVisible())}),await t(`period dropdown: open and select year`,async()=>{let e=n.getByTestId(p.priceSummary),t=await T(()=>E(e).getByTestId(p.periodDropdown));await w.click(t);let i=await T(()=>r.getByTestId(p.periodOptionYear));await w.click(i),await S(O).toHaveBeenCalled(),await T(()=>S(E(e).getByTestId(p.periodDropdown)).toBeVisible())}),await t(`root remains visible`,async()=>{await S(n.getByTestId(p.priceSummary)).toBeVisible()})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Аккордеон деталей заказа и смена периода.</DemoHint>
        <DemoActions align='center'>
          <PriceSummaryFigmaSurface>
            <PriceSummaryStory {...PLAYGROUND_DEFAULT_ARGS} invoice={DEFAULT_INVOICE} invoiceExpandedDefault={false} period={PRICE_PERIOD.Month} periodOptions={[PRICE_PERIOD.Month, PRICE_PERIOD.Year]} onPeriodChanged={onPeriodChanged} data-test-id={TEST_IDS.priceSummary} />
          </PriceSummaryFigmaSurface>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onPeriodChanged.mockClear();
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('accordion: expand order details', async () => {
      const root = canvas.getByTestId(TEST_IDS.priceSummary);
      const orderDetails = within(root).getByTestId(TEST_IDS.orderDetails);
      await userEvent.click(within(orderDetails).getByTestId(ACCORDION_TEST_IDS.title));
      await waitFor(() => expect(within(root).getByTestId(TEST_IDS.orderDetailsContent)).toBeVisible());
    });
    await step('period dropdown: open and select year', async () => {
      const root = canvas.getByTestId(TEST_IDS.priceSummary);
      const trigger = await waitFor(() => within(root).getByTestId(TEST_IDS.periodDropdown));
      await userEvent.click(trigger);
      const option = await waitFor(() => body.getByTestId(TEST_IDS.periodOptionYear));
      await userEvent.click(option);
      await expect(onPeriodChanged).toHaveBeenCalled();
      await waitFor(() => expect(within(root).getByTestId(TEST_IDS.periodDropdown)).toBeVisible());
    });
    await step('root remains visible', async () => {
      await expect(canvas.getByTestId(TEST_IDS.priceSummary)).toBeVisible();
    });
  }
}`,...k.parameters?.docs?.source}}},A=[`InteractionTest`]}))();export{k as InteractionTest,A as __namedExportsOrder,D as default};
//# sourceMappingURL=PriceSummary.InteractionTest.stories-BI527EK1.js.map