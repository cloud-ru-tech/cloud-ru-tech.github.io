import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-CSZ3Qkp5.js";import{a as u,t as d}from"./src-CNfhYx-4.js";import{n as f,t as p}from"./src-DYmU2ZTy.js";import{r as m,t as h}from"./testIds-ZWDyzsdq.js";function g(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{children:`Controlled`}),(0,v.jsx)(o,{children:`Controlled Modal с парент-стейтом — статус синхронизируется с open/close.`}),(0,v.jsxs)(i,{align:`center`,children:[(0,v.jsx)(`div`,{"data-test-id":E,children:e?`open`:`closed`}),(0,v.jsx)(u,{"data-test-id":T,label:`Open modal`,appearance:`neutral`,view:`outline`,onClick:()=>t(!0)})]})]})}),(0,v.jsx)(f,{"data-test-id":w,open:e,onClose:()=>t(!1),title:`Modal title`,content:`Modal body content`})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{d(),p(),_=e(n(),1),c(),m(),v=r(),{expect:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=h.modal,w=C.root,T=C.triggerOpen,E=`modal-parent-state`,D={title:`Snack/Overlays/Modal/Modal/Tests/Controlled`,id:`components-modal-modal-tests-controlled`,parameters:{layout:`fullscreen`,controls:{disable:!0}}},O={tags:[`test`,`dev`],render:()=>(0,v.jsx)(g,{}),play:async({canvasElement:e,step:t})=>{let n=S(e),r=()=>n.getByTestId(E).textContent;await t(`initial: parent state is closed`,async()=>{y(r()).toBe(`closed`)}),await t(`click: trigger opens modal and updates parent state`,async()=>{await b.click(n.getByTestId(T)),await x(()=>y(r()).toBe(`open`)),y(S(document.body).getByTestId(C.body)).toBeVisible()}),await t(`click: close button closes modal and updates parent state`,async()=>{let e=S(document.body).getByTestId(C.closeButton);await b.click(e),await x(()=>y(r()).toBe(`closed`),{timeout:5e3})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <ControlledRender />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const getState = () => canvas.getByTestId(PARENT_STATE_TEST_ID).textContent;
    await step('initial: parent state is closed', async () => {
      expect(getState()).toBe('closed');
    });
    await step('click: trigger opens modal and updates parent state', async () => {
      await userEvent.click(canvas.getByTestId(MODAL_TRIGGER_TEST_ID));
      await waitFor(() => expect(getState()).toBe('open'));
      expect(within(document.body).getByTestId(M.body)).toBeVisible();
    });
    await step('click: close button closes modal and updates parent state', async () => {
      const closeButton = within(document.body).getByTestId(M.closeButton);
      await userEvent.click(closeButton);
      await waitFor(() => expect(getState()).toBe('closed'), {
        timeout: 5000
      });
    });
  }
}`,...O.parameters?.docs?.source}}},k=[`Controlled`]}))();export{O as Controlled,k as __namedExportsOrder,D as default};
//# sourceMappingURL=Modal.Controlled.stories-9_F3r3yM.js.map