import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bd5xtg2w.js";import{V as c,t as l}from"./system-D2QEyDJQ.js";import{t as u,u as d,v as f}from"./src-BFk-LhrH.js";var p,m,h,g,_,v,y;e((()=>{l(),u(),o(),p=t(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Data display/CardPredefined/CardServiceLight/Tests/Interaction`,id:`uikit-product-cardpredefined-cardservicelight-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{title:`Мой сервис`,icon:(0,p.jsx)(c,{size:24}),favorite:{enabled:!0,visibilityStrategy:f.always},"data-test-id":`card-service-light`}},v={tags:[`test`,`dev`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`ArrowRight/ArrowLeft переключают фокус между карточкой и кнопкой «Избранное».`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(d,{...e})})]})}),play:async({canvasElement:e,step:t})=>{let n=g(e),r=n.getByTestId(`card-service-light`),i=n.getByTestId(`card-service-light__favorite-native-input`);await t(`keyboard: ArrowRight на карточке → фокус переходит на Favourite`,async()=>{r.focus(),await h.keyboard(`{ArrowRight}`),await m(i).toHaveFocus()}),await t(`keyboard: ArrowLeft на Favourite → фокус возвращается на карточку`,async()=>{await h.keyboard(`{ArrowLeft}`),await m(r).toHaveFocus()})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>ArrowRight/ArrowLeft переключают фокус между карточкой и кнопкой «Избранное».</DemoHint>
        <DemoActions align='center'>
          <CardServiceLight {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-service-light');
    // Фокус уходит на нативный \`<input>\` внутри Favourite (favouriteRef → inputRef),
    // а не на его корневой \`<span>\` — адресуем именно input.
    const favourite = canvas.getByTestId('card-service-light__favorite-native-input');
    await step('keyboard: ArrowRight на карточке → фокус переходит на Favourite', async () => {
      card.focus();
      await userEvent.keyboard('{ArrowRight}');
      await expect(favourite).toHaveFocus();
    });
    await step('keyboard: ArrowLeft на Favourite → фокус возвращается на карточку', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await expect(card).toHaveFocus();
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=CardServiceLight.InteractionTest.stories-DTWq4cbn.js.map