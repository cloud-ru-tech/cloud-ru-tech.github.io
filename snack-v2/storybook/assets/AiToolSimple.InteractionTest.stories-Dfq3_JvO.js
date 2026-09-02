import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DQTa2Tvz.js";import{E as c,f as l,t as u}from"./src-CyuIQpA5.js";import{n as d,t as f}from"./testIds-kriTZdh7.js";import{i as p,n as m,r as h,t as g}from"./presets-C6BtMpJH.js";var _,v,y,b,x,S,C,w;e((()=>{u(),o(),d(),p(),_=t(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`AI/Primitives/AiTool/AiToolSimple/Tests/Interaction`,id:`ai-aitool-aitoolsimple-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{name:m,icon:c.Search,defaultOpen:!1,onOpenChange:y(),"data-test-id":f.simple}},C={tags:[`test`,`dev`],render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{width:`narrow`,children:[(0,_.jsx)(a,{children:`Interaction`}),(0,_.jsx)(i,{children:`Проверяет раскрытие описания и бейджей chevron-кнопкой мышью и с клавиатуры.`}),(0,_.jsx)(n,{block:!0,children:(0,_.jsx)(l,{...e,description:g,children:h})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=x(t),i=r.getByTestId(f.simpleChevron);await n(`closed: details are absent`,async()=>{v(r.queryByTestId(f.simpleDescription)).toBeNull(),v(r.queryByTestId(f.simpleContent)).toBeNull()}),await n(`click chevron: description and content appear, onOpenChange(true)`,async()=>{await b.click(i),await v(r.getByTestId(f.simpleDescription)).toBeVisible(),await v(r.getByTestId(f.simpleContent)).toBeVisible(),v(e.onOpenChange).toHaveBeenCalledTimes(1),v(e.onOpenChange).toHaveBeenLastCalledWith(!0)}),await n(`keyboard: Enter on focused chevron collapses details`,async()=>{i.focus(),await b.keyboard(`{Enter}`),v(r.queryByTestId(f.simpleDescription)).toBeNull(),v(e.onOpenChange).toHaveBeenCalledTimes(2),v(e.onOpenChange).toHaveBeenLastCalledWith(!1)})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: (args: AiToolSimpleProps) => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Проверяет раскрытие описания и бейджей chevron-кнопкой мышью и с клавиатуры.</DemoHint>
        <DemoActions block>
          <AiToolSimple {...args} description={SIMPLE_DESCRIPTION}>
            {badgesPreset}
          </AiToolSimple>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const chevron = canvas.getByTestId(TEST_IDS.simpleChevron);
    await step('closed: details are absent', async () => {
      expect(canvas.queryByTestId(TEST_IDS.simpleDescription)).toBeNull();
      expect(canvas.queryByTestId(TEST_IDS.simpleContent)).toBeNull();
    });
    await step('click chevron: description and content appear, onOpenChange(true)', async () => {
      await userEvent.click(chevron);
      await expect(canvas.getByTestId(TEST_IDS.simpleDescription)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.simpleContent)).toBeVisible();
      expect(args.onOpenChange).toHaveBeenCalledTimes(1);
      expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    });
    await step('keyboard: Enter on focused chevron collapses details', async () => {
      chevron.focus();
      await userEvent.keyboard('{Enter}');
      expect(canvas.queryByTestId(TEST_IDS.simpleDescription)).toBeNull();
      expect(args.onOpenChange).toHaveBeenCalledTimes(2);
      expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=AiToolSimple.InteractionTest.stories-Dfq3_JvO.js.map