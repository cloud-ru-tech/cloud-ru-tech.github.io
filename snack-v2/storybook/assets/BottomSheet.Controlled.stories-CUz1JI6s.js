import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{B as i,H as a,c as o,d as s,l as c,m as l,t as u,u as d}from"./iframe-BRJzdrhE.js";import{a as f,s as p,t as m,u as h}from"./src-CqxI6u0w.js";import{b as g}from"./src-Boyf_SWf.js";import{n as _,t as v}from"./src-DNnWl8cC.js";import{n as y,t as b}from"./testIds-Dt9cgXKV.js";function x(e){let[t,n]=(0,S.useState)(!1),r=a();return(0,C.jsxs)(d,{children:[(0,C.jsxs)(s,{children:[(0,C.jsx)(l,{children:`Controlled`}),(0,C.jsxs)(c,{children:[`Backdrop-click вызывает `,(0,C.jsx)(`code`,{children:`onClose`}),`, но parent не закрывает sheet — проверяем, что закрытие в controlled-режиме под полным контролем потребителя.`]}),(0,C.jsx)(o,{align:`center`,children:(0,C.jsx)(f,{"data-test-id":b.triggerOpen,label:`Open`,view:h.Outline,appearance:p.Neutral,onClick:()=>n(!0)})})]}),(0,C.jsx)(_,{open:t,onClose:()=>{e.onClose()},container:r.current||void 0,title:`Controlled mode`,content:(0,C.jsx)(`p`,{children:`Sheet остаётся открытым после backdrop-click.`})})]})}var S,C,w,T,E,D,O,k,A,j;t((()=>{v(),m(),i(),S=e(n(),1),u(),y(),C=r(),{expect:w,fn:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Snack/Overlays/BottomSheet/Tests/Controlled`,id:`components-bottomsheet-tests-controlled`,globals:{density:`comfort`},parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onClose:T()}},A={tags:[`test`,`dev`],render:e=>(0,C.jsx)(x,{...e}),play:async({args:e,canvasElement:t,step:n})=>{let r=O(t),i=O(document.body);await n(`opens via trigger`,async()=>{let e=r.getByTestId(b.triggerOpen);await E.click(e),await D(()=>w(i.getByTestId(g.title)).toBeVisible())}),await n(`backdrop click calls onClose but does not close the sheet (controlled)`,async()=>{let t=i.getByTestId(g.backdrop);await E.click(t),w(e.onClose).toHaveBeenCalledTimes(1),await D(()=>w(i.getByTestId(g.title)).toBeVisible())})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <ControlledRender {...args} />,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // sheet рендерится в portal вне canvasElement — адресуем по document.body через getByTestId.
    const portal = within(document.body);
    await step('opens via trigger', async () => {
      const trigger = canvas.getByTestId(TEST_IDS.triggerOpen);
      await userEvent.click(trigger);
      await waitFor(() => expect(portal.getByTestId(PUBLIC_TEST_IDS.title)).toBeVisible());
    });
    await step('backdrop click calls onClose but does not close the sheet (controlled)', async () => {
      const backdrop = portal.getByTestId(PUBLIC_TEST_IDS.backdrop);
      await userEvent.click(backdrop);
      expect(args.onClose).toHaveBeenCalledTimes(1);
      await waitFor(() => expect(portal.getByTestId(PUBLIC_TEST_IDS.title)).toBeVisible());
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`Controlled`]}))();export{A as Controlled,j as __namedExportsOrder,k as default};
//# sourceMappingURL=BottomSheet.Controlled.stories-CUz1JI6s.js.map