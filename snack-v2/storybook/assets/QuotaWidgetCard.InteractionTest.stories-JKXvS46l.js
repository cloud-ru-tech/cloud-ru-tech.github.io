import{i as e}from"./preload-helper-CCSz8wUY.js";import{o as t,t as n,u as r}from"./src-BJq-CCGl.js";import{c as i,i as a}from"./mockData-DkqJwWhB.js";import{n as o}from"./testIds-CgckiWez.js";import{n as s,t as c}from"./decorators-pHzjIPtL.js";var l,u,d,f,p,m;e((()=>{n(),i(),o(),c(),{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Uikit Product/Data display/Quota/QuotaWidgetCard`,id:`uikit-product-quota-quotawidgetcard`,component:t,parameters:{layout:`padded`}},p={tags:[`test`],decorators:[s],args:{quota:a,"data-test-id":r.quotaWidgetCard.root},play:async({canvasElement:e})=>{let t=d(e),n=d(document.body);await u.hover(t.getByTestId(r.quotaWidgetCard.root)),await l(await n.findByTestId(r.quotaWidgetCard.tooltip)).toBeVisible()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=QuotaWidgetCard.InteractionTest.stories-JKXvS46l.js.map