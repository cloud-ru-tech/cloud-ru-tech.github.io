import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-n9OCAA8q.js";import{f as u,i as d,t as f}from"./src-9Q7tKWnp.js";import{t as p}from"./testIds-Dwjqwn32.js";import{a as m,o as h}from"./demoData-BV4kMKrF.js";var g,_,v,y,b,x,S;t((()=>{f(),g=e(n(),1),c(),h(),p(),_=r(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Layout & containers/Layout/Header/UserMenu`,id:`uikit-product-layout-header-usermenu`,id:`uikit-product-header-usermenu`,component:d,parameters:{layout:`fullscreen`},args:{profile:{fullName:`Ivan Petrov`,email:`ipetrov@cloud.ru`,inviteCount:1},theme:{value:`light`},settingItems:m,items:[{content:{label:`Option 1`}},{content:{label:`Option 2`}}]}},x={tags:[`dev`,`test`],render:function({theme:e,...t}){let[n,r]=(0,g.useState)(e?.value);return(0,_.jsx)(l,{children:(0,_.jsxs)(a,{width:`wide`,children:[(0,_.jsx)(s,{children:`Playground`}),(0,_.jsx)(o,{children:`Меню пользователя: профиль, тема, настройки и выход.`}),(0,_.jsx)(i,{align:`center`,children:(0,_.jsx)(d,{...t,theme:{value:n,onChange:r}})})]})})},play:async({canvasElement:e})=>{await v(y(e).getByTestId(u.userMenu.button)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=UserMenu.Playground.stories-DCeR11rH.js.map