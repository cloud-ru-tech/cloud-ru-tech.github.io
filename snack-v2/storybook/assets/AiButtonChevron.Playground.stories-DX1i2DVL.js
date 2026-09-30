import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-XRJcG0jl.js";import{n as c,t as l}from"./src-DhsUB9va.js";import{n as u,t as d}from"./testIds-CMbchqW2.js";var f,p,m,h,g,_,v;e((()=>{l(),o(),u(),f=t(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`AI/Primitives/ButtonChevron`,id:`ai-buttonchevron`,component:c,parameters:{layout:`fullscreen`},args:{open:!1,disabled:!1,"data-test-id":d.root},argTypes:{onClick:{table:{disable:!0}}},render:function(e){let[{open:t},o]=p();return(0,f.jsx)(r,{children:(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{children:`Playground`}),(0,f.jsx)(n,{children:`Кнопка-шеврон для раскрытия / сворачивания — клик переключает направление.`}),(0,f.jsx)(s,{align:`center`,children:(0,f.jsx)(c,{...e,open:t,onClick:()=>o({open:!t})})})]})})}},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(d.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=AiButtonChevron.Playground.stories-DX1i2DVL.js.map