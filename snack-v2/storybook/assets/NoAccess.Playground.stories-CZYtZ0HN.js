import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{n as c,t as l}from"./src-CTi8VwYS.js";import{n as u,t as d}from"./testIds-Ippb2Lb2.js";var f,p,m,h,g,_;e((()=>{o(),l(),u(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Layout & containers/Layout/Layout/NoAccess`,id:`uikit-product-layout-layout-noaccess`,id:`uikit-product-layout-noaccess`,component:c,parameters:{layout:`fullscreen`},args:{serviceName:`Название сервиса`,"data-test-id":d.noAccess.root}},g={tags:[`dev`,`test`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`wide`,children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Экран ограниченного доступа с локализованным сообщением.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await p(m(e).getByTestId(d.noAccess.root)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Экран ограниченного доступа с локализованным сообщением.</DemoHint>
        <DemoActions align='center'>
          <NoAccess {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.noAccess.root)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=NoAccess.Playground.stories-CZYtZ0HN.js.map