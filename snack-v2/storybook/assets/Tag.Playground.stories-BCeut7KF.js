import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CqCwb0Nr.js";import{i as c,o as l,s as u,t as d}from"./src-CyYdx_x4.js";import{n as f,t as p}from"./testIds-CVpGDl3v.js";var m,h,g,_,v,y;e((()=>{d(),o(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Data display/Tag/Tag`,id:`components-tag-tag`,component:c,parameters:{layout:`fullscreen`},render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Тег-метка с настройкой размера и цветовой схемы appearance.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(c,{...e})})]})}),args:{label:`Tag`,size:u.Xs,appearance:l.Neutral,"data-test-id":p.tag.root},argTypes:{size:{control:`select`,options:Object.values(u)},appearance:{control:`select`,options:Object.values(l)}}},v={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await h(g(e).getByTestId(p.tag.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.tag.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tag.Playground.stories-BCeut7KF.js.map