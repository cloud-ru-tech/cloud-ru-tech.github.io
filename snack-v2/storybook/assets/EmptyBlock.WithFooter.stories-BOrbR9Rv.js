import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DMWsC78w.js";import{V as c,t as l}from"./system-Cg9ynAJg.js";import{r as u,t as d}from"./src-CayYsASu.js";import{i as f,t as p}from"./src-C6xZtLYK.js";import{n as m,t as h}from"./testIds-Ippb2Lb2.js";var g,_,v,y,b,x;e((()=>{d(),l(),o(),p(),m(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Layout/Layout/EmptyBlock/Examples/WithFooter`,id:`uikit-product-layout-emptyblock-examples-withfooter`,component:f,parameters:{layout:`fullscreen`}},b={tags:[`dev`,`test`],render:()=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`WithFooter`}),(0,g.jsx)(i,{children:"Слот `footer` принимает любой контент — например, `ButtonGroup` с действиями."}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(f,{"data-test-id":h.emptyBlock.root,icon:{icon:c},title:`Нет данных`,content:`Создайте первую запись, чтобы начать работу`,footer:(0,g.jsx)(u,{primaryAction:{label:`Создать`},secondaryAction:{label:`Импортировать`}})})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(h.emptyBlock.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>WithFooter</DemoTitle>
        <DemoHint>Слот \`footer\` принимает любой контент — например, \`ButtonGroup\` с действиями.</DemoHint>
        <DemoActions align='center'>
          <EmptyBlock data-test-id={TEST_IDS.emptyBlock.root} icon={{
          icon: PlaceholderSVG
        }} title='Нет данных' content='Создайте первую запись, чтобы начать работу' footer={<ButtonGroup primaryAction={{
          label: 'Создать'
        }} secondaryAction={{
          label: 'Импортировать'
        }} />} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.emptyBlock.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`WithFooter`]}))();export{b as WithFooter,x as __namedExportsOrder,y as default};
//# sourceMappingURL=EmptyBlock.WithFooter.stories-BOrbR9Rv.js.map