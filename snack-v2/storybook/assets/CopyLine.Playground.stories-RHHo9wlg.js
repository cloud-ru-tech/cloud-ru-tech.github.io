import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BiKgHgfb.js";import{i as c,o as l,t as u}from"./src-C4ETIzU7.js";import{n as d,t as f}from"./testIds-1SWyHa1M.js";var p,m,h,g,_,v;e((()=>{u(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Actions/Copy/CopyLine`,id:`uikit-product-copy-copyline`,component:c,parameters:{layout:`fullscreen`},args:{content:`example-copy-value-12345`,valueToCopy:`example-value`,copyButtonHideStrategy:l.Hover,"data-test-id":f.copyLine.root},argTypes:{content:{control:`text`,description:`Отображаемое содержимое`},valueToCopy:{control:`text`,description:`Значение для копирования (по-умолчанию = content)`},copyButtonHideStrategy:{control:`radio`,options:Object.values(l),description:`Стратегия показа кнопки копирования`},className:{control:`text`}}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Строка с отображаемым содержимым и кнопкой копирования.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(f.copyLine.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Строка с отображаемым содержимым и кнопкой копирования.</DemoHint>
        <DemoActions align='center'>
          <CopyLine {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.copyLine.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=CopyLine.Playground.stories-RHHo9wlg.js.map