import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-jFn_-H4h.js";import{l as c,t as l}from"./src-DajKA63e.js";import{n as u,t as d}from"./src-itu4rROG.js";import{n as f,t as p}from"./testIds-u3UHAWqm.js";var m,h,g,_,v,y;e((()=>{l(),d(),o(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Actions/Copy/CopyButton`,id:`uikit-product-copy-copybutton`,component:u,parameters:{layout:`fullscreen`},args:{valueToCopy:`example-value`,size:c.S,label:``,"data-test-id":p.copyButton.root},argTypes:{valueToCopy:{control:`text`,description:`Значение для копирования`},size:{control:`radio`,options:Object.values(c),description:`Размер кнопки`},label:{control:`text`,description:`Текст рядом с иконкой`},className:{control:`text`}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Иконка-кнопка для копирования значения в буфер обмена.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(u,{...e})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(p.copyButton.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Иконка-кнопка для копирования значения в буфер обмена.</DemoHint>
        <DemoActions align='center'>
          <CopyButton {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.copyButton.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=CopyButton.Playground.stories-DiSg9etM.js.map