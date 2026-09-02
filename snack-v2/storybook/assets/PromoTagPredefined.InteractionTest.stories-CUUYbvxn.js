import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{c}from"./src-DfWPC5Sy.js";import{t as l}from"./src-FdKlpcRb.js";import{a as u,n as d,o as f,t as p}from"./src-CPdSfwXr.js";import{n as m,t as h}from"./testIds-xCXLb8l8.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{l(),p(),o(),m(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=v(e=>{e.preventDefault()}),C={title:`Uikit Product/Data display/PromoTagPredefined/Tests/Interaction`,id:`uikit-product-promotagpredefined-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}}},w={tags:[`test`,`dev`],render:()=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Tooltip по hover/click и клик по support-ссылке в connecting.`}),(0,g.jsxs)(n,{align:`center`,children:[(0,g.jsx)(d,{variant:f.Connecting,tooltip:{trigger:c.Hover,onSupportClick:S},"data-test-id":h.promoTagHover}),(0,g.jsx)(d,{variant:f.Partner,tooltip:{trigger:c.Click},"data-test-id":h.promoTagClickTrigger}),(0,g.jsx)(d,{variant:f.Connecting,tooltip:{trigger:c.Click,onSupportClick:S},"data-test-id":h.promoTagSupport})]})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e),r=n.getByTestId(h.promoTagHover),i=n.getByTestId(h.promoTagClickTrigger),a=n.getByTestId(h.promoTagSupport);await t(`hover: opens tooltip with support link`,async()=>{await y.hover(r),await b(()=>{_(x(document.body).getByTestId(u.tooltipContent)).toBeVisible()},{timeout:2e3}),_(x(document.body).getByTestId(u.supportLink)).toBeVisible()}),await t(`unhover: closes tooltip`,async()=>{await y.unhover(r),await b(()=>{_(x(document.body).queryByTestId(u.tooltipContent)).toBeNull()})}),await t(`connecting: support link calls onSupportClick`,async()=>{S.mockClear(),await y.click(a),await b(()=>{_(x(document.body).getByTestId(u.supportLink)).toBeVisible()}),await y.click(x(document.body).getByTestId(u.supportLink)),await _(S).toHaveBeenCalledOnce(),await y.click(a),await b(()=>{_(x(document.body).queryByTestId(u.tooltipContent)).toBeNull()})}),await t(`click trigger: opens tooltip`,async()=>{await y.click(i),await b(()=>{_(x(document.body).getByTestId(u.tooltipContent)).toBeVisible()})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Tooltip по hover/click и клик по support-ссылке в connecting.</DemoHint>
        <DemoActions align='center'>
          <PromoTagPredefined variant={VARIANTS.Connecting} tooltip={{
          trigger: TRIGGER.Hover,
          onSupportClick
        }} data-test-id={TEST_IDS.promoTagHover} />
          <PromoTagPredefined variant={VARIANTS.Partner} tooltip={{
          trigger: TRIGGER.Click
        }} data-test-id={TEST_IDS.promoTagClickTrigger} />
          <PromoTagPredefined variant={VARIANTS.Connecting} tooltip={{
          trigger: TRIGGER.Click,
          onSupportClick
        }} data-test-id={TEST_IDS.promoTagSupport} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const hoverTrigger = canvas.getByTestId(TEST_IDS.promoTagHover);
    const clickTrigger = canvas.getByTestId(TEST_IDS.promoTagClickTrigger);
    const supportTrigger = canvas.getByTestId(TEST_IDS.promoTagSupport);
    await step('hover: opens tooltip with support link', async () => {
      await userEvent.hover(hoverTrigger);
      await waitFor(() => {
        expect(within(document.body).getByTestId(COMPONENT_TEST_IDS.tooltipContent)).toBeVisible();
      }, {
        timeout: 2000
      });
      expect(within(document.body).getByTestId(COMPONENT_TEST_IDS.supportLink)).toBeVisible();
    });
    await step('unhover: closes tooltip', async () => {
      await userEvent.unhover(hoverTrigger);
      await waitFor(() => {
        expect(within(document.body).queryByTestId(COMPONENT_TEST_IDS.tooltipContent)).toBeNull();
      });
    });
    await step('connecting: support link calls onSupportClick', async () => {
      onSupportClick.mockClear();
      await userEvent.click(supportTrigger);
      await waitFor(() => {
        expect(within(document.body).getByTestId(COMPONENT_TEST_IDS.supportLink)).toBeVisible();
      });
      await userEvent.click(within(document.body).getByTestId(COMPONENT_TEST_IDS.supportLink));
      await expect(onSupportClick).toHaveBeenCalledOnce();
      await userEvent.click(supportTrigger);
      await waitFor(() => {
        expect(within(document.body).queryByTestId(COMPONENT_TEST_IDS.tooltipContent)).toBeNull();
      });
    });
    await step('click trigger: opens tooltip', async () => {
      await userEvent.click(clickTrigger);
      await waitFor(() => {
        expect(within(document.body).getByTestId(COMPONENT_TEST_IDS.tooltipContent)).toBeVisible();
      });
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=PromoTagPredefined.InteractionTest.stories-CUUYbvxn.js.map