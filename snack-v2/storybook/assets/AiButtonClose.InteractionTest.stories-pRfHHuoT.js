import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-CH0ThVYh.js";import{n as c,t as l}from"./src-CoNE8wWu.js";import{n as u,t as d}from"./testIds-FRBvZ4Vw.js";var f,p,m,h,g,_,v,y,b;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_=m(),v={title:`AI/Primitives/AiButtonClose/Tests/Interaction`,id:`ai-aibuttonclose-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onClick:m(),"data-test-id":d.root}},y={tags:[`test`,`dev`],render:e=>(0,f.jsx)(r,{children:(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{children:`Interaction`}),(0,f.jsx)(n,{children:`Крестик сообщает о нажатии кликом и Enter; disabled-крестик не реагирует.`}),(0,f.jsxs)(s,{align:`center`,children:[(0,f.jsx)(c,{...e}),(0,f.jsx)(c,{disabled:!0,onClick:_,"data-test-id":d.disabled,"aria-label":`Удалить`})]})]})}),play:async({args:e,canvasElement:t,step:n})=>{_.mockClear();let r=g(t),i=r.getByTestId(d.root),a=r.getByTestId(d.disabled);await n(`a11y: default aria-label from locale, override via prop`,async()=>{await p(i.getAttribute(`aria-label`)).toBeTruthy(),await p(a).toHaveAttribute(`aria-label`,`Удалить`)}),await n(`click: fires onClick once`,async()=>{await h.click(i),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Enter fires onClick again`,async()=>{i.focus(),await p(i).toHaveFocus(),await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(2)}),await n(`disabled: click does not fire onClick`,async()=>{await p(a).toBeDisabled(),await h.click(a,{pointerEventsCheck:0}),p(_).not.toHaveBeenCalled()})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: (args: AiButtonCloseProps) => <DemoPage>
      <DemoPanel>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Крестик сообщает о нажатии кликом и Enter; disabled-крестик не реагирует.</DemoHint>
        <DemoActions align='center'>
          <AiButtonClose {...args} />
          <AiButtonClose disabled onClick={onClickDisabled} data-test-id={TEST_IDS.disabled} aria-label='Удалить' />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    onClickDisabled.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    const disabledButton = canvas.getByTestId(TEST_IDS.disabled);
    await step('a11y: default aria-label from locale, override via prop', async () => {
      await expect(root.getAttribute('aria-label')).toBeTruthy();
      await expect(disabledButton).toHaveAttribute('aria-label', 'Удалить');
    });
    await step('click: fires onClick once', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Enter fires onClick again', async () => {
      root.focus();
      await expect(root).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
    await step('disabled: click does not fire onClick', async () => {
      await expect(disabledButton).toBeDisabled();
      await userEvent.click(disabledButton, {
        pointerEventsCheck: 0
      });
      expect(onClickDisabled).not.toHaveBeenCalled();
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=AiButtonClose.InteractionTest.stories-pRfHHuoT.js.map