import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{I as n,L as r,R as i,d as a,f as o,g as s,j as c,p as l,t as u,u as d,y as f}from"./iframe-qs8RgOhH.js";import{n as p,t as m}from"./ThemePreview-CBxVh_MQ.js";var h,g=e((()=>{h={root:`theme`}})),_,v,y,b,x,S;e((()=>{f(),u(),p(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Foundation & utilities/Theme/Overview`,id:`components-theme-overview`,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{brand:n.CloudConsole,density:r.Comfort,acrylic:!1},argTypes:{brand:{control:`select`,options:Object.values(n)},platform:{control:`radio`,options:Object.values(i)},density:{control:`radio`,options:Object.values(r)},acrylic:{control:`boolean`}}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(o,{children:(0,_.jsxs)(l,{width:`wide`,children:[(0,_.jsx)(s,{children:`Оси оформления`}),(0,_.jsxs)(a,{children:[`Светлая/тёмная схема наследуется от аддона темы в тулбаре Storybook. Меняйте контролы `,(0,_.jsx)(`code`,{children:`brand`}),`,`,` `,(0,_.jsx)(`code`,{children:`platform`}),`, `,(0,_.jsx)(`code`,{children:`density`}),`, `,(0,_.jsx)(`code`,{children:`acrylic`}),` — `,(0,_.jsx)(`code`,{children:`ChildThemeProvider`}),` `,`переопределяет эти оси в поддереве (colorScheme наследуется), и реальные компоненты перекрашиваются. Без`,` `,(0,_.jsx)(`code`,{children:`platform`}),` наследуется платформа из декоратора Storybook (переключатель Layout).`]}),(0,_.jsx)(d,{block:!0,children:(0,_.jsx)(c,{value:{brand:e.brand,platform:e.platform,density:e.density,acrylic:e.acrylic},children:(0,_.jsx)(m,{testId:h.root})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(h.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Оси оформления</DemoTitle>
        <DemoHint>
          Светлая/тёмная схема наследуется от аддона темы в тулбаре Storybook. Меняйте контролы <code>brand</code>,{' '}
          <code>platform</code>, <code>density</code>, <code>acrylic</code> — <code>ChildThemeProvider</code>{' '}
          переопределяет эти оси в поддереве (colorScheme наследуется), и реальные компоненты перекрашиваются. Без{' '}
          <code>platform</code> наследуется платформа из декоратора Storybook (переключатель Layout).
        </DemoHint>
        <DemoActions block>
          <ChildThemeProvider value={{
          brand: args.brand,
          platform: args.platform,
          density: args.density,
          acrylic: args.acrylic
        }}>
            <ThemePreview testId={TEST_IDS.root} />
          </ChildThemeProvider>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=Theme.Playground.stories-CGJ1Zs0p.js.map