import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{a as c,s as l,t as u,u as d}from"./src-Bq_MVxXk.js";import{a as f,c as p}from"./src-CCyS43DU.js";import{a as m,i as h,r as g,t as _}from"./testIds-CZF9p-kA.js";import{n as v,t as y}from"./src-DLJhkVqW.js";var b,x,S,C,w,T,E,D;e((()=>{u(),y(),o(),h(),g(),b=t(),{expect:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Snack/Overlays/Popover/Tests/Interaction`,id:`components-popover-tests-interaction`,component:v,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{trigger:p.Click,placement:f.Top,outsideClick:!0,closeOnEscapeKey:!0,"data-test-id":_.root},render:e=>(0,b.jsx)(s,{children:(0,b.jsxs)(r,{children:[(0,b.jsx)(a,{children:`InteractionTest`}),(0,b.jsx)(i,{children:`Открытие Popover по клику и закрытие по клику снаружи.`}),(0,b.jsx)(n,{align:`center`,children:(0,b.jsx)(v,{...e,content:(0,b.jsx)(`div`,{className:m.popoverContent,"data-test-id":_.content,children:`Popover content`}),children:(0,b.jsx)(c,{"data-test-id":_.triggerOpen,label:`Open popover`,view:d.Outline,appearance:l.Neutral})})})]})})},E={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=w(e).getByTestId(_.triggerOpen);await t(`click: opens content`,async()=>{await S.click(n),await C(()=>{x(w(document.body).getByTestId(_.content)).toBeVisible()})}),await t(`outside click: closes content`,async()=>{await S.click(document.body),await C(()=>{x(w(document.body).queryByTestId(_.content)).toBeNull()})})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId(TEST_IDS.triggerOpen);
    await step('click: opens content', async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(within(document.body).getByTestId(TEST_IDS.content)).toBeVisible();
      });
    });
    await step('outside click: closes content', async () => {
      await userEvent.click(document.body);
      await waitFor(() => {
        expect(within(document.body).queryByTestId(TEST_IDS.content)).toBeNull();
      });
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`InteractionTest`]}))();export{E as InteractionTest,D as __namedExportsOrder,T as default};
//# sourceMappingURL=Popover.InteractionTest.stories-XaX0rB2g.js.map