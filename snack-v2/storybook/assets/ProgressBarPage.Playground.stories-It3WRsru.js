import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{c,d as l,i as u,t as d}from"./src-BKSP_Xd3.js";import{t as f}from"./testIds-BZong1lm.js";var p,m,h,g,_,v;e((()=>{d(),o(),f(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Feedback/ProgressBar/ProgressBarPage`,id:`components-progressbar-progressbarpage`,component:u,parameters:{layout:`fullscreen`},args:{inProgress:!0,animationDuration:200,incrementDuration:800,appearance:c.Primary,"data-test-id":l.progressBarPage.root},argTypes:{inProgress:{control:`boolean`,description:`Включен/выключен индикатор`},animationDuration:{control:{type:`number`,min:0,step:50},description:`Длительность анимации (мс)`},incrementDuration:{control:{type:`number`,min:0,step:100},description:`Время между шагами прогресса (мс)`},minimum:{control:{type:`number`,min:0,max:1,step:.1},description:`Минимальное значение прогресс-бара от 0 до 1`},appearance:{control:`select`,options:Object.values(c),description:`Цветовая схема индикатора`},className:{control:`text`,description:`CSS-класс`}}},_={tags:[`dev`,`test`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{width:`wide`,children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`ProgressBarPage рендерится поверх viewport-а (fixed top), не внутри demo-панели — узкая полоска видна по верхнему краю экрана.`}),(0,p.jsx)(n,{block:!0,children:(0,p.jsx)(u,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(l.progressBarPage.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          ProgressBarPage рендерится поверх viewport-а (fixed top), не внутри demo-панели — узкая полоска видна по
          верхнему краю экрана.
        </DemoHint>
        <DemoActions block>
          <ProgressBarPage {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.progressBarPage.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=ProgressBarPage.Playground.stories-It3WRsru.js.map