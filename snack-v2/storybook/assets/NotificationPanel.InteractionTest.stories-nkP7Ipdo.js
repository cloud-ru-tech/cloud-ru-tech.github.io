import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{a as u,t as d}from"./src-Bqc-Xdov.js";import{n as f,t as p}from"./src-BBVXco9N.js";import{n as m,t as h}from"./testIds-D6pnOfl0.js";import{n as g,t as _}from"./fixtures-C1owVVZK.js";function v(e){let[t,n]=(0,y.useState)(!1);return(0,b.jsxs)(l,{children:[(0,b.jsxs)(a,{children:[(0,b.jsx)(s,{children:`InteractionTest`}),(0,b.jsx)(o,{children:`Открытие панели триггером, кнопки шапки, меню настроек и chip-фильтр. Закрытие по Escape проверяется в Playwright (keyboard.spec.ts).`}),(0,b.jsx)(i,{align:`center`,children:(0,b.jsx)(u,{"data-test-id":h.drawer.triggerOpen,label:`Open`,view:`outline`,appearance:`neutral`,onClick:()=>n(!0)})})]}),(0,b.jsx)(f,{...e,open:t,onClose:()=>n(!1)})]})}var y,b,x,S,C,w,T,E,D,O;t((()=>{d(),p(),y=e(n(),1),c(),m(),g(),b=r(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Uikit Product/Feedback/Notification/NotificationPanel/Tests/Interaction`,id:`uikit-product-notification-notificationpanel-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Уведомления`,content:_,readAllButton:{label:`Прочитать всё`,onClick:S()},settings:{button:{onClick:S()},actions:[{content:{label:`Настройки`},onClick:S()},{content:{label:`Архив`},onClick:S()}]},segments:{items:[{value:`all`,label:`Все`},{value:`unread`,label:`Непрочитанные`}],value:`all`,onChange:S()},chipToggle:{label:`Только важные`,checked:!1,onChange:S()}},render:e=>(0,b.jsx)(v,{...e})},D={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=T(t),i=T(document.body);await n(`click: trigger opens the panel`,async()=>{await C.click(r.getByTestId(h.drawer.triggerOpen)),await w(()=>x(i.getByTestId(h.panel.title)).toBeVisible())}),await n(`click: readAll button triggers onClick`,async()=>{await C.click(i.getByTestId(h.panel.readAll)),x(e.readAllButton?.onClick).toHaveBeenCalledTimes(1)}),await n(`click: settings droplist opens and action triggers onClick`,async()=>{await C.click(i.getByTestId(h.panel.settings.droplistTrigger));let t=await w(()=>i.getByTestId(`${h.panel.settings.droplistAction}-0`));await C.click(t),x(e.settings?.actions?.[0]?.onClick).toHaveBeenCalledTimes(1)}),await n(`click: chipToggle triggers onChange`,async()=>{await C.click(i.getByTestId(h.panel.chipToggle)),x(e.chipToggle?.onChange).toHaveBeenCalled()})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    // Закрытие по Escape проверяется в Playwright (keyboard.spec.ts): rc-drawer
    // не получает keydown в синтетической среде storybook-test. См. test-environment-pitfalls.md.
  }
}`,...D.parameters?.docs?.source}}},O=[`InteractionTest`]}))();export{D as InteractionTest,O as __namedExportsOrder,E as default};
//# sourceMappingURL=NotificationPanel.InteractionTest.stories-nkP7Ipdo.js.map