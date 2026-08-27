import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-DCnmYW19.js";import{a as d,t as f}from"./src-DFgQXuB7.js";import{O as p,t as m,w as h}from"./src-i6s1jAxm.js";function g(){return document.querySelector(`[data-test-id="${T}"]`)}function _(){let[e,t]=(0,v.useState)(`#1976d2`),[n,r]=(0,v.useState)(!1);return(0,y.jsx)(u,{children:(0,y.jsxs)(a,{width:`narrow`,children:[(0,y.jsx)(c,{children:`Controlled value + open`}),(0,y.jsx)(s,{children:`Родитель держит value и open в useState. Кнопка открывает палитру программно, выбор цвета меняет value.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsxs)(o,{width:`narrow`,children:[(0,y.jsx)(d,{"data-test-id":w,label:n?`Close picker`:`Open picker`,appearance:`neutral`,view:`outline`,onClick:()=>r(e=>!e)}),(0,y.jsx)(h,{"data-test-id":p.fieldColor,label:`Accent color`,value:e,onChange:t,open:n,onOpenChange:r,autoApply:!0})]})})]})})}var v,y,b,x,S,C,w,T,E,D,O;t((()=>{f(),m(),v=e(n(),1),l(),y=r(),{expect:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=`field-color-controlled-toggle`,T=p.fieldColorPicker,E={title:`Snack/Inputs & Forms/Fields/FieldColor/Examples/Controlled`,id:`components-fields-fieldcolor-examples-controlled`,component:h,parameters:{layout:`fullscreen`},render:()=>(0,y.jsx)(_,{})},D={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=C(e),r=n.getByTestId(w),i=n.getByTestId(p.fieldColor),a=C(i).getByTestId(p.fieldColorInput);await t(`renders the field with the controlled initial value`,async()=>{await b(i).toBeVisible(),await b(a).toHaveValue(`#1976d2`)}),await t(`external button opens the picker (controlled open)`,async()=>{await x.click(r),await S(()=>b(g()).not.toBeNull())}),await t(`controlled open propagates to the trigger button label`,async()=>{await b(r).toHaveTextContent(`Close picker`)})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByTestId(TOGGLE_BUTTON_TEST_ID);
    const root = canvas.getByTestId(TEST_IDS.fieldColor);
    const input = within(root).getByTestId(TEST_IDS.fieldColorInput) as HTMLInputElement;
    await step('renders the field with the controlled initial value', async () => {
      await expect(root).toBeVisible();
      await expect(input).toHaveValue('#1976d2');
    });
    await step('external button opens the picker (controlled open)', async () => {
      await userEvent.click(toggle);
      await waitFor(() => expect(queryPickerRoot()).not.toBeNull());
    });
    await step('controlled open propagates to the trigger button label', async () => {
      // Открытие выше перевело контролируемый \`open\` в true → лейбл кнопки стал «Close picker».
      // Обратный клик гоняет outside-click + onClick одновременно (гонка), поэтому закрытие
      // через ту же кнопку проверяется в e2e; здесь — надёжный сигнал, что open долетел до UI.
      await expect(toggle).toHaveTextContent('Close picker');
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`Controlled`]}))();export{D as Controlled,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FieldColor.Controlled.stories-Bw4uaGaO.js.map