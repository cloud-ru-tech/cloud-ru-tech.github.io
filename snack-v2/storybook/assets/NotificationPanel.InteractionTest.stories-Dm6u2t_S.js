import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c,u as l}from"./iframe-DocvOVpo.js";import{a as u,t as d}from"./src-ClTMeG4r.js";import{c as f,t as p}from"./src-Bw-K1K5h.js";import{n as m,t as h}from"./src-FED84sZS2.js";import{n as g,t as _}from"./testIds-B37OVeRs.js";import{n as v,t as y}from"./fixtures-CmZ9G8DS.js";function b(e){let[t,n]=(0,x.useState)(!1),[r,c]=(0,x.useState)(!1);return(0,S.jsxs)(a,{children:[(0,S.jsxs)(s,{children:[(0,S.jsx)(o,{children:`InteractionTest`}),(0,S.jsx)(i,{children:`Открытие панели триггером, кнопки шапки, меню настроек, сегменты и chip-фильтр. Кнопка «Загрузка» внутри панели включает loading: сегменты остаются доступными, скелетоны, readAll и chip блокируются. Закрытие по Escape проверяется в Playwright (keyboard.spec.ts).`}),(0,S.jsx)(l,{align:`center`,children:(0,S.jsx)(u,{"data-test-id":_.drawer.triggerOpen,label:`Open`,view:`outline`,appearance:`neutral`,onClick:()=>n(!0)})})]}),(0,S.jsx)(m,{...e,open:t,onClose:()=>n(!1),loading:r,content:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{"data-test-id":_.drawer.triggerLoading,label:`Загрузка`,view:`outline`,appearance:`neutral`,onClick:()=>c(!0)}),e.content]})})]})}var x,S,C,w,T,E,D,O,k,A,j;t((()=>{d(),p(),h(),x=e(n(),1),c(),g(),v(),S=r(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={all:`all`,unread:`unread`,system:`system`},k={title:`Uikit Product/Feedback/Notification/NotificationPanel/Tests/Interaction`,id:`uikit-product-notification-notificationpanel-tests-interaction`,component:m,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Уведомления`,content:y,readAllButton:{label:`Прочитать всё`,onClick:w()},settings:{button:{onClick:w()},actions:[{content:{label:`Настройки`},onClick:w()},{content:{label:`Архив`},onClick:w()}]},segments:{items:[{value:O.all,label:`Все`},{value:O.unread,label:`Непрочитанные`},{value:O.system,label:`Системные`,disabled:!0}],value:O.all,onChange:w()},chipToggle:{label:`Только важные`,checked:!1,onChange:w()}},render:e=>(0,S.jsx)(b,{...e})},A={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=D(t),i=D(document.body);await n(`click: trigger opens the panel`,async()=>{await T.click(r.getByTestId(_.drawer.triggerOpen)),await E(()=>C(i.getByTestId(_.panel.title)).toBeVisible())}),await n(`click: readAll button triggers onClick`,async()=>{await T.click(i.getByTestId(_.panel.readAll)),C(e.readAllButton?.onClick).toHaveBeenCalledTimes(1)}),await n(`click: settings droplist opens and action triggers onClick`,async()=>{await T.click(i.getByTestId(_.panel.settings.droplistTrigger));let t=await E(()=>i.getByTestId(`${_.panel.settings.droplistAction}-0`));await T.click(t),C(e.settings?.actions?.[0]?.onClick).toHaveBeenCalledTimes(1)}),await n(`click: chipToggle triggers onChange`,async()=>{await T.click(i.getByTestId(_.panel.chipToggle)),C(e.chipToggle?.onChange).toHaveBeenCalled()});let a=e.segments?.onChange,o=e.readAllButton?.onClick,s=e.chipToggle?.onChange,c=i.getByTestId(f(O.all)),l=i.getByTestId(f(O.unread)),u=i.getByTestId(f(O.system));await n(`click: enabled segment triggers onChange`,async()=>{await C(c).toHaveAttribute(`aria-checked`,`true`),await C(c).not.toBeDisabled(),await C(c).not.toHaveAttribute(`data-disabled`),await T.click(l),C(a).toHaveBeenCalledTimes(1),C(a).toHaveBeenCalledWith(O.unread)}),await n(`disabled segment stays unavailable`,async()=>{await C(u).toBeDisabled(),await C(u).toHaveAttribute(`data-disabled`,`true`),await T.click(u,{pointerEventsCheck:0}),C(a).not.toHaveBeenCalledWith(O.system),C(a).toHaveBeenCalledTimes(1)}),await n(`loading: segments stay enabled, skeletons and filters stay blocked`,async()=>{let e=o.mock.calls.length,t=s.mock.calls.length;await T.click(i.getByTestId(_.drawer.triggerLoading));let n=await E(()=>i.getAllByTestId(_.card.skeleton));C(n).toHaveLength(2);let r=n[0]?.parentElement;if(!r)throw Error(`Тело панели не найдено`);C(r).toHaveAttribute(`aria-busy`,`true`),await C(c).toHaveAttribute(`aria-checked`,`true`),await C(c).not.toBeDisabled(),await C(c).not.toHaveAttribute(`data-disabled`),await C(l).not.toBeDisabled(),await C(l).not.toHaveAttribute(`data-disabled`),await T.click(l),C(a).toHaveBeenCalledTimes(2),C(a).toHaveBeenLastCalledWith(O.unread),await C(u).toBeDisabled(),await C(u).toHaveAttribute(`data-disabled`,`true`),await T.click(u,{pointerEventsCheck:0}),C(a).not.toHaveBeenCalledWith(O.system);let d=i.getByTestId(_.panel.readAll);await C(d).toBeDisabled(),await T.click(d,{pointerEventsCheck:0}),C(o).toHaveBeenCalledTimes(e);let f=i.getByTestId(_.panel.chipToggle);await C(f).toHaveAttribute(`data-disabled`,`true`),await T.click(f,{pointerEventsCheck:0}),C(s).toHaveBeenCalledTimes(t)})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('click: trigger opens the panel', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.drawer.triggerOpen));
      await waitFor(() => expect(body.getByTestId(TEST_IDS.panel.title)).toBeVisible());
    });
    await step('click: readAll button triggers onClick', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.panel.readAll));
      expect(args.readAllButton?.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: settings droplist opens and action triggers onClick', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.panel.settings.droplistTrigger));
      const action = await waitFor(() => body.getByTestId(\`\${TEST_IDS.panel.settings.droplistAction}-0\`));
      await userEvent.click(action);
      expect(args.settings?.actions?.[0]?.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: chipToggle triggers onChange', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.panel.chipToggle));
      expect(args.chipToggle?.onChange).toHaveBeenCalled();
    });
    const onSegmentChange = args.segments?.onChange as ReturnType<typeof fn>;
    const onReadAllClick = args.readAllButton?.onClick as ReturnType<typeof fn>;
    const onChipChange = args.chipToggle?.onChange as ReturnType<typeof fn>;
    const selected = body.getByTestId(segmentTestId(SEGMENT.all));
    const unread = body.getByTestId(segmentTestId(SEGMENT.unread));
    const disabledSegment = body.getByTestId(segmentTestId(SEGMENT.system));
    await step('click: enabled segment triggers onChange', async () => {
      await expect(selected).toHaveAttribute('aria-checked', 'true');
      await expect(selected).not.toBeDisabled();
      await expect(selected).not.toHaveAttribute('data-disabled');
      await userEvent.click(unread);
      expect(onSegmentChange).toHaveBeenCalledTimes(1);
      expect(onSegmentChange).toHaveBeenCalledWith(SEGMENT.unread);
    });
    await step('disabled segment stays unavailable', async () => {
      await expect(disabledSegment).toBeDisabled();
      await expect(disabledSegment).toHaveAttribute('data-disabled', 'true');
      await userEvent.click(disabledSegment, {
        pointerEventsCheck: 0
      });
      expect(onSegmentChange).not.toHaveBeenCalledWith(SEGMENT.system);
      expect(onSegmentChange).toHaveBeenCalledTimes(1);
    });
    await step('loading: segments stay enabled, skeletons and filters stay blocked', async () => {
      const readAllCalls = onReadAllClick.mock.calls.length;
      const chipCalls = onChipChange.mock.calls.length;
      await userEvent.click(body.getByTestId(TEST_IDS.drawer.triggerLoading));
      const skeletons = await waitFor(() => body.getAllByTestId(TEST_IDS.card.skeleton));
      expect(skeletons).toHaveLength(2);
      const panelBody = skeletons[0]?.parentElement;
      if (!panelBody) {
        throw new Error('Тело панели не найдено');
      }
      expect(panelBody).toHaveAttribute('aria-busy', 'true');
      await expect(selected).toHaveAttribute('aria-checked', 'true');
      await expect(selected).not.toBeDisabled();
      await expect(selected).not.toHaveAttribute('data-disabled');
      await expect(unread).not.toBeDisabled();
      await expect(unread).not.toHaveAttribute('data-disabled');
      await userEvent.click(unread);
      expect(onSegmentChange).toHaveBeenCalledTimes(2);
      expect(onSegmentChange).toHaveBeenLastCalledWith(SEGMENT.unread);
      await expect(disabledSegment).toBeDisabled();
      await expect(disabledSegment).toHaveAttribute('data-disabled', 'true');
      await userEvent.click(disabledSegment, {
        pointerEventsCheck: 0
      });
      expect(onSegmentChange).not.toHaveBeenCalledWith(SEGMENT.system);
      const readAll = body.getByTestId(TEST_IDS.panel.readAll);
      await expect(readAll).toBeDisabled();
      await userEvent.click(readAll, {
        pointerEventsCheck: 0
      });
      expect(onReadAllClick).toHaveBeenCalledTimes(readAllCalls);
      const chip = body.getByTestId(TEST_IDS.panel.chipToggle);
      await expect(chip).toHaveAttribute('data-disabled', 'true');
      await userEvent.click(chip, {
        pointerEventsCheck: 0
      });
      expect(onChipChange).toHaveBeenCalledTimes(chipCalls);
    });
    // Закрытие по Escape проверяется в Playwright (keyboard.spec.ts): rc-drawer
    // не получает keydown в синтетической среде storybook-test. См. test-environment-pitfalls.md.
  }
}`,...A.parameters?.docs?.source}}},j=[`InteractionTest`]}))();export{A as InteractionTest,j as __namedExportsOrder,k as default};
//# sourceMappingURL=NotificationPanel.InteractionTest.stories-Dm6u2t_S.js.map