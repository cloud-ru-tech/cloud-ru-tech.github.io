import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CRw8NhXI.js";import{i as c,t as l}from"./src-DJZCLmMI.js";import{n as u,t as d}from"./testIds-DAD7dJ2Z.js";var f,p,m,h,g,_,v;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Inputs & Forms/Markdown/Markdown`,id:`components-markdown-markdown`,component:c,parameters:{layout:`fullscreen`},args:{value:`# Markdown viewer

Параграф с **жирным**, *курсивом*, ~~зачёркнутым~~ и \`inline code\`.

## Списки

- bullet один
- bullet два
  - вложенный

1. ordered один
2. ordered два

## Цитата

> Цитата с **форматированием**.

## Code block

\`\`\`ts
export function add(a: number, b: number) {
  return a + b
}

export function multiply(a: number, b: number) {
  return a * b
}

export function subtract(a: number, b: number) {
  return a - b
}

export function justAnExampleOfALongFunctionBody() {
  return 'Some very very super long function body that should be scrollable with some extra text'
}
\`\`\`

## Table (GFM)

| Col A | Col B |
|-------|-------|
| one   | two   |
| three | four  |

## Link

[Snack Ui Kit](https://example.com)
`,skipHtml:!0,onCodeCopyClick:m(),"data-test-id":d.viewer},argTypes:{remarkPlugins:{table:{disable:!0}},rehypePlugins:{table:{disable:!0}},components:{table:{disable:!0}},className:{table:{disable:!0}},"data-test-id":{table:{disable:!0}}},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`wide`,children:[(0,f.jsx)(a,{children:`Markdown`}),(0,f.jsx)(i,{children:`Рендер markdown-строки в безопасный HTML (GFM + подсветка кода).`}),(0,f.jsx)(n,{align:`start`,children:(0,f.jsx)(c,{...e})})]})})},_={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=h(e).getByTestId(d.viewer);await p(n).toBeVisible(),await t(`renders headings, table, code block`,async()=>{await p(n.querySelector(`h1`)).toBeTruthy(),await p(n.querySelector(`table`)).toBeTruthy(),await p(n.querySelector(`pre code`)).toBeTruthy()})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.viewer);
    await expect(root).toBeVisible();
    await step('renders headings, table, code block', async () => {
      // Это отрендеренный из markdown HTML — у produced-узлов нет и не может быть data-test-id,
      // поэтому проверяем сам факт рендера по тегам (единственный возможный селектор здесь).
      await expect(root.querySelector('h1')).toBeTruthy();
      await expect(root.querySelector('table')).toBeTruthy();
      await expect(root.querySelector('pre code')).toBeTruthy();
    });

    // Клик по copy-кнопке и проверка onCodeCopyClick вынесены в tests/Markdown.InteractionTest —
    // здесь play не мутирует состояние кнопки, иначе visual.spec (interaction-states) ловит
    // остаточный \`copied\` (CheckSVG) вместо CopySVG. См. CodeBlock.tsx \`COPIED_RESET_MS\`.
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Markdown.Playground.stories-BnCxQCtt.js.map