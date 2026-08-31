import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CRw8NhXI.js";import{U as c,t as l}from"./system-B_eKYAdZ.js";import{c as u,i as d,l as f,n as p,t as m,u as h}from"./src-BjJ4N5e8.js";import{n as g,t as _}from"./styles.module-BJ59gSiF.js";var v,y,b,x,S,C;e((()=>{l(),m(),o(),h(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Uikit Product/Inputs & Forms/TogglesPredefined/ToggleCard`,id:`uikit-product-togglespredefined-togglecard`,component:d,parameters:{layout:`fullscreen`},args:{title:`Тариф Pro`,description:`100 ГБ хранилища, приоритетная поддержка`,size:u.M,disabled:!1,"data-test-id":f.card},argTypes:{value:{control:`text`},size:{control:`radio`,options:Object.values(u)},promoBadge:{control:`text`},emblem:{control:`select`,options:[`placeholder`],mapping:{placeholder:{icon:c}}}}},S={tags:[`dev`,`test`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(i,{children:`Кликабельная карточка выбора внутри ToggleGroup. Клик / Enter / Space переключает.`}),(0,v.jsx)(n,{align:`center`,children:(0,v.jsx)(`div`,{className:g.panel,children:(0,v.jsx)(p,{defaultValue:e.value,children:(0,v.jsx)(d,{...e})})})})]})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(f.card)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Кликабельная карточка выбора внутри ToggleGroup. Клик / Enter / Space переключает.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.panel}>
            <ToggleGroup defaultValue={args.value}>
              <ToggleCard {...args} />
            </ToggleGroup>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.card)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=ToggleCard.Playground.stories-8jYjYxhh.js.map