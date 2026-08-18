import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r,t as i}from"./classnames-iuquYaxc.js";import{bn as a,c as o,d as s,l as c,m as l,t as u,u as d,xn as f}from"./iframe-Du0zU9lI.js";import{n as p,t as m}from"./src-646ad5as.js";import{ct as h,lt as g,ot as _}from"./helperComponents-C-JHnsrD.js";import{d as v,t as y}from"./src-Bc0BwMJ8.js";import{o as b}from"./testIds-D8liAlVL.js";import{a as x,i as S,n as C,r as w,t as T}from"./helpers-GqxTo1yn.js";import{n as E,t as D}from"./styles.module-Cb4GyR_h.js";var O,k,A,j,M,N,P,F,I,L;t((()=>{m(),O=e(i(),1),k=e(n(),1),u(),f(),y(),b(),w(),D(),A=r(),{expect:j,within:M}=__STORYBOOK_MODULE_TEST__,N={[h.S]:E.scrollS,[h.M]:E.scrollM,[h.L]:E.scrollL},P={title:`Snack/Inputs & Forms/Calendar/Calendar`,id:`components-calendar-calendar`,component:v,parameters:{layout:`fullscreen`,readme:{content:a},design:{type:`figma`,url:`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=3839-193281&m=dev`}}},F=({mode:e,size:t,localeName:n,dateToday:r,dateValue:i,dateDefaultValue:a,rangeValueStart:u,rangeValueEnd:f,rangeDefaultValueStart:m,rangeDefaultValueEnd:y,showPeriodPresets:b,showSeconds:w,showHolidays:D,fitToContainer:j,withFixedSizes:M,withBackground:P,modeBuildCellProps:F})=>{let I=T(r),L=S(e,a,m,y),[R,z]=(0,k.useState)(()=>x(e,i,u,f)??L);(0,k.useEffect)(()=>{let t=x(e,i,u,f),n=S(e,a,m,y);z(t??n)},[e]);let B=e=>{z(e)},V=e===_.DateRange&&b?{enabled:!0}:void 0,H={size:t,locale:n?new Intl.Locale(n):void 0,today:I,showHolidays:D,fitToContainer:j,buildCellProps:C(F),"data-test-id":g.calendarPlayground},U;switch(e){case _.Date:U={...H,mode:_.Date,value:R,defaultValue:L,onChangeValue:B};break;case _.DateTime:U={...H,mode:_.DateTime,value:R,defaultValue:L,onChangeValue:B,showSeconds:w};break;case _.DateRange:U={...H,mode:_.DateRange,value:R,defaultValue:L,onChangeValue:B,presets:V};break;case _.Month:U={...H,mode:_.Month,value:R,onChangeValue:B};break;case _.MonthRange:U={...H,mode:_.MonthRange,value:R,defaultValue:L,onChangeValue:B};break;case _.Year:U={...H,mode:_.Year,value:R,onChangeValue:B};break;case _.YearRange:U={...H,mode:_.YearRange,value:R,defaultValue:L,onChangeValue:B};break;default:U={...H,mode:_.Date,value:R,defaultValue:L,onChangeValue:B}}let W=R instanceof Date&&R.valueOf(),G=Array.isArray(R)&&R[0].valueOf(),K=Array.isArray(R)&&R[1].valueOf();return(0,A.jsx)(d,{children:(0,A.jsxs)(s,{width:`wide`,children:[(0,A.jsx)(l,{children:`Playground`}),(0,A.jsx)(c,{children:`Календарь: date / date-time / date-range / month / month-range / year / year-range.`}),(0,A.jsx)(o,{align:`center`,children:(0,A.jsxs)(`div`,{className:(0,O.default)(E.story,M&&N[t||h.S]),"data-view-mode":e,"data-with-presets":!!V||void 0,"data-with-background":P||void 0,children:[(0,A.jsx)(p,{children:(0,A.jsx)(v,{...U})}),(0,A.jsxs)(`div`,{className:E.valueHolder,"data-test-id":g.calendarValueHolder,children:[W,G,K]})]},e)})]})})},I={tags:[`dev`,`test`],args:{mode:_.Date,size:h.S,withFixedSizes:!0,showPeriodPresets:!1,fitToContainer:!0,withBackground:!0,dateToday:new Date(Date.UTC(2026,3,15)).valueOf(),dateValue:new Date(Date.UTC(2026,3,10)).valueOf(),dateDefaultValue:void 0,rangeValueStart:new Date(Date.UTC(2026,3,1)).valueOf(),rangeValueEnd:new Date(Date.UTC(2026,3,20)).valueOf(),rangeDefaultValueStart:void 0,rangeDefaultValueEnd:void 0,showSeconds:!0,showHolidays:!1,localeName:void 0,modeBuildCellProps:`none`},argTypes:{mode:{control:`select`,options:Object.values(_)},size:{control:`radio`,options:Object.values(h)},localeName:{control:`select`,options:[`ru-RU`,`en-US`],description:`Локаль (оверрайдит значение из LocaleProvider/настройки сторибука)`},dateToday:{control:{type:`date`}},dateValue:{name:`value`,description:`Контролируемое value для одной даты (date, date-time, month, year)`,control:{type:`date`},if:{arg:`mode`,neq:_.DateRange}},dateDefaultValue:{name:`defaultValue`,description:"Только для режимов `date` и `date-time` (как в migration story)",control:{type:`date`},if:{arg:`mode`,neq:_.DateRange}},rangeValueStart:{name:`value start`,description:`Начало диапазона (date-range, month-range, year-range)`,control:{type:`date`}},rangeValueEnd:{name:`value end`,description:`Конец диапазона`,control:{type:`date`}},rangeDefaultValueStart:{name:`defaultValue start`,description:`Default для uncontrolled в режимах диапазона`,control:{type:`date`}},rangeDefaultValueEnd:{name:`defaultValue end`,control:{type:`date`}},showPeriodPresets:{name:`[Stories]: Show period presets for data-range mode`,if:{arg:`mode`,eq:_.DateRange}},showSeconds:{if:{arg:`mode`,eq:_.DateTime}},withFixedSizes:{name:`[Stories]: Enable fixed sizes of story wrapper`,control:{type:`boolean`}},withBackground:{name:`[Stories]: Enable white background for story wrapper`,control:{type:`boolean`}},modeBuildCellProps:{name:`[Stories]: buildCellProps preset`,control:`select`,options:[`none`,`for-tests`,`disable-past`],description:"`for-tests` отключает числа 1–13 в месячном виде (как migration E2E); `disable-past` — прошлые даты."}},render:F,play:async({canvasElement:e})=>{await j(M(e).getByTestId(g.calendarPlayground)).toBeVisible()}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    mode: CALENDAR_MODE.Date,
    size: SIZE.S,
    withFixedSizes: true,
    showPeriodPresets: false,
    fitToContainer: true,
    withBackground: true,
    dateToday: new Date(Date.UTC(2026, 3, 15)).valueOf(),
    dateValue: new Date(Date.UTC(2026, 3, 10)).valueOf(),
    dateDefaultValue: undefined,
    rangeValueStart: new Date(Date.UTC(2026, 3, 1)).valueOf(),
    rangeValueEnd: new Date(Date.UTC(2026, 3, 20)).valueOf(),
    rangeDefaultValueStart: undefined,
    rangeDefaultValueEnd: undefined,
    showSeconds: true,
    showHolidays: false,
    localeName: undefined,
    modeBuildCellProps: 'none'
  },
  argTypes: {
    mode: {
      control: 'select',
      options: Object.values(CALENDAR_MODE)
    },
    size: {
      control: 'radio',
      options: Object.values(SIZE)
    },
    localeName: {
      control: 'select',
      options: ['ru-RU', 'en-US'],
      description: 'Локаль (оверрайдит значение из LocaleProvider/настройки сторибука)'
    },
    dateToday: {
      control: {
        type: 'date'
      }
    },
    dateValue: {
      name: 'value',
      description: 'Контролируемое value для одной даты (date, date-time, month, year)',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        neq: CALENDAR_MODE.DateRange
      }
    },
    dateDefaultValue: {
      name: 'defaultValue',
      description: 'Только для режимов \`date\` и \`date-time\` (как в migration story)',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        neq: CALENDAR_MODE.DateRange
      }
    },
    rangeValueStart: {
      name: 'value start',
      description: 'Начало диапазона (date-range, month-range, year-range)',
      control: {
        type: 'date'
      }
    },
    rangeValueEnd: {
      name: 'value end',
      description: 'Конец диапазона',
      control: {
        type: 'date'
      }
    },
    rangeDefaultValueStart: {
      name: 'defaultValue start',
      description: 'Default для uncontrolled в режимах диапазона',
      control: {
        type: 'date'
      }
    },
    rangeDefaultValueEnd: {
      name: 'defaultValue end',
      control: {
        type: 'date'
      }
    },
    showPeriodPresets: {
      name: '[Stories]: Show period presets for data-range mode',
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
      }
    },
    showSeconds: {
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateTime
      }
    },
    withFixedSizes: {
      name: '[Stories]: Enable fixed sizes of story wrapper',
      control: {
        type: 'boolean'
      }
    },
    withBackground: {
      name: '[Stories]: Enable white background for story wrapper',
      control: {
        type: 'boolean'
      }
    },
    modeBuildCellProps: {
      name: '[Stories]: buildCellProps preset',
      control: 'select',
      options: ['none', 'for-tests', 'disable-past'],
      description: '\`for-tests\` отключает числа 1–13 в месячном виде (как migration E2E); \`disable-past\` — прошлые даты.'
    }
  },
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.calendarPlayground)).toBeVisible();
  }
}`,...I.parameters?.docs?.source}}},L=[`Playground`]}))();export{I as Playground,L as __namedExportsOrder,P as default};
//# sourceMappingURL=Calendar.Playground.stories-CgNtJBG0.js.map