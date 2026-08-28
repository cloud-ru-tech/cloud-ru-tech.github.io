import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-CSZ3Qkp5.js";import{a as u,t as d}from"./src-CNfhYx-4.js";import{n as f,t as p}from"./src-BMVTj4U4.js";import{n as m,t as h}from"./testIds-BtJSe1cq.js";function g({initialOpen:e=!1}){let[t,n]=(0,_.useState)(e);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{children:`Controlled`}),(0,v.jsx)(o,{children:`Controlled Drawer с парент-стейтом — статус синхронизируется с open/close.`}),(0,v.jsxs)(i,{align:`center`,children:[(0,v.jsx)(`div`,{"data-test-id":h.drawer.parentState,children:t?`open`:`closed`}),(0,v.jsx)(u,{"data-test-id":h.drawer.triggerOpen,label:`Open drawer`,appearance:`neutral`,view:`outline`,onClick:()=>n(!0)})]})]})}),(0,v.jsx)(f,{"data-test-id":h.drawer.root,open:t,position:`right`,onClose:()=>n(!1),title:`Drawer title`,content:`Drawer body content`})]})}var _,v,y,b,x,S,C,w,T;t((()=>{d(),p(),_=e(n(),1),c(),m(),v=r(),{expect:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Overlays/Drawer/Drawer/Tests/Controlled`,id:`components-drawer-drawer-tests-controlled`,parameters:{layout:`fullscreen`,controls:{disable:!0}}},w={tags:[`test`,`dev`],render:()=>(0,v.jsx)(g,{}),play:async({canvasElement:e,step:t})=>{let n=S(e),r=()=>n.getByTestId(h.drawer.parentState).textContent;await t(`initial: parent state is closed`,async()=>{y(r()).toBe(`closed`)}),await t(`click: trigger opens drawer and updates parent state`,async()=>{await b.click(n.getByTestId(h.drawer.triggerOpen)),await x(()=>y(r()).toBe(`open`)),await x(()=>y(n.getByTestId(h.drawer.root)).toBeVisible())}),await t(`click: close button closes drawer and updates parent state`,async()=>{let e=await x(()=>n.getByTestId(h.closeButton));await b.click(e),await x(()=>y(r()).toBe(`closed`),{timeout:5e3})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <ControlledRender />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const getState = () => canvas.getByTestId(TEST_IDS.drawer.parentState).textContent;
    await step('initial: parent state is closed', async () => {
      expect(getState()).toBe('closed');
    });
    await step('click: trigger opens drawer and updates parent state', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.drawer.triggerOpen));
      await waitFor(() => expect(getState()).toBe('open'));
      await waitFor(() => expect(canvas.getByTestId(TEST_IDS.drawer.root)).toBeVisible());
    });
    await step('click: close button closes drawer and updates parent state', async () => {
      const closeBtn = await waitFor(() => canvas.getByTestId(TEST_IDS.closeButton));
      await userEvent.click(closeBtn);
      await waitFor(() => expect(getState()).toBe('closed'), {
        timeout: 5000
      });
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`Controlled`]}))();export{w as Controlled,T as __namedExportsOrder,C as default};
//# sourceMappingURL=Drawer.Controlled.stories-CIGmopud.js.map