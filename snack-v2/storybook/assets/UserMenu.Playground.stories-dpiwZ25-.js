import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c,u as l}from"./iframe-qs8RgOhH.js";import{f as u,i as d,t as f}from"./src-BesQBTqK.js";import{t as p}from"./testIds-DJil61P4.js";import{a as m,o as h}from"./demoData-6Aow_pXh.js";var g,_,v,y,b,x,S;t((()=>{f(),g=e(n(),1),c(),h(),p(),_=r(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Layout & containers/Layout/Header/UserMenu`,id:`uikit-product-layout-header-usermenu`,id:`uikit-product-header-usermenu`,component:d,parameters:{layout:`fullscreen`},args:{profile:{fullName:`Ivan Petrov`,email:`ipetrov@cloud.ru`,inviteCount:1},theme:{value:`light`},settingItems:m,items:[{content:{label:`Option 1`}},{content:{label:`Option 2`}}]}},x={tags:[`dev`,`test`],render:function({theme:e,...t}){let[n,r]=(0,g.useState)(e?.value);return(0,_.jsx)(a,{children:(0,_.jsxs)(s,{width:`wide`,children:[(0,_.jsx)(o,{children:`Playground`}),(0,_.jsx)(i,{children:`Меню пользователя: профиль, тема, настройки и выход.`}),(0,_.jsx)(l,{align:`center`,children:(0,_.jsx)(d,{...t,theme:{value:n,onChange:r}})})]})})},play:async({canvasElement:e})=>{await v(y(e).getByTestId(u.userMenu.button)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=UserMenu.Playground.stories-dpiwZ25-.js.map