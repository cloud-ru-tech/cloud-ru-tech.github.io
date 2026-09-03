import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bl-uTAel.js";import{g as c,n as l,r as u,t as d}from"./testIds-BXYTK0UR.js";var f,p,m,h,g,_;e((()=>{u(),o(),l(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Layout & containers/PageLayout/DefaultSubtitle`,id:`uikit-product-pagelayout-defaultsubtitle`,component:c,parameters:{layout:`fullscreen`},args:{label:`ID проекта`,value:{content:`prj-9f2c-1a8b-4d7e`,valueToCopy:`prj-9f2c-1a8b-4d7e`},labelTooltip:`Уникальный идентификатор проекта`,"data-test-id":d.defaultSubtitle.root},argTypes:{value:{table:{disable:!0}},labelTooltip:{table:{disable:!0}}}},g={tags:[`dev`,`test`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Подзаголовок с подписью, копируемым значением и тултипом-подсказкой.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await p(m(e).getByTestId(d.defaultSubtitle.root)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Подзаголовок с подписью, копируемым значением и тултипом-подсказкой.</DemoHint>
        <DemoActions align='center'>
          <DefaultSubtitle {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.defaultSubtitle.root)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=DefaultSubtitle.Playground.stories-CGO6GOMZ.js.map