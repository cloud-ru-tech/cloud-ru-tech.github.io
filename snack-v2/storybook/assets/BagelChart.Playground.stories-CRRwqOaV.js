import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-9PX31bxi.js";import{t as s,u as c}from"./src-0KELxT6M.js";import{n as l,t as u}from"./testIds-BVkaiDLH.js";import{n as d,t as f}from"./styles.module-COAuPOk6.js";var p,m,h,g,_,v;e((()=>{s(),o(),l(),f(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Data display/Charts/BagelChart`,id:`uikit-product-charts-bagelchart`,component:c,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{title:`vCPU`,value:48,total:128,"data-test-id":u.bagelChart.root},argTypes:{title:{control:`text`}}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(r,{children:(0,p.jsxs)(a,{children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Цвет кольца зависит от заполненности: до 50% — зелёный, до 75% — жёлтый, выше — красный.`}),(0,p.jsx)(`div`,{className:d.chart,children:(0,p.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(u.bagelChart.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Цвет кольца зависит от заполненности: до 50% — зелёный, до 75% — жёлтый, выше — красный.</DemoHint>
        <div className={styles.chart}>
          <BagelChart {...args} />
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.bagelChart.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=BagelChart.Playground.stories-CRRwqOaV.js.map