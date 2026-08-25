import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,f as i,l as a,m as o,t as s,u as c}from"./iframe-BiKgHgfb.js";import{i as l,t as u}from"./src-D2dv-1t0.js";import{O as d,f,t as p}from"./src-CAvT0rqJ.js";import{n as m,t as h}from"./testIds-Cw54JeO2.js";function g(e){return(0,_.jsx)(c,{children:(0,_.jsxs)(r,{width:`narrow`,children:[(0,_.jsx)(o,{children:`InteractionTest`}),(0,_.jsx)(a,{children:`Числовой uncontrolled-слайдер (commit по blur/Enter, снэп к шагу, reject нечислового ввода, ArrowRight по ручке), range-слайдер (readonly input min – max, ввод — no-op), снэп к меткам и unbindInputFromMarks.`}),(0,_.jsxs)(n,{align:`center`,children:[(0,_.jsx)(i,{width:`narrow`,children:(0,_.jsx)(f,{"data-test-id":h.fieldSlider.numericRoot,label:`Volume`,min:0,max:100,step:10,defaultValue:50,onChange:e.onChange})}),(0,_.jsx)(i,{width:`narrow`,children:(0,_.jsx)(f,{"data-test-id":h.fieldSlider.rangeRoot,label:`Price range`,range:!0,min:0,max:100,step:1,defaultValue:[20,80]})}),(0,_.jsx)(i,{width:`narrow`,children:(0,_.jsx)(f,{"data-test-id":h.fieldSlider.marksRoot,label:`Quality`,min:0,max:100,step:null,marks:C,defaultValue:55})}),(0,_.jsx)(i,{width:`narrow`,children:(0,_.jsx)(f,{"data-test-id":h.fieldSlider.unboundRoot,label:`Quality (unbound)`,min:0,max:100,step:null,marks:C,unbindInputFromMarks:!0,defaultValue:55})})]})]})})}var _,v,y,b,x,S,C,w,T,E;e((()=>{p(),u(),s(),m(),_=t(),{expect:v,fireEvent:y,fn:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={10:`15`,50:`55`,90:`95`},w={title:`Snack/Inputs & Forms/Fields/FieldSlider/Tests/Interaction`,id:`components-fields-fieldslider-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onChange:b()},render:e=>(0,_.jsx)(g,{...e})},T={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=S(t),i=r.getByTestId(h.fieldSlider.numericRoot),a=r.getByTestId(h.fieldSlider.rangeRoot),o=r.getByTestId(h.fieldSlider.marksRoot),s=r.getByTestId(h.fieldSlider.unboundRoot),c=S(i).getByTestId(d.fieldSliderInput),u=S(i).getByTestId(l.handle),f=S(a).getByTestId(d.fieldSliderInput),p=S(o).getByTestId(d.fieldSliderInput),m=S(s).getByTestId(d.fieldSliderInput);await n(`renders input and handle with the initial value`,async()=>{await v(c).toBeVisible(),await v(u).toBeVisible(),await v(c).toHaveValue(`50`)}),await n(`typing then Enter commits the value snapped to the step grid`,async()=>{e.onChange.mockClear(),await x.clear(c),await x.type(c,`37`),await x.keyboard(`{Enter}`),await v(c).toHaveValue(`40`),await v(e.onChange).toHaveBeenCalledWith(40)}),await n(`blur commits the value (snap to step)`,async()=>{e.onChange.mockClear(),c.focus(),await x.clear(c),await x.type(c,`23`),await x.tab(),await v(c).toHaveValue(`20`),await v(e.onChange).toHaveBeenCalledWith(20)}),await n(`out-of-range typing clamps to max on commit`,async()=>{e.onChange.mockClear(),await x.clear(c),await x.type(c,`999`),await x.keyboard(`{Enter}`),await v(c).toHaveValue(`100`),await v(e.onChange).toHaveBeenCalledWith(100)}),await n(`non-numeric keystroke is rejected (input rejects letters, no onChange)`,async()=>{e.onChange.mockClear(),await x.clear(c),await x.type(c,`abc`),await v(c).toHaveValue(``),await v(e.onChange).not.toHaveBeenCalled()}),await n(`ArrowRight on the focusable handle moves the value and fires onChange`,async()=>{await x.clear(c),await x.type(c,`50`),await x.keyboard(`{Enter}`),e.onChange.mockClear(),u.focus(),y.keyDown(u,{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,which:39}),await v(e.onChange).toHaveBeenCalled()}),await n(`range input is readonly and shows the formatted min – max`,async()=>{await v(f).toHaveValue(`20 – 80`),await v(f).toHaveAttribute(`readonly`)}),await n(`typing into a range input is a no-op (value unchanged)`,async()=>{await x.type(f,`5`),await v(f).toHaveValue(`20 – 80`)}),await n(`off-mark typing snaps to the nearest mark on Enter`,async()=>{await x.clear(p),await x.type(p,`60`),await x.keyboard(`{Enter}`),await v(p).toHaveValue(`55`)}),await n(`unbindInputFromMarks keeps the off-mark value (step=null, no snap)`,async()=>{await x.clear(m),await x.type(m,`63`),await x.keyboard(`{Enter}`),await v(m).toHaveValue(`63`)})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const numericRoot = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.numericRoot);
    const rangeRoot = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.rangeRoot);
    const marksRoot = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.marksRoot);
    const unboundRoot = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.unboundRoot);
    const numericInput = within(numericRoot).getByTestId(TEST_IDS.fieldSliderInput);
    // Фокусируемая ручка rc-slider несёт собственный data-test-id (slider__handle) от @cloud-ru/ds-slider —
    // это нужный узел для клавиатуры (rc-slider слушает keyCode/which именно на ней).
    const numericHandle = within(numericRoot).getByTestId(SLIDER_TEST_IDS.handle);
    const rangeInput = within(rangeRoot).getByTestId(TEST_IDS.fieldSliderInput);
    const marksInput = within(marksRoot).getByTestId(TEST_IDS.fieldSliderInput);
    const unboundInput = within(unboundRoot).getByTestId(TEST_IDS.fieldSliderInput);
    await step('renders input and handle with the initial value', async () => {
      await expect(numericInput).toBeVisible();
      await expect(numericHandle).toBeVisible();
      await expect(numericInput).toHaveValue('50');
    });
    await step('typing then Enter commits the value snapped to the step grid', async () => {
      (args.onChange as ReturnType<typeof fn>).mockClear();
      await userEvent.clear(numericInput);
      await userEvent.type(numericInput, '37');
      await userEvent.keyboard('{Enter}');
      // step=10: 37 снэпит к ближайшему допустимому 40.
      await expect(numericInput).toHaveValue('40');
      await expect(args.onChange).toHaveBeenCalledWith(40);
    });
    await step('blur commits the value (snap to step)', async () => {
      (args.onChange as ReturnType<typeof fn>).mockClear();
      numericInput.focus();
      await userEvent.clear(numericInput);
      await userEvent.type(numericInput, '23');
      // userEvent.tab() уводит фокус с поля и даёт надёжный синтетический blur
      // (raw numericInput.blur() в storybook-test не всегда доводит React-onBlur).
      await userEvent.tab();
      // 23 снэпит к 20; blur — явный commit, onChange вызывается всегда (контракт «blur = commit»).
      await expect(numericInput).toHaveValue('20');
      await expect(args.onChange).toHaveBeenCalledWith(20);
    });
    await step('out-of-range typing clamps to max on commit', async () => {
      (args.onChange as ReturnType<typeof fn>).mockClear();
      await userEvent.clear(numericInput);
      await userEvent.type(numericInput, '999');
      await userEvent.keyboard('{Enter}');
      await expect(numericInput).toHaveValue('100');
      await expect(args.onChange).toHaveBeenCalledWith(100);
    });
    await step('non-numeric keystroke is rejected (input rejects letters, no onChange)', async () => {
      (args.onChange as ReturnType<typeof fn>).mockClear();
      await userEvent.clear(numericInput);
      await userEvent.type(numericInput, 'abc');
      // handleInputChange отклоняет нечисловой ввод — буквы не попадают в поле.
      await expect(numericInput).toHaveValue('');
      await expect(args.onChange).not.toHaveBeenCalled();
    });
    await step('ArrowRight on the focusable handle moves the value and fires onChange', async () => {
      // Возвращаем значение в середину диапазона — ArrowRight на max (100) не двигал бы ручку.
      await userEvent.clear(numericInput);
      await userEvent.type(numericInput, '50');
      await userEvent.keyboard('{Enter}');
      (args.onChange as ReturnType<typeof fn>).mockClear();
      // rc-slider читает keyCode/which на самой ручке; программный focus не активирует
      // focus-visible tracker — потому низкоуровневый fireEvent.keyDown, не userEvent.keyboard.
      numericHandle.focus();
      fireEvent.keyDown(numericHandle, {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39
      });
      await expect(args.onChange).toHaveBeenCalled();
    });
    await step('range input is readonly and shows the formatted min – max', async () => {
      await expect(rangeInput).toHaveValue('20 – 80');
      await expect(rangeInput).toHaveAttribute('readonly');
    });
    await step('typing into a range input is a no-op (value unchanged)', async () => {
      await userEvent.type(rangeInput, '5');
      await expect(rangeInput).toHaveValue('20 – 80');
    });
    await step('off-mark typing snaps to the nearest mark on Enter', async () => {
      await userEvent.clear(marksInput);
      await userEvent.type(marksInput, '60');
      await userEvent.keyboard('{Enter}');
      // метки-подписи 15/55/95: 60 снэпит к 55.
      await expect(marksInput).toHaveValue('55');
    });
    await step('unbindInputFromMarks keeps the off-mark value (step=null, no snap)', async () => {
      await userEvent.clear(unboundInput);
      await userEvent.type(unboundInput, '63');
      await userEvent.keyboard('{Enter}');
      await expect(unboundInput).toHaveValue('63');
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`InteractionTest`]}))();export{T as InteractionTest,E as __namedExportsOrder,w as default};
//# sourceMappingURL=FieldSlider.InteractionTest.stories-DHX4qfP9.js.map