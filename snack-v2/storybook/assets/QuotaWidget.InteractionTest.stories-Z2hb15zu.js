import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r,u as i}from"./src-BFnSwWfy.js";import{c as a,n as o}from"./mockData-DkqJwWhB.js";import{n as s,t as c}from"./styles.module-84Pnr5X-.js";import{t as l}from"./testIds-CxL_20z4.js";var u,d,f=e((()=>{c(),u=t(),d=e=>(0,u.jsx)(`div`,{className:s.storyWrapper,children:(0,u.jsx)(e,{})})})),p,m,h,g,_,v;e((()=>{r(),a(),f(),l(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Data display/Quota/QuotaWidget`,id:`uikit-product-quota-quotawidget`,component:n,parameters:{layout:`padded`},decorators:[d]},_={tags:[`test`],args:{...o,onWidgetOpen:()=>void 0},play:async({canvasElement:e})=>{let t=h(e),n=h(document.body),r=t.getByTestId(i.quotaWidget.trigger);await m.click(r),await p(n.getByTestId(i.quotaWidget.content)).toBeVisible(),await p(n.getByTestId(i.quotaWidget.projectHeader)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  args: {
    ...BASE_QUOTA_WIDGET_PROPS,
    onWidgetOpen: () => undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByTestId(TEST_IDS.quotaWidget.trigger);
    await userEvent.click(trigger);
    await expect(body.getByTestId(TEST_IDS.quotaWidget.content)).toBeVisible();
    await expect(body.getByTestId(TEST_IDS.quotaWidget.projectHeader)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`InteractionTest`]}))();export{_ as InteractionTest,v as __namedExportsOrder,g as default};
//# sourceMappingURL=QuotaWidget.InteractionTest.stories-Z2hb15zu.js.map