import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-aHi-eIAa.js";import{i as c,l,n as u,t as d,u as f}from"./src-DHHH7T2B.js";var p,m,h,g,_,v,y;e((()=>{d(),o(),f(),p=t(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Inputs & Forms/TogglesPredefined/ToggleCard/Tests/Interaction`,id:`uikit-product-togglespredefined-togglecard-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Тариф Pro`,description:`100 ГБ хранилища`,value:`pro`,"data-test-id":l.card}},v={tags:[`test`,`dev`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Клик / Enter по карточке выбирает её значение в ToggleGroup.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(u,{children:(0,p.jsx)(c,{...e})})})]})}),play:async({canvasElement:e,step:t})=>{let n=g(e).getByTestId(l.card);await t(`initial: card is not checked`,async()=>{await m(n).toHaveAttribute(`aria-checked`,`false`)}),await t(`click: selects the card`,async()=>{await h.click(n),await m(n).toHaveAttribute(`aria-checked`,`true`)}),await t(`keyboard: Enter toggles selection off`,async()=>{n.focus(),await h.keyboard(`{Enter}`),await m(n).toHaveAttribute(`aria-checked`,`false`)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик / Enter по карточке выбирает её значение в ToggleGroup.</DemoHint>
        <DemoActions align='center'>
          <ToggleGroup>
            <ToggleCard {...args} />
          </ToggleGroup>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId(TEST_IDS.card);
    await step('initial: card is not checked', async () => {
      await expect(card).toHaveAttribute('aria-checked', 'false');
    });
    await step('click: selects the card', async () => {
      await userEvent.click(card);
      await expect(card).toHaveAttribute('aria-checked', 'true');
    });
    await step('keyboard: Enter toggles selection off', async () => {
      card.focus();
      await userEvent.keyboard('{Enter}');
      await expect(card).toHaveAttribute('aria-checked', 'false');
    });

    // Space-step намеренно опущен — userEvent в storybook-test browser-окружении
    // не доводит keyUp Space до нативной активации div'а. Enter покрывает клавиатуру.
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=ToggleCard.InteractionTest.stories-C8KleJkp.js.map