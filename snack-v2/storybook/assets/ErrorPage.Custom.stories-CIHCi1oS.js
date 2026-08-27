import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BRJzdrhE.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,t as h}from"./testIds-C89VNXw4.js";var g,_,v,y,b,x;e((()=>{c(),o(),m(),f(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Feedback/ErrorPages/Examples/Custom`,id:`uikit-product-errorpages-examples-custom`,component:p,parameters:{layout:`fullscreen`}},b={tags:[`dev`,`test`],render:()=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`Custom`}),(0,g.jsx)(i,{children:`Полностью кастомный контент: свой заголовок, код статуса, кнопка и логотип.`}),(0,g.jsx)(n,{block:!0,children:(0,g.jsx)(`div`,{className:u.frame,children:(0,g.jsx)(p,{"data-test-id":h.root,errorType:l.Custom,logoVariant:d.Custom,logo:(0,g.jsx)(`span`,{children:`ACME`}),mainPageUrl:`/dashboard`,custom:{title:`Quota exceeded`,description:`Your project reached its resource limit. Upgrade the plan to continue.`,statusCode:429,mainButton:{label:`Upgrade plan`,href:`/billing`},showMainPageLink:!0,showBackLink:!0}})})})]})}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByTestId(h.root)).toBeVisible(),await _(t.getByTestId(h.statusCode)).toHaveTextContent(`429`),await _(t.getByTestId(h.mainButton)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Custom</DemoTitle>
        <DemoHint>Полностью кастомный контент: свой заголовок, код статуса, кнопка и логотип.</DemoHint>
        <DemoActions block>
          <div className={styles.frame}>
            <ErrorPage data-test-id={TEST_IDS.root} errorType={ERROR_TYPE.Custom} logoVariant={LOGO_VARIANT.Custom} logo={<span>ACME</span>} mainPageUrl='/dashboard' custom={{
            title: 'Quota exceeded',
            description: 'Your project reached its resource limit. Upgrade the plan to continue.',
            statusCode: 429,
            mainButton: {
              label: 'Upgrade plan',
              href: '/billing'
            },
            showMainPageLink: true,
            showBackLink: true
          }} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.root)).toBeVisible();
    await expect(canvas.getByTestId(TEST_IDS.statusCode)).toHaveTextContent('429');
    await expect(canvas.getByTestId(TEST_IDS.mainButton)).toBeVisible();
  }
}`,...b.parameters?.docs?.source},description:{story:"`ERROR_TYPE.Custom` + `custom` позволяют задать заголовок, текст, код статуса,\nглавную кнопку и видимость ссылок. Логотип — `LOGO_VARIANT.Custom` со своим узлом.",...b.parameters?.docs?.description}}},x=[`Custom`]}))();export{b as Custom,x as __namedExportsOrder,y as default};
//# sourceMappingURL=ErrorPage.Custom.stories-CIHCi1oS.js.map