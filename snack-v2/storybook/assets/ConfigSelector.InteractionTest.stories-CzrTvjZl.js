import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{n as c,t as l}from"./src-DNFntQR5.js";import{n as u,t as d}from"./testIds-CYyvoavV.js";var f,p,m,h,g,_,v,y;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Inputs & Forms/ConfigSelector/Tests/Interaction`,id:`uikit-product-configselector-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Конфигурация`,checked:!1,onChange:m(),"data-test-id":d.root}},v={tags:[`test`,`dev`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик вызывает onChange(!checked); Tab фокусирует input; клик по disabled — игнорируется.`}),(0,f.jsxs)(n,{align:`center`,children:[(0,f.jsx)(c,{...e}),(0,f.jsx)(c,{...e,disabled:!0,disabledTip:`Опция недоступна`,"data-test-id":`config-selector-disabled`}),(0,f.jsx)(c,{...e,available:!0,availableTip:(0,f.jsx)(`span`,{"data-test-id":d.availableTip,children:`Рекомендуемая опция`}),"data-test-id":d.availableRoot})]})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t),i=r.getByTestId(d.root);await n(`click: toggles onChange(!checked)`,async()=>{await h.click(i),p(e.onChange).toHaveBeenCalledTimes(1),p(e.onChange).toHaveBeenCalledWith(!0,p.anything())}),await n(`keyboard: Tab focuses the input`,async()=>{let e=g(i).getByTestId(d.input);e.blur(),await h.tab(),await p(e).toHaveFocus()}),await n(`click on disabled chip does NOT call onChange`,async()=>{await h.click(r.getByTestId(`config-selector-disabled`)),p(e.onChange).toHaveBeenCalledTimes(1)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик вызывает onChange(!checked); Tab фокусирует input; клик по disabled — игнорируется.</DemoHint>
        <DemoActions align='center'>
          <ConfigSelector {...args} />
          <ConfigSelector {...args} disabled disabledTip='Опция недоступна' data-test-id='config-selector-disabled' />
          {/* available + availableTip + checked:false — ветка tooltip-open, hover'ится из interaction.spec.ts
              (hover по порталу в storybook-play нестабилен). tip обёрнут в span с id для адресации content портала. */}
          <ConfigSelector {...args} available availableTip={<span data-test-id={TEST_IDS.availableTip}>Рекомендуемая опция</span>} data-test-id={TEST_IDS.availableRoot} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    await step('click: toggles onChange(!checked)', async () => {
      await userEvent.click(root);
      expect(args.onChange).toHaveBeenCalledTimes(1);
      expect(args.onChange).toHaveBeenCalledWith(true, expect.anything());
    });
    await step('keyboard: Tab focuses the input', async () => {
      // Оба chip жёстко ставят TEST_IDS.input → берём input включённого через within(root).
      const input = within(root).getByTestId(TEST_IDS.input);
      input.blur();
      await userEvent.tab();
      await expect(input).toHaveFocus();
    });
    await step('click on disabled chip does NOT call onChange', async () => {
      await userEvent.click(canvas.getByTestId('config-selector-disabled'));
      expect(args.onChange).toHaveBeenCalledTimes(1);
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=ConfigSelector.InteractionTest.stories-CzrTvjZl.js.map