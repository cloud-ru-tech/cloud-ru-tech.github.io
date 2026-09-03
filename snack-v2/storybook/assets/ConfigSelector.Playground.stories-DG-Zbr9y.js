import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bl-uTAel.js";import{n as c,t as l}from"./src-BffFoicz.js";import{n as u,t as d}from"./testIds-SxN9IwLt.js";var f,p,m,h,g,_,v;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Inputs & Forms/ConfigSelector`,id:`uikit-product-configselector`,component:c,parameters:{layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/VWNiBRIUmVXIWYlLzMxcs6/Product-UI-Kit--variables-?node-id=3036-14250`}},args:{label:`Конфигурация`,checked:!1,available:!1,disabled:!1,availableTip:`Рекомендуемая опция`,disabledTip:`Опция недоступна`,onChange:m(),"data-test-id":d.root},argTypes:{availableTip:{control:`text`},disabledTip:{control:`text`},onChange:{table:{disable:!0}},tabIndex:{table:{disable:!0}}}},_={tags:[`dev`,`test`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:"Chip-toggle выбора опции конфигурации. Controlled — значением управляет проп `checked`."}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await p(h(e).getByTestId(d.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Chip-toggle выбора опции конфигурации. Controlled — значением управляет проп \`checked\`.</DemoHint>
        <DemoActions align='center'>
          <ConfigSelector {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=ConfigSelector.Playground.stories-DG-Zbr9y.js.map