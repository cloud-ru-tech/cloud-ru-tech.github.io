import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C96OK3Oq.js";import{ct as c,ot as l}from"./helperComponents-CMlmcZx-.js";import{d as u,t as d}from"./src-C-ri4-eB.js";import{o as f,t as p}from"./testIds-NpDark-T.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{o(),d(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_=new Date(2026,3,15),v=new Date(2026,3,10),y=new Date(2026,3,20),b=(e,t)=>{if(t!==`month`)return{isDisabled:!1};let n=e.valueOf();return{isDisabled:n<v.valueOf()||n>y.valueOf()}},x={title:`Snack/Inputs & Forms/Calendar/Calendar/Examples/MinMaxDisabled`,id:`components-calendar-calendar-examples-minmaxdisabled`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`dev`,`test`],render:()=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`wide`,children:[(0,m.jsx)(a,{children:`MinMaxDisabled`}),(0,m.jsx)(i,{children:`Дни вне допустимого диапазона помечаются как disabled.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(`div`,{children:(0,m.jsx)(u,{"data-test-id":p.minMax,mode:l.Date,size:c.M,today:_,value:new Date(2026,3,15),buildCellProps:b})})})]})}),play:async({canvasElement:e})=>{let t=g(e);await h(t.getByTestId(p.minMax)).toBeVisible();let n=e.querySelectorAll(`[data-disabled]`);await h(n.length).toBeGreaterThan(0)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>MinMaxDisabled</DemoTitle>
        <DemoHint>Дни вне допустимого диапазона помечаются как disabled.</DemoHint>
        <DemoActions align='center'>
          <div>
            <Calendar data-test-id={CALENDAR_EXAMPLE_TEST_IDS.minMax} mode={CALENDAR_MODE.Date} size={SIZE.M} today={TODAY} value={new Date(2026, 3, 15)} buildCellProps={minMaxBuildCellProps} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(CALENDAR_EXAMPLE_TEST_IDS.minMax)).toBeVisible();

    // Внутри текущего месяца должны быть disabled-ячейки (дни вне [10..20]).
    const disabled = canvasElement.querySelectorAll('[data-disabled]');
    await expect(disabled.length).toBeGreaterThan(0);
  }
}`,...S.parameters?.docs?.source}}},C=[`MinMaxDisabled`]}))();export{S as MinMaxDisabled,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Calendar.MinMaxDisabled.stories-BP8UCBRa.js.map