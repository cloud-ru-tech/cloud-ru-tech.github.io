import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,i as r,t as i}from"./src-olHW5IYG.js";import{c as a,n as o}from"./mockData-DkqJwWhB.js";import{n as s,t as c}from"./styles.module-84Pnr5X-.js";import{t as l}from"./testIds-DkA111po.js";var u,d,f=e((()=>{c(),u=t(),d=e=>(0,u.jsx)(`div`,{className:s.storyWrapper,children:(0,u.jsx)(e,{})})})),p,m,h,g,_,v;e((()=>{i(),a(),f(),l(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Data display/Quota/QuotaWidget`,id:`uikit-product-quota-quotawidget`,component:r,parameters:{layout:`padded`},decorators:[d]},_={tags:[`test`],args:{...o,onWidgetOpen:()=>void 0},play:async({canvasElement:e})=>{let t=h(e),r=h(document.body),i=t.getByTestId(n.quotaWidget.trigger);await m.click(i),await p(r.getByTestId(n.quotaWidget.content)).toBeVisible(),await p(r.getByTestId(n.quotaWidget.projectHeader)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=QuotaWidget.InteractionTest.stories-B790C3H7.js.map