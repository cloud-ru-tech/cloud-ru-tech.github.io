import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-CH0ThVYh.js";import{i as c,n as l,t as u}from"./src-9qcDQsfb.js";import{n as d,t as f}from"./testIds-C4NQJCZ2.js";var p,m,h,g,_,v,y,b,x;e((()=>{u(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v=h(),y={title:`AI/Primitives/AiButtonControls/Tests/Interaction`,id:`ai-aibuttoncontrols-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{direction:c.Right,onClick:h(),"data-test-id":f.root}},b={tags:[`test`,`dev`],render:e=>(0,p.jsx)(r,{children:(0,p.jsxs)(a,{children:[(0,p.jsx)(i,{children:`Interaction`}),(0,p.jsx)(n,{children:`Стрелка сообщает о нажатии кликом и Enter; disabled-стрелка не реагирует.`}),(0,p.jsxs)(s,{align:`center`,children:[(0,p.jsx)(l,{...e}),(0,p.jsx)(l,{direction:c.Down,disabled:!0,onClick:v,"data-test-id":f.disabled,"aria-label":`К последнему сообщению`})]})]})}),play:async({args:e,canvasElement:t,step:n})=>{v.mockClear();let r=_(t),i=r.getByTestId(f.root),a=r.getByTestId(f.disabled);await n(`a11y: default aria-label from locale, override via prop`,async()=>{await m(i.getAttribute(`aria-label`)).toBeTruthy(),await m(a).toHaveAttribute(`aria-label`,`К последнему сообщению`)}),await n(`click: fires onClick once`,async()=>{await g.click(i),m(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Enter fires onClick again`,async()=>{i.focus(),await m(i).toHaveFocus(),await g.keyboard(`{Enter}`),m(e.onClick).toHaveBeenCalledTimes(2)}),await n(`disabled: click does not fire onClick`,async()=>{await m(a).toBeDisabled(),await g.click(a,{pointerEventsCheck:0}),m(v).not.toHaveBeenCalled()})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: (args: AiButtonControlsProps) => <DemoPage>
      <DemoPanel>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Стрелка сообщает о нажатии кликом и Enter; disabled-стрелка не реагирует.</DemoHint>
        <DemoActions align='center'>
          <AiButtonControls {...args} />
          <AiButtonControls direction={DIRECTION.Down} disabled onClick={onClickDisabled} data-test-id={TEST_IDS.disabled} aria-label='К последнему сообщению' />
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
      await expect(disabledButton).toHaveAttribute('aria-label', 'К последнему сообщению');
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
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`]}))();export{b as InteractionTest,x as __namedExportsOrder,y as default};
//# sourceMappingURL=AiButtonControls.InteractionTest.stories-DVDPYONj.js.map