import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-B_qPyvgJ.js";import{c as s,t as c}from"./src-7kD7VEy8.js";import{n as l,t as u}from"./testIds-r8QybYTs.js";import{a as d,i as f,n as p,r as m,u as h}from"./mockData-C7FM8FqB.js";import{n as g,t as _}from"./styles.module-ee_G-nQ9.js";var v,y,b,x,S,C;e((()=>{c(),o(),h(),l(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Uikit Product/Data display/Charts/HeatMapChart`,id:`uikit-product-charts-heatmapchart`,component:s,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{data:p,options:{title:`Загрузка CPU, %`,height:480,domain:m,formatter:e=>`${e}%`,axes:{xAxis:{label:`Время`,ticks:f,position:`bottom`},yAxis:{label:`День`,ticks:d}},legend:{show:!0}},"data-test-id":u.heatMapChart.root}},S={tags:[`dev`,`test`],render:e=>(0,v.jsx)(r,{children:(0,v.jsxs)(a,{width:`fluid`,children:[(0,v.jsx)(i,{children:`Playground`}),(0,v.jsx)(n,{children:"Цвет ячейки — линейная шкала по `domain`, цвет текста подбирается по контрасту с фоном."}),(0,v.jsx)(`div`,{className:g.chart,children:(0,v.jsx)(s,{...e})})]})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(u.heatMapChart.root)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Цвет ячейки — линейная шкала по \`domain\`, цвет текста подбирается по контрасту с фоном.</DemoHint>
        <div className={styles.chart}>
          <HeatMapChart {...args} />
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.heatMapChart.root)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=HeatMapChart.Playground.stories-CXYcolIj.js.map