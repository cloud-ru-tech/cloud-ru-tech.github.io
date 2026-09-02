import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D4MTfTET.js";import{n as c,t as l}from"./src-Dl3itIT7.js";import{n as u,t as d}from"./testIds-D_lvWQXW.js";var f,p,m,h,g,_,v;e((()=>{l(),o(),u(),f=t(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Data display/AvatarDetail/Tests/Interaction`,id:`uikit-product-avatardetail-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},_={tags:[`test`,`dev`],args:{name:`John Doe`,contactData:`jdoe@example.com`,description:`Some text about the user`,"data-test-id":d.root},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по кнопке контактных данных копирует значение в буфер обмена.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({canvasElement:e,step:t})=>{let n=h(e).getByTestId(d.root),r=h(e).getByTestId(d.contactData);await t(`root is visible`,async()=>{await p(n).toBeVisible()}),await t(`contact data button is visible with label`,async()=>{await p(r).toBeVisible(),await p(r).toHaveTextContent(`jdoe@example.com`)}),await t(`click: contact data button is clickable`,async()=>{await m.click(r)}),await t(`keyboard: Tab focuses the contact data button`,async()=>{r.blur(),await m.tab(),await p(r).toHaveFocus()}),await t(`keyboard: Enter activates the contact data button`,async()=>{await m.keyboard(`{Enter}`)})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    name: 'John Doe',
    contactData: 'jdoe@example.com',
    description: 'Some text about the user',
    'data-test-id': TEST_IDS.root
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по кнопке контактных данных копирует значение в буфер обмена.</DemoHint>
        <DemoActions align='center'>
          <AvatarDetail {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const root = within(canvasElement).getByTestId(TEST_IDS.root);
    const contactButton = within(canvasElement).getByTestId(TEST_IDS.contactData);
    await step('root is visible', async () => {
      await expect(root).toBeVisible();
    });
    await step('contact data button is visible with label', async () => {
      await expect(contactButton).toBeVisible();
      await expect(contactButton).toHaveTextContent('jdoe@example.com');
    });
    await step('click: contact data button is clickable', async () => {
      await userEvent.click(contactButton);
    });
    await step('keyboard: Tab focuses the contact data button', async () => {
      contactButton.blur();
      await userEvent.tab();
      await expect(contactButton).toHaveFocus();
    });
    await step('keyboard: Enter activates the contact data button', async () => {
      await userEvent.keyboard('{Enter}');
    });
  }
}`,..._.parameters?.docs?.source}}},v=[`InteractionTest`]}))();export{_ as InteractionTest,v as __namedExportsOrder,g as default};
//# sourceMappingURL=AvatarDetail.InteractionTest.stories-ozpcZgyJ.js.map