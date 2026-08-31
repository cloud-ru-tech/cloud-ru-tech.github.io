import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CRw8NhXI.js";import{i as c,n as l,t as u}from"./src-D4gP9R7K.js";import{n as d}from"./testIds-Cipx9V7B.js";var f,p,m,h,g,_,v,y;e((()=>{u(),o(),d(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Actions/TitleClickable/Tests/Interaction`,id:`uikit-product-titleclickable-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}}},v={tags:[`test`,`dev`],args:{href:`#`,title:`Click me`,onClick:m(e=>{e.preventDefault(),e.stopPropagation()}),"data-test-id":c.root},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по заголовку вызывает onClick один раз.`}),(0,f.jsx)(n,{align:`center`,onClickCapture:e=>{e.target.closest(`a`)&&e.preventDefault()},children:(0,f.jsx)(l,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getByTestId(c.root);await n(`click: fires onClick once`,async()=>{await h.click(r),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Tab focuses the title`,async()=>{r.blur(),await h.tab(),await p(r).toHaveFocus()}),await n(`keyboard: Enter fires onClick`,async()=>{await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(2)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    href: '#',
    title: 'Click me',
    onClick: fn(e => {
      e.preventDefault();
      e.stopPropagation();
    }),
    'data-test-id': TEST_IDS.root
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по заголовку вызывает onClick один раз.</DemoHint>
        <DemoActions align='center' onClickCapture={e => {
        const anchor = (e.target as HTMLElement).closest('a');
        if (anchor) e.preventDefault();
      }}>
          <TitleClickable {...args} />
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
    await step('click: fires onClick once', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Tab focuses the title', async () => {
      root.blur();
      await userEvent.tab();
      await expect(root).toHaveFocus();
    });
    await step('keyboard: Enter fires onClick', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=TitleClickable.InteractionTest.stories-XZ4l9fl1.js.map