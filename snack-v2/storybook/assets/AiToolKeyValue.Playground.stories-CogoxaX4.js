import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CqCwb0Nr.js";import{D as c,c as l,t as u}from"./src-ynngvk4r.js";import{n as d,t as f}from"./testIds-LK6ktlZW.js";var p,m,h,g,_,v;e((()=>{u(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`AI/Primitives/AiTool/Content/AiToolKeyValue`,id:`ai-aitool-content-aitoolkeyvalue`,component:l,parameters:{layout:`fullscreen`},args:{label:`Key`,value:`Value`,variant:c.Line,"data-test-id":f.keyValue},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{width:`narrow`,children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Пара «ключ — значение» из аргументов инструмента. В режиме line значение выравнивается по правому краю, в column располагается под ключом.`}),(0,p.jsx)(n,{block:!0,children:(0,p.jsx)(l,{...e})})]})})},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(f.keyValue)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.keyValue)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=AiToolKeyValue.Playground.stories-CogoxaX4.js.map