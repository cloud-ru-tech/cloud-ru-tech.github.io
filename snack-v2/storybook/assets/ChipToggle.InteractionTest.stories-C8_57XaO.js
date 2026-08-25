import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BiKgHgfb.js";import{f as c,t as l,v as u}from"./src-BlK_LQk1.js";import{n as d,t as f}from"./testIds-rYjH_ezV.js";var p,m,h,g,_,v,y,b;e((()=>{l(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Chips/ChipToggle/Tests/Interaction`,id:`components-chips-chiptoggle-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Chip`,size:u.S,checked:!1,onChange:h(),"data-test-id":f.chipToggle.root}},y={tags:[`test`,`dev`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Клик и клавиатура вызывают onChange; disabled не пропускает события.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t).getByTestId(f.chipToggle.root);await n(`click: calls onChange once`,async()=>{await g.click(r),m(e.onChange).toHaveBeenCalledTimes(1)}),await n(`keyboard: Space calls onChange again`,async()=>{r.focus(),await g.keyboard(` `),m(e.onChange).toHaveBeenCalledTimes(2)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик и клавиатура вызывают onChange; disabled не пропускает события.</DemoHint>
        <DemoActions align='center'>
          <ChipToggle {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.chipToggle.root);
    await step('click: calls onChange once', async () => {
      await userEvent.click(root);
      expect(args.onChange).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Space calls onChange again', async () => {
      root.focus();
      await userEvent.keyboard(' ');
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=ChipToggle.InteractionTest.stories-C8_57XaO.js.map