import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{d as c,m as l,t as u}from"./src-RP-dqaDD.js";import{n as d,t as f}from"./testIds-BQtrq6hu.js";var p,m,h,g,_,v;e((()=>{u(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Foundation & utilities/InputPrivate`,id:`components-inputprivate`,component:c,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{value:``,placeholder:`Введите значение`,disabled:!1,readonly:!1,type:l.Text,"data-test-id":f.root},argTypes:{type:{control:`select`,options:Object.values(l)},disabled:{control:`boolean`},readonly:{control:`boolean`}}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(r,{children:(0,p.jsxs)(a,{children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Базовый text input без обёрток-полей.`}),(0,p.jsx)(s,{align:`center`,children:(0,p.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{let t=h(e).getByTestId(f.root);await m(t).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Базовый text input без обёрток-полей.</DemoHint>
        <DemoActions align='center'>
          <InputPrivate {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByTestId(TEST_IDS.root);
    await expect(input).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=InputPrivate.Playground.stories-D624kxkK.js.map