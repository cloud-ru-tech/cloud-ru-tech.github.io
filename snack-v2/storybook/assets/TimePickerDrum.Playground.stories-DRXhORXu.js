import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-DMWsC78w.js";import{ct as u,lt as d}from"./helperComponents-R-pQH022.js";import{c as f,l as p,t as m}from"./src-DsGlD5s6.js";import{o as h}from"./testIds-CISENdCS.js";import{r as g,t as _}from"./helpers-DMmMDRmL.js";import{n as v,t as y}from"./styles.module-CSawDpWO.js";function b(e){return new Intl.DateTimeFormat(`en-US`,{month:`long`,day:`numeric`,year:`numeric`}).format(e)}function x(e){if(e!==`all`)return e===`allowed`?{allowedHours:[...D]}:{minHour:12,minMinute:30,minSecond:30}}var S,C,w,T,E,D,O,k,A;t((()=>{S=e(n(),1),c(),m(),f(),g(),h(),y(),C=r(),{expect:w,within:T}=__STORYBOOK_MODULE_TEST__,E=`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=12303-72025&m=dev`,D=[9,10,11,12,13,15,16,17,18,19],O={title:`Snack/Inputs & Forms/Calendar/Time Picker Drum`,id:`components-calendar-time-picker-drum`,parameters:{layout:`fullscreen`,design:{type:`figma`,url:E}},args:{"data-test-id":d.timePickerDrum,size:u.S,showSeconds:!0,options:`all`},argTypes:{size:{control:`radio`,options:Object.values(u)},options:{description:"`all` — без `customOptions`; `allowed` — часы только 9–13 и 15–19; `min` — часы с 12, минуты и секунды с 30.",control:`radio`,options:[`all`,`allowed`,`min`]},selectedDateLabelAt:{name:`selectedDateLabel`,description:"Дата для подписи над дисплеем (как `dateValue` в Calendar Playground). Если не задано — берётся текущий момент `new Date()` (с секундами). Не кладите `Date.now()` в `args`: контрол `date` в Storybook нормализует значение к полуночи и обнуляет время. При смене даты синхронизирует барабан.",control:{type:`date`}},onHoursChange:{table:{disable:!0}},onMinutesChange:{table:{disable:!0}},onSecondsChange:{table:{disable:!0}}}},k={tags:[`dev`,`test`],render:function(e){let{selectedDateLabelAt:t,options:n,...r}=e,c=(0,S.useMemo)(()=>_(t)??new Date,[t]),u=(0,S.useMemo)(()=>x(n),[n]),[d,f]=(0,S.useState)(()=>c.getHours()),[m,h]=(0,S.useState)(()=>c.getMinutes()),[g,y]=(0,S.useState)(()=>c.getSeconds());(0,S.useEffect)(()=>{f(c.getHours()),h(c.getMinutes()),y(c.getSeconds())},[c]);let w=(0,S.useMemo)(()=>b(c),[c]);return(0,C.jsx)(l,{children:(0,C.jsxs)(a,{children:[(0,C.jsx)(s,{children:`Playground`}),(0,C.jsx)(o,{children:`Барабанный пикер времени с подписью даты сверху.`}),(0,C.jsx)(i,{align:`center`,children:(0,C.jsx)(`div`,{className:v.storyWrapper,children:(0,C.jsx)(`div`,{className:v.story,children:(0,C.jsx)(p,{...r,customOptions:u,hours:d,minutes:m,seconds:g,selectedDateLabel:w,onHoursChange:f,onMinutesChange:h,onSecondsChange:y})})})})]})})},play:async({canvasElement:e})=>{await w(T(e).getByTestId(d.timePickerDrum)).toBeVisible()}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: function PlaygroundRender(args) {
    const {
      selectedDateLabelAt,
      options,
      ...pickerArgs
    } = args;
    const baseDate = useMemo(() => coerceStoryDate(selectedDateLabelAt) ?? new Date(), [selectedDateLabelAt]);
    const customOptions = useMemo(() => customOptionsForMode(options), [options]);
    const [hours, setHours] = useState(() => baseDate.getHours());
    const [minutes, setMinutes] = useState(() => baseDate.getMinutes());
    const [seconds, setSeconds] = useState(() => baseDate.getSeconds());
    useEffect(() => {
      setHours(baseDate.getHours());
      setMinutes(baseDate.getMinutes());
      setSeconds(baseDate.getSeconds());
    }, [baseDate]);
    const selectedDateLabel = useMemo(() => formatDateOnlyFromCalendar(baseDate), [baseDate]);
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Playground</DemoTitle>
          <DemoHint>Барабанный пикер времени с подписью даты сверху.</DemoHint>
          <DemoActions align='center'>
            <div className={styles.storyWrapper}>
              <div className={styles.story}>
                <TimePickerDrum {...pickerArgs} customOptions={customOptions} hours={hours} minutes={minutes} seconds={seconds} selectedDateLabel={selectedDateLabel} onHoursChange={setHours} onMinutesChange={setMinutes} onSecondsChange={setSeconds} />
              </div>
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.timePickerDrum)).toBeVisible();
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`]}))();export{k as Playground,A as __namedExportsOrder,O as default};
//# sourceMappingURL=TimePickerDrum.Playground.stories-DRXhORXu.js.map