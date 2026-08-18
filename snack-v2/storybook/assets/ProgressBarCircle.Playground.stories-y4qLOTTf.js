import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-jFn_-H4h.js";import{c,d as l,l as u,n as d,t as f}from"./src-mPDiXA59.js";import{t as p}from"./testIds-Bz4J3O4f.js";var m,h,g,_,v,y;e((()=>{f(),o(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Feedback/ProgressBar/ProgressBarCircle`,id:`components-progressbar-progressbarcircle`,component:d,parameters:{layout:`fullscreen`},args:{progress:50,size:u.S,appearance:c.Primary,"data-test-id":l.progressBarCircle.root},argTypes:{progress:{control:{type:`range`,min:0,max:100,step:1},description:`Процент загрузки от 0 до 100`},size:{control:`radio`,options:Object.values(u),description:`Размер индикатора: xs / s`},appearance:{control:`select`,options:Object.values(c),description:`Цветовая схема индикатора`},className:{control:`text`,description:`CSS-класс`}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Круговой индикатор прогресса.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(d,{...e})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(l.progressBarCircle.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Круговой индикатор прогресса.</DemoHint>
        <DemoActions align='center'>
          <ProgressBarCircle {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.progressBarCircle.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=ProgressBarCircle.Playground.stories-y4qLOTTf.js.map