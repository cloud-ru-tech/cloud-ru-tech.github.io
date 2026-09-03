import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{a as c,t as l}from"./src-Bqc-Xdov.js";import{n as u,t as d}from"./testIds-BnmztHjg.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_=`${d.button.root}-disabled`,v={title:`Snack/Actions/Button/Button/Tests/Interaction`,id:`components-button-button-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Click me`,onClick:m(),"data-test-id":d.button.root}},y={tags:[`test`,`dev`],args:{onClickDisabled:m()},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Проверка клика, клавиатуры и состояния disabled.`}),(0,f.jsxs)(n,{align:`center`,children:[(0,f.jsx)(c,{...e,label:`Click me`,disabled:!1,"data-test-id":d.button.root}),(0,f.jsx)(c,{...e,label:`Disabled`,disabled:!0,onClick:e.onClickDisabled,"data-test-id":_})]})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t),i=r.getByTestId(d.button.root),a=r.getByTestId(_),o=e.onClickDisabled;await n(`click: fires onClick once`,async()=>{await h.click(i),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`click: second click fires twice total`,async()=>{await h.click(i),p(e.onClick).toHaveBeenCalledTimes(2)}),await n(`keyboard: Tab focuses button`,async()=>{i.focus(),await p(i).toHaveFocus()}),await n(`keyboard: Enter triggers click`,async()=>{await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(3)}),await n(`disabled: button is disabled`,async()=>{await p(a).toBeDisabled()}),await n(`disabled: click does not fire onClick`,async()=>{await h.click(a,{pointerEventsCheck:0}),p(o).not.toHaveBeenCalled()})}},b=`${d.button.root}-anchor`,x={tags:[`test`,`dev`],args:{as:`a`,href:`https://example.com`,target:`_blank`,label:`Open docs`,"data-test-id":b},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`AsAnchorRelNoopener`}),(0,f.jsx)(i,{children:`Полиморфизм as="a" с автоматическим rel=noopener.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{let t=g(e).getByTestId(b);await p(t).toHaveAttribute(`href`,`https://example.com`),await p(t).toHaveAttribute(`target`,`_blank`),await p(t).toHaveAttribute(`rel`,`noopener noreferrer`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    onClickDisabled: fn()
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Проверка клика, клавиатуры и состояния disabled.</DemoHint>
        <DemoActions align='center'>
          <Button {...args} label='Click me' disabled={false} data-test-id={TEST_IDS.button.root} />
          <Button {...args} label='Disabled' disabled onClick={args.onClickDisabled} data-test-id={DISABLED_BUTTON_TEST_ID} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(TEST_IDS.button.root);
    const disabledButton = canvas.getByTestId(DISABLED_BUTTON_TEST_ID);
    const onClickDisabled = args.onClickDisabled;
    await step('click: fires onClick once', async () => {
      await userEvent.click(button);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: second click fires twice total', async () => {
      await userEvent.click(button);
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
    await step('keyboard: Tab focuses button', async () => {
      button.focus();
      await expect(button).toHaveFocus();
    });
    await step('keyboard: Enter triggers click', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(3);
    });

    // Space-step намеренно опущен — userEvent в storybook-test browser-окружении
    // не доводит keyUp Space до native button-click. Enter-step выше покрывает
    // клавиатурную активацию.

    await step('disabled: button is disabled', async () => {
      await expect(disabledButton).toBeDisabled();
    });
    await step('disabled: click does not fire onClick', async () => {
      await userEvent.click(disabledButton, {
        pointerEventsCheck: 0
      });
      expect(onClickDisabled).not.toHaveBeenCalled();
    });
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    as: 'a',
    href: 'https://example.com',
    target: '_blank',
    label: 'Open docs',
    'data-test-id': ANCHOR_BUTTON_TEST_ID
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>AsAnchorRelNoopener</DemoTitle>
        <DemoHint>Полиморфизм as=&quot;a&quot; с автоматическим rel=noopener.</DemoHint>
        <DemoActions align='center'>
          <Button {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const link = within(canvasElement).getByTestId(ANCHOR_BUTTON_TEST_ID);
    await expect(link).toHaveAttribute('href', 'https://example.com');
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`,`AsAnchorRelNoopener`]}))();export{x as AsAnchorRelNoopener,y as InteractionTest,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.InteractionTest.stories-B2xKZcP2.js.map