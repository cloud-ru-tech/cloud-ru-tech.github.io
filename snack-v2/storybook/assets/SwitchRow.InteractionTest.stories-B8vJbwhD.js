import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-aHi-eIAa.js";import{a as c,n as l,t as u}from"./src-DLTqciob.js";import{t as d}from"./testIds-BsTuCNC-.js";var f,p,m,h,g,_,v,y;e((()=>{u(),o(),d(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Inputs & Forms/SwitchRow/Tests/Interaction`,id:`uikit-product-switchrow-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Toggle me`,tip:`Подсказка с вопросом`,defaultChecked:!1,onChange:m(),"data-test-id":c.root}},v={tags:[`test`,`dev`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по строке переключает switch; клик по tooltip не пробрасывается.`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(l,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t),i=r.getByTestId(c.root);await n(`click: row triggers onChange(true)`,async()=>{await h.click(i),p(e.onChange).toHaveBeenCalledTimes(1),p(e.onChange).toHaveBeenCalledWith(!0)}),await n(`click on QuestionTooltip does NOT propagate to row`,async()=>{let t=r.getByTestId(c.titleTooltip);await h.click(t),p(e.onChange).toHaveBeenCalledTimes(1)}),await n(`keyboard: Tab focuses the row`,async()=>{i.blur(),await h.tab(),await p(i).toHaveFocus()}),await n(`keyboard: Enter triggers onChange`,async()=>{await h.keyboard(`{Enter}`),p(e.onChange).toHaveBeenCalledTimes(2)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по строке переключает switch; клик по tooltip не пробрасывается.</DemoHint>
        <DemoActions block>
          <SwitchRow {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByTestId(TEST_IDS.root);
    await step('click: row triggers onChange(true)', async () => {
      await userEvent.click(row);
      expect(args.onChange).toHaveBeenCalledTimes(1);
      expect(args.onChange).toHaveBeenCalledWith(true);
    });
    await step('click on QuestionTooltip does NOT propagate to row', async () => {
      const tip = canvas.getByTestId(TEST_IDS.titleTooltip);
      await userEvent.click(tip);
      expect(args.onChange).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Tab focuses the row', async () => {
      row.blur();
      await userEvent.tab();
      await expect(row).toHaveFocus();
    });
    await step('keyboard: Enter triggers onChange', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });

    // Space-step намеренно опущен — userEvent в storybook-test browser-окружении
    // не доводит keyUp Space до нативного click. Enter-step выше покрывает
    // клавиатурную активацию.
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=SwitchRow.InteractionTest.stories-B8vJbwhD.js.map