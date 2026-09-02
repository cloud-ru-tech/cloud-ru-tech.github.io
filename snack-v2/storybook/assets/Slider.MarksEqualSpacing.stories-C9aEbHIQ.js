import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D4MTfTET.js";import{i as c,n as l,t as u}from"./src-Cz-gOEiq.js";import{t as d}from"./testIds-DdwZawYJ.js";var f,p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),f=t(),{expect:p,fireEvent:m,fn:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Slider/Examples/MarksEqualSpacing`,id:`components-slider-examples-marksequalspacing`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{min:0,max:1e3,marks:{0:`0`,1:`1`,10:`10`,100:`100`,1e3:`1000`},marksEqualSpacing:!0,defaultValue:10,handleTip:!0,onChange:h(),onChangeComplete:h(),"data-test-id":c.root},decorators:[e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`MarksEqualSpacing`}),(0,f.jsx)(i,{children:`Нелинейные метки распределяются равномерно по треку.`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(e,{})})]})})]},y={tags:[`dev`,`test`],play:async({args:e,canvasElement:t,step:n})=>{let r=_(t).getByTestId(c.handle);await n(`keyboard: ArrowRight maps internal index to domain value`,async()=>{r.focus(),await g(()=>p(r).toHaveFocus()),m.keyDown(r,{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,which:39}),await g(()=>p(e.onChange).toHaveBeenCalled());let t=e.onChange.mock.calls,n=t[t.length-1]?.[0];p([1,10,100,1e3]).toContain(n)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const handle = canvas.getByTestId(TEST_IDS.handle);

    // useEqual=true → внутри wrap создаётся inner-arrow, которая мапит
    // internal-индекс обратно в domain-значение перед onChange. fireEvent.keyDown
    // нужен, потому что rc-slider не реагирует на userEvent.keyboard после
    // программного focus (см. test-environment-pitfalls.md §rc-slider).
    await step('keyboard: ArrowRight maps internal index to domain value', async () => {
      handle.focus();
      await waitFor(() => expect(handle).toHaveFocus());
      fireEvent.keyDown(handle, {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39
      });
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
      // После ArrowRight от defaultValue=10 (internal=2) шаг ведёт к next mark = 100.
      // Проверяем, что callback получил domain-значение (а не internal-индекс).
      const calls = (args.onChange as ReturnType<typeof fn>).mock.calls;
      const lastValue = calls[calls.length - 1]?.[0];
      expect([1, 10, 100, 1000]).toContain(lastValue);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`MarksEqualSpacing`]}))();export{y as MarksEqualSpacing,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Slider.MarksEqualSpacing.stories-C9aEbHIQ.js.map