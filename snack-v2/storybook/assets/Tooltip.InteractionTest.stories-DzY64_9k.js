import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{c}from"./src-CJlc3CKH.js";import{o as l,t as u}from"./src-CQRh0ypM.js";import{a as d,s as f,t as p,u as m}from"./src-CHNzQsqP.js";import{n as h,t as g}from"./testIds-B1kEjsBQ.js";var _,v,y,b,x,S,C,w;e((()=>{p(),u(),o(),h(),_=t(),{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Overlays/Tooltip/Tooltip/Tests/Interaction`,id:`components-tooltip-tooltip-tests-interaction`,component:l,parameters:{layout:`fullscreen`}},C={tags:[`dev`,`test`],render:()=>(0,_.jsx)(r,{children:(0,_.jsxs)(a,{children:[(0,_.jsx)(i,{children:`InteractionTest`}),(0,_.jsx)(n,{children:`Открытие/закрытие Tooltip по клику, Tab и Escape.`}),(0,_.jsx)(s,{align:`center`,children:(0,_.jsx)(l,{tip:`Подсказка раскрылась`,trigger:c.Click,"data-test-id":g.tooltip.content,children:(0,_.jsx)(d,{"data-test-id":g.tooltip.triggerOpen,label:`Открыть`,view:m.Outline,appearance:f.Neutral})})})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e).getByTestId(g.tooltip.triggerOpen);await t(`click: opens tooltip content`,async()=>{await y.click(n),await b(()=>{v(x(document.body).getByTestId(g.tooltip.content)).toBeVisible()})}),await t(`keyboard: Escape closes tooltip`,async()=>{await y.keyboard(`{Escape}`),await b(()=>{let e=x(document.body).queryByTestId(g.tooltip.content);v(e).toBeNull()})}),await t(`keyboard: Tab focuses trigger`,async()=>{n.blur(),await y.tab(),await v(n).toHaveFocus()})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>{'Открытие/закрытие Tooltip по клику, Tab и Escape.'}</DemoHint>
        <DemoActions align='center'>
          <Tooltip tip='Подсказка раскрылась' trigger={TRIGGER.Click} data-test-id={TEST_IDS.tooltip.content}>
            <Button data-test-id={TEST_IDS.tooltip.triggerOpen} label='Открыть' view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
          </Tooltip>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId(TEST_IDS.tooltip.triggerOpen);
    await step('click: opens tooltip content', async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(within(document.body).getByTestId(TEST_IDS.tooltip.content)).toBeVisible();
      });
    });
    await step('keyboard: Escape closes tooltip', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => {
        const content = within(document.body).queryByTestId(TEST_IDS.tooltip.content);
        expect(content).toBeNull();
      });
    });
    await step('keyboard: Tab focuses trigger', async () => {
      trigger.blur();
      await userEvent.tab();
      await expect(trigger).toHaveFocus();
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Tooltip.InteractionTest.stories-DzY64_9k.js.map