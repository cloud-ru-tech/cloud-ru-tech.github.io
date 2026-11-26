import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-DKU1u6-r.js";import{_ as n,d as r,f as i,m as a,n as o,p as s}from"./iframe-CPKXRoEA.js";import{n as c,t as l}from"./Markdown-C2khvcXj.js";import{n as u,t as d}from"./testIds-ax_S_O2G.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{c(),o(),u(),f=t(),{expect:p,fn:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Inputs & Forms/Markdown/Markdown`,id:`components-markdown-markdown`,component:l,parameters:{layout:`fullscreen`},args:{value:`# Markdown viewer

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
`,skipHtml:!0,onCodeCopyClick:m(),"data-test-id":d.viewer},argTypes:{remarkPlugins:{table:{disable:!0}},rehypePlugins:{table:{disable:!0}},components:{table:{disable:!0}},className:{table:{disable:!0}},"data-test-id":{table:{disable:!0}}},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(a,{width:`wide`,children:[(0,f.jsx)(n,{children:`Markdown`}),(0,f.jsx)(i,{children:`Рендер markdown-строки в безопасный HTML (GFM + подсветка кода).`}),(0,f.jsx)(r,{align:`start`,children:(0,f.jsx)(l,{...e})})]})})},_={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=h(e).getByTestId(d.viewer);await p(n).toBeVisible(),await t(`renders headings, table, code block`,async()=>{await p(n.querySelector(`h1`)).toBeTruthy(),await p(n.querySelector(`table`)).toBeTruthy(),await p(n.querySelector(`pre code`)).toBeTruthy()})}},v=[`Playground`]})))()}y();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Markdown.Playground.stories-Dljw5AcO.js.map