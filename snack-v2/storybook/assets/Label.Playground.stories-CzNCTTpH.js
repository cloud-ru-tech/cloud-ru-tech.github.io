import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BPThJ53l.js";import{c,i as l,t as u}from"./src-CHC-h6tZ.js";import{n as d,t as f}from"./testIds-wyan2m2i.js";var p,m,h,g,_,v;e((()=>{u(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Inputs & Forms/FieldDecorator/Label`,id:`components-fielddecorator-label`,component:l,parameters:{layout:`fullscreen`},args:{size:c.M,label:`Заголовок поля`,caption:`Подпись`,required:!0,labelTooltip:{tip:`Пояснение к заголовку`},"data-test-id":f.label.root}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Строка заголовка поля: label, знак обязательности, question-tooltip и подпись.`}),(0,p.jsx)(n,{align:`start`,children:(0,p.jsx)(l,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(f.label.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Строка заголовка поля: label, знак обязательности, question-tooltip и подпись.</DemoHint>
        <DemoActions align='start'>
          <Label {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.label.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Label.Playground.stories-CzNCTTpH.js.map