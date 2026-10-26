import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-BroNjke9.js";import{i as c,n as l,r as u,s as d,t as f}from"./constants-tgMdU3Um.js";import{n as p,t as m}from"./styles.module-CoS9bkUz.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{u(),o(),l(),m(),h=t(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,[x,S,C,...w]=f,T={title:`AI/Surfaces/AiSuggestionPanel/Tests/Interaction`,id:`ai-aisuggestionpanel-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{items:[x,{...S,disabled:!0},{...C,loading:!0},...w],onItemClick:_(),onClose:_(),onLogoClick:_(),"data-test-id":d.root}},E={tags:[`test`,`dev`],render:e=>(0,h.jsx)(r,{children:(0,h.jsxs)(a,{width:`wide`,children:[(0,h.jsx)(i,{children:`InteractionTest`}),(0,h.jsx)(n,{children:`Нажатие на вопрос сообщает его value; disabled и loading не реагируют; «+N» открывает список скрытых вопросов и закрывает его после выбора.`}),(0,h.jsx)(s,{align:`start`,children:(0,h.jsx)(`div`,{className:p.wide,children:(0,h.jsx)(c,{...e})})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=b(t),i=b(t.ownerDocument.body),a=e=>{let t=r.getAllByTestId(d.item).find(t=>t.getAttribute(`data-value`)===e);if(!t)throw Error(`Сегмент вопроса ${e} не найден`);return t};await n(`click: вопрос сообщает свой value`,async()=>{await v.click(a(x.value)),await g(e.onItemClick).toHaveBeenCalledWith(x.value)}),await n(`click: disabled и loading не вызывают onItemClick`,async()=>{await g(a(S.value)).toBeDisabled(),await v.click(a(C.value)),await g(e.onItemClick).toHaveBeenCalledTimes(1)}),await n(`click: «+N» открывает список, выбор закрывает его`,async()=>{await v.click(r.getByTestId(d.more));let[t]=await i.findAllByTestId(d.moreListItem);await v.click(t),await g(e.onItemClick).toHaveBeenCalledTimes(2),await y(()=>g(i.queryByTestId(d.moreList)).not.toBeInTheDocument())}),await n(`click: кнопка Giga и крестик вызывают свои колбэки`,async()=>{await v.click(r.getByTestId(d.logo)),await g(e.onLogoClick).toHaveBeenCalledTimes(1),await v.click(r.getByTestId(d.close)),await g(e.onClose).toHaveBeenCalledTimes(1)}),await n(`keyboard: Enter на вопросе в фокусе сообщает value`,async()=>{a(x.value).focus(),await v.keyboard(`{Enter}`),await g(e.onItemClick).toHaveBeenLastCalledWith(x.value)})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          Нажатие на вопрос сообщает его value; disabled и loading не реагируют; «+N» открывает список скрытых вопросов
          и закрывает его после выбора.
        </DemoHint>
        <DemoActions align='start'>
          <div className={styles.wide}>
            <AiSuggestionPanel {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const getItem = (value: string) => {
      const item = canvas.getAllByTestId(TEST_IDS.item).find(node => node.getAttribute('data-value') === value);
      if (!item) throw new Error(\`Сегмент вопроса \${value} не найден\`);
      return item;
    };
    await step('click: вопрос сообщает свой value', async () => {
      await userEvent.click(getItem(first.value));
      await expect(args.onItemClick).toHaveBeenCalledWith(first.value);
    });
    await step('click: disabled и loading не вызывают onItemClick', async () => {
      await expect(getItem(second.value)).toBeDisabled();
      await userEvent.click(getItem(third.value));
      await expect(args.onItemClick).toHaveBeenCalledTimes(1);
    });
    await step('click: «+N» открывает список, выбор закрывает его', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.more));
      const [hiddenItem] = await body.findAllByTestId(TEST_IDS.moreListItem);
      await userEvent.click(hiddenItem);
      await expect(args.onItemClick).toHaveBeenCalledTimes(2);
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.moreList)).not.toBeInTheDocument());
    });
    await step('click: кнопка Giga и крестик вызывают свои колбэки', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.logo));
      await expect(args.onLogoClick).toHaveBeenCalledTimes(1);
      await userEvent.click(canvas.getByTestId(TEST_IDS.close));
      await expect(args.onClose).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Enter на вопросе в фокусе сообщает value', async () => {
      getItem(first.value).focus();
      await userEvent.keyboard('{Enter}');
      await expect(args.onItemClick).toHaveBeenLastCalledWith(first.value);
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`InteractionTest`]}))();export{E as InteractionTest,D as __namedExportsOrder,T as default};
//# sourceMappingURL=AiSuggestionPanel.InteractionTest.stories-DwVNBZVY.js.map