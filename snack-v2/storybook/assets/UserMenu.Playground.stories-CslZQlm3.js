import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c,u as l}from"./iframe-s8V4E6XA.js";import{f as u,i as d,t as f}from"./src-BVxuwUvy.js";import{t as p}from"./testIds-D3jkzC7D.js";import{a as m,c as h,o as g,s as _}from"./demoData-BcqMrVyI.js";var v,y,b,x,S,C,w;t((()=>{f(),v=e(n(),1),c(),h(),p(),y=r(),{expect:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Uikit Product/Layout & containers/Layout/Header/UserMenu`,id:`uikit-product-layout-header-usermenu`,id:`uikit-product-header-usermenu`,component:d,parameters:{layout:`fullscreen`},args:{profile:{fullName:`Ivan Petrov`,email:`ipetrov@cloud.ru`,inviteCount:1},theme:{value:`light`},settingItems:m,topItems:[{content:{label:`Option 1`}},{content:{label:`Option 2`}}],organizationItems:_,bottomItems:g}},C={tags:[`dev`,`test`],render:function({theme:e,...t}){let[n,r]=(0,v.useState)(e?.value);return(0,y.jsx)(a,{children:(0,y.jsxs)(s,{width:`wide`,children:[(0,y.jsx)(o,{children:`Playground`}),(0,y.jsx)(i,{children:`Меню пользователя: профиль, тема, настройки и выход.`}),(0,y.jsx)(l,{align:`center`,children:(0,y.jsx)(d,{...t,theme:{value:n,onChange:r}})})]})})},play:async({canvasElement:e})=>{await b(x(e).getByTestId(u.userMenu.button)).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  // Тема хранится в state стори: со статическим \`value\` из args выбранной оставалась бы
  // одна и та же тема, и переключение не было бы видно.
  render: function Render({
    theme,
    ...args
  }: UserMenuProps) {
    const [themeMode, setThemeMode] = useState<ThemeMode | undefined>(theme?.value);
    return <DemoPage>
        <DemoPanel width='wide'>
          <DemoTitle>Playground</DemoTitle>
          <DemoHint>Меню пользователя: профиль, тема, настройки и выход.</DemoHint>
          <DemoActions align='center'>
            <UserMenu {...args} theme={{
            value: themeMode,
            onChange: setThemeMode
          }} />
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.userMenu.button)).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,S as default};
//# sourceMappingURL=UserMenu.Playground.stories-CslZQlm3.js.map