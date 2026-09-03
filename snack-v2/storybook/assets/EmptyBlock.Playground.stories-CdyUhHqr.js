import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BPThJ53l.js";import{U as c,t as l}from"./system-dR6MMymc.js";import{r as u,t as d}from"./src-tm8kQw--.js";import{i as f,t as p}from"./src-D7mYVoLq.js";import{n as m,t as h}from"./testIds-Ippb2Lb2.js";var g,_,v,y,b,x;e((()=>{d(),l(),o(),p(),m(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Layout & containers/Layout/Layout/EmptyBlock`,id:`uikit-product-layout-layout-emptyblock`,id:`uikit-product-layout-emptyblock`,component:f,parameters:{layout:`fullscreen`},args:{title:`Title text`,content:`Body text`,icon:{icon:c},showFooter:!0,"data-test-id":h.emptyBlock.root},argTypes:{icon:{table:{disable:!0}},footer:{table:{disable:!0}},showFooter:{name:`[Stories]: showFooter`,control:`boolean`}}},b={tags:[`dev`,`test`],render:({showFooter:e,...t})=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Блок-заглушка для пустого состояния списка, таблицы или экрана.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(f,{...t,footer:e?(0,g.jsx)(u,{primaryAction:{label:`Label text`},secondaryAction:{label:`Label text`}}):void 0})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(h.emptyBlock.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showFooter,
    ...args
  }) => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Блок-заглушка для пустого состояния списка, таблицы или экрана.</DemoHint>
        <DemoActions align='center'>
          <EmptyBlock {...args} footer={showFooter ? <ButtonGroup primaryAction={{
          label: 'Label text'
        }} secondaryAction={{
          label: 'Label text'
        }} /> : undefined} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.emptyBlock.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=EmptyBlock.Playground.stories-CdyUhHqr.js.map