import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,f as n,t as r}from"./src-olHW5IYG.js";import{c as i,i as a}from"./mockData-DkqJwWhB.js";import{n as o}from"./testIds-CaEZXywV.js";import{n as s,t as c}from"./decorators-pHzjIPtL.js";var l,u,d,f,p,m;e((()=>{r(),i(),o(),c(),{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Uikit Product/Data display/Quota/QuotaWidgetCard`,id:`uikit-product-quota-quotawidgetcard`,component:t,parameters:{layout:`padded`}},p={tags:[`test`],decorators:[s],args:{quota:a,"data-test-id":n.quotaWidgetCard.root},play:async({canvasElement:e})=>{let t=d(e),r=d(document.body);await u.hover(t.getByTestId(n.quotaWidgetCard.root)),await l(await r.findByTestId(n.quotaWidgetCard.tooltip)).toBeVisible()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  decorators: [withCardWidth],
  args: {
    quota: MOCK_QUOTA_GREEN,
    'data-test-id': TEST_IDS.quotaWidgetCard.root
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.hover(canvas.getByTestId(TEST_IDS.quotaWidgetCard.root));
    await expect(await body.findByTestId(TEST_IDS.quotaWidgetCard.tooltip)).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}},m=[`InteractionTest`]}))();export{p as InteractionTest,m as __namedExportsOrder,f as default};
//# sourceMappingURL=QuotaWidgetCard.InteractionTest.stories-DiPExzeT.js.map