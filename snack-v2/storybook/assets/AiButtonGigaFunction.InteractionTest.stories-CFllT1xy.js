import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,p as r,t as i,u as a}from"./iframe-CKX5EhKF.js";import{i as o,t as s}from"./src-Br7aPTCB.js";import{n as c,t as l}from"./testIds-BVngy5tg.js";function u(e){e.preventDefault(),_()}var d,f,p,m,h,g,_,v,y,b;e((()=>{s(),i(),c(),d=t(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=p(),_=p(),v={title:`AI/Primitives/ButtonGiga/Function/Tests/Interaction`,id:`ai-buttongiga-function-tests-interaction`,component:o,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Создать ресурс`,onClick:g,"data-test-id":l.function.root},render:e=>(0,d.jsx)(n,{children:(0,d.jsx)(r,{children:(0,d.jsx)(`form`,{onSubmit:u,children:(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{...e}),(0,d.jsx)(o,{...e,disabled:!0,"data-test-id":l.function.disabled}),(0,d.jsx)(o,{...e,disabled:!0,loading:!0,type:`submit`,"data-test-id":l.function.disabledLoading}),(0,d.jsx)(o,{...e,loading:!0,type:`submit`,"data-test-id":l.function.loading}),(0,d.jsx)(o,{...e,type:`submit`,"data-test-id":l.function.submit})]})})})})},y={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{g.mockClear(),_.mockClear();let n=h(e),r=n.getByTestId(l.function.root),i=n.getByTestId(l.function.disabled),a=n.getByTestId(l.function.loading);await t(`Клик, Enter и пробел вызывают действие; обычная кнопка не отправляет форму.`,async()=>{await m.click(r),r.focus(),await m.keyboard(`{Enter}`),await m.keyboard(` `),await f(g).toHaveBeenCalledTimes(3),await f(_).not.toHaveBeenCalled()}),await t(`Недоступная кнопка блокирует действие без индикатора загрузки.`,async()=>{await f(i).toBeDisabled(),await f(i).not.toHaveAttribute(`aria-busy`),await m.click(i,{pointerEventsCheck:0}),await f(g).toHaveBeenCalledTimes(3)}),await t(`Загрузка сохраняет фокус и блокирует действие и отправление формы.`,async()=>{await f(a).toHaveAttribute(`aria-busy`,`true`),await f(a).toHaveAttribute(`aria-disabled`,`true`),await m.click(a),a.focus(),await m.keyboard(`{Enter}`),await m.keyboard(` `),await f(a).toHaveFocus(),await f(g).toHaveBeenCalledTimes(3),await f(_).not.toHaveBeenCalled()}),await t(`Загрузка имеет приоритет при disabled=true и блокирует действие и отправление формы.`,async()=>{let e=n.getByTestId(l.function.disabledLoading);await f(e).toBeEnabled(),await f(e).toHaveAttribute(`aria-busy`,`true`),await f(e).toHaveAttribute(`aria-disabled`,`true`),await f(e).not.toHaveAttribute(`data-disabled`),await m.click(e),e.focus(),await m.keyboard(`{Enter}`),await m.keyboard(` `),await f(e).toHaveFocus(),await f(g).toHaveBeenCalledTimes(3),await f(_).not.toHaveBeenCalled()}),await t(`Нативный type=submit отправляет форму.`,async()=>{await m.click(n.getByTestId(l.function.submit)),await f(_).toHaveBeenCalledTimes(1)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    onClick.mockClear();
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(TEST_IDS.function.root);
    const disabled = canvas.getByTestId(TEST_IDS.function.disabled);
    const loading = canvas.getByTestId(TEST_IDS.function.loading);
    await step('Клик, Enter и пробел вызывают действие; обычная кнопка не отправляет форму.', async () => {
      await userEvent.click(button);
      button.focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard(' ');
      await expect(onClick).toHaveBeenCalledTimes(3);
      await expect(onSubmit).not.toHaveBeenCalled();
    });
    await step('Недоступная кнопка блокирует действие без индикатора загрузки.', async () => {
      await expect(disabled).toBeDisabled();
      await expect(disabled).not.toHaveAttribute('aria-busy');
      await userEvent.click(disabled, {
        pointerEventsCheck: 0
      });
      await expect(onClick).toHaveBeenCalledTimes(3);
    });
    await step('Загрузка сохраняет фокус и блокирует действие и отправление формы.', async () => {
      await expect(loading).toHaveAttribute('aria-busy', 'true');
      await expect(loading).toHaveAttribute('aria-disabled', 'true');
      await userEvent.click(loading);
      loading.focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard(' ');
      await expect(loading).toHaveFocus();
      await expect(onClick).toHaveBeenCalledTimes(3);
      await expect(onSubmit).not.toHaveBeenCalled();
    });
    await step('Загрузка имеет приоритет при disabled=true и блокирует действие и отправление формы.', async () => {
      const combined = canvas.getByTestId(TEST_IDS.function.disabledLoading);
      await expect(combined).toBeEnabled();
      await expect(combined).toHaveAttribute('aria-busy', 'true');
      await expect(combined).toHaveAttribute('aria-disabled', 'true');
      await expect(combined).not.toHaveAttribute('data-disabled');
      await userEvent.click(combined);
      combined.focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard(' ');
      await expect(combined).toHaveFocus();
      await expect(onClick).toHaveBeenCalledTimes(3);
      await expect(onSubmit).not.toHaveBeenCalled();
    });
    await step('Нативный type=submit отправляет форму.', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.function.submit));
      await expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=AiButtonGigaFunction.InteractionTest.stories-CFllT1xy.js.map