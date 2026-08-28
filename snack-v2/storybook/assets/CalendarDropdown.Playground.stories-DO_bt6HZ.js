import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{Tn as n,c as r,d as i,l as a,m as o,t as s,u as c,wn as l}from"./iframe-CSZ3Qkp5.js";import{a as u,t as d}from"./src-CNfhYx-4.js";import{ct as f,lt as p,ot as m}from"./helperComponents-BkxpQDQn.js";import{o as h,t as g}from"./src-CfGoYGNq.js";import{o as _}from"./testIds-BsgJ0Ck_.js";var v,y,b,x,S,C,w;e((()=>{d(),s(),n(),g(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Inputs & Forms/Calendar/Calendar Dropdown`,id:`components-calendar-calendar-dropdown`,component:h,parameters:{readme:{content:l},layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=19439-215955&m=dev`}}},S=({showPeriodPresets:e,...t})=>{let n=t.mode===m.DateRange&&e?{enabled:!0}:void 0;return(0,v.jsx)(c,{children:(0,v.jsxs)(i,{children:[(0,v.jsx)(o,{children:`Playground`}),(0,v.jsx)(a,{children:`Кнопка-триггер с выпадающим календарём.`}),(0,v.jsx)(r,{align:`center`,children:(0,v.jsx)(h,{...t,presets:n,children:(0,v.jsx)(u,{"data-test-id":p.calendarDropdownTrigger,label:`Открыть CalendarDropdown`})})})]})})},C={tags:[`dev`,`test`],args:{mode:m.DateTime,size:f.S,showPeriodPresets:!1,showSeconds:!0,trigger:`click`,closeOnApply:!0,placement:`bottom-start`,fitToContainer:!1,"data-test-id":p.calendarDropdown},argTypes:{onChangeValue:{table:{disable:!0}},onFocusLeave:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},className:{table:{disable:!0}},children:{table:{disable:!0}},today:{table:{disable:!0}},bottomSlot:{table:{disable:!0}},fitToContainer:{table:{disable:!0}},trigger:{control:`radio`,options:[`click`,`hover`,`focus`]},placement:{control:`select`,options:[`top-start`,`top`,`top-end`,`bottom-start`,`bottom`,`bottom-end`,`left`,`right`]},closeOnApply:{control:`boolean`},showPeriodPresets:{name:`[Stories]: Show period presets for data-range mode`,if:{arg:`mode`,eq:m.DateRange}},mode:{control:`select`,options:Object.values(m)},size:{control:`radio`,options:Object.values(f)}},render:S,play:async({canvasElement:e})=>{await y(b(e).getByTestId(p.calendarDropdownTrigger)).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    mode: CALENDAR_MODE.DateTime,
    size: SIZE.S,
    showPeriodPresets: false,
    showSeconds: true,
    trigger: 'click',
    closeOnApply: true,
    placement: 'bottom-start',
    fitToContainer: false,
    'data-test-id': TEST_IDS.calendarDropdown
  },
  argTypes: {
    onChangeValue: {
      table: {
        disable: true
      }
    },
    onFocusLeave: {
      table: {
        disable: true
      }
    },
    navigationStartRef: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    today: {
      table: {
        disable: true
      }
    },
    bottomSlot: {
      table: {
        disable: true
      }
    },
    // В дропдауне контейнер = сам календарь (fit-content), а mobile-поверхность всегда fit-to-container,
    // поэтому переключение \`fitToContainer\` тут ни на что не влияет — прячем контрол (как в TimePickerDropdown).
    fitToContainer: {
      table: {
        disable: true
      }
    },
    trigger: {
      control: 'radio',
      options: ['click', 'hover', 'focus']
    },
    placement: {
      control: 'select',
      options: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end', 'left', 'right']
    },
    closeOnApply: {
      control: 'boolean'
    },
    showPeriodPresets: {
      name: '[Stories]: Show period presets for data-range mode',
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
      }
    },
    mode: {
      control: 'select',
      options: Object.values(CALENDAR_MODE)
    },
    size: {
      control: 'radio',
      options: Object.values(SIZE)
    }
  },
  render: Template,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.calendarDropdownTrigger)).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,x as default};
//# sourceMappingURL=CalendarDropdown.Playground.stories-DO_bt6HZ.js.map