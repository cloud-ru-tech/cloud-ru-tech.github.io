import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-B2mzxEaG.js";import{E as c,k as l,m as u,t as d}from"./src-Cf228Aqv.js";import{n as f,t as p}from"./testIds-BLUfad0z.js";import{a as m,i as h,n as g,r as _}from"./presets-Cu6h3DbQ.js";var v,y,b,x,S,C,w,T;e((()=>{d(),o(),f(),h(),v=t(),{expect:y,fn:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`AI/Primitives/AiTool/AiTool/Tests/Interaction`,id:`ai-aitool-aitool-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{name:g,icon:c.Search,state:l.Success,duration:9,defaultOpen:!1,onOpenChange:b(),"data-test-id":p.tool}},w={tags:[`test`,`dev`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{width:`narrow`,children:[(0,v.jsx)(a,{children:`Interaction`}),(0,v.jsx)(i,{children:`Проверяет раскрытие блоков запроса и ответа chevron-кнопкой мышью и с клавиатуры.`}),(0,v.jsx)(n,{block:!0,children:(0,v.jsx)(u,{...e,call:_,result:m})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=S(t),i=r.getByTestId(p.toolChevron);await n(`closed: details are absent`,async()=>{y(r.queryByTestId(p.toolCall)).toBeNull(),y(r.queryByTestId(p.toolResult)).toBeNull()}),await n(`click chevron: details appear, onOpenChange(true)`,async()=>{await x.click(i),await y(r.getByTestId(p.toolCall)).toBeVisible(),await y(r.getByTestId(p.toolResult)).toBeVisible(),y(e.onOpenChange).toHaveBeenCalledTimes(1),y(e.onOpenChange).toHaveBeenLastCalledWith(!0)}),await n(`keyboard: Enter on focused chevron collapses details`,async()=>{i.focus(),await x.keyboard(`{Enter}`),y(r.queryByTestId(p.toolCall)).toBeNull(),y(e.onOpenChange).toHaveBeenCalledTimes(2),y(e.onOpenChange).toHaveBeenLastCalledWith(!1)})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: (args: AiToolProps) => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Проверяет раскрытие блоков запроса и ответа chevron-кнопкой мышью и с клавиатуры.</DemoHint>
        <DemoActions block>
          <AiTool {...args} call={callPreset} result={resultPreset} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const chevron = canvas.getByTestId(TEST_IDS.toolChevron);
    await step('closed: details are absent', async () => {
      expect(canvas.queryByTestId(TEST_IDS.toolCall)).toBeNull();
      expect(canvas.queryByTestId(TEST_IDS.toolResult)).toBeNull();
    });
    await step('click chevron: details appear, onOpenChange(true)', async () => {
      await userEvent.click(chevron);
      await expect(canvas.getByTestId(TEST_IDS.toolCall)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.toolResult)).toBeVisible();
      expect(args.onOpenChange).toHaveBeenCalledTimes(1);
      expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    });
    await step('keyboard: Enter on focused chevron collapses details', async () => {
      chevron.focus();
      await userEvent.keyboard('{Enter}');
      expect(canvas.queryByTestId(TEST_IDS.toolCall)).toBeNull();
      expect(args.onOpenChange).toHaveBeenCalledTimes(2);
      expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=AiTool.InteractionTest.stories-Vye24xG-.js.map