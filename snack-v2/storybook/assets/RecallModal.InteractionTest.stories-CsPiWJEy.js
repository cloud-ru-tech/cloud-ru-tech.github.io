import{i as e}from"./preload-helper-CCSz8wUY.js";import{O as t,t as n}from"./src-Dsv0ppaz.js";import{i as r,t as i,u as a}from"./src-Cb2w5i1i.js";var o,s,c,l,u,d,f,p,m;e((()=>{n(),i(),{expect:o,fn:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d=s(),f={title:`Uikit Product/Overlays/ModalPredefined/RecallModal/Tests/Interaction`,id:`uikit-product-modalpredefined-recallmodal-tests-interaction`,component:r,parameters:{layout:`fullscreen`,controls:{disable:!0}}},p={tags:[`test`,`dev`],args:{open:!0,onClose:s(),confirmText:`recall-operation-01`,onRecall:d},play:async({step:e})=>{let n=u(document.body);await e(`invalid confirm keeps modal open`,async()=>{await c.click(n.getByTestId(a.approveButton)),await l(()=>o(n.getByTestId(a.recallModal)).toBeVisible()),await o(d).not.toHaveBeenCalled()}),await e(`valid confirm calls onRecall`,async()=>{let e=n.getByTestId(a.confirmInput);await c.type(u(e).getByTestId(t.fieldComboInput),`recall-operation-01`),await c.click(n.getByTestId(a.approveButton)),await l(()=>o(d).toHaveBeenCalled())})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    open: true,
    onClose: fn(),
    confirmText: 'recall-operation-01',
    onRecall
  },
  play: async ({
    step
  }) => {
    const body = within(document.body);
    await step('invalid confirm keeps modal open', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.approveButton));
      await waitFor(() => expect(body.getByTestId(TEST_IDS.recallModal)).toBeVisible());
      await expect(onRecall).not.toHaveBeenCalled();
    });
    await step('valid confirm calls onRecall', async () => {
      const inputRoot = body.getByTestId(TEST_IDS.confirmInput);
      await userEvent.type(within(inputRoot).getByTestId(FIELDS_TEST_IDS.fieldComboInput), 'recall-operation-01');
      await userEvent.click(body.getByTestId(TEST_IDS.approveButton));
      await waitFor(() => expect(onRecall).toHaveBeenCalled());
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`InteractionTest`]}))();export{p as InteractionTest,m as __namedExportsOrder,f as default};
//# sourceMappingURL=RecallModal.InteractionTest.stories-CsPiWJEy.js.map