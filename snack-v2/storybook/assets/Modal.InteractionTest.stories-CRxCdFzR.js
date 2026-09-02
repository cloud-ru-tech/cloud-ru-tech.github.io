import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BLXw10_m.js";import{a as u,t as d}from"./src-CUvFpUpw.js";import{n as f,o as p,t as m}from"./src-BQXmdw6w.js";import{r as h,t as g}from"./testIds-CcwvHEUc.js";function _({onClose:e,onBackButtonClick:t,mode:n,showBackButton:r}){let[c,d]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(s,{children:`InteractionTest`}),(0,b.jsx)(o,{children:`Открытие Modal, закрытие через overlay, Escape, close- и back-кнопки.`}),(0,b.jsx)(i,{align:`center`,children:(0,b.jsx)(u,{"data-test-id":O,label:`Open modal`,appearance:`neutral`,view:`outline`,onClick:()=>d(!0)})})]})}),(0,b.jsx)(f,{"data-test-id":D,open:c,mode:n,onClose:()=>{e(),d(!1)},onBackButtonClick:r?t:void 0,title:`Modal title`,content:`Modal body content`})]})}async function v(e,t){await C.click(t.getByTestId(O)),await w(()=>{x(T(document.body).getByTestId(E.body)).toBeVisible()}),e.onClose.mockClear(),e.onBackButtonClick.mockClear()}var y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{d(),m(),y=e(n(),1),c(),h(),b=r(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E=g.modal,D=E.root,O=E.triggerOpen,k={title:`Snack/Overlays/Modal/Modal/Tests/Interaction`,id:`components-modal-modal-tests-interaction`,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onClose:S(),onBackButtonClick:S(),mode:p.Regular,showBackButton:!0},render:e=>(0,b.jsx)(_,{...e})},A={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=T(t);await n(`click: overlay click in regular mode triggers onClose`,async()=>{await v(e,r);let t=T(document.body).getByTestId(E.overlay);await C.click(t),await w(()=>{x(e.onClose).toHaveBeenCalledTimes(1)})}),await n(`click: close button triggers onClose`,async()=>{await v(e,r);let t=T(document.body).getByTestId(E.closeButton);await C.click(t),x(e.onClose).toHaveBeenCalledTimes(1)}),await n(`keyboard: Escape in regular mode triggers onClose`,async()=>{await v(e,r),await C.keyboard(`{Escape}`),await w(()=>{x(e.onClose).toHaveBeenCalledTimes(1)})}),await n(`click: back button triggers onBackButtonClick`,async()=>{await v(e,r);let t=T(document.body).getByTestId(E.backButton);await C.click(t),x(e.onBackButtonClick).toHaveBeenCalledTimes(1);let n=T(document.body).getByTestId(E.closeButton);await C.click(n)})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: overlay click in regular mode triggers onClose', async () => {
      await openModal(args, canvas);
      const overlay = within(document.body).getByTestId(M.overlay);
      await userEvent.click(overlay);
      await waitFor(() => {
        expect(args.onClose).toHaveBeenCalledTimes(1);
      });
    });
    await step('click: close button triggers onClose', async () => {
      await openModal(args, canvas);
      const closeButton = within(document.body).getByTestId(M.closeButton);
      await userEvent.click(closeButton);
      expect(args.onClose).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Escape in regular mode triggers onClose', async () => {
      await openModal(args, canvas);
      await userEvent.keyboard('{Escape}');
      await waitFor(() => {
        expect(args.onClose).toHaveBeenCalledTimes(1);
      });
    });
    await step('click: back button triggers onBackButtonClick', async () => {
      await openModal(args, canvas);
      const backButton = within(document.body).getByTestId(M.backButton);
      await userEvent.click(backButton);
      expect(args.onBackButtonClick).toHaveBeenCalledTimes(1);
      // Close modal for clean state
      const closeButton = within(document.body).getByTestId(M.closeButton);
      await userEvent.click(closeButton);
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`InteractionTest`]}))();export{A as InteractionTest,j as __namedExportsOrder,k as default};
//# sourceMappingURL=Modal.InteractionTest.stories-CRxCdFzR.js.map