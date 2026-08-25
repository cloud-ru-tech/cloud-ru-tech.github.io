import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{B as i,H as a,c as o,d as s,m as c,t as l,u}from"./iframe-BiKgHgfb.js";import{a as d,s as f,t as p,u as m}from"./src-Bm0LqAUs.js";import{b as h}from"./src-5RpYZrAS.js";import{n as g,t as _}from"./src-DRcIVvRT.js";import{n as v,t as y}from"./testIds-Dt9cgXKV.js";function b(e){let[t,n]=(0,x.useState)(!1),r=a();return(0,S.jsxs)(u,{children:[(0,S.jsxs)(s,{children:[(0,S.jsx)(c,{children:`Interaction test`}),(0,S.jsx)(o,{align:`center`,children:(0,S.jsx)(d,{"data-test-id":y.triggerOpen,label:`Open`,view:m.Outline,appearance:f.Neutral,onClick:()=>n(!0)})})]}),(0,S.jsx)(g,{open:t,onClose:()=>{e.onClose(),n(!1)},container:r.current||void 0,title:`Interaction test`,onBackButtonClick:e.onBackButtonClick,content:(0,S.jsx)(`p`,{children:`Test content`}),approveButton:{label:`Подтвердить`,onClick:e.onApprove},cancelButton:{label:`Отмена`,onClick:e.onCancel}})]})}var x,S,C,w,T,E,D,O,k,A;t((()=>{_(),p(),i(),x=e(n(),1),l(),v(),S=r(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Snack/Overlays/BottomSheet/Tests/Interaction`,id:`components-bottomsheet-tests-interaction`,globals:{density:`comfort`},parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onClose:w(),onBackButtonClick:w(),onApprove:w(),onCancel:w()}},k={tags:[`test`,`dev`],render:e=>(0,S.jsx)(b,{...e}),play:async({args:e,canvasElement:t,step:n})=>{let r=D(t),i=D(document.body);await n(`opens via trigger`,async()=>{let e=r.getByTestId(y.triggerOpen);await T.click(e),await E(()=>C(i.getByTestId(h.title)).toBeVisible())}),await n(`click on back-button calls onBackButtonClick`,async()=>{let t=i.getByTestId(h.backButton);await T.click(t),C(e.onBackButtonClick).toHaveBeenCalledTimes(1)}),await n(`footer buttons fire their onClick`,async()=>{await T.click(i.getByTestId(h.footerApprove)),C(e.onApprove).toHaveBeenCalledTimes(1),await T.click(i.getByTestId(h.footerCancel)),C(e.onCancel).toHaveBeenCalledTimes(1)})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <InteractionRender {...args} />,
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
    await step('click on back-button calls onBackButtonClick', async () => {
      const backBtn = portal.getByTestId(PUBLIC_TEST_IDS.backButton);
      await userEvent.click(backBtn);
      expect(args.onBackButtonClick).toHaveBeenCalledTimes(1);
    });
    await step('footer buttons fire their onClick', async () => {
      await userEvent.click(portal.getByTestId(PUBLIC_TEST_IDS.footerApprove));
      expect(args.onApprove).toHaveBeenCalledTimes(1);
      await userEvent.click(portal.getByTestId(PUBLIC_TEST_IDS.footerCancel));
      expect(args.onCancel).toHaveBeenCalledTimes(1);
    });
  }
}`,...k.parameters?.docs?.source}}},A=[`InteractionTest`]}))();export{k as InteractionTest,A as __namedExportsOrder,O as default};
//# sourceMappingURL=BottomSheet.InteractionTest.stories-C45nig42.js.map