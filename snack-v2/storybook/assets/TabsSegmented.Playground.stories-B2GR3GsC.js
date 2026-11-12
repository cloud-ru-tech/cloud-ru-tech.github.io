import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-Gljg_cUQ.js";import{a as c,i as l,n as u,t as d}from"./src-o6F7ez5Z.js";import{a as f,c as p,i as m,l as h,o as g,s as _,t as v}from"./fixtures-Cc-AzRZu.js";function y(e){let t=(0,b.jsx)(`div`,{className:h.narrow,children:(0,b.jsx)(u,{...e})});return(0,b.jsx)(r,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(i,{children:`Playground`}),(0,b.jsx)(n,{children:"Ряд в узком контейнере: без переноса прокручивается, с `wrap` переносится на новые строки."}),(0,b.jsx)(s,{align:`start`,children:e.appearance===l.OnAccent?(0,b.jsx)(v,{children:t}):t})]})})}var b,x,S,C,w,T;e((()=>{d(),o(),f(),p(),_(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Site/TabsSegmented`,component:u,parameters:{layout:`fullscreen`},args:{items:m,size:c.M,appearance:l.Default,wrap:!1,"data-test-id":g.root},argTypes:{items:{table:{disable:!0}},value:{table:{disable:!0}}}},w={tags:[`dev`,`test`],render:e=>(0,b.jsx)(y,{...e}),play:async({canvasElement:e})=>{await x(S(e).getByTestId(g.root)).toBeVisible()}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <PlaygroundRender {...args} />,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`]}))();export{w as Playground,T as __namedExportsOrder,C as default};
//# sourceMappingURL=TabsSegmented.Playground.stories-B2GR3GsC.js.map