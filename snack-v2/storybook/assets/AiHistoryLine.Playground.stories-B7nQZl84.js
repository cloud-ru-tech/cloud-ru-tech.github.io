import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{l as i,t as a}from"./web-DSAslPCG.js";import{k as o,t as s}from"./logos-C2AmuQy0.js";import{hn as c,t as l}from"./system-Cs-PnW7h.js";import{A as u,D as d,m as f,t as p,u as m}from"./src-B5UUfZXa.js";import{m as h,n as g,t as _}from"./src-BTY-TSWm.js";import{n as v,t as y}from"./src-CMxcehRN.js";import{i as b,t as x}from"./src-Btlyd6vp.js";import{n as S,t as C}from"./styles.module-DMKpKJMI.js";var w=t((()=>{_()}));function T(e){return[e.currentTarget.closest(`li`)?.id,e.currentTarget.getAttribute(`aria-label`)].filter(Boolean).join(` — `)}function E(){return(0,M.jsx)(v,{name:`W`,size:`s`,shape:`rounded`,appearance:`neutral`})}function D(){return(0,M.jsx)(o,{size:16,"aria-hidden":!0})}function O(){return(0,M.jsx)(c,{"aria-hidden":!0})}function k(){return(0,M.jsx)(i,{"aria-hidden":!0})}function A(){let[e,t]=(0,j.useState)(`Кликов ещё не было`);function n(e,n){return{id:e,indicatorLabel:n,onIndicatorClick:e=>{t(T(e))}}}return(0,M.jsxs)(`div`,{className:S.session,children:[(0,M.jsxs)(`p`,{className:S.click,"data-test-id":G,children:[`Клик: `,e]}),(0,M.jsxs)(g,{defaultValue:W,"data-test-id":h.root,children:[(0,M.jsx)(g.Item,{...n(`checkpoint-tests-123`,`Чекпоинт: сценарии`),indicator:(0,M.jsx)(k,{}),firstItem:!0,children:(0,M.jsx)(g.Checkpoint,{hash:`b12cb69`,title:`Добавлены сценарии для существующего репозитория и первой настройки. Добавлены сценарии для существующего репозитория и первой настройки.`,added:83,removed:26})}),(0,M.jsx)(g.Item,{...n(`request-setup`,`Запрос: упростить настройку хранения ссылок`),indicator:(0,M.jsx)(E,{}),indicatorBackground:!1,children:(0,M.jsx)(g.Request,{timestamp:I,duration:L,children:`Упрости настройку хранения ссылок: поддержи и существующие репозитории, и первоначальную настройку.`})}),(0,M.jsx)(g.Item,{...n(`agent-plan`,`Ответ: план изменений`),indicator:(0,M.jsx)(D,{}),children:(0,M.jsx)(g.AgentContent,{children:(0,M.jsx)(b,{value:R})})}),(0,M.jsx)(g.Item,{...n(`tools-read`,`Вызовы инструментов`),indicator:(0,M.jsx)(O,{}),children:(0,M.jsxs)(g.Accordion,{id:`tools-read`,title:`2 вызова инструментов`,defaultOpen:!0,children:[(0,M.jsx)(f,{name:`enable.go`,icon:d.Read,state:u.Success,defaultOpen:!0,call:(0,M.jsx)(m,{children:`file_path: internal/enable/enable.go`}),result:(0,M.jsx)(m,{mono:!1,children:`Found the relevant control flow and tests for this change.`})}),(0,M.jsx)(f,{name:`src/pages/Sessions/index.tsx`,icon:d.Act,state:u.Error})]})}),(0,M.jsx)(g.Item,{...n(`agent-markdown`,`Ответ: Markdown`),indicator:(0,M.jsx)(D,{}),children:(0,M.jsx)(g.AgentContent,{children:(0,M.jsx)(b,{value:U})})}),(0,M.jsx)(g.Item,{...n(`agent-confirm`,`Ответ: внести изменения`),indicator:(0,M.jsx)(D,{}),children:(0,M.jsx)(g.AgentContent,{children:(0,M.jsx)(b,{value:z})})}),(0,M.jsx)(g.Item,{...n(`request-apply`,`Запрос: да, вноси`),indicator:(0,M.jsx)(E,{}),indicatorBackground:!1,children:(0,M.jsx)(g.Request,{timestamp:I,duration:L,children:`Да, вноси`})}),(0,M.jsx)(g.Item,{indicator:(0,M.jsx)(D,{}),children:(0,M.jsx)(g.AgentContent,{children:(0,M.jsx)(b,{value:B})})}),(0,M.jsx)(g.Item,{...n(`tools-apply`,`Повторные вызовы инструментов`),indicator:(0,M.jsx)(O,{}),children:(0,M.jsxs)(g.Accordion,{id:`tools-apply`,title:`2 вызова инструментов`,children:[(0,M.jsx)(f,{name:`enable.go`,icon:d.Read,state:u.Success}),(0,M.jsx)(f,{name:`src/pages/Sessions/index.tsx`,icon:d.Act,state:u.Error})]})}),(0,M.jsx)(g.Item,{...n(`agent-done`,`Ответ: готово`),indicator:(0,M.jsx)(D,{}),children:(0,M.jsx)(g.AgentContent,{children:(0,M.jsx)(b,{value:V})})}),(0,M.jsx)(g.Item,{...n(`checkpoint-logic`,`Чекпоинт: логика включения`),indicator:(0,M.jsx)(k,{}),children:(0,M.jsx)(g.Checkpoint,{hash:`b12cb69`,title:`Добавлена логика включения хранения ссылок.`,added:183,removed:43})}),(0,M.jsx)(g.Item,{...n(`agent-review`,`Ответ: готово к проверке`),indicator:(0,M.jsx)(D,{}),children:(0,M.jsx)(g.AgentContent,{children:(0,M.jsx)(b,{value:H})})}),(0,M.jsx)(g.Item,{...n(`checkpoint-tests`,`Чекпоинт: сценарии`),indicator:(0,M.jsx)(k,{}),lastItem:!0,children:(0,M.jsx)(g.Checkpoint,{hash:`b12cb69`,title:`Добавлены сценарии для существующего репозитория и первой настройки. Добавлены сценарии для существующего репозитория и первой настройки.`,added:83,removed:26})})]})]})}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{_(),p(),y(),l(),a(),s(),x(),j=e(n(),1),C(),w(),M=r(),{expect:N,userEvent:P,within:F}=__STORYBOOK_MODULE_TEST__,I=`2 октября, 12:40`,L=`8 мин.`,R=`Разобрал текущий поток. Основные изменения нужны в internal/enable/enable.go и cmd/enable.go: для существующего репозитория добавлю отдельный путь без повторного онбординга, а сценарий первого включения сохраню. Также обновлю тесты для обоих случаев.`,z=`Внести эти изменения в код?`,B=`Вношу изменения и добавляю тесты.`,V=`Готово. CLI распознаёт уже настроенный репозиторий и предлагает включить хранение ссылок без повторного онбординга. Для новой настройки прежний сценарий сохранён. Добавил тесты для обоих путей и регрессии.`,H=`Готово к проверке: реализовал включение хранения ссылок для существующих репозиториев и при первой настройке, обновил CLI и добавил тесты.`,U=`#### Heading 4

##### Heading 5

Paragraph Regular

**Paragraph Bold**

- First
- Second
- Third

1. First
2. Second
3. Third

[Текст ссылки](https://example.com)

---

\`\`\`javascript
const value = /* set from \`myEditor.getModel()\`: */ \`function hello() {
alert('Hello world!');
}\`;

// Hover on each property to see its docs!
const myEditor = monaco.editor.create(document.getElementById("container"), {
  value,
  language: "javascript",
  automaticLayout: true,
});
\`\`\`
`,W=`request-setup`,G=`ai-history-line-click`,K={title:`AI/Surfaces/AiHistoryLine/AiHistoryLine`,id:`components-aihistoryline-aihistoryline`,component:g,parameters:{layout:`padded`}},q={tags:[`dev`,`test`],render:()=>(0,M.jsx)(A,{}),play:async({canvasElement:e})=>{let t=F(e);await N(t.getByTestId(h.root)).toBeVisible();let n=t.getAllByTestId(h.indicator),r=n.filter(e=>e.tagName===`BUTTON`);await N(r).toHaveLength(n.length-1);let i=t.getByRole(`button`,{name:`Запрос: упростить настройку хранения ссылок`});await N(i).toHaveAttribute(`data-active`,`true`),await P.click(t.getByRole(`button`,{name:`Запрос: да, вноси`})),await N(t.getByTestId(G)).toHaveTextContent(`request-apply — Запрос: да, вноси`)}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <PlaygroundSession />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.root)).toBeVisible();
    const indicators = canvas.getAllByTestId(TEST_IDS.indicator);
    const buttons = indicators.filter(indicator => indicator.tagName === 'BUTTON');
    await expect(buttons).toHaveLength(indicators.length - 1);
    const initial = canvas.getByRole('button', {
      name: 'Запрос: упростить настройку хранения ссылок'
    });
    await expect(initial).toHaveAttribute('data-active', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Запрос: да, вноси'
    }));
    await expect(canvas.getByTestId(CLICK_LOG_ID)).toHaveTextContent('request-apply — Запрос: да, вноси');
  }
}`,...q.parameters?.docs?.source}}},J=[`Playground`]}))();export{q as Playground,J as __namedExportsOrder,K as default};
//# sourceMappingURL=AiHistoryLine.Playground.stories-B7nQZl84.js.map