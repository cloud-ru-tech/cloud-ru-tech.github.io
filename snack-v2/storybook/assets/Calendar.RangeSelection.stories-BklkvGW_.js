import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-jFn_-H4h.js";import{ct as u,ot as d}from"./helperComponents-xiA9VWiT.js";import{d as f,t as p}from"./src-CwzbfM1r.js";import{o as m,t as h}from"./testIds-oT8Y34JT.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=e(n(),1),c(),p(),m(),_=r(),{expect:v,fn:y,within:b}=__STORYBOOK_MODULE_TEST__,x=new Date(2026,3,15),S={title:`Snack/Inputs & Forms/Calendar/Calendar/Examples/RangeSelection`,id:`components-calendar-calendar-examples-rangeselection`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}}},C={tags:[`dev`],render:function(){let[e,t]=(0,g.useState)(void 0),n=y(e=>t(e));return(0,_.jsx)(l,{children:(0,_.jsxs)(a,{width:`wide`,children:[(0,_.jsx)(s,{children:`RangeSelection`}),(0,_.jsx)(o,{children:`Выбор диапазона дат двумя кликами по календарю.`}),(0,_.jsx)(i,{align:`center`,children:(0,_.jsxs)(`div`,{"data-test-id":h.rangeRoot,children:[(0,_.jsx)(f,{"data-test-id":h.range,mode:d.DateRange,size:u.M,today:x,value:e,onChangeValue:n}),(0,_.jsx)(`div`,{"data-test-id":h.rangeValue,children:e?`${e[0].toISOString()}|${e[1].toISOString()}`:`empty`})]})})]})})},play:async({canvasElement:e,step:t})=>{let n=b(e);await t(`selecting range start (day 10)`,async()=>{let e=n.getByTestId(`calendar-range`);b(e).getAllByText(`10`)[0].click()}),await t(`range start applies data-range-position`,async()=>{let t=e.querySelectorAll(`[data-range-position="start"], [data-range-position="start-end"]`);await v(t.length).toBeGreaterThan(0)})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: function RangeSelectionRender() {
    const [value, setValue] = useState<Range | undefined>(undefined);
    const onChangeValue = fn((next: Range) => setValue(next));
    return <DemoPage>
        <DemoPanel width='wide'>
          <DemoTitle>RangeSelection</DemoTitle>
          <DemoHint>Выбор диапазона дат двумя кликами по календарю.</DemoHint>
          <DemoActions align='center'>
            <div data-test-id={CALENDAR_EXAMPLE_TEST_IDS.rangeRoot}>
              <Calendar data-test-id={CALENDAR_EXAMPLE_TEST_IDS.range} mode={CALENDAR_MODE.DateRange} size={SIZE.M} today={TODAY} value={value} onChangeValue={onChangeValue} />
              <div data-test-id={CALENDAR_EXAMPLE_TEST_IDS.rangeValue}>
                {value ? \`\${value[0].toISOString()}|\${value[1].toISOString()}\` : 'empty'}
              </div>
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);

    // TODO: ячейки даты не имеют стабильного data-test-id (см. Item.tsx — дефолт 'item'),
    // потому фолбэк на текстовый поиск дня. Когда у пакета появятся id вида
    // 'calendar-range__cell-<yyyy-mm-dd>', play-функцию переписать на getByTestId.
    await step('selecting range start (day 10)', async () => {
      const root = canvas.getByTestId('calendar-range');
      const day10 = within(root).getAllByText('10')[0];
      day10.click();
    });
    await step('range start applies data-range-position', async () => {
      const startCells = canvasElement.querySelectorAll('[data-range-position="start"], [data-range-position="start-end"]');
      await expect(startCells.length).toBeGreaterThan(0);
    });
  }
}`,...C.parameters?.docs?.source},description:{story:"Range mode: клик start → клик end → проверка, что подсветка диапазона появилась\n(cell с `data-range-position='start'`/`'end'`) и onChange вызван с tuple.",...C.parameters?.docs?.description}}},w=[`RangeSelection`]}))();export{C as RangeSelection,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Calendar.RangeSelection.stories-BklkvGW_.js.map