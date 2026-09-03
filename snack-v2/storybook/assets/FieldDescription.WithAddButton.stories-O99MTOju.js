import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bb1kR6xz.js";import{M as c,j as l,t as u,w as d}from"./src-DvtpPeOO.js";import{n as f,t as p}from"./styles.module-CmSQ0sfZ.js";var m,h,g,_,v,y;e((()=>{u(),o(),c(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldDescription/Examples/WithAddButton`,id:`uikit-product-fieldspredefined-fielddescription-examples-withaddbutton`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}}},v={tags:[`dev`,`test`],render:()=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`WithAddButton`}),(0,m.jsx)(i,{children:"Опциональное поле в режиме `addButton`: вместо textarea показывается кнопка «Добавить описание», клик по ней раскрывает поле."}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(`div`,{className:f.panel,children:(0,m.jsx)(d,{addButton:!0,"data-test-id":l.fieldDescription})})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(l.fieldDescriptionAddButton)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>WithAddButton</DemoTitle>
        <DemoHint>
          Опциональное поле в режиме \`addButton\`: вместо textarea показывается кнопка «Добавить описание», клик по ней
          раскрывает поле.
        </DemoHint>
        <DemoActions align='center'>
          <div className={styles.panel}>
            <FieldDescription addButton data-test-id={TEST_IDS.fieldDescription} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  // Раскрытие поля по клику проверяется в tests/FieldDescription.InteractionTest — пример
  // остаётся в исходном состоянии (кнопка «Добавить описание»).
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldDescriptionAddButton)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`WithAddButton`]}))();export{v as WithAddButton,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=FieldDescription.WithAddButton.stories-O99MTOju.js.map