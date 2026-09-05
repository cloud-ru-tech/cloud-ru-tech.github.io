import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C2bZDhP2.js";import{c,i as l,t as u,u as d}from"./src-iqxZR4KC.js";import{n as f,t as p}from"./testIds-Bpdng-EX.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{u(),o(),f(),m=t(),{expect:h,fn:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b=[(0,m.jsx)(c,{id:`s1`,title:`Событие 1`,description:`c`,date:`today`,appearance:d.Default},`1`),(0,m.jsx)(c,{id:`s2`,title:`Событие 2`,description:`c`,date:`today`,appearance:d.Default},`2`),(0,m.jsx)(c,{id:`s3`,title:`Событие 3`,description:`c`,date:`today`,appearance:d.Default},`3`)],x={title:`Uikit Product/Feedback/Notification/NotificationCardStack/Tests/Interaction`,id:`uikit-product-notification-notificationcardstack-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`cluster`,onOpenChanged:g(),children:b,actions:[{content:{label:`Прочитать всё`},onClick:g()},{content:{label:`Скрыть`},onClick:g()}],"data-test-id":p.panel.cardStack.wrapper}},S={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Раскрытие стопки по заголовку/кнопке и меню действий.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(l,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t),i=y(document.body);await n(`click: title toggles open state`,async()=>{await _.click(r.getByTestId(p.panel.cardStack.title)),h(e.onOpenChanged).toHaveBeenCalledWith(!0)}),await n(`click: open button toggles back`,async()=>{await _.click(r.getByTestId(p.panel.cardStack.openButton)),h(e.onOpenChanged).toHaveBeenCalledWith(!1)}),await n(`click: actions droplist opens and action triggers onClick`,async()=>{await _.click(r.getByTestId(p.panel.cardStack.actions.droplistTrigger));let t=await v(()=>i.getByTestId(`${p.panel.cardStack.actions.droplistAction}-0`));await _.click(t),h(e.actions?.[0]?.onClick).toHaveBeenCalledTimes(1)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Раскрытие стопки по заголовку/кнопке и меню действий.</DemoHint>
        <DemoActions align='center'>
          <NotificationCardStack {...args} />
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
    await step('click: title toggles open state', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.panel.cardStack.title));
      expect(args.onOpenChanged).toHaveBeenCalledWith(true);
    });
    await step('click: open button toggles back', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.panel.cardStack.openButton));
      expect(args.onOpenChanged).toHaveBeenCalledWith(false);
    });
    await step('click: actions droplist opens and action triggers onClick', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.panel.cardStack.actions.droplistTrigger));
      const action = await waitFor(() => body.getByTestId(\`\${TEST_IDS.panel.cardStack.actions.droplistAction}-0\`));
      await userEvent.click(action);
      expect(args.actions?.[0]?.onClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=NotificationCardStack.InteractionTest.stories-Bvqu9D2n.js.map