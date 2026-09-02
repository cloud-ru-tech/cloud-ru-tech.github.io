import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BLXw10_m.js";import{a as u,s as d,t as f,u as p}from"./src-CUvFpUpw.js";import{a as m,i as h,n as g,o as _,r as v,t as y}from"./testIds-x1ULKiTu.js";function b(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(0),c=e=>{r(e),t(!0)};return(0,S.jsxs)(l,{children:[(0,S.jsxs)(a,{width:`wide`,children:[(0,S.jsx)(s,{children:`Controlled`}),(0,S.jsx)(o,{children:`Шаг и состояние тура хранит родитель. Кнопки ниже запускают тур с конкретного шага; текущий шаг показан рядом.`}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(`div`,{className:h.targets,children:D.map((e,t)=>(0,S.jsx)(`span`,{className:h.target,"data-test-id":y.target(t),children:e},e))})}),(0,S.jsx)(i,{align:`center`,children:D.map((e,t)=>(0,S.jsx)(u,{appearance:d.Neutral,"data-test-id":y.controlled.startFrom(t),label:`С шага ${t+1}`,view:p.Outline,onClick:()=>c(t)},e))}),(0,S.jsx)(o,{children:(0,S.jsxs)(`span`,{"data-test-id":y.controlled.state,children:[`open: `,String(e),`, stepIndex: `,n]})})]}),(0,S.jsx)(_,{open:e,stepIndex:n,steps:O,onOpenChange:t,onStepChange:r})]})}var x,S,C,w,T,E,D,O,k,A,j;t((()=>{f(),m(),x=e(n(),1),c(),v(),g(),S=r(),{expect:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=[`Меню`,`Поиск`,`Профиль`],O=D.map((e,t)=>({target:`[data-test-id='${y.target(t)}']`,title:`Шаг ${t+1}: ${e}`,content:`Описание того, что делает «${e}».`})),k={title:`Uikit Product/Overlays/WelcomeTour/Examples/Controlled`,id:`components-welcometour-examples-controlled`,component:_,parameters:{layout:`fullscreen`,controls:{disable:!0}}},A={tags:[`dev`,`test`],render:()=>(0,S.jsx)(b,{}),play:async({canvasElement:e,step:t})=>{let n=E(e.ownerDocument.body),r=E(e);await t(`click: «С шага 1» открывает тур на первом шаге`,async()=>{await w.click(r.getByTestId(y.controlled.startFrom(0))),await T(async()=>{await C(n.getByTestId(y.hint)).toBeVisible()}),await C(n.getByTestId(y.title)).toHaveTextContent(`Шаг 1`)}),await t(`click: «Далее» переводит на второй шаг и двигает внешний stepIndex`,async()=>{await w.click(n.getByTestId(y.nextButton)),await T(async()=>{await C(n.getByTestId(y.title)).toHaveTextContent(`Шаг 2`)}),await C(r.getByTestId(y.controlled.state)).toHaveTextContent(`stepIndex: 1`)}),await t(`click: «Назад» возвращает на первый шаг`,async()=>{await w.click(n.getByTestId(y.backButton)),await T(async()=>{await C(n.getByTestId(y.title)).toHaveTextContent(`Шаг 1`)}),await C(r.getByTestId(y.controlled.state)).toHaveTextContent(`stepIndex: 0`)}),await t(`click: крестик закрывает тур, не сдвигая шаг`,async()=>{await w.click(n.getByTestId(y.closeIcon)),await T(()=>{C(n.queryByTestId(y.hint)).toBeNull()}),await C(r.getByTestId(y.controlled.state)).toHaveTextContent(`open: false, stepIndex: 0`)})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <ControlledRender />,
  // Регрессия: в управляемом режиме движок не двигает индекс сам, поэтому переход
  // «Далее» держится на \`onStepChange\` компонента. Без этой проверки тур молча
  // закрывал текущий шаг и не открывал следующий, оставаясь \`open: true\`.
  play: async ({
    canvasElement,
    step
  }) => {
    // Подсказка живёт в портале вне canvasElement — ищем её от document.body.
    const screen = within(canvasElement.ownerDocument.body);
    const canvas = within(canvasElement);
    await step('click: «С шага 1» открывает тур на первом шаге', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.controlled.startFrom(0)));

      // Floater монтируется скрытым и становится видимым после позиционирования.
      await waitFor(async () => {
        await expect(screen.getByTestId(TEST_IDS.hint)).toBeVisible();
      });
      await expect(screen.getByTestId(TEST_IDS.title)).toHaveTextContent('Шаг 1');
    });
    await step('click: «Далее» переводит на второй шаг и двигает внешний stepIndex', async () => {
      await userEvent.click(screen.getByTestId(TEST_IDS.nextButton));
      await waitFor(async () => {
        await expect(screen.getByTestId(TEST_IDS.title)).toHaveTextContent('Шаг 2');
      });
      await expect(canvas.getByTestId(TEST_IDS.controlled.state)).toHaveTextContent('stepIndex: 1');
    });
    await step('click: «Назад» возвращает на первый шаг', async () => {
      await userEvent.click(screen.getByTestId(TEST_IDS.backButton));
      await waitFor(async () => {
        await expect(screen.getByTestId(TEST_IDS.title)).toHaveTextContent('Шаг 1');
      });
      await expect(canvas.getByTestId(TEST_IDS.controlled.state)).toHaveTextContent('stepIndex: 0');
    });
    await step('click: крестик закрывает тур, не сдвигая шаг', async () => {
      await userEvent.click(screen.getByTestId(TEST_IDS.closeIcon));
      await waitFor(() => {
        expect(screen.queryByTestId(TEST_IDS.hint)).toBeNull();
      });
      await expect(canvas.getByTestId(TEST_IDS.controlled.state)).toHaveTextContent('open: false, stepIndex: 0');
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`Controlled`]}))();export{A as Controlled,j as __namedExportsOrder,k as default};
//# sourceMappingURL=WelcomeTour.Controlled.stories-DuIMNuU-.js.map