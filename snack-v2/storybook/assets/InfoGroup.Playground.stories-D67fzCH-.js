import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C2bZDhP2.js";import{n as c,o as l,r as u,t as d}from"./testIds-_V9wpmGA.js";var f,p,m,h,g,_;e((()=>{o(),u(),c(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Data display/InfoRow/InfoGroup`,id:`uikit-product-inforow-infogroup`,component:l,parameters:{layout:`fullscreen`},args:{data:{name:`Item`,active:!0,count:3},loading:!1,columns:`single`,width:`fixed`,"data-test-id":d.infoGroup.root,items:[{label:`Name`,accessorKey:`name`},{label:`Active`,accessorKey:`active`},{label:`Count`,accessorKey:`count`}]},argTypes:{data:{control:`object`,description:`Данные строк`},items:{table:{disable:!0}},loading:{control:`boolean`},columns:{control:`radio`,options:[`single`,`double`]},width:{control:`radio`,options:[`fixed`,`full`]},formatBoolean:{table:{disable:!0}},className:{control:`text`}}},g={tags:[`dev`,`test`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`wide`,children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Группа InfoRow, собранная декларативно из items + data.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(l,{...e})})]})}),play:async({canvasElement:e})=>{await p(m(e).getByTestId(d.infoGroup.root)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Группа InfoRow, собранная декларативно из items + data.</DemoHint>
        <DemoActions align='center'>
          <InfoGroup {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.infoGroup.root)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=InfoGroup.Playground.stories-D67fzCH-.js.map