import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-n9OCAA8q.js";import{f as c,t as l,u}from"./src-IcWy25cT.js";import{n as d,t as f}from"./testIds-CT-um0Ad.js";var p,m,h,g,_,v,y,b;e((()=>{l(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Uikit Product/Layout & containers/Layout/Header Legacy/Logo/tests`,id:`uikit-product-layout-header-legacy-logo-tests`,component:u,parameters:{layout:`fullscreen`}},y={tags:[`dev`,`test`],args:{href:`#`,mode:c.Prod,"data-test-id":f.root,onClick:h()},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Interaction`}),(0,p.jsx)(i,{children:`Клик по логотипу вызывает onClick.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(u,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t),i=r.getByTestId(f.root);await n(`logo is visible`,async()=>{await m(i).toBeVisible(),await m(r.getByTestId(f.icon)).toBeVisible()}),await n(`click calls onClick`,async()=>{await g.click(i),await m(e.onClick).toHaveBeenCalledOnce()})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    href: '#',
    mode: HEADER_LOGO_MODE.Prod,
    'data-test-id': TEST_IDS.root,
    onClick: fn()
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Клик по логотипу вызывает onClick.</DemoHint>
        <DemoActions align='center'>
          <Logo {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    await step('logo is visible', async () => {
      await expect(root).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.icon)).toBeVisible();
    });
    await step('click calls onClick', async () => {
      await userEvent.click(root);
      await expect(args.onClick).toHaveBeenCalledOnce();
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Logo.InteractionTest.stories-DHdROrw0.js.map