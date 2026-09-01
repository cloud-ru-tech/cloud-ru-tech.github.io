import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{n as c,t as l}from"./src-DDoZkrm8.js";import{n as u,t as d}from"./testIds-B0GnTURH.js";var f,p,m,h,g,_,v,y;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Actions/Copy/CopyButton/Tests/Interaction`,id:`uikit-product-copy-copybutton-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},v={tags:[`test`,`dev`],args:{valueToCopy:`payload`,onClick:m(),"data-test-id":d.copyButton.root},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по кнопке копирует значение и вызывает onClick.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getByTestId(d.copyButton.root);await n(`click: fires onClick once`,async()=>{await h.click(r),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Tab focuses the button`,async()=>{r.blur(),await h.tab(),await p(r).toHaveFocus()}),await n(`keyboard: Enter fires onClick`,async()=>{await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(2)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    valueToCopy: 'payload',
    onClick: fn(),
    'data-test-id': TEST_IDS.copyButton.root
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по кнопке копирует значение и вызывает onClick.</DemoHint>
        <DemoActions align='center'>
          <CopyButton {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const button = within(canvasElement).getByTestId(TEST_IDS.copyButton.root);
    await step('click: fires onClick once', async () => {
      await userEvent.click(button);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Tab focuses the button', async () => {
      button.blur();
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });
    await step('keyboard: Enter fires onClick', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });

    // Space-step намеренно опущен: userEvent в storybook-test browser-окружении
    // не доводит keyUp Space до native <button>, и click не доходит до onClick.
    // Поведение Space на нативной кнопке гарантировано браузером; Enter-step выше
    // покрывает клавиатурную активацию.
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=CopyButton.InteractionTest.stories-BOgvY2KJ.js.map