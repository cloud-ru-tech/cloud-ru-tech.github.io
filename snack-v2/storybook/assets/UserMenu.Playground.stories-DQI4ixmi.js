import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{f as c,i as l,t as u}from"./src-C7JSK_fd.js";import{t as d}from"./testIds-CbTHXQw8.js";import{a as f,o as p}from"./demoData-ARIIhhOX.js";var m,h,g,_,v,y;e((()=>{u(),o(),p(),d(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Layout/Header/UserMenu`,id:`uikit-product-header-usermenu`,component:l,parameters:{layout:`fullscreen`},args:{profile:{fullName:`Ivan Petrov`,email:`ipetrov@cloud.ru`,inviteCount:1},theme:{value:`light`},settingItems:f,items:[{content:{label:`Option 1`}},{content:{label:`Option 2`}}]}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`wide`,children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Меню пользователя: профиль, тема, настройки и выход.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(l,{...e})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(c.userMenu.button)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Меню пользователя: профиль, тема, настройки и выход.</DemoHint>
        <DemoActions align='center'>
          <UserMenu {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.userMenu.button)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=UserMenu.Playground.stories-DQI4ixmi.js.map