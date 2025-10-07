import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as T}from"./index-DUmpqB7p.js";import{r as u}from"./index-CJ_LmFaV.js";import{c as g,a as M,b as N,s as r}from"./styles.module-CtLWEOzC.js";import{S as a}from"./TimePickerBase-3LO0zow0.js";import{T as k}from"./TimePicker-BtzFuppk.js";import{S as L}from"./Scroll-CyeY1SIb.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./hooks-C-QfHKcH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-B_KgwA95.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-DO2qqcLs.js";import"./index-DJKNHUMM.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-Sklt2bcB.js";import"./index-BEuzvn4S.js";import"./index-BRR1gMd_.js";import"./Dropdown-Dd0OUUBI.js";import"./index-Clv-rw5D.js";import"./index-CWV_8VIe.js";import"./LocaleProvider-B4VrUkyw.js";import"./index-D5mgDZkw.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-ChgE300v.js";import"./ButtonTonal-iCs5y4Ch.js";import"./utils-CFMmSnRl.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-_iBMQjFy.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-CHerW9fL.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-ChndVmuz.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-2jDCmCn-.js";import"./List-C0Lj8xs6.js";const Ne={title:"Components/Calendar/Time Picker",component:k},_={[a.S]:r.scroll_timepicker_s,[a.M]:r.scroll_timepicker_m,[a.L]:r.scroll_timepicker_l},E=({todayHours:d,todayMinutes:c,todaySeconds:b,valueHours:m,valueMinutes:s,valueSeconds:l,...o})=>{const p=u.useMemo(()=>[m,s,l].every(n=>n===void 0)?void 0:{hours:m,minutes:s,seconds:l},[m,s,l]),[e,y]=u.useState(p);u.useEffect(()=>{y(p)},[p]);const C=n=>{var v;y(n),(v=o.onChangeValue)==null||v.call(o,n)},x=[d,c,b].every(n=>n===void 0)?void 0:new Date(0,0,0,d,c,b),P={...o,today:x,value:e,onChangeValue:C},j=String(e==null?void 0:e.hours).padStart(2,"0"),w=String(e==null?void 0:e.minutes).padStart(2,"0"),F=String(e==null?void 0:e.seconds).padStart(2,"0");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:T(r.story,_[o.size||a.M]),children:t.jsx(L,{children:t.jsx(k,{...P})})}),t.jsx("div",{className:r.valueHolder,"data-test-id":"timepicker-value-holder",children:e?`${j}:${w}:${F}`:""})]})},i={render:E,args:{showSeconds:!0,size:a.M,fitToContainer:!0},argTypes:{value:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},onChangeValue:{table:{disable:!0}},onFocusLeave:{table:{disable:!0}},buildCellProps:{table:{disable:!0}},style:{table:{disable:!0}},defaultValue:{table:{disable:!0}},locale:{table:{disable:!0}},className:{table:{disable:!0}},today:{table:{disable:!0}},todayHours:{name:"[today] hours",control:{type:"number"}},todayMinutes:{name:"[today] minutes",control:{type:"number"}},todaySeconds:{name:"[today] seconds",control:{type:"number"}},valueHours:{name:"[value] hours",control:{type:"number"}},valueMinutes:{name:"[value] minutes",control:{type:"number"}},valueSeconds:{name:"[value] seconds",control:{type:"number"}}},parameters:{readme:{sidebar:[`Latest version: ${g.version}`,M,N]},packageName:g.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design"}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    showSeconds: true,
    size: SIZE.M,
    fitToContainer: true
  },
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    navigationStartRef: {
      table: {
        disable: true
      }
    },
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
    buildCellProps: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    locale: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    today: {
      table: {
        disable: true
      }
    },
    todayHours: {
      name: '[today] hours',
      control: {
        type: 'number'
      }
    },
    todayMinutes: {
      name: '[today] minutes',
      control: {
        type: 'number'
      }
    },
    todaySeconds: {
      name: '[today] seconds',
      control: {
        type: 'number'
      }
    },
    valueHours: {
      name: '[value] hours',
      control: {
        type: 'number'
      }
    },
    valueMinutes: {
      name: '[value] minutes',
      control: {
        type: 'number'
      }
    },
    valueSeconds: {
      name: '[value] seconds',
      control: {
        type: 'number'
      }
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design'
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};export{Ne as default,i as timePicker};
