import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{Cn as n,d as r,f as i,ft as a,g as o,ot as s,p as c,t as l,u}from"./iframe-qs8RgOhH.js";import{U as d,t as f}from"./system-BjOKAueR.js";import{r as p,t as m}from"./src-CHNzQsqP.js";import{i as h,t as g}from"./src-CDCG8VYT.js";import{n as _,t as v}from"./testIds-Ippb2Lb2.js";function y(){let{layoutType:e}=n(),t=a(e);return(0,b.jsx)(p,{primaryAction:{label:`Создать`},secondaryAction:{label:`Импортировать`},vertical:t,filled:t})}var b,x,S,C,w,T;e((()=>{s(),m(),f(),l(),g(),_(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Uikit Product/Layout & containers/Layout/Layout/EmptyBlock/Examples/WithFooter`,id:`uikit-product-layout-layout-emptyblock-examples-withfooter`,id:`uikit-product-layout-emptyblock-examples-withfooter`,component:h,parameters:{layout:`fullscreen`}},w={tags:[`dev`,`test`],render:()=>(0,b.jsx)(i,{children:(0,b.jsxs)(c,{width:`wide`,children:[(0,b.jsx)(o,{children:`WithFooter`}),(0,b.jsx)(r,{children:"Слот `footer` принимает любой контент — например, `ButtonGroup` с действиями."}),(0,b.jsx)(u,{align:`center`,children:(0,b.jsx)(h,{"data-test-id":v.emptyBlock.root,icon:{icon:d},title:`Нет данных`,content:`Создайте первую запись, чтобы начать работу`,footer:(0,b.jsx)(y,{})})})]})}),play:async({canvasElement:e})=>{await x(S(e).getByTestId(v.emptyBlock.root)).toBeVisible()}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>WithFooter</DemoTitle>
        <DemoHint>Слот \`footer\` принимает любой контент — например, \`ButtonGroup\` с действиями.</DemoHint>
        <DemoActions align='center'>
          <EmptyBlock data-test-id={TEST_IDS.emptyBlock.root} icon={{
          icon: PlaceholderSVG
        }} title='Нет данных' content='Создайте первую запись, чтобы начать работу' footer={<FooterActions />} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.emptyBlock.root)).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}},T=[`WithFooter`]}))();export{w as WithFooter,T as __namedExportsOrder,C as default};
//# sourceMappingURL=EmptyBlock.WithFooter.stories-DAq140rF.js.map