import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-DMWsC78w.js";import{n as u,t as d}from"./src-on2BEXi_.js";import{n as f,t as p}from"./testIds-B-iD_E0_.js";var m,h,g,_,v,y,b,x,S,C;t((()=>{d(),m=e(n(),1),c(),f(),h=r(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=_(),x={title:`AI/Primitives/ButtonChevron/Tests/Interaction`,id:`ai-buttonchevron-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{opened:!1,onClick:_(),"data-test-id":p.root}},S={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,m.useState)(e.opened??!1);return(0,h.jsx)(l,{children:(0,h.jsxs)(a,{children:[(0,h.jsx)(s,{children:`Interaction`}),(0,h.jsx)(o,{children:`Enabled-кнопка переключает шеврон кликом / Enter; disabled-кнопка не реагирует.`}),(0,h.jsxs)(i,{align:`center`,children:[(0,h.jsx)(u,{...e,opened:t,onClick:t=>{n(e=>!e),e.onClick?.(t)},"data-test-id":p.root}),(0,h.jsx)(u,{...e,disabled:!0,onClick:b,"data-test-id":p.disabled})]})]})})},play:async({args:e,canvasElement:t,step:n})=>{b.mockClear();let r=y(t),i=r.getByTestId(p.root),a=r.getByTestId(p.disabled);await n(`click: toggles opened → true`,async()=>{await v.click(i),g(e.onClick).toHaveBeenCalledTimes(1),await g(i).toHaveAttribute(`data-opened`,`true`),await g(i).toHaveAttribute(`aria-expanded`,`true`)}),await n(`click: toggles opened → false`,async()=>{await v.click(i),g(e.onClick).toHaveBeenCalledTimes(2),await g(i).toHaveAttribute(`aria-expanded`,`false`)}),await n(`keyboard: Tab focuses root`,async()=>{i.focus(),await g(i).toHaveFocus()}),await n(`keyboard: Enter triggers toggle`,async()=>{await v.keyboard(`{Enter}`),g(e.onClick).toHaveBeenCalledTimes(3),await g(i).toHaveAttribute(`data-opened`,`true`)}),await n(`disabled: native disabled attribute is set`,async()=>{await g(a).toBeDisabled()}),await n(`disabled: click does not fire onClick`,async()=>{await v.click(a,{pointerEventsCheck:0}),g(b).not.toHaveBeenCalled()})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function Render(args: AiButtonChevronProps) {
    const [opened, setOpened] = useState(args.opened ?? false);
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Interaction</DemoTitle>
          <DemoHint>Enabled-кнопка переключает шеврон кликом / Enter; disabled-кнопка не реагирует.</DemoHint>
          <DemoActions align='center'>
            <AiButtonChevron {...args} opened={opened} onClick={event => {
            setOpened(prev => !prev);
            args.onClick?.(event);
          }} data-test-id={TEST_IDS.root} />
            <AiButtonChevron {...args} disabled onClick={onClickDisabled} data-test-id={TEST_IDS.disabled} />
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    onClickDisabled.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    const disabledButton = canvas.getByTestId(TEST_IDS.disabled);
    await step('click: toggles opened → true', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalledTimes(1);
      await expect(root).toHaveAttribute('data-opened', 'true');
      await expect(root).toHaveAttribute('aria-expanded', 'true');
    });
    await step('click: toggles opened → false', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalledTimes(2);
      await expect(root).toHaveAttribute('aria-expanded', 'false');
    });
    await step('keyboard: Tab focuses root', async () => {
      root.focus();
      await expect(root).toHaveFocus();
    });
    await step('keyboard: Enter triggers toggle', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(3);
      await expect(root).toHaveAttribute('data-opened', 'true');
    });
    await step('disabled: native disabled attribute is set', async () => {
      await expect(disabledButton).toBeDisabled();
    });
    await step('disabled: click does not fire onClick', async () => {
      await userEvent.click(disabledButton, {
        pointerEventsCheck: 0
      });
      expect(onClickDisabled).not.toHaveBeenCalled();
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=AiButtonChevron.InteractionTest.stories-DpAY_Vkl.js.map