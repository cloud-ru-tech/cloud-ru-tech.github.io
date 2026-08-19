import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-aHi-eIAa.js";import{i as c,n as l,r as u,t as d}from"./testIds-CwabPSYb.js";var f,p,m,h,g,_;e((()=>{u(),o(),l(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`AI/Process & motion/AiReasoning`,id:`ai-aireasoning`,component:c,parameters:{layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/tCbbB5RUGyJeBRtjF3dt4d/AI-COMPONENTS?node-id=7250-14770&m=dev`}},args:{description:`Tool is reasoning about the next action`,stepperLine:!0,"data-test-id":d.root},argTypes:{description:{control:`text`,description:`Текст reasoning-сообщения`},stepperLine:{control:`boolean`,description:`Показывает вертикальное продолжение степпера`},connector:{control:`boolean`,description:`Явно управляет нижним коннектором`}}},g={tags:[`dev`,`test`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Строка reasoning для AI-цепочки с вложенным контентом и явным контролем коннектора.`}),(0,f.jsx)(n,{align:`start`,children:(0,f.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await p(m(e).getByTestId(d.root)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: (args: AiReasoningProps) => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Строка reasoning для AI-цепочки с вложенным контентом и явным контролем коннектора.</DemoHint>
        <DemoActions align='start'>
          <AiReasoning {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=AiReasoning.Playground.stories-DwSDrJBX.js.map