import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C2bZDhP2.js";import{i as c,o as l,t as u}from"./src-CEUUW114.js";import{n as d,t as f}from"./testIds-DhGa-8ZX.js";var p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Uikit Product/Actions/Copy/CopyLine/Tests/Interaction`,id:`uikit-product-copy-copyline-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},y={tags:[`test`,`dev`],args:{content:`value-to-copy`,onClick:h(),"data-test-id":f.copyLine.root,copyButtonHideStrategy:l.Never},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Клик по строке копирует значение и вызывает onClick.`}),(0,p.jsx)(n,{block:!0,children:(0,p.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t),i=r.getByTestId(f.copyLine.root),a=r.getByTestId(f.copyLine.copyButton);await n(`click: root fires onClick`,async()=>{await g.click(i),m(e.onClick).toHaveBeenCalled()}),await n(`click: inner copy button is reachable and clickable`,async()=>{let t=e.onClick.mock.calls.length;await g.click(a),m(e.onClick.mock.calls.length).toBe(t)}),await n(`keyboard: Tab focuses the inner copy button`,async()=>{i.blur(),a.blur(),await g.tab(),await m(a).toHaveFocus()}),await n(`keyboard: Enter activates focused copy button without bubbling to root onClick`,async()=>{let t=e.onClick.mock.calls.length;await g.keyboard(`{Enter}`),m(e.onClick.mock.calls.length).toBe(t)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    content: 'value-to-copy',
    onClick: fn(),
    'data-test-id': TEST_IDS.copyLine.root,
    copyButtonHideStrategy: COPY_BUTTON_HIDE_STRATEGY.Never
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по строке копирует значение и вызывает onClick.</DemoHint>
        <DemoActions block>
          <CopyLine {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.copyLine.root);
    const copyButton = canvas.getByTestId(TEST_IDS.copyLine.copyButton);
    await step('click: root fires onClick', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalled();
    });
    await step('click: inner copy button is reachable and clickable', async () => {
      // Click на внутреннюю copy-кнопку запускает copy-action (через clipboard
      // API), но НЕ всплывает до root onClick — copyButton делает stopPropagation.
      // Поэтому здесь проверяем только, что элемент доступен и кликабелен; mock
      // root onClick остаётся неизменным.
      const callsBefore = (args.onClick as ReturnType<typeof fn>).mock.calls.length;
      await userEvent.click(copyButton);
      expect((args.onClick as ReturnType<typeof fn>).mock.calls.length).toBe(callsBefore);
    });
    await step('keyboard: Tab focuses the inner copy button', async () => {
      root.blur();
      copyButton.blur();
      await userEvent.tab();
      await expect(copyButton).toHaveFocus();
    });
    await step('keyboard: Enter activates focused copy button without bubbling to root onClick', async () => {
      // Enter на сфокусированной copy-button нативно вызывает click. CopyLine'овский
      // onClick (на root) НЕ вызывается — copy-button делает stopPropagation (как и
      // на mouse-click выше). Проверяем, что root onClick остался прежним.
      const callsBefore = (args.onClick as ReturnType<typeof fn>).mock.calls.length;
      await userEvent.keyboard('{Enter}');
      expect((args.onClick as ReturnType<typeof fn>).mock.calls.length).toBe(callsBefore);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=CopyLine.InteractionTest.stories-CDojuaC6.js.map