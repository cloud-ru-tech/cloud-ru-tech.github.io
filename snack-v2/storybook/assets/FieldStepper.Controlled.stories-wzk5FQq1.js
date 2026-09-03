import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-BdtyM0cx.js";import{O as d,t as f,u as p}from"./src-DNBvg_N-.js";function m(){let[e,t]=(0,h.useState)(2);return(0,g.jsx)(u,{children:(0,g.jsxs)(a,{width:`narrow`,children:[(0,g.jsx)(c,{children:`Controlled value`}),(0,g.jsx)(s,{children:`Родитель держит value в useState. Кнопки +/− и ручной ввод меняют внешнее состояние, отражённое в подписи.`}),(0,g.jsxs)(i,{align:`center`,children:[(0,g.jsx)(o,{width:`narrow`,children:(0,g.jsx)(p,{"data-test-id":d.fieldStepper,label:`Quantity`,postfix:`шт`,min:0,max:10,value:e,onChange:t})}),(0,g.jsxs)(`span`,{"data-test-id":b,children:[`Текущее значение: `,e]})]})]})})}var h,g,_,v,y,b,x,S,C;t((()=>{f(),h=e(n(),1),l(),g=r(),{expect:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=`field-stepper-controlled-value`,x={title:`Snack/Inputs & Forms/Fields/FieldStepper/Examples/Controlled`,id:`components-fields-fieldstepper-examples-controlled`,component:p,parameters:{layout:`fullscreen`},render:()=>(0,g.jsx)(m,{})},S={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=y(e),r=n.getByTestId(d.fieldStepper),i=y(r).getByTestId(d.fieldStepperInput),a=y(r).getByTestId(d.fieldStepperPlus),o=n.getByTestId(b);await t(`renders the field with the controlled initial value`,async()=>{await _(i).toHaveValue(2),await _(o).toHaveTextContent(`Текущее значение: 2`)}),await t(`clicking + updates both the field and the external state`,async()=>{await v.click(a),await _(i).toHaveValue(3),await _(o).toHaveTextContent(`Текущее значение: 3`)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.fieldStepper);
    const input = within(root).getByTestId(TEST_IDS.fieldStepperInput);
    const plus = within(root).getByTestId(TEST_IDS.fieldStepperPlus);
    const valueLabel = canvas.getByTestId(VALUE_LABEL_TEST_ID);
    await step('renders the field with the controlled initial value', async () => {
      await expect(input).toHaveValue(2);
      await expect(valueLabel).toHaveTextContent('Текущее значение: 2');
    });
    await step('clicking + updates both the field and the external state', async () => {
      await userEvent.click(plus);
      await expect(input).toHaveValue(3);
      await expect(valueLabel).toHaveTextContent('Текущее значение: 3');
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`Controlled`]}))();export{S as Controlled,C as __namedExportsOrder,x as default};
//# sourceMappingURL=FieldStepper.Controlled.stories-wzk5FQq1.js.map