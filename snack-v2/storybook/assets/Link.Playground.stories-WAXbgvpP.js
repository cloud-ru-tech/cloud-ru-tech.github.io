import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bb1kR6xz.js";import{a as c,i as l,n as u,t as d}from"./src-hNTg9l4q.js";import{n as f,t as p}from"./testIds-DcIafzaH.js";var m,h,g,_,v,y;e((()=>{d(),o(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Actions/Link`,id:`components-link`,component:u,parameters:{layout:`fullscreen`},args:{label:`Link`,appearance:l.Primary,roleAppearance:c.Regular,insideText:!1,underlined:!1,href:`https://example.com`,className:``,"data-test-id":p.root},argTypes:{label:{control:`text`,description:`Текст ссылки`},appearance:{control:`select`,options:Object.values(l),description:`Цветовая схема`},roleAppearance:{control:`radio`,options:Object.values(c),description:`Роль применения appearance: regular / onAccent`},insideText:{control:`boolean`,description:`Ссылка внутри текста`},underlined:{control:`boolean`,description:`Подчёркивание`},truncateVariant:{control:`radio`,options:[`end`,`middle`],description:`Вариант обрезания строки`}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Ссылка с appearance, ролью его применения и поведением внутри текста.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(u,{...e})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(p.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Ссылка с appearance, ролью его применения и поведением внутри текста.</DemoHint>
        <DemoActions align='center'>
          <Link {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Link.Playground.stories-WAXbgvpP.js.map