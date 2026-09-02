import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D4MTfTET.js";import{i as c,n as l,r as u,t as d}from"./testIds-DP8680ow.js";var f,p,m,h,g,_,v;e((()=>{u(),o(),l(),f=t(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`AI/Surfaces/AiCard`,id:`ai-aicard`,component:c,parameters:{layout:`fullscreen`},args:{title:`Card title`,children:`Default content`,checked:!1,disabled:!1,"data-test-id":d.root},argTypes:{onChange:{table:{disable:!0}},onClick:{table:{disable:!0}}},render:function(e){let[{checked:t},o]=p();return(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Выбираемая AI-карточка — клик / Enter / Space переключают checked.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e,checked:t,onChange:e=>o({checked:e})})})]})})}},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(d.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=AiCard.Playground.stories-d5I4Fxs3.js.map