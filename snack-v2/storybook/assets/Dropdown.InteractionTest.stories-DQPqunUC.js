import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-aHi-eIAa.js";import{a as c,t as l}from"./src-BX1IfK14.js";import{n as u,t as d}from"./src-DSkhzrUz.js";import{n as f,t as p}from"./styles.module-ZEZF1H1D.js";import{n as m,t as h}from"./testIds-Dwil6x8z.js";var g,_,v,y,b,x,S,C,w;e((()=>{l(),d(),o(),p(),m(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Overlays/Dropdown/Tests/Interaction`,id:`components-dropdown-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{"data-test-id":h.root,onOpenChange:v()}},C={tags:[`test`,`dev`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Открытие Dropdown по клику, выбор пункта, закрытие через Escape.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(u,{...e,trigger:`click`,content:(0,g.jsxs)(`ul`,{"data-test-id":h.content,className:f.list,children:[(0,g.jsx)(`li`,{"data-test-id":h.item,className:f.listItem,children:`Москва`}),(0,g.jsx)(`li`,{className:f.listItem,children:`Санкт-Петербург`}),(0,g.jsx)(`li`,{className:f.listItem,children:`Казань`})]}),children:(0,g.jsx)(c,{"data-test-id":h.triggerOpen,label:`Открыть`,view:`outline`,appearance:`neutral`})})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=x(t),i=x(document.body),a=r.getByTestId(h.triggerOpen);await n(`click: opens dropdown content via portal`,async()=>{await y.click(a),await b(()=>_(i.getByTestId(h.content)).toBeVisible()),_(e.onOpenChange).toHaveBeenCalled(),_(e.onOpenChange.mock.calls[0][0]).toBe(!0)}),await n(`click on item: keeps callback consumer aware (no crash)`,async()=>{let e=i.getByTestId(h.item);await y.click(e),await _(i.getByTestId(h.content)).toBeVisible()}),await n(`keyboard: Escape closes dropdown`,async()=>{await y.keyboard(`{Escape}`),await b(()=>_(i.queryByTestId(h.content)).toBeNull());let t=e.onOpenChange.mock.calls;_(t.at(-1)?.[0]).toBe(!1)}),await n(`click: re-opens dropdown after Escape`,async()=>{await y.click(a),await b(()=>_(i.getByTestId(h.content)).toBeVisible())})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>{'Открытие Dropdown по клику, выбор пункта, закрытие через Escape.'}</DemoHint>
        <DemoActions align='center'>
          <Dropdown {...args} trigger='click' content={<ul data-test-id={TEST_IDS.content} className={styles.list}>
                <li data-test-id={TEST_IDS.item} className={styles.listItem}>
                  Москва
                </li>
                <li className={styles.listItem}>Санкт-Петербург</li>
                <li className={styles.listItem}>Казань</li>
              </ul>}>
            <Button data-test-id={TEST_IDS.triggerOpen} label='Открыть' view='outline' appearance='neutral' />
          </Dropdown>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByTestId(TEST_IDS.triggerOpen);
    await step('click: opens dropdown content via portal', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(body.getByTestId(TEST_IDS.content)).toBeVisible());
      // Dropdown зовёт callback с (open, event, reason) — проверяем первый аргумент.
      expect(args.onOpenChange).toHaveBeenCalled();
      expect((args.onOpenChange as ReturnType<typeof fn>).mock.calls[0][0]).toBe(true);
    });
    await step('click on item: keeps callback consumer aware (no crash)', async () => {
      const item = body.getByTestId(TEST_IDS.item);
      await userEvent.click(item);
      // Items are inert in this story — клик не должен ронять; контент остаётся.
      await expect(body.getByTestId(TEST_IDS.content)).toBeVisible();
    });
    await step('keyboard: Escape closes dropdown', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.content)).toBeNull());
      const calls = (args.onOpenChange as ReturnType<typeof fn>).mock.calls;
      expect(calls.at(-1)?.[0]).toBe(false);
    });
    await step('click: re-opens dropdown after Escape', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(body.getByTestId(TEST_IDS.content)).toBeVisible());
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Dropdown.InteractionTest.stories-DQPqunUC.js.map