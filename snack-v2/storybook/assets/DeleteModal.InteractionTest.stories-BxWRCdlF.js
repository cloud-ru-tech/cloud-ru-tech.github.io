import{i as e}from"./preload-helper-CCSz8wUY.js";import{O as t,t as n}from"./src-B6R5qTgW.js";import{o as r,t as i,u as a}from"./src-BOmBj6Sg.js";var o,s,c,l,u,d,f,p,m;e((()=>{n(),i(),{expect:o,fn:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d=s(),f={title:`Uikit Product/Overlays/ModalPredefined/DeleteModal/Tests/Interaction`,id:`uikit-product-modalpredefined-deletemodal-tests-interaction`,component:r,parameters:{layout:`fullscreen`,controls:{disable:!0}}},p={tags:[`test`,`dev`],args:{open:!0,onClose:s(),objectType:`виртуальную машину`,confirmable:!0,confirmText:`vm-production-01`,onDelete:d},play:async({step:e})=>{let n=u(document.body);await e(`invalid confirm keeps modal open`,async()=>{await c.click(n.getByTestId(a.approveButton)),await l(()=>o(n.getByTestId(a.deleteModal)).toBeVisible()),await o(d).not.toHaveBeenCalled()}),await e(`valid confirm calls onDelete`,async()=>{let e=n.getByTestId(a.confirmInput);await c.type(u(e).getByTestId(t.fieldComboInput),`vm-production-01`),await c.click(n.getByTestId(a.approveButton)),await l(()=>o(d).toHaveBeenCalled())})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    open: true,
    onClose: fn(),
    objectType: 'виртуальную машину',
    confirmable: true,
    confirmText: 'vm-production-01',
    onDelete
  },
  play: async ({
    step
  }) => {
    const body = within(document.body);
    await step('invalid confirm keeps modal open', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.approveButton));
      await waitFor(() => expect(body.getByTestId(TEST_IDS.deleteModal)).toBeVisible());
      await expect(onDelete).not.toHaveBeenCalled();
    });
    await step('valid confirm calls onDelete', async () => {
      const inputRoot = body.getByTestId(TEST_IDS.confirmInput);
      await userEvent.type(within(inputRoot).getByTestId(FIELDS_TEST_IDS.fieldComboInput), 'vm-production-01');
      await userEvent.click(body.getByTestId(TEST_IDS.approveButton));
      await waitFor(() => expect(onDelete).toHaveBeenCalled());
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`InteractionTest`]}))();export{p as InteractionTest,m as __namedExportsOrder,f as default};
//# sourceMappingURL=DeleteModal.InteractionTest.stories-BxWRCdlF.js.map