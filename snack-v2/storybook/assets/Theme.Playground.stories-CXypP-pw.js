import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{D as n,M as r,N as i,P as a,_ as o,c as s,d as c,l,m as u,t as d,u as f}from"./iframe-CvASAC9b.js";import{n as p,t as m}from"./ThemePreview-BSHfqcYi.js";var h,g=e((()=>{h={root:`theme`}})),_,v,y,b,x,S;e((()=>{o(),d(),p(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Foundation & utilities/Theme/Overview`,id:`components-theme-overview`,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{brand:r.A,brandRole:i.Main,density:a.Comfort,acrylic:!1},argTypes:{brand:{control:`radio`,options:Object.values(r)},brandRole:{control:`select`,options:Object.values(i)},density:{control:`radio`,options:Object.values(a)},acrylic:{control:`boolean`}}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(f,{children:(0,_.jsxs)(c,{width:`wide`,children:[(0,_.jsx)(u,{children:`Оси оформления`}),(0,_.jsxs)(l,{children:[`Светлая/тёмная схема наследуется от аддона темы в тулбаре Storybook. Меняйте контролы `,(0,_.jsx)(`code`,{children:`brand`}),`,`,` `,(0,_.jsx)(`code`,{children:`brandRole`}),`, `,(0,_.jsx)(`code`,{children:`density`}),`, `,(0,_.jsx)(`code`,{children:`acrylic`}),` — `,(0,_.jsx)(`code`,{children:`ChildThemeProvider`}),` `,`переопределяет эти оси в поддереве (colorScheme наследуется), и реальные компоненты перекрашиваются.`]}),(0,_.jsx)(s,{block:!0,children:(0,_.jsx)(n,{value:{brand:e.brand,brandRole:e.brandRole,density:e.density,acrylic:e.acrylic},children:(0,_.jsx)(m,{testId:h.root})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(h.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Оси оформления</DemoTitle>
        <DemoHint>
          Светлая/тёмная схема наследуется от аддона темы в тулбаре Storybook. Меняйте контролы <code>brand</code>,{' '}
          <code>brandRole</code>, <code>density</code>, <code>acrylic</code> — <code>ChildThemeProvider</code>{' '}
          переопределяет эти оси в поддереве (colorScheme наследуется), и реальные компоненты перекрашиваются.
        </DemoHint>
        <DemoActions block>
          <ChildThemeProvider value={{
          brand: args.brand,
          brandRole: args.brandRole,
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
//# sourceMappingURL=Theme.Playground.stories-CXypP-pw.js.map