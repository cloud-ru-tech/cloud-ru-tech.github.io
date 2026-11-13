import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-m-W0BwXC.js";import{n as c,t as l}from"./src-45hb4-j0.js";import{a as u,o as d,r as f,s as p}from"./fixtures-DNyrOhxs.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{l(),o(),u(),p(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y=g(),b={title:`Site/TabsSegmented/Tests/Interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{items:f.map(e=>({...e,onClick:y})),onChange:g(),"data-test-id":d.root}},x=e=>`${d.itemPrefix}-${e}`,S={tags:[`test`,`dev`],render:e=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`InteractionTest`}),(0,m.jsx)(n,{children:`Выбор кликом, фокус стрелками и Home/End, выбор Enter; недоступная вкладка пропускается.`}),(0,m.jsx)(s,{align:`start`,children:(0,m.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=v(t),i=r.getByTestId(x(`infrastructure`)),a=r.getByTestId(x(`data`)),o=r.getByTestId(x(`ai`)),s=r.getByTestId(x(`archive`));await n(`initial: first item is selected`,async()=>{await h(i).toHaveAttribute(`aria-selected`,`true`),await h(a).toHaveAttribute(`aria-selected`,`false`)}),await n(`click: selects the item, calls onChange and item onClick`,async()=>{await _.click(a),await h(a).toHaveAttribute(`aria-selected`,`true`),await h(i).toHaveAttribute(`aria-selected`,`false`),await h(e.onChange).toHaveBeenLastCalledWith(`data`),await h(y).toHaveBeenCalledTimes(1)}),await n(`click: the selected item does not call onChange again`,async()=>{await _.click(a),await h(e.onChange).toHaveBeenCalledTimes(1),await h(y).toHaveBeenCalledTimes(2)}),await n(`keyboard: only the selected item is in the Tab order`,async()=>{await h(a).toHaveAttribute(`tabindex`,`0`),await h(i).toHaveAttribute(`tabindex`,`-1`),await h(o).toHaveAttribute(`tabindex`,`-1`)}),await n(`keyboard: ArrowRight moves focus, Enter selects`,async()=>{await _.keyboard(`{ArrowRight}`),await h(o).toHaveFocus(),await _.keyboard(`{Enter}`),await h(o).toHaveAttribute(`aria-selected`,`true`),await h(e.onChange).toHaveBeenLastCalledWith(`ai`)}),await n(`keyboard: arrows skip the disabled item and wrap around`,async()=>{await _.keyboard(`{ArrowRight}`),await h(i).toHaveFocus(),await _.keyboard(`{ArrowLeft}`),await h(o).toHaveFocus()}),await n(`keyboard: Home and End focus the first and the last enabled item`,async()=>{await _.keyboard(`{Home}`),await h(i).toHaveFocus(),await _.keyboard(`{End}`),await h(o).toHaveFocus()}),await n(`disabled item is not selectable`,async()=>{await h(s).toBeDisabled(),await _.click(s,{pointerEventsCheck:0}),await h(s).toHaveAttribute(`aria-selected`,`false`),await h(e.onChange).toHaveBeenCalledTimes(2)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Выбор кликом, фокус стрелками и Home/End, выбор Enter; недоступная вкладка пропускается.</DemoHint>
        <DemoActions align='start'>
          <TabsSegmented {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByTestId(itemId('infrastructure'));
    const second = canvas.getByTestId(itemId('data'));
    const third = canvas.getByTestId(itemId('ai'));
    const disabled = canvas.getByTestId(itemId('archive'));
    await step('initial: first item is selected', async () => {
      await expect(first).toHaveAttribute('aria-selected', 'true');
      await expect(second).toHaveAttribute('aria-selected', 'false');
    });
    await step('click: selects the item, calls onChange and item onClick', async () => {
      await userEvent.click(second);
      await expect(second).toHaveAttribute('aria-selected', 'true');
      await expect(first).toHaveAttribute('aria-selected', 'false');
      await expect(args.onChange).toHaveBeenLastCalledWith('data');
      await expect(onItemClick).toHaveBeenCalledTimes(1);
    });
    await step('click: the selected item does not call onChange again', async () => {
      await userEvent.click(second);
      await expect(args.onChange).toHaveBeenCalledTimes(1);
      await expect(onItemClick).toHaveBeenCalledTimes(2);
    });
    await step('keyboard: only the selected item is in the Tab order', async () => {
      await expect(second).toHaveAttribute('tabindex', '0');
      await expect(first).toHaveAttribute('tabindex', '-1');
      await expect(third).toHaveAttribute('tabindex', '-1');
    });
    await step('keyboard: ArrowRight moves focus, Enter selects', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await expect(third).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      await expect(third).toHaveAttribute('aria-selected', 'true');
      await expect(args.onChange).toHaveBeenLastCalledWith('ai');
    });
    await step('keyboard: arrows skip the disabled item and wrap around', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await expect(first).toHaveFocus();
      await userEvent.keyboard('{ArrowLeft}');
      await expect(third).toHaveFocus();
    });
    await step('keyboard: Home and End focus the first and the last enabled item', async () => {
      await userEvent.keyboard('{Home}');
      await expect(first).toHaveFocus();
      await userEvent.keyboard('{End}');
      await expect(third).toHaveFocus();
    });
    await step('disabled item is not selectable', async () => {
      await expect(disabled).toBeDisabled();
      await userEvent.click(disabled, {
        pointerEventsCheck: 0
      });
      await expect(disabled).toHaveAttribute('aria-selected', 'false');
      await expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,b as default};
//# sourceMappingURL=TabsSegmented.InteractionTest.stories-CtYveBfM.js.map