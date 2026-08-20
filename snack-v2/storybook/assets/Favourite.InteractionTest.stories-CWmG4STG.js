import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CvASAC9b.js";import{_ as c,m as l,o as u,t as d}from"./src-BgiQEFiE.js";import{n as f,t as p}from"./testIds-qlmU7fvP.js";var m,h,g,_,v,y,b,x;e((()=>{d(),o(),f(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Inputs & Forms/Toggles/Favourite/Tests/Interaction`,id:`components-toggles-favourite-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:c.XS,icon:l.Star,defaultChecked:!1,onChange:g(),"data-test-id":p.favourite.root}},b={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Клик по иконке избранного переключает значение и вызывает onChange.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(u,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=v(t).getByTestId(p.favourite.nativeInput);await n(`click: triggers onChange(true)`,async()=>{await _.click(r),h(e.onChange).toHaveBeenCalledTimes(1),h(e.onChange).toHaveBeenLastCalledWith(!0)}),await n(`click again: triggers onChange(false)`,async()=>{await _.click(r),h(e.onChange).toHaveBeenCalledTimes(2),h(e.onChange).toHaveBeenLastCalledWith(!1)})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по иконке избранного переключает значение и вызывает onChange.</DemoHint>
        <DemoActions align='center'>
          <Favourite {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(TEST_IDS.favourite.nativeInput);
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
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`]}))();export{b as InteractionTest,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Favourite.InteractionTest.stories-CWmG4STG.js.map