import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BiKgHgfb.js";import{a as u,t as d}from"./src-Bm0LqAUs.js";import{i as f,n as p,t as m}from"./src-6_pdlW3n.js";import{n as h,t as g}from"./testIds-CGfG1Q0e.js";import{n as _,t as v}from"./fixtures-CsDK09Ho.js";function y(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(l,{children:[(0,x.jsxs)(a,{children:[(0,x.jsx)(s,{children:`InteractionTest`}),(0,x.jsx)(o,{children:`Открытие drawer триггером; закрытие по Escape проверяется в Playwright (keyboard.spec.ts).`}),(0,x.jsx)(i,{align:`center`,children:(0,x.jsx)(u,{"data-test-id":g.drawer.triggerOpen,label:`Open`,view:`outline`,appearance:`neutral`,onClick:()=>t(!0)})})]}),(0,x.jsx)(p,{open:e,onClose:()=>t(!1),content:(0,x.jsx)(f,{title:`Уведомления`,content:v,"data-test-id":g.panel.root})})]})}var b,x,S,C,w,T,E,D,O;t((()=>{d(),m(),b=e(n(),1),c(),_(),h(),x=r(),{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Uikit Product/Feedback/Notification/NotificationPanel/Tests/Interaction`,id:`uikit-product-notification-notificationpanel-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,x.jsx)(y,{})},D={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=T(e),r=T(document.body);await t(`click: trigger opens drawer`,async()=>{await C.click(n.getByTestId(g.drawer.triggerOpen)),await w(()=>S(r.getByTestId(g.panel.title)).toBeVisible())})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('click: trigger opens drawer', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.drawer.triggerOpen));
      await waitFor(() => expect(body.getByTestId(TEST_IDS.panel.title)).toBeVisible());
    });
    // Закрытие по Escape проверяется в Playwright (keyboard.spec.ts): rc-drawer
    // не получает keydown в синтетической среде storybook-test, хотя в реальном
    // браузере Escape закрывает drawer. См. test-environment-pitfalls.md.
  }
}`,...D.parameters?.docs?.source}}},O=[`InteractionTest`]}))();export{D as InteractionTest,O as __namedExportsOrder,E as default};
//# sourceMappingURL=NotificationPanel.InteractionTest.stories-Cpa9c8R9.js.map