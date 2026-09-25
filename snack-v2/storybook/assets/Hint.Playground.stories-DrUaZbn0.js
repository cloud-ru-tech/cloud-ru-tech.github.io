import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{c,l,o as u,t as d}from"./src-ry4xi_BO.js";import{n as f,t as p}from"./testIds-wyan2m2i.js";var m,h,g,_,v,y;e((()=>{d(),o(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/FieldDecorator/Hint`,id:`components-fielddecorator-hint`,component:u,parameters:{layout:`fullscreen`},args:{size:c.M,hint:`Подсказка под полем`,validationState:l.Default,showHintIcon:!0,length:{current:12,max:100},"data-test-id":p.hint.root}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Playground`}),(0,m.jsx)(n,{children:`Подсказка/ошибка со статус-иконкой и счётчиком длины.`}),(0,m.jsx)(s,{align:`start`,children:(0,m.jsx)(u,{...e})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(p.hint.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Подсказка/ошибка со статус-иконкой и счётчиком длины.</DemoHint>
        <DemoActions align='start'>
          <Hint {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.hint.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Hint.Playground.stories-DrUaZbn0.js.map