import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CSZ3Qkp5.js";import{i as c,n as l,t as u}from"./src-BHLAW1_z.js";import{t as d}from"./testIds-ByHdqW1p.js";var f,p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),f=t(),{expect:p,fireEvent:m,fn:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Slider/Examples/Range`,id:`components-slider-examples-range`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{range:!0,min:0,max:100,step:10,defaultValue:[20,70],onChange:h(),onChangeComplete:h(),"data-test-id":c.root},decorators:[e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`Range`}),(0,f.jsx)(i,{children:`Слайдер с двумя ползунками для выбора диапазона.`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(e,{})})]})})]},y={tags:[`dev`,`test`],play:async({args:e,canvasElement:t,step:n})=>{let r=_(t).getAllByTestId(c.handle);p(r.length).toBe(2),await n(`keyboard: ArrowRight on first handle increments lower bound`,async()=>{r[0].focus(),await g(()=>p(r[0]).toHaveFocus()),m.keyDown(r[0],{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,which:39}),await g(()=>p(e.onChange).toHaveBeenCalled())})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const handles = canvas.getAllByTestId(TEST_IDS.handle);
    expect(handles.length).toBe(2);

    // \`fireEvent.keyDown\` вместо \`userEvent.keyboard\` — rc-slider не реагирует
    // на keyboard после программного \`.focus()\` в storybook-test browser'е.
    await step('keyboard: ArrowRight on first handle increments lower bound', async () => {
      handles[0].focus();
      await waitFor(() => expect(handles[0]).toHaveFocus());
      fireEvent.keyDown(handles[0], {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39
      });
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Range`]}))();export{y as Range,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Slider.Range.stories-BAus0sEJ.js.map