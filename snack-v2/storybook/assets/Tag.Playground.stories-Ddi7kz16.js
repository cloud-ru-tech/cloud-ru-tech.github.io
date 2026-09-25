import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{i as c,o as l,s as u,t as d}from"./src-DSMrXPCa.js";import{n as f,t as p}from"./testIds-DIfGbMKC.js";var m,h,g,_,v,y;e((()=>{d(),o(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Data display/Tag/Tag`,id:`components-tag-tag`,component:c,parameters:{layout:`fullscreen`},render:e=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Playground`}),(0,m.jsx)(n,{children:`Тег-метка с настройкой размера и цветовой схемы appearance.`}),(0,m.jsx)(s,{align:`center`,children:(0,m.jsx)(c,{...e})})]})}),args:{label:`Tag`,size:u.Xs,appearance:l.Neutral,"data-test-id":p.tag.root},argTypes:{size:{control:`select`,options:Object.values(u)},appearance:{control:`select`,options:Object.values(l)}}},v={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await h(g(e).getByTestId(p.tag.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.tag.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tag.Playground.stories-Ddi7kz16.js.map