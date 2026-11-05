import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,p as r,s as i,t as a,u as o}from"./iframe-CH0ThVYh.js";import{a as s,i as c,n as l,t as u}from"./src-DkI8BbX52.js";import{n as d,t as f}from"./testIds-BjFzaAdR.js";var p,m,h,g,_,v,y;e((()=>{u(),a(),d(),p=t(),{expect:m,fn:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`AI/Primitives/AiAttachment`,id:`ai-aiattachment`,component:l,parameters:{layout:`fullscreen`},args:{type:s.File,state:c.Default,fileName:`quarterly-report-final.pdf`,src:i(88,88,`image`),tooltip:`PDF, 2 МБ`,onRemove:h(),onRetry:h(),"data-test-id":f.root},argTypes:{type:{control:`radio`,options:Object.values(s)},state:{control:`radio`,options:Object.values(c)},icon:{table:{disable:!0}},onRemove:{table:{disable:!0}},onRetry:{table:{disable:!0}},onClick:{table:{disable:!0}}},render:e=>(0,p.jsx)(n,{children:(0,p.jsx)(r,{children:(0,p.jsx)(o,{align:`center`,children:(0,p.jsx)(l,{...e})})})})},v={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(g(e).getByTestId(f.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiAttachment.Playground.stories-__n9RJHC.js.map