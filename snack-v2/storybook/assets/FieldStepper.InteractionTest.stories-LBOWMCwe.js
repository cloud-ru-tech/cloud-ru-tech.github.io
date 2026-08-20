import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,t as s,u as c}from"./iframe-Bd5xtg2w.js";import{O as l,t as u,u as d}from"./src-B6R5qTgW.js";function f(e){let[t,n]=(0,p.useState)(5);return(0,m.jsx)(c,{children:(0,m.jsx)(a,{width:`narrow`,children:(0,m.jsx)(i,{align:`center`,children:(0,m.jsx)(o,{width:`narrow`,children:(0,m.jsx)(d,{"data-test-id":l.fieldStepper,label:`Quantity`,min:0,max:8,step:1,allowMoreThanLimits:!1,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})})})})})}var p,m,h,g,_,v,y,b,x;t((()=>{u(),p=e(n(),1),s(),m=r(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Inputs & Forms/Fields/FieldStepper/Tests/Interaction`,id:`components-fields-fieldstepper-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onChange:g()},render:e=>(0,m.jsx)(f,{...e})},b={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=v(e),r=n.getByTestId(l.fieldStepperInput),i=n.getByTestId(l.fieldStepperPlus),a=n.getByTestId(l.fieldStepperMinus);await t(`initial value`,async()=>{await h(r).toBeVisible(),await h(r).toHaveValue(5)}),await t(`click + → increments`,async()=>{await _.click(i),await _.click(i),await h(r).toHaveValue(7)}),await t(`click − → decrements`,async()=>{await _.click(a),await h(r).toHaveValue(6)}),await t(`+ disables at max`,async()=>{await _.click(i),await _.click(i),await h(r).toHaveValue(8),await h(i).toBeDisabled()}),await t(`− re-enables + and decrements to min`,async()=>{await h(a).toBeEnabled();for(let e=0;e<8;e+=1)await _.click(a);await h(r).toHaveValue(0),await h(a).toBeDisabled(),await h(i).toBeEnabled()}),await t(`keyboard: Tab focuses the input, not the step buttons`,async()=>{r.blur(),await _.tab(),await h(r).toHaveFocus()}),await t(`keyboard: typing a digit updates the value`,async()=>{await _.clear(r),await _.type(r,`4`),await h(r).toHaveValue(4)})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(TEST_IDS.fieldStepperInput);
    const plus = canvas.getByTestId(TEST_IDS.fieldStepperPlus);
    const minus = canvas.getByTestId(TEST_IDS.fieldStepperMinus);

    // type=number инпут: toHaveValue сравнивает с числом, не строкой.
    await step('initial value', async () => {
      await expect(input).toBeVisible();
      await expect(input).toHaveValue(5);
    });
    await step('click + → increments', async () => {
      await userEvent.click(plus);
      await userEvent.click(plus);
      await expect(input).toHaveValue(7);
    });
    await step('click − → decrements', async () => {
      await userEvent.click(minus);
      await expect(input).toHaveValue(6);
    });
    await step('+ disables at max', async () => {
      await userEvent.click(plus);
      await userEvent.click(plus);
      await expect(input).toHaveValue(8);
      await expect(plus).toBeDisabled();
    });
    await step('− re-enables + and decrements to min', async () => {
      await expect(minus).toBeEnabled();
      for (let i = 0; i < 8; i += 1) {
        await userEvent.click(minus);
      }
      await expect(input).toHaveValue(0);
      await expect(minus).toBeDisabled();
      await expect(plus).toBeEnabled();
    });

    // Кнопки шага имеют tabIndex={-1}; фокус по Tab принимает сам инпут (контракт анатомии).
    await step('keyboard: Tab focuses the input, not the step buttons', async () => {
      input.blur();
      await userEvent.tab();
      await expect(input).toHaveFocus();
    });
    await step('keyboard: typing a digit updates the value', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, '4');
      await expect(input).toHaveValue(4);
    });

    // Кламп к границам на blur (выше max → max, ниже min → min) + тултип границы, гашение
    // тултипа по фокусу, и промежуточный '-'/пустой ввод — завязаны на React-onBlur и
    // userEvent.clear, ненадёжные в синтетической storybook-test среде (программный blur не
    // триггерит onBlur-кламп, clear оставляет остаток в native number-input). Это поведение
    // покрыто в реальной среде — packages/fields/__test__/FieldStepper/interaction.spec.ts.
  }
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`]}))();export{b as InteractionTest,x as __namedExportsOrder,y as default};
//# sourceMappingURL=FieldStepper.InteractionTest.stories-LBOWMCwe.js.map