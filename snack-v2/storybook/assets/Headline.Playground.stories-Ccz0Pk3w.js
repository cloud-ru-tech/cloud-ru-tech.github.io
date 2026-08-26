import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D1b9r8k6.js";import{a as c,t as l}from"./src-CiQB7kP4.js";import{n as u,t as d}from"./src-D7BEeE8Q.js";import{b as f,n as p,r as m,t as h}from"./testIds-DnWa7j3r.js";var g,_,v,y,b,x;e((()=>{l(),d(),m(),o(),p(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Layout/PageLayout/Headline`,id:`uikit-product-pagelayout-headline`,component:f,parameters:{layout:`fullscreen`},args:{title:`Виртуальные машины`,truncateTitle:!1,subtitle:`Управление инстансами проекта`,slotAfterTitle:(0,g.jsx)(u,{label:`Активно`,appearance:`green`}),actions:(0,g.jsx)(c,{label:`Создать`}),"data-test-id":h.headline.root},argTypes:{truncateTitle:{control:`boolean`},slotBeforeTitle:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},actions:{table:{disable:!0}},moreActions:{table:{disable:!0}},subtitle:{table:{disable:!0}}}},b={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Заголовок страницы со слотами: before/after, действия и подзаголовок.`}),(0,g.jsx)(n,{block:!0,children:(0,g.jsx)(f,{...e})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(h.headline.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Заголовок страницы со слотами: before/after, действия и подзаголовок.</DemoHint>
        <DemoActions block>
          <Headline {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.headline.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Headline.Playground.stories-Ccz0Pk3w.js.map