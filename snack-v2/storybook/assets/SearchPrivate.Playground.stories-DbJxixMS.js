import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{i as c,n as l,t as u}from"./src-DKSGnL0M.js";var d,f=e((()=>{d={root:`search-private`}})),p,m,h,g,_,v;e((()=>{u(),o(),f(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Foundation & utilities/SearchPrivate`,id:`components-searchprivate`,component:l,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{size:c.S,placeholder:`Поиск`,disabled:!1,loading:!1,showClearButton:!0,"data-test-id":d.root},argTypes:{size:{control:`radio`,options:Object.values(c)},placeholder:{control:`text`},disabled:{control:`boolean`},loading:{control:`boolean`},showClearButton:{control:`boolean`},afterContent:{table:{disable:!0}}}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Приватная база поискового инпута без декора.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(l,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(d.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Приватная база поискового инпута без декора.</DemoHint>
        <DemoActions align='center'>
          <SearchPrivate {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=SearchPrivate.Playground.stories-DbJxixMS.js.map