import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-Ckcblt1a.js";import{f as s,m as c,o as l,p as u,t as d}from"./src-CQJqR30O.js";import{n as f,t as p}from"./testIds-CYgKL79G.js";import{o as m,u as h}from"./mockData-C7FM8FqB.js";import{n as g,t as _}from"./LayeredChart-BJs8HCVO.js";var v,y,b=e((()=>{v=`_chart_8ya0o_1`,y={chart:v}})),x,S,C,w,T,E;e((()=>{d(),o(),h(),f(),g(),b(),x=t(),{expect:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Uikit Product/Data display/Charts/InteractiveChart`,id:`uikit-product-charts-interactivechart`,component:l,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{data:m,type:c.Default,title:`Запросы к API`,drawStyle:s.Line,lineInterpolation:u.Spline,width:720,height:360,"data-test-id":p.interactiveChart.root},argTypes:{title:{name:`[Stories]: title`,control:`text`},width:{name:`[Stories]: width`,control:`number`},height:{name:`[Stories]: height`,control:`number`},drawStyle:{name:`[Stories]: drawStyle`,control:`select`,options:Object.values(s),if:{arg:`type`,eq:c.Default}},lineInterpolation:{name:`[Stories]: lineInterpolation`,control:`select`,options:Object.values(u),if:{arg:`drawStyle`,eq:s.Line}},data:{table:{disable:!0}},options:{table:{disable:!0}}}},T={tags:[`dev`,`test`],render:e=>(0,x.jsx)(r,{children:(0,x.jsxs)(a,{width:`fluid`,children:[(0,x.jsx)(i,{children:`Playground`}),(0,x.jsx)(n,{children:`Выделение мышью и колесо — zoom, средняя кнопка — сдвиг по оси X, двойной клик — сброс. Серии собраны хуком useLayer.`}),(0,x.jsx)(`div`,{className:y.chart,children:(0,x.jsx)(_,{...e})})]})}),play:async({canvasElement:e})=>{await S(await C(e).findByTestId(p.interactiveChart.plot)).toBeVisible()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Выделение мышью и колесо — zoom, средняя кнопка — сдвиг по оси X, двойной клик — сброс. Серии собраны хуком
          useLayer.
        </DemoHint>
        <div className={styles.chart}>
          <LayeredChart {...args} />
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByTestId(TEST_IDS.interactiveChart.plot)).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}))();export{T as Playground,E as __namedExportsOrder,w as default};
//# sourceMappingURL=InteractiveChart.Playground.stories-CytPDmIj.js.map