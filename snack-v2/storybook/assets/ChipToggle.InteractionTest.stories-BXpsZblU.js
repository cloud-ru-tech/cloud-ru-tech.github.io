import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C9_hbJyc.js";import{f as c,t as l,v as u,y as d}from"./src-D4QVprU1.js";import{n as f,t as p}from"./testIds-rYjH_ezV.js";var m,h,g,_,v,y,b,x;e((()=>{l(),o(),f(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Inputs & Forms/Chips/ChipToggle/Tests/Interaction`,id:`components-chips-chiptoggle-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Chip`,size:d.S,checked:!1,onChange:g(),"data-test-id":p.chipToggle.root}},b={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Клик и клавиатура вызывают onChange; disabled не пропускает события.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=v(t),i=r.getByTestId(p.chipToggle.root);await n(`click: calls onChange once`,async()=>{await _.click(i),h(e.onChange).toHaveBeenCalledTimes(1)}),await n(`keyboard: Space calls onChange again`,async()=>{r.getByTestId(u.input).focus(),await _.keyboard(` `),h(e.onChange).toHaveBeenCalledTimes(2)})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      // Корень — \`<label>\`, он не фокусируем; клавиатурный шаг адресует сам \`<input>\`.
      canvas.getByTestId(CHIP_TOGGLE_TEST_IDS.input).focus();
      await userEvent.keyboard(' ');
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`]}))();export{b as InteractionTest,x as __namedExportsOrder,y as default};
//# sourceMappingURL=ChipToggle.InteractionTest.stories-BXpsZblU.js.map