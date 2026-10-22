import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-DBP7c9K6.js";import{i as c,t as l}from"./src-oNshVsBE2.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,s as _,t as v,u as y}from"./src-CNaW3coB.js";import{i as b,n as x,r as S,t as C}from"./styles.module-BzKalfUe.js";var w=e((()=>{f()})),T,E,D,O,k,A;e((()=>{l(),v(),o(),b(),C(),w(),T=t(),{expect:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`AI/Process & motion/AiShimmer`,id:`ai-aishimmer`,component:h,parameters:{layout:`fullscreen`},args:{text:`Officia cillum labore enim eiusmod exercitation ullamco occaecat utminim consequat labore occaecat est.`,variant:u,size:p,weight:g,"data-test-id":d.root},argTypes:{text:{control:`text`},variant:{control:`select`,options:Object.values(m)},size:{control:`select`,options:Object.values(_)},weight:{control:`select`,options:Object.values(y)},icon:{control:`select`,options:Object.keys(S),mapping:S},iconMask:{control:`select`,options:[`none`,`giga`],mapping:{none:void 0,giga:c}}}},k={tags:[`dev`,`test`],render:e=>(0,T.jsx)(r,{children:(0,T.jsxs)(a,{width:`wide`,children:[(0,T.jsx)(i,{children:`Playground`}),(0,T.jsx)(n,{children:`AiShimmer с кастомным текстом и анимацией shimmer.`}),(0,T.jsx)(s,{align:`center`,block:!0,children:(0,T.jsx)(`div`,{className:x.preview,children:(0,T.jsx)(h,{...e})})})]})}),play:async({canvasElement:e})=>{await E(D(e).getByTestId(d.root)).toBeVisible()}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=AiShimmer.Playground.stories-Citb8KOe.js.map