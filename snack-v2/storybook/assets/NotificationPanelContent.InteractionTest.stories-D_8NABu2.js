import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BiKgHgfb.js";import{i as c,t as l}from"./src-6_pdlW3n.js";import{n as u,t as d}from"./testIds-CGfG1Q0e.js";import{n as f,t as p}from"./fixtures-CsDK09Ho.js";var m,h,g,_,v,y,b,x,S;e((()=>{l(),o(),u(),f(),m=t(),{expect:h,fn:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Feedback/Notification/NotificationPanelContent/Tests/Interaction`,id:`uikit-product-notification-notificationpanelcontent-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Уведомления`,content:p,readAllButton:{label:`Прочитать всё`,onClick:g()},settings:{button:{onClick:g()},actions:[{content:{label:`Настройки`},onClick:g()},{content:{label:`Архив`},onClick:g()}]},segments:{items:[{value:`all`,label:`Все`},{value:`unread`,label:`Непрочитанные`}],value:`all`,onChange:g()},chipToggle:{label:`Только важные`,checked:!1,onChange:g()},"data-test-id":d.panel.root}},x={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`wide`,children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Кнопки шапки/футера, меню настроек и chip-фильтр.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t),i=y(document.body);await n(`click: readAll button triggers onClick`,async()=>{await _.click(r.getByTestId(d.panel.readAll)),h(e.readAllButton?.onClick).toHaveBeenCalledTimes(1)}),await n(`click: settings droplist opens and action triggers onClick`,async()=>{await _.click(r.getByTestId(d.panel.settings.droplistTrigger));let t=await v(()=>i.getByTestId(`${d.panel.settings.droplistAction}-0`));await _.click(t),h(e.settings?.actions?.[0]?.onClick).toHaveBeenCalledTimes(1)}),await n(`click: chipToggle triggers onChange`,async()=>{await _.click(r.getByTestId(d.panel.chipToggle)),h(e.chipToggle?.onChange).toHaveBeenCalled()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Кнопки шапки/футера, меню настроек и chip-фильтр.</DemoHint>
        <DemoActions align='center'>
          <NotificationPanelContent {...args} />
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
    await step('click: readAll button triggers onClick', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.panel.readAll));
      expect(args.readAllButton?.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: settings droplist opens and action triggers onClick', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.panel.settings.droplistTrigger));
      const action = await waitFor(() => body.getByTestId(\`\${TEST_IDS.panel.settings.droplistAction}-0\`));
      await userEvent.click(action);
      expect(args.settings?.actions?.[0]?.onClick).toHaveBeenCalledTimes(1);
    });
    await step('click: chipToggle triggers onChange', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.panel.chipToggle));
      expect(args.chipToggle?.onChange).toHaveBeenCalled();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=NotificationPanelContent.InteractionTest.stories-D_8NABu2.js.map