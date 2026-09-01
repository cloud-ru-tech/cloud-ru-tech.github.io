import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{c,t as l}from"./src-Cb2x9t_J.js";import{n as u,t as d}from"./testIds-CR6UdZGU.js";var f,p,m,h,g,_,v,y,b;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Uikit Product/Feedback/Notification/NotificationCard/Tests/Interaction`,id:`uikit-product-notification-notificationcard-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{id:`card-it`,title:`Резервная копия завершена`,description:`Бэкап загружен`,date:`сегодня · 14:32`,onClick:m(),primaryButton:{label:`Открыть`,onClick:m()},secondaryButton:{label:`Скрыть`,onClick:m()},link:{label:`Подробнее`,href:`#`,onClick:m()},actions:[{content:{label:`Прочитано`},onClick:m()},{content:{label:`Удалить`},onClick:m()}],"data-test-id":d.card.root}},y={tags:[`test`,`dev`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по карточке/кнопкам/ссылке/действию и клавиатура (Enter/Space).`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t),i=_(document.body),a=r.getByTestId(d.card.root);await n(`click: card triggers onClick`,async()=>{await h.click(a),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`click: primary button does not bubble to card`,async()=>{await h.click(r.getByTestId(d.card.primaryButton)),p(e.primaryButton?.onClick).toHaveBeenCalledTimes(1),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`click: secondary button does not bubble to card`,async()=>{await h.click(r.getByTestId(d.card.secondaryButton)),p(e.secondaryButton?.onClick).toHaveBeenCalledTimes(1),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`click: link triggers onClick and does not bubble`,async()=>{await h.click(r.getByTestId(d.card.link)),p(e.link?.onClick).toHaveBeenCalledTimes(1),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`click: actions droplist opens and action triggers onClick`,async()=>{await h.click(r.getByTestId(d.card.actions.droplistTrigger));let t=await g(()=>i.getByTestId(`${d.card.actions.droplistAction}-0`));await h.click(t),p(e.actions?.[0]?.onClick).toHaveBeenCalledTimes(1),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Enter on focused card triggers onClick`,async()=>{a.focus(),await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(2)}),await n(`keyboard: Space on focused card triggers onClick`,async()=>{a.focus(),await h.keyboard(` `),p(e.onClick).toHaveBeenCalledTimes(3)}),await n(`keyboard: Enter on focused nested button does not trigger card onClick`,async()=>{r.getByTestId(d.card.primaryButton).focus(),await h.keyboard(`{Enter}`),p(e.primaryButton?.onClick).toHaveBeenCalledTimes(2),p(e.onClick).toHaveBeenCalledTimes(3)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по карточке/кнопкам/ссылке/действию и клавиатура (Enter/Space).</DemoHint>
        <DemoActions align='center'>
          <NotificationCard {...args} />
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
    const root = canvas.getByTestId(TEST_IDS.card.root);
    await step('click: card triggers onClick', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: primary button does not bubble to card', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.card.primaryButton));
      expect(args.primaryButton?.onClick).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: secondary button does not bubble to card', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.card.secondaryButton));
      expect(args.secondaryButton?.onClick).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: link triggers onClick and does not bubble', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.card.link));
      expect(args.link?.onClick).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: actions droplist opens and action triggers onClick', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.card.actions.droplistTrigger));
      const action = await waitFor(() => body.getByTestId(\`\${TEST_IDS.card.actions.droplistAction}-0\`));
      await userEvent.click(action);
      expect(args.actions?.[0]?.onClick).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Enter on focused card triggers onClick', async () => {
      root.focus();
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
    await step('keyboard: Space on focused card triggers onClick', async () => {
      root.focus();
      await userEvent.keyboard(' ');
      expect(args.onClick).toHaveBeenCalledTimes(3);
    });
    await step('keyboard: Enter on focused nested button does not trigger card onClick', async () => {
      canvas.getByTestId(TEST_IDS.card.primaryButton).focus();
      await userEvent.keyboard('{Enter}');
      // Вложенная кнопка активируется (2-й раз), карточка — нет (остаётся 3).
      expect(args.primaryButton?.onClick).toHaveBeenCalledTimes(2);
      expect(args.onClick).toHaveBeenCalledTimes(3);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=NotificationCard.InteractionTest.stories-DJ_xNDnW.js.map