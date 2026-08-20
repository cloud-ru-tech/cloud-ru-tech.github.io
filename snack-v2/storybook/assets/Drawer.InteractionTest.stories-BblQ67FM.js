import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Bd5xtg2w.js";import{a as u,t as d}from"./src-DtM8jTZH.js";import{n as f,t as p}from"./src-B_PvUstZ.js";import{n as m,t as h}from"./testIds-Sbaoz6vg.js";function g({onClose:e}){let[t,n]=(0,_.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{children:`InteractionTest`}),(0,v.jsx)(o,{children:`Открытие Drawer по триггеру и закрытие через close-кнопку.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(u,{"data-test-id":h.drawer.triggerOpen,label:`Open drawer`,appearance:`neutral`,view:`outline`,onClick:()=>n(!0)})})]})}),(0,v.jsx)(f,{"data-test-id":h.drawer.root,open:t,position:`right`,onClose:()=>{e(),n(!1)},title:`Drawer title`,content:`Drawer body content`})]})}var _,v,y,b,x,S,C,w,T,E;t((()=>{d(),p(),_=e(n(),1),c(),m(),v=r(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Snack/Overlays/Drawer/Drawer/Tests/Interaction`,id:`components-drawer-drawer-tests-interaction`,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onClose:b()},render:e=>(0,v.jsx)(g,{...e})},T={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=C(t),i=r.getByTestId(h.drawer.triggerOpen);await n(`click: trigger opens drawer`,async()=>{await x.click(i),await S(()=>y(r.getByTestId(h.drawer.root)).toBeVisible())}),await n(`click: close button fires onClose`,async()=>{let t=await S(()=>r.getByTestId(h.closeButton));await x.click(t),await S(()=>y(e.onClose).toHaveBeenCalled())})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // Drawer renders into a portal scoped by PortalContextProvider in preview.tsx,
    // so close-button is inside canvasElement (story wrapper as portal root).
    const trigger = canvas.getByTestId(TEST_IDS.drawer.triggerOpen);
    await step('click: trigger opens drawer', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(canvas.getByTestId(TEST_IDS.drawer.root)).toBeVisible());
    });
    await step('click: close button fires onClose', async () => {
      const closeBtn = await waitFor(() => canvas.getByTestId(TEST_IDS.closeButton));
      await userEvent.click(closeBtn);
      await waitFor(() => expect(args.onClose).toHaveBeenCalled());
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`InteractionTest`]}))();export{T as InteractionTest,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Drawer.InteractionTest.stories-BblQ67FM.js.map