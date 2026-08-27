import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BRJzdrhE.js";import{c,d as l,o as u,t as d,u as f}from"./src-Dr6srIoy.js";import{t as p}from"./testIds-lq8az88V.js";var m,h,g,_,v,y;e((()=>{d(),o(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Feedback/ProgressBar/ProgressBar`,id:`components-progressbar-progressbar`,component:u,parameters:{layout:`fullscreen`},args:{progress:50,size:f.S,appearance:c.Primary,"data-test-id":l.progressBar.root},argTypes:{progress:{control:{type:`range`,min:0,max:100,step:1},description:`Процент загрузки от 0 до 100`},size:{control:`radio`,options:Object.values(f),description:`Размер индикатора: xs / s`},appearance:{control:`select`,options:Object.values(c),description:`Цветовая схема индикатора`},className:{control:`text`,description:`CSS-класс`}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Линейный индикатор прогресса.`}),(0,m.jsx)(n,{block:!0,children:(0,m.jsx)(u,{...e})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(l.progressBar.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Линейный индикатор прогресса.</DemoHint>
        <DemoActions block>
          <ProgressBar {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.progressBar.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=ProgressBar.Playground.stories-BdJLs1C8.js.map