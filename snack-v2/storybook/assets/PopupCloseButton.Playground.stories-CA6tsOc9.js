import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,l as r,m as i,t as a,u as o}from"./iframe-CRw8NhXI.js";import{b as s,i as c,t as l}from"./src-rmPymhnU.js";import{n as u,t as d}from"./frame.module-mEVel5mV.js";import{t as f}from"./testIds-BbLm35mB.js";var p,m,h,g,_,v,y;e((()=>{l(),a(),u(),f(),p=t(),{expect:m,fn:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Foundation & utilities/PopupPrivate/PopupCloseButton`,id:`components-popupprivate-popupclosebutton`,component:c,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{onClick:h(),"aria-label":`close popup`},render:e=>(0,p.jsx)(o,{children:(0,p.jsxs)(n,{children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(r,{children:`Единая кнопка закрытия overlay-слоя (крестик). Рассчитана на onColor-поверхность (blackout-подложка).`}),(0,p.jsx)(`div`,{className:d.blackout,children:(0,p.jsx)(c,{...e})})]})})},v={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(g(e).getByTestId(s.closeButton)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(SLOT_TEST_IDS.closeButton)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=PopupCloseButton.Playground.stories-CA6tsOc9.js.map