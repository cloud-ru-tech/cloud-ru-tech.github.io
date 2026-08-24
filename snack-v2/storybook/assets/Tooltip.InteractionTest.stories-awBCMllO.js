import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CqCwb0Nr.js";import{a as c,s as l,t as u,u as d}from"./src-CVvAtkaN.js";import{c as f}from"./src-DZuSIDuI.js";import{o as p,t as m}from"./src-B9H0cWqx.js";import{n as h,t as g}from"./testIds-Df8JpfdZ.js";var _,v,y,b,x,S,C,w;e((()=>{u(),m(),o(),h(),_=t(),{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Overlays/Tooltip/Tooltip/Tests/Interaction`,id:`components-tooltip-tooltip-tests-interaction`,component:p,parameters:{layout:`fullscreen`}},C={tags:[`dev`,`test`],render:()=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:`InteractionTest`}),(0,_.jsx)(i,{children:`Открытие/закрытие Tooltip по клику, Tab и Escape.`}),(0,_.jsx)(n,{align:`center`,children:(0,_.jsx)(p,{tip:`Подсказка раскрылась`,trigger:f.Click,"data-test-id":g.tooltip.content,children:(0,_.jsx)(c,{"data-test-id":g.tooltip.triggerOpen,label:`Открыть`,view:d.Outline,appearance:l.Neutral})})})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e).getByTestId(g.tooltip.triggerOpen);await t(`click: opens tooltip content`,async()=>{await y.click(n),await b(()=>{v(x(document.body).getByTestId(g.tooltip.content)).toBeVisible()})}),await t(`keyboard: Escape closes tooltip`,async()=>{await y.keyboard(`{Escape}`),await b(()=>{let e=x(document.body).queryByTestId(g.tooltip.content);v(e).toBeNull()})}),await t(`keyboard: Tab focuses trigger`,async()=>{n.blur(),await y.tab(),await v(n).toHaveFocus()})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=Tooltip.InteractionTest.stories-awBCMllO.js.map