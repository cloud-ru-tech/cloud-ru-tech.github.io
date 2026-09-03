import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,t as l}from"./testIds-MMuVxgSD.js";var u,d,f,p,m,h,g;e((()=>{n(),c(),o(),u=t(),{expect:d,fn:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Uikit Product/Feedback/ErrorPages`,id:`uikit-product-errorpages`,component:s,parameters:{layout:`fullscreen`},args:{errorType:r.FrontendError,logoVariant:a.Cloud,mainPageUrl:`/`,showMainButton:!0,showSupport:!0,"data-test-id":l.root},argTypes:{errorType:{control:`select`,options:Object.values(r)},logoVariant:{control:`radio`,options:[a.Cloud,a.None]},showSupport:{name:`[Stories]: showSupport`,control:`boolean`}}},h={tags:[`dev`,`test`],render:({errorType:e,logoVariant:t,showSupport:n,...a})=>{let o=n?f():void 0;return(0,u.jsx)(`div`,{className:i.playground,children:e===r.Custom?(0,u.jsx)(s,{...a,logoVariant:t,errorType:r.Custom,custom:{title:`Custom title`,description:`Custom text`,statusCode:418},onSupportCenterClick:o}):(0,u.jsx)(s,{...a,logoVariant:t,errorType:e,onSupportCenterClick:o})})},play:async({canvasElement:e})=>{await d(p(e).getByTestId(l.root)).toBeVisible()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    errorType,
    logoVariant,
    showSupport,
    ...args
  }) => {
    const onSupportCenterClick = showSupport ? fn() : undefined;
    return <div className={styles.playground}>
        {errorType === ERROR_TYPE.Custom ? <ErrorPage {...args} logoVariant={logoVariant} errorType={ERROR_TYPE.Custom} custom={{
        title: 'Custom title',
        description: 'Custom text',
        statusCode: 418
      }} onSupportCenterClick={onSupportCenterClick} /> : <ErrorPage {...args} logoVariant={logoVariant} errorType={errorType} onSupportCenterClick={onSupportCenterClick} />}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`]}))();export{h as Playground,g as __namedExportsOrder,m as default};
//# sourceMappingURL=ErrorPage.Playground.stories-k7Wp4lne.js.map