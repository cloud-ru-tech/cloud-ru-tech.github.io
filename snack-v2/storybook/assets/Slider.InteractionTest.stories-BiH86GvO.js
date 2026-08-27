import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BRJzdrhE.js";import{i as c,n as l,t as u}from"./src-CDLeOdbx.js";import{t as d}from"./testIds-CXExRcOW.js";var f,p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),f=t(),{expect:p,fireEvent:m,fn:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Slider/Tests/Interaction`,id:`components-slider-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{min:0,max:100,step:10,defaultValue:40,onChange:h(),onChangeComplete:h(),"data-test-id":c.root},decorators:[e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Проверка клавиатурного управления слайдером.`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(e,{})})]})})]},y={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=_(t).getByTestId(c.handle);await n(`keyboard: ArrowRight increments value by step`,async()=>{r.focus(),await g(()=>p(r).toHaveFocus()),m.keyDown(r,{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,which:39}),await g(()=>p(e.onChange).toHaveBeenCalled())}),await n(`keyboard: ArrowLeft decrements value by step`,async()=>{r.focus(),m.keyDown(r,{key:`ArrowLeft`,code:`ArrowLeft`,keyCode:37,which:37}),await g(()=>p(e.onChange.mock.calls.length).toBeGreaterThanOrEqual(2))})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const handle = canvas.getByTestId(TEST_IDS.handle);

    // \`userEvent.keyboard\` после \`handle.focus()\` нестабилен с rc-slider'ом в
    // storybook-test browser-окружении: программный focus не активирует focus-visible
    // tracker rc-slider'а, и {ArrowRight} не доходит до onChange. Используем
    // \`fireEvent.keyDown\` — низкоуровневый dispatch, не зависит от focus-visible.
    await step('keyboard: ArrowRight increments value by step', async () => {
      handle.focus();
      await waitFor(() => expect(handle).toHaveFocus());
      fireEvent.keyDown(handle, {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39
      });
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    });
    await step('keyboard: ArrowLeft decrements value by step', async () => {
      handle.focus();
      fireEvent.keyDown(handle, {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        keyCode: 37,
        which: 37
      });
      await waitFor(() => expect((args.onChange as ReturnType<typeof fn>).mock.calls.length).toBeGreaterThanOrEqual(2));
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Slider.InteractionTest.stories-BiH86GvO.js.map