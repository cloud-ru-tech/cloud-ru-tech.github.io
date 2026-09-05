import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Coxm4alt.js";import{a as u,s as d,t as f,u as p}from"./src-gPTOrvAn.js";import{a as m,i as h,n as g,o as _,r as v,t as y}from"./testIds-BZGPE9qa.js";function b({onOpenChange:e,onStepChange:t,...n}){let[r,c]=(0,x.useState)(!1),f=t=>{c(t),e(t)};return(0,S.jsxs)(l,{children:[(0,S.jsxs)(a,{width:`wide`,children:[(0,S.jsx)(s,{children:`InteractionTest`}),(0,S.jsx)(o,{children:`Play-функция проходит тур целиком: запуск, «Далее», «Назад», кнопка завершения на последнем шаге.`}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(`div`,{className:h.targets,children:O.map((e,t)=>(0,S.jsx)(`span`,{className:h.target,"data-test-id":y.target(t),children:e},e))})}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(u,{appearance:d.Neutral,"data-test-id":y.triggerOpen,label:`Запустить тур`,view:p.Outline,onClick:()=>f(!0)})})]}),(0,S.jsx)(_,{...n,open:r,onOpenChange:f,onStepChange:t})]})}var x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{f(),m(),x=e(n(),1),c(),v(),g(),S=r(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O=[`Меню`,`Поиск`,`Профиль`],k=O.map((e,t)=>({target:`[data-test-id='${y.target(t)}']`,title:`Шаг ${t+1}: ${e}`,content:`Описание того, что делает «${e}».`})),A={title:`Uikit Product/Overlays/WelcomeTour/Tests/Interaction`,id:`components-welcometour-tests-interaction`,component:_,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{steps:k,onOpenChange:w(),onStepChange:w()},render:e=>(0,S.jsx)(b,{...e})},j={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=D(t.ownerDocument.body),i=D(t);await n(`click: триггер запускает тур и показывает первый шаг`,async()=>{await T.click(i.getByTestId(y.triggerOpen)),await E(async()=>{await C(r.getByTestId(y.hint)).toBeVisible()}),C(e.onOpenChange).toHaveBeenCalledWith(!0)}),await n(`first step: кнопки «Назад» нет`,async()=>{C(r.queryByTestId(y.backButton)).toBeNull()}),await n(`click: «Далее» переводит на второй шаг`,async()=>{await T.click(r.getByTestId(y.nextButton)),await E(async()=>{await C(r.getByTestId(y.backButton)).toBeVisible()}),C(e.onStepChange).toHaveBeenCalledWith(1)}),await n(`click: «Назад» возвращает на первый шаг`,async()=>{await T.click(r.getByTestId(y.backButton)),await C(await r.findByTestId(y.title)).toHaveTextContent(`Шаг 1`)}),await n(`click: на последнем шаге показывается кнопка завершения и закрывает тур`,async()=>{await T.click(r.getByTestId(y.nextButton)),await T.click(await r.findByTestId(y.nextButton)),await T.click(await r.findByTestId(y.finishButton)),await E(()=>{C(e.onOpenChange).toHaveBeenCalledWith(!1)})})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    // Подсказка живёт в портале вне canvasElement — ищем её от document.body.
    const screen = within(canvasElement.ownerDocument.body);
    const canvas = within(canvasElement);
    await step('click: триггер запускает тур и показывает первый шаг', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.triggerOpen));

      // Floater монтируется скрытым, поэтому ждём видимость, а не появление узла в DOM.
      await waitFor(async () => {
        await expect(screen.getByTestId(TEST_IDS.hint)).toBeVisible();
      });
      expect(args.onOpenChange).toHaveBeenCalledWith(true);
    });
    await step('first step: кнопки «Назад» нет', async () => {
      expect(screen.queryByTestId(TEST_IDS.backButton)).toBeNull();
    });
    await step('click: «Далее» переводит на второй шаг', async () => {
      await userEvent.click(screen.getByTestId(TEST_IDS.nextButton));

      // Узел кнопки появляется раньше, чем floater позиционируется, поэтому видимость
      // проверяется с повтором, а не однократно после \`findBy\`.
      await waitFor(async () => {
        await expect(screen.getByTestId(TEST_IDS.backButton)).toBeVisible();
      });
      expect(args.onStepChange).toHaveBeenCalledWith(1);
    });
    await step('click: «Назад» возвращает на первый шаг', async () => {
      await userEvent.click(screen.getByTestId(TEST_IDS.backButton));
      await expect(await screen.findByTestId(TEST_IDS.title)).toHaveTextContent('Шаг 1');
    });
    await step('click: на последнем шаге показывается кнопка завершения и закрывает тур', async () => {
      await userEvent.click(screen.getByTestId(TEST_IDS.nextButton));
      await userEvent.click(await screen.findByTestId(TEST_IDS.nextButton));
      await userEvent.click(await screen.findByTestId(TEST_IDS.finishButton));

      // Закрытие приходит событием \`tour:end\` движка — оно асинхронно клику.
      await waitFor(() => {
        expect(args.onOpenChange).toHaveBeenCalledWith(false);
      });
    });
  }
}`,...j.parameters?.docs?.source}}},M=[`InteractionTest`]}))();export{j as InteractionTest,M as __namedExportsOrder,A as default};
//# sourceMappingURL=WelcomeTour.InteractionTest.stories-DdqxZBsI.js.map