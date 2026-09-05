import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Coxm4alt.js";import{i as u,n as d,r as f,t as p}from"./testIds-DP8680ow.js";var m,h,g,_,v,y,b,x,S,C;t((()=>{f(),m=e(n(),1),c(),d(),h=r(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=_(),x={title:`AI/Surfaces/AiCard/Tests/Interaction`,id:`ai-aicard-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Card title`,children:`Default content`,checked:!1,onChange:_(),onClick:_(),"data-test-id":p.root}},S={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,m.useState)(e.checked??!1);return(0,h.jsx)(l,{children:(0,h.jsxs)(a,{children:[(0,h.jsx)(s,{children:`Interaction`}),(0,h.jsx)(o,{children:`Enabled-карточка переключается кликом / Enter / Space; disabled-карточка не реагирует.`}),(0,h.jsxs)(i,{align:`center`,children:[(0,h.jsx)(u,{...e,disabled:!1,checked:t,onChange:t=>{n(t),e.onChange?.(t)},"data-test-id":p.root}),(0,h.jsx)(u,{...e,disabled:!0,checked:!1,onChange:b,"data-test-id":p.disabled})]})]})})},play:async({args:e,canvasElement:t,step:n})=>{b.mockClear();let r=y(t),i=r.getByTestId(p.root),a=r.getByTestId(p.disabled);await n(`click: toggles checked → true`,async()=>{await v.click(i),g(e.onChange).toHaveBeenCalledWith(!0),g(e.onClick).toHaveBeenCalledTimes(1),await g(i).toHaveAttribute(`aria-pressed`,`true`),await g(i).toHaveAttribute(`data-checked`,`true`)}),await n(`click: toggles checked → false`,async()=>{await v.click(i),g(e.onChange).toHaveBeenCalledWith(!1),g(e.onClick).toHaveBeenCalledTimes(2),await g(i).toHaveAttribute(`aria-pressed`,`false`)}),await n(`keyboard: Tab focuses root`,async()=>{i.focus(),await g(i).toHaveFocus()}),await n(`keyboard: Enter triggers toggle`,async()=>{await v.keyboard(`{Enter}`),g(e.onChange).toHaveBeenCalledWith(!0),g(e.onClick).toHaveBeenCalledTimes(3)}),await n(`keyboard: Space triggers toggle`,async()=>{await v.keyboard(` `),g(e.onChange).toHaveBeenCalledWith(!1),g(e.onClick).toHaveBeenCalledTimes(4)}),await n(`disabled: native disabled attribute is set`,async()=>{await g(a).toBeDisabled()}),await n(`disabled: click does not fire onChange`,async()=>{await v.click(a,{pointerEventsCheck:0}),g(b).not.toHaveBeenCalled()})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function Render(args: AiCardProps) {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Interaction</DemoTitle>
          <DemoHint>Enabled-карточка переключается кликом / Enter / Space; disabled-карточка не реагирует.</DemoHint>
          <DemoActions align='center'>
            <AiCard {...args} disabled={false} checked={checked} onChange={(next: boolean) => {
            setChecked(next);
            args.onChange?.(next);
          }} data-test-id={TEST_IDS.root} />
            <AiCard {...args} disabled checked={false} onChange={onChangeDisabled} data-test-id={TEST_IDS.disabled} />
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    onChangeDisabled.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    const disabledCard = canvas.getByTestId(TEST_IDS.disabled);
    await step('click: toggles checked → true', async () => {
      await userEvent.click(root);
      expect(args.onChange).toHaveBeenCalledWith(true);
      expect(args.onClick).toHaveBeenCalledTimes(1);
      await expect(root).toHaveAttribute('aria-pressed', 'true');
      await expect(root).toHaveAttribute('data-checked', 'true');
    });
    await step('click: toggles checked → false', async () => {
      await userEvent.click(root);
      expect(args.onChange).toHaveBeenCalledWith(false);
      expect(args.onClick).toHaveBeenCalledTimes(2);
      await expect(root).toHaveAttribute('aria-pressed', 'false');
    });
    await step('keyboard: Tab focuses root', async () => {
      root.focus();
      await expect(root).toHaveFocus();
    });
    await step('keyboard: Enter triggers toggle', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onChange).toHaveBeenCalledWith(true);
      expect(args.onClick).toHaveBeenCalledTimes(3);
    });
    await step('keyboard: Space triggers toggle', async () => {
      await userEvent.keyboard(' ');
      expect(args.onChange).toHaveBeenCalledWith(false);
      expect(args.onClick).toHaveBeenCalledTimes(4);
    });
    await step('disabled: native disabled attribute is set', async () => {
      await expect(disabledCard).toBeDisabled();
    });
    await step('disabled: click does not fire onChange', async () => {
      await userEvent.click(disabledCard, {
        pointerEventsCheck: 0
      });
      expect(onChangeDisabled).not.toHaveBeenCalled();
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=AiCard.InteractionTest.stories-BGhcnkfK.js.map