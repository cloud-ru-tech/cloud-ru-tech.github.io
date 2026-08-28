import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-SlIP-akt.js";import{r as u,t as d}from"./src-DQFPVsZi.js";import{O as f,i as p,t as m}from"./src-Bmb4VJk4.js";function h(){let[e,t]=(0,g.useState)(``),[n,r]=(0,g.useState)(``),c=(0,_.jsx)(u,{size:`s`,primaryAction:{label:`Отправить`,disabled:!e,onClick:()=>r(e),"data-test-id":x},secondaryAction:{label:`Очистить`,onClick:()=>t(``),"data-test-id":S}});return(0,_.jsx)(l,{children:(0,_.jsxs)(a,{width:`narrow`,children:[(0,_.jsx)(s,{children:`Footer-слот`}),(0,_.jsxs)(o,{children:["Нода под полем (`footer`) рендерится отдельной строкой действий — независимо от postfix-кнопок.",n?` Отправлено: ${n}`:``]}),(0,_.jsx)(i,{align:`center`,children:(0,_.jsx)(p,{"data-test-id":f.fieldTextArea,label:`Комментарий`,placeholder:`Расскажите подробнее`,hint:n?`Сохранено`:`Заполните и отправьте`,minRows:3,maxRows:8,value:e,onChange:t,footer:c})})]})})}var g,_,v,y,b,x,S,C,w,T;t((()=>{d(),m(),g=e(n(),1),c(),_=r(),{expect:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x=`field-textarea-footer-submit`,S=`field-textarea-footer-reset`,C={title:`Snack/Inputs & Forms/Fields/FieldTextArea/Examples/WithFooter`,id:`components-fields-fieldtextarea-examples-withfooter`,component:p,parameters:{layout:`fullscreen`}},w={tags:[`dev`,`test`],render:()=>(0,_.jsx)(h,{}),play:async({canvasElement:e,step:t})=>{let n=b(e),r=n.getByTestId(f.fieldTextArea),i=b(r).getByTestId(f.fieldTextAreaInput),a=n.getByTestId(x);await t(`footer submit is disabled while the textarea is empty`,async()=>{await v(r).toBeVisible(),await v(a).toBeDisabled()}),await t(`typing enables the footer submit action`,async()=>{await y.click(i),await y.type(i,`Готово к отправке`),await v(a).toBeEnabled()}),await t(`footer reset clears the textarea value`,async()=>{await y.click(n.getByTestId(S)),await v(i).toHaveValue(``),await v(a).toBeDisabled()})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <WithFooterDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.fieldTextArea);
    const input = within(root).getByTestId<HTMLTextAreaElement>(TEST_IDS.fieldTextAreaInput);
    const submit = canvas.getByTestId(SUBMIT_BUTTON_TEST_ID);
    await step('footer submit is disabled while the textarea is empty', async () => {
      await expect(root).toBeVisible();
      await expect(submit).toBeDisabled();
    });
    await step('typing enables the footer submit action', async () => {
      await userEvent.click(input);
      await userEvent.type(input, 'Готово к отправке');
      await expect(submit).toBeEnabled();
    });
    await step('footer reset clears the textarea value', async () => {
      await userEvent.click(canvas.getByTestId(RESET_BUTTON_TEST_ID));
      await expect(input).toHaveValue('');
      await expect(submit).toBeDisabled();
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`WithFooter`]}))();export{w as WithFooter,T as __namedExportsOrder,C as default};
//# sourceMappingURL=FieldTextArea.WithFooter.stories-DkAB_-gB.js.map