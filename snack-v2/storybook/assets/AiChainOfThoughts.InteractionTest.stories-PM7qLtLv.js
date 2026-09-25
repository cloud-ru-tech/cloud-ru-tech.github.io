import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{a as c,i as l,o as u,s as d,t as f}from"./presets-DXvPjiNu.js";import{n as p,t as m}from"./testIds-1BbAw7b5.js";var h,g,_,v,y,b,x,S;e((()=>{u(),o(),p(),c(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`AI/Process & motion/AiChainOfThoughts/AiChainOfThoughts/Tests/Interaction`,id:`ai-aichainofthoughts-aichainofthoughts-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{inProgress:!0,duration:f,defaultOpen:!1,onOpenChange:_(),"data-test-id":m.root}},x={tags:[`test`,`dev`],render:e=>(0,h.jsx)(r,{children:(0,h.jsxs)(a,{width:`narrow`,children:[(0,h.jsx)(i,{children:`Interaction`}),(0,h.jsx)(n,{children:`Проверяет раскрытие контент-цепочки chevron-кнопкой заголовка мышью и с клавиатуры.`}),(0,h.jsx)(s,{block:!0,children:(0,h.jsx)(d,{...e,children:l})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t),i=r.getByTestId(m.headlineChevron);await n(`closed: content is absent`,async()=>{g(r.queryByTestId(m.content)).toBeNull()}),await n(`click chevron: content appears, onOpenChange(true)`,async()=>{await v.click(i),await g(r.getByTestId(m.content)).toBeVisible(),g(e.onOpenChange).toHaveBeenCalledTimes(1),g(e.onOpenChange).toHaveBeenLastCalledWith(!0)}),await n(`keyboard: Enter on focused chevron collapses content`,async()=>{i.focus(),await v.keyboard(`{Enter}`),g(r.queryByTestId(m.content)).toBeNull(),g(e.onOpenChange).toHaveBeenCalledTimes(2),g(e.onOpenChange).toHaveBeenLastCalledWith(!1)})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: (args: AiChainOfThoughtsProps) => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Проверяет раскрытие контент-цепочки chevron-кнопкой заголовка мышью и с клавиатуры.</DemoHint>
        <DemoActions block>
          <AiChainOfThoughts {...args}>{chainContentPreset}</AiChainOfThoughts>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const chevron = canvas.getByTestId(TEST_IDS.headlineChevron);
    await step('closed: content is absent', async () => {
      expect(canvas.queryByTestId(TEST_IDS.content)).toBeNull();
    });
    await step('click chevron: content appears, onOpenChange(true)', async () => {
      await userEvent.click(chevron);
      await expect(canvas.getByTestId(TEST_IDS.content)).toBeVisible();
      expect(args.onOpenChange).toHaveBeenCalledTimes(1);
      expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    });
    await step('keyboard: Enter on focused chevron collapses content', async () => {
      chevron.focus();
      await userEvent.keyboard('{Enter}');
      expect(canvas.queryByTestId(TEST_IDS.content)).toBeNull();
      expect(args.onOpenChange).toHaveBeenCalledTimes(2);
      expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AiChainOfThoughts.InteractionTest.stories-PM7qLtLv.js.map