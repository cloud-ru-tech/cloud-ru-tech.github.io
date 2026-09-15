import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BKlvlDp3.js";import{a as c,c as l,i as u,n as d,o as f,r as p,t as m}from"./testIds-D16Z8E_N.js";var h,g,_,v,y,b,x,S;e((()=>{c(),o(),p(),d(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`AI/Surfaces/AiFieldRequest`,id:`ai-aifieldrequest`,component:f,parameters:{layout:`fullscreen`},args:{title:`Удалить виртуальную машину?`,content:`Виртуальная машина будет остановлена и удалена вместе с дисками. Дополнительное описание действия занимает несколько строк и используется для проверки раскрытия длинного текста в свёрнутом и развёрнутом состояниях. Ещё один абзац с нейтральным содержимым без привязки к предметной области. Третий абзац нужен, чтобы содержимое переполняло предел по высоте и на широком экране: тогда кнопка «Показать» появляется в любой ширине карточки, а не только в узкой.`,hint:`Подсказка под панелью`,appearance:l.Primary,maxHeight:88,primaryAction:{label:`Подтвердить`,onClick:_()},secondaryAction:{label:`Отмена`,onClick:_()},onOpenChange:_(),"data-test-id":m.root},argTypes:{title:{control:`text`},content:{control:`text`},hint:{control:`text`},primaryAction:{control:`object`},secondaryAction:{control:`object`},appearance:{control:`inline-radio`,options:Object.values(l)},maxHeight:{control:{type:`number`,min:44,step:22}},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}},render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`Playground`}),(0,h.jsx)(i,{children:`Панель Field Request: заголовок, контент, раскрытие и кнопки действий.`}),(0,h.jsx)(n,{align:`start`,children:(0,h.jsx)(f,{...e,className:u.root})})]})})},x={tags:[`dev`,`test`],play:async({args:e,canvasElement:t})=>{let n=y(t);await g(n.getByTestId(m.root)).toBeVisible(),await g(n.getByTestId(m.title)).toHaveTextContent(`Удалить виртуальную машину?`),await v.click(await n.findByTestId(m.expand)),await g(n.getByTestId(m.root)).toHaveAttribute(`data-open`,`true`),g(e.onOpenChange).toHaveBeenCalledTimes(1),g(e.onOpenChange).toHaveBeenLastCalledWith(!0),await v.click(n.getByTestId(m.primaryAction)),g(e.primaryAction.onClick).toHaveBeenCalledTimes(1),await v.click(n.getByTestId(m.secondaryAction)),g(e.secondaryAction.onClick).toHaveBeenCalledTimes(1)}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.root)).toBeVisible();
    await expect(canvas.getByTestId(TEST_IDS.title)).toHaveTextContent('Удалить виртуальную машину?');
    await userEvent.click(await canvas.findByTestId(TEST_IDS.expand));
    await expect(canvas.getByTestId(TEST_IDS.root)).toHaveAttribute('data-open', 'true');
    expect(args.onOpenChange).toHaveBeenCalledTimes(1);
    expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    await userEvent.click(canvas.getByTestId(TEST_IDS.primaryAction));
    expect(args.primaryAction.onClick).toHaveBeenCalledTimes(1);
    await userEvent.click(canvas.getByTestId(TEST_IDS.secondaryAction));
    expect(args.secondaryAction.onClick).toHaveBeenCalledTimes(1);
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AiFieldRequest.Playground.stories-BqWYD2zZ.js.map