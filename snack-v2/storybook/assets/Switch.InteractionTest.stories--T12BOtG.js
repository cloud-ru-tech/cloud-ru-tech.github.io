import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-jFn_-H4h.js";import{_ as c,c as l,t as u}from"./src-Cu4ne6y1.js";import{n as d,t as f}from"./testIds-qlmU7fvP.js";var p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Toggles/Switch/Tests/Interaction`,id:`components-toggles-switch-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:c.XS,defaultChecked:!1,onChange:h(),"data-test-id":f.switch.root}},y={tags:[`test`,`dev`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Клик переключает значение и вызывает onChange с новым булевым значением.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(l,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t).getByTestId(f.switch.nativeInput);await n(`click: triggers onChange(true)`,async()=>{await g.click(r),m(e.onChange).toHaveBeenCalledTimes(1),m(e.onChange).toHaveBeenLastCalledWith(!0)}),await n(`click again: triggers onChange(false)`,async()=>{await g.click(r),m(e.onChange).toHaveBeenCalledTimes(2),m(e.onChange).toHaveBeenLastCalledWith(!1)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик переключает значение и вызывает onChange с новым булевым значением.</DemoHint>
        <DemoActions align='center'>
          <Switch {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(TEST_IDS.switch.nativeInput);
    await step('click: triggers onChange(true)', async () => {
      await userEvent.click(input);
      expect(args.onChange).toHaveBeenCalledTimes(1);
      expect(args.onChange).toHaveBeenLastCalledWith(true);
    });
    await step('click again: triggers onChange(false)', async () => {
      await userEvent.click(input);
      expect(args.onChange).toHaveBeenCalledTimes(2);
      expect(args.onChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Switch.InteractionTest.stories--T12BOtG.js.map