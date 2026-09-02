import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D4MTfTET.js";import{c,l,n as u,t as d}from"./src-CPawDvrJ.js";import{n as f,t as p}from"./styles.module-ButpTKmf.js";import{n as m,t as h}from"./testIds-wyan2m2i.js";var g,_,v,y,b,x;e((()=>{d(),o(),p(),m(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Inputs & Forms/FieldDecorator/FieldDecorator`,id:`components-fielddecorator-fielddecorator`,component:u,parameters:{layout:`fullscreen`},args:{size:c.M,label:`Заголовок поля`,caption:`Подпись`,required:!0,labelTooltip:{tip:`Пояснение к заголовку`},hint:`Подсказка под полем`,validationState:l.Default,showHintIcon:!0,length:{current:12,max:100},"data-test-id":h.fieldDecorator.root}},b={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Композиция Label + декорируемое поле + Hint.`}),(0,g.jsx)(n,{align:`start`,children:(0,g.jsx)(u,{...e,children:(0,g.jsx)(`input`,{className:f.input,placeholder:`Значение поля`})})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(h.fieldDecorator.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Композиция Label + декорируемое поле + Hint.</DemoHint>
        <DemoActions align='start'>
          <FieldDecorator {...args}>
            <input className={styles.input} placeholder='Значение поля' />
          </FieldDecorator>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldDecorator.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=FieldDecorator.Playground.stories-B7vzRW7V.js.map