import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CSZ3Qkp5.js";import{a as c,t as l}from"./src-CNfhYx-4.js";import{ct as u,lt as d,ot as f}from"./helperComponents-BkxpQDQn.js";import{o as p,t as m}from"./src-CfGoYGNq.js";import{o as h}from"./testIds-BsgJ0Ck_.js";var g,_,v,y,b,x;e((()=>{l(),o(),m(),h(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Inputs & Forms/Calendar/Calendar Dropdown/Examples/WithPresets`,id:`components-calendar-calendar-dropdown-examples-withpresets`,component:p,parameters:{layout:`fullscreen`}},b={tags:[`dev`,`test`],args:{mode:f.DateRange,size:u.S,presets:{enabled:!0},"data-test-id":d.calendarDropdown},render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`WithPresets`}),(0,g.jsx)(i,{children:`Режим date-range с пресетами периода (последняя неделя / месяц / квартал / …).`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(p,{...e,children:(0,g.jsx)(c,{"data-test-id":d.calendarDropdownTrigger,label:`Выбрать период`})})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(d.calendarDropdownTrigger)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    mode: CALENDAR_MODE.DateRange,
    size: SIZE.S,
    presets: {
      enabled: true
    },
    'data-test-id': TEST_IDS.calendarDropdown
  },
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>WithPresets</DemoTitle>
        <DemoHint>Режим date-range с пресетами периода (последняя неделя / месяц / квартал / …).</DemoHint>
        <DemoActions align='center'>
          <CalendarDropdown {...args}>
            <Button data-test-id={TEST_IDS.calendarDropdownTrigger} label='Выбрать период' />
          </CalendarDropdown>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.calendarDropdownTrigger)).toBeVisible();
  }
}`,...b.parameters?.docs?.source},description:{story:"Пресеты быстрого выбора периода доступны только в режиме `date-range`: передайте\n`presets={{ enabled: true }}` для набора по умолчанию (последняя неделя / месяц / квартал / год …)\nили `presets={{ items: [...] }}` для собственных пунктов. На десктопе секция пресетов встроена слева\nот календаря, на мобильной поверхности — отдельный под-экран (кнопка настроек в шапке шторки).",...b.parameters?.docs?.description}}},x=[`WithPresets`]}))();export{b as WithPresets,x as __namedExportsOrder,y as default};
//# sourceMappingURL=CalendarDropdown.WithPresets.stories-OtPJxKA4.js.map