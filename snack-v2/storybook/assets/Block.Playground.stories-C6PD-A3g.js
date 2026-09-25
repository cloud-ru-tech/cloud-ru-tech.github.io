import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{r as c,t as l}from"./src-CCaBCq3s.js";import{a as u,i as d,n as f,t as p}from"./src-C4Hf592B2.js";import{n as m,t as h}from"./styles.module-B1Krb7wR.js";var g,_=e((()=>{g={root:`block`}})),v,y,b,x,S,C,w;e((()=>{p(),l(),o(),h(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Layout & containers/Block`,id:`components-block`,component:f,parameters:{layout:`fullscreen`},args:{size:d.L,view:u.Simple,backgroundPredefined:c.NeutralBackground1Level,"data-test-id":g.root},argTypes:{size:{control:`radio`,options:Object.values(d)},view:{control:`radio`,options:Object.values(u)},backgroundPredefined:{control:`select`,options:Object.values(c)}}},S=({showBackground:e,customText:t,...o})=>(0,v.jsx)(r,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(i,{children:`Playground`}),(0,v.jsx)(n,{children:`Контейнер-блок со слоем backgroundPredefined и акриловым эффектом.`}),(0,v.jsx)(s,{block:!0,children:(0,v.jsx)(`div`,{className:m.externalWrapper,"data-show-background":e||void 0,children:(0,v.jsx)(f,{...o,children:(0,v.jsx)(`span`,{className:m.sampleContent,children:t})})})})]})}),C={tags:[`dev`,`test`],args:{showBackground:!0,size:d.L,view:u.Simple,customText:`# slot content`},argTypes:{showBackground:{name:`[Stories]: Show colorful background`},customText:{name:`[Stories]: Custom text`}},render:S,play:async({canvasElement:e})=>{await y(b(e).getByTestId(g.root)).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    showBackground: true,
    size: SIZE.L,
    view: VIEW.Simple,
    customText: '# slot content'
  },
  argTypes: {
    showBackground: {
      name: '[Stories]: Show colorful background'
    },
    customText: {
      name: '[Stories]: Custom text'
    }
  },
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,x as default};
//# sourceMappingURL=Block.Playground.stories-C6PD-A3g.js.map