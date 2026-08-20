import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,t as r,u as i}from"./iframe-Bd5xtg2w.js";import{i as a,t as o,u as s}from"./src-DdhNOeau.js";import{c,n as l}from"./mockData-DkqJwWhB.js";import{n as u,t as d}from"./styles.module-84Pnr5X-.js";import{t as f}from"./testIds-CA0zY2eQ.js";var p,m,h,g,_,v;e((()=>{o(),r(),c(),d(),f(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Data display/Quota/QuotaWidget`,id:`uikit-product-quota-quotawidget`,component:a,parameters:{layout:`fullscreen`},args:{...l,"data-test-id":s.quotaWidget.root}},_={args:{loading:!1,canEditQuota:!0},render:e=>(0,p.jsx)(i,{children:(0,p.jsx)(n,{children:(0,p.jsx)(`div`,{className:u.storyWrapper,children:(0,p.jsx)(a,{...e})})})}),tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(s.quotaWidget.trigger)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    canEditQuota: true
  },
  render: args => <DemoPage>
      <DemoPanel>
        <div className={styles.storyWrapper}>
          <QuotaWidget {...args} />
        </div>
      </DemoPanel>
    </DemoPage>,
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.quotaWidget.trigger)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=QuotaWidget.Playground.stories-CaSBGTER.js.map