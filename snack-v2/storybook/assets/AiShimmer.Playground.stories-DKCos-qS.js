import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D1b9r8k6.js";import{i as c,t as l}from"./src-DJcevqTP2.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,s as _,t as v,u as y}from"./src-BEJjXoaf2.js";import{n as b,t as x}from"./styles.module-YdnfE1kI.js";var S=e((()=>{f()})),C,w,T,E,D,O;e((()=>{l(),v(),o(),x(),S(),C=t(),{expect:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`AI/Process & motion/AiShimmer`,id:`ai-aishimmer`,component:h,parameters:{layout:`fullscreen`},args:{text:`Officia cillum labore enim eiusmod exercitation ullamco occaecat utminim consequat labore occaecat est.`,variant:u,size:p,weight:g,"data-test-id":d.root},argTypes:{text:{control:`text`},variant:{control:`select`,options:Object.values(m)},size:{control:`select`,options:Object.values(_)},weight:{control:`select`,options:Object.values(y)},iconMask:{control:`select`,options:[`none`,`giga`],mapping:{none:void 0,giga:c}}}},D={tags:[`dev`,`test`],render:e=>(0,C.jsx)(s,{children:(0,C.jsxs)(r,{width:`wide`,children:[(0,C.jsx)(a,{children:`Playground`}),(0,C.jsx)(i,{children:`AiShimmer с кастомным текстом и анимацией shimmer.`}),(0,C.jsx)(n,{align:`center`,block:!0,children:(0,C.jsx)(`div`,{className:b.preview,children:(0,C.jsx)(h,{...e})})})]})}),play:async({canvasElement:e})=>{await w(T(e).getByTestId(d.root)).toBeVisible()}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}))();export{D as Playground,O as __namedExportsOrder,E as default};
//# sourceMappingURL=AiShimmer.Playground.stories-DKCos-qS.js.map