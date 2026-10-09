import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{On as n,d as r,f as i,g as a,kn as o,p as s,t as c,u as l}from"./iframe-9PX31bxi.js";import{a as u,t as d}from"./src-C_feWZHK.js";import{ct as f,lt as p,ut as m}from"./helperComponents-DtAGssM3.js";import{n as h,t as g}from"./src-DWr3kFSx.js";import{o as _}from"./testIds-URkpLHaZ.js";var v,y,b,x,S,C,w;e((()=>{d(),c(),o(),g(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Inputs & Forms/Calendar/Time Picker Dropdown`,id:`components-calendar-time-picker-dropdown`,component:h,parameters:{readme:{content:n},layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=23720-29347&m=dev`}}},S=e=>(0,v.jsx)(i,{children:(0,v.jsxs)(s,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(r,{children:`Кнопка-триггер с выпадающим выбором времени.`}),(0,v.jsx)(l,{align:`center`,children:(0,v.jsx)(h,{...e,children:(0,v.jsx)(u,{"data-test-id":p.timePickerDropdownTrigger,label:`Открыть TimePickerDropdown`})})})]})}),C={tags:[`dev`,`test`],args:{size:f.S,showSeconds:!0,trigger:`click`,closeOnApply:!0,footerMode:m.CurrentTimeAndApply,placement:`bottom-start`,"data-test-id":p.timePickerDropdown},argTypes:{onChangeValue:{table:{disable:!0}},onFocusLeave:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},className:{table:{disable:!0}},children:{table:{disable:!0}},today:{table:{disable:!0}},fitToContainer:{table:{disable:!0}},size:{control:`radio`,options:Object.values(f)},trigger:{control:`radio`,options:[`click`,`hover`,`focus`]},placement:{control:`select`,options:[`top-start`,`top`,`top-end`,`bottom-start`,`bottom`,`bottom-end`,`left`,`right`]},closeOnApply:{control:`boolean`},footerMode:{control:`radio`,options:Object.values(m)}},render:S,play:async({canvasElement:e})=>{await y(b(e).getByTestId(`time-picker-dropdown-trigger`)).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    size: SIZE.S,
    showSeconds: true,
    trigger: 'click',
    closeOnApply: true,
    footerMode: TIME_PICKER_FOOTER_MODE.CurrentTimeAndApply,
    placement: 'bottom-start',
    'data-test-id': TEST_IDS.timePickerDropdown
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
    fitToContainer: {
      table: {
        disable: true
      }
    },
    size: {
      control: 'radio',
      options: Object.values(SIZE)
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
    footerMode: {
      control: 'radio',
      options: Object.values(TIME_PICKER_FOOTER_MODE)
    }
  },
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId('time-picker-dropdown-trigger')).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,x as default};
//# sourceMappingURL=TimePickerDropdown.Playground.stories-CIIpnyPs.js.map