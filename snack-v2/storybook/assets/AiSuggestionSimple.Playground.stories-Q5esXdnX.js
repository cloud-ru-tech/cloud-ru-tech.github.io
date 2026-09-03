import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{U as c,t as l}from"./system-DYmc6UG6.js";import{d as u,l as d,s as f,t as p,u as m}from"./src-BJOinkkh.js";import{t as h}from"./testIds-DshrKRio.js";var g,_,v,y,b,x,S;e((()=>{p(),l(),o(),h(),g=t(),{expect:_,fn:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`AI/Surfaces/AiSuggestion/AiSuggestionSimple`,id:`ai-aisuggestion-aisuggestionsimple`,component:f,parameters:{layout:`centered`,design:{type:`figma`,url:`https://www.figma.com/design/tCbbB5RUGyJeBRtjF3dt4d/AI-COMPONENTS?node-id=6450-3666`}},args:{label:`Label text`,icon:(0,g.jsx)(c,{}),appearance:d.Neutral,size:m.S,disabled:!1,onClick:v(),"data-test-id":u.root},argTypes:{label:{control:`text`,description:`Текст подсказки`},icon:{control:!1,description:`Иконка слева от текста`},appearance:{control:`radio`,options:Object.values(d),description:`Внешний вид (Figma: Primary)`},size:{control:`radio`,options:Object.values(m),description:`Размер (Figma: Mobile Off → s, Mobile On → m)`},disabled:{control:`boolean`,description:`Блокирует взаимодействие`},onClick:{action:`click`,description:`Выбор подсказки`}}},x={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Pill-чип AI-подсказки с иконкой и коротким текстом.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(f,{...e})})]})}),play:async({canvasElement:e})=>{await _(y(e).getByTestId(u.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Pill-чип AI-подсказки с иконкой и коротким текстом.</DemoHint>
        <DemoActions align='center'>
          <AiSuggestionSimple {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AiSuggestionSimple.Playground.stories-Q5esXdnX.js.map