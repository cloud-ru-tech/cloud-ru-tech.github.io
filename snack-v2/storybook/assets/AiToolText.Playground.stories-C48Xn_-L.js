import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{t as c,u as l}from"./src-BCkYEbcS.js";import{n as u,t as d}from"./testIds-C9xkaL6J.js";var f,p,m,h,g,_;e((()=>{c(),o(),u(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`AI/Primitives/AiTool/Content/AiToolText`,id:`ai-aitool-content-aitooltext`,component:l,parameters:{layout:`fullscreen`},args:{children:`TextBlock Text`,error:!1,mono:!1,"data-test-id":d.text},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Строка вывода инструмента. mono включает моноширинный шрифт для кода и данных, error подсвечивает текст красным.`}),(0,f.jsx)(n,{align:`start`,children:(0,f.jsx)(l,{...e})})]})})},g={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await p(m(e).getByTestId(d.text)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.text)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=AiToolText.Playground.stories-C48Xn_-L.js.map