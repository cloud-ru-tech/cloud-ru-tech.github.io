import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{Tn as n,c as r,d as i,l as a,m as o,t as s,u as c,wn as l}from"./iframe-n9OCAA8q.js";import{a as u,t as d}from"./src-DvQv5yPC.js";import{ct as f,lt as p}from"./helperComponents-Z6KEtW-4.js";import{n as m,t as h}from"./src-XVMe_tp0.js";import{o as g}from"./testIds-Da44yZg_.js";var _,v,y,b,x,S,C;e((()=>{d(),s(),n(),h(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Inputs & Forms/Calendar/Time Picker Dropdown`,id:`components-calendar-time-picker-dropdown`,component:m,parameters:{readme:{content:l},layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=23720-29347&m=dev`}}},x=e=>(0,_.jsx)(c,{children:(0,_.jsxs)(i,{children:[(0,_.jsx)(o,{children:`Playground`}),(0,_.jsx)(a,{children:`Кнопка-триггер с выпадающим выбором времени.`}),(0,_.jsx)(r,{align:`center`,children:(0,_.jsx)(m,{...e,children:(0,_.jsx)(u,{"data-test-id":p.timePickerDropdownTrigger,label:`Открыть TimePickerDropdown`})})})]})}),S={tags:[`dev`,`test`],args:{size:f.S,showSeconds:!0,trigger:`click`,closeOnApply:!0,placement:`bottom-start`,"data-test-id":p.timePickerDropdown},argTypes:{onChangeValue:{table:{disable:!0}},onFocusLeave:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},className:{table:{disable:!0}},children:{table:{disable:!0}},today:{table:{disable:!0}},fitToContainer:{table:{disable:!0}},size:{control:`radio`,options:Object.values(f)},trigger:{control:`radio`,options:[`click`,`hover`,`focus`]},placement:{control:`select`,options:[`top-start`,`top`,`top-end`,`bottom-start`,`bottom`,`bottom-end`,`left`,`right`]},closeOnApply:{control:`boolean`}},render:x,play:async({canvasElement:e})=>{await v(y(e).getByTestId(`time-picker-dropdown-trigger`)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    size: SIZE.S,
    showSeconds: true,
    trigger: 'click',
    closeOnApply: true,
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
    }
  },
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId('time-picker-dropdown-trigger')).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,b as default};
//# sourceMappingURL=TimePickerDropdown.Playground.stories-91tSq5Nc.js.map