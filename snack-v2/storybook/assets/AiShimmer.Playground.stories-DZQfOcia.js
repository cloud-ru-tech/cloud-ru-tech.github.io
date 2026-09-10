import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C9_hbJyc.js";import{a as c,c as l,d as u,i as d,l as f,n as p,o as m,s as h,t as g,u as _}from"./src-v1D6flyH2.js";import{i as v,t as y}from"./src-DJcevqTP2.js";import{i as b,n as x,r as S,t as C}from"./styles.module-DCaoosmq.js";var w=e((()=>{u()})),T,E,D,O,k,A;e((()=>{y(),g(),o(),b(),C(),w(),T=t(),{expect:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`AI/Process & motion/AiShimmer`,id:`ai-aishimmer`,component:p,parameters:{layout:`fullscreen`},args:{text:`Officia cillum labore enim eiusmod exercitation ullamco occaecat utminim consequat labore occaecat est.`,variant:c,size:d,weight:m,"data-test-id":l.root},argTypes:{text:{control:`text`},variant:{control:`select`,options:Object.values(f)},size:{control:`select`,options:Object.values(h)},weight:{control:`select`,options:Object.values(_)},icon:{control:`select`,options:Object.keys(S),mapping:S},iconMask:{control:`select`,options:[`none`,`giga`],mapping:{none:void 0,giga:v}}}},k={tags:[`dev`,`test`],render:e=>(0,T.jsx)(s,{children:(0,T.jsxs)(r,{width:`wide`,children:[(0,T.jsx)(a,{children:`Playground`}),(0,T.jsx)(i,{children:`AiShimmer с кастомным текстом и анимацией shimmer.`}),(0,T.jsx)(n,{align:`center`,block:!0,children:(0,T.jsx)(`div`,{className:x.preview,children:(0,T.jsx)(p,{...e})})})]})}),play:async({canvasElement:e})=>{await E(D(e).getByTestId(l.root)).toBeVisible()}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>AiShimmer с кастомным текстом и анимацией shimmer.</DemoHint>
        <DemoActions align='center' block>
          <div className={styles.preview}>
            <AiShimmer {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`]}))();export{k as Playground,A as __namedExportsOrder,O as default};
//# sourceMappingURL=AiShimmer.Playground.stories-DZQfOcia.js.map