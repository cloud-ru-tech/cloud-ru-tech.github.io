import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{n as c,s as l,t as u}from"./src-uhIaybZD.js";import{n as d,t as f}from"./testIds-CRiMbNYe.js";var p,m,h,g,_,v;e((()=>{u(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Feedback/Loader/Sun`,id:`components-loader-sun`,component:c,parameters:{layout:`fullscreen`},args:{size:l.M,"data-test-id":f.sun.root},argTypes:{size:{control:`radio`,options:Object.values(l),description:`Размер`}}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(r,{children:(0,p.jsxs)(a,{children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Полноэкранный лоадер с двумя размерами.`}),(0,p.jsx)(s,{align:`center`,children:(0,p.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(f.sun.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Полноэкранный лоадер с двумя размерами.</DemoHint>
        <DemoActions align='center'>
          <Sun {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.sun.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Sun.Playground.stories-B6FUDwuT.js.map