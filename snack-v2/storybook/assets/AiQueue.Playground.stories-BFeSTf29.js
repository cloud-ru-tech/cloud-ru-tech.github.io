import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C96OK3Oq.js";import{i as c,n as l,t as u}from"./src-BIn-p2nE.js";import{n as d,t as f}from"./testIds-DboPZiLc.js";var p,m,h,g,_,v,y;e((()=>{u(),o(),d(),p=t(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`AI/Surfaces/AiQueue`,id:`ai-aiqueue`,component:l,parameters:{layout:`padded`,design:{type:`figma`,url:`https://www.figma.com/design/tCbbB5RUGyJeBRtjF3dt4d/AI-COMPONENTS?node-id=7099-4119&m=dev`}},args:{open:!1,steps:[{id:`step-1`,label:`Шаг 1`,state:c.Done},{id:`step-2`,label:`Шаг 2`,state:c.Error},{id:`step-3`,label:`Шаг 3`,state:c.Done},{id:`step-4`,label:`Шаг 4`,state:c.Progress},{id:`step-5`,label:`Шаг 5`,state:c.Planned}],"data-test-id":f.root},argTypes:{open:{control:`boolean`,description:`Контролируемое состояние раскрытия.`},defaultOpen:{control:`boolean`,description:`Начальное раскрытие в uncontrolled-режиме.`},summary:{control:`object`,description:`Принудительные значения счётчиков.`},labels:{control:`object`,description:`Локализация текста в заголовке.`},steps:{control:`object`,description:`Список шагов очереди.`},onOpenChange:{table:{disable:!0}}},render:function(e){let[{open:t},o]=m();return(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Клик по заголовку раскрывает и сворачивает список шагов.`}),(0,p.jsx)(n,{align:`start`,children:(0,p.jsx)(l,{...e,open:t,onOpenChange:e=>o({open:e})})})]})})}},v={args:{open:!0},tags:[`dev`,`test`],play:async({canvasElement:e})=>{await h(g(e).getByTestId(f.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiQueue.Playground.stories-BFeSTf29.js.map